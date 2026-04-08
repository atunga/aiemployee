import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { navLinks } from "@/lib/site-content";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-mint/30 bg-mint-soft text-mint">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-mint-strong">AI Employee</p>
            <p className="text-sm text-foreground-soft">AI leverage for operators</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-foreground-soft transition hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/starter-kit"
          className="inline-flex items-center gap-2 rounded-full border border-orange/40 bg-orange-soft px-4 py-2 text-sm font-medium text-cream transition hover:border-orange hover:bg-orange/20"
        >
          Get the Starter Kit
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}
