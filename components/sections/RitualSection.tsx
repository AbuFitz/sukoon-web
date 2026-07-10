import Image from "next/image";

const steps = [
  {
    num: "01",
    time: "Morning",
    instruction: "Two drops. Warm between your palms. Press into skin. Let it disappear.",
    area: "Face · Neck · Décolleté",
  },
  {
    num: "02",
    time: "Evening",
    instruction: "After cleansing, skin still damp. The barrier. The tone. The stillness.",
    area: "Face · Around eyes",
  },
  {
    num: "03",
    time: "Weekly",
    instruction: "Along the part-line. Into the roots. Go slowly. This part needs the most care.",
    area: "Hairline · Scalp edges",
  },
];

export function RitualSection() {
  return (
    <section id="ritual" style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #EDE7DC", scrollMarginTop: "5rem" }}>
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "clamp(500px, 70vh, 800px)" }}>

        {/* Left — steps */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(3.5rem, 7vw, 8rem) clamp(2.5rem, 6vw, 6rem)",
          borderRight: "1px solid #EDE7DC",
          order: 1,
        }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 700,
            letterSpacing: "0.22em", textTransform: "uppercase", color: "#98A47D",
            marginBottom: "1.75rem",
          }}>
            How to Use
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.875rem, 3vw, 2.625rem)",
            fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.015em",
            color: "#2C2A1F", marginBottom: "clamp(2.5rem, 5vw, 4rem)",
          }}>
            A two-minute ritual.<br />A lifetime of less damage.
          </h2>

          <div>
            {steps.map((step, i) => (
              <div key={step.num} style={{
                display: "grid", gridTemplateColumns: "3rem 1fr",
                paddingTop: i > 0 ? "2.25rem" : "0",
                paddingBottom: "2.25rem",
                borderBottom: i < steps.length - 1 ? "1px solid #EDE7DC" : "none",
              }}>
                <span style={{
                  fontFamily: "var(--font-display)", fontSize: "0.875rem",
                  color: "#D4CCC2", paddingTop: "3px",
                }}>
                  {step.num}
                </span>
                <div>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 700,
                    letterSpacing: "0.16em", textTransform: "uppercase", color: "#2C2A1F",
                    marginBottom: "0.625rem",
                  }}>
                    {step.time}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.75,
                    color: "#6B6860", marginBottom: "0.5rem",
                  }}>
                    {step.instruction}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "0.6875rem",
                    color: "#98A47D", letterSpacing: "0.02em",
                  }}>
                    {step.area}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div style={{ position: "relative", minHeight: "clamp(320px, 50vw, 700px)", backgroundColor: "#EDE7DC", order: 2 }}>
          <Image
            src="https://images.unsplash.com/photo-1633169621790-71e519cfb42d?w=1400&q=90&fit=crop"
            alt="Ritual application"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>
    </section>
  );
}
