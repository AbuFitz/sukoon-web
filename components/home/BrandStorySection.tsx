"use client";

import Image from "next/image";
import { homepageImages } from "@/lib/homepage";
import { FadeIn } from "@/components/ui/FadeIn";

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`;

export function BrandStorySection() {
  return (
    <section
      aria-label="Our story"
      style={{ backgroundColor: "#faf8f4", position: "relative" }}
    >
      {/* Grain */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: GRAIN, opacity: 0.022, pointerEvents: "none",
      }} />

      {/* Desktop layout: side-by-side */}
      <div
        className="hidden md:grid"
        style={{
          gridTemplateColumns: "0.82fr 1.18fr",
          minHeight: 660,
          position: "relative", zIndex: 1,
        }}
      >
        {/* Text panel */}
        <div style={{
          display: "flex", alignItems: "center",
          padding: "90px clamp(3rem, 6vw, 5.75rem)",
          backgroundColor: "#faf8f4",
        }}>
          <FadeIn direction="up" delay={0.08}>
            <div style={{ maxWidth: 460 }}>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 700,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "#8a9482", marginBottom: "1.25rem",
              }}>
                Our Story
              </p>
              <h2 style={{
                fontFamily: "var(--font-display)", fontWeight: 400,
                fontSize: "clamp(2.75rem, 4vw, 4.25rem)",
                lineHeight: 0.98, letterSpacing: "-0.032em",
                color: "#292b25", marginBottom: "2rem",
              }}>
                Rooted in calm.<br />
                <em>Made with intention.</em>
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", lineHeight: 1.75, color: "#64685f", marginBottom: "1rem" }}>
                Sukoon was born from the belief that less can do more — when it&rsquo;s made with care.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.78, color: "#78836e", marginBottom: "2.5rem" }}>
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
        <div style={{ position: "relative", minHeight: "clamp(420px, 55vw, 700px)", backgroundColor: "#ddd8cd", overflow: "hidden" }}>
          <Image
            src={homepageImages.story}
            alt="Sukoon brand story — calm, intentional skincare"
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            unoptimized
          />
        </div>
      </div>

      {/* Mobile layout: full-bleed image top, clean text below */}
      <div className="flex md:hidden" style={{ flexDirection: "column", position: "relative", zIndex: 1 }}>
        {/* Image — full width, cinematic crop */}
        <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", backgroundColor: "#ddd8cd", overflow: "hidden" }}>
          <Image
            src={homepageImages.story}
            alt="Sukoon brand story"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
            unoptimized
          />
        </div>

        {/* Text below */}
        <FadeIn direction="up" delay={0.06}>
          <div style={{ padding: "clamp(2rem, 6vw, 2.75rem) clamp(1.25rem, 6vw, 2rem)", backgroundColor: "#faf8f4" }}>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 700,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#8a9482", marginBottom: "0.875rem",
            }}>
              Our Story
            </p>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 400,
              fontSize: "clamp(2.25rem, 8vw, 3rem)",
              lineHeight: 0.97, letterSpacing: "-0.028em",
              color: "#292b25", marginBottom: "1.25rem",
            }}>
              Rooted in calm.<br /><em>Made with intention.</em>
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.72,
              color: "#64685f", marginBottom: "1.5rem",
            }}>
              Sukoon was born from the belief that less can do more — when it&rsquo;s made with care. High-performance formulas that nourish deeply, protect gently, and support the moments that matter.
            </p>
            <a
              href="/about"
              style={{
                fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 600,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: "#292b25", textDecoration: "none",
                borderBottom: "1px solid rgba(41,43,37,0.4)", paddingBottom: 2,
                display: "inline-block",
              }}
            >
              Read our story →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
