import Image from "next/image";
import { homepageImages } from "@/lib/homepage";

export function BrandStorySection() {
  return (
    <section className="container" style={{ paddingTop: "clamp(1rem, 2vw, 1.25rem)" }}>
      <div className="card story-grid" style={{
        display: "grid",
        gridTemplateColumns: "5fr 7fr",
        overflow: "hidden",
      }}>
        {/* Image */}
        <div style={{ position: "relative", backgroundColor: "#EFEFEF", minHeight: 320 }}>
          <Image
            src={homepageImages.story}
            alt="Sukoon Daily Solace Fluid application"
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Copy */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(2rem, 4vw, 3.5rem)",
        }}>
          <span className="badge" style={{ alignSelf: "flex-start", marginBottom: "1rem" }}>5 Ingredients</span>
          <h2 style={{
            fontFamily: "var(--font-body)", fontWeight: 700,
            fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)",
            letterSpacing: "-0.025em", color: "#111111",
            margin: "0 0 1rem", lineHeight: 1.1,
          }}>
            A concentrated formula, not a diluted one.
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.65,
            color: "#5C5C5C", margin: "0 0 0.875rem", maxWidth: 440,
          }}>
            Most skincare is built around filler ingredients that dilute every
            active and pad out the label. We took the opposite approach.
          </p>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.65,
            color: "#5C5C5C", margin: "0 0 1.5rem", maxWidth: 440,
          }}>
            What&apos;s left is a concentrated formula of five actives — each selected
            because it genuinely works, not because it&apos;s cheap to include.
          </p>
          <a href="/about" className="btn btn-outline" style={{ alignSelf: "flex-start" }}>
            Our Story →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .story-grid {
            grid-template-columns: 1fr !important;
          }
          .story-grid > div:first-child {
            aspect-ratio: 4 / 3;
            min-height: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
