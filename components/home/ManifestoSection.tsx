export function ManifestoSection() {
  return (
    <section style={{
      backgroundColor: "#111111",
      padding: "clamp(5rem, 9vw, 8rem) clamp(1.25rem, 4vw, 3rem)",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <p style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "clamp(1.75rem, 4vw, 3rem)",
          lineHeight: 1.35,
          color: "#F5F5F3",
          margin: "0 0 2rem",
          letterSpacing: "-0.01em",
        }}>
          "Skin care shouldn&apos;t require a chemistry degree. Ours requires five ingredients and sixty seconds."
        </p>
        <p style={{
          fontFamily: "var(--font-body)", fontWeight: 500,
          fontSize: "0.75rem", letterSpacing: "0.14em",
          textTransform: "uppercase", color: "#676764",
          margin: 0,
        }}>
          Sukoon Skin
        </p>
      </div>
    </section>
  );
}
