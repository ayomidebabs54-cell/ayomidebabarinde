import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, seo } from "@/components/site";
import { hasWhatsApp } from "@/config/site";
import { whatsappWithText } from "@/lib/service-param";

export const Route = createFileRoute("/project-planner")({
  head: () =>
    seo(
      "Project Planner — Scope Your Shopify, Klaviyo or Animation Project",
      "Pick a service, goals, deliverables and timeframe to generate a project brief you can send or bring to a consultation.",
      "/project-planner",
    ),
  component: Planner,
});

const SERVICES = {
  shopify: {
    name: "Shopify Store Design",
    goals: [
      "Clearer product pages",
      "Better mobile shopping",
      "Easier navigation",
      "Fresh brand look",
    ],
    deliverables: [
      "Homepage design",
      "Product page improvements",
      "Collection & navigation",
      "Store audit",
    ],
  },
  klaviyo: {
    name: "Klaviyo Email Marketing",
    goals: [
      "Welcome new subscribers",
      "Recover abandoned checkouts",
      "Bring customers back",
      "Better-looking emails",
    ],
    deliverables: [
      "Welcome series",
      "Abandoned checkout flow",
      "Post-purchase flow",
      "Win-back flow",
      "Segmentation",
      "Email templates",
    ],
  },
  animation: {
    name: "AI Animation",
    goals: ["Launch a product", "Social content", "Ad creative", "Website visuals"],
    deliverables: ["Product reveal", "Social ad set", "Logo / brand animation", "Website loop"],
  },
} as const;
type SKey = keyof typeof SERVICES;
const TIMEFRAMES = ["As soon as possible", "Within a month", "1–3 months", "Flexible"];

function Planner() {
  const [svc, setSvc] = useState<SKey | null>(null);
  const [goals, setGoals] = useState<string[]>([]);
  const [items, setItems] = useState<string[]>([]);
  const [time, setTime] = useState("");
  const [copied, setCopied] = useState(false);
  const toggle = (set: typeof setGoals) => (x: string) =>
    set((p) => (p.includes(x) ? p.filter((y) => y !== x) : [...p, x]));
  const chip = (on: boolean) =>
    `rounded-full px-4 py-1.5 text-sm ${on ? "bg-gradient-brand text-primary-foreground" : "border border-border"}`;

  const brief =
    svc && items.length > 0 && time
      ? [
          `Service: ${SERVICES[svc].name}`,
          `Goals: ${goals.length ? goals.join(", ") : "To discuss"}`,
          `Deliverables: ${items.join(", ")}`,
          `Timeframe: ${time}`,
        ].join("\n")
      : "";

  return (
    <>
      <PageHero
        eyebrow="Project Planner"
        title="Outline what you need."
        intro="Choose a service, goals, deliverables and timeframe. Final scope and pricing are agreed together."
      />
      <Section>
        <div className="space-y-6">
          <fieldset className="rounded-3xl glass p-6">
            <legend className="text-sm font-medium">1. Service</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {(Object.keys(SERVICES) as SKey[]).map((k) => (
                <button
                  key={k}
                  type="button"
                  aria-pressed={svc === k}
                  className={chip(svc === k)}
                  onClick={() => {
                    setSvc(k);
                    setGoals([]);
                    setItems([]);
                  }}
                >
                  {SERVICES[k].name}
                </button>
              ))}
            </div>
          </fieldset>
          {svc && (
            <>
              {(
                [
                  ["2. Goals", SERVICES[svc].goals, goals, toggle(setGoals)],
                  ["3. Deliverables", SERVICES[svc].deliverables, items, toggle(setItems)],
                ] as const
              ).map(([label, opts, sel, fn]) => (
                <fieldset key={label} className="rounded-3xl glass p-6">
                  <legend className="text-sm font-medium">{label}</legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {opts.map((o) => (
                      <button
                        key={o}
                        type="button"
                        aria-pressed={sel.includes(o)}
                        className={chip(sel.includes(o))}
                        onClick={() => fn(o)}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                </fieldset>
              ))}
              <fieldset className="rounded-3xl glass p-6">
                <legend className="text-sm font-medium">4. Timeframe</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {TIMEFRAMES.map((t) => (
                    <button
                      key={t}
                      type="button"
                      aria-pressed={time === t}
                      className={chip(time === t)}
                      onClick={() => setTime(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </fieldset>
            </>
          )}
        </div>
        {brief && svc && (
          <div role="status" className="mt-8 rounded-3xl border border-border p-8">
            <p className="font-semibold">Your project brief</p>
            <pre className="mt-3 whitespace-pre-wrap rounded-xl bg-secondary/40 p-4 font-mono text-sm">
              {brief}
            </pre>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(brief);
                    setCopied(true);
                  } catch {
                    setCopied(false);
                  }
                }}
                className="rounded-full border border-border px-5 py-2.5 text-sm"
              >
                {copied ? "Copied" : "Copy"}
              </button>
              <Link
                to="/contact"
                search={{ service: svc, brief }}
                className="rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
              >
                Use in contact form
              </Link>
              {hasWhatsApp() && (
                <a
                  href={whatsappWithText(brief)}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border px-5 py-2.5 text-sm"
                >
                  Send on WhatsApp
                </a>
              )}
            </div>
          </div>
        )}
      </Section>
    </>
  );
}
