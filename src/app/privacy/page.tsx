import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for rAIzor Crest and the AI Employee offers.",
};

export default function PrivacyPage() {
  return (
    <div className="section-pad py-16 md:py-24">
      <div className="container-shell max-w-4xl space-y-8">
        <section className="panel rounded-[var(--radius-xl)] p-8 md:p-10">
          <span className="eyebrow">Privacy Policy</span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-cream md:text-6xl">How we handle your information</h1>
          <div className="mt-8 space-y-6 text-base leading-8 text-foreground-soft md:text-lg">
            <p>We collect the information you submit through this site, such as your name, email address, and purchase details, to deliver products, respond to support requests, and improve the customer experience.</p>
            <p>We use trusted service providers for payments, email delivery, website hosting, and automation. Those providers only receive the data needed to perform their role.</p>
            <p>We do not sell your personal information. We may use your information to send product updates, onboarding messages, and relevant follow-up offers. You can unsubscribe from marketing emails at any time.</p>
            <p>If you want to request access, correction, or deletion of your data, email <a className="text-mint hover:text-mint-strong" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
