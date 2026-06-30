import Image from "next/image";

const features = [
  "100% anhydrous — no preservative-heavy water base",
  "Dual-zone: treats both face and hairline",
  "Lightweight — absorbs in under 60 seconds",
  "UK Halal Certified",
  "Formulated & manufactured in the UK",
];

export function ProductFeature() {
  return (
    <section
      className="flex flex-col md:grid md:grid-cols-2"
      style={{ backgroundColor: "#3F4A36", minHeight: "clamp(520px, 70vw, 700px)" }}
    >
      {/* Text */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(3.5rem, 7vw, 7rem) clamp(2rem, 6vw, 6rem)",
        }}
      >
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(247,241,228,0.3)", marginBottom: "2rem" }}>
          THE FORMULA
</p>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            color: "#F7F1E4",
            marginBottom: "1.5rem",
            maxWidth: "360px",
          }}
        >
          One bottle. Two zones. Zero water.
        </h2>

        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.8, color: "rgba(247,241,228,0.45)", maxWidth: "360px", marginBottom: "2.5rem" }}>
          Formulated without compromise. Every ingredient earns its place. £35 / 30ml.
        </p>

        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {features.map((f) => (
            <li key={f} style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "rgba(247,241,228,0.5)", lineHeight: 1.6, display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
              <span style={{ color: "#A9BA98", flexShrink: 0, marginTop: "0.1em" }}>✓</span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Image */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(2rem, 5vw, 5rem)",
        }}
      >
        <div style={{
          border: "1px solid rgba(169,186,152,0.25)",
          backgroundColor: "rgba(255,255,255,0.04)",
          padding: "1.5rem",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
        <div style={{ position: "relative", width: "clamp(140px, 20vw, 280px)", height: "clamp(220px, 32vw, 440px)" }}>
          <Image
            src="https://images.unsplash.com/photo-1707539160277-e39464517645?w=900&q=90&fit=crop"
            alt="The Daily Solace Fluid dropper bottle"
            fill
            priority
            sizes="(max-width: 768px) 40vw, 20vw"
            style={{ objectFit: "contain" }}
          />
        </div>
        </div>
      </div>
    </section>
  );
}
