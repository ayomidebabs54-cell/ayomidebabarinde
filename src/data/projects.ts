import shopifyImg from "@/assets/shopify.jpg";
import klaviyoImg from "@/assets/klaviyo.jpg";
import animationImg from "@/assets/animation.jpg";
import welcomePreview from "@/assets/welcome-series-concept.jpg";
import checkoutPreview from "@/assets/checkout-series-concept.jpg";

export type Category = "klaviyo" | "animation";
/** Service areas offered; Shopify has a storefront showcase instead of portfolio projects. */
export type ServiceKey = "shopify" | Category;
export type ProjectType =
  "Client Project" | "Concept Project" | "Demo Project" | "Personal Project";

export interface Project {
  slug: string;
  title: string;
  category: Category;
  industry: string;
  type: ProjectType;
  description: string;
  objective: string;
  deliverables: string[];
  tools: string[];
  tags: string[];
  featured: boolean;
  published: boolean;
  image: string;
  order: number;
  visualReady: boolean;
  visualCaption?: string;
  approach?: string;
  lesson?: string;
}

export const categoryMeta: Record<
  Category,
  { label: string; image: string; color: string; route: string }
> = {
  klaviyo: {
    label: "Klaviyo",
    image: klaviyoImg,
    color: "text-klaviyo",
    route: "/portfolio/klaviyo",
  },
  animation: {
    label: "AI Animation",
    image: animationImg,
    color: "text-motion",
    route: "/portfolio/ai-animation",
  },
};

export const serviceMeta: Record<ServiceKey, { label: string; image: string; color: string }> = {
  shopify: { label: "Shopify", image: shopifyImg, color: "text-shopify" },
  ...categoryMeta,
};

// [title, industry, description, deliverable focus]
type Row = [string, string, string, string];

