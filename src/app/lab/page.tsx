import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { CheckoutButton } from "@/components/checkout-button";
import { CtaBlock } from "@/components/cta-block";
import { FaqAccordion } from "@/components/faq-accordion";
import { labPage } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "AI Employee Lab | rAIzor Crest",
  description: "Membership page for AI Employee Lab: ongoing support for operators building AI employees that actually work.",
};

export default function LabPage() {
  return (
    <div className="section-pad py-14 md:py-20">
      <div className="container-shell space-y-10">
        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <span className="eyebrow">
              <ShieldCheck className="h-4 w-4" />
              {labPage.hero.eyebrow}
            </span>
            <div className="space-y-4">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-cream md:text-7xl">
                {labPage.hero.title}
              </h1>
              <p className="text-balance text-2xl font-medium text-mint md:text-3xl">{labPage.hero.subtitle}</p>
              <p className="max-w-2xl text-lg leading-8 text-foreground-soft md:text-xl">{labPage.hero.description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#join"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-3 font-medium text-slate-950 transition hover:bg-orange-strong"
              >
                Join AI Employee Lab
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/guide"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 font-medium text-cream transition hover:border-mint/40 hover:bg-white/3"
              >
                Start with the Guide first
              </Link>
            </div>
          </div>

          <aside className="panel rounded-[var(--radius-xl)] p-6 md:p-8 lg:sticky lg:top-24">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.18em] text-mint-strong">Best fit</p>
              <h2 className="text-3xl font-semibold tracking-tight text-cream">For operators who want momentum after the first build.</h2>
              <ul className="space-y-3 text-base leading-7 text-foreground-soft">
                {labPage.audience.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-mint" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {labPage.outcomes.map((item) => (
            <article key={item} className="panel rounded-[var(--radius-lg)] p-5">
              <CheckCircle2 className="h-5 w-5 text-mint" />
              <p className="mt-4 leading-7 text-foreground-soft">{item}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          {labPage.pillars.map((pillar) => (
            <article key={pillar.title} className="panel rounded-[var(--radius-xl)] p-6 md:p-8">
              <span className="eyebrow">Inside Lab</span>
              <h2 className="mt-4 text-2xl font-semibold text-cream">{pillar.title}</h2>
              <p className="mt-4 leading-7 text-foreground-soft">{pillar.description}</p>
            </article>
          ))}
        </section>

        <section id="join" className="grid gap-5 xl:grid-cols-2">
          {labPage.plans.map((plan) => (
            <article
              key={plan.name}
              className={`panel rounded-[var(--radius-xl)] p-6 md:p-8 ${plan.featured ? "border-orange/40 bg-[linear-gradient(180deg,rgba(41,29,20,0.96),rgba(17,19,21,0.96))]" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-muted">{plan.badge}</p>
                  <h2 className="mt-3 text-3xl font-semibold text-cream">{plan.name}</h2>
                </div>
                <p className="text-3xl font-semibold text-cream">{plan.price}</p>
              </div>
              <p className="mt-4 leading-7 text-foreground-soft">{plan.description}</p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-foreground-soft">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-mint" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <CheckoutButton
                offerKey={plan.offerKey}
                label={plan.ctaLabel}
                source="lab-page"
                className={`w-full inline-flex items-center justify-center rounded-full px-5 py-3 font-medium transition ${plan.featured ? "bg-orange text-slate-950 hover:bg-orange-strong" : "border border-border text-cream hover:border-mint/40 hover:bg-white/3"}`}
              />
              <p className="mt-4 text-xs leading-6 text-muted">
                Ready for real Stripe price IDs. Falls back to mock checkout in dev so the full handoff path can still be verified.
              </p>
            </article>
          ))}
        </section>

        <section className="panel rounded-[var(--radius-xl)] border border-mint/20 p-6 md:p-8">
          <span className="eyebrow">Implementation notes</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-cream">Membership checkout is wired and access provisioning can plug into the webhook.</h2>
          <ul className="mt-6 space-y-3 text-base leading-7 text-foreground-soft">
            {labPage.wiringNotes.map((note) => (
              <li key={note} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-orange" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </section>

        <CtaBlock
          eyebrow="Prefer the lower-risk path?"
          title="Start with the Guide if you still need to build the first employee."
          description="Lab is strongest after someone already believes in the model and wants ongoing implementation leverage. If they are not there yet, send them to the Guide first."
          primaryLabel="See the Guide"
          primaryHref="/guide"
          secondaryLabel="Grab the free Starter Kit"
          secondaryHref="/starter-kit"
        />

        <FaqAccordion />
      </div>
    </div>
  );
}
