"use client";

import { useState, useEffect, useCallback } from "react";
import Script from "next/script";

const EVENT_ID = "1373583608549";

const TICKETS = [
  {
    id: "adult",
    name: "Adult",
    price: 14,
    feeNote: "$16.78 w/ fees",
    dayOf: "$18",
    description: "General admission",
    highlight: false,
    max: 20,
  },
  {
    id: "family",
    name: "Family Pack",
    price: 55,
    feeNote: "2 adults + 3 kids",
    dayOf: "$65",
    description: "Best deal for families",
    highlight: true,
    max: 5,
  },
  {
    id: "child",
    name: "Child",
    price: 10,
    feeNote: "$12.51 w/ fees",
    dayOf: "$13",
    description: "Ages 5+. Under 5 free!",
    highlight: false,
    max: 20,
  },
  {
    id: "lounge",
    name: "Lounge Zone",
    price: 125,
    feeNote: "4 adults or family",
    dayOf: "N/A",
    description: "Reserved spot + pop-up tent",
    highlight: false,
    max: 4,
  },
];

declare global {
  interface Window {
    EBWidgets?: {
      createWidget: (config: Record<string, unknown>) => void;
    };
  }
}

function QuantitySelector({
  value,
  max,
  highlight,
  onChange,
}: {
  value: number;
  max: number;
  highlight: boolean;
  onChange: (v: number) => void;
}) {
  const btnBase =
    "w-9 h-9 rounded-full font-display font-700 text-lg flex items-center justify-center transition-all duration-150 select-none";
  const btnActive = highlight
    ? "bg-bark/20 text-bark hover:bg-bark/30 active:scale-90"
    : "bg-white/20 text-white hover:bg-white/30 active:scale-90";
  const btnDisabled = highlight
    ? "bg-bark/5 text-bark/20 cursor-not-allowed"
    : "bg-white/5 text-white/20 cursor-not-allowed";

  return (
    <div className="flex items-center justify-center gap-3">
      <button
        onClick={() => onChange(Math.max(0, value - 1))}
        disabled={value === 0}
        className={`${btnBase} ${value === 0 ? btnDisabled : btnActive}`}
        aria-label="Decrease quantity"
      >
        &minus;
      </button>
      <span
        className={`font-display font-800 text-2xl w-8 text-center tabular-nums ${
          highlight ? "text-bark" : "text-white"
        }`}
      >
        {value}
      </span>
      <button
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className={`${btnBase} ${value >= max ? btnDisabled : btnActive}`}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}

export default function Tickets() {
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(TICKETS.map((t) => [t.id, 0]))
  );
  const [widgetReady, setWidgetReady] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);
  const subtotal = TICKETS.reduce(
    (sum, t) => sum + t.price * (quantities[t.id] || 0),
    0
  );

  const updateQty = useCallback((id: string, value: number) => {
    setQuantities((prev) => ({ ...prev, [id]: value }));
  }, []);

  const initWidget = useCallback(() => {
    if (typeof window !== "undefined" && window.EBWidgets) {
      setWidgetReady(true);
    }
  }, []);

  useEffect(() => {
    if (checkoutOpen && widgetReady && window.EBWidgets) {
      const container = document.getElementById("eb-checkout-container");
      if (container) container.innerHTML = "";

      window.EBWidgets.createWidget({
        widgetType: "checkout",
        eventId: EVENT_ID,
        modal: false,
        iFrameContainerId: "eb-checkout-container",
        iFrameContainerHeight: 480,
        onOrderComplete: () => {
          setCheckoutOpen(false);
          setQuantities(Object.fromEntries(TICKETS.map((t) => [t.id, 0])));
        },
      });
    }
  }, [checkoutOpen, widgetReady]);

  const handleCheckout = () => {
    if (widgetReady) {
      setCheckoutOpen(true);
      setTimeout(() => {
        document
          .getElementById("eb-checkout-section")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      window.open(
        `https://www.eventbrite.com/e/${EVENT_ID}`,
        "_blank"
      );
    }
  };

  return (
    <>
      <Script
        src="https://www.eventbrite.com/static/widgets/eb_widgets.js"
        strategy="lazyOnload"
        onLoad={initWidget}
      />

      <section id="tickets" className="py-20 sm:py-28 px-4 sm:px-6 bg-forest">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-display font-600 text-gold-light text-sm tracking-[0.3em] uppercase mb-3">
              Pre-Sale Open Now
            </p>
            <h2 className="font-display font-900 text-4xl sm:text-5xl text-white">
              Get Your Tickets
            </h2>
            <p className="mt-4 font-body text-white/70 max-w-md mx-auto">
              Save when you buy early. Kids under 5 get in free. Every ticket
              includes a commemorative cup and koozie.
            </p>
          </div>

          {/* Ticket cards with quantity selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TICKETS.map((ticket) => (
              <div
                key={ticket.id}
                className={`relative rounded-2xl p-6 text-center transition-all duration-200 ${
                  quantities[ticket.id] > 0 ? "scale-[1.02] shadow-xl" : ""
                } ${
                  ticket.highlight
                    ? "bg-gold text-bark ring-4 ring-gold-light/50"
                    : "bg-white/10 text-white backdrop-blur-sm border border-white/10"
                }`}
              >
                {ticket.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-bark text-cream text-xs font-display font-700 px-4 py-1 rounded-full uppercase tracking-wider">
                    Best Value
                  </span>
                )}

                <h3 className="font-display font-700 text-lg mb-1">
                  {ticket.name}
                </h3>
                <p
                  className={`text-xs mb-3 ${
                    ticket.highlight ? "text-bark/60" : "text-white/50"
                  }`}
                >
                  {ticket.description}
                </p>

                <p className="font-display font-900 text-4xl mb-1">
                  ${ticket.price}
                </p>
                <p
                  className={`text-xs mb-1 ${
                    ticket.highlight ? "text-bark/70" : "text-white/50"
                  }`}
                >
                  {ticket.feeNote}
                </p>
                <div
                  className={`text-xs py-1.5 rounded-lg mb-5 ${
                    ticket.highlight ? "bg-bark/10" : "bg-white/5"
                  }`}
                >
                  Day-of: {ticket.dayOf}
                </div>

                <QuantitySelector
                  value={quantities[ticket.id]}
                  max={ticket.max}
                  highlight={ticket.highlight}
                  onChange={(v) => updateQty(ticket.id, v)}
                />

                {quantities[ticket.id] > 0 && (
                  <p
                    className={`mt-3 text-sm font-display font-600 ${
                      ticket.highlight ? "text-bark/80" : "text-white/70"
                    }`}
                  >
                    ${ticket.price * quantities[ticket.id]}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Order summary + checkout bar */}
          <div
            className={`mt-10 transition-all duration-300 ${
              totalItems > 0
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <p className="font-body text-white/60 text-sm">
                    Your selection
                  </p>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mt-1">
                    {TICKETS.filter((t) => quantities[t.id] > 0).map((t) => (
                      <span
                        key={t.id}
                        className="font-display font-600 text-white text-sm"
                      >
                        {quantities[t.id]}x {t.name}
                      </span>
                    ))}
                  </div>
                  <p className="mt-2 font-display font-900 text-2xl text-gold">
                    ${subtotal}{" "}
                    <span className="text-sm font-500 text-white/40">
                      + Eventbrite fees
                    </span>
                  </p>
                </div>

                <button
                  onClick={handleCheckout}
                  className="animate-pulse-glow bg-gold text-bark font-display font-700 text-lg px-10 py-4 rounded-full hover:bg-gold-light transition-colors whitespace-nowrap"
                >
                  Checkout &rarr;
                </button>
              </div>
            </div>
          </div>

          {/* Embedded Eventbrite checkout */}
          {checkoutOpen && (
            <div
              id="eb-checkout-section"
              className="mt-8 bg-white rounded-2xl p-4 sm:p-6 shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-700 text-bark text-lg">
                  Complete Your Purchase
                </h3>
                <button
                  onClick={() => setCheckoutOpen(false)}
                  className="text-bark-light hover:text-bark transition-colors p-1"
                  aria-label="Close checkout"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div id="eb-checkout-container" className="min-h-[480px]" />
              <p className="mt-4 text-center text-xs text-bark-light">
                Secure checkout powered by Eventbrite. Your selections above are
                for planning — finalize quantities and pay below.
              </p>
            </div>
          )}

          {/* Direct link fallback for users who just want to go to Eventbrite */}
          <p className="text-center mt-8 text-white/50 text-sm font-body">
            {totalItems === 0 && (
              <>
                <a
                  href={`https://www.eventbrite.com/e/${EVENT_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white transition-colors"
                >
                  Or buy directly on Eventbrite
                </a>
                {" · "}
              </>
            )}
            Artisan registration is $25 &mdash;{" "}
            <a
              href="https://tinyurl.com/WWS26-ArtisanInterest"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              apply here
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
