import { Link } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, X, MessageCircle, Search } from "lucide-react";
import { site, services } from "@/config/site";
import { projects, categoryMeta, industries, type Category, type Project } from "@/data/projects";
import { testimonials } from "@/data/testimonials";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/process", label: "Process" },
  { to: "/about", label: "About" },
  { to: "/resources", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand font-display text-sm font-bold text-primary-foreground shadow-glow">
        {site.initials}
      </span>
      <span className="font-display text-sm font-semibold tracking-tight">
        {site.name.split(" ")[0]}<span className="text-primary">.</span>
      </span>
    </Link>
  );
}

export function PrimaryButton({ to, children, href }: { to?: string; href?: string; children: ReactNode }) {
  const cls =
    "inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:brightness-110";
  if (href) return <a href={href} target="_blank" rel="noreferrer" className={cls}>{children}</a>;
  return <Link to={to as "/"} className={cls}>{children}</Link>;
}
export function GhostButton({ to, children, href }: { to?: string; href?: string; children: ReactNode }) {
  const cls =
    "inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-3 text-sm font-semibold transition hover:border-primary/50 hover:bg-secondary";
  if (href) return <a href={href} target="_blank" rel="noreferrer" className={cls}>{children}</a>;
  return <Link to={to as "/"} className={cls}>{children}</Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 flex max-w-7xl items-center justify-between rounded-2xl glass px-4 py-2.5 md:px-6">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition hover:text-foreground"
              activeProps={{ className: "text-foreground bg-secondary" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <PrimaryButton to="/consultation">Book a Free Consultation</PrimaryButton>
        </div>
        <button aria-label="Open menu" onClick={() => setOpen(!open)} className="rounded-lg p-2 lg:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="mx-3 mt-2 rounded-2xl glass p-4 animate-rise lg:hidden">
          {[...nav, { to: "/services/shopify", label: "Shopify" }, { to: "/services/klaviyo", label: "Klaviyo" }, { to: "/services/ai-animation", label: "AI Animation" }].map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-base hover:bg-secondary">
              {n.label}
            </Link>
          ))}
          <div className="mt-3" onClick={() => setOpen(false)}>
            <PrimaryButton to="/consultation">Book a Free Consultation</PrimaryButton>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl glass p-10 text-center md:p-14">
          <p className="eyebrow">Next step</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold md:text-4xl">Have a project in mind? Let's talk it through.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PrimaryButton to="/consultation">Book a Free Consultation <ArrowUpRight className="h-4 w-4" /></PrimaryButton>
            <GhostButton href={site.whatsappUrl}><MessageCircle className="h-4 w-4" /> WhatsApp</GhostButton>
          </div>
        </div>
        <div className="mt-14 grid gap-10 text-sm md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-muted-foreground">{site.title}</p>
            <a href={`mailto:${site.email}`} className="mt-3 block text-foreground hover:text-primary">{site.email}</a>
          </div>
          <FooterCol title="Services" links={[["/services/shopify", "Shopify Store Design"], ["/services/klaviyo", "Klaviyo Email Marketing"], ["/services/ai-animation", "AI Animation"], ["/process", "My Process"]]} />
          <FooterCol title="Portfolio" links={[["/portfolio/shopify", "Shopify work"], ["/portfolio/klaviyo", "Klaviyo work"], ["/portfolio/ai-animation", "AI Animation work"], ["/testimonials", "Testimonials"]]} />
          <FooterCol title="Tools" links={[["/opportunity-checker", "Opportunity Checker"], ["/project-planner", "Project Planner"], ["/resources", "Resources"], ["/privacy", "Privacy Policy"]]} />
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <div className="flex gap-4">
            {site.profiles.map((p) => <a key={p.label} href={p.url} className="hover:text-foreground">{p.label}</a>)}
            <a href={site.whatsappUrl} className="hover:text-foreground">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <p className="eyebrow">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map(([to, l]) => <li key={to}><Link to={to as "/"} className="text-muted-foreground hover:text-foreground">{l}</Link></li>)}
      </ul>
    </div>
  );
}

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: ReactNode; intro?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 animate-rise">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] md:text-6xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

