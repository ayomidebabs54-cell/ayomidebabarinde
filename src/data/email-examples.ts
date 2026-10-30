/**
 * Third-party email campaign examples shown on the Klaviyo portfolio page.
 *
 * These are emails published by other brands and archived on Milled. They are
 * presented as "Email Inspiration & Campaign Examples" — NOT as client work,
 * and no design, build, management or performance ownership is claimed.
 *
 * Preview status: Milled requires a signed-in account to view archived emails
 * and blocks embedding (X-Frame-Options: SAMEORIGIN), so no original email
 * artwork can be retrieved or displayed. Every entry currently renders as a
 * branded fallback card with an on-site detail modal. If a properly licensed
 * preview image becomes available, add its path to `preview` and set
 * `previewStatus: "ready"`.
 */

export type EmailCategory =
  | "Promotional Campaigns"
  | "Abandoned Cart"
  | "Social Proof & Reviews"
  | "Product Education"
  | "Seasonal Campaigns"
  | "Sale & Discount Campaigns"
  | "Product Recommendations";

export type EmailBrand =
  | "Love Wellness"
  | "Bed Bath & Beyond"
  | "Alex and Ani"
  | "Casper"
  | "DICK'S Sporting Goods";

export interface EmailExample {
  slug: string;
  brand: EmailBrand;
  title: string;
  /** Archived source page on Milled (attribution only; never linked off-site). */
  sourceUrl: string;
  category: EmailCategory;
  /** Short, neutral description of what the email does. */
  note: string;
  preview?: string;
  previewStatus: "ready" | "unavailable";
}

type Row = [EmailBrand, string, string, EmailCategory, string];

