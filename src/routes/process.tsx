import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, PrimaryButton, seo } from "@/components/site";

export const Route = createFileRoute("/process")({
  head: () => seo("My Process — How Projects Run, Step by Step", "A six-step process from discovery to delivery for Shopify, Klaviyo and AI animation projects.", "/process"),
  component: Process,
});

const steps: [string, string, string][] = [
  ["Discover", "Understand the business, audience, objectives and existing challenges.", "Free consultation call, questionnaire, access to relevant accounts."],
  ["Analyze", "Review relevant assets, customer journeys, store experiences or marketing systems.", "Short findings summary with opportunities."],
  ["Plan", "Define the approach, scope, deliverables and priorities.", "Written scope, timeline and price — agreed before work begins."],
  ["Build", "Design, configure, create and implement the agreed work.", "Regular progress updates and previews."],
  ["Test", "Check functionality, responsiveness, quality and consistency.", "Device, browser and logic checks."],
  ["Refine", "Apply agreed revisions and deliver the finished project.", "Final files, handover notes and walkthrough."],
];

function Process() {
  return (
    <>
      <PageHero eyebrow="My Process" title="Clear steps. No surprises." intro="Every project follows the same honest structure, so you always know what's happening and what comes next." />
      <Section>
        <ol className="relative space-y-6 border-l border-border pl-8">
          {steps.map(([t, d, x], i) => (
            <li key={t} className="relative">
              <span className="absolute -left-[2.6rem] grid h-8 w-8 place-items-center rounded-full bg-gradient-brand font-mono text-xs text-primary-foreground">{i + 1}</span>
              <div className="rounded-2xl glass p-6">
                <h2 className="text-xl font-semibold">{t}</h2>
                <p className="mt-2 text-muted-foreground">{d}</p>
                <p className="mt-3 font-mono text-xs text-primary">What you get: {x}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12"><PrimaryButton to="/consultation">Start with a free consultation</PrimaryButton></div>
      </Section>
    </>
  );
}
