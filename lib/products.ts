export type Product = {
  slug: string;
  name: string;
  size: string;
  price: string;
  src: string;
  tag: string;
  description: string;
};

export const products: Product[] = [
  {
    slug: "daily-solace-fluid-30ml",
    name: "The Daily Solace Fluid",
    size: "30ml",
    price: "£35",
    src: "https://images.unsplash.com/photo-1707539160277-e39464517645?w=900&q=85&fit=crop",
    tag: "",
    description: "The full-size Daily Solace Fluid. Face in the morning, hairline whenever it needs it. One bottle, two rituals.",
  },
  {
    slug: "daily-solace-fluid-15ml",
    name: "The Daily Solace Fluid — 15ml",
    size: "15ml",
    price: "£18",
    src: "https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?w=900&q=85&fit=crop",
    tag: "",
    description: "A trial size to start the ritual before committing to the full bottle.",
  },
  {
    slug: "solace-bundle",
    name: "The Solace Bundle",
    size: "30ml Fluid + 10ml Lip Balm",
    price: "£45",
    src: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=900&q=85&fit=crop",
    tag: "Bundle",
    description: "The Daily Solace Fluid paired with The Solace Lip Balm. One ritual, two products, one price.",
  },
];
