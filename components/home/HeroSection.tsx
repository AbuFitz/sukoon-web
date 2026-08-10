import Image from "next/image";
import { homepageImages } from "@/lib/homepage";

export function HeroSection() {
  return (
    <section aria-label="Hero" style={{ backgroundColor: "#0A0A0A", borderBottom: "1px solid #1A1A1A" }}>
      <div
        className="hero-grid"
        style={{
          maxWidth: 1760, margin: "0 auto", width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "stretch",
        }}
      >
        {/* Left — editorial copy */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4.5rem)",
          minHeight: "min(88vh, 760px)",
          borderRight: "1px solid #1A1A1A",
        }}>
          <p className="tracked-widest" style={{
            fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 700,
            color: "#A1A1AA", margin: "0 0 1.75rem",
          }}>
            سكون — STILLNESS
          </p>

          <h1 style={{
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "clamp(2.5rem, 4.6vw, 4.25rem)",
            lineHeight: 1.04,
            letterSpacing: "-0.03em",
            color: "#FFFFFF",
            margin: "0 0 1.75rem",
          }}>
            One waterless oil. Dual restoration for face &amp; hairline.
          </h1>

          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.0625rem",
            lineHeight: 1.7,
            color: "#A1A1AA",
            maxWidth: 460,
            margin: "0 0 2.25rem",
          }}>
            70% of standard skincare is water. We removed it entirely —
            leaving five active ingredients engineered to calm skin,
            strengthen barriers, and reverse hairline friction.
          </p>

          <div>
            <a href="#fluid" className="btn btn-light tracked-wide">
              Experience the Ritual
            </a>
          </div>
        </div>

        {/* Right — atmospheric editorial image */}
        <div style={{ position: "relative", minHeight: 420, backgroundColor: "#000000", overflow: "hidden" }}>
          <Image
            src={homepageImages.hero}
            alt="Sukoon Daily Solace Fluid applied along the hairline"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "62% 50%", filter: "grayscale(0.15) contrast(1.05)" }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.25) 100%)",
          }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-grid > div:first-child {
            min-height: 0 !important;
            padding-top: 3rem !important;
            padding-bottom: 3rem !important;
            border-right: none !important;
            border-bottom: 1px solid #1A1A1A;
            order: 2;
          }
          .hero-grid > div:last-child {
            aspect-ratio: 4 / 5;
            min-height: 0 !important;
            order: 1;
          }
        }
      `}</style>
    </section>
  );
}
