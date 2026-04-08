import Link from "next/link";
import { CheckoutButton } from "@/components/checkout-button";
import { pricingTiers } from "@/lib/site-content";

export function PricingCards() {
  return (
    <section id="guide" className="section-pad py-10">
      <div className="container-shell space-y-8">
        <div className="max-w-3xl space-y-4">
          <span className="eyebrow">Offer ladder</span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-cream md:text-5xl">
            Match the offer to the buyer’s level of commitment.
          </h2>
          <p className="text-lg leading-8 text-foreground-soft">
            Free for clarity. Paid for implementation. Membership for ongoing leverage. The structure is simple on purpose.
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className={`panel rounded-[var(--radius-xl)] p-6 md:p-8 ${tier.featured ? "border-orange/40 bg-[linear-gradient(180deg,rgba(41,29,20,0.96),rgba(17,19,21,0.96))]" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-muted">{tier.badge}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-cream">{tier.name}</h3>
                </div>
                <p className="text-2xl font-semibold text-cream">{tier.price}</p>
              </div>
              <p className="mt-4 leading-7 text-foreground-soft">{tier.description}</p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-foreground-soft">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-mint" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {tier.offerKey ? (
                <CheckoutButton
                  offerKey={tier.offerKey}
                  label={tier.ctaLabel}
                  source="pricing-cards"
                  className={`w-full inline-flex items-center justify-center rounded-full px-5 py-3 font-medium transition ${tier.featured ? "bg-orange text-slate-950 hover:bg-orange-strong" : "border border-border text-cream hover:border-mint/40 hover:bg-white/3"}`}
                />
              ) : (
                <Link
                  href={tier.ctaHref}
                  className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 font-medium transition ${tier.featured ? "bg-orange text-slate-950 hover:bg-orange-strong" : "border border-border text-cream hover:border-mint/40 hover:bg-white/3"}`}
                >
                  {tier.ctaLabel}
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
