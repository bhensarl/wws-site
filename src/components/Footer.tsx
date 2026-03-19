"use client";

import { useState, FormEvent } from "react";

export default function Footer() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer id="contact" className="bg-bark text-cream/80">
      {/* Contact form band */}
      <div className="border-b border-cream/10 py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="font-display font-semibold text-gold text-sm tracking-[0.3em] uppercase mb-3">
              Reach Out
            </p>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-cream mb-4">
              Contact Us
            </h2>
            <p className="font-body text-cream/60 leading-relaxed max-w-sm">
              Have a question about the festival, sponsorships, or vendor
              registration? Drop us a line and we&apos;ll get back to you.
            </p>
            <p className="mt-4 font-body text-cream/40 text-sm">
              Or email us directly at{" "}
              <a
                href="mailto:info@waynewoodstock.com"
                className="text-gold hover:text-gold-light transition-colors underline"
              >
                info@waynewoodstock.com
              </a>
            </p>
          </div>

          <div className="bg-cream/5 rounded-2xl p-6 sm:p-8 border border-cream/10">
            {status === "sent" ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 bg-forest/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-forest-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-lg text-cream mb-2">
                  Message Sent!
                </h3>
                <p className="font-body text-cream/60 text-sm">
                  We&apos;ll get back to you as soon as we can.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 font-display font-semibold text-gold text-sm hover:text-gold-light transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="hidden"
                  name="access_key"
                  value="51ba1c8b-b2b1-4c87-8b9c-f7d8eb9a9ea0"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New message from waynewoodstock.com"
                />
                <input
                  type="hidden"
                  name="from_name"
                  value="WWS Contact Form"
                />
                <input type="hidden" name="redirect" value="" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="footer-name"
                      className="block font-display font-semibold text-sm text-cream/80 mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="footer-name"
                      name="name"
                      required
                      autoComplete="name"
                      className="w-full px-4 py-3 rounded-xl border border-cream/10 bg-cream/5 font-body text-cream placeholder:text-cream/30 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="footer-email"
                      className="block font-display font-semibold text-sm text-cream/80 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="footer-email"
                      name="email"
                      required
                      autoComplete="email"
                      className="w-full px-4 py-3 rounded-xl border border-cream/10 bg-cream/5 font-body text-cream placeholder:text-cream/30 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="footer-message"
                    className="block font-display font-semibold text-sm text-cream/80 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="footer-message"
                    name="message"
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-cream/10 bg-cream/5 font-body text-cream placeholder:text-cream/30 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors resize-none"
                    placeholder="What's on your mind?"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm font-body">
                    Something went wrong. Please try again or email us at{" "}
                    <a
                      href="mailto:info@waynewoodstock.com"
                      className="underline"
                    >
                      info@waynewoodstock.com
                    </a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-gold text-bark font-display font-bold text-base px-8 py-3 rounded-full hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
            <div>
              <h3 className="font-display font-black text-xl text-cream mb-3">
                Waynewoodstock
              </h3>
              <p className="font-body text-sm text-cream/60 leading-relaxed">
                Fort Hunt&apos;s community music, arts, and food festival.
                <br />
                May 16, 2026 &bull; Waynewood Park
              </p>
            </div>

            <div>
              <h4 className="font-display font-bold text-sm text-cream uppercase tracking-wider mb-3">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#lineup"
                    className="hover:text-cream transition-colors"
                  >
                    Lineup
                  </a>
                </li>
                <li>
                  <a
                    href="#tickets"
                    className="hover:text-cream transition-colors"
                  >
                    Tickets
                  </a>
                </li>
                <li>
                  <a
                    href="#merch"
                    className="hover:text-cream transition-colors"
                  >
                    Merch
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="hover:text-cream transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#location"
                    className="hover:text-cream transition-colors"
                  >
                    Location
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-sm text-cream uppercase tracking-wider mb-3">
                Get Involved
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://tinyurl.com/WWS26-BandInterestForm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cream transition-colors"
                  >
                    Band Interest Form
                  </a>
                </li>
                <li>
                  <a
                    href="https://tinyurl.com/WWS26-ArtisanInterest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cream transition-colors"
                  >
                    Artisan Registration
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@waynewoodstock.com"
                    className="hover:text-cream transition-colors"
                  >
                    info@waynewoodstock.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-cream/40">
              &copy; {new Date().getFullYear()} Waynewoodstock LLC &bull;
              Alexandria, VA
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/waynewoodstock26/events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/40 hover:text-cream transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.eventbrite.com/e/1373583608549"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/40 hover:text-cream transition-colors"
                aria-label="Eventbrite"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.996 7.34c-1.17-.632-2.517-.86-3.89-.66a7.172 7.172 0 0 0-3.552 1.65l1.65 2.475a4.31 4.31 0 0 1 2.134-.99c.825-.12 1.635.017 2.34.396l1.318-2.871zm-3.312 10.973a4.307 4.307 0 0 1-2.34-.396L9.026 20.79c1.17.633 2.517.86 3.89.66a7.172 7.172 0 0 0 3.552-1.65l-1.65-2.475a4.307 4.307 0 0 1-2.134.99zM7.68 12a4.32 4.32 0 0 1 .77-2.475L6.8 7.05A7.2 7.2 0 0 0 5.52 12c0 1.83.68 3.5 1.8 4.77l1.65-2.475A4.32 4.32 0 0 1 7.68 12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
