import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg.asset.json";
import { site } from "@/config/site";
import { PageHero, Section, PrimaryButton, seo } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => seo(`About ${site.name} — Shopify, Klaviyo & AI Animation`, "Who I am, how I work, and why I focus on design, customer experience and marketing together.", "/about"),
  component: About,
});

const values = [
  ["Clarity first", "I explain what I'm doing and why, in plain language."],
  ["Business-led design", "Every visual decision should support a real goal."],
  ["Honest scope", "Clear deliverables, realistic timelines, no inflated promises."],
  ["Care in the details", "Testing on real devices and checking every flow before handover."],
];

function About() {
  return (
    <>
      <PageHero eyebrow="About me" title={<>Hi, I'm <span className="text-gradient">{site.name}</span>.</>} intro={site.title} />
      <Section>
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <img src={portrait.url} alt={site.name} className="w-full rounded-3xl border border-border object-cover" />
          <div className="space-y-5 text-muted-foreground">
            <p className="text-lg text-foreground">I help ecommerce brands improve how their store feels, how they stay in touch with customers, and how their products show up visually.</p>
            <p>My work spans three connected areas: Shopify store design, Klaviyo email marketing and AI-assisted animation. I've chosen to work across all three because customers don't experience them separately — the product page, the follow-up email and the ad they saw last week all shape one impression of the brand.</p>
            <p>I like starting with questions: who's buying, what's getting in their way, and what the business actually needs right now. From there I plan a focused scope, build it carefully and refine it with you.</p>
            <p className="rounded-xl border border-dashed border-border p-4 text-sm">[Add your background, experience and any certifications here — only what's true and verifiable.]</p>
            <PrimaryButton to="/consultation">Book a Free Consultation</PrimaryButton>
          </div>
        </div>
      </Section>
      <Section eyebrow="How I work" title="What you can expect">
        <div className="grid gap-4 md:grid-cols-4">
          {values.map(([t, d]) => (
            <div key={t} className="rounded-2xl glass p-6"><h3 className="text-base font-semibold">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p></div>
          ))}
        </div>
      </Section>
    </>
  );
}
