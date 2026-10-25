import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import portrait from "@/assets/portrait.jpg.asset.json";
import ambient from "@/assets/ambient.jpg";
import { site, services, hasWhatsApp } from "@/config/site";
import { categoryMeta } from "@/data/projects";
import { PrimaryButton, GhostButton, Section, FeaturedGrid, Testimonials, seo } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => seo("Ayomide Babs — Shopify, Klaviyo & AI Animation Specialist", "I help ecommerce brands build better Shopify stores, turn customers into repeat buyers with Klaviyo, and create AI-powered visuals that get noticed.", "/"),
  component: Home,
});

const processSteps: [string, string][] = [
  ["Discover", "Understand the business, audience, objectives and existing challenges."],
  ["Analyze", "Review relevant assets, customer journeys, store experiences or marketing systems."],
  ["Plan", "Define the approach, scope, deliverables and priorities."],
  ["Build", "Design, configure, create and implement the agreed work."],
  ["Test", "Check functionality, responsiveness, quality and consistency."],
  ["Refine", "Apply agreed revisions and deliver the finished project."],
];

const problems: Record<string, string[]> = {
  shopify: ["The store looks good but shopping feels confusing.", "Product pages don't communicate value clearly.", "Mobile visitors struggle to navigate or check out.", "The store needs a more consistent, professional look."],
  klaviyo: ["Campaigns get opens and clicks, but few purchases.", "Automated flows are missing or poorly connected.", "Every customer gets the same generic message.", "The account is active but has no retention strategy."],
  animation: ["Product content looks like every competitor's.", "The brand needs more engaging promotional visuals.", "An idea is hard to explain with static images.", "Campaign visuals lack a consistent style."],
};

function Home() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40">
        <img src={ambient} alt="" width={1600} height={912} className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="pointer-events-none absolute inset-0 grid-bg" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="animate-rise">
            <p className="eyebrow">{site.name} — available for new projects</p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] md:text-6xl">
              Better shopping experiences. <span className="text-gradient">More repeat buyers.</span> Visuals that get noticed.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              From Shopify store experiences and Klaviyo email marketing to AI-powered animation, I help brands bring ideas to life through thoughtful design, strategy and careful execution.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryButton to="/consultation">Book a Free Consultation <ArrowUpRight className="h-4 w-4" /></PrimaryButton>
              <GhostButton to="/portfolio">Explore My Work</GhostButton>
              {hasWhatsApp() && <a href={site.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-3 text-sm text-muted-foreground hover:text-foreground">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>}
            </div>
            <div className="mt-12 flex flex-wrap gap-2">
              {services.map((s) => (
                <Link key={s.key} to={s.to} className={`rounded-full border border-border bg-background/50 px-4 py-2 font-mono text-xs uppercase tracking-wider backdrop-blur hover:border-primary/40 ${s.color}`}>{s.name}</Link>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm animate-float">
            <div className="absolute -inset-6 rounded-[2.5rem] border border-primary/20 animate-spin-slow" style={{ borderStyle: "dashed" }} />
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-brand opacity-60 blur-xl" />
            <img src={portrait.url} alt={`Portrait of ${site.name}`} width={790} height={1080} className="relative aspect-[4/5] w-full rounded-[2rem] border border-border object-cover object-top" />
            <div className="absolute -bottom-5 -left-5 rounded-2xl glass px-4 py-3">
              <p className="text-sm font-semibold">{site.name}</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Shopify · Klaviyo · AI Motion</p>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="About" title="Design, customer experience and marketing — working together.">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-center">
          <img src={portrait.url} alt={site.name} loading="lazy" className="aspect-square w-full max-w-xs rounded-3xl border border-border object-cover object-top" />
          <div className="space-y-4 text-muted-foreground">
            <p>I'm {site.name.split(" ")[0]}. I work at the point where a brand's look, its shopping experience and its marketing meet — because customers feel all three at once.</p>
            <p>Whether it's a cleaner product page, an email flow that sends the right message at the right time, or a short animation that makes a product impossible to scroll past, I start by understanding the business goal and work back from there.</p>
            <Link to="/about" className="inline-flex items-center gap-1 text-primary">More about me <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </Section>

      <Section eyebrow="Services" title="Three ways I can help">
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.key} className="group overflow-hidden rounded-3xl border border-border bg-card">
              <img src={categoryMeta[s.key].image} alt={s.name} loading="lazy" width={1200} height={800} className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="p-6">
                <h3 className={`text-lg font-semibold ${s.color}`}>{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                <div className="mt-5 flex gap-4 text-sm">
                  <Link to={s.to} className="text-foreground hover:text-primary">Service details →</Link>
                  <Link to={s.portfolio} className="text-muted-foreground hover:text-foreground">Portfolio</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Common challenges" title="Problems I help businesses look into" intro="Every business is different — these are starting points I can help investigate, not assumptions about yours.">
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.key} className="rounded-3xl glass p-6">
              <p className={`font-mono text-xs uppercase tracking-wider ${s.color}`}>{categoryMeta[s.key].label}</p>
              <ul className="mt-4 space-y-3 text-sm">
                {problems[s.key].map((p) => <li key={p} className="border-t border-border pt-3">{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="My approach" title="From understanding to delivery">
        <ol className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
          {processSteps.map(([t, d], i) => (
            <li key={t} className="bg-background p-7">
              <span className="font-mono text-xs text-primary">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Featured work" title="Selected projects" intro="A mix of concept and demo work across all three services — each one is labeled.">
        <FeaturedGrid />
        <div className="mt-10"><GhostButton to="/portfolio">View all 150 projects</GhostButton></div>
      </Section>

      <Testimonials />
    </>
  );
}
