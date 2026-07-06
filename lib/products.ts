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
    slug: "daily-solace-fluid-15ml-trial",
    name: "The Daily Solace Fluid — 15ml Trial",
    size: "15ml Trial",
    price: "£20",
    src: "https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?w=900&q=85&fit=crop",
    tag: "New",
    description: "A six-week supply to test the ritual before committing to the full size.",
  },
  {
    slug: "daily-solace-fluid-travel-case",
    name: "The Daily Solace Fluid + Travel Case",
    size: "30ml Bundle",
    price: "£42",
    src: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=900&q=85&fit=crop",
    tag: "Bundle",
    description: "Full-size bottle paired with a refillable travel case for the ritual on the go.",
  },
];
