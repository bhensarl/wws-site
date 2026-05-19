// Server-side Stripe client. NEVER import this from a client component.
// Requires STRIPE_SECRET_KEY (sk_live_... in production, sk_test_... locally).
import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;

if (!secretKey) {
  // Don't throw at import time — Next builds the route at deploy, and we want
  // a useful error in the API response rather than a build crash if the env
  // var is missing in a preview environment.
  console.warn(
    "STRIPE_SECRET_KEY is not set. /api/checkout will return 500 until it is."
  );
}

export const stripe = new Stripe(secretKey ?? "", {
  apiVersion: "2026-04-22.dahlia",
  typescript: true,
  appInfo: {
    name: "waynewoodstock.com",
    version: "0.1.0",
  },
});
