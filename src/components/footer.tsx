import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-8">
      <div className="container-shell grid gap-8 text-sm text-foreground-soft md:grid-cols-[1.2fr_0.8fr_0.9fr]">
        <div>
          <p className="font-medium text-foreground">rAIzor Crest</p>
          <p className="mt-2">Operator-grade AI systems for founders, builders, and ambitious teams.</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link href="/starter-kit" className="hover:text-foreground">
            Starter Kit
          </Link>
          <Link href="/guide" className="hover:text-foreground">
            Guide
          </Link>
          <Link href="/lab" className="hover:text-foreground">
            Lab
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            Terms
          </Link>
        </div>

        <div>
          <p className="font-medium text-foreground">Support</p>
          <a href={`mailto:${siteConfig.supportEmail}`} className="mt-2 inline-block hover:text-foreground">
            {siteConfig.supportEmail}
          </a>
          <p className="mt-2 text-xs leading-6 text-muted">Questions about billing, access, or delivery? Reach out and we’ll point you to the right next step.</p>
        </div>
      </div>
    </footer>
  );
}
