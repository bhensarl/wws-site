const MAIN_STAGE = [
  {
    name: "Rachel's Decision",
    tag: "Foundational",
    link: null,
  },
  {
    name: "Moxie Meelo",
    tag: null,
    link: "https://moxiemeelo.com/",
  },
  {
    name: "DiscoSpears",
    tag: "Foundational",
    link: "https://wrjams.com/discospears",
  },
  {
    name: "mid",
    tag: null,
    link: "https://open.spotify.com/artist/4XWIgRRPzhAjHXOeEmD2a9",
  },
  {
    name: "Porch Pirates",
    tag: "Foundational",
    link: "https://www.facebook.com/p/Porch-Pirates-100089571789488/",
  },
];

const OCTOPUS_STAGE = [
  {
    name: "Full Smoke",
    tag: null,
    link: null,
  },
  {
    name: "Lydia Grace",
    tag: "Coming Soon",
    link: null,
  },
];

function BandCard({
  name,
  tag,
  link,
}: {
  name: string;
  tag: string | null;
  link: string | null;
}) {
  const content = (
    <div className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-cream-dark">
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
          <p className="text-center text-bark-light text-sm mb-6 font-body">
            Presented by W&amp;R Jams
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            {OCTOPUS_STAGE.map((band) => (
              <BandCard key={band.name} {...band} />
            ))}
          </div>
        </div>

        <p className="text-center mt-12 font-display font-600 text-bark-light text-sm">
          More acts to be announced &mdash; stay tuned!
        </p>
      </div>
    </section>
  );
}
