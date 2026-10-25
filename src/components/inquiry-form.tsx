import { useId, useState, type FormEvent, type ReactNode } from "react";
import { z } from "zod";
import { site, hasEmail, hasWhatsApp } from "@/config/site";

const field = "w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none focus:border-primary aria-[invalid=true]:border-destructive";

export const SERVICE_OPTIONS = ["Shopify Store Design", "Klaviyo Email Marketing", "AI Animation", "Not sure yet"] as const;
export type ServiceOption = (typeof SERVICE_OPTIONS)[number];

export const inquirySchema = z.object({
  name: z.string().trim().min(1, "Please add your name.").max(100, "Name must be under 100 characters."),
  email: z.string().trim().email("Please add a valid email address.").max(255),
  site: z.string().trim().max(200).optional(),
  service: z.enum(SERVICE_OPTIONS),
  timeline: z.string().max(60),
  budget: z.string().max(60).optional(),
  contactMethod: z.enum(["Email", "WhatsApp"]),
  challenge: z.string().trim().min(1, "Please describe your main challenge.").max(1000, "Please keep it under 1000 characters."),
  message: z.string().trim().max(3000).optional(),
  extra: z.record(z.string(), z.string().max(300)),
});

const followUps: Record<ServiceOption, { name: string; label: string; options?: string[] }[]> = {
  "Shopify Store Design": [
    { name: "Platform / theme", label: "Current platform or theme", options: ["Shopify – Dawn or free theme", "Shopify – paid theme", "Shopify – custom theme", "Not on Shopify yet", "Not sure"] },
    { name: "Store URL", label: "Store URL (if live)" },
  ],
  "Klaviyo Email Marketing": [
    { name: "List size", label: "Email list size", options: ["Under 1,000", "1,000 – 10,000", "10,000 – 50,000", "50,000+", "Not sure"] },
    { name: "Current flows", label: "Flows you already have running", options: ["None yet", "Welcome only", "Welcome + abandoned cart", "Several flows", "Not sure"] },
  ],
  "AI Animation": [
    { name: "Asset type", label: "What kind of visual?", options: ["Product reveal", "Social ad", "Brand / logo animation", "Website loop", "Other"] },
    { name: "Length / format", label: "Length & format", options: ["Under 10s vertical", "10–30s vertical", "Landscape / website", "Multiple formats", "Not sure"] },
  ],
  "Not sure yet": [],
};

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">{label}</label>
      {children}
      {error && <p id={`${id}-err`} role="alert" className="mt-1.5 text-sm text-destructive">{error}</p>}
    </div>
  );
}

