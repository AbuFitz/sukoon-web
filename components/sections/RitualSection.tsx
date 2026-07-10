import Image from "next/image";

const steps = [
  {
    num: "01",
    time: "Morning",
    instruction: "Two drops. Warm between your palms. Press into skin and let it disappear.",
    detail: "Face, neck, décolleté.",
  },
  {
    num: "02",
    time: "Evening",
    instruction: "After cleansing, skin still damp. This is the deep work — barrier, tone, stillness.",
    detail: "Face and around the eyes.",
  },
  {
    num: "03",
    time: "Weekly",
    instruction: "Along the part-line, into the roots. Go slowly. This is the part that needs the most care.",
    detail: "Hairline and scalp edges.",
  },
];

export function RitualSection() {
  return (
    <section id="ritual" style={{ backgroundColor: "#FFFFFF", scrollMarginTop: "5rem", borderTop: "1px solid #E8E2D8" }}>

      {/* Desktop */}
      <div className="hidden md:grid" style={{ gridTemplateColumns: "1fr 1fr", minHeight: "640px" }}>

        {/* Left — steps */}
        <div style={{
          padding: "clamp(4rem, 7vw, 8rem) clamp(3rem, 6vw, 6rem)",
          display: "flex", flexDirection: "column", justifyContent: "center",
          borderRight: "1px solid #E8E2D8",
        }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 600,
            letterSpacing: "0.22em", textTransform: "uppercase", color: "#98A47D",
            marginBottom: "2rem",
          }}>
            How to Use
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
            fontWeight: 400, lineHeight: 1.12, letterSpacing: "-0.015em",
            color: "#2C2A1F", marginBottom: "clamp(2.5rem, 5vw, 4rem)",
          }}>
            A two-minute ritual.<br />A lifetime of less damage.
          </h2>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {steps.map((step, i) => (
              <div key={step.num} style={{
                display: "grid", gridTemplateColumns: "2.5rem 1fr",
                gap: "1.5rem",
                paddingTop: i > 0 ? "2.25rem" : "0",
                paddingBottom: "2.25rem",
                borderBottom: i < steps.length - 1 ? "1px solid #E8E2D8" : "none",
              }}>
                <span style={{
                  fontFamily: "var(--font-display)", fontSize: "1rem",
                  fontWeight: 400, color: "#98A47D", lineHeight: 1, paddingTop: "3px",
                }}>
                  {step.num}
                </span>
                <div>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 600,
                    letterSpacing: "0.14em", textTransform: "uppercase", color: "#2C2A1F",
                    marginBottom: "0.625rem",
                  }}>
                    {step.time}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.75,
                    color: "#6B6860", marginBottom: "0.375rem",
                  }}>
                    {step.instruction}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "0.75rem",
                    color: "#98A47D", fontStyle: "italic",
                  }}>
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div style={{ position: "relative", backgroundColor: "#E8D4AE" }}>
          <Image
            src="https://images.unsplash.com/photo-1633169621790-71e519cfb42d?w=1200&q=85&fit=crop"
            alt="Ritual application"
            fill sizes="50vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col md:hidden">
        {/* Image first on mobile */}
        <div style={{ position: "relative", aspectRatio: "4 / 3", backgroundColor: "#E8D4AE" }}>
          <Image
            src="https://images.unsplash.com/photo-1633169621790-71e519cfb42d?w=900&q=85&fit=crop"
            alt="Ritual application"
            fill sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div style={{ padding: "clamp(2.5rem, 8vw, 3.5rem) clamp(1.5rem, 6vw, 2.5rem)" }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 600,
            letterSpacing: "0.2em", textTransform: "uppercase", color: "#98A47D",
            marginBottom: "1rem",
          }}>
            How to Use
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.875rem, 7vw, 2.5rem)",
            fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.015em",
            color: "#2C2A1F", marginBottom: "2.5rem",
          }}>
            A two-minute ritual.
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {steps.map((step, i) => (
              <div key={step.num} style={{
                display: "grid", gridTemplateColumns: "2rem 1fr",
                gap: "1rem",
                paddingTop: i > 0 ? "2rem" : "0",
                paddingBottom: "2rem",
                borderBottom: i < steps.length - 1 ? "1px solid #E8E2D8" : "none",
              }}>
                <span style={{
                  fontFamily: "var(--font-display)", fontSize: "0.875rem",
                  color: "#98A47D", lineHeight: 1, paddingTop: "2px",
                }}>
                  {step.num}
                </span>
                <div>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 600,
                    letterSpacing: "0.14em", textTransform: "uppercase", color: "#2C2A1F",
                    marginBottom: "0.5rem",
                  }}>
                    {step.time}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.75,
                    color: "#6B6860",
                  }}>
                    {step.instruction}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
