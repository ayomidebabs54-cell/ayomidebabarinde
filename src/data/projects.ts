import shopifyImg from "@/assets/shopify.jpg";
import klaviyoImg from "@/assets/klaviyo.jpg";
import animationImg from "@/assets/animation.jpg";

export type Category = "shopify" | "klaviyo" | "animation";
export type ProjectType = "Client Project" | "Concept Project" | "Demo Project" | "Personal Project";

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
}

export const categoryMeta: Record<Category, { label: string; image: string; color: string; route: string }> = {
  shopify: { label: "Shopify", image: shopifyImg, color: "text-shopify", route: "/portfolio/shopify" },
  klaviyo: { label: "Klaviyo", image: klaviyoImg, color: "text-klaviyo", route: "/portfolio/klaviyo" },
  animation: { label: "AI Animation", image: animationImg, color: "text-motion", route: "/portfolio/ai-animation" },
};

// [title, industry, description, deliverable focus]
type Row = [string, string, string, string];

const shopifyRows: Row[] = [
  ["Noir Thread Homepage", "Fashion & Apparel", "A monochrome homepage that leads with a single seasonal story before the product grid.", "Homepage redesign"],
  ["Lumen Skin PDP", "Beauty & Skincare", "Product page that explains ingredients through a scannable routine builder.", "Product page concept"],
  ["Orbit Jewelry Collections", "Jewelry & Accessories", "Collection layout that filters by metal, stone and occasion without page reloads.", "Collection layout"],
  ["Hearth & Grain Home", "Home Decor", "Room-based shopping where visitors browse by space instead of product type.", "Merchandising concept"],
  ["Volt Gadget Mobile", "Electronics", "Thumb-first mobile flow with sticky spec comparison and quick add.", "Mobile shopping experience"],
  ["Pulse Fitness Store Audit", "Fitness & Wellness", "Annotated audit of navigation, trust signals and checkout friction points.", "Store audit"],
  ["Pawly Subscription Box", "Pet Products", "Subscription-first PDP with flexible delivery frequency picker.", "Product page concept"],
  ["Crumb & Co Gifting", "Food & Gifting", "Gift finder quiz that routes shoppers to curated bundles.", "Gift finder concept"],
  ["Summit Gear Outdoors", "Outdoor", "Activity-led navigation for hikers, climbers and campers.", "Navigation redesign"],
  ["Still Living Lifestyle", "Lifestyle", "Editorial journal blended into shoppable lookbook spreads.", "Content-commerce layout"],
  ["Atelier Mono Menswear", "Fashion & Apparel", "Size-confidence module with fit notes and model measurements.", "Size guide UX"],
  ["Glow Ritual Bundles", "Beauty & Skincare", "Build-your-own regimen bundle with progressive savings display.", "Bundle builder"],
  ["Halo Rings Try-On", "Jewelry & Accessories", "Ring-size helper and virtual hand-preview placement.", "Interactive PDP module"],
  ["Clay Studio Ceramics", "Home Decor", "Handmade-story product cards highlighting maker and batch.", "Product card system"],
  ["Echo Audio Compare", "Electronics", "Side-by-side headphone comparison tables for mobile.", "Comparison template"],
  ["Root Wellness Cart", "Fitness & Wellness", "Slide-out cart with progress toward free shipping and add-ons.", "Cart drawer redesign"],
  ["Tailwag Treats Rebrand", "Pet Products", "Playful visual refresh with consistent iconography across the store.", "Visual refresh"],
  ["Ember Coffee Roasters", "Food & Gifting", "Flavor-wheel filtering for single-origin coffees.", "Collection filtering"],
  ["Trailcraft Packs", "Outdoor", "Capacity visualizer showing what fits inside each backpack.", "Product visualization"],
  ["Calm Corner Candles", "Lifestyle", "Scent-profile navigation by mood and season.", "Discovery navigation"],
  ["Verve Activewear Launch", "Fashion & Apparel", "Countdown landing page for a limited capsule drop.", "Launch page"],
  ["Dew Botanics Trust Layer", "Beauty & Skincare", "Review, certification and ingredient-sourcing trust blocks.", "Trust section system"],
  ["Facet Watches Story", "Jewelry & Accessories", "Scroll-driven craftsmanship story on the product page.", "Storytelling PDP"],
  ["Nook Furniture AR Hooks", "Home Decor", "Dimension callouts and room-fit checklist before purchase.", "Pre-purchase guidance"],
  ["Nimbus Smart Home", "Electronics", "Compatibility checker that confirms device ecosystem support.", "Compatibility tool"],
  ["Stride Running Finder", "Fitness & Wellness", "Shoe finder based on gait, terrain and distance.", "Product finder"],
  ["Furbase Pet Pharmacy", "Pet Products", "Reorder dashboard concept for recurring pet supplies.", "Account page concept"],
  ["Saffron Spice Market", "Food & Gifting", "Recipe-linked product pages that sell the full ingredient set.", "Cross-sell layout"],
  ["Driftwood Surf Co", "Outdoor", "Board-volume calculator embedded on collection pages.", "Calculator module"],
  ["Paper & Ink Stationery", "Lifestyle", "Personalization preview for engraved notebooks.", "Personalization UX"],
  ["Kin Kids Clothing", "Fashion & Apparel", "Age-and-size navigation designed for gift-buying relatives.", "Navigation concept"],
  ["Pure Scalp Haircare", "Beauty & Skincare", "Hair-type diagnostic landing page feeding a starter kit.", "Diagnostic landing page"],
  ["Linea Eyewear", "Jewelry & Accessories", "Face-shape guide and frame-width filters.", "Fit guidance system"],
  ["Loom Rugs Swatches", "Home Decor", "Free swatch ordering flow alongside full-size products.", "Sample ordering flow"],
  ["Arc Keyboards Builder", "Electronics", "Step-by-step custom keyboard configurator.", "Product configurator"],
  ["Flow Yoga Studio Shop", "Fitness & Wellness", "Combined class-pass and merch storefront.", "Hybrid storefront"],
  ["Whisker Toys Mobile", "Pet Products", "Swipe-friendly mobile product discovery for cat toys.", "Mobile discovery"],
  ["Honeycomb Gift Hampers", "Food & Gifting", "Corporate gifting bulk-order page with tiered pricing.", "B2B order page"],
  ["Basecamp Tents FAQ", "Outdoor", "Pre-sale FAQ and setup video modules to reduce hesitation.", "PDP support content"],
  ["Ritual Tea House", "Lifestyle", "Brewing-guide tabs inside each tea product page.", "Content tabs"],
  ["Sable Leather Goods", "Fashion & Apparel", "Material-close-up gallery with aging timeline.", "Gallery concept"],
  ["Aura Fragrance Samples", "Beauty & Skincare", "Discovery-set-first journey with full-size credit.", "Sampling journey"],
  ["Gild Charms Builder", "Jewelry & Accessories", "Charm bracelet builder with live preview.", "Builder concept"],
  ["Haven Bedding Sleep Quiz", "Home Decor", "Sleep-style quiz that recommends fabric weight.", "Quiz flow"],
  ["Quanta Phone Cases", "Electronics", "Device-first navigation that never shows incompatible cases.", "Catalog structure"],
  ["Core Supplements Clarity", "Fitness & Wellness", "Clear dosage, ingredient and usage hierarchy on PDPs.", "Information hierarchy"],
  ["Leash Lab Custom Tags", "Pet Products", "Engraving preview for pet ID tags.", "Personalization module"],
  ["Ferment Kombucha Club", "Food & Gifting", "Flavor rotation subscription with skip and swap controls.", "Subscription UX"],
  ["Northline Fishing", "Outdoor", "Species-and-season collection merchandising.", "Merchandising concept"],
  ["Mono Desk Workspace", "Lifestyle", "Shop-the-setup pages that bundle complete desk setups.", "Shoppable setups"],
];

