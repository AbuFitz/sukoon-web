import Image from "next/image";
import { homepageImages } from "@/lib/homepage";

const BENEFITS = [
  {
    label: "Face + Hairline",
    body: "The only oil that serves both your skin and your hairline in one bottle. Morning ritual, done.",
  },
  {
    label: "Absorbs in seconds",
    body: "Olive Squalane mirrors your skin's natural sebum — it sinks in without residue or shine.",
  },
  {
    label: "Barrier strength",
    body: "Vitamin B3 rebuilds the lipid barrier on your face and along your follicles simultaneously.",
  },
  {
    label: "Anti-inflammatory",
    body: "Black Seed Oil (Nigella Sativa) quiets redness, breakouts, and friction damage at the source.",
  },
];

export function BenefitsSection() {
  return (
    <section className="stack-panel stack-panel--clip" style={{ backgroundColor: "#FAFAFA" }}>
      <div
        className="benefits-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "42fr 58fr",
          minHeight: "min(72vh, 680px)",
        }}
      >
        {/* Copy */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 5vw, 3.5rem)",
        }}>
          <h2 style={{
            fontFamily: "var(--font-body)", fontWeight: 600,
            fontSize: "clamp(2rem, 3.2vw, 2.75rem)",
            letterSpacing: "-0.035em", color: "#111111",
            margin: "0 0 2.25rem", lineHeight: 1.0,
          }}>
            Designed around
            <br />
            real results.
          </h2>

          <div>
            {BENEFITS.map((b, i) => (
              <div key={b.label} className="benefit-row" style={{
                display: "grid",
                gridTemplateColumns: "2.25rem 1fr",
                gap: "1rem",
                padding: "1.125rem 0",
                borderTop: i === 0 ? "1px solid #D0D0CB" : undefined,
                borderBottom: "1px solid #D0D0CB",
              }}>
                <span style={{
                  fontFamily: "var(--font-body)", fontWeight: 600,
                  fontSize: "0.75rem", color: "#B0AFA9", paddingTop: "0.1875rem",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="benefit-accent" style={{ borderLeft: "1px solid #D0D0CB", paddingLeft: "1.125rem" }}>
                  <p style={{
                    fontFamily: "var(--font-body)", fontWeight: 600,
                    fontSize: "0.9375rem", color: "#111111", margin: "0 0 0.25rem",
                  }}>
                    {b.label}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "0.875rem",
                    lineHeight: 1.55, color: "#636360", margin: 0,
                  }}>
                    {b.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="cut-corner--sm" style={{ position: "relative", backgroundColor: "#F0F0EE", minHeight: 340, margin: "clamp(1rem, 2vw, 1.5rem) clamp(1rem, 2vw, 1.5rem) clamp(1rem, 2vw, 1.5rem) 0", overflow: "hidden" }}>
          <Image
            src={homepageImages.benefits}
            alt="Sukoon Daily Solace Fluid in use"
            fill
            sizes="(max-width: 900px) 100vw, 58vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <style>{`
        .benefit-accent { transition: border-color 0.2s ease; }
        .benefit-row:hover .benefit-accent { border-left: 1px solid #111111; }
        @media (max-width: 900px) {
          .benefits-grid {
            grid-template-columns: 1fr !important;
            min-height: 0 !important;
          }
          .benefits-grid > div:last-child {
            order: -1;
            aspect-ratio: 4 / 3;
            min-height: 0 !important;
            margin: 0 !important;
            border-radius: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
