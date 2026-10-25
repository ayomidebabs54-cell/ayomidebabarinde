import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, seo } from "@/components/site";
import { site, hasEmail } from "@/config/site";

export const Route = createFileRoute("/privacy")({
  head: () => seo("Privacy Policy — Ayomide Babs", "A plain-language explanation of what information this website collects and how inquiries are handled.", "/privacy"),
  component: Privacy,
});

// Owner: review this policy before launch, and update it if you add analytics, a booking tool, or a backend.
const sections: [string, string][] = [
  ["Who runs this site", `This is the personal portfolio of ${site.name}. It isn't operated by a company or agency.`],
  ["Information you share", "When you fill in an inquiry form, nothing is stored on this website. Your details are turned into an email that opens in your own email app, and you decide whether to send it. If you send it, I receive it like any normal email."],
  ["How I use your inquiry", "Only to reply to you and discuss your project. I don't sell or share your details, and I don't add you to a mailing list without asking."],
  ["No accounts", "This site has no sign-up or login, so there's no account data to store."],
  ["Tracking and cookies", "No analytics, advertising or tracking tools are currently installed on this site. If that changes, this page will be updated."],
  ["Third-party links", "WhatsApp, booking and social profile links take you to other services. Their own privacy policies apply once you leave this site."],
  ["Your choices", "You can ask me to delete any emails or messages you've sent at any time by getting in touch."],
];

function Privacy() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="Privacy policy" intro="A short, plain-language explanation of how this site handles your information." />
      <Section>
        <div className="max-w-3xl space-y-8">
          {sections.map(([t, d]) => (
            <div key={t}><h2 className="text-xl font-semibold">{t}</h2><p className="mt-2 text-muted-foreground">{d}</p></div>
          ))}
          <div>
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="mt-2 text-muted-foreground">
              Questions about privacy? {hasEmail() ? <>Email <a className="text-primary underline" href={`mailto:${site.email}`}>{site.email}</a>.</> : "Use the contact page."}
            </p>
          </div>
          <p className="text-sm text-muted-foreground">Last updated: October 2026</p>
        </div>
      </Section>
    </>
  );
}
