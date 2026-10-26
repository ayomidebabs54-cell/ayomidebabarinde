import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Testimonials, seo } from "@/components/site";

export const Route = createFileRoute("/testimonials")({
  head: () =>
    seo(
      "Client Experiences & Working Commitments — Ayomide Babs",
      "Working commitments and clearly labeled illustrative review samples for Shopify, Klaviyo and AI creative projects.",
      "/testimonials",
    ),
  component: () => (
    <>
      <PageHero
        eyebrow="Ayomide Babs"
        title="Client experiences"
        intro="Clear communication, considered work and an agreed scope. Genuine reviews are shared only after verification and permission."
      />
      <Testimonials />
    </>
  ),
});
