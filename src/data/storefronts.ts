// Third-party brand storefronts shown for inspiration only — not client work.
export const STOREFRONT_CATEGORIES = [
  "Beauty & Skincare",
  "Fashion & Apparel",
  "Food & Beverage",
  "Health & Wellness",
  "Sustainable Products",
  "Home & Lifestyle",
  "Accessories",
] as const;
export type StorefrontCategory = (typeof STOREFRONT_CATEGORIES)[number];

export interface Storefront {
  slug: string;
  name: string;
  url: string;
  categories: StorefrontCategory[];
  description: string;
  preview?: string;
  previewKind?: "screenshot" | "brand-image";
}

export const storefronts: Storefront[] = [
  {
    slug: "fenty-beauty",
    name: "Fenty Beauty",
    url: "https://fentybeauty.com/",
    categories: ["Beauty & Skincare"],
    description: "Cosmetics and skincare presented with bold, high-contrast campaign imagery.",
  },
  {
    slug: "hismile",
    name: "Hismile",
    url: "https://int.hismileteeth.com/",
    categories: ["Beauty & Skincare", "Health & Wellness"],
    description: "Oral-care and teeth-whitening products in a bright, playful, colour-rich style.",
  },
  {
    slug: "fashion-nova",
    name: "Fashion Nova",
    url: "https://www.fashionnova.com/",
    categories: ["Fashion & Apparel"],
    description: "Trend-led clothing shown through dense, model-focused product grids.",
  },
  {
    slug: "ganni",
    name: "GANNI",
    url: "https://www.ganni.com/en/home",
    categories: ["Fashion & Apparel"],
    description: "Contemporary fashion with an editorial, magazine-like visual style.",
  },
  {
    slug: "tentree",
    name: "tentree",
    url: "https://www.tentree.com/",
    categories: ["Fashion & Apparel", "Sustainable Products"],
    description: "Everyday apparel framed with earthy tones and outdoor photography.",
  },
  {
    slug: "liquid-death",
    name: "Liquid Death",
    url: "https://liquiddeath.com/en-ng",
    categories: ["Food & Beverage"],
    description: "Canned water and drinks wrapped in irreverent, heavy-metal-inspired branding.",
  },
  {
    slug: "huel",
    name: "Huel",
    url: "https://huel.com/",
    categories: ["Food & Beverage", "Health & Wellness"],
    description: "Nutritionally complete meals and shakes in a clean, product-forward layout.",
  },
  {
    slug: "partake-foods",
    name: "Partake Foods",
    url: "https://partakefoods.com/",
    categories: ["Food & Beverage"],
    description: "Allergy-friendly snacks shown with cheerful colours and friendly illustration.",
  },
  {
    slug: "fly-by-jing",
    name: "Fly By Jing",
    url: "https://flybyjing.com/",
    categories: ["Food & Beverage"],
    description: "Sichuan chili sauces and pantry goods with vivid, warm food photography.",
  },
  {
    slug: "heatonist",
    name: "HEATONIST",
    url: "https://heatonist.com/",
    categories: ["Food & Beverage"],
    description: "Craft hot sauces displayed in a bold, collector-style product catalogue.",
  },
  {
    slug: "allbirds",
    name: "Allbirds",
    url: "https://www.allbirds.com/",
    categories: ["Fashion & Apparel", "Sustainable Products"],
    description: "Footwear and apparel in a calm, minimal style with soft natural tones.",
  },
  {
    slug: "ruggable",
    name: "Ruggable",
    url: "https://ruggable.com/",
    categories: ["Home & Lifestyle"],
    description: "Washable rugs and home décor shown in styled, room-setting imagery.",
  },
  {
    slug: "ana-luisa",
    name: "Ana Luisa",
    url: "https://www.analuisa.com/",
    categories: ["Accessories"],
    description: "Jewellery presented with refined close-ups and a light, elegant palette.",
  },
  {
    slug: "loop-earplugs",
    name: "Loop Earplugs",
    url: "https://www.loopearplugs.com/",
    categories: ["Health & Wellness", "Accessories"],
    description: "Reusable earplugs in a modern, colourful, lifestyle-led design.",
  },
  {
    slug: "wp-standard",
    name: "WP Standard",
    url: "https://wpstandard.com/",
    categories: ["Accessories"],
    description: "Leather bags and accessories shown with rugged, craft-focused photography.",
  },
];

export const previewUrl = (s: Storefront) =>
  s.preview ?? `https://image.thum.io/get/width/1200/crop/800/noanimate/${s.url}`;
