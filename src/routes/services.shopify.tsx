import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/shopify.jpg";
import { ServicePage, seo } from "@/components/site";

export const Route = createFileRoute("/services/shopify")({
  head: () => seo("Shopify Store Design & Optimization — Ayomide Babs", "Shopify store design, product page improvements, mobile layouts and shopping-experience optimization.", "/services/shopify"),
  component: () => (
    <ServicePage
      category="shopify"
      image={img}
      eyebrow="Shopify Store Design"
      title={<>Stores that feel <span className="text-gradient">easy to shop</span>.</>}
      intro="I design and refine Shopify stores so visitors can find what they want, understand why it's worth buying, and check out without friction."
      offers={[
        ["Store design & setup", "Theme customization, brand styling and a clean store structure."],
        ["Product page improvement", "Clear hierarchy, trust elements and benefits that are easy to scan."],
        ["Mobile-first layouts", "Navigation, galleries and carts designed for thumbs."],
        ["Collection & navigation", "Menus and filters that match how customers actually browse."],
        ["Store audits", "An annotated review of friction points with prioritized fixes."],
        ["Merchandising", "Bundles, cross-sells and homepage storytelling."],
      ]}
      problems={["A store looks attractive but the shopping experience feels confusing.", "Product pages don't communicate value clearly.", "Mobile visitors struggle to navigate or complete purchases.", "The store needs a more consistent, professional presentation."]}
      steps={["Review your store, analytics and goals.", "Map the customer journey and friction points.", "Propose layouts and a prioritized scope.", "Design and build in Shopify.", "Test on real devices and browsers.", "Refine together and hand over."]}
    />
  ),
});
