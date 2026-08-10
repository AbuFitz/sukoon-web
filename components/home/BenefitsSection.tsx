import Image from "next/image";
import { homepageImages } from "@/lib/homepage";

const BENEFITS = [
  {
    label: "Face + Hairline",
    body: "The only oil that serves both your skin and your hairline in one bottle.",
  },
  {
    label: "Absorbs in seconds",
    body: "Olive Squalane mirrors your skin's natural sebum — no residue, no shine.",
  },
  {
    label: "Barrier strength",
    body: "Vitamin B3 rebuilds the lipid barrier on your face and along your follicles.",
  },
  {
    label: "Anti-inflammatory",
    body: "Black Seed Oil quiets redness, breakouts, and friction damage at the source.",
  },
];

export function BenefitsSection() {
  return (
    <section className="container" style={{ paddingTop: "clamp(1rem, 2vw, 1.25rem)" }}>
      <div className="results-grid">
        {/* Image card */}
        <div className="card" style={{ position: "relative", minHeight: 280, overflow: "hidden" }}>
          <Image
            src={homepageImages.benefits}
            alt="Sukoon Daily Solace Fluid in use"
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Stat cards */}
        <div className="results-stats">
          {BENEFITS.map(b => (
            <div key={b.label} className="card" style={{ padding: "clamp(1.25rem, 2.5vw, 1.75rem)" }}>
              <p style={{
                fontFamily: "var(--font-body)", fontWeight: 700,
                fontSize: "0.9375rem", color: "#111111", margin: "0 0 0.375rem",
              }}>
                {b.label}
              </p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.8125rem",
                lineHeight: 1.55, color: "#666666", margin: 0,
              }}>
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .results-grid {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: clamp(1rem, 2vw, 1.25rem);
        }
        .results-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(1rem, 2vw, 1.25rem);
        }
        @media (max-width: 900px) {
          .results-grid { grid-template-columns: 1fr; }
          .results-grid > div:first-child { aspect-ratio: 16 / 9; min-height: 0; }
        }
        @media (max-width: 560px) {
          .results-stats { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
