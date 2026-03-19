"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

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
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-display font-600 text-gold text-sm tracking-[0.3em] uppercase mb-3">
            Reach Out
          </p>
          <h2 className="font-display font-900 text-4xl sm:text-5xl text-bark">
            Contact Us
          </h2>
          <p className="mt-4 font-body text-bark-light max-w-md mx-auto">
            Have a question about the festival? Drop us a line and we&apos;ll
            get back to you.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-cream-dark p-6 sm:p-8">
          {status === "sent" ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display font-700 text-xl text-bark mb-2">Message Sent!</h3>
              <p className="font-body text-bark-light">
                We&apos;ll get back to you as soon as we can.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 font-display font-600 text-forest text-sm hover:text-forest-dark transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Web3Forms access key — replace with your key after registration */}
              <input type="hidden" name="access_key" value="51ba1c8b-b2b1-4c87-8b9c-f7d8eb9a9ea0" />
              <input type="hidden" name="subject" value="New message from waynewoodstock.com" />
              <input type="hidden" name="from_name" value="WWS Contact Form" />
              <input type="hidden" name="redirect" value="" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block font-display font-600 text-sm text-bark mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/50 font-body text-bark placeholder:text-bark-light/50 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-display font-600 text-sm text-bark mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/50 font-body text-bark placeholder:text-bark-light/50 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-display font-600 text-sm text-bark mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/50 font-body text-bark placeholder:text-bark-light/50 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors resize-none"
                  placeholder="What's on your mind?"
                />
              </div>

              {status === "error" && (
                <p className="text-red-600 text-sm font-body">
                  Something went wrong. Please try again or email us directly at{" "}
                  <a href="mailto:info@waynewoodstock.com" className="underline">
                    info@waynewoodstock.com
                  </a>
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-forest text-white font-display font-700 text-base px-8 py-3.5 rounded-full hover:bg-forest-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        <p className="text-center mt-6 font-body text-bark-light text-sm">
          Or email us directly at{" "}
          <a
            href="mailto:info@waynewoodstock.com"
            className="text-forest underline hover:text-forest-dark"
          >
            info@waynewoodstock.com
          </a>
        </p>
      </div>
    </section>
  );
}
