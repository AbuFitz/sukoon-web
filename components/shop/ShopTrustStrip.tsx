const items = [
  { title: "Free Shipping", body: "On UK orders over £40" },
  { title: "Made with Care", body: "Small batches, formulated in the UK" },
  { title: "Fragrance-Free", body: "Gentle formula, no synthetic perfume" },
  { title: "Easy Returns", body: "30 days, no questions asked" },
];

export function ShopTrustStrip() {
  return (
    <section
      aria-label="Why Sukoon"
      style={{ backgroundColor: "#FAFAFA", borderTop: "1px solid #E5E5E2" }}
    >
      <div
        className="grid grid-cols-2 md:grid-cols-4"
        style={{ maxWidth: 1440, margin: "0 auto", padding: "1.75rem clamp(1.25rem, 4vw, 3rem)", gap: "1.25rem" }}
      >
        {items.map(item => (
          <div key={item.title}>
            <p style={{
              fontFamily: "var(--font-body)", fontWeight: 600,
              fontSize: "0.875rem", color: "#111111", margin: "0 0 0.2rem",
            }}>
              {item.title}
            </p>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.8125rem", lineHeight: 1.4,
              color: "#636360", margin: 0,
            }}>
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
