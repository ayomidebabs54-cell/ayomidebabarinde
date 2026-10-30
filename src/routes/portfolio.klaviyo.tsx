import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, Section, PrimaryButton, GhostButton, seo } from "@/components/site";
import { EmailShowcase } from "@/components/email-showcase";

export const Route = createFileRoute("/portfolio/klaviyo")({
  head: () =>
    seo(
      "Klaviyo Email Marketing Portfolio — Ayomide Babs",
      "Explore 26 email campaign examples across promotional, abandoned-cart, social proof, seasonal and sale campaigns from five well-known brands.",
      "/portfolio/klaviyo",
    ),
  component: () => (
    <>
      <PageHero
        eyebrow="Email Inspiration & Campaign Examples"
        title="Klaviyo Email Marketing Portfolio"
        intro="Explore examples of promotional campaigns, product education, social proof, seasonal offers and abandoned-cart messaging — organized into brand collections so you can compare different email marketing styles."
      />
      <Section className="pt-0">
        <EmailShowcase />
      </Section>
      <Section
        eyebrow="Your turn"
        title="Want emails like these for your own brand?"
        intro="Let's talk about your Klaviyo campaigns and flows — from welcome series and abandoned checkout to seasonal campaigns and segmentation."
      >
        <div className="flex flex-wrap gap-3">
          <PrimaryButton to="/consultation">
            Book a Free Consultation <ArrowUpRight className="h-4 w-4" />
          </PrimaryButton>
          <GhostButton to="/services/klaviyo">Klaviyo services</GhostButton>
        </div>
      </Section>
    </>
  ),
});
