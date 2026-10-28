import type { ServiceOption } from "@/components/inquiry-form";
import { site } from "@/config/site";

export const SERVICE_PARAM: Record<string, ServiceOption> = {
  shopify: "Shopify Store Design",
  klaviyo: "Klaviyo Email Marketing",
  animation: "AI Animation",
};
export const serviceFromParam = (v?: string): ServiceOption | null =>
  (v && SERVICE_PARAM[v]) || null;
export const paramFromService = (s: ServiceOption) =>
  Object.keys(SERVICE_PARAM).find((k) => SERVICE_PARAM[k] === s);

/** Adds prefilled text to the configured WhatsApp URL. The user still presses send. */
export function whatsappWithText(text: string) {
  const u = new URL(site.whatsappUrl);
  u.searchParams.set("text", text.slice(0, 1500));
  return u.toString();
}
