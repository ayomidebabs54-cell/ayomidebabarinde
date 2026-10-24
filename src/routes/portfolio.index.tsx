import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, PortfolioBrowser, seo } from "@/components/site";

export const Route = createFileRoute("/portfolio/")({
  head: () => seo("Portfolio — 150 Shopify, Klaviyo & AI Animation Projects", "Browse 150 labeled concept and demo projects across Shopify design, Klaviyo email and AI animation.", "/portfolio"),
  component: () => (
    <>
      <PageHero eyebrow="Portfolio" title="150 projects across three disciplines." intro="Filter by service or industry. Every card shows whether it's client, concept, demo or personal work." />
      <Section><PortfolioBrowser /></Section>
    </>
  ),
});