const klaviyoRows: Row[] = [
  [
    "Five-Step Welcome Series",
    "Fashion & Apparel",
    "Introduces the brand story, bestsellers and fit guidance across five emails.",
    "Welcome series",
  ],
  [
    "Abandoned Checkout Trio",
    "Beauty & Skincare",
    "Three-email recovery sequence balancing reassurance and urgency.",
    "Abandoned checkout flow",
  ],
  [
    "Browse Abandonment Nudge",
    "Electronics",
    "Dynamic product-viewed reminder with spec highlights.",
    "Browse abandonment flow",
  ],
  [
    "Post-Purchase Onboarding",
    "Fitness & Wellness",
    "How-to-use content timed around expected delivery.",
    "Post-purchase sequence",
  ],
  [
    "90-Day Win-Back",
    "Pet Products",
    "Lapsed-customer flow with reorder shortcuts.",
    "Win-back campaign",
  ],
  [
    "Capsule Launch Campaign",
    "Fashion & Apparel",
    "Teaser, launch and last-chance emails for a limited drop.",
    "Product launch campaign",
  ],
  [
    "Holiday Promo Calendar",
    "Food & Gifting",
    "Six-week promotional plan with segment-specific sends.",
    "Campaign calendar",
  ],
  [
    "VIP Segmentation Map",
    "Jewelry & Accessories",
    "RFM-based segments for high-value customers.",
    "Segmentation concept",
  ],
  [
    "Modular Template System",
    "Lifestyle",
    "Reusable block library for consistent email production.",
    "Email template system",
  ],
  [
    "Flow Audit Walkthrough",
    "Home Decor",
    "Annotated review of existing flows with gap analysis.",
    "Flow audit",
  ],
  [
    "Lifecycle Marketing Plan",
    "Beauty & Skincare",
    "Journey map from first visit to loyal customer.",
    "Lifecycle plan",
  ],
  [
    "Deliverability Health Check",
    "Electronics",
    "Sender reputation, list hygiene and sunset policy review.",
    "Deliverability review",
  ],
  [
    "Brand Email Design System",
    "Outdoor",
    "Typography, color and component rules for email.",
    "Email design system",
  ],
  [
    "Replenishment Reminders",
    "Fitness & Wellness",
    "Timed refill prompts based on product usage cycles.",
    "Repeat-purchase flow",
  ],
  [
    "Review Request Flow",
    "Home Decor",
    "Post-delivery review ask with photo-upload incentive.",
    "Review request flow",
  ],
  [
    "Birthday Moments",
    "Food & Gifting",
    "Birthday capture and celebration email pair.",
    "Birthday flow",
  ],
  [
    "Back-in-Stock Alerts",
    "Fashion & Apparel",
    "Waitlist confirmation and restock notification emails.",
    "Back-in-stock flow",
  ],
  [
    "Price Drop Watcher",
    "Electronics",
    "Alerts for viewed items that drop in price.",
    "Price drop flow",
  ],
  [
    "Sunset Re-Engagement",
    "Lifestyle",
    "Final re-permission sequence before suppression.",
    "Sunset flow",
  ],
  [
    "Cross-Sell After First Order",
    "Beauty & Skincare",
    "Complementary product suggestions based on first purchase.",
    "Cross-sell flow",
  ],
  [
    "Subscription Renewal Notices",
    "Pet Products",
    "Friendly renewal reminders with easy plan changes.",
    "Subscription flow",
  ],
  [
    "Black Friday War Room",
    "Jewelry & Accessories",
    "Send schedule, segments and creative for peak week.",
    "Peak campaign plan",
  ],
  [
    "Quiz Result Follow-Up",
    "Beauty & Skincare",
    "Personalized emails based on skin-quiz answers.",
    "Zero-party data flow",
  ],
  [
    "Loyalty Tier Updates",
    "Fashion & Apparel",
    "Tier-upgrade and points-balance notifications.",
    "Loyalty emails",
  ],
  ["Educational Drip", "Outdoor", "Gear care and trip-planning content series.", "Content drip"],
  [
    "Sample-to-Full-Size Flow",
    "Beauty & Skincare",
    "Converts discovery-set buyers into full-size purchases.",
    "Conversion flow",
  ],
  [
    "Gift Recipient Capture",
    "Food & Gifting",
    "Captures gift recipients as new subscribers respectfully.",
    "Acquisition flow",
  ],
  [
    "Plain-Text Founder Notes",
    "Lifestyle",
    "Personal founder-voice emails for relationship building.",
    "Campaign style concept",
  ],
  [
    "Pop-Up Form Strategy",
    "Home Decor",
    "Timing and offer logic for sign-up forms.",
    "Form strategy",
  ],
  [
    "SMS + Email Coordination",
    "Fitness & Wellness",
    "Channel rules so customers aren't double-messaged.",
    "Omnichannel plan",
  ],
  [
    "Wishlist Reminders",
    "Jewelry & Accessories",
    "Gentle nudges for saved items around gifting dates.",
    "Wishlist flow",
  ],
  [
    "New Arrivals Digest",
    "Fashion & Apparel",
    "Weekly curated new-in email with dynamic feeds.",
    "Digest campaign",
  ],
  [
    "Warranty Registration",
    "Electronics",
    "Post-purchase registration and setup-tips sequence.",
    "Onboarding flow",
  ],
  [
    "Seasonal Care Reminders",
    "Pet Products",
    "Season-based health and supply reminders.",
    "Seasonal flow",
  ],
  [
    "Anniversary Thank-You",
    "Lifestyle",
    "Customer anniversary appreciation email.",
    "Anniversary flow",
  ],
  [
    "Predictive Next Order",
    "Food & Gifting",
    "Uses predicted order date to time offers.",
    "Predictive flow",
  ],
  [
    "Low-Inventory Urgency",
    "Fashion & Apparel",
    "Honest low-stock messaging for viewed items.",
    "Urgency campaign",
  ],
  [
    "Referral Program Emails",
    "Fitness & Wellness",
    "Invite, reminder and reward confirmation emails.",
    "Referral flow",
  ],
  [
    "Accessible Email Templates",
    "Home Decor",
    "Contrast, alt text and dark-mode-safe templates.",
    "Accessibility system",
  ],
  [
    "Campaign Naming Taxonomy",
    "Electronics",
    "Naming and tagging conventions for reporting.",
    "Account organization",
  ],
  [
    "Segment Hygiene Cleanup",
    "Outdoor",
    "Consolidating duplicated and stale segments.",
    "Account optimization",
  ],
  [
    "Preorder Updates",
    "Electronics",
    "Transparent shipping-timeline updates for preorders.",
    "Preorder flow",
  ],
  [
    "Event Invitation Series",
    "Jewelry & Accessories",
    "In-store and virtual event invite sequence.",
    "Event campaign",
  ],
  [
    "Charity Campaign",
    "Lifestyle",
    "Cause-led campaign with transparent giving updates.",
    "Purpose campaign",
  ],
  [
    "Shipping Delay Notice",
    "Food & Gifting",
    "Calm, clear communication for delivery delays.",
    "Service messaging",
  ],
  [
    "Size Exchange Helper",
    "Fashion & Apparel",
    "Post-delivery fit check with easy exchange path.",
    "Exchange flow",
  ],
  [
    "Routine Builder Emails",
    "Beauty & Skincare",
    "AM/PM routine guides tied to purchased products.",
    "Education flow",
  ],
  [
    "Adventure Recap",
    "Outdoor",
    "User-generated trip stories featured in a monthly send.",
    "UGC campaign",
  ],
  ["Puppy Milestones", "Pet Products", "Age-based content for new puppy owners.", "Milestone flow"],
  [
    "A/B Test Roadmap",
    "Home Decor",
    "Prioritized subject line, layout and timing experiments.",
    "Testing plan",
  ],
];

