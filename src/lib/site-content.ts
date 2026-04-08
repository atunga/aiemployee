import type { OfferKey } from "@/lib/offers";

type PricingTier = {
  name: string;
  price: string;
  description: string;
  badge: string;
  ctaLabel: string;
  ctaHref: string;
  features: string[];
  featured?: boolean;
  offerKey?: OfferKey;
};

type LabPlan = {
  name: string;
  price: string;
  badge: string;
  description: string;
  features: string[];
  ctaLabel: string;
  offerKey: OfferKey;
  featured?: boolean;
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Starter Kit", href: "/starter-kit" },
  { label: "Guide", href: "/guide" },
  { label: "Lab", href: "/lab" },
  { label: "Contact", href: "/contact" },
];

export const features = [
  {
    title: "Pick the right first AI hire",
    description:
      "Get clear on which role will save the most time, reduce the most drag, and create visible wins fastest.",
  },
  {
    title: "Turn AI into accountable output",
    description:
      "Learn how to give AI a real job, clear boundaries, and reviewable work instead of one-off prompts.",
  },
  {
    title: "Build with operator confidence",
    description:
      "Everything is designed for founders and operators who care about speed, trust, and practical ROI.",
  },
  {
    title: "Keep improving without starting over",
    description:
      "Move from first deployment to ongoing upgrades with resources that compound as your AI team grows.",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter Kit",
    price: "Free",
    description: "Get fast clarity on the best first AI role for your business before you spend money or lose time.",
    badge: "Best first step",
    ctaLabel: "Get the Starter Kit",
    ctaHref: "/starter-kit",
    features: ["8-page workbook", "30-minute clarity sprint", "Role scorecard + guardrails"],
  },
  {
    name: "Guide",
    price: "$29",
    description: "Get the practical playbook for turning AI into a dependable teammate inside real workflows.",
    badge: "Most popular",
    ctaLabel: "Get the guide",
    ctaHref: "/guide#pricing",
    offerKey: "guide",
    features: ["12 practical chapters", "Role design + guardrails", "30-day rollout plan", "Templates you can use immediately"],
    featured: true,
  },
  {
    name: "Guide + Toolkit + Lab",
    price: "$79",
    description: "Get the guide, supporting assets, and your first month of Lab for the fastest path to results.",
    badge: "Fastest path",
    ctaLabel: "Get the bundle",
    ctaHref: "/guide#pricing",
    offerKey: "guide_lab_bundle",
    features: ["Guide PDF", "Starter Kit assets", "First month of Lab", "Best option for immediate momentum"],
  },
];

export const faqs = [
  {
    question: "Who is this for?",
    answer:
      "Founders, operators, consultants, and ambitious professionals who want AI to take on real work, not just generate occasional output.",
  },
  {
    question: "Where should I start?",
    answer:
      "If you are still deciding what AI should own first, start with the Starter Kit. If you already know you want to build a working AI role, get the Guide. If you want ongoing support and fresh implementation assets, join Lab.",
  },
  {
    question: "Do I need to be technical?",
    answer:
      "No. This is built for operators, not engineers. The focus is role design, workflows, guardrails, training, and practical deployment.",
  },
  {
    question: "How do payments and delivery work?",
    answer:
      "The free Starter Kit is delivered after signup, and paid offers use secure Stripe checkout with clear post-purchase access steps.",
  },
];

export const homepageRoutes = [
  {
    eyebrow: "Start with clarity",
    title: "Starter Kit",
    description:
      "Choose the best first AI role, define the job, and avoid wasting time on the wrong use case.",
    href: "/starter-kit",
    cta: "Get the free Starter Kit",
  },
  {
    eyebrow: "Build the system",
    title: "Guide",
    description:
      "Learn how to design the role, set guardrails, train the employee, and make AI useful inside day-to-day operations.",
    href: "/guide",
    cta: "See the guide",
  },
  {
    eyebrow: "Keep the edge",
    title: "AI Employee Lab",
    description:
      "Stay current with practical updates, new role packs, and support that helps your AI team keep getting better.",
    href: "/lab",
    cta: "Explore Lab",
  },
];

export const starterKitPage = {
  eyebrow: "Free Starter Kit",
  title: "Choose the right first AI employee, before you waste time on the wrong one.",
  description:
    "This worksheet bundle helps you identify the best first AI role, define what success looks like, and map the work it should take off your plate in under 30 minutes.",
  bullets: [
    "Pick the best first AI role with a simple scorecard",
    "Define the job clearly before you touch another tool",
    "Map the first tasks you want AI to own",
    "Set guardrails that protect quality and trust from day one",
  ],
  socialProof: [
    "Built for founders, operators, consultants, and ambitious professionals",
    "Practical, anti-hype guidance rooted in real operating leverage",
    "Fast to use, easy to act on, and built to create immediate clarity",
  ],
  formFields: [
    { label: "First name", type: "text", placeholder: "Ted" },
    { label: "Work email", type: "email", placeholder: "you@company.com" },
    { label: "What role are you considering first?", type: "text", placeholder: "Inbox triage, meeting summaries, SOP drafting..." },
  ],
  takeaways: [
    {
      title: "Choose the right first role",
      description: "Focus on the AI employee most likely to create quick wins and earn trust with your team.",
    },
    {
      title: "Get role clarity fast",
      description: "Lock in the mission, responsibilities, and limits before you build anything fragile.",
    },
    {
      title: "Turn interest into action",
      description: "Translate vague AI ambition into specific tasks you can assign, review, and improve.",
    },
    {
      title: "Protect quality from day one",
      description: "Set the boundaries that keep AI helpful, on-brand, and safe to use inside real work.",
    },
  ],
};

