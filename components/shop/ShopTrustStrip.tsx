const S = { width: 30, height: 30, viewBox: "0 0 24 24", fill: "none" as const, stroke: "#45543d", strokeWidth: 1.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const items = [
  {
    title: "Free Shipping",
    body: "On UK orders over £50",
    icon: (
      <svg {...S}>
        {/* delivery truck */}
        <rect x="1" y="6" width="15" height="11" rx="1"/>
        <path d="M16 10h4l3 4v3h-7V10z"/>
        <circle cx="5.5" cy="18.5" r="1.5"/>
        <circle cx="18.5" cy="18.5" r="1.5"/>
      </svg>
    ),
  },
  {
    title: "Thoughtful Packaging",
    body: "Recyclable and minimal",
    icon: (
      <svg {...S}>
        {/* open box */}
        <polyline points="21 8 21 21 3 21 3 8"/>
        <rect x="1" y="3" width="22" height="5"/>
        <line x1="10" y1="12" x2="14" y2="12"/>
      </svg>
    ),
  },
  {
    title: "Made with Care",
    body: "Small batches, tested with intention",
    icon: (
      <svg {...S}>
        {/* clean heart */}
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    title: "Real Results",
    body: "Gentle formulas that support your skin",
    icon: (
      <svg {...S}>
        {/* leaf */}
        <path d="M6.5 20.5C6.5 20.5 7 13 12 9C17 5 21 3 21 3C21 3 19 9 15 13C11 17 6.5 20.5 6.5 20.5Z"/>
        <line x1="6.5" y1="20.5" x2="12" y2="13"/>
      </svg>
    ),
  },
];

export function ShopTrustStrip() {
  return (
    <section
      aria-label="Why Sukoon"
      style={{
        backgroundColor: "#faf8f4",
        borderTop: "1px solid rgba(53,65,47,0.1)",
        borderBottom: "1px solid rgba(53,65,47,0.1)",
      }}
    >
      <div
        className="grid grid-cols-2 md:grid-cols-4"
        style={{ maxWidth: 1400, margin: "0 auto" }}
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
              borderRight: i < items.length - 1 ? "1px solid rgba(53,65,47,0.1)" : "none",
            }}
          >
            <div style={{ marginBottom: "0.875rem" }}>{item.icon}</div>
            <h3 style={{
              fontFamily: "var(--font-display)", fontWeight: 400,
              fontSize: "1.375rem", lineHeight: 1.2,
              color: "#252820", margin: "0 0 0.5rem",
            }}>
              {item.title}
            </h3>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.55,
              color: "#4f534a", margin: 0, maxWidth: 220,
            }}>
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
