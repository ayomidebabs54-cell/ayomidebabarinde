import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, PrimaryButton, seo } from "@/components/site";

export const Route = createFileRoute("/opportunity-checker")({
  head: () => seo("Ecommerce Opportunity Checker — Free Self-Assessment", "Answer a few quick questions to spot possible opportunities across your store, email marketing and visual content.", "/opportunity-checker"),
  component: Checker,
});

const questions: { q: string; area: "Store experience" | "Email & retention" | "Visual content" }[] = [
  { q: "Product pages clearly explain benefits, sizing and shipping.", area: "Store experience" },
  { q: "Shopping and checkout feel easy on a phone.", area: "Store experience" },
  { q: "Navigation matches how customers actually browse.", area: "Store experience" },
  { q: "New subscribers get a welcome series.", area: "Email & retention" },
  { q: "Abandoned checkouts trigger reminder emails.", area: "Email & retention" },
  { q: "Customers get different messages depending on their stage.", area: "Email & retention" },
  { q: "Product visuals look distinct from competitors.", area: "Visual content" },
  { q: "We have short video or motion content for social.", area: "Visual content" },
  { q: "Campaign visuals follow a consistent style.", area: "Visual content" },
];

function Checker() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const done = Object.keys(answers).length === questions.length;
  const gaps = questions.filter((_, i) => answers[i] === false);
  const areas = Array.from(new Set(gaps.map((g) => g.area)));
  return (
    <>
      <PageHero eyebrow="Opportunity Checker" title="Where could your brand improve?" intro="A quick self-assessment. It's a starting point for conversation, not a diagnosis." />
      <Section>
        <ol className="space-y-3">
          {questions.map((x, i) => (
            <li key={x.q} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border p-5">
              <span className="text-sm"><span className="mr-2 font-mono text-xs text-primary">{x.area}</span>{x.q}</span>
              <div className="flex gap-2">
                {[true, false].map((v) => (
                  <button key={String(v)} type="button" aria-pressed={answers[i] === v} onClick={() => setAnswers({ ...answers, [i]: v })}
                    className={`rounded-full px-4 py-1.5 text-sm ${answers[i] === v ? "bg-gradient-brand text-primary-foreground" : "border border-border"}`}>
                    {v ? "Yes" : "Not yet"}
                  </button>
                ))}
              </div>
            </li>
          ))}
        </ol>
        {done && (
          <div role="status" className="mt-8 rounded-3xl glass p-8">
            {areas.length === 0 ? <p>Sounds like the fundamentals are in place. A review could still uncover refinements.</p> : (
              <>
                <p className="font-semibold">Areas worth looking into:</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">{areas.map((a) => <li key={a}>{a} ({gaps.filter((g) => g.area === a).length} item{gaps.filter((g) => g.area === a).length > 1 ? "s" : ""})</li>)}</ul>
              </>
            )}
            <div className="mt-6"><PrimaryButton to="/consultation">Talk it through</PrimaryButton></div>
          </div>
        )}
      </Section>
    </>
  );
}
