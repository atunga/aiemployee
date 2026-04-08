import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Mail, ShieldCheck } from "lucide-react";
import { LeadCaptureForm } from "@/components/lead-capture-form";
import { starterKitPage } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Starter Kit",
  description: "Free Starter Kit to help operators choose and scope their first AI employee.",
};

export default function StarterKitPage() {
  return (
    <div className="section-pad py-14 md:py-20">
      <div className="container-shell space-y-10">
        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <span className="eyebrow">
              <ShieldCheck className="h-4 w-4" />
              {starterKitPage.eyebrow}
            </span>
            <div className="space-y-4">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-cream md:text-7xl">
                {starterKitPage.title}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-foreground-soft md:text-xl">{starterKitPage.description}</p>
            </div>

            <ul className="grid gap-3 text-base leading-7 text-foreground-soft">
              {starterKitPage.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 rounded-2xl border border-border bg-white/3 px-4 py-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-mint" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="grid gap-4 sm:grid-cols-3">
              {starterKitPage.socialProof.map((item) => (
                <div key={item} className="panel rounded-[var(--radius-lg)] p-5 text-sm leading-6 text-foreground-soft">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <aside className="panel rounded-[var(--radius-xl)] border border-mint/20 p-6 md:p-8 lg:sticky lg:top-24">
            <div className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-mint-soft text-mint">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-cream">Get the Starter Kit</h2>
                <p className="mt-3 text-base leading-7 text-foreground-soft">
                  Tell us where to send it, and we’ll move you straight into the worksheet bundle and the next best resource for your stage.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <LeadCaptureForm source="starter-kit-page" compact />
            </div>
          </aside>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {starterKitPage.takeaways.map((item) => (
            <article key={item.title} className="panel rounded-[var(--radius-lg)] p-6">
              <div className="mb-4 h-1.5 w-12 rounded-full bg-gradient-to-r from-mint to-orange" />
              <h2 className="text-xl font-semibold text-cream">{item.title}</h2>
              <p className="mt-3 leading-7 text-foreground-soft">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="panel rounded-[var(--radius-xl)] px-6 py-8 md:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <span className="eyebrow">What happens after the opt-in</span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-cream md:text-5xl">
                The worksheet gets the role chosen. The guide gets the employee built.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-foreground-soft">
                Once someone sees the opportunity clearly, the next logical move is the guide page: role design, stack,
                brain, guardrails, training, performance management, and rollout.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/thank-you"
                className="inline-flex items-center justify-center rounded-full bg-orange px-6 py-3 font-medium text-slate-950 transition hover:bg-orange-strong"
              >
                See the download page
              </Link>
              <Link
                href="/guide"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 font-medium text-cream transition hover:border-mint/40 hover:bg-white/3"
              >
                See the full guide sales page
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
