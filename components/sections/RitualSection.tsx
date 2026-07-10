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
    <section
      id="ritual"
      style={{
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid #EDE7DC",
        scrollMarginTop: "5rem",
        padding: "clamp(5rem, 11vw, 10rem) clamp(1.5rem, 6vw, 5rem)",
      }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ marginBottom: "clamp(3.5rem, 8vw, 7rem)" }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 700,
            letterSpacing: "0.22em", textTransform: "uppercase", color: "#98A47D",
            marginBottom: "1.25rem",
          }}>
            How to Use
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
            fontWeight: 400, lineHeight: 1.08, letterSpacing: "-0.025em",
            color: "#2C2A1F", margin: 0, maxWidth: "520px",
          }}>
            Two minutes.<br />A lifetime of less damage.
          </h2>
        </div>

        {/* Steps — 3 col desktop, stacked mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ borderTop: "1px solid #EDE7DC" }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                padding: "clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 3.5vw, 3.5rem)",
                paddingLeft: i === 0 ? 0 : undefined,
                borderLeft: i > 0 ? "1px solid #EDE7DC" : "none",
                borderBottom: "1px solid #EDE7DC",
              }}
            >
              {/* Giant number */}
              <p style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3.5rem, 7vw, 6rem)",
                fontWeight: 400, lineHeight: 1, letterSpacing: "-0.04em",
                color: "#EDE7DC", margin: "0 0 2rem",
              }}>
                {step.num}
              </p>

              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 700,
                letterSpacing: "0.18em", textTransform: "uppercase", color: "#2C2A1F",
                margin: "0 0 1rem",
              }}>
                {step.time}
              </p>

              <p style={{
                fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8,
                color: "#6B6860", margin: "0 0 1rem",
              }}>
                {step.instruction}
              </p>

              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.6875rem",
                color: "#98A47D", letterSpacing: "0.04em", margin: 0,
              }}>
                {step.area}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
