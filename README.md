# AI Employee

Dedicated Next.js marketing site scaffold for the Build Your First AI Employee funnel.

## Current state
This scaffold now covers the core offer ladder and routing:
- `/` — homepage that clearly routes visitors to the right offer
- `/starter-kit` — free opt-in / lead magnet landing page
- `/thank-you` — signup confirmation + bridge page
- `/guide` — long-form sales page for the paid guide
- `/lab` — AI Employee Lab membership page

## Included in this scaffold
- App Router + TypeScript + Tailwind CSS v4
- Global design tokens for the AI Employee visual system
- Shared marketing components:
  - Navbar
  - Footer
  - Hero section
  - CTA block
  - Feature grid
  - Pricing cards
  - FAQ accordion
  - Email form UI block
- Centralized content in `src/lib/site-content.ts` so offer/page copy stays reusable
- UI-only placeholder states for form capture, guide checkout, and Lab membership checkout
- Inline implementation notes where real wiring will need to be added

## Run locally

```bash
cd aiemployee
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run build
```

## What still needs real wiring
- Starter Kit form submission:
  - connect form action or API route
  - send data to ESP/CRM
  - deliver the asset automatically
  - track conversion events
  - redirect successful submits to `/thank-you`
- Guide checkout:
  - replace placeholder CTA target with real checkout flow
  - track purchase events
  - route purchasers into the Lab upsell
- Lab membership:
  - connect monthly/annual buttons to real billing URLs
  - provision membership/community access after successful purchase
  - track membership conversion events
- Optional next polish:
  - add page-specific social proof/testimonials
  - add thank-you and checkout success analytics hooks
  - swap placeholder notes for live integrations once approved

## Notes
- The current forms and payment CTAs are intentionally UI-only.
- Core copy direction is sourced from the workspace guide and site planning docs under `../products/ai-employee-guide/`.
- The homepage is now conversion-routed rather than a generic system demo.


## Included reference docs

- `docs/site-implementation-pack/` - funnel brief, page map, asset map, and build-plan notes carried over from the product workspace
- `docs/product/` - source product notes and wireframe docs for the Build Your First AI Employee offer
