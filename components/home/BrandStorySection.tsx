import Image from "next/image";
import { homepageImages } from "@/lib/homepage";

export function BrandStorySection() {
  return (
    <section id="why-waterless" className="container" style={{ paddingTop: "clamp(3rem, 5vw, 4.5rem)", paddingBottom: "clamp(3rem, 5vw, 4.5rem)" }}>
      <div className="block story-grid" style={{ display: "grid", gridTemplateColumns: "5fr 7fr", overflow: "hidden" }}>
        {/* Image */}
        <div style={{ position: "relative", backgroundColor: "#F5F5F5", minHeight: 360, borderRight: "1px solid #E5E5E5" }}>
          <Image
            src={homepageImages.story}
            alt="Sukoon Daily Solace Fluid application"
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
            style={{ objectFit: "cover", filter: "grayscale(0.1)" }}
          />
        </div>

        {/* Copy */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(2.5rem, 5vw, 4rem)",
        }}>
          <span className="tag" style={{ alignSelf: "flex-start", marginBottom: "1.25rem" }}>0% Water</span>
          <h2 style={{
            fontFamily: "var(--font-body)", fontWeight: 700,
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            letterSpacing: "-0.025em", color: "#000000",
            margin: "0 0 1.25rem", lineHeight: 1.08,
          }}>
            Why waterless changes everything.
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.7,
            color: "#525252", margin: "0 0 1rem", maxWidth: 460,
          }}>
            Most skincare is 70–80% water. That water dilutes every active ingredient
            and requires preservatives to prevent bacteria. We removed it entirely.
          </p>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.7,
            color: "#525252", margin: "0 0 1.75rem", maxWidth: 460,
          }}>
            What&apos;s left is a concentrated formula of five actives — each selected
            because it genuinely works, not because it&apos;s cheap to include.
          </p>
          <a href="/about" className="btn btn-outline tracked-wide" style={{ alignSelf: "flex-start" }}>
            Our Story
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
            border-right: none !important;
            border-bottom: 1px solid #E5E5E5;
          }
        }
      `}</style>
    </section>
  );
}
