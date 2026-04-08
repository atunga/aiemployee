import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section id="top" className="section-pad pb-10 pt-16 md:pb-16 md:pt-24">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-6">
          <span className="eyebrow">
            <ShieldCheck className="h-4 w-4" />
            Operator-grade AI offer ladder
          </span>
          <div className="space-y-4">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-cream md:text-7xl">
              Stop dabbling with tools. Start building AI employees that own real work.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-foreground-soft md:text-xl">
              AI Employee gives operators a clean path: use the Starter Kit to choose the right role, use the Guide to
              build the first employee, then use AI Employee Lab to keep the system sharp every month.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/starter-kit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-mint px-6 py-3 font-medium text-slate-950 transition hover:bg-mint-strong"
            >
              Start with the free Starter Kit
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/guide"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 font-medium text-cream transition hover:border-mint/40 hover:bg-white/3"
            >
              See the paid Guide
            </Link>
          </div>
        </div>

        <div className="panel rounded-[var(--radius-xl)] p-6 md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Step 1", "Starter Kit: choose the right first AI employee and set the guardrails."],
              ["Step 2", "Guide: build the role, brain, workflow, and review system."],
              ["Step 3", "Lab: keep improving with monthly updates, role packs, and support."],
              ["Tone", "Confident, practical, premium, and execution-first."],
            ].map(([label, value]) => (
              <div key={label} className="rounded-3xl border border-border bg-background-alt/80 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">{label}</p>
                <p className="mt-3 text-base leading-7 text-cream">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
