import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, seo } from "@/components/site";

export const Route = createFileRoute("/resources")({
  head: () => seo("Resources & Insights — Ecommerce Design, Email & Motion", "Practical notes on Shopify store design, Klaviyo email marketing and AI animation for ecommerce brands.", "/resources"),
  component: Resources,
});

const notes: [string, string, string][] = [
  ["Shopify", "Five questions every product page should answer", "What is it, why it's worth it, will it fit, when will it arrive, and can I trust this store? If a shopper has to hunt for any of these, it's worth revisiting."],
  ["Klaviyo", "Start with the flows that run themselves", "Welcome, abandoned checkout and post-purchase flows work in the background every day. Getting these right usually matters more than one more campaign."],
  ["AI Animation", "Using AI without looking generic", "AI tools are fast, but a clear visual direction — lighting, palette, pacing — is what makes the result feel like your brand."],
  ["Shopify", "Design for thumbs first", "Most ecommerce visits happen on phones. Sticky add-to-cart, readable text and simple filters make a noticeable difference."],
  ["Klaviyo", "Segments before subject lines", "Sending the right message to the right group usually beats tweaking wording for everyone."],
  ["AI Animation", "Plan formats before production", "Decide early on vertical, square and landscape cuts so the composition works everywhere."],
];

function Resources() {
  return (
    <>
      <PageHero eyebrow="Resources & Insights" title="Notes from the work." intro="Short, practical ideas you can apply to your own brand." />
      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {notes.map(([c, t, d]) => (
            <article key={t} className="rounded-3xl border border-border bg-card p-6">
              <p className="eyebrow">{c}</p>
              <h2 className="mt-3 text-lg font-semibold">{t}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
