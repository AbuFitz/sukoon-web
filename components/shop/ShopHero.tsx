export function ShopHero() {
  return (
    <section
      aria-label="Shop"
      style={{
        backgroundColor: "#2C2A1F",
        padding: "clamp(8rem, 18vw, 11rem) clamp(1.5rem, 6vw, 5rem) clamp(3rem, 7vw, 5rem)",
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Subtle texture ring */}
      <div aria-hidden style={{
        position: "absolute", right: "-10%", top: "50%", transform: "translateY(-50%)",
        width: "clamp(300px, 50vw, 680px)", aspectRatio: "1",
        borderRadius: "50%",
        border: "1px solid rgba(232,212,174,0.10)",
        pointerEvents: "none",
      }} />
      <div aria-hidden style={{
        position: "absolute", right: "0%", top: "50%", transform: "translateY(-50%)",
        width: "clamp(200px, 34vw, 460px)", aspectRatio: "1",
        borderRadius: "50%",
        border: "1px solid rgba(232,212,174,0.07)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1320px", margin: "0 auto", position: "relative" }}>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 600,
          letterSpacing: "0.22em", textTransform: "uppercase", color: "#98A47D",
          marginBottom: "1.5rem",
        }}>
          The Collection
        </p>
        <h1 style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 5rem)",
          fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.05,
          color: "#F7F1E4", marginBottom: "1.5rem", maxWidth: "700px",
        }}>
          One oil.<br />Every ritual it belongs in.
        </h1>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
          lineHeight: 1.8, color: "rgba(247,241,228,0.55)", maxWidth: "420px",
        }}>
          Waterless. Five ingredients. Engineered for skin and the hairline pressure tight styles leave behind.
        </p>
      </div>
    </section>
  );
}