const rows: Row[] = [
  // Love Wellness — 4 emails
  [
    "Love Wellness",
    "Women Don't Need Hype, They Need Results",
    "https://milled.com/love-wellness/women-dont-need-hype-they-need-results-XeKBQjQ_3l5zEu2K",
    "Product Education",
    "A straightforward, results-led message that skips the hype and explains product value.",
  ],
  [
    "Love Wellness",
    "Did You Forget Something?",
    "https://milled.com/love-wellness/did-you-forget-something-_-TchGMZEwECFrPF",
    "Abandoned Cart",
    "A gentle cart-reminder message that brings shoppers back to what they left behind.",
  ],
  [
    "Love Wellness",
    "Real People, Real Reviews",
    "https://milled.com/love-wellness/real-people-real-reviews-2Tt4Jgj1S5smQCXz",
    "Social Proof & Reviews",
    "Customer reviews take center stage to build trust through real experiences.",
  ],
  [
    "Love Wellness",
    "Real People, Real Reviews — Alternative Version",
    "https://milled.com/love-wellness/real-people-real-reviews-OV5ybwIeXb1LWLK_",
    "Social Proof & Reviews",
    "A second take on the review-led approach, useful for comparing layout choices.",
  ],
  // Bed Bath & Beyond — 5 emails
  [
    "Bed Bath & Beyond",
    "Holiday Decorating Starts Here",
    "https://milled.com/BedBathandBeyond/holiday-decorating-starts-here-IW0hARCBhFs9aVXM",
    "Seasonal Campaigns",
    "A seasonal kickoff email built around holiday decorating inspiration.",
  ],
  [
    "Bed Bath & Beyond",
    "Beyond Big Closeout Sale Ends Tonight",
    "https://milled.com/BedBathandBeyond/beyond-big-closeout-sale-ends-tonight-jyt-hiHQV9lKGLao",
    "Sale & Discount Campaigns",
    "A final-call closeout message using a clear tonight deadline.",
  ],
  [
    "Bed Bath & Beyond",
    "Light Up Your Home for Up to 60% Off",
    "https://milled.com/BedBathandBeyond/light-up-your-home-for-up-to-60-off-r_PkpzQNOxraONBq",
    "Sale & Discount Campaigns",
    "A category-led discount email pairing lighting products with a strong offer.",
  ],
  [
    "Bed Bath & Beyond",
    "Get Guest Ready — Save Up to 60%",
    "https://milled.com/BedBathandBeyond/get-guest-ready-save-up-to-60-MKqHmnaYR3ZdkvjB",
    "Sale & Discount Campaigns",
    "A hosting-season message that ties guest-ready products to a site-wide saving.",
  ],
  [
    "Bed Bath & Beyond",
    "25% Off New Fall Arrivals — Ends Tomorrow",
    "https://milled.com/BedBathandBeyond/25-off-new-fall-arrivals-ends-tomorrow-he1DDt9G0dA0m98y",
    "Sale & Discount Campaigns",
    "New-season arrivals promoted with a short, time-boxed discount.",
  ],
  // Alex and Ani — 5 emails
  [
    "Alex and Ani",
    "New Friends, You're My Lobster",
    "https://milled.com/alexandaniusa/new-friends-youre-my-lobster-GH43kscyPZb9cFbe",
    "Promotional Campaigns",
    "A playful, pop-culture-led message aimed at newer subscribers.",
  ],
  [
    "Alex and Ani",
    "Holiday Styles From $16 — Inside",
    "https://milled.com/alexandaniusa/holiday-styles-from-16-inside-dtnFg58dQed_kCO7",
    "Seasonal Campaigns",
    "Holiday gifting styles anchored by an accessible entry price.",
  ],
  [
    "Alex and Ani",
    "Scorpio Energy Only",
    "https://milled.com/alexandaniusa/scorpio-energy-only-WADUWasa02vwfcSX",
    "Product Recommendations",
    "A zodiac-themed product edit aimed at a specific customer segment.",
  ],
  [
    "Alex and Ani",
    "We Solemnly Swear You'll Love These Charms",
    "https://milled.com/alexandaniusa/we-solemnly-swear-youll-love-these-charms-og2940RwaRUOaQcD",
    "Product Recommendations",
    "A themed charm collection presented with a playful cultural reference.",
  ],
  [
    "Alex and Ani",
    "Last Chance Halloween — Up to 50% Off",
    "https://milled.com/alexandaniusa/last-chance-halloween-up-to-50-off-PQ5sCWXTGlDHa58s",
    "Seasonal Campaigns",
    "A last-call Halloween offer combining the season with a deep discount.",
  ],
  // Casper — 7 emails
  [
    "Casper",
    "Free Mattress Removal",
    "https://milled.com/casper/free-mattress-removal-k-siiTzERXUpRedn",
    "Promotional Campaigns",
    "A service-led message that removes a common purchase obstacle.",
  ],
  [
    "Casper",
    "Final Hours — Extra 5% on Bundles",
    "https://milled.com/casper/final-hours-extra-5-on-bundles-UD7zQDkxbj3gI0D5",
    "Sale & Discount Campaigns",
    "A final-hours bundle offer with an extra incentive to close the sale.",
  ],
  [
    "Casper",
    "What's Missing From Your Bed?",
    "https://milled.com/casper/whats-missing-from-your-bed-uA8wfrX9vbuw4C3C",
    "Product Recommendations",
    "A question-led email that suggests complementary bedroom products.",
  ],
  [
    "Casper",
    "Last Chance to Save 25%",
    "https://milled.com/casper/last-chance-to-save-25-eBDX4HFtUuOHo7Qb",
    "Sale & Discount Campaigns",
    "A last-chance reminder built around a single clear discount.",
  ],
  [
    "Casper",
    "Save 25% for 3 Days Only",
    "https://milled.com/casper/save-25-for-3-days-only-EU_UYSX3A4NWgwmC",
    "Sale & Discount Campaigns",
    "A short-window sale announcement with an explicit three-day frame.",
  ],
  [
    "Casper",
    "The Proof Is in the Sleeping",
    "https://milled.com/casper/the-proof-is-in-the-sleeping-d0FCx9GkIuoQzysW",
    "Social Proof & Reviews",
    "A proof-led message leaning on customer sleep experiences.",
  ],
  [
    "Casper",
    "Extra 5% Ends Tonight — Don't Miss It",
    "https://milled.com/casper/extra-5-ends-tonight-dont-miss-it-nN4yLEA38R0bbGsv",
    "Sale & Discount Campaigns",
    "An end-of-day urgency message for an expiring extra discount.",
  ],
  // DICK'S Sporting Goods — 5 emails
  [
    "DICK'S Sporting Goods",
    "You Left Something in Your Cart",
    "https://milled.com/dicks-sporting-goods/you-left-something-in-your-cart-36kC6N8Ff-GFp30q",
    "Abandoned Cart",
    "A classic cart-abandonment reminder calling out the items left behind.",
  ],
  [
    "DICK'S Sporting Goods",
    "Milwaukee Fans Rep the Win",
    "https://milled.com/dicks-sporting-goods/milwaukee-fans-rep-the-win-ZKt8ClAvA8-we7zd",
    "Promotional Campaigns",
    "A local-moment campaign tying team pride to fan gear.",
  ],
  [
    "DICK'S Sporting Goods",
    "You're Getting Fall Savings — Up to 75% Off Select Clearance",
    "https://milled.com/dicks-sporting-goods/youre-getting-fall-savings-shop-up-to-75-off-select-clearance-FFuPcZc2H5RdaeMM",
    "Sale & Discount Campaigns",
    "A fall clearance push led by a headline discount.",
  ],
  [
    "DICK'S Sporting Goods",
    "Wow! Don't Miss Up to 75% Off Select Clearance Styles",
    "https://milled.com/dicks-sporting-goods/wow-dont-miss-up-to-75-off-select-clearance-styles-HXurGpO26oLlrkoP",
    "Sale & Discount Campaigns",
    "A high-energy clearance reminder repeating the headline saving.",
  ],
  [
    "DICK'S Sporting Goods",
    "Fresh Deals for Fall — Up to 50% Off This Week",
    "https://milled.com/dicks-sporting-goods/fresh-deals-for-fall-yes-please-shop-up-to-50-off-this-week-Oc_s-kPX-bt4e3iZ",
    "Sale & Discount Campaigns",
    "A weekly fall deals email with a clear this-week window.",
  ],
];

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const emailExamples: EmailExample[] = rows.map((r) => ({
  slug: slugify(`${r[0]}-${r[1]}`),
  brand: r[0],
  title: r[1],
  sourceUrl: r[2],
  category: r[3],
  note: r[4],
  previewStatus: "unavailable",
}));

export const EMAIL_CATEGORIES: EmailCategory[] = [
  "Promotional Campaigns",
  "Abandoned Cart",
  "Social Proof & Reviews",
  "Product Education",
  "Seasonal Campaigns",
  "Sale & Discount Campaigns",
  "Product Recommendations",
];

export const EMAIL_BRANDS: EmailBrand[] = [
  "Love Wellness",
  "Bed Bath & Beyond",
  "Alex and Ani",
  "Casper",
  "DICK'S Sporting Goods",
];
