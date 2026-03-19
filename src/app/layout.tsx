import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://waynewoodstock.com"),
  title: "Waynewoodstock 2026 | Fort Hunt Music Festival",
  description:
    "Join us May 16, 2026 for the 3rd annual Waynewoodstock — Fort Hunt's community music, arts, and food festival at Waynewood Park in Alexandria, VA.",
  keywords: [
    "Waynewoodstock",
    "Waynewoodstock 2026",
    "Fort Hunt",
    "Fort Hunt music festival",
    "music festival Alexandria VA",
    "community event Alexandria",
    "Waynewood Park",
    "live music Northern Virginia",
    "Alexandria VA events",
    "family festival Virginia",
    "2026",
  ],
  openGraph: {
    title: "Waynewoodstock 2026 | Fort Hunt Music Festival",
    description:
      "May 16, 2026 — Live music, local food, craft artisans, and good vibes at Waynewood Park in Alexandria, VA.",
    images: ["/images/hero-banner.png"],
    type: "website",
    url: "https://waynewoodstock.com",
    siteName: "Waynewoodstock",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waynewoodstock 2026 | Fort Hunt Music Festival",
    description:
      "May 16, 2026 — Live music, local food, craft artisans, and good vibes at Waynewood Park.",
    images: ["/images/hero-banner.png"],
  },
  alternates: {
    canonical: "https://waynewoodstock.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicEvent",
  name: "Waynewoodstock 2026",
  description:
    "The 3rd annual Waynewoodstock — Fort Hunt's community music, arts, and food festival featuring live bands across two stages, local food trucks, craft artisans, and a beer garden.",
  startDate: "2026-05-16T11:00:00-04:00",
  endDate: "2026-05-16T21:00:00-04:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Waynewood Park (WRA Field)",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1021 Dalebrook Dr",
      addressLocality: "Alexandria",
      addressRegion: "VA",
      postalCode: "22308",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.7217449,
      longitude: -77.0501041,
    },
  },
  image: "https://waynewoodstock.com/images/hero-banner.png",
  organizer: {
    "@type": "Organization",
    name: "Waynewoodstock LLC",
    url: "https://waynewoodstock.com",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Adult Pre-Sale",
      price: "14.00",
      priceCurrency: "USD",
      url: "https://www.eventbrite.com/e/1373583608549",
      availability: "https://schema.org/InStock",
      validFrom: "2026-03-01",
    },
    {
      "@type": "Offer",
      name: "Family Pack (2 adults + 3 kids)",
      price: "55.00",
      priceCurrency: "USD",
      url: "https://www.eventbrite.com/e/1373583608549",
      availability: "https://schema.org/InStock",
      validFrom: "2026-03-01",
    },
    {
      "@type": "Offer",
      name: "Child (5+)",
      price: "10.00",
      priceCurrency: "USD",
      url: "https://www.eventbrite.com/e/1373583608549",
      availability: "https://schema.org/InStock",
      validFrom: "2026-03-01",
    },
  ],
  performer: [
    { "@type": "MusicGroup", name: "Rachel's Decision" },
    { "@type": "MusicGroup", name: "Moxie Meelo" },
    { "@type": "MusicGroup", name: "DiscoSpears" },
    { "@type": "MusicGroup", name: "mid" },
    { "@type": "MusicGroup", name: "Porch Pirates" },
    { "@type": "MusicGroup", name: "Full Smoke" },
    { "@type": "MusicGroup", name: "Lydia Grace" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4CCX20DX0Z"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-4CCX20DX0Z');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
