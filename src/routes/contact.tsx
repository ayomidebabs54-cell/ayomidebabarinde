import { createFileRoute } from "@tanstack/react-router";
import { serviceFromParam, whatsappWithText } from "@/lib/service-param";
import { Mail, MessageCircle } from "lucide-react";
import { PageHero, Section, seo } from "@/components/site";
import { InquiryForm } from "@/components/inquiry-form";
import { site, hasEmail, hasWhatsApp, liveProfiles } from "@/config/site";

export const Route = createFileRoute("/contact")({
  validateSearch: (
    s: Record<string, unknown>,
  ): { service?: string | undefined; brief?: string | undefined } => ({
    service: typeof s["service"] === "string" ? s["service"] : undefined,
    brief: typeof s["brief"] === "string" ? s["brief"] : undefined,
  }),
  head: () =>
    seo(
      "Contact Ayomide Babs — Shopify, Klaviyo & AI Animation",
      "Send a project inquiry by email or WhatsApp for Shopify design, Klaviyo email marketing or AI animation work.",
      "/contact",
    ),
  component: Contact,
});

function Contact() {
  const profiles = liveProfiles();
  const { service, brief } = Route.useSearch();
  const svc = serviceFromParam(service) ?? "Not sure yet";
  const safeBrief = (brief ?? "").slice(0, 1000);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch."
        intro="Share a few details about your project and I'll get back to you."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <InquiryForm
            key={`${svc}-${safeBrief}`}
            subject="Project inquiry"
            defaultService={svc}
            prefill={safeBrief}
          />
          <aside className="space-y-4">
            {hasEmail() && (
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 rounded-2xl border border-border p-5 hover:border-primary/40"
              >
                <Mail className="h-5 w-5 text-primary" />
                <span>
                  <span className="block text-xs text-muted-foreground">Email</span>
                  {site.email}
                </span>
              </a>
            )}
            {/* Add your WhatsApp URL in src/config/site.ts (whatsappUrl) — this link stays hidden until then. */}
            {hasWhatsApp() && (
              <a
                href={whatsappWithText(
                  safeBrief || "Hi Ayomide, I'd like to talk about a project.",
                )}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-border p-5 hover:border-primary/40"
              >
                <MessageCircle className="h-5 w-5 text-primary" />
                <span>
                  <span className="block text-xs text-muted-foreground">WhatsApp</span>Message me
                  directly
                </span>
              </a>
            )}
            {profiles.length > 0 && (
              <div className="rounded-2xl border border-border p-5">
                <p className="eyebrow">Elsewhere</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {profiles.map((p) => (
                    <li key={p.label}>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-primary"
                      >
                        {p.label} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Section>
    </>
  );
}
