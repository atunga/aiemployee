# Chunk 2 Build Plan

## Decision
Do not build the marketing funnel inside `mission-control/`.
Mission Control is a separate app with a different purpose.

## Recommended target
Create a dedicated Next.js app for the funnel site, e.g.:
- `raizor-site/`

## Chunk 2 scope
Only scaffold the following:
- app shell
- global styles / color tokens
- Navbar
- Footer
- Hero section
- CTA block
- Feature grid
- Pricing cards
- FAQ accordion
- Email form component (UI only)

No funnel pages yet.

## Why
This keeps the revenue site separate from the ops dashboard and avoids coupling the two products.
