import type { Metadata } from "next";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://waynewoodstock.com"),
  title: "Waynewoodstock 2027 | Fort Hunt Music Festival",
  description:
    "Save the date: Saturday, May 22, 2027. The 4th annual Waynewoodstock — Fort Hunt's community music, arts, and food festival at Waynewood Park in Alexandria, VA. Tickets release January 2027.",
  keywords: [
    "Waynewoodstock",
    "Waynewoodstock 2027",
    "Fort Hunt",
    "Fort Hunt music festival",
    "music festival Alexandria VA",
    "community event Alexandria",
    "Waynewood Park",
    "live music Northern Virginia",
    "Alexandria VA events",
    "family festival Virginia",
    "2027",
  ],
  openGraph: {
    title: "Waynewoodstock 2027 | Fort Hunt Music Festival",
    description:
      "May 22, 2027 — Live music, local food, craft artisans, and good vibes at Waynewood Park in Alexandria, VA.",
    images: ["/images/hero-banner.png"],
    type: "website",
    url: "https://waynewoodstock.com",
    siteName: "Waynewoodstock",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waynewoodstock 2027 | Fort Hunt Music Festival",
    description:
      "May 22, 2027 — Live music, local food, craft artisans, and good vibes at Waynewood Park.",
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
  name: "Waynewoodstock 2027",
  description:
    "The 4th annual Waynewoodstock — Fort Hunt's community music, arts, and food festival featuring live bands across two stages, local food trucks, craft artisans, and a beer garden. Tickets release January 2027.",
  startDate: "2027-05-22T11:00:00-04:00",
  endDate: "2027-05-22T21:00:00-04:00",
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
