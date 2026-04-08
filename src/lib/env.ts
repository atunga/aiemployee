function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "http://localhost:3000";
}

const appEnv = process.env.NODE_ENV || "development";
const previewCheckoutEnabled = process.env.MOCK_CHECKOUT_ENABLED === "true" && appEnv !== "production";

export const env = {
  appEnv,
  baseUrl: getBaseUrl(),
  automationWebhookUrl: process.env.AUTOMATION_WEBHOOK_URL || "",
  stripeSecretKey: process.env.STRIPE_SECRET_KEY || "",
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET || "",
  mockCheckoutEnabled: previewCheckoutEnabled,
  priceIds: {
    guide: process.env.STRIPE_PRICE_GUIDE || "",
    guide_toolkit: process.env.STRIPE_PRICE_GUIDE_TOOLKIT || "",
    guide_lab_bundle: process.env.STRIPE_PRICE_GUIDE_LAB_BUNDLE || "",
    lab_monthly: process.env.STRIPE_PRICE_LAB_MONTHLY || "",
    lab_annual: process.env.STRIPE_PRICE_LAB_ANNUAL || ""
  }
};
