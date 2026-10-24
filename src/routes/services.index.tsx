import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/config/site";
import { categoryMeta } from "@/data/projects";
import { PageHero, Section, seo } from "@/components/site";

export const Route = createFileRoute("/services/")({
  head: () => seo("Services — Shopify Design, Klaviyo Email & AI Animation", "Explore Shopify store design, Klaviyo email marketing and AI animation services for ecommerce brands.", "/services"),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Three connected services, one consistent brand experience." intro="Work with me on one area, or combine them so your store, emails and visuals feel like they belong together." />
      <Section>
        <div className="space-y-6">
          {services.map((s, i) => (
            <Link key={s.key} to={s.to} className="group grid overflow-hidden rounded-3xl border border-border bg-card transition hover:border-primary/40 md:grid-cols-2">
              <img src={categoryMeta[s.key].image} alt={s.name} loading="lazy" className={`aspect-[16/10] h-full w-full object-cover ${i % 2 ? "md:order-2" : ""}`} />
              <div className="flex flex-col justify-center p-8 md:p-12">
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                <h2 className={`mt-3 text-2xl font-semibold md:text-3xl ${s.color}`}>{s.name}</h2>
                <p className="mt-4 text-muted-foreground">{s.short}</p>
                <span className="mt-6 text-sm group-hover:text-primary">Explore service →</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
