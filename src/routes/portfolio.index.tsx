import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, PortfolioBrowser, seo } from "@/components/site";

export const Route = createFileRoute("/portfolio/")({
  head: () =>
    seo(
      "Portfolio — Klaviyo Email & AI Animation Projects",
      "Browse labeled concept and demo projects across Klaviyo email and AI animation, plus a storefront inspiration showcase.",
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
