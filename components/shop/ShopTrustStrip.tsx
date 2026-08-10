import { Heart, Leaf, Package, Truck } from "lucide-react";

const items = [
  {
    title: "Free Shipping",
    body: "On UK orders over £40",
    icon: Truck,
  },
  {
    title: "Thoughtful Packaging",
    body: "Recyclable and minimal",
    icon: Package,
  },
  {
    title: "Made with Care",
    body: "Small batches, formulated in the UK",
    icon: Heart,
  },
  {
    title: "Fragrance-Free",
    body: "Gentle formula, no synthetic perfume",
    icon: Leaf,
  },
];

export function ShopTrustStrip() {
  return (
    <section
      aria-label="Why Sukoon"
      style={{
        backgroundColor: "#F5F5F3",
        borderTop: "1px solid #E3E3DF",
        borderBottom: "1px solid #E3E3DF",
      }}
    >
      <div
        className="grid grid-cols-2 md:grid-cols-4"
        style={{ maxWidth: 1320, margin: "0 auto" }}
      >
        {items.map((item, i) => (
          <div
            key={item.title}
            style={{
              minHeight: 190,
              padding: "2.375rem clamp(1.25rem, 2.5vw, 1.875rem)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              textAlign: "center",
              borderRight: i < items.length - 1 ? "1px solid #E3E3DF" : "none",
            }}
          >
            <item.icon
              style={{ width: 28, height: 28, color: "#111111", marginBottom: "0.875rem" }}
              strokeWidth={1.5}
              aria-hidden
            />
            <h3 style={{
              fontFamily: "var(--font-body)", fontWeight: 700,
              fontSize: "0.8125rem", letterSpacing: "0.06em", textTransform: "uppercase",
              color: "#111111", margin: "0 0 0.5rem",
            }}>
              {item.title}
            </h3>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.55,
              color: "#676764", margin: 0, maxWidth: 220,
            }}>
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