const klaviyoRows: Row[] = [
  ["Five-Step Welcome Series", "Fashion & Apparel", "Introduces the brand story, bestsellers and fit guidance across five emails.", "Welcome series"],
  ["Abandoned Checkout Trio", "Beauty & Skincare", "Three-email recovery sequence balancing reassurance and urgency.", "Abandoned checkout flow"],
  ["Browse Abandonment Nudge", "Electronics", "Dynamic product-viewed reminder with spec highlights.", "Browse abandonment flow"],
  ["Post-Purchase Onboarding", "Fitness & Wellness", "How-to-use content timed around expected delivery.", "Post-purchase sequence"],
  ["90-Day Win-Back", "Pet Products", "Lapsed-customer flow with reorder shortcuts.", "Win-back campaign"],
  ["Capsule Launch Campaign", "Fashion & Apparel", "Teaser, launch and last-chance emails for a limited drop.", "Product launch campaign"],
  ["Holiday Promo Calendar", "Food & Gifting", "Six-week promotional plan with segment-specific sends.", "Campaign calendar"],
  ["VIP Segmentation Map", "Jewelry & Accessories", "RFM-based segments for high-value customers.", "Segmentation concept"],
  ["Modular Template System", "Lifestyle", "Reusable block library for consistent email production.", "Email template system"],
  ["Flow Audit Walkthrough", "Home Decor", "Annotated review of existing flows with gap analysis.", "Flow audit"],
  ["Lifecycle Marketing Plan", "Beauty & Skincare", "Journey map from first visit to loyal customer.", "Lifecycle plan"],
  ["Deliverability Health Check", "Electronics", "Sender reputation, list hygiene and sunset policy review.", "Deliverability review"],
  ["Brand Email Design System", "Outdoor", "Typography, color and component rules for email.", "Email design system"],
  ["Replenishment Reminders", "Fitness & Wellness", "Timed refill prompts based on product usage cycles.", "Repeat-purchase flow"],
  ["Review Request Flow", "Home Decor", "Post-delivery review ask with photo-upload incentive.", "Review request flow"],
  ["Birthday Moments", "Food & Gifting", "Birthday capture and celebration email pair.", "Birthday flow"],
  ["Back-in-Stock Alerts", "Fashion & Apparel", "Waitlist confirmation and restock notification emails.", "Back-in-stock flow"],
  ["Price Drop Watcher", "Electronics", "Alerts for viewed items that drop in price.", "Price drop flow"],
  ["Sunset Re-Engagement", "Lifestyle", "Final re-permission sequence before suppression.", "Sunset flow"],
  ["Cross-Sell After First Order", "Beauty & Skincare", "Complementary product suggestions based on first purchase.", "Cross-sell flow"],
  ["Subscription Renewal Notices", "Pet Products", "Friendly renewal reminders with easy plan changes.", "Subscription flow"],
  ["Black Friday War Room", "Jewelry & Accessories", "Send schedule, segments and creative for peak week.", "Peak campaign plan"],
  ["Quiz Result Follow-Up", "Beauty & Skincare", "Personalized emails based on skin-quiz answers.", "Zero-party data flow"],
  ["Loyalty Tier Updates", "Fashion & Apparel", "Tier-upgrade and points-balance notifications.", "Loyalty emails"],
  ["Educational Drip", "Outdoor", "Gear care and trip-planning content series.", "Content drip"],
  ["Sample-to-Full-Size Flow", "Beauty & Skincare", "Converts discovery-set buyers into full-size purchases.", "Conversion flow"],
  ["Gift Recipient Capture", "Food & Gifting", "Captures gift recipients as new subscribers respectfully.", "Acquisition flow"],
  ["Plain-Text Founder Notes", "Lifestyle", "Personal founder-voice emails for relationship building.", "Campaign style concept"],
  ["Pop-Up Form Strategy", "Home Decor", "Timing and offer logic for sign-up forms.", "Form strategy"],
  ["SMS + Email Coordination", "Fitness & Wellness", "Channel rules so customers aren't double-messaged.", "Omnichannel plan"],
  ["Wishlist Reminders", "Jewelry & Accessories", "Gentle nudges for saved items around gifting dates.", "Wishlist flow"],
  ["New Arrivals Digest", "Fashion & Apparel", "Weekly curated new-in email with dynamic feeds.", "Digest campaign"],
  ["Warranty Registration", "Electronics", "Post-purchase registration and setup-tips sequence.", "Onboarding flow"],
  ["Seasonal Care Reminders", "Pet Products", "Season-based health and supply reminders.", "Seasonal flow"],
  ["Anniversary Thank-You", "Lifestyle", "Customer anniversary appreciation email.", "Anniversary flow"],
  ["Predictive Next Order", "Food & Gifting", "Uses predicted order date to time offers.", "Predictive flow"],
  ["Low-Inventory Urgency", "Fashion & Apparel", "Honest low-stock messaging for viewed items.", "Urgency campaign"],
  ["Referral Program Emails", "Fitness & Wellness", "Invite, reminder and reward confirmation emails.", "Referral flow"],
  ["Accessible Email Templates", "Home Decor", "Contrast, alt text and dark-mode-safe templates.", "Accessibility system"],
  ["Campaign Naming Taxonomy", "Electronics", "Naming and tagging conventions for reporting.", "Account organization"],
  ["Segment Hygiene Cleanup", "Outdoor", "Consolidating duplicated and stale segments.", "Account optimization"],
  ["Preorder Updates", "Electronics", "Transparent shipping-timeline updates for preorders.", "Preorder flow"],
  ["Event Invitation Series", "Jewelry & Accessories", "In-store and virtual event invite sequence.", "Event campaign"],
  ["Charity Campaign", "Lifestyle", "Cause-led campaign with transparent giving updates.", "Purpose campaign"],
  ["Shipping Delay Notice", "Food & Gifting", "Calm, clear communication for delivery delays.", "Service messaging"],
  ["Size Exchange Helper", "Fashion & Apparel", "Post-delivery fit check with easy exchange path.", "Exchange flow"],
  ["Routine Builder Emails", "Beauty & Skincare", "AM/PM routine guides tied to purchased products.", "Education flow"],
  ["Adventure Recap", "Outdoor", "User-generated trip stories featured in a monthly send.", "UGC campaign"],
  ["Puppy Milestones", "Pet Products", "Age-based content for new puppy owners.", "Milestone flow"],
  ["A/B Test Roadmap", "Home Decor", "Prioritized subject line, layout and timing experiments.", "Testing plan"],
];