export function InquiryForm({ subject, prefill = "", defaultService = "Not sure yet" }: { subject: string; prefill?: string; defaultService?: ServiceOption }) {
  const uid = useId();
  const id = (n: string) => `${uid}-${n}`;
  const [service, setService] = useState<ServiceOption>(defaultService);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [composed, setComposed] = useState("");
  const [copied, setCopied] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const extra: Record<string, string> = {};
    for (const f of followUps[service]) extra[f.name] = String(d.get(`extra:${f.name}`) || "");
    const parsed = inquirySchema.safeParse({
      name: d.get("name"), email: d.get("email"), site: d.get("site") || undefined, service,
      timeline: d.get("timeline"), budget: d.get("budget") || undefined, contactMethod: d.get("contactMethod"),
      challenge: d.get("challenge"), message: d.get("message") || undefined, extra,
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const i of parsed.error.issues) errs[String(i.path[0])] ??= i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    const v = parsed.data;
    const lines = [
      `Name: ${v.name}`, `Email: ${v.email}`, `Brand / website: ${v.site || "-"}`, `Service: ${v.service}`,
      ...Object.entries(v.extra).map(([k, val]) => `${k}: ${val || "-"}`),
      `Timeline: ${v.timeline}`, `Budget: ${v.budget || "Not specified"}`, `Preferred contact: ${v.contactMethod}`,
      "", `Main challenge:`, v.challenge, ...(v.message ? ["", v.message] : []),
    ];
    const body = lines.join("\n");
    setComposed(body);
    setCopied(false);
    if (hasEmail()) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`${subject} — ${v.name}`)}&body=${encodeURIComponent(body)}`;
    }
  }

  const aria = (n: string) => ({ "aria-invalid": !!errors[n], "aria-describedby": errors[n] ? `${id(n)}-err` : undefined });

  return (
    <form onSubmit={submit} noValidate className="space-y-5 rounded-3xl glass p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <Field id={id("name")} label="Your name *" error={errors.name}>
          <input id={id("name")} name="name" autoComplete="name" className={field} maxLength={100} {...aria("name")} />
        </Field>
        <Field id={id("email")} label="Email *" error={errors.email}>
          <input id={id("email")} name="email" type="email" autoComplete="email" className={field} maxLength={255} {...aria("email")} />
        </Field>
      </div>
      <Field id={id("site")} label="Brand or website (optional)">
        <input id={id("site")} name="site" className={field} maxLength={200} />
      </Field>
      <div className="grid gap-5 md:grid-cols-2">
        <Field id={id("service")} label="Service">
          <select id={id("service")} name="service" className={field} value={service} onChange={(e) => setService(e.target.value as ServiceOption)}>
            {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </select>
        </Field>
        <Field id={id("timeline")} label="Timeline">
          <select id={id("timeline")} name="timeline" className={field} defaultValue="Flexible">
            <option>As soon as possible</option><option>Within a month</option><option>1–3 months</option><option>Flexible</option>
          </select>
        </Field>
      </div>
      {followUps[service].length > 0 && (
        <div className="grid gap-5 md:grid-cols-2" aria-live="polite">
          {followUps[service].map((f) => (
            <Field key={f.name} id={id(f.name)} label={f.label}>
              {f.options ? (
                <select id={id(f.name)} name={`extra:${f.name}`} className={field} defaultValue={f.options.at(-1)}>
                  {f.options.map((o) => <option key={o}>{o}</option>)}
                </select>
              ) : (
                <input id={id(f.name)} name={`extra:${f.name}`} className={field} maxLength={300} />
              )}
            </Field>
          ))}
        </div>
      )}
      <div className="grid gap-5 md:grid-cols-2">
        <Field id={id("budget")} label="Budget (optional)">
          <select id={id("budget")} name="budget" className={field} defaultValue="">
            <option value="">Prefer to discuss</option><option>Under $500</option><option>$500 – $1,500</option><option>$1,500 – $5,000</option><option>$5,000+</option>
          </select>
        </Field>
        <fieldset>
          <legend className="mb-1.5 block text-sm font-medium">Preferred contact method</legend>
          <div className="flex gap-4 py-3 text-sm">
            <label className="flex items-center gap-2"><input type="radio" name="contactMethod" value="Email" defaultChecked /> Email</label>
            <label className="flex items-center gap-2"><input type="radio" name="contactMethod" value="WhatsApp" /> WhatsApp</label>
          </div>
        </fieldset>
      </div>
      <Field id={id("challenge")} label="Main challenge *" error={errors.challenge}>
        <textarea id={id("challenge")} name="challenge" rows={3} defaultValue={prefill} className={field} maxLength={1000} {...aria("challenge")} />
      </Field>
      <Field id={id("message")} label="Anything else? (optional)">
        <textarea id={id("message")} name="message" rows={3} className={field} maxLength={3000} />
      </Field>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">Compose my inquiry</button>
        {hasWhatsApp() && <a href={site.whatsappUrl} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground">or message on WhatsApp</a>}
      </div>
      {composed && (
        <div role="status" className="space-y-3 rounded-2xl border border-border bg-background/60 p-5">
          <p className="text-sm">
            Your email app should open with your message ready. If it didn't, copy the message below or email me directly
            {hasEmail() && <> at <a className="text-primary underline" href={`mailto:${site.email}`}>{site.email}</a></>}.
          </p>
          <pre className="max-h-64 overflow-auto whitespace-pre-wrap rounded-xl bg-secondary/50 p-4 font-mono text-xs">{composed}</pre>
          <button type="button" onClick={async () => { await navigator.clipboard.writeText(composed); setCopied(true); }}
            className="rounded-full border border-border px-4 py-2 text-sm hover:border-primary/50">
            {copied ? "Copied" : "Copy message"}
          </button>
        </div>
      )}
    </form>
  );
}
