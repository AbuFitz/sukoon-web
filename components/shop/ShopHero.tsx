export function ShopHero() {
  return (
    <div style={{ padding: "clamp(1.75rem, 3.5vw, 2.5rem) clamp(1.75rem, 3.5vw, 2.5rem) 0" }}>
      <h1 style={{
        fontFamily: "var(--font-body)", fontWeight: 700,
        fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
        letterSpacing: "-0.03em", lineHeight: 1.05, color: "#0D0F10", margin: "0 0 0.625rem",
      }}>
        Shop Sukoon
      </h1>
      <p style={{
        fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "#4A5256", margin: 0, maxWidth: 420,
      }}>
        One formula, two sizes — face in the morning, hairline whenever it needs it.
      </p>
    </div>
  );
}
