type CtaBlockProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaBlock({
  id,
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaBlockProps) {
  return (
    <section id={id} className="section-pad py-10">
      <div className="container-shell">
        <div className="panel rounded-[var(--radius-xl)] border border-border-strong px-6 py-8 md:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-4">
              <span className="eyebrow">{eyebrow}</span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-cream md:text-5xl">{title}</h2>
              <p className="max-w-2xl text-lg leading-8 text-foreground-soft">{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
              <a
                href={primaryHref}
                className="inline-flex items-center justify-center rounded-full bg-orange px-6 py-3 font-medium text-slate-950 transition hover:bg-orange-strong"
              >
                {primaryLabel}
              </a>
              {secondaryLabel && secondaryHref ? (
                <a
                  href={secondaryHref}
                  className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 font-medium text-cream transition hover:border-mint/40 hover:bg-white/3"
                >
                  {secondaryLabel}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
