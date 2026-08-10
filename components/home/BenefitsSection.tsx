import Image from "next/image";
import { homepageImages } from "@/lib/homepage";

const RITUALS = [
  {
    label: "Face Ritual",
    dose: "2–3 drops daily",
    body: "Calms redness, repairs the barrier, locks in hydration — no greasy residue.",
    image: homepageImages.benefits,
    alt: "Applying the Daily Solace Fluid to the face",
  },
  {
    label: "Hairline Ritual",
    dose: "1–2 drops weekly",
    body: "Protects follicles from tension damage caused by tight styles, braids, and caps.",
    image: homepageImages.story,
    alt: "The Daily Solace Fluid ritual, prepared for hairline application",
  },
];

export function BenefitsSection() {
  return (
    <section className="container" style={{ paddingTop: "clamp(1rem, 2vw, 1.25rem)" }}>
      <div style={{ marginBottom: "1.25rem" }}>
        <span className="eyebrow">The Ritual</span>
        <h2 style={{
          fontFamily: "var(--font-body)", fontWeight: 700,
          fontSize: "clamp(1.375rem, 2.2vw, 1.75rem)",
          letterSpacing: "-0.02em", color: "#111111", margin: "0.5rem 0 0",
        }}>
          One bottle. Two rituals.
        </h2>
      </div>

      <div className="ritual-grid">
        {RITUALS.map(r => (
          <div key={r.label} className="card" style={{ overflow: "hidden" }}>
            <div style={{ position: "relative", aspectRatio: "4 / 3" }}>
              <Image
                src={r.image}
                alt={r.alt}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: "clamp(1.5rem, 3vw, 2rem)" }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "0.75rem", marginBottom: "0.625rem" }}>
                <h3 style={{
                  fontFamily: "var(--font-body)", fontWeight: 700,
                  fontSize: "1.25rem", letterSpacing: "-0.015em", color: "#111111", margin: 0,
                }}>
                  {r.label}
                </h3>
                <span className="badge">{r.dose}</span>
              </div>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.9375rem",
                lineHeight: 1.55, color: "#5C5C5C", margin: 0,
              }}>
                {r.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .ritual-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(1rem, 2vw, 1.25rem);
        }
        @media (max-width: 767px) {
          .ritual-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
