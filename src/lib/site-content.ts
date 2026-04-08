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
    title: "Clear offer ladder",
    description:
      "The homepage routes cold traffic to the free Starter Kit, warm buyers to the Guide, and serious operators to Lab membership.",
  },
  {
    title: "Built for operators",
    description:
      "Practical systems, clear handoffs, and execution-first workflows instead of vague AI inspiration.",
  },
  {
    title: "Premium trust signals",
    description:
      "Dark surfaces, restrained accents, and crisp hierarchy give the brand a credible operator-grade feel.",
  },
  {
    title: "Reusable page blocks",
    description:
      "Shared sections keep the funnel consistent from first visit through checkout and onboarding.",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter Kit",
    price: "Free",
    description: "Start with the worksheet bundle that helps you pick the right first AI role fast.",
    badge: "Lead capture",
    ctaLabel: "Get the Starter Kit",
    ctaHref: "/starter-kit",
    features: ["8-page workbook", "30-minute clarity sprint", "Warmup into the paid guide"],
  },
  {
    name: "Guide",
    price: "$29",
    description: "Get the core operating playbook for hiring, training, and managing the first AI employee.",
    badge: "Core offer",
    ctaLabel: "Buy the guide",
    ctaHref: "/guide#pricing",
    offerKey: "guide",
    features: ["12 practical chapters", "Role design + guardrails", "30-day rollout plan", "Immediate Lab upsell bridge"],
    featured: true,
  },
  {
    name: "Guide + Toolkit + Lab",
    price: "$79",
    description: "Bundle the guide, worksheet assets, and the first month of Lab in a single checkout.",
    badge: "Highest LTV path",
    ctaLabel: "Buy the bundle",
    ctaHref: "/guide#pricing",
    offerKey: "guide_lab_bundle",
    features: ["Guide PDF", "Starter Kit assets", "First month of Lab", "Fastest path to implementation"],
  },
];

export const faqs = [
  {
    question: "Who is this built for?",
    answer:
      "Founders, operators, consultants, and ambitious professionals who want AI to own real work instead of just generating one-off outputs.",
  },
  {
    question: "How should someone move through the funnel?",
    answer:
      "Most people should start with the Starter Kit, use the guide to build the first employee, then join Lab if they want ongoing support, updates, and new implementation assets.",
  },
  {
    question: "Do I need to be technical?",
    answer:
      "No. The offers are framed for operators, not engineers. The focus is role design, workflows, guardrails, training, and practical deployment.",
  },
  {
    question: "How do payments and delivery work?",
    answer:
      "Lead capture, checkout, and post-purchase delivery are set up for a clean customer journey. Stripe pricing and fulfillment routing are controlled through environment configuration before launch.",
  },
];

export const homepageRoutes = [
  {
    eyebrow: "Start here",
    title: "Starter Kit",
    description:
      "For cold traffic and curious operators who need to choose the right first AI employee before they buy anything.",
    href: "/starter-kit",
    cta: "Get the free Starter Kit",
  },
  {
    eyebrow: "Build it",
    title: "Guide",
    description:
      "For buyers ready to design the role, choose the stack, write the brain, add guardrails, and run the first 30 days correctly.",
    href: "/guide",
    cta: "See the guide",
  },
  {
    eyebrow: "Keep shipping",
    title: "AI Employee Lab",
    description:
      "For operators who want ongoing updates, new role packs, implementation support, and a reason to keep improving every month.",
    href: "/lab",
    cta: "Explore Lab membership",
  },
];

export const starterKitPage = {
  eyebrow: "Free worksheet bundle",
  title: "Choose your first AI employee before you waste another month poking at tools.",
  description:
    "The First AI Employee Starter Kit helps you pick the right role, define the job, list the first tasks, and set guardrails in under 30 minutes.",
  bullets: [
    "Choose the best first AI role with a simple scorecard",
    "Define the job clearly before you build anything",
    "Map the first 10 tasks to delegate",
    "Set guardrails that protect trust from day one",
  ],
  socialProof: [
    "Built for founders, operators, consultants, and ambitious professionals",
    "Practical, anti-hype framing from the rAIzor Crest operating model",
    "Fast value now, smooth handoff into the full guide later",
  ],
  formFields: [
    { label: "First name", type: "text", placeholder: "Ted" },
    { label: "Work email", type: "email", placeholder: "you@company.com" },
    { label: "What role are you considering first?", type: "text", placeholder: "Inbox triage, meeting summaries, SOP drafting..." },
  ],
  takeaways: [
    {
      title: "Choose the right first role",
      description: "Use a simple scorecard to avoid picking a flashy but fragile first AI employee.",
    },
    {
      title: "Write the job before the prompt",
      description: "Get role clarity, mission, responsibilities, and non-responsibilities locked in first.",
    },
    {
      title: "Plan the first 10 tasks",
      description: "Turn abstract AI interest into concrete work that can be assigned and reviewed.",
    },
    {
      title: "Build the fence",
      description: "Set action, access, communication, and escalation guardrails before deployment.",
    },
  ],
};

export const thankYouPage = {
  eyebrow: "You’re in",
  title: "Starter Kit requested. Next move: don’t lose momentum.",
  description:
    "Your worksheet bundle is ready below. Use it to choose the role, then move into the full guide when you're ready to build the system behind it.",
  checklist: [
    "Download the Starter Kit below and save it somewhere your team can access",
    "Block 30 minutes to complete the role scorecard and guardrails pages",
    "Use the guide page when you are ready to move from planning into implementation",
  ],
  bridgeCards: [
    {
      title: "Start with the workbook",
      description: "Pick the right first role, define the job, and decide what AI should and should not own.",
    },
    {
      title: "Then get the operating playbook",
      description: "Learn the role design, stack, training, review, and rollout process that turns AI into leverage.",
    },
  ],
};