const animationRows: Row[] = [
  [
    "Liquid Chrome Perfume Reveal",
    "Beauty & Skincare",
    "A bottle emerging from swirling liquid chrome.",
    "Product reveal animation",
  ],
  [
    "Runway in Zero Gravity",
    "Fashion & Apparel",
    "Garments drifting through a weightless editorial set.",
    "Fashion campaign visual",
  ],
  [
    "Serum Drop Macro",
    "Beauty & Skincare",
    "Slow-motion macro of a serum droplet forming.",
    "Beauty product animation",
  ],
  [
    "Neon Grid Device Launch",
    "Electronics",
    "Phone materializing from a holographic wireframe.",
    "Tech visual",
  ],
  [
    "Six-Second Sneaker Ad",
    "Fashion & Apparel",
    "Vertical short with a punchy sole-to-laces reveal.",
    "Social media ad",
  ],
  [
    "Whisky Pour Cinematic",
    "Food & Gifting",
    "Moody cinematic pour with backlit amber tones.",
    "Cinematic product shot",
  ],
  [
    "Living Logo Ident",
    "Lifestyle",
    "A logo that blooms like an organic plant.",
    "Animated brand concept",
  ],
  [
    "Morning Ritual Story",
    "Lifestyle",
    "Soft lifestyle sequence from sunrise to first coffee.",
    "Lifestyle storytelling",
  ],
  [
    "Kinetic Sale Banner",
    "Fashion & Apparel",
    "Type-driven motion promo for seasonal sales.",
    "Motion promo",
  ],
  [
    "Particle Portrait Study",
    "Personal",
    "Faces assembling from drifting light particles.",
    "Visual experiment",
  ],
  [
    "Watch Gear Exploded View",
    "Jewelry & Accessories",
    "Movement parts separating and reassembling.",
    "Product explainer",
  ],
  [
    "Desert Mirage Lookbook",
    "Fashion & Apparel",
    "Heat-shimmer transitions between outfits.",
    "Lookbook motion",
  ],
  [
    "Lipstick Color Morph",
    "Beauty & Skincare",
    "Shades morphing seamlessly on one product.",
    "Shade showcase",
  ],
  [
    "Earbuds in Orbit",
    "Electronics",
    "Earbuds circling a glowing case like planets.",
    "Product loop",
  ],
  [
    "Pet Food Ingredient Burst",
    "Pet Products",
    "Ingredients exploding outward from the bag.",
    "Ingredient animation",
  ],
  [
    "Ceramic Wheel Timelapse",
    "Home Decor",
    "AI-imagined pottery forming and glazing.",
    "Craft story",
  ],
  [
    "Sneaker Material Swap",
    "Fashion & Apparel",
    "Upper material changing from mesh to leather to knit.",
    "Variant showcase",
  ],
  [
    "Frozen Dessert Shatter",
    "Food & Gifting",
    "Ice crystal shatter revealing a dessert.",
    "Food visual",
  ],
  [
    "Fitness Energy Trails",
    "Fitness & Wellness",
    "Athlete motion traced by luminous trails.",
    "Campaign visual",
  ],
  [
    "Ring Light Caustics",
    "Jewelry & Accessories",
    "Diamond refractions dancing across water.",
    "Cinematic shot",
  ],
  [
    "Paper City Unfold",
    "Personal",
    "A pop-up paper city folding into existence.",
    "Short experiment",
  ],
  [
    "Tech Unboxing Without Hands",
    "Electronics",
    "Packaging opening itself in a clean studio.",
    "Unboxing concept",
  ],
  [
    "Botanical Skincare Bloom",
    "Beauty & Skincare",
    "Flowers blooming around a cream jar.",
    "Ambient product loop",
  ],
  [
    "Coffee Bean Galaxy",
    "Food & Gifting",
    "Beans orbiting in a cosmic coffee nebula.",
    "Brand visual",
  ],
  ["Story Ad: Before Work", "Lifestyle", "Vertical story ad told in three scenes.", "Story ad"],
  [
    "Holographic Credit Card",
    "Electronics",
    "Fintech card rotating with iridescent sheen.",
    "Product render",
  ],
  [
    "Silk Wave Scarf",
    "Fashion & Apparel",
    "A scarf rippling like a calm ocean surface.",
    "Fabric motion",
  ],
  ["Candle Flame Loop", "Home Decor", "Seamless flame loop for product pages.", "Website loop"],
  [
    "Trail Shoe Terrain Morph",
    "Outdoor",
    "Ground transforming from mud to rock to snow.",
    "Performance visual",
  ],
  [
    "Retro Arcade Brand Bumper",
    "Personal",
    "Pixel-art bumper with modern lighting.",
    "Brand bumper",
  ],
  [
    "Vitamin Capsule Split",
    "Fitness & Wellness",
    "Capsule opening to reveal ingredient icons.",
    "Explainer animation",
  ],
  [
    "Glasswing Eyewear",
    "Jewelry & Accessories",
    "Frames assembled by glass butterflies.",
    "Concept spot",
  ],
  [
    "Chocolate Ribbon Pour",
    "Food & Gifting",
    "Ribbon of chocolate wrapping a gift box.",
    "Gift campaign",
  ],
  [
    "Smart Home Day Cycle",
    "Electronics",
    "A home lighting itself from dawn to night.",
    "Lifestyle tech spot",
  ],
  [
    "Dog Park Dreamscape",
    "Pet Products",
    "Whimsical dreamlike sequence for a pet brand.",
    "Brand story",
  ],
  ["Ink-in-Water Logo", "Lifestyle", "Logo forming from ink diffusing in water.", "Logo reveal"],
  [
    "Activewear Stretch Test",
    "Fitness & Wellness",
    "Fabric stretch demonstrated with elastic motion.",
    "Feature demo",
  ],
  [
    "Tiny Worlds Terrarium",
    "Home Decor",
    "Miniature ecosystem inside a glass vase.",
    "Ambient visual",
  ],
  [
    "Headphone Sound Waves",
    "Electronics",
    "Visualized sound rippling out of headphones.",
    "Audio product ad",
  ],
  [
    "Spice Cloud Burst",
    "Food & Gifting",
    "Vibrant spice clouds colliding mid-air.",
    "Color-led visual",
  ],
  ["Mountain Gear Cinematic", "Outdoor", "Backpack on a summit at golden hour.", "Hero film still"],
  [
    "Nail Polish Splash",
    "Beauty & Skincare",
    "Polish splashing into a crown shape.",
    "Splash visual",
  ],
  [
    "Futuristic Storefront Fly-Through",
    "Fashion & Apparel",
    "Camera gliding through a virtual boutique.",
    "Virtual store concept",
  ],
  ["Cat Toy Physics", "Pet Products", "Playful physics-driven toy bounce loop.", "Social loop"],
  [
    "Gemstone Growth",
    "Jewelry & Accessories",
    "Crystals growing into a finished pendant.",
    "Origin story",
  ],
  [
    "Tea Leaf Unfurl",
    "Food & Gifting",
    "Leaves unfurling as hot water is poured.",
    "Calm brand loop",
  ],
  [
    "Gaming Mouse Speed Lines",
    "Electronics",
    "Anime-inspired speed lines for a gaming launch.",
    "Launch teaser",
  ],
  [
    "Sofa Fabric Close-Ups",
    "Home Decor",
    "Texture study cycling through upholstery options.",
    "Texture reel",
  ],
  [
    "Yoga Breath Visual",
    "Fitness & Wellness",
    "Breath visualized as expanding light rings.",
    "Wellness visual",
  ],
  [
    "Cyber Bloom Experiment",
    "Personal",
    "Mechanical flowers opening in a neon garden.",
    "Personal experiment",
  ],
];

