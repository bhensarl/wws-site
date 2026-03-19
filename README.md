# Waynewoodstock 2026 — waynewoodstock.com

Official website for Waynewoodstock 2026, the Fort Hunt community music, arts, and food festival.

**Event:** Saturday, May 16, 2026 · Waynewood Park · Alexandria, VA

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Styling:** Tailwind CSS v4
- **Hosting:** Vercel (free tier)
- **Tickets:** Eventbrite embedded checkout widget
- **Domain:** waynewoodstock.com (registered via Squarespace, DNS pointed to Vercel)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build   # outputs to /out as static HTML
```

Vercel auto-deploys on push to `main`.

## Site Sections

| Section | Component | Description |
|---|---|---|
| Hero | `Hero.tsx` | Banner image, countdown timer, CTA |
| About | `About.tsx` | Event description, growth stats |
| Lineup | `Lineup.tsx` | Main Stage + Octopus Stage bands |
| Tickets | `Tickets.tsx` | Quantity selector + Eventbrite embedded checkout |
| Merch | `Merch.tsx` | T-shirt / tank pre-order previews |
| FAQ | `FAQ.tsx` | Accordion with common questions |
| Location | `Location.tsx` | Google Maps embed + address + event details |
| Footer | `Footer.tsx` | Links, social, contact |
