"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Menu, Sparkles, X } from "lucide-react";
import { navLinks } from "@/lib/site-content";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-shell py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-mint/30 bg-mint-soft text-mint">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-mint-strong">rAIzor Crest</p>
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

          <div className="hidden md:block">
            <Link
              href="/starter-kit"
              className="inline-flex items-center gap-2 rounded-full border border-orange/40 bg-orange-soft px-4 py-2 text-sm font-medium text-cream transition hover:border-orange hover:bg-orange/20"
            >
              Get the free Starter Kit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-background-alt text-cream transition hover:border-mint/40 md:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="mt-4 panel rounded-[var(--radius-lg)] p-4 md:hidden">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm text-foreground-soft transition hover:bg-white/3 hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/starter-kit"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-orange px-5 py-3 font-medium text-slate-950 transition hover:bg-orange-strong"
              >
                Get the free Starter Kit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
