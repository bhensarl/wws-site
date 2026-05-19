const TIER_PREVIEWS = [
  { name: "Adult", description: "General admission" },
  { name: "Family Pack", description: "2 adults + 3 kids", highlight: true },
  { name: "Child", description: "Ages 5+. Under 5 free." },
  { name: "Lounge Zone", description: "Reserved spot + pop-up tent" },
];

export default function Tickets() {
  return (
    <section id="tickets" className="py-20 sm:py-28 px-4 sm:px-6 bg-forest">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-display font-600 text-gold-light text-sm tracking-[0.3em] uppercase mb-3">
            Save the Date
          </p>
          <h2 className="font-display font-900 text-4xl sm:text-5xl text-white">
            Waynewoodstock 2027
          </h2>
          <p className="mt-4 font-body text-white/70 max-w-lg mx-auto">
            <strong className="text-white">Saturday, May 22, 2027.</strong>{" "}
            Same Waynewood Park, same neighborhood, same incredible day. Tickets
            release in <strong className="text-gold">January 2027</strong>.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 opacity-60 select-none"
          aria-disabled="true"
        >
          {TIER_PREVIEWS.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-6 text-center transition-all duration-200 ${
                tier.highlight
                  ? "bg-gold/40 text-bark ring-2 ring-gold-light/30"
                  : "bg-white/5 text-white backdrop-blur-sm border border-white/10"
              }`}
            >
              <h3 className="font-display font-700 text-lg mb-1">
                {tier.name}
              </h3>
              <p
                className={`text-xs mb-3 ${
                  tier.highlight ? "text-bark/60" : "text-white/50"
                }`}
              >
                {tier.description}
              </p>
              <p className="font-display font-900 text-3xl mb-1">$—</p>
              <p
                className={`text-xs ${
                  tier.highlight ? "text-bark/60" : "text-white/40"
                }`}
              >
                Pricing dropping January
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl border border-white/15 px-8 py-8 text-center">
          <p className="font-display font-800 text-gold text-xs tracking-[0.3em] uppercase mb-3">
            Coming January 2027
          </p>
          <h3 className="font-display font-900 text-2xl text-white mb-3">
            Tickets are not yet on sale
          </h3>
          <p className="font-body text-white/70 text-sm mb-4">
            We&rsquo;re finalizing the lineup and pricing for year four. Tickets
            will open in early January 2027, with the same early-bird discount
            for Fort Hunt neighbors.
          </p>
          <p className="font-body text-white/60 text-xs">
            Want the heads-up?{" "}
            <a
              href="mailto:sales@waynewoodstock.com?subject=Notify%20me%20when%20WWS%202027%20tickets%20drop"
              className="underline text-white/80 hover:text-white"
            >
              Email sales@waynewoodstock.com
            </a>{" "}
            and we&rsquo;ll put you on the early-access list.
          </p>
        </div>

        <p className="text-center mt-8 text-white/50 text-sm font-body">
          Want to play in 2027?{" "}
          <a
            href="https://tinyurl.com/WWS26-BandInterestForm"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            Submit band interest
          </a>
          {" · "}
          Artisan?{" "}
          <a
            href="https://tinyurl.com/WWS26-ArtisanInterest"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            Apply here
          </a>
        </p>
      </div>
    </section>
  );
}
