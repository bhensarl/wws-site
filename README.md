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

## Repo location (Personal_agent workspace)

If you use the **Personal_agent** monorepo-style folder, this project often lives at **`Personal_agent/wws-site/`**. That path is listed in Personal_agent’s `.gitignore` because **this directory is its own git repository** — Cursor’s search may skip it. Work on the site from **`wws-site/`** (this repo) for commits and deploys.

## Analytics (GA4)

- Component: `src/components/GoogleAnalytics.tsx` (uses `next/script`).
- **Measurement ID:** set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel (recommended) or copy `.env.local.example` → `.env.local`. If unset, the default ID in the component matches the current live property.

After changing the ID, redeploy. Confirm traffic in GA4 **Realtime**.

## FAQ copy (shared with Eventbrite)

FAQ questions/answers are **`src/data/faqs.json`**. The canonical file in the **Personal_agent** repo is **`wws-assets/marketing/faqs.json`** — copy it here after edits, then run `python3 scripts/sync_eventbrite_faqs.py` from Personal_agent to update the Eventbrite listing. See **`wws-assets/marketing/EVENTBRITE-FAQ-SYNC.md`** in Personal_agent.

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
