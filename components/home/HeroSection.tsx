import Image from "next/image";
import Link from "next/link";
import { homepageImages } from "@/lib/homepage";

export function HeroSection() {
  return (
    <section aria-label="Hero" style={{ backgroundColor: "#FFFFFF" }}>
      <div
        className="hero-grid"
        style={{
          maxWidth: 1600, margin: "0 auto", width: "100%",
          display: "grid",
          gridTemplateColumns: "43% 57%",
          alignItems: "stretch",
        }}
      >
        {/* Left — copy */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3.5rem)",
          minHeight: "min(88vh, 780px)",
        }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 600,
            letterSpacing: "0.06em", color: "#636360", margin: "0 0 1.25rem",
          }}>
            100% Waterless · Made in the UK
          </p>

          <h1 style={{
            fontFamily: "var(--font-body)",
            fontWeight: 500,
            fontSize: "clamp(2.75rem, 5.2vw, 5.25rem)",
            lineHeight: 0.98,
            letterSpacing: "-0.035em",
            color: "#111111",
            margin: "0 0 1.5rem",
          }}>
            One oil. Your face and hairline.
          </h1>

          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.0625rem",
            lineHeight: 1.6,
            color: "#636360",
            maxWidth: 440,
            margin: "0 0 2rem",
          }}>
            Tackles acne, strengthens your skin barrier, and reverses
            friction-induced hairline thinning — all in under 60 seconds.
            Five ingredients. No fillers. No water.
          </p>

          <div style={{ display: "flex", gap: "1.75rem", flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/shop" className="btn btn-dark">Shop Now</Link>
            <Link
              href="/#ingredients"
              style={{
                fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 600,
                color: "#111111", textDecoration: "none",
              }}
            >
              Why the formula →
            </Link>
          </div>
        </div>

        {/* Right — product photography, full bleed */}
        <div style={{ position: "relative", minHeight: 420, backgroundColor: "#F4F4F2", overflow: "hidden" }}>
          <Image
            src={homepageImages.hero}
            alt="Sukoon Daily Solace Fluid"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 57vw"
            style={{ objectFit: "cover", objectPosition: "62% 50%" }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-grid > div:first-child {
            min-height: 0 !important;
            padding-top: 1.75rem !important;
            padding-bottom: 2.5rem !important;
            order: 2;
          }
          .hero-grid > div:last-child {
            aspect-ratio: 1 / 1;
            min-height: 0 !important;
            order: 1;
          }
        }
      `}</style>
    </section>
  );
}
