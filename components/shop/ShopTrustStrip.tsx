const BORDER = "#DCE1E3";

const items = [
  { title: "Free Shipping", body: "On UK orders over £40" },
  { title: "Made with Care", body: "Small batches, formulated in the UK" },
  { title: "Fragrance-Free", body: "Gentle formula, no synthetic perfume" },
  { title: "Easy Returns", body: "30 days, no questions asked" },
];

export function ShopTrustStrip() {
  return (
    <div
      aria-label="Why Sukoon"
      className="shop-trust-strip"
      style={{ borderTop: `1px solid ${BORDER}`, display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
    >
      {items.map((item, i) => (
        <div key={item.title} style={{
          padding: "clamp(1.25rem, 2.5vw, 1.75rem)",
          borderLeft: i > 0 ? `1px solid ${BORDER}` : "none",
        }}>
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

      <style>{`
        @media (max-width: 767px) {
          .shop-trust-strip { grid-template-columns: repeat(2, 1fr) !important; }
          .shop-trust-strip > div:nth-child(3) { border-left: none; }
          .shop-trust-strip > div:nth-child(n + 3) { border-top: 1px solid ${BORDER}; }
        }
      `}</style>
    </div>
  );
}
