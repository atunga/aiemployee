"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site-content";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-pad py-10">
      <div className="container-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          <span className="eyebrow">FAQ</span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-cream md:text-5xl">
            Questions smart buyers ask before they commit.
          </h2>
          <p className="text-lg leading-8 text-foreground-soft">
            Clear answers, no fluff, so you can decide what fits your stage and move with confidence.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question} className="panel rounded-[var(--radius-lg)] p-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-lg font-medium text-cream">{item.question}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-mint transition ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen ? <p className="pt-4 leading-7 text-foreground-soft">{item.answer}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