const animationRows: Row[] = [
  ["Liquid Chrome Perfume Reveal", "Beauty & Skincare", "A bottle emerging from swirling liquid chrome.", "Product reveal animation"],
  ["Runway in Zero Gravity", "Fashion & Apparel", "Garments drifting through a weightless editorial set.", "Fashion campaign visual"],
  ["Serum Drop Macro", "Beauty & Skincare", "Slow-motion macro of a serum droplet forming.", "Beauty product animation"],
  ["Neon Grid Device Launch", "Electronics", "Phone materializing from a holographic wireframe.", "Tech visual"],
  ["Six-Second Sneaker Ad", "Fashion & Apparel", "Vertical short with a punchy sole-to-laces reveal.", "Social media ad"],
  ["Whisky Pour Cinematic", "Food & Gifting", "Moody cinematic pour with backlit amber tones.", "Cinematic product shot"],
  ["Living Logo Ident", "Lifestyle", "A logo that blooms like an organic plant.", "Animated brand concept"],
  ["Morning Ritual Story", "Lifestyle", "Soft lifestyle sequence from sunrise to first coffee.", "Lifestyle storytelling"],
  ["Kinetic Sale Banner", "Fashion & Apparel", "Type-driven motion promo for seasonal sales.", "Motion promo"],
  ["Particle Portrait Study", "Personal", "Faces assembling from drifting light particles.", "Visual experiment"],
  ["Watch Gear Exploded View", "Jewelry & Accessories", "Movement parts separating and reassembling.", "Product explainer"],
  ["Desert Mirage Lookbook", "Fashion & Apparel", "Heat-shimmer transitions between outfits.", "Lookbook motion"],
  ["Lipstick Color Morph", "Beauty & Skincare", "Shades morphing seamlessly on one product.", "Shade showcase"],
  ["Earbuds in Orbit", "Electronics", "Earbuds circling a glowing case like planets.", "Product loop"],
  ["Pet Food Ingredient Burst", "Pet Products", "Ingredients exploding outward from the bag.", "Ingredient animation"],
  ["Ceramic Wheel Timelapse", "Home Decor", "AI-imagined pottery forming and glazing.", "Craft story"],
  ["Sneaker Material Swap", "Fashion & Apparel", "Upper material changing from mesh to leather to knit.", "Variant showcase"],
  ["Frozen Dessert Shatter", "Food & Gifting", "Ice crystal shatter revealing a dessert.", "Food visual"],
  ["Fitness Energy Trails", "Fitness & Wellness", "Athlete motion traced by luminous trails.", "Campaign visual"],
  ["Ring Light Caustics", "Jewelry & Accessories", "Diamond refractions dancing across water.", "Cinematic shot"],
  ["Paper City Unfold", "Personal", "A pop-up paper city folding into existence.", "Short experiment"],
  ["Tech Unboxing Without Hands", "Electronics", "Packaging opening itself in a clean studio.", "Unboxing concept"],
  ["Botanical Skincare Bloom", "Beauty & Skincare", "Flowers blooming around a cream jar.", "Ambient product loop"],
  ["Coffee Bean Galaxy", "Food & Gifting", "Beans orbiting in a cosmic coffee nebula.", "Brand visual"],
  ["Story Ad: Before Work", "Lifestyle", "Vertical story ad told in three scenes.", "Story ad"],
  ["Holographic Credit Card", "Electronics", "Fintech card rotating with iridescent sheen.", "Product render"],
  ["Silk Wave Scarf", "Fashion & Apparel", "A scarf rippling like a calm ocean surface.", "Fabric motion"],
  ["Candle Flame Loop", "Home Decor", "Seamless flame loop for product pages.", "Website loop"],
  ["Trail Shoe Terrain Morph", "Outdoor", "Ground transforming from mud to rock to snow.", "Performance visual"],
  ["Retro Arcade Brand Bumper", "Personal", "Pixel-art bumper with modern lighting.", "Brand bumper"],
  ["Vitamin Capsule Split", "Fitness & Wellness", "Capsule opening to reveal ingredient icons.", "Explainer animation"],
  ["Glasswing Eyewear", "Jewelry & Accessories", "Frames assembled by glass butterflies.", "Concept spot"],
  ["Chocolate Ribbon Pour", "Food & Gifting", "Ribbon of chocolate wrapping a gift box.", "Gift campaign"],
  ["Smart Home Day Cycle", "Electronics", "A home lighting itself from dawn to night.", "Lifestyle tech spot"],
  ["Dog Park Dreamscape", "Pet Products", "Whimsical dreamlike sequence for a pet brand.", "Brand story"],
  ["Ink-in-Water Logo", "Lifestyle", "Logo forming from ink diffusing in water.", "Logo reveal"],
  ["Activewear Stretch Test", "Fitness & Wellness", "Fabric stretch demonstrated with elastic motion.", "Feature demo"],
  ["Tiny Worlds Terrarium", "Home Decor", "Miniature ecosystem inside a glass vase.", "Ambient visual"],
  ["Headphone Sound Waves", "Electronics", "Visualized sound rippling out of headphones.", "Audio product ad"],
  ["Spice Cloud Burst", "Food & Gifting", "Vibrant spice clouds colliding mid-air.", "Color-led visual"],
  ["Mountain Gear Cinematic", "Outdoor", "Backpack on a summit at golden hour.", "Hero film still"],
  ["Nail Polish Splash", "Beauty & Skincare", "Polish splashing into a crown shape.", "Splash visual"],
  ["Futuristic Storefront Fly-Through", "Fashion & Apparel", "Camera gliding through a virtual boutique.", "Virtual store concept"],
  ["Cat Toy Physics", "Pet Products", "Playful physics-driven toy bounce loop.", "Social loop"],
  ["Gemstone Growth", "Jewelry & Accessories", "Crystals growing into a finished pendant.", "Origin story"],
  ["Tea Leaf Unfurl", "Food & Gifting", "Leaves unfurling as hot water is poured.", "Calm brand loop"],
  ["Gaming Mouse Speed Lines", "Electronics", "Anime-inspired speed lines for a gaming launch.", "Launch teaser"],
  ["Sofa Fabric Close-Ups", "Home Decor", "Texture study cycling through upholstery options.", "Texture reel"],
  ["Yoga Breath Visual", "Fitness & Wellness", "Breath visualized as expanding light rings.", "Wellness visual"],
  ["Cyber Bloom Experiment", "Personal", "Mechanical flowers opening in a neon garden.", "Personal experiment"],
];