const toolsBy: Record<Category, string[]> = {
  klaviyo: ["Klaviyo", "Figma"],
  animation: ["AI video tools", "After Effects"],
};

const objectiveBy: Record<Category, (r: Row) => string> = {
  klaviyo: (r) =>
    `Show how a ${r[3].toLowerCase()} could deliver more relevant, well-timed messages for a ${r[1].toLowerCase()} audience.`,
  animation: (r) =>
    `Create a distinctive ${r[3].toLowerCase()} that communicates a ${r[1].toLowerCase()} idea in seconds.`,
};

const deliverablesBy: Record<Category, (r: Row) => string[]> = {
  klaviyo: (r) => [r[3], "Email designs", "Flow / timing map", "Strategy notes"],
  animation: (r) => [r[3], "Vertical & landscape cuts", "Style frames"],
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// Only project-specific, inspectable visuals qualify for the curated showcase.
const presentations: Record<
  string,
  { image: string; caption: string; approach: string; lesson: string }
> = {
  "klaviyo-five-step-welcome-series": {
    image: welcomePreview,
    caption:
      "Original concept visualization · two email layouts and a five-email lifecycle map. Proposed timing; not a deployed Klaviyo flow.",
    approach:
      "The proposed sequence moves from introduction to brand story, bestsellers, fit guidance and continued connection. A consistent email header, product treatment and single primary action tie the messages together.",
    lesson:
      "Each message should have a distinct job. A real implementation would need consent checks, purchaser exclusions, deliverability testing and timing informed by the audience.",
  },
  "klaviyo-abandoned-checkout-trio": {
    image: checkoutPreview,
    caption:
      "Original concept visualization · saved-bag and routine-guidance emails with a three-step recovery map. Not a live campaign.",
    approach:
      "The first message returns shoppers to their saved bag, the second addresses routine questions, and a final reminder closes the proposed sequence. The map includes a stop-after-purchase condition rather than relying on repeated urgency.",
    lesson:
      "Recovery messaging can offer reassurance rather than constant discounting. A live account would need consent, event validation, suppression rules and rendering tests before activation.",
  },
  "animation-liquid-chrome-perfume-reveal": {
    image: animationImg,
    caption:
      "Static AI-assisted style frame · liquid chrome perfume reveal concept. No finished animation or video is available.",
    approach:
      "The style frame explores a clear bottle silhouette against liquid chrome, using reflections and cool highlights to establish a product-reveal direction. It is a visual starting point, not evidence of a completed motion sequence.",
    lesson:
      "Strong material contrast can make a product reveal distinctive. Motion continuity, bottle identity and format adaptation would need to be developed and tested in a finished film.",
  },
};

function build(cat: Category, rows: Row[]): Project[] {
  return rows.map((r, i) => {
    const presentation = presentations[`${cat}-${slugify(r[0])}`];
    return {
      slug: `${cat}-${slugify(r[0])}`,
      title: r[0],
      category: cat,
      industry: r[1],
      type:
        r[1] === "Personal" ? "Personal Project" : i % 4 === 3 ? "Demo Project" : "Concept Project",
      description: r[2],
      objective: objectiveBy[cat](r),
      deliverables: deliverablesBy[cat](r),
      tools: toolsBy[cat],
      tags: [categoryMeta[cat].label, r[1], r[3]],
      featured: Boolean(presentation),
      published: true,
      image: presentation?.image ?? categoryMeta[cat].image,
      order: i,
      visualReady: Boolean(presentation),
      ...(presentation ? { visualCaption: presentation.caption, approach: presentation.approach, lesson: presentation.lesson } : {}),
    };
  });
}

export const projects: Project[] = [
  ...build("klaviyo", klaviyoRows),
  ...build("animation", animationRows),
].filter((p) => p.published);

export const industries = Array.from(new Set(projects.map((p) => p.industry))).sort();
export const visualBacklog = projects
  .filter((p) => !p.visualReady)
  .sort((a, b) => a.order - b.order);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const related = (p: Project) =>
  projects
    .filter((x) => x.slug !== p.slug && x.category === p.category && x.industry === p.industry)
    .concat(projects.filter((x) => x.slug !== p.slug && x.category === p.category))
    .filter((x, i, a) => a.findIndex((y) => y.slug === x.slug) === i)
    .slice(0, 3);
