"use client";

import { useState } from "react";
import faqsData from "@/data/faqs.json";

type FaqItem = { q: string; a: string };

const FAQS: FaqItem[] = faqsData as FaqItem[];

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