const toolsBy: Record<Category, string[]> = {
  shopify: ["Shopify", "Figma", "Liquid"],
  klaviyo: ["Klaviyo", "Figma"],
  animation: ["AI video tools", "After Effects"],
};

const objectiveBy: Record<Category, (r: Row) => string> = {
  shopify: (r) => `Explore how a ${r[3].toLowerCase()} could make shopping clearer and more confident for a ${r[1].toLowerCase()} brand.`,
  klaviyo: (r) => `Show how a ${r[3].toLowerCase()} could deliver more relevant, well-timed messages for a ${r[1].toLowerCase()} audience.`,
  animation: (r) => `Create a distinctive ${r[3].toLowerCase()} that communicates a ${r[1].toLowerCase()} idea in seconds.`,
};

const deliverablesBy: Record<Category, (r: Row) => string[]> = {
  shopify: (r) => [r[3], "Desktop & mobile mockups", "Design rationale notes"],
  klaviyo: (r) => [r[3], "Email designs", "Flow / timing map", "Strategy notes"],
  animation: (r) => [r[3], "Vertical & landscape cuts", "Style frames"],
};

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function build(cat: Category, rows: Row[]): Project[] {
  return rows.map((r, i) => ({
    slug: `${cat}-${slugify(r[0])}`,
    title: r[0],
    category: cat,
    industry: r[1],
    type: r[1] === "Personal" ? "Personal Project" : i % 4 === 3 ? "Demo Project" : "Concept Project",
    description: r[2],
    objective: objectiveBy[cat](r),
    deliverables: deliverablesBy[cat](r),
    tools: toolsBy[cat],
    tags: [categoryMeta[cat].label, r[1], r[3]],
    featured: i < 3,
    published: true,
    image: categoryMeta[cat].image,
    order: i,
  }));
}

export const projects: Project[] = [
  ...build("shopify", shopifyRows),
  ...build("klaviyo", klaviyoRows),
  ...build("animation", animationRows),
].filter((p) => p.published);

export const industries = Array.from(new Set(projects.map((p) => p.industry))).sort();
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const related = (p: Project) =>
  projects.filter((x) => x.slug !== p.slug && (x.category === p.category && x.industry === p.industry)).concat(
    projects.filter((x) => x.slug !== p.slug && x.category === p.category),
  ).filter((x, i, a) => a.findIndex((y) => y.slug === x.slug) === i).slice(0, 3);
