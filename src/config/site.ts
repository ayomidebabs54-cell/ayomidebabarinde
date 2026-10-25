// Central place to update personal details. Replace every [PLACEHOLDER] with your real info.
// Placeholders still to fill in: whatsappUrl, bookingUrl, email, profiles.
// Unconfigured values are hidden automatically (see isConfigured below).
export const site = {
  name: "Ayomide Babs",
  initials: "AB",
  title: "Shopify Specialist | Klaviyo Email Marketing Expert | AI Animation Creator",
  whatsappUrl: "https://wa.me/0000000000", // [MY_WHATSAPP_URL] e.g. https://wa.me/2348000000000
  bookingUrl: "", // [MY_BOOKING_URL] e.g. https://calendly.com/you/30min — leave "" to show the inquiry form
  email: "hello@example.com", // [MY_EMAIL]
  profiles: [
    { label: "LinkedIn", url: "#" }, // [MY_PROFILE_LINKS]
    { label: "Behance", url: "#" },
    { label: "Instagram", url: "#" },
  ],
};

/** False for empty strings, "#", example.com emails or the wa.me placeholder number. */
export function isConfigured(value: string | undefined | null): boolean {
  if (!value) return false;
  const v = value.trim().toLowerCase();
  if (v === "" || v === "#") return false;
  if (v.endsWith("@example.com") || v.includes("example.com")) return false;
  if (v.includes("wa.me/0000000000")) return false;
  return true;
}

export const hasWhatsApp = () => isConfigured(site.whatsappUrl);
export const hasEmail = () => isConfigured(site.email);
export const hasBooking = () => isConfigured(site.bookingUrl) && /^https?:\/\//.test(site.bookingUrl);
export const liveProfiles = () => site.profiles.filter((p) => isConfigured(p.url));

export const services = [
  {
    key: "shopify",
    name: "Shopify Store Design",
    short: "Store design, product pages, responsive layouts and shopping-experience optimization.",
    to: "/services/shopify",
    portfolio: "/portfolio/shopify",
    color: "text-shopify",
  },
  {
    key: "klaviyo",
    name: "Klaviyo Email Marketing",
    short: "Campaigns, automated flows, segmentation, email design and customer retention.",
    to: "/services/klaviyo",
    portfolio: "/portfolio/klaviyo",
    color: "text-klaviyo",
  },
  {
    key: "animation",
    name: "AI Animation & Creative",
    short: "AI-assisted animation, product visuals, promotional creative and short-form content.",
    to: "/services/ai-animation",
    portfolio: "/portfolio/ai-animation",
    color: "text-motion",
  },
] as const;
