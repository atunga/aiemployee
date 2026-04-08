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
        eyebrow="Choose your next win"
        title="Start where you are, and get the result that matters next."
        description="Use the free Starter Kit to choose the right first AI role, the Guide to build it properly, or Lab to keep improving once AI is already carrying meaningful work."
        primaryLabel="Explore AI Employee Lab"
        primaryHref="/lab"
        secondaryLabel="See the Guide"
        secondaryHref="/guide"
      />
      <FaqAccordion />
    </div>
  );
}
