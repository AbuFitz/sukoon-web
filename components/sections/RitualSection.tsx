import Image from "next/image";

const steps = [
  {
    time: "Morning",
    instruction: "Two drops. Warm between your palms. Press into skin and let it disappear.",
  },
  {
    time: "Evening",
    instruction: "After cleansing, skin still damp. This is the deep work — the barrier, the tone, the stillness.",
  },
  {
    time: "Weekly",
    instruction: "Your hairline treatment. Along the part-line, into the roots. Go slowly. This is the part that needs the most care.",
  },
];

export function RitualSection() {
  return (
    <section
      id="ritual"
      className="flex flex-col md:grid md:grid-cols-2"
      style={{ backgroundColor: "#FBF8F3", borderTop: "1px solid #E8D4AE", scrollMarginTop: "5rem" }}
    >
      {/* Text */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(3rem, 7vw, 7rem) clamp(2rem, 6vw, 6rem)",
          order: 1,
        }}
      >
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#6B7B5C", marginBottom: "2rem" }}>
          The Ritual
        </p>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.875rem, 4vw, 3.25rem)",
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            color: "#2C2A1F",
            marginBottom: "clamp(2rem, 5vw, 3rem)",
            maxWidth: "340px",
          }}
        >
          A two-minute ritual.<br />A lifetime of less damage.
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {steps.map((step) => (
            <div key={step.time}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B7B5C", marginBottom: "0.5rem" }}>
                {step.time}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85, color: "#6B7B5C", maxWidth: "320px" }}>
                {step.instruction}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      <div style={{ position: "relative", minHeight: "clamp(280px, 50vw, 640px)", order: 2 }}>
        <Image
          src="https://images.unsplash.com/photo-1633169621790-71e519cfb42d?w=1200&q=85&fit=crop"
          alt="Botanical ingredients"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
    </section>
  );
}
