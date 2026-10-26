// Add ONLY real, client-approved testimonials here. Leave empty until you have them.
export interface Testimonial {
  name: string;
  business?: string;
  photo?: string;
  service: "shopify" | "klaviyo" | "animation";
  text: string;
  rating?: number; // only if a verified rating exists
  projectSlug?: string;
  permissionStatus: "pending" | "granted" | "declined";
  verificationStatus: "unverified" | "verified";
  publicationStatus: "draft" | "published";
  illustrative?: boolean;
}

export const testimonials: Testimonial[] = [];

export const canPublishTestimonial = (t: Testimonial) =>
  !t.illustrative &&
  t.permissionStatus === "granted" &&
  t.verificationStatus === "verified" &&
  t.publicationStatus === "published";

export const illustrativeTestimonials: Testimonial[] = [
  {
    name: "",
    service: "shopify",
    text: "I wanted the store to feel more organized and professional. The design direction helped me see how the products, layout, and overall shopping experience could work together.",
    permissionStatus: "pending",
    verificationStatus: "unverified",
    publicationStatus: "draft",
    illustrative: true,
  },
  {
    name: "",
    service: "klaviyo",
    text: "The email layouts and flow structure made the customer journey much easier to understand. I especially liked having a clearer plan for how the different emails fit together.",
    permissionStatus: "pending",
    verificationStatus: "unverified",
    publicationStatus: "draft",
    illustrative: true,
  },
  {
    name: "",
    service: "animation",
    text: "The creative direction gave the concept a more polished visual identity. The final presentation felt more consistent with the look I wanted for the campaign.",
    permissionStatus: "pending",
    verificationStatus: "unverified",
    publicationStatus: "draft",
    illustrative: true,
  },
];
