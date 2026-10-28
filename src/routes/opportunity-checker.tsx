import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, PrimaryButton, seo } from "@/components/site";

export const Route = createFileRoute("/opportunity-checker")({
  head: () =>
    seo(
      "Ecommerce Opportunity Checker — Free Self-Assessment",
      "Answer four quick questions for preliminary guidance on your store, email marketing and visual content.",
      "/opportunity-checker",
    ),
  component: Checker,
});

const Q = {
  challenge: {
    label: "Main challenge",
    options: [
      "Visitors don't buy",
      "Customers don't come back",
      "Content doesn't stand out",
      "Not sure",
    ],
  },
  mobile: {
    label: "Share of traffic from phones",
    options: ["Under 50%", "50–75%", "Over 75%", "Don't know"],
  },
  flows: {
    label: "Klaviyo flows running",
    options: [
      "None / not using Klaviyo",
      "Welcome only",
      "Welcome + abandoned checkout",
      "Several flows",
    ],
  },
  list: {
    label: "Email list size",
    options: ["Under 1,000", "1,000–10,000", "Over 10,000", "Don't know"],
  },
} as const;
type Key = keyof typeof Q;

function guidance(a: Record<Key, string>) {
  const out: { area: string; service: "shopify" | "klaviyo" | "animation"; text: string }[] = [];
  if (a.challenge === "Visitors don't buy" || a.mobile === "Over 75%" || a.mobile === "50–75%")
    out.push({
      area: "Store experience",
      service: "shopify",
      text:
        a.mobile === "Over 75%"
          ? "Most of your visitors use phones, so reviewing the mobile product page and checkout is a sensible first step."
          : "Reviewing product page clarity — benefits, sizing, shipping and trust details — may help shoppers decide.",
    });
  if (a.flows === "None / not using Klaviyo" || a.flows === "Welcome only")
    out.push({
      area: "Email automation",
      service: "klaviyo",
      text: "Core automated flows (welcome, abandoned checkout, post-purchase) look like a gap worth filling before adding more campaigns.",
    });
  if (
    a.challenge === "Customers don't come back" ||
    (a.list !== "Under 1,000" && a.list !== "Don't know" && a.flows !== "Several flows")
  )
    out.push({
      area: "Retention",
      service: "klaviyo",
      text: "With an existing list, post-purchase and win-back messages tailored to customer stage could be worth exploring.",
    });
  if (a.challenge === "Content doesn't stand out")
    out.push({
      area: "Visual content",
      service: "animation",
      text: "Short product animations or motion pieces in a consistent style could help your brand feel more distinct.",
    });
  return out;
}

function Checker() {
  const [a, setA] = useState<Partial<Record<Key, string>>>({});
  const done = (Object.keys(Q) as Key[]).every((k) => a[k]);
  const result = done ? guidance(a as Record<Key, string>) : [];
  return (
    <>
      <PageHero
        eyebrow="Opportunity Checker"
        title="Where could your brand improve?"
        intro="Four quick questions. A starting point for conversation, not a diagnosis."
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {(Object.keys(Q) as Key[]).map((k) => (
            <fieldset key={k} className="rounded-3xl glass p-6">
              <legend className="text-sm font-medium">{Q[k].label}</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {Q[k].options.map((o) => (
                  <button
                    key={o}
                    type="button"
                    aria-pressed={a[k] === o}
                    onClick={() => setA({ ...a, [k]: o })}
                    className={`rounded-full px-4 py-1.5 text-sm ${a[k] === o ? "bg-gradient-brand text-primary-foreground" : "border border-border"}`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </fieldset>
          ))}
        </div>
        {done && (
          <div role="status" className="mt-8 rounded-3xl border border-border p-8">
            <p className="text-sm text-muted-foreground">
              Preliminary guidance based only on your answers. No store or account data was
              analysed.
            </p>
            {result.length === 0 ? (
              <p className="mt-4">
                Your answers suggest the basics are in place. A closer review could still find
                refinements.
              </p>
            ) : (
              <ul className="mt-4 space-y-3">
                {result.map((r) => (
                  <li key={r.area} className="border-t border-border pt-3 text-sm">
                    <span className="eyebrow block">{r.area}</span>
                    {r.text}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-6">
              <PrimaryButton to="/consultation">Talk it through</PrimaryButton>
            </div>
          </div>
        )}
      </Section>
    </>
  );
}
