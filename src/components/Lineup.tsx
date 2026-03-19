import Image from "next/image";

const MAIN_STAGE = [
  {
    name: "Rachel's Decision",
    tag: "Foundational",
    link: null,
    image: null,
  },
  {
    name: "Moxie Meelo",
    tag: null,
    link: "https://moxiemeelo.com/",
    image: "/images/band-moxiemeelo.jpg",
  },
  {
    name: "DiscoSpears",
    tag: "Foundational",
    link: "https://wrjams.com/discospears",
    image: "/images/band-discospears.png",
  },
  {
    name: "mid",
    tag: null,
    link: "https://open.spotify.com/artist/4XWIgRRPzhAjHXOeEmD2a9",
    image: null,
  },
  {
    name: "Porch Pirates",
    tag: "Foundational",
    link: "https://www.facebook.com/p/Porch-Pirates-100089571789488/",
    image: null,
  },
];

const OCTOPUS_STAGE = [
  {
    name: "Full Smoke",
    tag: null,
    link: null,
    image: null,
  },
  {
    name: "Lydia Grace",
    tag: "Coming Soon",
    link: null,
    image: null,
  },
];

function BandCard({
  name,
  tag,
  link,
  image,
}: {
  name: string;
  tag: string | null;
  link: string | null;
  image: string | null;
}) {
  const content = (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-cream-dark">
      {image ? (
        <div className="aspect-[3/2] relative overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-display font-700 text-lg text-white drop-shadow-md">
              {name}
            </h3>
            {tag && (
              <span className="inline-block mt-1 text-xs font-display font-600 uppercase tracking-wider text-white/90 bg-forest/80 px-3 py-0.5 rounded-full">
                {tag}
              </span>
            )}
          </div>
        </div>
      ) : (
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-700 text-lg text-bark group-hover:text-forest transition-colors">
              {name}
            </h3>
            {link && (
              <svg
                className="w-4 h-4 text-bark-light group-hover:text-forest transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            )}
          </div>
          {tag && (
            <span className="inline-block mt-2 text-xs font-display font-600 uppercase tracking-wider text-forest bg-forest/10 px-3 py-1 rounded-full">
              {tag}
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return content;
}

export default function Lineup() {
  return (
    <section id="lineup" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display font-600 text-gold text-sm tracking-[0.3em] uppercase mb-3">
            Who&apos;s Playing
          </p>
          <h2 className="font-display font-900 text-4xl sm:text-5xl text-bark">
            The Lineup
          </h2>
        </div>

        {/* Main Stage */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-forest/20" />
            <h3 className="font-display font-800 text-xl text-forest uppercase tracking-wider whitespace-nowrap">
              Main Stage
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-forest/20" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MAIN_STAGE.map((band) => (
              <BandCard key={band.name} {...band} />
            ))}
          </div>
        </div>

        {/* Octopus Stage */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-sky/30" />
            <h3 className="font-display font-800 text-xl text-sky-dark uppercase tracking-wider whitespace-nowrap">
              Octopus Stage
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-sky/30" />
          </div>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image
              src="/images/wrjams-octopus.jpg"
              alt="Jammie the Octopus — W&R Jams mascot"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover border-2 border-sky/30"
            />
            <p className="text-bark-light text-sm font-body">
              Presented by{" "}
              <a
                href="https://wrjams.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-dark hover:text-sky transition-colors underline font-600"
              >
                W&amp;R Jams
              </a>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            {OCTOPUS_STAGE.map((band) => (
              <BandCard key={band.name} {...band} />
            ))}
          </div>
        </div>

        {/* Band Interest + More Acts */}
        <div className="text-center mt-12 space-y-4">
          <p className="font-display font-600 text-bark-light text-sm">
            More acts to be announced &mdash; stay tuned!
          </p>
          <a
            href="https://tinyurl.com/WWS26-BandInterestForm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-forest text-forest font-display font-700 text-sm px-6 py-2.5 rounded-full hover:bg-forest hover:text-white transition-colors"
          >
            Want to play? Submit Band Interest
          </a>
        </div>
      </div>
    </section>
  );
}
