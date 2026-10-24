import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/animation.jpg";
import { ServicePage, seo } from "@/components/site";

export const Route = createFileRoute("/services/ai-animation")({
  head: () => seo("AI Animation & Creative Content — Ayomide Babs", "AI-assisted animation, product visuals, motion concepts and short-form content for brands.", "/services/ai-animation"),
  component: () => (
    <ServicePage
      category="animation"
      image={img}
      eyebrow="AI Animation & Creative"
      title={<>Visuals people <span className="text-gradient">stop scrolling</span> for.</>}
      intro="I combine AI tools with motion design judgment to create product visuals and short-form content that feel distinctive — not generic."
      offers={[
        ["Product reveals", "Cinematic animations that introduce a product with impact."],
        ["Social ads & shorts", "Vertical cuts sized for Reels, TikTok and Stories."],
        ["Brand animations", "Logo reveals, idents and animated brand moments."],
        ["Campaign visuals", "Consistent styled stills and loops across a campaign."],
        ["Motion concepts", "Explore an idea in motion before committing to production."],
        ["Website loops", "Lightweight ambient motion for stores and landing pages."],
      ]}
      problems={["Product content looks similar to competitors' content.", "The brand needs more engaging promotional visuals.", "A creative idea is hard to communicate with static images.", "Campaign visuals lack a consistent style."]}
      steps={["Understand the idea, audience and objective.", "Develop the visual direction.", "Create and refine the concept.", "Produce the animation.", "Review and revise.", "Deliver the agreed formats."]}
    />
  ),
});
