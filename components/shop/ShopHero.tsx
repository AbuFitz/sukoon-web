export function ShopHero() {
  return (
    <section style={{
      backgroundColor: "#FFFFFF",
      padding: "clamp(8rem, 14vw, 11rem) clamp(1.25rem, 4vw, 3rem) clamp(3rem, 5vw, 4rem)",
      borderBottom: "1px solid #E3E3DF",
    }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <p style={{
          fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.6875rem",
          letterSpacing: "0.16em", textTransform: "uppercase", color: "#92928D",
          margin: "0 0 1rem",
        }}>
          All Products
        </p>
        <h1 style={{
          fontFamily: "var(--font-body)", fontWeight: 700,
          fontSize: "clamp(2.75rem, 5vw, 4.5rem)",
          letterSpacing: "-0.035em", color: "#111111", margin: 0,
        }}>
          Shop Sukoon
        </h1>
      </div>
    </section>
  );
}
