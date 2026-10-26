import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, PortfolioBrowser, seo } from "@/components/site";

export const Route = createFileRoute("/portfolio/")({
  head: () =>
    seo(
      "Portfolio — 150 Shopify, Klaviyo & AI Animation Projects",
      "Browse 150 labeled concept and demo projects across Shopify design, Klaviyo email and AI animation.",
      "/portfolio",
    ),
  component: () => (
    <>
      <PageHero
        eyebrow="Portfolio — Ayomide Babs"
        title="Commerce. Connection. Motion."
        intro="Original storefront studies, lifecycle email concepts and creative direction — alongside a notebook of ideas still in development. Every project is labeled honestly."
      />
      <Section>
        <PortfolioBrowser />
      </Section>
    </>
  ),
});
