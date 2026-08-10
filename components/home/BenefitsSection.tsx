const PROTOCOL = [
  {
    label: "Face",
    frequency: "Daily · AM / PM",
    dose: "2–3 drops",
    body: "Targets inflammation, redness, and barrier damage. Warm between palms and press into skin — absorbs in under sixty seconds.",
  },
  {
    label: "Hairline",
    frequency: "Weekly · As Needed",
    dose: "1–2 drops",
    body: "Applied along the part-line. Protects follicles against traction alopecia from tight styles, braids, weaves, and under-caps.",
  },
];

export function BenefitsSection() {
  return (
    <section className="container" style={{ paddingTop: "clamp(3rem, 5vw, 4.5rem)", paddingBottom: "clamp(3rem, 5vw, 4.5rem)" }}>
      <div style={{ marginBottom: "1.75rem", maxWidth: 560 }}>
        <span className="eyebrow">The Ritual</span>
        <h2 style={{
          fontFamily: "var(--font-body)", fontWeight: 700,
          fontSize: "clamp(1.75rem, 2.8vw, 2.375rem)",
          letterSpacing: "-0.025em", color: "#000000", margin: "0.5rem 0 0",
        }}>
          Sixty seconds. Two applications.
        </h2>
      </div>

      <div className="block protocol-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden" }}>
        {PROTOCOL.map((p, i) => (
          <div key={p.label} style={{
            padding: "clamp(2rem, 4vw, 3rem)",
            borderLeft: i > 0 ? "1px solid #E5E5E5" : "none",
          }}>
            <span className="tracked-wide" style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 700, color: "#A3A3A3" }}>
              Column {String(i + 1).padStart(2, "0")}
            </span>
            <h3 style={{
              fontFamily: "var(--font-body)", fontWeight: 700,
              fontSize: "1.75rem", letterSpacing: "-0.02em", color: "#000000",
              margin: "0.75rem 0 1.25rem",
            }}>
              {p.label}
            </h3>
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem" }}>
              <span className="tag">{p.frequency}</span>
              <span className="tag tag-fill">{p.dose}</span>
            </div>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.9375rem",
              lineHeight: 1.65, color: "#525252", margin: 0,
            }}>
              {p.body}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 767px) {
          .protocol-grid { grid-template-columns: 1fr !important; }
          .protocol-grid > div:nth-child(2) { border-left: none !important; border-top: 1px solid #E5E5E5; }
        }
      `}</style>
    </section>
  );
}
