export type ResourceCategory = "Shopify" | "Klaviyo" | "Retention" | "AI Animation";
export const RESOURCE_CATEGORIES: ResourceCategory[] = [
  "Shopify",
  "Klaviyo",
  "Retention",
  "AI Animation",
];

export type Resource = {
  slug: string;
  category: ResourceCategory;
  title: string;
  summary: string;
  points: string[];
};

export const resources: Resource[] = [
  {
    slug: "product-page-questions",
    category: "Shopify",
    title: "Five questions every product page should answer",
    summary:
      "Shoppers arrive with the same few questions. Answer them before they have to scroll looking.",
    points: [
      "What is it, in one plain sentence?",
      "Why is it worth the price — what does it do for me?",
      "Will it fit or suit me? Show sizing, dimensions or compatibility near the button.",
      "When will it arrive, and what does shipping cost?",
      "Can I trust this store? Returns policy and contact details should be one tap away.",
    ],
  },
  {
    slug: "design-for-thumbs",
    category: "Shopify",
    title: "Design for thumbs first",
    summary: "Check your store on a phone before you check it on a laptop.",
    points: [
      "Keep the add-to-cart button reachable without stretching.",
      "Use body text large enough to read without zooming.",
      "Make filters simple and easy to clear.",
      "Test the full checkout on a real phone, not just a resized browser.",
    ],
  },
  {
    slug: "navigation-that-matches-shoppers",
    category: "Shopify",
    title: "Navigation that matches how people shop",
    summary: "Menus often reflect how a business is organised, not how customers think.",
    points: [
      "Group products by need or occasion, not internal product codes.",
      "Keep top-level menu items to a handful.",
      "Look at your own site search terms for words customers actually use.",
      "Make sure every collection has a clear heading and short intro.",
    ],
  },
  {
    slug: "flows-before-campaigns",
    category: "Klaviyo",
    title: "Start with the flows that run themselves",
    summary:
      "Automated flows work every day in the background. Set them up before chasing more campaigns.",
    points: [
      "Welcome series for new subscribers.",
      "Abandoned checkout reminders.",
      "Post-purchase thank-you and care tips.",
      "Review each flow every few months — products and offers change.",
    ],
  },
  {
    slug: "segments-before-subject-lines",
    category: "Klaviyo",
    title: "Segments before subject lines",
    summary:
      "Sending the right message to the right group usually matters more than clever wording.",
    points: [
      "Separate people who have bought from people who haven't.",
      "Treat recent engagers differently from long-quiet subscribers.",
      "Keep segment definitions simple enough to explain in one sentence.",
      "Write each email for one segment, not everyone.",
    ],
  },
  {
    slug: "welcome-series-outline",
    category: "Klaviyo",
    title: "A simple welcome series outline",
    summary: "A welcome series introduces your brand while interest is highest.",
    points: [
      "Email 1: deliver anything you promised at signup and say hello.",
      "Email 2: tell your story and what makes the product different.",
      "Email 3: help people choose — bestsellers, guides or a quiz.",
      "Email 4: answer common doubts like shipping, returns and care.",
    ],
  },
  {
    slug: "post-purchase-matters",
    category: "Retention",
    title: "The order is the start, not the end",
    summary: "What happens after checkout shapes whether someone buys again.",
    points: [
      "Confirm clearly what was ordered and when it will arrive.",
      "Send practical tips for using or caring for the product.",
      "Ask for feedback once they've had time to use it.",
      "Suggest a natural next product only when it genuinely fits.",
    ],
  },
  {
    slug: "win-back-gently",
    category: "Retention",
    title: "Winning back quiet customers gently",
    summary:
      "Customers drift away for many reasons. A respectful check-in beats a flood of discounts.",
    points: [
      "Decide what 'quiet' means for your product's buying cycle.",
      "Start with a friendly reminder of what's new.",
      "Make it easy to update preferences or unsubscribe.",
      "Stop emailing people who never re-engage — it protects deliverability.",
    ],
  },
  {
    slug: "listen-to-customers",
    category: "Retention",
    title: "Let customer questions guide your content",
    summary: "Your inbox and reviews already tell you what to explain better.",
    points: [
      "Collect the questions customers ask most.",
      "Answer them on product pages and in emails.",
      "Notice repeated complaints — they're often fixable.",
      "Share real customer wording (with permission) instead of marketing jargon.",
    ],
  },
  {
    slug: "ai-without-generic",
    category: "AI Animation",
    title: "Using AI without looking generic",
    summary: "AI tools are fast, but direction is what makes the result feel like your brand.",
    points: [
      "Define lighting, palette and pacing before generating anything.",
      "Use real product photos as the reference wherever possible.",
      "Review every frame for distorted details — logos, hands, text.",
      "Edit and combine outputs rather than using the first result.",
    ],
  },
  {
    slug: "plan-formats-early",
    category: "AI Animation",
    title: "Plan formats before production",
    summary: "Deciding where a video will live changes how it should be framed.",
    points: [
      "List every placement: stories, feed, ads, website.",
      "Keep the key subject in a safe centre area for cropping.",
      "Make sure the message works without sound.",
      "Export each format separately instead of stretching one.",
    ],
  },
  {
    slug: "short-motion-brief",
    category: "AI Animation",
    title: "How to brief a short product animation",
    summary: "A clear brief saves rounds of revisions.",
    points: [
      "One goal: launch, explain, or catch attention.",
      "One key message the viewer should remember.",
      "Three reference visuals you like, and one you don't.",
      "Lengths, formats and the date you need it by.",
    ],
  },
];

export const getResource = (slug: string) => resources.find((r) => r.slug === slug);
