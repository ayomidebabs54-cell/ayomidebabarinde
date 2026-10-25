import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, PrimaryButton, seo } from "@/components/site";

export const Route = createFileRoute("/project-planner")({
  head: () => seo("Project Planner — Scope Your Shopify, Klaviyo or Animation Project", "Pick the pieces you need and get a clear project outline to bring to a consultation.", "/project-planner"),
  component: Planner,
});

const groups: Record<string, string[]> = {
  "Shopify": ["Homepage design", "Product page improvements", "Collection & navigation", "Mobile experience review", "Store audit"],
  "Klaviyo": ["Welcome series", "Abandoned checkout flow", "Post-purchase flow", "Win-back flow", "Segmentation", "Email templates"],
  "AI Animation": ["Product reveal", "Social ad set", "Logo / brand animation", "Website loop"],
};

function Planner() {
  const [picked, setPicked] = useState<string[]>([]);
  const toggle = (x: string) => setPicked((p) => (p.includes(x) ? p.filter((y) => y !== x) : [...p, x]));
  return (
    <>
      <PageHero eyebrow="Project Planner" title="Outline what you need." intro="Select the pieces you're interested in. You'll get a simple outline to discuss — final scope and pricing are agreed together." />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(groups).map(([g, items]) => (
            <fieldset key={g} className="rounded-3xl glass p-6">
              <legend className="eyebrow px-1">{g}</legend>
              <div className="mt-2 space-y-2">
                {items.map((x) => (
                  <label key={x} className="flex items-center gap-3 text-sm"><input type="checkbox" checked={picked.includes(x)} onChange={() => toggle(x)} />{x}</label>
                ))}
              </div>
            </fieldset>
          ))}
        </div>
        {picked.length > 0 && (
          <div role="status" className="mt-8 rounded-3xl border border-border p-8">
            <p className="font-semibold">Your outline ({picked.length} item{picked.length > 1 ? "s" : ""})</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">{picked.map((p) => <li key={p}>{p}</li>)}</ul>
            <div className="mt-6"><PrimaryButton to="/consultation">Discuss this outline</PrimaryButton></div>
          </div>
        )}
      </Section>
    </>
  );
}
