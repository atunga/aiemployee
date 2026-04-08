import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { offers } from "@/lib/offers";
import { thankYouPage } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Thank You | rAIzor Crest",
  description: "Thank-you bridge page for Starter Kit signups moving into the full guide.",
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string; firstName?: string }>;
}) {
  const params = await searchParams;
  const starterKit = offers.starter_kit;

  return (
    <div className="section-pad py-16 md:py-24">
      <div className="container-shell space-y-8">
        <section className="panel rounded-[var(--radius-xl)] border border-mint/20 px-6 py-10 md:px-10 md:py-14">
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <span className="eyebrow">
              <CheckCircle2 className="h-4 w-4" />
              {thankYouPage.eyebrow}
            </span>
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-cream md:text-7xl">
              {thankYouPage.title}
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-foreground-soft md:text-xl">{thankYouPage.description}</p>
            {params.firstName ? <p className="text-sm text-muted">Nice, {params.firstName}. The delivery links are below.</p> : null}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {thankYouPage.checklist.map((item) => (
            <div key={item} className="panel rounded-[var(--radius-lg)] p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-mint-soft text-mint">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <p className="leading-7 text-foreground-soft">{item}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <article className="panel rounded-[var(--radius-lg)] p-6 md:p-8">
              <span className="eyebrow">Your downloads</span>
              <div className="mt-5 space-y-3">
                {starterKit.deliveryAssets.map((asset) => (
                  <a key={asset.href} href={asset.href} className="block rounded-2xl border border-border bg-background-alt px-5 py-4 transition hover:border-mint/40">
                    {asset.label}
                  </a>
                ))}
              </div>
              {params.email ? <p className="mt-4 text-sm text-muted">Delivery contact recorded for automation: {params.email}</p> : null}
            </article>
            {thankYouPage.bridgeCards.map((card) => (
              <article key={card.title} className="panel rounded-[var(--radius-lg)] p-6 md:p-8">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-soft text-orange">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-semibold text-cream">{card.title}</h2>
                <p className="mt-3 leading-7 text-foreground-soft">{card.description}</p>
              </article>
            ))}
          </div>

          <aside className="panel rounded-[var(--radius-xl)] border border-orange/30 p-6 md:p-8">
            <div className="space-y-4">
              <span className="eyebrow">Best next step</span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-cream md:text-5xl">
                Go straight to the guide if you want the full operating system.
              </h2>
              <p className="text-lg leading-8 text-foreground-soft">
                The Starter Kit gives clarity. The guide gives the framework for role design, stack choices, system instructions,
                guardrails, training loops, task backlogs, performance review, and the first 30 days.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/guide"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-3 font-medium text-slate-950 transition hover:bg-orange-strong"
              >
                See the guide offer
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/starter-kit"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 font-medium text-cream transition hover:border-mint/40 hover:bg-white/3"
              >
                Back to Starter Kit page
              </Link>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
