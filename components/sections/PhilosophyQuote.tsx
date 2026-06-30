export function PhilosophyQuote() {
  return (
    <section
      aria-label="Brand philosophy"
      style={{
        backgroundColor: "#3F4A36",
        padding: "clamp(4rem, 10vw, 7rem) clamp(1.5rem, 6vw, 5rem)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>
        <span aria-hidden style={{
          display: "block", fontFamily: "var(--font-display)", fontSize: "3rem",
          color: "#A9BA98", marginBottom: "1rem", lineHeight: 1,
        }}>
          &ldquo;
        </span>
        <p style={{
          fontFamily: "var(--font-display)", fontWeight: 400, fontStyle: "italic",
          fontSize: "clamp(1.625rem, 4vw, 2.75rem)", lineHeight: 1.35,
          letterSpacing: "-0.01em", color: "#FBF8F3", marginBottom: "1.75rem",
        }}>
          Sukoon is more than skincare.<br />It&rsquo;s a return to what matters.
        </p>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 500,
          letterSpacing: "0.18em", textTransform: "uppercase", color: "#A9BA98",
        }}>
          سكون — Stillness
        </p>
      </div>
    </section>
  );
}
