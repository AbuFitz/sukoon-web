import Image from "next/image";
import { homepageImages } from "@/lib/homepage";

export function BrandStorySection() {
  return (
    <section className="stack-panel" style={{ backgroundColor: "#F1EBDD" }}>
      <div
        className="campaign-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "52fr 48fr",
          minHeight: "min(70vh, 700px)",
        }}
      >
        {/* Image — breaks out above the panel's own top edge, overlapping the section below it */}
        <div style={{ position: "relative", minHeight: 360 }}>
          <div className="cut-corner campaign-image" style={{
            position: "absolute", left: "clamp(1rem, 3vw, 2.5rem)", right: "clamp(1rem, 3vw, 2.5rem)",
            top: "-64px", bottom: 0,
            backgroundColor: "#F4F4F2", overflow: "hidden",
            boxShadow: "0 34px 70px rgba(28, 24, 16, 0.22)",
          }}>
            <Image
              src={homepageImages.story}
              alt="Sukoon Daily Solace Fluid application"
              fill
              sizes="(max-width: 900px) 100vw, 52vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Copy */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(2.5rem, 5vw, 5rem) clamp(1.5rem, 5vw, 4.5rem)",
          position: "relative",
        }}>
          <span aria-hidden className="ghost-num" style={{
            position: "absolute", top: "clamp(-1rem, -2vw, 0.5rem)", right: "clamp(1rem, 4vw, 3rem)",
            fontSize: "clamp(5rem, 11vw, 9rem)",
          }}>
            00
          </span>
          <span aria-hidden style={{
            position: "absolute", top: "clamp(3.5rem, 6vw, 5.5rem)", right: "clamp(1.25rem, 4.5vw, 3.25rem)",
            fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600,
            letterSpacing: "0.14em", textTransform: "uppercase", color: "#969690",
          }}>
            Water
          </span>
          <h2 style={{
            fontFamily: "var(--font-body)", fontWeight: 600,
            fontSize: "clamp(2.125rem, 3.6vw, 3.25rem)",
            letterSpacing: "-0.035em", color: "#111111",
            margin: "0 0 1.25rem", lineHeight: 1.0,
            position: "relative",
          }}>
            Why waterless
            <br />
            changes everything.
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.65,
            color: "#636360", margin: "0 0 1rem", maxWidth: 420,
          }}>
            Most skincare is 70–80% water. That water dilutes every active ingredient
            and requires preservatives to prevent bacteria. We removed it entirely.
          </p>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.65,
            color: "#636360", margin: "0 0 1.75rem", maxWidth: 420,
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
          .campaign-image {
            top: -40px !important;
            left: 1rem !important;
            right: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
