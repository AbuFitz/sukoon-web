import Image from "next/image";
import { homepageImages } from "@/lib/homepage";

const RITUALS = [
  {
    label: "Face Ritual",
    dose: "2-3 Drops Daily",
    body: "Calms redness, repairs the barrier, locks in hydration — no greasy residue.",
    image: homepageImages.benefits,
    alt: "Applying the Daily Solace Fluid to the face",
  },
  {
    label: "Hairline Ritual",
    dose: "1-2 Drops Weekly",
    body: "Protects follicles from tension damage caused by tight styles, braids, and caps.",
    image: homepageImages.story,
    alt: "The Daily Solace Fluid ritual, prepared for hairline application",
  },
];

export function BenefitsSection() {
  return (
    <section className="container" style={{ paddingTop: "clamp(2.5rem, 5vw, 4rem)" }}>
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
          <div key={r.label}>
            <div style={{
              position: "relative", aspectRatio: "4 / 3",
              borderRadius: "var(--radius-2xl)", overflow: "hidden", marginBottom: "1rem",
            }}>
              <Image
                src={r.image}
                alt={r.alt}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <span className="badge badge-light" style={{ position: "absolute", top: "1rem", left: "1rem" }}>
                {r.dose}
              </span>
            </div>
            <h3 style={{
              fontFamily: "var(--font-body)", fontWeight: 700,
              fontSize: "1.1875rem", letterSpacing: "-0.015em", color: "#111111", margin: "0 0 0.375rem",
            }}>
              {r.label}
            </h3>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.9375rem",
              lineHeight: 1.55, color: "#5C5C5C", margin: 0, maxWidth: 400,
            }}>
              {r.body}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .ritual-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: clamp(1.5rem, 3vw, 2.5rem); }
        @media (max-width: 767px) { .ritual-grid { grid-template-columns: 1fr; gap: 2rem; } }
      `}</style>
    </section>
  );
}
