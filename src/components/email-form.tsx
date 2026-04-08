import Link from "next/link";

export function EmailForm() {
  return (
    <section id="starter-kit" className="section-pad py-10">
      <div className="container-shell">
        <div className="grid gap-8 rounded-[var(--radius-xl)] border border-mint/20 bg-[linear-gradient(135deg,rgba(117,240,193,0.09),rgba(255,154,87,0.08))] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.26)] md:grid-cols-[0.95fr_1.05fr] md:p-10">
          <div className="space-y-4">
            <span className="eyebrow">Primary conversion point</span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-cream md:text-5xl">
              Capture the email. Deliver the Starter Kit. Move the buyer journey forward.
            </h2>
            <p className="text-lg leading-8 text-foreground-soft">
              This is UI-only for now, but the layout is ready for your ESP or API wiring when the funnel goes live.
            </p>
            <div className="rounded-[var(--radius-lg)] border border-border bg-background-alt/80 p-5 text-sm leading-7 text-foreground-soft">
              <p className="font-medium text-cream">Implementation note</p>
              <p className="mt-2">
                Hook this form to your email platform, trigger asset delivery, then redirect successful submissions to the
                <Link href="/thank-you" className="ml-1 text-mint transition hover:text-mint-strong">
                  thank-you bridge page
                </Link>
                .
              </p>
            </div>
          </div>

          <form className="panel rounded-[var(--radius-xl)] p-6 md:p-8">
            <div className="grid gap-4">
              <label className="grid gap-2 text-sm text-foreground-soft">
                First name
                <input
                  type="text"
                  placeholder="Ted"
                  className="rounded-2xl border border-border bg-background-alt px-4 py-3 text-cream outline-none transition placeholder:text-muted focus:border-mint/50"
                />
              </label>
              <label className="grid gap-2 text-sm text-foreground-soft">
                Work email
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="rounded-2xl border border-border bg-background-alt px-4 py-3 text-cream outline-none transition placeholder:text-muted focus:border-mint/50"
                />
              </label>
              <label className="grid gap-2 text-sm text-foreground-soft">
                Biggest ops bottleneck
                <input
                  type="text"
                  placeholder="Repetitive work that keeps stealing hours"
                  className="rounded-2xl border border-border bg-background-alt px-4 py-3 text-cream outline-none transition placeholder:text-muted focus:border-mint/50"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-mint px-5 py-3 font-medium text-slate-950 transition hover:bg-mint-strong"
              >
                Send me the Starter Kit
              </button>
              <p className="text-xs leading-6 text-muted">
                Placeholder only. No backend submit handler, ESP action, analytics event, or redirect is connected yet.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
