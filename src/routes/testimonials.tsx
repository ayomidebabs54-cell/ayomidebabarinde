import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Testimonials, seo } from "@/components/site";

export const Route = createFileRoute("/testimonials")({
  head: () => seo("Client Testimonials — Real, Approved Feedback Only", "Feedback from clients on Shopify, Klaviyo and AI animation projects. Only genuine, approved testimonials appear here.", "/testimonials"),
  component: () => (
    <>
      <PageHero eyebrow="Testimonials" title="Client experiences" intro="Only genuine, client-approved feedback is shown on this page." />
      <Testimonials />
    </>
  ),
});
