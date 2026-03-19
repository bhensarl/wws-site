"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "When and where is Waynewoodstock 2026?",
    a: "Saturday, May 16, 2026 starting at 11 AM. We're at the Waynewood Recreation Association (WRA) field in Alexandria, VA — right in the heart of the Fort Hunt neighborhood.",
  },
  {
    q: "What's included with my ticket?",
    a: "Every ticket includes admission to all stages, a commemorative WWS 2026 cup, and a matching koozie. Food, drinks, and merch are available for purchase inside.",
  },
  {
    q: "Are kids free?",
    a: "Kids under 5 get in free! Children 5 and up need a child ticket ($10 pre-sale, $13 day-of). The Family Pack (2 adults + 3 kids for $55) is the best deal for families.",
  },
  {
    q: "Can I buy tickets at the door?",
    a: "Yes — day-of tickets will be available, but they cost more. Pre-sale tickets save you money and help us plan. Win-win.",
  },
  {
    q: "What about parking?",
    a: "Street parking is available throughout the Waynewood neighborhood. We encourage walking, biking, or carpooling if you're local. More details will be shared closer to the event.",
  },
  {
    q: "Will there be food and drinks?",
    a: "Absolutely. Local food trucks will be on-site and we'll have a beer garden with a great selection of brews. Details on specific vendors coming soon.",
  },
  {
    q: "Can I bring a blanket or lawn chair?",
    a: "Please do! Bring your lawn chairs, blankets, coolers, and good vibes. Pop-up tents are only allowed in reserved Lounge Zone spots. No outside alcohol, glass containers, or pets (service animals welcome).",
  },
  {
    q: "I'm an artisan — how do I get involved?",
    a: "We'd love to have you! Artisan registration is $25 — apply at tinyurl.com/WWS26-ArtisanInterest.",
  },
  {
    q: "What if it rains?",
    a: "The show goes on — rain or shine. We'll have covered areas and tents. In the event of severe weather, check our Facebook page and email for updates.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-cream-dark last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-display font-extrabold text-gold group-hover:text-gold-light transition-colors pr-4 text-base sm:text-lg">
          {q}
        </span>
        <svg
          className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 pb-5" : "max-h-0"
        }`}
      >
        <p className="font-body text-bark-light leading-relaxed text-sm sm:text-base pl-0 sm:pl-1">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display font-600 text-gold text-sm tracking-[0.3em] uppercase mb-3">
            Good Questions
          </p>
          <h2 className="font-display font-900 text-4xl sm:text-5xl text-bark">
            FAQ
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-cream-dark px-6 sm:px-8">
          {FAQS.map((faq) => (
            <FAQItem key={faq.q} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
