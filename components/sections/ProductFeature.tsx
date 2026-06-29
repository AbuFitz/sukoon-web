import Image from "next/image";

const features = [
  "Cold-pressed Nigella Sativa — 42% of formula",
  "Zero synthetic fragrance or preservatives",
  "Lightweight — absorbs in under 60 seconds",
  "Suitable for all skin types, including sensitive",
  "Mindfully sourced. Small batch. UK-made.",
];

export function ProductFeature() {
  return (
    <section
      className="flex flex-col md:grid md:grid-cols-2"
      style={{ backgroundColor: "#3A4028", minHeight: "clamp(520px, 70vw, 700px)" }}
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
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(251,248,243,0.3)", marginBottom: "2rem" }}>
          THE SUKOON OIL
</p>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            color: "#FBF8F3",
            marginBottom: "1.5rem",
            maxWidth: "360px",
          }}
        >
          One oil. Everything it needs to be.
        </h2>

        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.8, color: "rgba(251,248,243,0.45)", maxWidth: "360px", marginBottom: "2.5rem" }}>
          Formulated without compromise. Every ingredient earns its place.
        </p>

        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {features.map((f) => (
            <li key={f} style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "rgba(251,248,243,0.5)", lineHeight: 1.6, display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
              <span style={{ color: "#9BA584", flexShrink: 0, marginTop: "0.1em" }}>✓</span>
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
          border: "1px solid rgba(155,165,132,0.25)",
          backgroundColor: "rgba(255,255,255,0.04)",
          padding: "1.5rem",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
        <div style={{ position: "relative", width: "clamp(140px, 20vw, 280px)", height: "clamp(220px, 32vw, 440px)" }}>
          <Image
            src="https://images.unsplash.com/photo-1707539160277-e39464517645?w=900&q=90&fit=crop"
            alt="Sukoon Black Seed Face Oil"
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
