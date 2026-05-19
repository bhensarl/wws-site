import Image from "next/image";

// Stats derived from Eventbrite ticket data for event 1373583608549.
//   - "Neighbors in the park": 721 paid tickets + ~99 extra heads from 33
//     Family Passes (2 adults + unlimited kids) + ~33 extra from 11 Lounge
//     Zone Passes (4-person) + estimated 150 kids-under-5 (free) +
//     ~50 volunteers/organizers/bands ≈ 1,050. Rounded to "1,000+".
//   - "Bands across 2 stages": 5 main stage + 4 octopus stage = 9 acts.
//   - "Hours of live music": gates 11 AM, music 12:00 PM – 9:30 PM.
//   - "Commemorative cups raised": 145 cups sold via Eventbrite add-ons.
const STATS: { value: string; label: string }[] = [
  { value: "1,000+", label: "Neighbors in the park" },
  { value: "9", label: "Bands across 2 stages" },
  { value: "10", label: "Hours of live music" },
  { value: "145", label: "Commemorative cups raised" },
];

// EDIT THIS: drop 2026 event photos into /public/images/recap/ and update
// the paths below. First photo gets the large feature slot; remaining
// photos fill the grid. Aim for 5–8 photos, landscape-oriented preferred.
//
// Currently pointed at the 2025 gallery photos as placeholders so the
// page renders cleanly. Swap to /images/recap/... paths once 2026 shots
// are uploaded.
const PHOTOS: { src: string; alt: string }[] = [
  {
    src: "/images/gallery/img_2454.jpg",
    alt: "Crowd enjoying live music at Waynewoodstock",
  },
  {
    src: "/images/gallery/img_2458.jpg",
    alt: "Band performing on the main stage at WWS",
  },
  {
    src: "/images/gallery/img_2948.jpg",
    alt: "Three-piece band rocking the Waynewoodstock main stage",
  },
  {
    src: "/images/gallery/img_5970.jpg",
    alt: "Kids having fun at Waynewoodstock with homemade signs",
  },
  {
    src: "/images/gallery/food-truck.jpg",
    alt: "Food truck row at Waynewoodstock",
  },
];

export default function Recap() {
  const featurePhoto = PHOTOS[0];
  const gridPhotos = PHOTOS.slice(1);

  return (
    <section id="recap" className="py-20 sm:py-28 px-4 sm:px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-display font-600 text-gold text-sm tracking-[0.3em] uppercase mb-3">
            Year Three — In the Books
          </p>
          <h2 className="font-display font-900 text-4xl sm:text-5xl text-bark">
            Thank you, Fort Hunt
          </h2>
          <p className="mt-4 font-body text-bark-light text-base sm:text-lg max-w-2xl mx-auto">
            Waynewoodstock 2026 happened on Saturday, May 16 at Waynewood Park.
            Nine bands, two stages, ten hours of music, and the best
            neighborhood in Northern Virginia showing up for each other.
            Here&rsquo;s a snapshot.
          </p>
        </div>

        {featurePhoto && (
          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden shadow-lg mb-10 bg-cream-dark">
            <Image
              src={featurePhoto.src}
              alt={featurePhoto.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12 bg-white rounded-2xl border border-cream-dark shadow-sm py-8 px-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display font-900 text-3xl sm:text-4xl text-forest">
                {stat.value}
              </p>
              <p className="font-display font-500 text-xs sm:text-sm text-bark-light mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {gridPhotos.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {gridPhotos.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group bg-cream-dark"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-bark/0 group-hover:bg-bark/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#merch"
            className="bg-forest text-white font-display font-700 text-base px-8 py-3 rounded-full hover:bg-forest-dark transition-colors"
          >
            Grab a Closeout Shirt
          </a>
          <a
            href="#tickets"
            className="border-2 border-forest text-forest font-display font-700 text-base px-8 py-3 rounded-full hover:bg-forest hover:text-white transition-colors"
          >
            Mark Your Calendar for 2027
          </a>
        </div>
      </div>
    </section>
  );
}
