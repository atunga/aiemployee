import { CtaBlock } from "@/components/cta-block";
import { EmailForm } from "@/components/email-form";
import { FaqAccordion } from "@/components/faq-accordion";
import { FeatureGrid } from "@/components/feature-grid";
import { HeroSection } from "@/components/hero-section";
import { PricingCards } from "@/components/pricing-cards";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureGrid />
      <EmailForm />
      <PricingCards />
      <CtaBlock
        eyebrow="Now the full ladder exists"
        title="Choose the path that matches how ready the buyer actually is."
        description="The homepage now routes clearly to the free Starter Kit, the paid Guide, and the recurring AI Employee Lab membership so visitors can self-select without friction."
        primaryLabel="Explore AI Employee Lab"
        primaryHref="/lab"
        secondaryLabel="See the Guide sales page"
        secondaryHref="/guide"
      />
      <FaqAccordion />
    </div>
  );
}
