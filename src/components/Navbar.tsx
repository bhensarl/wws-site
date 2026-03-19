"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#lineup", label: "Lineup" },
  { href: "#tickets", label: "Tickets" },
  { href: "#merch", label: "Merch" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
  { href: "#location", label: "Location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5 group">
            <Image
              src="/images/hero-banner.png"
              alt="WWS"
              width={40}
              height={20}
              className="h-8 w-auto group-hover:scale-105 transition-transform"
            />
            <span className="font-display font-900 text-xl tracking-tight">
              <span className="text-forest">WWS</span>
              <span className="text-gold">&apos;26</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display font-600 text-sm text-bark hover:text-forest transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#tickets"
              className="bg-forest text-white font-display font-700 text-sm px-5 py-2 rounded-full hover:bg-forest-dark transition-colors shadow-sm"
            >
              Get Tickets
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-bark"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur-md border-t border-cream-dark">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block font-display font-600 text-bark hover:text-forest transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#tickets"
              onClick={() => setMenuOpen(false)}
              className="block bg-forest text-white font-display font-700 text-center px-5 py-3 rounded-full hover:bg-forest-dark transition-colors"
            >
              Get Tickets
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
