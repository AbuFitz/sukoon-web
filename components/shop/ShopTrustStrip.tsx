const items = [
  {
    title: "Free Shipping",
    body: "On UK orders over £50",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#45543d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/>
        <rect x="9" y="11" width="14" height="10" rx="2"/>
        <circle cx="12" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
      </svg>
    ),
  },
  {
    title: "Thoughtful Packaging",
    body: "Recyclable and minimal",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#45543d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    title: "Made with Care",
    body: "Small batches, tested with intention",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#45543d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
  },
  {
    title: "Real Results",
    body: "Gentle formulas that support your skin",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#45543d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6 2 5 10 5 14a7 7 0 0 0 14 0c0-4-1-12-7-12z"/>
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
