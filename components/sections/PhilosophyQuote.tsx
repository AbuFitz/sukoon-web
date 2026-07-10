export function PhilosophyQuote() {
  return (
    <section
      aria-label="Brand philosophy"
      style={{
        backgroundColor: "#F7F4EF",
        padding: "clamp(5rem, 11vw, 10rem) clamp(1.5rem, 6vw, 5rem)",
        borderTop: "1px solid #EDE7DC",
        borderBottom: "1px solid #EDE7DC",
      }}
    >
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 700,
          letterSpacing: "0.22em", textTransform: "uppercase", color: "#98A47D",
          marginBottom: "2.5rem",
        }}>
          سكون — Stillness, in Arabic
        </p>
        <p style={{
          fontFamily: "var(--font-display)", fontWeight: 400,
          fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", lineHeight: 1.1,
          letterSpacing: "-0.025em", color: "#2C2A1F",
          marginBottom: "3rem",
        }}>
          &ldquo;Not another product.<br />A reason to slow down.&rdquo;
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <div style={{ width: 40, height: 1, backgroundColor: "#98A47D", flexShrink: 0 }} />
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.75,
            color: "#8A8275",
          }}>
            Sukoon was built on one belief: the best skincare asks you to pause. Two drops. Sixty seconds. That&rsquo;s the ritual.
          </p>
        </div>
      </div>
    </section>
  );
}
