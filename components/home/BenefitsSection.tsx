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
    <section style={{ backgroundColor: "#FAFAFA" }}>
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
            fontFamily: "var(--font-body)", fontWeight: 500,
            fontSize: "clamp(1.875rem, 3vw, 2.5rem)",
            letterSpacing: "-0.03em", color: "#111111",
            margin: "0 0 2rem", lineHeight: 1.05,
          }}>
            Designed around real results.
          </h2>

          <div>
            {BENEFITS.map((b, i) => (
              <div key={b.label} style={{
                padding: "1.125rem 0",
                borderTop: i === 0 ? "1px solid #D0D0CB" : undefined,
                borderBottom: "1px solid #D0D0CB",
              }}>
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
            ))}
          </div>
        </div>

        {/* Image */}
        <div style={{ position: "relative", backgroundColor: "#F0F0EE", minHeight: 340 }}>
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
        @media (max-width: 900px) {
          .benefits-grid {
            grid-template-columns: 1fr !important;
            min-height: 0 !important;
          }
          .benefits-grid > div:last-child {
            order: -1;
            aspect-ratio: 4 / 3;
            min-height: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
