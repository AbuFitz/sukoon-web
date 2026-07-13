export function ManifestoSection() {
  return (
    <section
      style={{
        backgroundColor: "#3F4A36",
        padding: "clamp(80px, 8vw, 100px) clamp(2rem, 6vw, 6rem)",
        textAlign: "center",
      }}
    >
      <p style={{
        fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 700,
        letterSpacing: "0.2em", textTransform: "uppercase",
        color: "rgba(251,248,243,0.55)", margin: "0 0 1.25rem",
      }}>
        Our Philosophy
      </p>

      <div style={{
        width: 40, height: 1, backgroundColor: "rgba(251,248,243,0.3)",
        margin: "0 auto 2.25rem",
      }} />

      <blockquote style={{
        fontFamily: "var(--font-display)", fontWeight: 400, fontStyle: "italic",
        fontSize: "clamp(34px, 3.4vw, 56px)",
        lineHeight: 1.15, letterSpacing: "-0.022em",
        color: "#FBF8F3",
        margin: "0 auto",
        maxWidth: 1200,
      }}>
        Care should never ask you to become someone else. Only help you feel at home in who you already are.
      </blockquote>
    </section>
  );
}
