// ─── Image paths ─────────────────────────────────────────────────────────────
// Swap any path here when final photography is ready. No other file needs touching.

export const homepageImages = {
  hero:                   "/images/home/heroimage.png",
  heroLeaf:               "/images/decor/hero-leaf-placeholder.svg",
  story:                  "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1200&q=85&fit=crop",
  storyDetail:            "/images/home/story-detail-placeholder.svg",
  benefits:               "https://images.unsplash.com/photo-1614159102989-40cc8abb8099?w=900&q=85&fit=crop",
  newsletter:             "https://images.unsplash.com/photo-1609220136736-443140cfe843?w=1000&q=85&fit=crop",
  ingredientsLeafTop:     "/images/decor/ingredients-leaf-top-placeholder.svg",
  ingredientsLeafBottom:  "/images/decor/ingredients-leaf-bottom-placeholder.svg",
  productCutout:          "/images/products/daily-solace-cutout-placeholder.svg",
  newsletterProductCutout:"/images/products/daily-solace-cutout-placeholder.svg",
  product30ml:            "https://images.unsplash.com/photo-1707539160277-e39464517645?w=900&q=85&fit=crop",
  product15ml:            "https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?w=900&q=85&fit=crop",
  bundle:                 "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=900&q=85&fit=crop",
} as const;

// ─── Featured products config ─────────────────────────────────────────────────
// Handles must match Shopify product handles exactly.

export const featuredProductHandles = [
  "daily-solace-fluid-30ml",
  "daily-solace-fluid-15ml",
  "solace-bundle",
] as const;

export type FeaturedHandle = typeof featuredProductHandles[number];

export const productImageMap: Record<FeaturedHandle, string> = {
  "daily-solace-fluid-30ml": "https://images.unsplash.com/photo-1707539160277-e39464517645?w=900&q=85&fit=crop",
  "daily-solace-fluid-15ml": "https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?w=900&q=85&fit=crop",
  "solace-bundle":            "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=900&q=85&fit=crop",
};

export const productFallbackPrices: Record<FeaturedHandle, string> = {
  "daily-solace-fluid-30ml": "£35.00",
  "daily-solace-fluid-15ml": "£18.00",
  "solace-bundle":            "£45.00",
};

export const productFallbackTitles: Record<FeaturedHandle, string> = {
  "daily-solace-fluid-30ml": "Daily Solace Fluid — 30ml",
  "daily-solace-fluid-15ml": "Daily Solace Fluid — 15ml",
  "solace-bundle":            "The Solace Bundle",
};

// ─── Ingredients ──────────────────────────────────────────────────────────────

export const ingredients = [
  {
    name: "Olive Squalane",
    latin: "Squalane",
    percent: "80%",
    description: "A dry oil that absorbs in under sixty seconds — never settles, never blocks a pore.",
  },
  {
    name: "Vitamin B3",
    latin: "Myristyl Nicotinate",
    percent: "14.9%",
    description: "Strengthens the barrier on your face and follicles along your hairline — both at once.",
  },
  {
    name: "Black Seed Oil",
    latin: "Nigella Sativa",
    percent: "2%",
    description: "Refined until the sharp scent is gone. Purifies. Settles inflammation at the root.",
  },
  {
    name: "Vitamin E",
    latin: "Tocopherol",
    percent: "3%",
    description: "Protects against oxidation. Keeps every botanical oil in this bottle honest.",
  },
  {
    name: "Vanilla Extract",
    latin: "Vanilla Planifolia",
    percent: "0.1%",
    description: "Neutralises herbal undertones without synthetic fragrance. Zero irritation.",
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
