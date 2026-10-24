import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, PortfolioBrowser, seo } from "@/components/site";

export const Route = createFileRoute("/portfolio/shopify")({
  head: () => seo("Shopify Portfolio — Store Design Concepts", "Shopify homepage, product page, collection and mobile shopping concepts across ten industries.", "/portfolio/shopify"),
  component: () => (
    <>
      <PageHero eyebrow="Shopify Portfolio" title="Store design concepts & demos." intro="Homepages, product pages, collections, audits and mobile experiences." />
      <Section><PortfolioBrowser initialCategory="shopify" /></Section>
    </>
  ),
});
