import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero, Section, PrimaryButton, seo } from "@/components/site";
import { getResource } from "@/data/resources";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const r = getResource(params.slug);
    if (!r) throw notFound();
    return r;
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? seo(`${loaderData.title} — Ayomide Babs`, loaderData.summary, `/resources/${params.slug}`)
      : {
          meta: [
            { title: "Guide not found — Ayomide Babs" },
            { name: "robots", content: "noindex" },
          ],
        },
  notFoundComponent: () => (
    <Section>
      <h1 className="text-2xl font-semibold">Guide not found</h1>
      <p className="mt-2 text-muted-foreground">That guide doesn't exist or has moved.</p>
      <Link to="/resources" search={{}} className="mt-4 inline-block text-primary underline">
        Browse all guides
      </Link>
    </Section>
  ),
  component: ResourcePage,
});

function ResourcePage() {
  const r = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={r.category} title={r.title} intro={r.summary} />
      <Section>
        <ol className="max-w-3xl space-y-3">
          {r.points.map((p, i) => (
            <li key={p} className="flex gap-4 rounded-2xl border border-border p-5 text-sm">
              <span className="font-mono text-primary">{String(i + 1).padStart(2, "0")}</span>
              {p}
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <PrimaryButton to="/consultation">Talk through your project</PrimaryButton>
          <Link
            to="/resources"
            search={{ category: r.category }}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            More {r.category} guides →
          </Link>
        </div>
      </Section>
    </>
  );
}
