export default function About() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-cream-dark">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-display font-600 text-gold text-sm tracking-[0.3em] uppercase mb-3">
          Three Years Strong &mdash; Year Four Loading
        </p>
        <h2 className="font-display font-900 text-4xl sm:text-5xl text-bark mb-6">
          What is Waynewoodstock?
        </h2>
        <p className="font-body text-bark-light text-lg leading-relaxed mb-6">
          Born in 2024, Waynewoodstock is the Fort Hunt community&apos;s own
          backyard music festival. Two stages of live bands, local food trucks,
          craft artisans, cold beer, a kids zone, and the neighborhood vibes
          that make Waynewood special.
        </p>
        <p className="font-body text-bark-light text-lg leading-relaxed mb-10">
          Three years in, we&apos;ve grown from{" "}
          <strong className="text-bark">500</strong> to{" "}
          <strong className="text-bark">800</strong> to{" "}
          <strong className="text-bark">1,000+</strong> neighbors in the park.
          Year four lands on{" "}
          <strong className="text-forest">Saturday, May 22, 2027</strong>{" "}
          &mdash; help us get to 1,200.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { stat: "3", label: "Years Running" },
            { stat: "1,000+", label: "Attended in '26" },
            { stat: "9", label: "Bands in '26" },
            { stat: "May 22", label: "Back in '27" },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-display font-900 text-3xl text-forest">{item.stat}</p>
              <p className="font-display font-500 text-sm text-bark-light mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
