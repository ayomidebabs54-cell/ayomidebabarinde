import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, PortfolioBrowser, seo } from "@/components/site";

export const Route = createFileRoute("/portfolio/ai-animation")({
  head: () => seo("AI Animation Portfolio — Product & Brand Motion", "AI product reveals, fashion visuals, social ads and short-form motion experiments.", "/portfolio/ai-animation"),
  component: () => (
    <>
      <PageHero eyebrow="AI Animation Portfolio" title="Motion concepts & visual experiments." intro="Product reveals, campaign visuals, social ads and brand animations." />
      <Section><PortfolioBrowser initialCategory="animation" /></Section>
    </>
  ),
});
