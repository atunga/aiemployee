"use client";

import { useState } from "react";

type LeadCaptureFormProps = {
  source: string;
  compact?: boolean;
};

export function LeadCaptureForm({ source, compact = false }: LeadCaptureFormProps) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [biggestBottleneck, setBiggestBottleneck] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, email, role, biggestBottleneck, source })
    });

    const payload = (await response.json()) as { error?: string; redirectTo?: string };

    if (!response.ok || !payload.redirectTo) {
      setError(payload.error || "Could not capture the lead.");
      setIsSubmitting(false);
      return;
    }

    window.location.assign(payload.redirectTo);
  }

  return (
    <form onSubmit={onSubmit} className={compact ? "grid gap-4" : "panel rounded-[var(--radius-xl)] p-6 md:p-8"}>
      <div className="grid gap-4">
        <label className="grid gap-2 text-sm text-foreground-soft">
          First name
          <input
            required
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            type="text"
            placeholder="Ted"
            className="rounded-2xl border border-border bg-background-alt px-4 py-3 text-cream outline-none transition placeholder:text-muted focus:border-mint/50"
          />
        </label>
        <label className="grid gap-2 text-sm text-foreground-soft">
          Work email
          <input
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="you@company.com"
            className="rounded-2xl border border-border bg-background-alt px-4 py-3 text-cream outline-none transition placeholder:text-muted focus:border-mint/50"
          />
        </label>
        <label className="grid gap-2 text-sm text-foreground-soft">
          What role are you considering first?
          <input
            value={role}
            onChange={(event) => setRole(event.target.value)}
            type="text"
            placeholder="Inbox triage, meeting summaries, SOP drafting..."
            className="rounded-2xl border border-border bg-background-alt px-4 py-3 text-cream outline-none transition placeholder:text-muted focus:border-mint/50"
          />
        </label>
        {!compact ? (
          <label className="grid gap-2 text-sm text-foreground-soft">
            Biggest ops bottleneck
            <input
              value={biggestBottleneck}
              onChange={(event) => setBiggestBottleneck(event.target.value)}
              type="text"
              placeholder="Repetitive work that keeps stealing hours"
              className="rounded-2xl border border-border bg-background-alt px-4 py-3 text-cream outline-none transition placeholder:text-muted focus:border-mint/50"
            />
          </label>
        ) : null}
        <button
          disabled={isSubmitting}
          type="submit"
          className="mt-2 inline-flex items-center justify-center rounded-full bg-mint px-5 py-3 font-medium text-slate-950 transition hover:bg-mint-strong disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send me the Starter Kit"}
        </button>
        <p className="text-xs leading-6 text-muted">
          We’ll use your details to deliver the Starter Kit and send the most relevant follow-up resources. You can unsubscribe anytime.
        </p>
        {error ? <p className="text-sm text-orange">{error}</p> : null}
      </div>
    </form>
  );
}
