export function ShopHero() {
  return (
    <section style={{
      backgroundColor: "#FFFFFF",
      padding: "clamp(1.75rem, 3vw, 2.5rem) clamp(1.25rem, 4vw, 3rem) clamp(1.25rem, 2vw, 1.75rem)",
    }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <h1 style={{
          fontFamily: "var(--font-body)", fontWeight: 600,
          fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
          letterSpacing: "-0.03em", color: "#111111", margin: "0 0 0.375rem",
        }}>
          Shop Sukoon
        </h1>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "#636360", margin: 0,
        }}>
          The full Daily Solace range — face, hairline, and the bundle that does both.
        </p>
      </div>
    </section>
  );
}
