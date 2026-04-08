import Link from "next/link";

export default function CheckoutCancelPage() {
  return (
    <div className="section-pad py-16 md:py-24">
      <div className="container-shell">
        <section className="panel rounded-[var(--radius-xl)] px-6 py-10 md:px-10 md:py-14">
          <span className="eyebrow">Checkout canceled</span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-cream md:text-6xl">No problem. You can pick this back up whenever you are ready.</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-foreground-soft">If you still want help deciding, start with the free Starter Kit. If you were already ready to buy, head back to the Guide and continue when the timing is right.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/guide" className="inline-flex items-center justify-center rounded-full bg-orange px-6 py-3 font-medium text-slate-950 transition hover:bg-orange-strong">Return to the Guide</Link>
            <Link href="/starter-kit" className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 font-medium text-cream transition hover:border-mint/40 hover:bg-white/3">Get the free Starter Kit</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
