import Image from "next/image";

const steps = [
  {
    time: "Morning",
    instruction: "Two drops. Warm between palms. Press gently into skin. Absorb.",
  },
  {
    time: "Evening",
    instruction: "Apply after cleansing while skin is still slightly damp. Let it work overnight.",
  },
  {
    time: "Weekly",
    instruction: "A hairline treatment. Apply along the part-line and massage gently into the roots to ease friction strain.",
  },
];

export function RitualSection() {
  return (
    <section
      className="flex flex-col md:grid md:grid-cols-2"
      style={{ backgroundColor: "#FBF8F3", borderTop: "1px solid #E8D4AE" }}
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
          A quieter way to care for skin and hairline.
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
