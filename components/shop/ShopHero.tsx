export function ShopHero() {
  return (
    <section
      aria-label="Shop"
      style={{
        backgroundColor: "#F7F1E4",
        padding: "clamp(7rem, 16vw, 9.5rem) clamp(1.5rem, 6vw, 5rem) clamp(2.5rem, 6vw, 4rem)",
      }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500,
          letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B7B5C",
          marginBottom: "1rem",
        }}>
          Shop
        </p>
        <h1 style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5.5vw, 4rem)",
          fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.08,
          color: "#2C2A1F", marginBottom: "1.25rem", maxWidth: "640px",
        }}>
          The Daily Solace Fluid.
        </h1>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.8,
          color: "#6B7B5C", maxWidth: "440px",
        }}>
          One waterless oil, three ways to start. Engineered for both your skin and the hairline strain hijabs, under-caps, and tight styles leave behind.
        </p>
      </div>
    </section>
  );
}
