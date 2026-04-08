"use client";

import { useState } from "react";
import type { OfferKey } from "@/lib/offers";

type CheckoutButtonProps = {
  offerKey: OfferKey;
  label: string;
  emailPlaceholder?: string;
  firstNamePlaceholder?: string;
  className: string;
  source: string;
};

export function CheckoutButton({ offerKey, label, className, source, emailPlaceholder = "you@company.com", firstNamePlaceholder = "Ted" }: CheckoutButtonProps) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function startCheckout() {
    setIsSubmitting(true);
    setError(null);

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ offerKey, email, firstName, source })
    });

    const payload = (await response.json()) as { checkoutUrl?: string; error?: string };

    if (!response.ok || !payload.checkoutUrl) {
      setError(payload.error || "Could not start checkout.");
      setIsSubmitting(false);
      return;
    }

    window.location.assign(payload.checkoutUrl);
  }

  return (
    <div className="mt-7 space-y-3">
      <input
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        type="text"
        placeholder={firstNamePlaceholder}
        className="w-full rounded-2xl border border-border bg-background-alt px-4 py-3 text-sm text-cream outline-none transition placeholder:text-muted focus:border-mint/50"
      />
      <input
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        type="email"
        placeholder={emailPlaceholder}
        className="w-full rounded-2xl border border-border bg-background-alt px-4 py-3 text-sm text-cream outline-none transition placeholder:text-muted focus:border-mint/50"
      />
      <button disabled={isSubmitting || !email} type="button" onClick={startCheckout} className={className}>
        {isSubmitting ? "Redirecting..." : label}
      </button>
      {error ? <p className="text-sm text-orange">{error}</p> : null}
    </div>
  );
}
