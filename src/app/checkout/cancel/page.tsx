import Link from "next/link";

export default function CheckoutCancelPage() {
  return (
    <div className="section-pad py-16 md:py-24">
      <div className="container-shell">
        <section className="panel rounded-[var(--radius-xl)] px-6 py-10 md:px-10 md:py-14">
          <span className="eyebrow">Checkout canceled</span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-cream md:text-6xl">No worries, your place in line is still warm.</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-foreground-soft">Send them back to the offer page or into the free Starter Kit so the funnel never dead-ends.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/guide" className="inline-flex items-center justify-center rounded-full bg-orange px-6 py-3 font-medium text-slate-950 transition hover:bg-orange-strong">Return to the Guide</Link>
            <Link href="/starter-kit" className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 font-medium text-cream transition hover:border-mint/40 hover:bg-white/3">Grab the free Starter Kit</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
