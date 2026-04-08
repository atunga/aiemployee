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
    description: "Scorecard + worksheet bundle to help you choose the right first AI employee.",
    checkoutHeadline: "Get the Starter Kit",
    successTitle: "Starter Kit delivered",
    successDescription: "Your workbook is ready. Use it to choose the role, then move into the Guide when you are ready to build.",
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
    description: "The core guide for role design, guardrails, training, and rollout.",
    checkoutHeadline: "Get the guide",
    successTitle: "Your guide is ready",
    successDescription: "You now have the playbook to build your first dependable AI employee, plus the option to continue with Lab when you want ongoing support.",
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
    description: "The guide plus the Starter Kit assets in one package.",
    checkoutHeadline: "Get Guide + Toolkit",
    successTitle: "Your guide and toolkit are ready",
    successDescription: "You now have both the practical playbook and the supporting worksheets to move faster with more confidence.",
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
    description: "The guide, toolkit, and first month of Lab for the fastest path to traction.",
    checkoutHeadline: "Get the bundle",
    successTitle: "Your bundle is ready",
    successDescription: "You have the guide, the worksheets, and your first month of Lab lined up so you can move from clarity to action fast.",
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
    successTitle: "Your Lab membership is active",
    successDescription: "You are in. Watch for access details and your next steps so you can start using Lab right away.",
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
    successTitle: "Your annual Lab membership is active",
    successDescription: "You are set for the year. Watch for access details and onboarding so you can start putting Lab to work immediately.",
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
