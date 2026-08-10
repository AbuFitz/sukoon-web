// ─── Image paths ─────────────────────────────────────────────────────────────
// Swap any path here when final photography is ready. No other file needs touching.

export const homepageImages = {
  hero:                   "/images/home/heroimage.png",
  heroLeaf:               "/images/decor/hero-leaf-placeholder.svg",
  story:                  "/images/home/rootedcalm.png",
  storyDetail:            "/images/home/story-detail-placeholder.svg",
  benefits:               "/images/home/realcare.png",
  newsletter:             "/images/home/newsletter.png",
  ingredientsLeafTop:     "/images/decor/ingredients-leaf-top-placeholder.svg",
  ingredientsLeafBottom:  "/images/decor/ingredients-leaf-bottom-placeholder.svg",
  productCutout:          "/images/products/daily-solace-cutout-placeholder.svg",
  newsletterProductCutout:"/images/products/daily-solace-cutout-placeholder.svg",
  product30ml:            "https://images.unsplash.com/photo-1707539160277-e39464517645?w=900&q=85&fit=crop",
  product15ml:            "https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?w=900&q=85&fit=crop",
} as const;

// ─── Featured products config ─────────────────────────────────────────────────
// Handles must match Shopify product handles exactly. Sukoon sells a single
// formula in two sizes — no bundle.

export const featuredProductHandles = [
  "daily-solace-fluid-30ml",
  "daily-solace-fluid-15ml",
] as const;

export type FeaturedHandle = typeof featuredProductHandles[number];

export type FeaturedProduct = {
  handle: string;
  title: string;
  price: string;
  variantId?: string;
  availableForSale?: boolean;
};

export const productImageMap: Record<FeaturedHandle, string> = {
  "daily-solace-fluid-30ml": "https://images.unsplash.com/photo-1707539160277-e39464517645?w=900&q=85&fit=crop",
  "daily-solace-fluid-15ml": "https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?w=900&q=85&fit=crop",
};

export const productFallbackPrices: Record<FeaturedHandle, string> = {
  "daily-solace-fluid-30ml": "£35.00",
  "daily-solace-fluid-15ml": "£18.00",
};

export const productFallbackTitles: Record<FeaturedHandle, string> = {
  "daily-solace-fluid-30ml": "Daily Solace Fluid — 30ml",
  "daily-solace-fluid-15ml": "Daily Solace Fluid — 15ml",
};

// ─── Ingredients ──────────────────────────────────────────────────────────────

export const ingredients = [
  {
    name: "Olive Squalane",
    latin: "Squalane",
    percent: "80%",
    description: "Fast-absorbing dry oil base that mirrors natural sebum.",
  },
  {
    name: "Vitamin B3",
    latin: "Niacinamide",
    percent: "14.9%",
    description: "Barrier strength for face and hair follicles.",
  },
  {
    name: "Vitamin E",
    latin: "Tocopherol",
    percent: "3%",
    description: "Antioxidant stability without synthetic preservatives.",
  },
  {
    name: "Black Seed Oil",
    latin: "Nigella Sativa",
    percent: "2%",
    description: "Vacuum-steam refined anti-inflammatory protection against friction damage.",
  },
  {
    name: "Vanilla Extract",
    latin: "Vanilla Planifolia",
    percent: "0.1%",
    description: "Natural aromatic balancing — 0% synthetic fragrance.",
  },
] as const;

// ─── Benefits ─────────────────────────────────────────────────────────────────

export const benefits = [
  {
    title: "Soothes & calms",
    description: "Helps reduce visible irritation and supports sensitive skin.",
  },
  {
    title: "Strengthens barrier",
    description: "Supports resilient, balanced and healthy-looking skin.",
  },
  {
    title: "Hydrates deeply",
    description: "Lasting moisture that absorbs without weight or residue.",
  },
  {
    title: "Protects naturally",
    description: "Antioxidant support helps defend against daily stressors.",
  },
] as const;
