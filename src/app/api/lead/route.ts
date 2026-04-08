import { NextResponse } from "next/server";
import { sendAutomationEvent } from "@/lib/automations";
import { offers } from "@/lib/offers";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      firstName?: string;
      email?: string;
      role?: string;
      biggestBottleneck?: string;
      source?: string;
    };

    if (!body.firstName || !body.email) {
      return NextResponse.json({ error: "First name and email are required." }, { status: 400 });
    }

    await sendAutomationEvent("lead.captured", {
      contact: {
        firstName: body.firstName,
        email: body.email,
        role: body.role || null,
        biggestBottleneck: body.biggestBottleneck || null
      },
      source: body.source || "starter-kit",
      tags: offers.starter_kit.tags,
      deliverables: offers.starter_kit.deliveryAssets,
      nextOffer: "guide"
    });

    const params = new URLSearchParams({
      email: body.email,
      firstName: body.firstName
    });

    return NextResponse.json({ ok: true, redirectTo: `/thank-you?${params.toString()}` });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Lead capture failed." }, { status: 500 });
  }
}
