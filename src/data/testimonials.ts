// Add ONLY real, client-approved testimonials here. Leave empty until you have them.
export interface Testimonial {
  name: string;
  business?: string;
  photo?: string;
  service: "shopify" | "klaviyo" | "animation";
  text: string;
  rating?: number; // only if a verified rating exists
  projectSlug?: string;
}

export const testimonials: Testimonial[] = [];
