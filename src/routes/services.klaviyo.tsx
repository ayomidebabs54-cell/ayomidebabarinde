import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/klaviyo.jpg";
import { ServicePage, seo } from "@/components/site";

export const Route = createFileRoute("/services/klaviyo")({
  head: () => seo("Klaviyo Email Marketing & Automation — Ayomide Babs", "Klaviyo campaigns, automated flows, segmentation, email design and customer retention strategy.", "/services/klaviyo"),
  component: () => (
    <ServicePage
      category="klaviyo"
      image={img}
      eyebrow="Klaviyo Email Marketing"
      title={<>Emails that bring customers <span className="text-gradient">back</span>.</>}
      intro="I plan, design and build Klaviyo campaigns and flows that send the right message at the right point in the customer's journey."
      offers={[
        ["Automated flows", "Welcome, abandoned checkout, browse, post-purchase and win-back."],
        ["Campaigns", "Launches, promotions and calendars planned around your goals."],
        ["Segmentation", "Groups based on behavior and lifecycle stage, not just one list."],
        ["Email design", "On-brand, mobile-friendly templates and reusable blocks."],
        ["Account audits", "Flow gaps, deliverability health and account organization."],
        ["Retention strategy", "A lifecycle plan that connects every message."],
      ]}
      problems={["Campaigns generate opens and clicks but not enough purchases.", "Automated flows are missing, incomplete or poorly connected.", "Customers get generic messages regardless of lifecycle stage.", "The account is active but lacks a clear retention strategy."]}
      steps={["Review your account, flows and list health.", "Identify gaps across the customer lifecycle.", "Plan flows, segments and a campaign calendar.", "Design and build emails in Klaviyo.", "Test rendering, timing and logic.", "Refine and document everything."]}
    />
  ),
});
