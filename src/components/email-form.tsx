import Link from "next/link";
import { LeadCaptureForm } from "@/components/lead-capture-form";

export function EmailForm() {
  return (
    <section id="starter-kit" className="section-pad py-10">
      <div className="container-shell">
        <div className="grid gap-8 rounded-[var(--radius-xl)] border border-mint/20 bg-[linear-gradient(135deg,rgba(117,240,193,0.09),rgba(255,154,87,0.08))] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.26)] md:grid-cols-[0.95fr_1.05fr] md:p-10">
          <div className="space-y-4">
            <span className="eyebrow">Free clarity sprint</span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-cream md:text-5xl">
              Get clear on your best first AI employee in about 30 minutes.
            </h2>
            <p className="text-lg leading-8 text-foreground-soft">
              The Starter Kit helps you stop guessing, choose the right role, and focus your AI effort where it can create fast, reviewable value.
            </p>
            <div className="rounded-[var(--radius-lg)] border border-border bg-background-alt/80 p-5 text-sm leading-7 text-foreground-soft">
              <p className="font-medium text-cream">What happens next</p>
              <p className="mt-2">
                You will land on the <Link href="/thank-you" className="text-mint transition hover:text-mint-strong">download page</Link> right away, and from there you can move into the Guide when you are ready to build the role for real.
              </p>
            </div>
          </div>

          <LeadCaptureForm source="homepage" />
        </div>
      </div>
    </section>
  );
}
