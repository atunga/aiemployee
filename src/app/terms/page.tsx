import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use and purchase terms for rAIzor Crest products and memberships.",
};

export default function TermsPage() {
  return (
    <div className="section-pad py-16 md:py-24">
      <div className="container-shell max-w-4xl space-y-8">
        <section className="panel rounded-[var(--radius-xl)] p-8 md:p-10">
          <span className="eyebrow">Terms</span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-cream md:text-6xl">Terms of use and purchase</h1>
          <div className="mt-8 space-y-6 text-base leading-8 text-foreground-soft md:text-lg">
            <p>By purchasing or using these materials, you agree to use them for lawful business purposes and not to redistribute, resell, or reproduce the content without written permission.</p>
            <p>Digital products and memberships are provided for educational and operational support purposes. Your results depend on your own implementation, team, and operating environment.</p>
            <p>Prices, offer details, and membership benefits may change over time. Any active subscription renews according to the billing cadence shown at checkout until canceled.</p>
            <p>If you have billing questions or need support, contact <a className="text-mint hover:text-mint-strong" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
