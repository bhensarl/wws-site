export default function About() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-cream-dark">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-display font-600 text-gold text-sm tracking-[0.3em] uppercase mb-3">
          Year Three
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
          In just two years we&apos;ve grown from 500 neighbors to 800+. This
          year we&apos;re aiming for <strong className="text-bark">1,000</strong>{" "}
          &mdash; and we want you there.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { stat: "2", label: "Stages" },
            { stat: "7+", label: "Live Bands" },
            { stat: "800+", label: "Attended in '25" },
            { stat: "1", label: "Amazing Day" },
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
