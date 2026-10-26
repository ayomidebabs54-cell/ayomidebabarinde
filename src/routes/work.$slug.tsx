import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, related, categoryMeta } from "@/data/projects";
import { Section, TypeBadge, ProjectCard, PrimaryButton, Testimonials } from "@/components/site";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.project;
    const t = p ? `${p.title} — ${categoryMeta[p.category].label} ${p.type}` : "Project unavailable";
    const d = p?.description ?? "This project could not be found.";
    return {
      meta: [
        { title: t }, { name: "description", content: d },
        { property: "og:title", content: t }, { property: "og:description", content: d },
        { property: "og:type", content: "article" }, { property: "og:url", content: `/work/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="pt-40 text-center"><h1 className="text-3xl">Project not found</h1><Link to="/portfolio" className="mt-4 inline-block text-primary">Back to portfolio</Link></div>
  ),
  component: CaseStudy,
});

function CaseStudy() {
  const { project: p } = Route.useLoaderData();
  const m = categoryMeta[p.category];
  const isClient = p.type === "Client Project";
  const blocks: [string, string][] = [
    ["Background & objective", p.objective],
    ["The opportunity", `${p.description} Many ${p.industry.toLowerCase()} brands face this; this ${p.type.toLowerCase()} explores one way to address it.`],
    ["Analysis & reasoning", "I started from the customer's point of view: what they need to know, feel or do at this moment, and what usually gets in the way."],
    ["My approach", p.approach ?? `This brief proposes a ${p.deliverables[0].toLowerCase()}, with a consistent brand voice and a clear customer journey. A project-specific design is still in development.`],
    ["Implementation & quality checks", p.visualReady ? "This presentation is a static concept visualization, not a production implementation. A live deliverable would require accessible text and controls, real content, device testing and any platform-specific validation." : "Before implementation, the brief needs project-specific assets, a reviewed scope and an agreed testing plan."],
    ["Lessons & next steps", p.lesson ?? "The next step is to turn the brief into a project-specific visual study and review its assumptions against a real audience and catalog."],
    ["Outcome", isClient ? "No verified client results are available for publication." : p.visualReady ? "The outcome shown here is a concept visualization. No client campaign, live storefront or performance results are claimed." : "This is an early design brief, not a completed project. No implementation or performance results are claimed."],
  ];
  return (
    <>
      <section className="pt-36">
        <div className="mx-auto max-w-5xl px-6">
          <Link to={m.route as "/"} className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground">← {m.label} portfolio</Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <TypeBadge type={p.type} />
            <span className={`font-mono text-xs uppercase tracking-wider ${m.color}`}>{m.label}</span>
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{p.industry}</span>
          </div>
          <h1 className="mt-5 text-4xl font-semibold md:text-6xl">{p.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{p.description}</p>
          {p.visualReady ? <figure className="mt-10">
            <img src={p.image} alt={p.title} width={1536} height={1024} className="aspect-[3/2] w-full rounded-lg border border-border object-contain" />
            <figcaption className="mt-4 max-w-3xl text-sm text-muted-foreground">{p.visualCaption}</figcaption>
          </figure> : <div className="mt-10 border-y border-border py-8"><p className="font-mono text-sm text-primary">Design brief · visual in development</p><p className="mt-3 text-muted-foreground">This idea does not yet have a project-specific visual preview.</p></div>}
        </div>
      </section>
      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[1fr_2fr]">
        <aside className="space-y-6 text-sm">
          <div><p className="eyebrow">Proposed deliverables</p><ul className="mt-3 space-y-1.5">{p.deliverables.map((d) => <li key={d}>{d}</li>)}</ul></div>
          <div><p className="eyebrow">Intended toolset</p><p className="mt-3 text-muted-foreground">{p.tools.join(", ")}</p></div>
          <div><p className="eyebrow">Tags</p><div className="mt-3 flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">{t}</span>)}</div></div>
        </aside>
        <div className="space-y-10">
          {blocks.map(([t, d]) => (
            <div key={t}><h2 className="text-xl font-semibold">{t}</h2><p className="mt-3 text-muted-foreground">{d}</p></div>
          ))}
          <div className="rounded-2xl glass p-6">
            <p className="font-semibold">Want something similar for your brand?</p>
            <div className="mt-4"><PrimaryButton to="/consultation">Discuss a similar project</PrimaryButton></div>
          </div>
        </div>
      </section>
      <Testimonials service={p.category} />
      <Section eyebrow="Keep exploring" title="Related projects">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{related(p).map((r) => <ProjectCard key={r.slug} p={r} />)}</div>
      </Section>
    </>
  );
}
