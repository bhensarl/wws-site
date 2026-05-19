"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { SKUS, groupedSkus, type ProductSku } from "@/lib/products";

type CartState = Record<string, number>;

function formatUsd(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

function badgeFor(sku: ProductSku, inCart: number): {
  label: string;
  classes: string;
} | null {
  const left = sku.remaining - inCart;
  if (sku.remaining <= 0) {
    return { label: "Sold out", classes: "bg-bark-light/20 text-bark-light" };
  }
  if (left <= 0) {
    return { label: "Max in cart", classes: "bg-gold/20 text-gold" };
  }
  if (sku.remaining === 1) {
    return { label: "Last one!", classes: "bg-gold/20 text-gold" };
  }
  if (sku.remaining <= 3) {
    return {
      label: `${sku.remaining} left`,
      classes: "bg-gold/20 text-gold",
    };
  }
  return null;
}

export default function Merch() {
  const [cart, setCart] = useState<CartState>({});
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const groups = useMemo(() => groupedSkus(), []);

  const cartLines = useMemo(
    () =>
      SKUS.flatMap((sku) => {
        const qty = cart[sku.id] ?? 0;
        return qty > 0 ? [{ sku, qty }] : [];
      }),
    [cart]
  );
  const cartCount = cartLines.reduce((n, line) => n + line.qty, 0);
  const cartSubtotal = cartLines.reduce(
    (sum, line) => sum + line.sku.unitAmount * line.qty,
    0
  );

  function addToCart(sku: ProductSku) {
    setCheckoutError(null);
    setCart((prev) => {
      const current = prev[sku.id] ?? 0;
      if (current >= sku.remaining) return prev;
      return { ...prev, [sku.id]: current + 1 };
    });
  }

  function setQty(skuId: string, qty: number) {
    setCheckoutError(null);
    setCart((prev) => {
      const next = { ...prev };
      if (qty <= 0) {
        delete next[skuId];
      } else {
        next[skuId] = qty;
      }
      return next;
    });
  }

  function removeLine(skuId: string) {
    setCheckoutError(null);
    setCart((prev) => {
      const next = { ...prev };
      delete next[skuId];
      return next;
    });
  }

  async function handleCheckout() {
    if (cartLines.length === 0) return;
    setIsSubmitting(true);
    setCheckoutError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cartLines.map((line) => ({
            skuId: line.sku.id,
            quantity: line.qty,
          })),
        }),
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Checkout failed. Please try again.");
      }
      window.location.href = data.url;
    } catch (err) {
      setCheckoutError(
        err instanceof Error ? err.message : "Unexpected error. Try again."
      );
      setIsSubmitting(false);
    }
  }

  return (
    <section id="merch" className="py-20 sm:py-28 px-4 sm:px-6 bg-cream-dark">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-display font-600 text-gold text-sm tracking-[0.3em] uppercase mb-3">
            Closeout — While Supplies Last
          </p>
          <h2 className="font-display font-900 text-4xl sm:text-5xl text-bark">
            Festival Merch
          </h2>
          <p className="mt-4 font-body text-bark-light max-w-lg mx-auto">
            We have a few WWS 2026 shirts left from the show.{" "}
            <strong className="text-forest">$20 each.</strong> Local pickup in
            the Waynewood / Fort Hunt neighborhood — we&rsquo;ll coordinate
            after you order.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {groups.map((group) => (
            <div key={group.key} className="text-center">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-cream-dark mb-5">
                <Image
                  src={group.image}
                  alt={group.imageAlt}
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <p className="font-display font-700 text-bark text-lg mb-3">
                {group.label}{" "}
                <span className="font-body font-400 text-bark-light text-sm">
                  · $20
                </span>
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {group.skus.map((sku) => {
                  const inCart = cart[sku.id] ?? 0;
                  const tag = badgeFor(sku, inCart);
                  const soldOut = sku.remaining <= 0;
                  const atCap = inCart >= sku.remaining;
                  const baseClasses =
                    "inline-flex items-center gap-2 font-display font-700 text-sm px-5 py-2.5 rounded-full transition-colors";
                  if (soldOut) {
                    return (
                      <span
                        key={sku.id}
                        className={`${baseClasses} bg-bark-light/10 text-bark-light cursor-not-allowed`}
                        aria-disabled="true"
                      >
                        {sku.size}
                        <span className="text-xs font-400 opacity-80">
                          Sold Out
                        </span>
                      </span>
                    );
                  }
                  return (
                    <button
                      key={sku.id}
                      type="button"
                      onClick={() => addToCart(sku)}
                      disabled={atCap}
                      className={`${baseClasses} ${
                        atCap
                          ? "bg-forest/30 text-white cursor-not-allowed"
                          : "bg-forest text-white hover:bg-forest-dark"
                      }`}
                      aria-label={`Add ${group.label} size ${sku.size} to cart for $20`}
                    >
                      {sku.size}
                      {inCart > 0 && (
                        <span className="text-[10px] font-700 uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20">
                          {inCart} in cart
                        </span>
                      )}
                      {!inCart && tag && (
                        <span
                          className={`text-[10px] font-700 uppercase tracking-wider px-2 py-0.5 rounded-full ${tag.classes}`}
                        >
                          {tag.label}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-14">
          <div className="bg-white rounded-2xl shadow-sm border border-cream-dark overflow-hidden">
            <div className="px-6 py-4 border-b border-cream-dark flex items-center justify-between">
              <h3 className="font-display font-900 text-bark text-xl">
                Your Cart
              </h3>
              <span className="font-body text-sm text-bark-light">
                {cartCount === 0
                  ? "Empty"
                  : `${cartCount} item${cartCount === 1 ? "" : "s"}`}
              </span>
            </div>

            {cartLines.length === 0 ? (
              <p className="px-6 py-8 text-center font-body text-bark-light text-sm">
                Tap a size above to add it to your cart. Mix and match
                anything — you check out once.
              </p>
            ) : (
              <ul className="divide-y divide-cream-dark">
                {cartLines.map((line) => (
                  <li
                    key={line.sku.id}
                    className="px-6 py-4 flex items-center gap-4"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-display font-700 text-bark truncate">
                        {line.sku.groupLabel} · {line.sku.size}
                      </p>
                      <p className="font-body text-bark-light text-xs">
                        {formatUsd(line.sku.unitAmount)} each ·{" "}
                        {line.sku.remaining} available
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setQty(line.sku.id, line.qty - 1)}
                        className="w-8 h-8 rounded-full bg-cream-dark text-bark hover:bg-bark-light/30 font-display font-700"
                        aria-label={`Decrease ${line.sku.groupLabel} ${line.sku.size}`}
                      >
                        −
                      </button>
                      <span className="font-display font-700 text-bark w-6 text-center">
                        {line.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setQty(
                            line.sku.id,
                            Math.min(line.qty + 1, line.sku.remaining)
                          )
                        }
                        disabled={line.qty >= line.sku.remaining}
                        className="w-8 h-8 rounded-full bg-cream-dark text-bark hover:bg-bark-light/30 font-display font-700 disabled:opacity-40 disabled:cursor-not-allowed"
                        aria-label={`Increase ${line.sku.groupLabel} ${line.sku.size}`}
                      >
                        +
                      </button>
                    </div>
                    <div className="font-display font-700 text-bark w-20 text-right">
                      {formatUsd(line.sku.unitAmount * line.qty)}
                    </div>
                    <button
                      type="button"
                      onClick={() => removeLine(line.sku.id)}
                      className="text-bark-light hover:text-forest text-xs font-body underline"
                      aria-label={`Remove ${line.sku.groupLabel} ${line.sku.size}`}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <div className="px-6 py-4 bg-cream-dark/50 border-t border-cream-dark flex items-center justify-between">
              <div>
                <p className="font-body text-xs text-bark-light uppercase tracking-wider">
                  Subtotal
                </p>
                <p className="font-display font-900 text-bark text-xl">
                  {formatUsd(cartSubtotal)}
                </p>
              </div>
              <button
                type="button"
                onClick={handleCheckout}
                disabled={cartLines.length === 0 || isSubmitting}
                className="bg-forest text-white font-display font-700 text-base px-8 py-3 rounded-full hover:bg-forest-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Loading…" : "Checkout"}
              </button>
            </div>

            {checkoutError && (
              <div className="px-6 py-3 bg-red-50 border-t border-red-200 text-red-700 text-sm font-body">
                {checkoutError}
              </div>
            )}
          </div>

          <p className="text-center mt-6 text-bark-light text-xs font-body max-w-md mx-auto">
            Secure checkout powered by{" "}
            <a
              href="https://stripe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-forest"
            >
              Stripe
            </a>
            . Card processing fee (~$0.88/shirt) added at checkout.
          </p>
        </div>
      </div>
    </section>
  );
}
