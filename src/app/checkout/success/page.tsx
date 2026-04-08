import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { getOffer } from "@/lib/offers";

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ offer?: string; email?: string; session_id?: string }>;
}) {
  const params = await searchParams;
  const offer = getOffer(params.offer);

  return (
    <div className="section-pad py-16 md:py-24">
      <div className="container-shell space-y-8">
        <section className="panel rounded-[var(--radius-xl)] border border-mint/20 px-6 py-10 md:px-10 md:py-14">
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <span className="eyebrow">
              <CheckCircle2 className="h-4 w-4" />
              Purchase complete
            </span>
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-cream md:text-7xl">{offer.successTitle}</h1>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-foreground-soft md:text-xl">{offer.successDescription}</p>
            {params.email ? <p className="text-sm text-muted">Receipt and delivery details are linked to {params.email}.</p> : null}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <article className="panel rounded-[var(--radius-xl)] p-6 md:p-8">
            <span className="eyebrow">Delivery</span>
            <div className="mt-5 space-y-4">
              {offer.deliveryAssets.length ? (
                offer.deliveryAssets.map((asset) => (
                  <a key={asset.href} href={asset.href} className="block rounded-2xl border border-border bg-background-alt px-5 py-4 transition hover:border-mint/40">
                    {asset.label}
                  </a>
                ))
              ) : (
                <p className="leading-7 text-foreground-soft">Your purchase now moves into onboarding and access setup. You’ll receive the next steps by email as the provisioning flow is finalized.</p>
              )}
            </div>
          </article>

          <aside className="panel rounded-[var(--radius-xl)] border border-orange/30 p-6 md:p-8">
            <span className="eyebrow">Best next step</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-cream">{offer.handoffTarget === "lab" ? "Watch for onboarding details." : "Keep momentum with the next offer."}</h2>
            <p className="mt-4 leading-7 text-foreground-soft">
              {offer.handoffTarget === "lab"
                ? "This purchase should hand off into onboarding, access setup, and the right follow-up sequence for new members."
                : "Keep the buyer moving with the next logical CTA in the ladder."}
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/lab" className="inline-flex items-center justify-center rounded-full bg-orange px-6 py-3 font-medium text-slate-950 transition hover:bg-orange-strong">
                Go to AI Employee Lab
              </Link>
              <Link href="/guide" className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 font-medium text-cream transition hover:border-mint/40 hover:bg-white/3">
                Back to the Guide offer
              </Link>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
