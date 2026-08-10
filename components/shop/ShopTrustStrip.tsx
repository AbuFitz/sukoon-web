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
      className="stack-panel stack-inner"
      style={{ backgroundColor: "#F1EBDD", paddingBottom: "1px" }}
    >
      <div
        className="grid grid-cols-2 md:grid-cols-4"
        style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 3rem) 2.5rem", gap: "1.75rem" }}
      >
        {items.map((item, i) => (
          <div key={item.title} style={{ borderLeft: "1px solid #D0C9B3", paddingLeft: "1rem" }}>
            <span style={{
              fontFamily: "var(--font-body)", fontWeight: 600,
              fontSize: "0.6875rem", color: "#A39D8C", display: "block", marginBottom: "0.5rem",
            }}>
              {String(i + 1).padStart(2, "0")}
            </span>
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
