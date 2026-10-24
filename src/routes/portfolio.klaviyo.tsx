import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, PortfolioBrowser, seo } from "@/components/site";

export const Route = createFileRoute("/portfolio/klaviyo")({
  head: () => seo("Klaviyo Portfolio — Email Flows & Campaigns", "Klaviyo welcome series, abandoned checkout, win-back, segmentation and email design concepts.", "/portfolio/klaviyo"),
  component: () => (
    <>
      <PageHero eyebrow="Klaviyo Portfolio" title="Email flows, campaigns & systems." intro="Flow maps, email designs, segmentation and lifecycle strategy." />
      <Section><PortfolioBrowser initialCategory="klaviyo" /></Section>
    </>
  ),
});
