import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact rAIzor Crest for support, billing questions, and AI Employee inquiries.",
};

export default function ContactPage() {
  return (
    <div className="section-pad py-16 md:py-24">
      <div className="container-shell max-w-4xl space-y-8">
        <section className="panel rounded-[var(--radius-xl)] p-8 md:p-10">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-cream md:text-6xl">Questions about access, billing, or where to start?</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-foreground-soft">
            Reach out if you need help choosing the right offer, finding your purchase, or getting the right next step for your stage.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[var(--radius-lg)] border border-border bg-background-alt/80 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-muted">Email</p>
              <a href={`mailto:${siteConfig.supportEmail}`} className="mt-3 inline-block text-xl font-medium text-cream hover:text-mint">
                {siteConfig.supportEmail}
              </a>
            </div>
            <div className="rounded-[var(--radius-lg)] border border-border bg-background-alt/80 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-muted">Response window</p>
              <p className="mt-3 text-xl font-medium text-cream">Within 2 business days</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
