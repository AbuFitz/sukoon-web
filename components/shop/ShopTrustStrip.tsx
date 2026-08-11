const items = [
  { title: "Free Shipping", body: "On UK orders over £40" },
  { title: "Made with Care", body: "Small batches, formulated in the UK" },
  { title: "Fragrance-Free", body: "Gentle formula, no synthetic perfume" },
  { title: "Easy Returns", body: "30 days, no questions asked" },
];

export function ShopTrustStrip() {
  return (
    <section aria-label="Why Sukoon" className="container" style={{ paddingTop: "clamp(1rem, 2vw, 1.25rem)" }}>
      <div
        className="grid grid-cols-2 md:grid-cols-4"
        style={{ gap: "clamp(1rem, 2vw, 1.25rem)" }}
      >
        {items.map(item => (
          <div key={item.title} className="card" style={{ padding: "1.25rem" }}>
            <p style={{
              fontFamily: "var(--font-body)", fontWeight: 700,
              fontSize: "0.875rem", color: "#0D0F10", margin: "0 0 0.25rem",
            }}>
              {item.title}
            </p>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.8125rem", lineHeight: 1.4,
              color: "#4A5256", margin: 0,
            }}>
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
