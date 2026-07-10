export function ShopHero() {
  return (
    <section
      aria-label="Shop"
      style={{
        backgroundColor: "#FFFFFF",
        padding: "clamp(8rem, 16vw, 10rem) clamp(1.5rem, 6vw, 5rem) clamp(3rem, 6vw, 4.5rem)",
        borderBottom: "1px solid #E8E2D8",
      }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "2rem", alignItems: "flex-end" }}>
          <div>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 600,
              letterSpacing: "0.22em", textTransform: "uppercase", color: "#98A47D",
              marginBottom: "1.5rem",
            }}>
              The Collection
            </p>
            <h1 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
              fontWeight: 400, letterSpacing: "-0.025em", lineHeight: 1.05,
              color: "#2C2A1F", margin: 0,
            }}>
              One oil.<br />Every ritual<br />it belongs in.
            </h1>
          </div>
          <p className="hidden md:block" style={{
            fontFamily: "var(--font-body)", fontSize: "1rem",
            lineHeight: 1.8, color: "#6B6860", maxWidth: "380px", marginBottom: "0.5rem",
          }}>
            Waterless. Five ingredients. Engineered for skin and the hairline pressure tight styles leave behind.
          </p>
        </div>
      </div>
    </section>
  );
}
