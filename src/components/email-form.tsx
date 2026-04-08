import Link from "next/link";
import { LeadCaptureForm } from "@/components/lead-capture-form";

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
              Use this opt-in to get the Starter Kit, save the right delivery details, and move straight into the next step when the timing is right.
            </p>
            <div className="rounded-[var(--radius-lg)] border border-border bg-background-alt/80 p-5 text-sm leading-7 text-foreground-soft">
              <p className="font-medium text-cream">What happens next</p>
              <p className="mt-2">
                Delivery links live on the <Link href="/thank-you" className="text-mint transition hover:text-mint-strong">thank-you page</Link>, and your follow-up sequence can route buyers into the guide or Lab from there.
              </p>
            </div>
          </div>

          <LeadCaptureForm source="homepage" />
        </div>
      </div>
    </section>
  );
}
