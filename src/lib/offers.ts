export type OfferKey = "starter_kit" | "guide" | "guide_toolkit" | "guide_lab_bundle" | "lab_monthly" | "lab_annual";

export type Offer = {
  key: OfferKey;
  name: string;
  priceLabel: string;
  amountCents: number;
  mode: "payment" | "subscription";
  description: string;
  checkoutHeadline: string;
  successTitle: string;
  successDescription: string;
  redirectPath: string;
  tags: string[];
  deliveryAssets: Array<{ label: string; href: string }>;
  handoffTarget?: "lab";
};

export const offers: Record<OfferKey, Offer> = {
  starter_kit: {
    key: "starter_kit",
    name: "First AI Employee Starter Kit",
    priceLabel: "Free",
    amountCents: 0,
    mode: "payment",
    description: "Scorecard + worksheet bundle to choose the right first AI employee.",
    checkoutHeadline: "Get the Starter Kit",
    successTitle: "Starter Kit delivered",
    successDescription: "Use the worksheet to choose the role, then move into the guide when you're ready to build.",
    redirectPath: "/thank-you",
    tags: ["lead", "starter-kit"],
    deliveryAssets: [
      { label: "Download the Starter Kit PDF", href: "/assets/ai-employee-starter-kit.pdf" },
      { label: "Download the role scorecard", href: "/assets/lead-magnet-scorecard.md" }
    ]
  },
  guide: {
    key: "guide",
    name: "Build Your First AI Employee",
    priceLabel: "$29",
    amountCents: 2900,
    mode: "payment",
    description: "Core paid guide for role design, guardrails, training, and rollout.",
    checkoutHeadline: "Buy the guide",
    successTitle: "Guide purchase complete",
    successDescription: "You now have the full operating playbook plus the recommended next step into Lab.",
    redirectPath: "/checkout/success?offer=guide",
    tags: ["customer", "guide"],
    deliveryAssets: [{ label: "Download the guide PDF", href: "/assets/build-your-first-ai-employee-guide.pdf" }],
    handoffTarget: "lab"
  },
  guide_toolkit: {
    key: "guide_toolkit",
    name: "Guide + Toolkit",
    priceLabel: "$49",
    amountCents: 4900,
    mode: "payment",
    description: "Guide plus the Starter Kit assets bundled together.",
    checkoutHeadline: "Buy Guide + Toolkit",
    successTitle: "Guide + Toolkit purchase complete",
    successDescription: "The guide and worksheet assets are unlocked together, with a clean bridge into Lab.",
    redirectPath: "/checkout/success?offer=guide_toolkit",
    tags: ["customer", "guide-toolkit"],
    deliveryAssets: [
      { label: "Download the guide PDF", href: "/assets/build-your-first-ai-employee-guide.pdf" },
      { label: "Download the Starter Kit PDF", href: "/assets/ai-employee-starter-kit.pdf" },
      { label: "Download the role scorecard", href: "/assets/lead-magnet-scorecard.md" }
    ],
    handoffTarget: "lab"
  },
  guide_lab_bundle: {
    key: "guide_lab_bundle",
    name: "Guide + Toolkit + First Month of Lab",
    priceLabel: "$79",
    amountCents: 7900,
    mode: "payment",
    description: "Highest-conviction bundle with the guide, toolkit, and the first month of Lab.",
    checkoutHeadline: "Buy the launch bundle",
    successTitle: "Bundle purchase complete",
    successDescription: "Guide delivery is ready and the buyer is marked for Lab enrollment follow-up.",
    redirectPath: "/checkout/success?offer=guide_lab_bundle",
    tags: ["customer", "guide-toolkit", "lab-handoff"],
    deliveryAssets: [
      { label: "Download the guide PDF", href: "/assets/build-your-first-ai-employee-guide.pdf" },
      { label: "Download the Starter Kit PDF", href: "/assets/ai-employee-starter-kit.pdf" }
    ],
    handoffTarget: "lab"
  },
  lab_monthly: {
    key: "lab_monthly",
    name: "AI Employee Lab Monthly",
    priceLabel: "$19/mo",
    amountCents: 1900,
    mode: "subscription",
    description: "Monthly access to AI Employee Lab.",
    checkoutHeadline: "Join Lab monthly",
    successTitle: "Lab membership started",
    successDescription: "The buyer is ready for access provisioning and ongoing membership onboarding.",
    redirectPath: "/checkout/success?offer=lab_monthly",
    tags: ["customer", "lab", "lab-monthly"],
    deliveryAssets: [],
    handoffTarget: "lab"
  },
  lab_annual: {
    key: "lab_annual",
    name: "AI Employee Lab Annual",
    priceLabel: "$190/yr",
    amountCents: 19000,
    mode: "subscription",
    description: "Annual access to AI Employee Lab.",
    checkoutHeadline: "Join Lab annual",
    successTitle: "Annual Lab membership started",
    successDescription: "The buyer is ready for access provisioning and founding-member style onboarding.",
    redirectPath: "/checkout/success?offer=lab_annual",
    tags: ["customer", "lab", "lab-annual"],
    deliveryAssets: [],
    handoffTarget: "lab"
  }
};

export function getOffer(offerKey: string | null | undefined): Offer {
  const offer = offerKey ? offers[offerKey as OfferKey] : undefined;
  return offer ?? offers.guide;
}
