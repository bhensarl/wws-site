import Image from "next/image";

type SizeOption = {
  size: string;
  url: string;
  remaining: number;
};

type Product = {
  key: string;
  label: string;
  image: string;
  alt: string;
  sizes: SizeOption[];
};

const PRODUCTS: Product[] = [
  {
    key: "adult",
    label: "Adult Tee",
    image: "/images/merch-shirt.png",
    alt: "WWS 2026 Adult T-Shirt",
    sizes: [
      { size: "M", url: "https://buy.stripe.com/fZu3cn9yL3f11iI1WW83C00", remaining: 1 },
      { size: "L", url: "https://buy.stripe.com/8x2fZ95ivdTFe5ugRQ83C01", remaining: 4 },
      { size: "XL", url: "https://buy.stripe.com/14AdR16mzg1NaTieJI83C02", remaining: 18 },
    ],
  },
  {
    key: "youth",
    label: "Youth Tee",
    image: "/images/merch-youth.png",
    alt: "WWS 2026 Youth T-Shirt",
    sizes: [
      { size: "M", url: "https://buy.stripe.com/fZu5kv6mz3f1bXm1WW83C03", remaining: 9 },
      { size: "L", url: "https://buy.stripe.com/5kQ8wH9yL02PgdC7hg83C04", remaining: 13 },
    ],
  },
];

function remainingTag(remaining: number): { label: string; classes: string } | null {
  if (remaining <= 0) {
    return { label: "Sold Out", classes: "bg-bark-light/20 text-bark-light" };
  }
  if (remaining === 1) {
    return { label: "Last one!", classes: "bg-gold/20 text-gold" };
  }
  if (remaining <= 3) {
    return { label: `${remaining} left`, classes: "bg-gold/20 text-gold" };
  }
  return null;
}

export default function Merch() {
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
          {PRODUCTS.map((product) => (
            <div key={product.key} className="text-center">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-cream-dark mb-5">
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <p className="font-display font-700 text-bark text-lg mb-3">
                {product.label}{" "}
                <span className="font-body font-400 text-bark-light text-sm">
                  · $20
                </span>
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {product.sizes.map((opt) => {
                  const tag = remainingTag(opt.remaining);
                  const soldOut = opt.remaining <= 0;
                  const baseClasses =
                    "inline-flex items-center gap-2 font-display font-700 text-sm px-5 py-2.5 rounded-full transition-colors";
                  const activeClasses =
                    "bg-forest text-white hover:bg-forest-dark";
                  const soldClasses =
                    "bg-bark-light/10 text-bark-light cursor-not-allowed";
                  if (soldOut) {
                    return (
                      <span
                        key={opt.size}
                        className={`${baseClasses} ${soldClasses}`}
                        aria-disabled="true"
                      >
                        {opt.size}
                        <span className="text-xs font-400 opacity-80">
                          Sold Out
                        </span>
                      </span>
                    );
                  }
                  return (
                    <a
                      key={opt.size}
                      href={opt.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${baseClasses} ${activeClasses}`}
                      aria-label={`Buy ${product.label} size ${opt.size} for $20 — ${opt.remaining} remaining`}
                    >
                      {opt.size}
                      {tag && (
                        <span
                          className={`text-[10px] font-700 uppercase tracking-wider px-2 py-0.5 rounded-full ${tag.classes}`}
                        >
                          {tag.label}
                        </span>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-bark-light text-xs font-body max-w-md mx-auto">
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
    </section>
  );
}
