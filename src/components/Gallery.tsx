import Image from "next/image";

const PHOTOS = [
  {
    src: "/images/gallery/img_2454.jpg",
    alt: "Waynewoodstock 2025 — crowd enjoying live music on the main stage",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/gallery/img_2458.jpg",
    alt: "Band performing on the Waynewoodstock stage at dusk with colorful lights",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery/img_2948.jpg",
    alt: "Three-piece band rocking the Waynewoodstock main stage",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery/img_5970.jpg",
    alt: "Kids having fun at Waynewoodstock with homemade signs",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery/food-truck.jpg",
    alt: "Kona Ice food truck at Waynewoodstock",
    span: "col-span-1 row-span-1",
  },
];

export default function Gallery() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-display font-600 text-gold text-sm tracking-[0.3em] uppercase mb-3">
            Last Year
          </p>
          <h2 className="font-display font-900 text-4xl sm:text-5xl text-bark">
            WWS 2025
          </h2>
          <p className="mt-4 font-body text-bark-light max-w-md mx-auto">
            800+ neighbors came out for live music, food trucks, and community vibes.
            This year we&apos;re going bigger.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {PHOTOS.map((photo, i) => (
            <div
              key={photo.src}
              className={`${
                i === 0 ? "col-span-2 row-span-2" : "col-span-1"
              } relative rounded-2xl overflow-hidden group`}
            >
              <div className={`${i === 0 ? "aspect-square" : "aspect-[4/3]"} relative`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                />
                <div className="absolute inset-0 bg-bark/0 group-hover:bg-bark/20 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
