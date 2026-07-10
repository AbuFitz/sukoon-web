"use client";

import Image from "next/image";
import { homepageImages } from "@/lib/homepage";
import { FadeIn } from "@/components/ui/FadeIn";

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`;

export function BrandStorySection() {
  return (
    <section
      aria-label="Our story"
      style={{ backgroundColor: "#f3efe7", position: "relative" }}
    >
      {/* Grain */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: GRAIN, opacity: 0.022, pointerEvents: "none",
      }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.82fr 1.18fr",
          minHeight: 660,
          position: "relative", zIndex: 1,
        }}
        className="grid-cols-1 md:grid-cols-[0.82fr_1.18fr]"
      >
        {/* Text panel */}
        <div style={{
          display: "flex", alignItems: "center",
          padding: "90px clamp(3rem, 6vw, 5.75rem)",
          order: 1,
          backgroundColor: "#f3efe7",
        }}>
          <FadeIn direction="up" delay={0.08}>
            <div style={{ maxWidth: 460 }}>
              <h2 style={{
                fontFamily: "var(--font-display)", fontWeight: 400,
                fontSize: "clamp(2.375rem, 3.5vw, 3.375rem)",
                lineHeight: 1.04, letterSpacing: "-0.028em",
                color: "#292b25", marginBottom: "1.75rem",
              }}>
                Rooted in calm.<br />
                <em style={{ fontStyle: "italic" }}>Made with intention.</em>
              </h2>

              <p style={{
                fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.75,
                color: "#64685f", marginBottom: "1rem",
              }}>
                Sukoon was born from the belief that less can do more — when it&rsquo;s made with care.
              </p>

              <p style={{
                fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.75,
                color: "#64685f", marginBottom: "2.5rem",
              }}>
                We create high-performance formulas that nourish deeply, protect gently, and support the moments that matter.
              </p>

              <a
                href="/about"
                style={{
                  fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 500,
                  color: "#292b25", textDecoration: "none", letterSpacing: "0.02em",
                  borderBottom: "1px solid rgba(41,43,37,0.35)", paddingBottom: 2,
                  transition: "color 200ms ease, border-color 200ms ease",
                  display: "inline-block",
                }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.color = "#45543d"; el.style.borderColor = "#45543d"; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.color = "#292b25"; el.style.borderColor = "rgba(41,43,37,0.35)"; }}
              >
                Read our story →
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Image */}
        <div
          style={{ position: "relative", minHeight: "clamp(420px, 55vw, 700px)", backgroundColor: "#ddd8cd", order: 2, overflow: "hidden" }}
        >
          <Image
            src={homepageImages.story}
            alt="Sukoon brand story — calm, intentional skincare"
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            style={{
              objectFit: "cover", objectPosition: "center",
              transition: "transform 800ms cubic-bezier(0.2,0.7,0.2,1)",
            }}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
