# aiemployee

Marketing funnel for Build Your First AI Employee.

## What is wired
- Starter Kit lead capture via `/api/lead`
- Guide and Lab checkout via `/api/checkout`
- Stripe webhook ingestion via `/api/webhooks/stripe`
- Delivery assets served from `public/assets`
- Thank-you and checkout success states with Lab handoff CTA
- Local event logging to `data/funnel-events.json`

## Local run
```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and add Stripe/webhook values when ready.

## Offers
- Starter Kit: free lead magnet
- Guide: $29
- Guide + Toolkit + first month of Lab: $79
- Lab Monthly: $19/mo
- Lab Annual: $190/yr
