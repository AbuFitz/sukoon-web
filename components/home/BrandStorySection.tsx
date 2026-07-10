"use client";

import Image from "next/image";
import { homepageImages } from "@/lib/homepage";

export function BrandStorySection() {
  return (
    <section aria-label="Our story" style={{ backgroundColor: "#f3efe7" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "0.82fr 1.18fr",
        minHeight: 620,
      }}
        className="grid-cols-1 md:grid-cols-[0.82fr_1.18fr]"
      >
        {/* Text panel */}
        <div style={{
          display: "flex", alignItems: "center",
          padding: "clamp(4rem, 8vw, 5.625rem) clamp(2.5rem, 6vw, 6.25rem)",
          order: 1,
        }}>
          <div style={{ maxWidth: 480 }}>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 500,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#78836e", marginBottom: "1.5rem",
            }}>
              Our Story
            </p>

            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 400,
              fontSize: "clamp(2.25rem, 3.5vw, 3.25rem)",
              lineHeight: 1.06, letterSpacing: "-0.025em",
              color: "#292b25", marginBottom: "1.875rem",
            }}>
              Rooted in calm.<br />Made with intention.
            </h2>

            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.75,
              color: "#64685f", marginBottom: "1.125rem",
            }}>
              Sukoon was born from the belief that less can do more — when it&rsquo;s made with care.
            </p>

            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.75,
              color: "#64685f", marginBottom: "2.5rem",
            }}>
              We create high-performance formulas that nourish deeply, protect gently, and support the moments that matter.
            </p>

            <a
              href="/about"
              style={{
                fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 500,
                color: "#292b25", textDecoration: "none", letterSpacing: "0.02em",
                borderBottom: "1px solid #292b25", paddingBottom: 2,
                transition: "color 180ms ease, border-color 180ms ease",
                display: "inline-block",
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "#3F4A36"; el.style.borderColor = "#3F4A36"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "#292b25"; el.style.borderColor = "#292b25"; }}
            >
              Read our story →
            </a>
          </div>
        </div>

        {/* Image */}
        <div style={{ position: "relative", minHeight: "clamp(400px, 55vw, 700px)", backgroundColor: "#ddd8cd", order: 2 }}>
          <Image
            src={homepageImages.story}
            alt="Sukoon brand story — calm, intentional skincare"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