export const thankYouPage = {
  eyebrow: "Starter Kit unlocked",
  title: "Your Starter Kit is ready. Now turn that clarity into momentum.",
  description:
    "Download the workbook, choose the best first role, and use the Guide when you are ready to build an AI employee that can carry real work.",
  checklist: [
    "Download the Starter Kit and save it somewhere easy to revisit",
    "Block 30 minutes to complete the role scorecard and guardrails pages",
    "Move to the Guide when you are ready to build the role for real",
  ],
  bridgeCards: [
    {
      title: "Start with the workbook",
      description: "Choose the right first role, define the job, and get clear on what AI should and should not own.",
    },
    {
      title: "Then build the employee",
      description: "Use the Guide to turn that plan into a working system with training, guardrails, and review built in.",
    },
  ],
};

export const guidePage = {
  hero: {
    eyebrow: "Build your first AI employee",
    title: "Build Your First AI Employee",
    subtitle: "A practical guide to putting AI to work where it actually matters.",
    description:
      "If you want AI to save time, reduce drag, and own repeatable work, this guide shows you how to do it right. You will learn how to design the role, set the boundaries, train the employee, and manage performance without getting lost in hype.",
  },
  outcomes: [
    "Choose a role that creates fast, visible value",
    "Write job descriptions and instructions that hold up in real use",
    "Set guardrails that protect trust without slowing everything down",
    "Train the employee with examples, templates, and feedback loops",
    "Run a 30-day rollout with clear performance reviews",
  ],
  chapterGroups: [
    {
      title: "Part 1, Choose the right role",
      items: [
        "Think in jobs and outcomes, not tools and trends",
        "Spot what makes a strong first AI employee",
        "Choose the right role before you choose the stack",
        "Write a job description with boundaries and success metrics",
      ],
    },
    {
      title: "Part 2, Build a dependable system",
      items: [
        "Choose a lean stack that supports the work",
        "Define the employee's identity, mission, responsibilities, and limits",
        "Set guardrails for action, access, communication, and escalation",
        "Train the employee with examples and revision loops",
      ],
    },
    {
      title: "Part 3, Make it part of the business",
      items: [
        "Assign the first recurring tasks and create a usable backlog",
        "Manage performance with scorecards and review rhythm",
        "Avoid the failure patterns that kill trust early",
        "Follow the first 30-day rollout plan",
      ],
    },
  ],
  credibilityStats: [
    { label: "Guide length", value: "12 chapters" },
    { label: "Practical assets", value: "4 appendices" },
    { label: "What you get", value: "Clarity + execution" },
  ],
  objections: [
    {
      title: "This is not a pile of prompts.",
      description: "It is a practical operating manual for turning AI into consistent, reviewable work inside your business.",
    },
    {
      title: "This is not strategy theater.",
      description: "It is built for founders and operators who want cleaner workflows, faster execution, and measurable ROI.",
    },
    {
      title: "This is not technical just to sound smart.",
      description: "Everything stays grounded in role design, guardrails, training, task design, review, and scale.",
    },
  ],
  checkoutNote:
    "Choose the version that matches how much support and momentum you want right now, then move from purchase into access without friction.",
};

export const labPage = {
  hero: {
    eyebrow: "Ongoing support",
    title: "AI Employee Lab",
    subtitle: "Stay sharp, ship faster, and keep your AI team improving month after month.",
    description:
      "The Guide helps you launch your first AI employee. Lab helps you keep improving with practical updates, new role packs, implementation support, and a clearer read on what is worth acting on next.",
  },
  outcomes: [
    "Monthly updates you can actually apply",
    "New role packs that speed up your next deployment",
    "Support when your implementation gets messy",
    "Operator-focused Q&A and community access",
    "A simple monthly brief on what changed and why it matters",
  ],
  pillars: [
    {
      title: "Monthly workflow updates",
      description: "Know what changed in tooling and execution, without spending your week buried in AI news and random demos.",
    },
    {
      title: "New role packs",
      description: "Get fresh role ideas, task maps, and guardrail guidance so your next AI employee is easier to launch.",
    },
    {
      title: "Implementation help",
      description: "When the real world gets messy, get practical support that helps you fix problems and keep moving.",
    },
    {
      title: "Q&A and community",
      description: "Learn with other operators who care about leverage, trust, and building useful systems that stick.",
    },
    {
      title: "Monthly signal brief",
      description: "See the AI shifts worth paying attention to, so you can act on signal and ignore noise.",
    },
    {
      title: "Founding member access",
      description: "Early members get closer feedback loops, stronger value, and more influence on what gets built next.",
    },
  ],
  audience: [
    "You want practical help after launching your first AI employee",
    "You are turning one useful employee into a repeatable system",
    "You want ongoing leverage, not another burst of inspiration",
  ],
  plans: [
    {
      name: "Monthly",
      price: "$19/mo",
      badge: "Easy entry",
      description: "Best if you want current updates and steady support without a big upfront commitment.",
      features: ["Everything in Lab", "Month-to-month access", "A simple next step after the Guide"],
      ctaLabel: "Join monthly",
      offerKey: "lab_monthly",
    },
    {
      name: "Annual",
      price: "$190/yr",
      badge: "Best value",
      description: "Best if AI operations will stay on your roadmap all year and you want the strongest value.",
      features: ["2 months free vs monthly", "Priority founding member positioning", "Best for long-term momentum"],
      ctaLabel: "Join annual",
      offerKey: "lab_annual",
      featured: true,
    },
  ] as LabPlan[],
  wiringNotes: [
    "Secure Stripe checkout powers monthly and annual membership purchase.",
    "Membership access should hand off cleanly into your community or learning platform.",
    "Tracking key conversion points helps you improve the buying experience over time.",
  ],
};
