import { useState, type FormEvent } from "react";
import { site } from "@/config/site";

const field = "w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none focus:border-primary";

export function InquiryForm({ subject, prefill = "" }: { subject: string; prefill?: string }) {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const name = String(d.get("name") || "").trim();
    const email = String(d.get("email") || "").trim();
    if (!name || !/^\S+@\S+\.\S+$/.test(email)) { setErr("Please add your name and a valid email."); return; }
    setErr("");
    const body = `Name: ${name}\nEmail: ${email}\nBrand / website: ${d.get("site") || "-"}\nService: ${d.get("service")}\nBudget: ${d.get("budget")}\n\n${d.get("message") || ""}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject + " — " + name)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  return (
    <form onSubmit={submit} className="space-y-4 rounded-3xl glass p-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <input name="name" placeholder="Your name *" className={field} maxLength={100} />
        <input name="email" type="email" placeholder="Email *" className={field} maxLength={255} />
      </div>
      <input name="site" placeholder="Brand or store URL" className={field} maxLength={200} />
      <div className="grid gap-4 md:grid-cols-2">
        <select name="service" className={field} defaultValue="Not sure yet">
          <option>Shopify Store Design</option><option>Klaviyo Email Marketing</option><option>AI Animation</option><option>Not sure yet</option>
        </select>
        <select name="budget" className={field} defaultValue="Let's discuss">
          <option>Let's discuss</option><option>Under $500</option><option>$500 – $1,500</option><option>$1,500 – $5,000</option><option>$5,000+</option>
        </select>
      </div>
      <textarea name="message" rows={5} defaultValue={prefill} placeholder="What would you like help with?" className={field} maxLength={3000} />
      {err && <p className="text-sm text-destructive">{err}</p>}
      <div className="flex flex-wrap items-center gap-4">
        <button className="rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">Send inquiry</button>
        <a href={site.whatsappUrl} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground">or message on WhatsApp</a>
      </div>
      {sent && <p className="text-sm text-primary">Your email app should open with the message ready to send. Thanks — I'll reply soon.</p>}
    </form>
  );
}
