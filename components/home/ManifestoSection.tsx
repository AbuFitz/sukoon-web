export function ManifestoSection() {
  return (
    <section
      style={{
        backgroundColor: "#292b25",
        padding: "clamp(5rem, 9vw, 8rem) clamp(2rem, 6vw, 6rem)",
        textAlign: "center",
      }}
    >
      <p style={{
        fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 700,
        letterSpacing: "0.2em", textTransform: "uppercase",
        color: "#6a7860", marginBottom: "2.5rem",
      }}>
        The Sukoon Standard
      </p>
      <blockquote style={{
        fontFamily: "var(--font-display)", fontWeight: 400,
        fontSize: "clamp(2rem, 3.4vw, 3.5rem)",
        lineHeight: 1.12, letterSpacing: "-0.025em",
        color: "#f0ece2",
        margin: "0 auto",
        maxWidth: 860,
      }}>
        &ldquo;Five ingredients, no fillers. Every drop earns its place.&rdquo;
      </blockquote>
    </section>
  );
}
