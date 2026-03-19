"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const EVENT_DATE = new Date("2026-05-16T11:00:00-04:00");

function getTimeLeft() {
  const now = new Date();
  const diff = EVENT_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-display font-900 text-4xl sm:text-5xl md:text-6xl text-gold tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="font-display font-500 text-xs sm:text-sm text-bark-light uppercase tracking-widest mt-1">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream to-cream-dark" />
      <div
        className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A7C3F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 text-center max-w-4xl mx-auto">
        <p className="font-display font-800 text-forest text-base sm:text-lg md:text-xl tracking-[0.25em] uppercase mb-4">
          Fort Hunt Music Festival
        </p>

        <div className="animate-float mb-6">
          <Image
            src="/images/hero-banner.png"
            alt="Waynewoodstock 2026 — VW van with daisies"
            width={600}
            height={300}
            priority
            className="w-full max-w-md sm:max-w-lg md:max-w-xl drop-shadow-lg"
          />
        </div>

        <p className="font-display font-700 text-xl sm:text-2xl md:text-3xl text-bark mb-2">
          Saturday, May 16, 2026
        </p>
        <p className="font-display font-500 text-bark-light text-sm sm:text-base md:text-lg mb-8">
          Waynewood Park &bull; Alexandria, VA &bull; 11 AM &ndash; Late
        </p>

        {/* Countdown */}
        <div className="flex gap-6 sm:gap-10 mb-10">
          <CountdownUnit value={timeLeft.days} label="Days" />
          <CountdownUnit value={timeLeft.hours} label="Hours" />
          <CountdownUnit value={timeLeft.minutes} label="Mins" />
          <CountdownUnit value={timeLeft.seconds} label="Secs" />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#tickets"
            className="animate-pulse-glow bg-forest text-white font-display font-700 text-lg px-10 py-4 rounded-full hover:bg-forest-dark transition-colors"
          >
            Get Tickets
          </a>
          <a
            href="#lineup"
            className="border-2 border-forest text-forest font-display font-700 text-lg px-10 py-4 rounded-full hover:bg-forest hover:text-white transition-colors"
          >
            See the Lineup
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-forest opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
