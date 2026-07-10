export function PhilosophyQuote() {
  return (
    <section
      aria-label="Brand philosophy"
      style={{
        backgroundColor: "#F7F4EF",
        padding: "clamp(6rem, 14vw, 14rem) clamp(1.5rem, 8vw, 8rem)",
        borderTop: "1px solid #EDE7DC",
        borderBottom: "1px solid #EDE7DC",
      }}
    >
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 700,
          letterSpacing: "0.22em", textTransform: "uppercase", color: "#98A47D",
          marginBottom: "3.5rem",
        }}>
          سكون — Stillness, in Arabic
        </p>

        <p style={{
          fontFamily: "var(--font-display)", fontWeight: 400,
          fontSize: "clamp(3rem, 7.5vw, 6.5rem)", lineHeight: 1.06,
          letterSpacing: "-0.035em", color: "#2C2A1F",
          fontStyle: "italic",
          marginBottom: "4rem",
        }}>
          &ldquo;Not another<br />product. A reason<br />to slow down.&rdquo;
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
          <div style={{ width: 48, height: 1, backgroundColor: "#98A47D", flexShrink: 0 }} />
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.8,
            color: "#8A8275", margin: 0,
          }}>
            Two drops. Sixty seconds. That&rsquo;s the ritual.
          </p>
        </div>
      </div>
    </section>
  );
}
