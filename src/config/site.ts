// Central place to update personal details. Replace every [PLACEHOLDER] with your real info.
export const site = {
  name: "Ayomide Babs",
  initials: "AB",
  title: "Shopify Specialist | Klaviyo Email Marketing Expert | AI Animation Creator",
  whatsappUrl: "https://wa.me/0000000000", // [MY_WHATSAPP_URL]
  bookingUrl: "/consultation", // [MY_BOOKING_URL] — swap for Calendly etc.
  email: "hello@example.com", // [MY_EMAIL]
  profiles: [
    { label: "LinkedIn", url: "#" }, // [MY_PROFILE_LINKS]
    { label: "Behance", url: "#" },
    { label: "Instagram", url: "#" },
  ],
};

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
