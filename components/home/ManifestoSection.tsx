export function ManifestoSection() {
  return (
    <section className="container" style={{ paddingTop: "clamp(1rem, 2vw, 1.25rem)" }}>
      <div className="card" style={{
        backgroundColor: "#EBEBEB",
        minHeight: "clamp(220px, 24vw, 300px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(2.5rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 3rem)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 640 }}>
          <p style={{
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)",
            lineHeight: 1.2,
            color: "#111111",
            margin: 0,
            letterSpacing: "-0.02em",
          }}>
            Skin care shouldn&apos;t require a chemistry degree.
            <br />
            Five ingredients. Sixty seconds.
          </p>
        </div>
      </div>
    </section>
  );
}
