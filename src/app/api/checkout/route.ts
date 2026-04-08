import { NextResponse } from "next/server";
import { env } from "@/lib/env";
import { getOffer, type OfferKey } from "@/lib/offers";
import { getStripe } from "@/lib/stripe";
import { sendAutomationEvent } from "@/lib/automations";

const priceIdMap: Partial<Record<OfferKey, string>> = {
  guide: env.priceIds.guide,
  guide_toolkit: env.priceIds.guide_toolkit,
  guide_lab_bundle: env.priceIds.guide_lab_bundle,
  lab_monthly: env.priceIds.lab_monthly,
  lab_annual: env.priceIds.lab_annual
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      offerKey?: OfferKey;
      email?: string;
      firstName?: string;
      source?: string;
    };

    const offer = getOffer(body.offerKey);

    if (!body.email) {
      return NextResponse.json({ error: "Email is required for checkout." }, { status: 400 });
    }

    const stripe = getStripe();
    const priceId = priceIdMap[offer.key];

    if (stripe && priceId) {
      const session = await stripe.checkout.sessions.create({
        mode: offer.mode,
        customer_email: body.email,
        success_url: `${env.baseUrl}/checkout/success?offer=${offer.key}&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${env.baseUrl}/checkout/cancel?offer=${offer.key}`,
        line_items: [{ price: priceId, quantity: 1 }],
        metadata: {
          offerKey: offer.key,
          source: body.source || "site",
          firstName: body.firstName || "",
          tags: offer.tags.join(",")
        }
      });

      return NextResponse.json({ ok: true, checkoutUrl: session.url });
    }

    if (!env.mockCheckoutEnabled) {
      return NextResponse.json({ error: "Checkout is not configured for this offer yet." }, { status: 503 });
    }

    await sendAutomationEvent("checkout.completed", {
      offerKey: offer.key,
      source: body.source || "site",
      contact: {
        firstName: body.firstName || null,
        email: body.email
      },
      tags: offer.tags,
      deliverables: offer.deliveryAssets,
      handoffTarget: offer.handoffTarget || null,
      mode: "preview"
    });

    const params = new URLSearchParams({ offer: offer.key, email: body.email });
    return NextResponse.json({ ok: true, checkoutUrl: `/checkout/success?${params.toString()}` });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Checkout failed." }, { status: 500 });
  }
}
