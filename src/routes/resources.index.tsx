import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, seo } from "@/components/site";
import { resources, RESOURCE_CATEGORIES } from "@/data/resources";

export const Route = createFileRoute("/resources/")({
  validateSearch: (s: Record<string, unknown>): { category?: string } => ({ category: typeof s.category === "string" ? s.category : undefined }),
  head: () => seo("Resources & Guides — Shopify, Klaviyo, Retention & AI Animation", "Short, practical guides on Shopify store design, Klaviyo email, customer retention and AI animation.", "/resources"),
  component: Resources,
});

function Resources() {
  const { category } = Route.useSearch();
  const active = RESOURCE_CATEGORIES.find((c) => c === category) ?? "";
  const list = active ? resources.filter((r) => r.category === active) : resources;
  const chip = (on: boolean) => `rounded-full px-4 py-1.5 text-sm ${on ? "bg-gradient-brand text-primary-foreground" : "border border-border hover:border-primary/40"}`;
  return (
    <>
      <PageHero eyebrow="Resources" title="Practical guides." intro="Short, plain ideas you can apply to your own brand." />
      <Section>
        <nav aria-label="Filter by category" className="mb-8 flex flex-wrap gap-2">
          <Link to="/resources" search={{}} className={chip(!active)} aria-current={!active ? "page" : undefined}>All</Link>
          {RESOURCE_CATEGORIES.map((c) => (
            <Link key={c} to="/resources" search={{ category: c }} className={chip(active === c)} aria-current={active === c ? "page" : undefined}>{c}</Link>
          ))}
        </nav>
        <div className="grid gap-5 md:grid-cols-3">
          {list.map((r) => (
            <Link key={r.slug} to="/resources/$slug" params={{ slug: r.slug }} className="rounded-3xl border border-border bg-card p-6 hover:border-primary/40">
              <p className="eyebrow">{r.category}</p>
              <h2 className="mt-3 text-lg font-semibold">{r.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{r.summary}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
