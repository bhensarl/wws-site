import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thanks for your order | Waynewoodstock",
  description:
    "Your Waynewoodstock merch order is confirmed. We'll be in touch to coordinate pickup.",
  robots: { index: false, follow: false },
};

export default function MerchThanksPage() {
  return (
    <main className="min-h-[70vh] bg-cream-dark flex items-center justify-center px-4 py-20">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-sm border border-cream-dark p-8 sm:p-12 text-center">
        <p className="font-display font-600 text-gold text-sm tracking-[0.3em] uppercase mb-3">
          Order Confirmed
        </p>
        <h1 className="font-display font-900 text-3xl sm:text-4xl text-bark mb-4">
          Thank you for supporting Waynewoodstock!
        </h1>
        <p className="font-body text-bark-light text-base mb-6">
          Your card has been charged and a receipt is on its way to your email.
          We&rsquo;ll reach out within 48 hours to coordinate pickup in the
          Waynewood / Fort Hunt neighborhood.
        </p>
        <p className="font-body text-bark-light text-sm mb-8">
          Questions or pickup logistics?{" "}
          <a
            href="mailto:sales@waynewoodstock.com"
            className="text-forest underline hover:text-forest-dark"
          >
            sales@waynewoodstock.com
          </a>
        </p>
        <Link
          href="/"
          className="inline-block bg-forest text-white font-display font-700 text-base px-8 py-3 rounded-full hover:bg-forest-dark transition-colors"
        >
          Back to Waynewoodstock
        </Link>
      </div>
    </main>
  );
}
