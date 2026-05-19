import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { findSku } from "@/lib/products";
import type Stripe from "stripe";

export const runtime = "nodejs";

type CartLine = { skuId: string; quantity: number };
type LineItem = NonNullable<Stripe.Checkout.SessionCreateParams["line_items"]>[number];

function getOrigin(req: NextRequest): string {
  const envOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN;
  if (envOrigin) return envOrigin.replace(/\/$/, "");
  const proto = req.headers.get("x-forwarded-proto") ?? "https";
  const host = req.headers.get("host") ?? "waynewoodstock.com";
  return `${proto}://${host}`;
}

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Stripe is not configured on the server." },
      { status: 500 }
    );
  }

  let body: { items?: CartLine[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const items = Array.isArray(body.items) ? body.items : [];
  if (items.length === 0) {
    return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
  }

  const lineItems: LineItem[] = [];
  for (const line of items) {
    const sku = findSku(line.skuId);
    if (!sku) {
      return NextResponse.json(
        { error: `Unknown SKU: ${line.skuId}` },
        { status: 400 }
      );
    }
    const qty = Math.floor(Number(line.quantity));
    if (!Number.isFinite(qty) || qty < 1) {
      return NextResponse.json(
        { error: `Invalid quantity for ${sku.id}.` },
        { status: 400 }
      );
    }
    if (qty > sku.remaining) {
      return NextResponse.json(
        {
          error: `${sku.groupLabel} (${sku.size}) only has ${sku.remaining} in stock.`,
        },
        { status: 400 }
      );
    }
    lineItems.push({
      price: sku.priceId,
      quantity: qty,
      adjustable_quantity: {
        enabled: true,
        minimum: 1,
        maximum: sku.remaining,
      },
    });
  }

  const origin = getOrigin(req);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${origin}/merch/thanks?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#merch`,
      phone_number_collection: { enabled: true },
      allow_promotion_codes: false,
      billing_address_collection: "auto",
      submit_type: "pay",
      custom_text: {
        submit: {
          message:
            "We'll email or text you within 48 hours to coordinate pickup in the Waynewood / Fort Hunt neighborhood.",
        },
      },
      metadata: {
        source: "waynewoodstock.com",
        flow: "merch-closeout-2026",
      },
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe did not return a checkout URL." },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout session error:", err);
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { error: `Checkout failed: ${message}` },
      { status: 500 }
    );
  }
}
