"use client";

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
    <section style={{ backgroundColor: "#F5F5F3", padding: "clamp(5rem, 9vw, 8rem) 0" }}>
      <div style={{
        maxWidth: 1320, margin: "0 auto",
        padding: "0 clamp(1.25rem, 4vw, 3rem)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(3rem, 6vw, 6rem)",
        alignItems: "center",
      }}
      className="benefits-grid"
      >
        {/* Copy */}
        <div>
          <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>Why it works</p>
          <h2 style={{
            fontFamily: "var(--font-body)", fontWeight: 700,
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            letterSpacing: "-0.025em", color: "#111111",
            margin: "0 0 3rem",
          }}>
            Designed around<br />real results.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {BENEFITS.map((b, i) => (
              <div key={b.label} style={{
                padding: "1.5rem 0",
                borderTop: i === 0 ? "1px solid #E3E3DF" : undefined,
                borderBottom: "1px solid #E3E3DF",
              }}>
                <p style={{
                  fontFamily: "var(--font-body)", fontWeight: 600,
                  fontSize: "0.9375rem", color: "#111111", margin: "0 0 0.375rem",
                }}>
                  {b.label}
                </p>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.875rem",
                  lineHeight: 1.65, color: "#676764", margin: 0,
                }}>
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div>
          <div style={{
            position: "relative",
            aspectRatio: "4 / 5",
            borderRadius: 24,
            overflow: "hidden",
            backgroundColor: "#EAEAE8",
          }}>
            <Image
              src={homepageImages.benefits}
              alt="Sukoon Daily Solace Fluid in use"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .benefits-grid {
            grid-template-columns: 1fr !important;
          }
          .benefits-grid > div:last-child {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