export function Section({ eyebrow, title, intro, children, className = "" }: { eyebrow?: string; title?: ReactNode; intro?: string; children: ReactNode; className?: string }) {
  return (
    <section className={`mx-auto max-w-7xl px-6 py-16 md:py-20 ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h2 className="mt-4 max-w-3xl text-3xl font-semibold md:text-4xl">{title}</h2>}
      {intro && <p className="mt-4 max-w-2xl text-muted-foreground">{intro}</p>}
      <div className={title || eyebrow ? "mt-10" : ""}>{children}</div>
    </section>
  );
}

export function TypeBadge({ type }: { type: Project["type"] }) {
  const tone = type === "Client Project" ? "border-primary/50 text-primary" : "border-border text-muted-foreground";
  return <span className={`rounded-full border bg-background/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider backdrop-blur ${tone}`}>{type}</span>;
}

const hue = ["", "hue-rotate-15", "hue-rotate-30", "-hue-rotate-15", "-hue-rotate-30", "saturate-150", "brightness-90"];

export function ProjectCard({ p }: { p: Project }) {
  const m = categoryMeta[p.category];
  return (
    <Link to="/work/$slug" params={{ slug: p.slug }} className="group block overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary/40">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={p.image} alt={p.title} loading="lazy" width={1200} height={800}
          className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${hue[p.order % hue.length]}`}
          style={{ objectPosition: `${(p.order * 17) % 100}% ${(p.order * 29) % 100}%` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
        <div className="absolute left-3 top-3"><TypeBadge type={p.type} /></div>
        <span className="absolute bottom-3 right-4 font-mono text-xs text-muted-foreground">#{String(p.order + 1).padStart(2, "0")}</span>
      </div>
      <div className="p-5">
        <p className={`font-mono text-[11px] uppercase tracking-wider ${m.color}`}>{m.label} · {p.industry}</p>
        <h3 className="mt-2 flex items-start justify-between gap-2 text-base font-semibold">
          {p.title}<ArrowUpRight className="h-4 w-4 shrink-0 opacity-0 transition group-hover:opacity-100" />
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.description}</p>
      </div>
    </Link>
  );
}

export function PortfolioBrowser({ initialCategory }: { initialCategory?: Category }) {
  const [cat, setCat] = useState<Category | "all">(initialCategory ?? "all");
  const [industry, setIndustry] = useState("all");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("featured");
  const [limit, setLimit] = useState(12);

  const list = useMemo(() => {
    let l = projects.filter((p) => (cat === "all" || p.category === cat) && (industry === "all" || p.industry === industry));
    if (q) { const s = q.toLowerCase(); l = l.filter((p) => (p.title + p.description + p.tags.join(" ")).toLowerCase().includes(s)); }
    if (sort === "az") l = [...l].sort((a, b) => a.title.localeCompare(b.title));
    else if (sort === "type") l = [...l].sort((a, b) => a.type.localeCompare(b.type));
    else l = [...l].sort((a, b) => Number(b.featured) - Number(a.featured) || a.order - b.order);
    return l;
  }, [cat, industry, q, sort]);

  const sel = "rounded-full border border-border bg-secondary/50 px-4 py-2.5 text-sm outline-none focus:border-primary";
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {(["all", "shopify", "klaviyo", "animation"] as const).map((c) => (
          <button key={c} onClick={() => { setCat(c); setLimit(12); }}
            className={`rounded-full px-4 py-2 text-sm transition ${cat === c ? "bg-gradient-brand text-primary-foreground" : "border border-border text-muted-foreground hover:text-foreground"}`}>
            {c === "all" ? "All work" : categoryMeta[c].label}
          </button>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <label className="relative flex-1 min-w-56">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search projects…" className={`${sel} w-full pl-10`} />
        </label>
        <select value={industry} onChange={(e) => setIndustry(e.target.value)} className={sel} aria-label="Industry">
          <option value="all">All industries</option>
          {industries.map((i) => <option key={i}>{i}</option>)}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className={sel} aria-label="Sort">
          <option value="featured">Featured first</option>
          <option value="az">A → Z</option>
          <option value="type">By project type</option>
        </select>
      </div>
      <p className="mt-6 font-mono text-xs text-muted-foreground">{list.length} projects · concept and demo work is clearly labeled</p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.slice(0, limit).map((p) => <ProjectCard key={p.slug} p={p} />)}
      </div>
      {list.length === 0 && <p className="py-16 text-center text-muted-foreground">No projects match those filters.</p>}
      {limit < list.length && (
        <div className="mt-10 text-center">
          <button onClick={() => setLimit(limit + 12)} className="rounded-full border border-border px-6 py-3 text-sm hover:border-primary/50">Load more</button>
        </div>
      )}
    </div>
  );
}

export function Testimonials({ service }: { service?: Category }) {
  const list = testimonials.filter((t) => !service || t.service === service);
  return (
    <Section eyebrow="Client Experiences" title="What It's Like Working With Me">
      {list.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border p-10 text-center">
          <p className="text-lg">Client stories are on their way.</p>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
            I only publish real feedback that clients have approved — no invented reviews. In the meantime, feel free to ask for references during a consultation.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-3">
          {list.map((t) => (
            <figure key={t.name + t.text} className="rounded-2xl glass p-6">
              <blockquote className="text-sm leading-relaxed">“{t.text}”</blockquote>
              <figcaption className="mt-5 text-sm"><b>{t.name}</b>{t.business && <span className="text-muted-foreground"> · {t.business}</span>}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </Section>
  );
}

export function FeaturedGrid({ category }: { category?: Category }) {
  const list = projects.filter((p) => p.featured && (!category || p.category === category)).slice(0, category ? 3 : 9);
  return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{list.map((p) => <ProjectCard key={p.slug} p={p} />)}</div>;
}

export function ServicePage(props: {
  category: Category; eyebrow: string; title: ReactNode; intro: string;
  offers: [string, string][]; problems: string[]; steps: string[]; image: string;
}) {
  const svc = services.find((s) => s.key === props.category)!;
  return (
    <>
      <PageHero eyebrow={props.eyebrow} title={props.title} intro={props.intro}>
        <div className="flex flex-wrap gap-3">
          <PrimaryButton to="/consultation">Book a Free Consultation</PrimaryButton>
          <GhostButton to={svc.portfolio}>See {categoryMeta[props.category].label} work</GhostButton>
        </div>
      </PageHero>
      <div className="mx-auto max-w-7xl px-6">
        <img src={props.image} alt={svc.name} width={1200} height={800} className="aspect-[21/9] w-full rounded-3xl border border-border object-cover" />
      </div>
      <Section eyebrow="What I help with" title="Services">
        <div className="grid gap-4 md:grid-cols-3">
          {props.offers.map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-base font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Sound familiar?" title="Challenges I can help investigate">
        <ul className="grid gap-3 md:grid-cols-2">
          {props.problems.map((p) => <li key={p} className="rounded-xl border border-border p-5 text-sm"><span className="mr-2 text-primary">→</span>{p}</li>)}
        </ul>
      </Section>
      <Section eyebrow="How it works" title="The process">
        <ol className="grid gap-4 md:grid-cols-3">
          {props.steps.map((s, i) => (
            <li key={s} className="rounded-2xl glass p-6">
              <span className="font-mono text-xs text-primary">0{i + 1}</span>
              <p className="mt-3 text-sm">{s}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section eyebrow="Selected work" title="Featured projects"><FeaturedGrid category={props.category} /></Section>
      <Testimonials service={props.category} />
    </>
  );
}

export function seo(title: string, description: string, path: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
