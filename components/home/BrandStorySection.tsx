import Image from "next/image";
import { homepageImages } from "@/lib/homepage";

export function BrandStorySection() {
  return (
    <section className="stack-panel stack-panel--clip" style={{ backgroundColor: "#F1EBDD" }}>
      <div
        className="campaign-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "52fr 48fr",
          minHeight: "min(70vh, 700px)",
        }}
      >
        {/* Image */}
        <div style={{ position: "relative", backgroundColor: "#F4F4F2", minHeight: 360 }}>
          <Image
            src={homepageImages.story}
            alt="Sukoon Daily Solace Fluid application"
            fill
            sizes="(max-width: 900px) 100vw, 52vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Copy */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(2.5rem, 5vw, 5rem) clamp(1.5rem, 5vw, 4.5rem)",
        }}>
          <h2 style={{
            fontFamily: "var(--font-body)", fontWeight: 500,
            fontSize: "clamp(1.875rem, 3.2vw, 2.75rem)",
            letterSpacing: "-0.03em", color: "#111111",
            margin: "0 0 1.25rem", lineHeight: 1.05,
          }}>
            Why waterless changes everything.
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.65,
            color: "#636360", margin: "0 0 1rem", maxWidth: 440,
          }}>
            Most skincare is 70–80% water. That water dilutes every active ingredient
            and requires preservatives to prevent bacteria. We removed it entirely.
          </p>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.65,
            color: "#636360", margin: "0 0 1.75rem", maxWidth: 440,
          }}>
            What&apos;s left is a concentrated formula of five actives — each selected
            because it genuinely works, not because it&apos;s cheap to include.
          </p>
          <a
            href="/about"
            style={{
              fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 600,
              color: "#111111", textDecoration: "none",
            }}
          >
            Our Story →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .campaign-grid {
            grid-template-columns: 1fr !important;
            min-height: 0 !important;
          }
          .campaign-grid > div:first-child {
            aspect-ratio: 4 / 5;
            min-height: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
