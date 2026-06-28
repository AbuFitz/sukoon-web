import Image from "next/image";

const features = [
  "Cold-pressed Nigella Sativa — 42% of formula",
  "Zero synthetic fragrance or preservatives",
  "Lightweight — absorbs in under 60 seconds",
  "Suitable for all skin types, including sensitive",
  "Ethically sourced. Small batch. UK-made.",
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
          The Product
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
            <li key={f} style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "rgba(251,248,243,0.5)", lineHeight: 1.6, paddingLeft: "1.25rem", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, top: "0.6em", width: "4px", height: "1px", backgroundColor: "rgba(155,165,132,0.5)", display: "inline-block" }} />
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
    </section>
  );
}
