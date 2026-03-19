import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://waynewoodstock.com"),
  title: "Waynewoodstock 2026 | Fort Hunt Music Festival",
  description:
    "Join us May 16, 2026 for the 3rd annual Waynewoodstock — Fort Hunt's community music, arts, and food festival at Waynewood Park in Alexandria, VA.",
  keywords: [
    "Waynewoodstock",
    "Fort Hunt",
    "music festival",
    "Alexandria VA",
    "community event",
    "live music",
    "2026",
  ],
  openGraph: {
    title: "Waynewoodstock 2026 | Fort Hunt Music Festival",
    description:
      "May 16, 2026 — Live music, local food, craft artisans, and good vibes at Waynewood Park.",
    images: ["/images/hero-banner.png"],
    type: "website",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
