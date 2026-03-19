import Image from "next/image";

const MERCH_ITEMS = [
  {
    src: "/images/merch-shirt.png",
    alt: "WWS 2026 Adult T-Shirt",
    label: "Adult Tee",
  },
  {
    src: "/images/merch-tank.png",
    alt: "WWS 2026 Adult Tank Top",
    label: "Adult Tank",
  },
  {
    src: "/images/merch-youth.png",
    alt: "WWS 2026 Youth T-Shirt",
    label: "Youth Tee",
  },
];

export default function Merch() {
  return (
    <section id="merch" className="py-20 sm:py-28 px-4 sm:px-6 bg-cream-dark">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display font-600 text-gold text-sm tracking-[0.3em] uppercase mb-3">
            Limited Edition
          </p>
          <h2 className="font-display font-900 text-4xl sm:text-5xl text-bark">
            Festival Merch
          </h2>
          <p className="mt-4 font-body text-bark-light max-w-md mx-auto">
            Pre-order your 2026 gear. Last day to pre-order shirts is
            <strong className="text-forest"> April 26</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {MERCH_ITEMS.map((item) => (
            <div key={item.label} className="group text-center">
              <div className="bg-white rounded-2xl p-4 shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 border border-cream-dark mb-4">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <p className="font-display font-700 text-bark">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.eventbrite.com/e/1373583608549"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-forest text-white font-display font-700 text-base px-8 py-3 rounded-full hover:bg-forest-dark transition-colors"
          >
            Pre-Order Merch
          </a>
        </div>
      </div>
    </section>
  );
}
