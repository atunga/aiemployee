import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { CtaBlock } from "@/components/cta-block";
import { FaqAccordion } from "@/components/faq-accordion";
import { PricingCards } from "@/components/pricing-cards";
import { guidePage } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Guide",
  description: "Long-form sales page for the Build Your First AI Employee guide.",
};

export default function GuidePage() {
  return (
    <div className="section-pad py-14 md:py-20">
      <div className="container-shell space-y-10">
        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <span className="eyebrow">
              <ShieldCheck className="h-4 w-4" />
              {guidePage.hero.eyebrow}
            </span>
            <div className="space-y-4">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-cream md:text-7xl">
                {guidePage.hero.title}
              </h1>
              <p className="text-balance text-2xl font-medium text-mint md:text-3xl">{guidePage.hero.subtitle}</p>
              <p className="max-w-2xl text-lg leading-8 text-foreground-soft md:text-xl">{guidePage.hero.description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-3 font-medium text-slate-950 transition hover:bg-orange-strong"
              >
                Get the guide
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/starter-kit"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 font-medium text-cream transition hover:border-mint/40 hover:bg-white/3"
              >
                Start with the free Starter Kit
              </Link>
            </div>
          </div>

          <aside className="panel rounded-[var(--radius-xl)] p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {guidePage.credibilityStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-border bg-background-alt/80 p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">{stat.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-cream">{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[var(--radius-lg)] border border-mint/20 bg-mint-soft/40 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-mint-strong">Core promise</p>
              <p className="mt-3 leading-7 text-foreground-soft">
                This is for people who want AI to own clear, repeatable work inside real workflows, not people collecting shiny tools and calling it strategy.
              </p>
            </div>
          </aside>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {guidePage.outcomes.map((item) => (
            <article key={item} className="panel rounded-[var(--radius-lg)] p-5">
              <CheckCircle2 className="h-5 w-5 text-mint" />
              <p className="mt-4 leading-7 text-foreground-soft">{item}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          {guidePage.chapterGroups.map((group) => (
            <article key={group.title} className="panel rounded-[var(--radius-xl)] p-6 md:p-8">
              <span className="eyebrow">Inside the guide</span>
              <h2 className="mt-4 text-2xl font-semibold text-cream">{group.title}</h2>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-foreground-soft md:text-base">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-orange" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          {guidePage.objections.map((item) => (
            <article key={item.title} className="panel rounded-[var(--radius-lg)] p-6">
              <h2 className="text-xl font-semibold text-cream">{item.title}</h2>
              <p className="mt-3 leading-7 text-foreground-soft">{item.description}</p>
            </article>
          ))}
        </section>

        <div id="pricing">
          <PricingCards />
        </div>

        <section className="panel rounded-[var(--radius-xl)] border border-orange/20 p-6 md:p-8">
          <span className="eyebrow">Simple purchase path</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-cream">Choose the guide option that matches how fast you want to move.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-foreground-soft">{guidePage.checkoutNote}</p>
        </section>

        <CtaBlock
          eyebrow="Why buy now"
          title="You can keep experimenting with tools, or you can finally build an employee that owns work."
          description="The guide is the bridge from AI curiosity to operator-grade execution. Buy the guide, use the templates, deploy the first role, and then move into Lab for ongoing support."
          primaryLabel="Buy the guide"
          primaryHref="#pricing"
          secondaryLabel="See AI Employee Lab"
          secondaryHref="/lab"
        />

        <FaqAccordion />
      </div>
    </div>
  );
}
