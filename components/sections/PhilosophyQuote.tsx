export function PhilosophyQuote() {
  return (
    <section
      aria-label="Brand philosophy"
      style={{
        backgroundColor: "#F7F4EF",
        padding: "clamp(6rem, 14vw, 13rem) clamp(1.5rem, 8vw, 8rem)",
        borderTop: "1px solid #EDE7DC",
        borderBottom: "1px solid #EDE7DC",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 700,
          letterSpacing: "0.22em", textTransform: "uppercase", color: "#98A47D",
          marginBottom: "3rem",
        }}>
          سكون — Stillness, in Arabic
        </p>
        <p style={{
          fontFamily: "var(--font-display)", fontWeight: 400,
          fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)", lineHeight: 1.08,
          letterSpacing: "-0.03em", color: "#2C2A1F",
          marginBottom: "4rem",
          fontStyle: "italic",
        }}>
          &ldquo;Not another product.<br />A reason to slow down.&rdquo;
        </p>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.85,
          color: "#8A8275", maxWidth: "520px", margin: "0 auto",
        }}>
          Sukoon was built on one belief: the best skincare asks you to pause.
          Two drops. Sixty seconds. That&rsquo;s the ritual.
        </p>
      </div>
    </section>
  );
}
