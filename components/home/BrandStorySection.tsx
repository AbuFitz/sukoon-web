"use client";

import Image from "next/image";
import { homepageImages } from "@/lib/homepage";

export function BrandStorySection() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "clamp(5rem, 9vw, 8rem) 0" }}>
      <div style={{
        maxWidth: 1320, margin: "0 auto",
        padding: "0 clamp(1.25rem, 4vw, 3rem)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(3rem, 6vw, 6rem)",
        alignItems: "center",
      }}
      className="brand-story-grid"
      >
        {/* Image */}
        <div>
          <div style={{
            position: "relative",
            aspectRatio: "3 / 4",
            overflow: "hidden",
            backgroundColor: "#F0F0EE",
          }}>
            <Image
              src={homepageImages.story}
              alt="Sukoon Daily Solace Fluid application"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Copy */}
        <div>
          <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>The Science</p>
          <h2 style={{
            fontFamily: "var(--font-body)", fontWeight: 300,
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            letterSpacing: "-0.02em", color: "#111111",
            margin: "0 0 1.5rem",
          }}>
            Why waterless<br />changes everything.
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.75,
            color: "#676764", margin: "0 0 1.25rem",
          }}>
            Most skincare is 70–80% water. That water dilutes every active ingredient
            and requires preservatives to prevent bacteria. We removed it entirely.
          </p>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.75,
            color: "#676764", margin: "0 0 2rem",
          }}>
            What&apos;s left is a concentrated formula of five actives — each selected
            because it genuinely works, not because it&apos;s cheap to include.
          </p>
          <a
            href="/about"
            style={{
              display: "inline-flex", alignItems: "center",
              fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 500,
              color: "#111111", textDecoration: "none",
              borderBottom: "1.5px solid #111111", paddingBottom: 2,
              transition: "color 0.2s ease, border-color 0.2s ease",
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = "#676764"; el.style.borderColor = "#676764"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = "#111111"; el.style.borderColor = "#111111"; }}
          >
            Our Story →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .brand-story-grid {
            grid-template-columns: 1fr !important;
          }
          .brand-story-grid > div:first-child {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
