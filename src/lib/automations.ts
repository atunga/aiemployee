import { env } from "@/lib/env";
import { appendEvent } from "@/lib/store";

export async function sendAutomationEvent(type: string, payload: Record<string, unknown>) {
  await appendEvent({ type, payload });

  if (!env.automationWebhookUrl) {
    return { delivered: false, reason: "automation_webhook_missing" };
  }

  const response = await fetch(env.automationWebhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, ...payload })
  });

  if (!response.ok) {
    throw new Error(`Automation webhook failed: ${response.status}`);
  }

  return { delivered: true };
}
