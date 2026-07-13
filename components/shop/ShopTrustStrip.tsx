const iconSize = 36;

const items = [
  {
    title: "Free Shipping",
    body: "On UK orders over £50",
    icon: "/icons/trust-truck.png",
  },
  {
    title: "Thoughtful Packaging",
    body: "Recyclable and minimal",
    icon: "/icons/trust-box.png",
  },
  {
    title: "Made with Care",
    body: "Small batches, tested with intention",
    icon: "/icons/trust-heart.png",
  },
  {
    title: "Real Results",
    body: "Gentle formulas that support your skin",
    icon: "/icons/trust-leaf.png",
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
            <div style={{ marginBottom: "0.875rem", width: iconSize, height: iconSize, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.icon}
                alt=""
                aria-hidden="true"
                width={iconSize}
                height={iconSize}
                style={{ objectFit: "contain", width: iconSize, height: iconSize }}
              />
            </div>
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
