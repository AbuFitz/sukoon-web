export function PhilosophyQuote() {
  return (
    <section
      aria-label="Brand philosophy"
      style={{
        backgroundColor: "#2C2A1F",
        padding: "clamp(5rem, 12vw, 10rem) clamp(1.5rem, 6vw, 5rem)",
      }}
    >
      <div style={{ maxWidth: "920px", margin: "0 auto" }}>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 600,
          letterSpacing: "0.22em", textTransform: "uppercase", color: "#98A47D",
          marginBottom: "3rem",
        }}>
          سكون — Stillness, in Arabic
        </p>
        <p style={{
          fontFamily: "var(--font-display)", fontWeight: 400,
          fontSize: "clamp(2rem, 5.5vw, 4.25rem)", lineHeight: 1.12,
          letterSpacing: "-0.02em", color: "#F7F1E4",
          marginBottom: "3rem",
        }}>
          &ldquo;Not another product.<br />A reason to slow down.&rdquo;
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <div style={{ width: 32, height: 1, backgroundColor: "#98A47D" }} />
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.8125rem", lineHeight: 1.6,
            color: "rgba(247,241,228,0.5)", maxWidth: "440px",
          }}>
            Sukoon was built on one belief: that the best skincare asks you to pause.
            Two drops. Sixty seconds. That&rsquo;s the whole ritual.
          </p>
        </div>
      </div>
    </section>
  );
}
