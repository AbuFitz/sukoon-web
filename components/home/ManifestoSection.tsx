export function ManifestoSection() {
  return (
    <section style={{
      backgroundColor: "#111111",
      minHeight: "clamp(420px, 45vw, 500px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "clamp(3rem, 6vw, 4rem) clamp(1.25rem, 4vw, 3rem)",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: 620 }}>
        <p style={{
          fontFamily: "var(--font-body)",
          fontWeight: 500,
          fontSize: "clamp(1.625rem, 3.2vw, 2.5rem)",
          lineHeight: 1.2,
          color: "#FAFAFA",
          margin: 0,
          letterSpacing: "-0.02em",
        }}>
          Skin care shouldn&apos;t require a chemistry degree.
          <br />
          Five ingredients. Sixty seconds.
        </p>
      </div>
    </section>
  );
}
