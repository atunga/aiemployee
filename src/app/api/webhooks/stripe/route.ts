import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { env } from "@/lib/env";
import { getOffer } from "@/lib/offers";
import { getStripe } from "@/lib/stripe";
import { sendAutomationEvent } from "@/lib/automations";

export async function POST(request: Request) {
  const stripe = getStripe();
  if (!stripe || !env.stripeWebhookSecret) {
    return NextResponse.json({ error: "Stripe webhook is not configured." }, { status: 500 });
  }

  const signature = (await headers()).get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature." }, { status: 400 });
  }

  const payload = await request.text();
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(payload, signature, env.stripeWebhookSecret);
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Invalid signature." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const offer = getOffer(session.metadata?.offerKey);

    await sendAutomationEvent("checkout.completed", {
      offerKey: offer.key,
      stripeSessionId: session.id,
      source: session.metadata?.source || "site",
      contact: {
        firstName: session.metadata?.firstName || null,
        email: session.customer_details?.email || session.customer_email || null
      },
      tags: offer.tags,
      deliverables: offer.deliveryAssets,
      handoffTarget: offer.handoffTarget || null,
      mode: "stripe"
    });
  }

  return NextResponse.json({ received: true });
}
