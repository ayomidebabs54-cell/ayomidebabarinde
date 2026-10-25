import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHero, Section, seo } from "@/components/site";
import { InquiryForm, SERVICE_OPTIONS, type ServiceOption } from "@/components/inquiry-form";
import { site, hasBooking } from "@/config/site";

export const Route = createFileRoute("/consultation")({
  head: () => seo("Book a Free Consultation — Ayomide Babs", "Tell me about your Shopify, Klaviyo or AI animation project and arrange a free, no-obligation consultation.", "/consultation"),
  component: Consultation,
});

const onCall = [
  "A quick look at your business, audience and goals.",
  "The challenge you want help with and what you've tried so far.",
  "Whether I'm a good fit — and honest advice if I'm not.",
  "Possible next steps, scope and a rough timeline.",
];
const faqs: [string, string][] = [
  ["Is the consultation really free?", "Yes. It's a no-obligation conversation to understand your project. There's no pressure to hire me afterwards."],
  ["How long is the call?", "Usually around 30 minutes, depending on how much there is to discuss."],
  ["What should I prepare?", "Your store or brand link, any relevant accounts or examples, and the main problem you want to solve."],
  ["Do you guarantee results?", "No one can honestly guarantee sales or growth. I'll explain what I'd do, why, and how we'd judge whether it's working."],
];

function Consultation() {
  const [service, setService] = useState<ServiceOption | null>(null);
  const [objective, setObjective] = useState("");
  const [step, setStep] = useState<1 | 2>(1);
  const booking = hasBooking();

  return (
    <>
      <PageHero eyebrow="Free consultation" title={<>Let's talk about <span className="text-gradient">your project</span>.</>} intro="Pick a service, share what you're aiming for, then choose how to continue." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            {step === 1 ? (
              <div className="space-y-6 rounded-3xl glass p-6 md:p-8">
                <fieldset>
                  <legend className="text-sm font-medium">1. What do you need help with?</legend>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {SERVICE_OPTIONS.map((s) => (
                      <button key={s} type="button" aria-pressed={service === s} onClick={() => setService(s)}
                        className={`rounded-2xl border px-4 py-4 text-left text-sm transition ${service === s ? "border-primary bg-primary/10" : "border-border hover:border-primary/40"}`}>
                        {s}
                      </button>
                    ))}
                  </div>
                </fieldset>
                <div>
                  <label htmlFor="objective" className="text-sm font-medium">2. What's your main objective?</label>
                  <textarea id="objective" rows={4} maxLength={1000} value={objective} onChange={(e) => setObjective(e.target.value)}
                    placeholder="e.g. Make our product pages clearer on mobile"
                    className="mt-3 w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none focus:border-primary" />
                </div>
                <button type="button" disabled={!service} onClick={() => setStep(2)}
                  className="rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow disabled:opacity-40">
                  Continue
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <button type="button" onClick={() => setStep(1)} className="text-sm text-muted-foreground hover:text-foreground">← Change service or objective</button>
                {booking ? (
                  <div className="rounded-3xl glass p-8">
                    <p className="text-lg font-semibold">Choose a time that suits you</p>
                    <p className="mt-2 text-sm text-muted-foreground">You'll pick a slot on my booking page. Mention “{service}” so I can prepare.</p>
                    <a href={site.bookingUrl} target="_blank" rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
                      Book a time <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                ) : (
                  <>
                    <p className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted-foreground">
                      Online scheduling isn't set up yet. Send your details below and I'll reply to arrange a time.
                    </p>
                    <InquiryForm subject="Free consultation request" defaultService={service ?? "Not sure yet"} prefill={objective} />
                  </>
                )}
              </div>
            )}
          </div>
          <aside className="space-y-8">
            <div className="rounded-3xl border border-border p-6">
              <p className="eyebrow">What happens on the call</p>
              <ul className="mt-4 space-y-3 text-sm">{onCall.map((x) => <li key={x} className="border-t border-border pt-3">{x}</li>)}</ul>
            </div>
            <div>
              <p className="eyebrow">FAQ</p>
              <Accordion type="single" collapsible className="mt-2">
                {faqs.map(([q, a]) => (
                  <AccordionItem key={q} value={q}>
                    <AccordionTrigger>{q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