export const guidePage = {
  hero: {
    eyebrow: "Core paid offer",
    title: "Build Your First AI Employee",
    subtitle: "A practical guide to hiring, training, and managing AI agents that actually work.",
    description:
      "Stop thinking like a user. Start thinking like a manager. This guide shows you how to design the role, choose the stack, write the brain, set guardrails, train the employee, and manage performance without hype.",
  },
  outcomes: [
    "Choose a role that creates fast, reviewable value",
    "Write job descriptions and system instructions that actually hold up",
    "Create guardrails that protect trust without killing leverage",
    "Train the employee with examples, templates, and feedback loops",
    "Run a 30-day rollout with clear performance reviews",
  ],
  chapterGroups: [
    {
      title: "Part 1, Design the employee",
      items: [
        "Stop thinking tool, start thinking role",
        "What makes a strong first AI employee",
        "Pick the right job before you pick the stack",
        "Write a job description with boundaries and success metrics",
      ],
    },
    {
      title: "Part 2, Build the system",
      items: [
        "Choose a minimal stack that supports the role",
        "Write the brain: identity, mission, responsibilities, boundaries",
        "Set guardrails for action, access, communication, and escalation",
        "Train the employee with examples and revision loops",
      ],
    },
    {
      title: "Part 3, Run it like an operator",
      items: [
        "Assign the first recurring tasks and build a real backlog",
        "Manage performance with scorecards and review rhythm",
        "Avoid the common failure modes that kill trust",
        "Follow the first 30-day rollout plan",
      ],
    },
  ],
  credibilityStats: [
    { label: "Guide length", value: "12 chapters" },
    { label: "Practical assets", value: "4 appendices" },
    { label: "Primary promise", value: "Leverage over hype" },
  ],
  objections: [
    {
      title: "This is not a prompt dump.",
      description: "It is an operating manual for turning AI from interesting output into repeatable, reviewable work.",
    },
    {
      title: "This is not built for enterprise theater.",
      description: "It is built for founders and operators who want ROI, cleaner workflows, and fast implementation.",
    },
    {
      title: "This is not technical for the sake of sounding smart.",
      description: "It stays practical: role, stack, guardrails, training, task design, review, and scale.",
    },
  ],
  checkoutNote:
    "Checkout is configured through Stripe price IDs and fulfillment routes, so the buying flow can move cleanly from payment into delivery and onboarding.",
};

export const labPage = {
  hero: {
    eyebrow: "Recurring membership",
    title: "AI Employee Lab",
    subtitle: "Ongoing support for operators building AI employees that actually work.",
    description:
      "The guide gets your first AI employee live. Lab helps you keep improving the system with monthly workflow updates, new role packs, implementation help, operator Q&A, and a clear read on what changed this month.",
  },
  outcomes: [
    "Monthly workflow updates you can actually apply",
    "New AI employee role packs to speed up deployment",
    "Implementation help when your build gets messy",
    "Operator-focused Q&A and community access",
    "A simple AI brief on what changed this month and why it matters",
  ],
  pillars: [
    {
      title: "Monthly workflow updates",
      description: "See what changed in tooling, process, and practical execution without spending your week doom-scrolling AI news.",
    },
    {
      title: "New role packs",
      description: "Get fresh role ideas, job definitions, task maps, and guardrail thinking for the next employees on your roadmap.",
    },
    {
      title: "Implementation help",
      description: "When things break in the real world, you need applied support, not another generic webinar about the future.",
    },
    {
      title: "Q&A and community",
      description: "Learn alongside other operators who care about leverage, trust, and shipping useful systems instead of collecting demos.",
    },
    {
      title: "What changed this month brief",
      description: "A concise monthly summary of the AI shifts worth acting on so you know where to upgrade and where to ignore noise.",
    },
    {
      title: "Founding member positioning",
      description: "Early members get the strongest value story, closer feedback loops, and front-row influence on what gets built next.",
    },
  ],
  audience: [
    "You already bought the guide and want a practical next step",
    "You need help turning one employee into a repeatable operating system",
    "You want ongoing leverage, not one-time inspiration",
  ],
  plans: [
    {
      name: "Monthly",
      price: "$19/mo",
      badge: "Low-friction entry",
      description: "Best for operators who want current updates and implementation momentum without a bigger upfront commitment.",
      features: ["Everything in Lab", "Month-to-month access", "Easy first step after the guide"],
      ctaLabel: "Join monthly",
      offerKey: "lab_monthly",
    },
    {
      name: "Annual",
      price: "$190/yr",
      badge: "Best value",
      description: "Best for serious builders who know AI operations will stay on the roadmap all year.",
      features: ["2 months free vs monthly", "Priority founding member framing", "Best for long-term implementation rhythm"],
      ctaLabel: "Join annual",
      offerKey: "lab_annual",
      featured: true,
    },
  ] as LabPlan[],
  wiringNotes: [
    "Stripe monthly and annual price IDs control live checkout for each membership tier.",
    "Provisioning should hand off into your member system, such as Circle, Skool, Discord, or Kajabi.",
    "Add analytics for page views, checkout starts, and paid conversions before paid traffic goes live.",
  ],
};
