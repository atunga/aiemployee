import Link from "next/link";
import { features, homepageRoutes } from "@/lib/site-content";

export function FeatureGrid() {
  return (
    <section className="section-pad py-10">
      <div className="container-shell space-y-10">
        <div className="max-w-3xl space-y-4">
          <span className="eyebrow">Choose your path</span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-cream md:text-5xl">
            Start with the outcome you want most.
          </h2>
          <p className="text-lg leading-8 text-foreground-soft">
            Whether you need clarity, a working system, or ongoing support, each offer is built to solve the next real problem in front of you.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {homepageRoutes.map((route) => (
            <article key={route.href} className="panel rounded-[var(--radius-xl)] p-6 md:p-8">
              <span className="eyebrow">{route.eyebrow}</span>
              <h3 className="mt-5 text-2xl font-semibold text-cream">{route.title}</h3>
              <p className="mt-4 leading-7 text-foreground-soft">{route.description}</p>
              <Link
                href={route.href}
                className="mt-6 inline-flex items-center justify-center rounded-full border border-border px-5 py-3 font-medium text-cream transition hover:border-mint/40 hover:bg-white/3"
              >
                {route.cta}
              </Link>
            </article>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <article key={feature.title} className="panel rounded-[var(--radius-lg)] p-6">
              <div className="mb-4 h-1.5 w-12 rounded-full bg-gradient-to-r from-mint to-orange" />
              <h3 className="text-xl font-semibold text-cream">{feature.title}</h3>
              <p className="mt-3 leading-7 text-foreground-soft">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
