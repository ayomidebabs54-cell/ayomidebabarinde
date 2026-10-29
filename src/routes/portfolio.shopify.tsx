import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { PageHero, Section, PrimaryButton, seo } from "@/components/site";
import { StorefrontShowcase } from "@/components/storefront-showcase";
import { site, hasWhatsApp } from "@/config/site";

export const Route = createFileRoute("/portfolio/shopify")({
  head: () =>
    seo(
      "Ecommerce Storefront Showcase — Storefront Inspiration",
      "A curated collection of third-party ecommerce storefronts across beauty, fashion, food, wellness and lifestyle, shared for inspiration.",
      "/portfolio/shopify",
    ),
  component: StorefrontPage,
});

function StorefrontPage() {
  return (
    <>
      <PageHero
        eyebrow="Storefront Inspiration"
        title="Ecommerce Storefront Showcase"
        intro="Explore a curated collection of ecommerce storefronts across beauty, fashion, food, wellness, and lifestyle. Discover different approaches to visual branding, product presentation, navigation, and the online shopping experience."
      >
        <p className="max-w-2xl rounded-2xl border border-dashed border-border p-4 text-sm text-muted-foreground">
          These websites are third-party brand examples for inspiration and showcase purposes. They
          are not my client projects, and I did not design, build or manage them.
        </p>
      </PageHero>
      <Section>
        <StorefrontShowcase />
      </Section>
      <Section
        eyebrow="Your store"
        title="Want a Storefront Like These?"
        intro="I can help you create a polished ecommerce experience tailored to your brand, products, and customers."
      >
        <div className="flex flex-wrap gap-3">
          <PrimaryButton to="/consultation">
            Discuss Your Project <ArrowUpRight className="h-4 w-4" />
          </PrimaryButton>
          {hasWhatsApp() && (
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-3 text-sm text-muted-foreground hover:text-foreground"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          )}
        </div>
      </Section>
    </>
  );
}
