import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-8">
      <div className="container-shell flex flex-col gap-4 text-sm text-foreground-soft md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-foreground">rAIzor Crest</p>
          <p>Operator-grade AI systems for founders, builders, and ambitious teams.</p>
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
          <Link href="/thank-you" className="hover:text-foreground">
            Thank You
          </Link>
        </div>
      </div>
    </footer>
  );
}
