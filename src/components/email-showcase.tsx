import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Mail, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  EMAIL_BRANDS,
  EMAIL_CATEGORIES,
  emailExamples,
  type EmailExample,
} from "@/data/email-examples";

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

function EmailModal({ email, onClose }: { email: EmailExample; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollY = useRef(0);

  useEffect(() => {
    scrollY.current = window.scrollY;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      window.scrollTo(0, scrollY.current);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-background/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="email-modal-title"
        className="flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border border-border bg-card shadow-glow sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-border p-5 sm:p-6">
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-brand font-display text-sm font-bold text-primary-foreground"
            >
              {initials(email.brand)}
            </span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-klaviyo">
                {email.brand} · {email.category}
              </p>
              <h3 id="email-modal-title" className="mt-1 text-lg font-semibold leading-snug">
                {email.title}
              </h3>
            </div>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close email preview"
            className="grid min-h-11 min-w-11 shrink-0 place-items-center rounded-lg border border-border hover:border-primary/50 hover:bg-secondary"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          {email.previewStatus === "ready" && email.preview ? (
            <img
              src={email.preview}
              alt={`Email design for “${email.title}” by ${email.brand}`}
              className="w-full rounded-lg border border-border"
            />
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-secondary/30 p-8 text-center">
              <Mail className="mx-auto h-8 w-8 text-muted-foreground" aria-hidden="true" />
              <p className="mt-4 font-semibold">Preview not available on this site</p>
              <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                The original email is archived on Milled, which requires a Milled account to view
                and does not permit embedding on other websites. Rather than sending you off-site
                or showing a fabricated image, this example is presented as a labelled reference.
              </p>
            </div>
          )}
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{email.note}</p>
          <p className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
            Source: Milled email archive (milled.com). This email was published by {email.brand};
            it is shown here as an inspiration example, not as work by this studio.
          </p>
        </div>
      </div>
    </div>
  );
}

function EmailCard({ email, onOpen }: { email: EmailExample; onOpen: () => void }) {
  return (
    <li className="group flex min-w-0 flex-col">
      <button
        type="button"
        onClick={onOpen}
        aria-haspopup="dialog"
        aria-label={`Preview details for “${email.title}” by ${email.brand}`}
        className="relative flex aspect-[4/3] flex-col items-center justify-center gap-3 overflow-hidden rounded-lg border border-border bg-card text-center transition group-hover:border-primary/40"
      >
        <span
          aria-hidden="true"
          className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-brand font-display text-xl font-bold text-primary-foreground shadow-glow transition duration-700 group-hover:scale-105"
        >
          {initials(email.brand)}
        </span>
        <span className="px-4 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {email.category}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-xs font-medium text-foreground">
          <Mail className="h-3.5 w-3.5" aria-hidden="true" /> Preview Email
        </span>
      </button>
      <div className="flex flex-1 flex-col pt-4">
        <p className="font-mono text-[11px] uppercase tracking-wider text-klaviyo">{email.brand}</p>
        <h3 className="mt-1.5 text-base font-semibold leading-snug">{email.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{email.note}</p>
      </div>
    </li>
  );
}

export function EmailShowcase() {
  const [brand, setBrand] = useState<(typeof EMAIL_BRANDS)[number] | "all">("all");
  const [category, setCategory] = useState<string>("all");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<EmailExample | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const list = useMemo(() => {
    let l = emailExamples.filter(
      (e) =>
        (brand === "all" || e.brand === brand) &&
        (category === "all" || e.category === category),
    );
    if (q) {
      const s = q.toLowerCase();
      l = l.filter((e) => `${e.title} ${e.brand} ${e.note}`.toLowerCase().includes(s));
    }
    return l;
  }, [brand, category, q]);

  const grouped = useMemo(
    () =>
      EMAIL_BRANDS.map((b) => ({ brand: b, items: list.filter((e) => e.brand === b) })).filter(
        (g) => g.items.length > 0,
      ),
    [list],
  );

  const openModal = useCallback((e: EmailExample, el: HTMLElement) => {
    triggerRef.current = el;
    setOpen(e);
  }, []);
  const closeModal = useCallback(() => {
    setOpen(null);
    triggerRef.current?.focus();
  }, []);

  const sel =
    "rounded-full border border-border bg-secondary/50 px-4 py-2.5 text-sm outline-none focus:border-primary";

  return (
    <div>
      <div
        role="group"
        aria-label="Filter by brand"
        className="flex flex-wrap gap-2 border-b border-border pb-5"
      >
        {(["all", ...EMAIL_BRANDS] as const).map((b) => (
          <Button
            key={b}
            aria-pressed={brand === b}
            variant={brand === b ? "secondary" : "ghost"}
            onClick={() => setBrand(b)}
            className={brand === b ? "text-primary" : "text-muted-foreground"}
          >
            {b === "all" ? "All Brands" : b}
          </Button>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <label className="relative min-w-56 flex-1">
          <Search
            className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            aria-label="Search email examples"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search emails…"
            className={`${sel} w-full pl-10`}
          />
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={sel}
          aria-label="Email category"
        >
          <option value="all">All categories</option>
          {EMAIL_CATEGORIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>
      <p aria-live="polite" className="mt-6 font-mono text-xs text-muted-foreground">
        Showing {list.length} of {emailExamples.length} email examples · {grouped.length} brand
        collections
      </p>

      {grouped.map((g) => (
        <section key={g.brand} aria-label={g.brand} className="mt-12">
          <div className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
            <h3 className="text-xl font-semibold">{g.brand}</h3>
            <span className="font-mono text-xs text-muted-foreground">
              {g.items.length} {g.items.length === 1 ? "email" : "emails"}
            </span>
          </div>
          <ul className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {g.items.map((e) => (
              <EmailCard
                key={e.slug}
                email={e}
                onOpen={() => openModal(e, document.activeElement as HTMLElement)}
              />
            ))}
          </ul>
        </section>
      ))}

      {list.length === 0 && (
        <p className="py-16 text-center text-muted-foreground">
          No email examples match those filters.
        </p>
      )}

      <p className="mt-14 border-t border-border pt-6 text-xs text-muted-foreground">
        These emails were designed and sent by the brands shown and are archived on Milled. They
        are presented here strictly as inspiration and campaign examples — not as client work,
        and no ownership, involvement or performance results are claimed. All brand names and
        email designs belong to their respective owners.
      </p>

      {open && <EmailModal email={open} onClose={closeModal} />}
    </div>
  );
}
