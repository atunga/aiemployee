# aiemployee

Marketing funnel for Build Your First AI Employee.

## Current launch-ready foundations
- Starter Kit lead capture via `/api/lead`
- Guide and Lab checkout via `/api/checkout`
- Stripe webhook ingestion via `/api/webhooks/stripe`
- Delivery assets served from `public/assets`
- Thank-you and checkout success states with next-step CTAs
- Privacy, terms, and contact pages
- Sitemap, robots, Open Graph image, and favicon assets

## Local run
```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and add Stripe/webhook values when ready.

## Checkout behavior
- Stripe checkout is used whenever the required secret key and offer price ID are present.
- `MOCK_CHECKOUT_ENABLED=true` enables a local preview flow for non-production environments only.
- In production, missing Stripe configuration returns an unavailable error instead of pretending a purchase succeeded.

## Offers
- Starter Kit: free lead magnet
- Guide: $29
- Guide + Toolkit + first month of Lab: $79
- Lab Monthly: $19/mo
- Lab Annual: $190/yr
