"use client";

import Image from "next/image";
import { homepageImages } from "@/lib/homepage";
import { FadeIn } from "@/components/ui/FadeIn";

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`;

export function HeroSection() {
  return (
    <section
      aria-label="Hero"
      style={{
        position: "relative",
        width: "100%",
        minHeight: 720,
        height: "calc(100vh - 1.75rem)",
        maxHeight: 920,
        overflow: "hidden",
        backgroundColor: "#d5cfc3",
      }}
    >
      <Image
        src={homepageImages.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      {/* Readability gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(90deg, rgba(31,35,28,0.34) 0%, rgba(31,35,28,0.12) 44%, rgba(31,35,28,0) 72%)",
      }} />

      {/* Grain */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        backgroundImage: GRAIN, opacity: 0.02, pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        display: "flex", alignItems: "flex-end",
        padding: "0 clamp(2rem, 5vw, 5.25rem) clamp(3.5rem, 6vw, 5.5rem)",
      }}>
        <FadeIn delay={0.1} duration={0.9} direction="up">
          <div style={{ maxWidth: 640 }}>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 400,
              fontSize: "clamp(3.625rem, 5.8vw, 5.75rem)",
              lineHeight: 0.95, letterSpacing: "-0.035em",
              color: "#FFFFFF", margin: "0 0 1.625rem",
            }}>
              Care for your face.{" "}
              <em style={{ fontStyle: "italic", display: "block" }}>Care for your hairline.</em>
            </h1>

            <p style={{
              fontFamily: "var(--font-body)", fontSize: "clamp(0.9375rem, 1.2vw, 1.0625rem)",
              lineHeight: 1.65, color: "rgba(255,255,255,0.72)",
              margin: "0 0 2.75rem", maxWidth: 440,
            }}>
              Skincare that protects where your skin meets your story.
            </p>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a
                href="/shop"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "#FFFFFF", backgroundColor: "#45543d",
                  border: "1px solid #45543d",
                  minHeight: 50, padding: "0 1.75rem",
                  textDecoration: "none",
                  transition: "background-color 220ms ease, border-color 220ms ease, transform 220ms ease",
                }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.backgroundColor = "#34402f"; el.style.borderColor = "#34402f"; el.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.backgroundColor = "#45543d"; el.style.borderColor = "#45543d"; el.style.transform = "translateY(0)"; }}
              >
                Shop Now
              </a>
              <a
                href="/about"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "#FFFFFF", backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.55)",
                  minHeight: 50, padding: "0 1.75rem",
                  textDecoration: "none",
                  backdropFilter: "blur(4px)",
                  transition: "background-color 220ms ease, border-color 220ms ease",
                }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.backgroundColor = "rgba(255,255,255,0.18)"; el.style.borderColor = "rgba(255,255,255,0.85)"; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.backgroundColor = "rgba(255,255,255,0.08)"; el.style.borderColor = "rgba(255,255,255,0.55)"; }}
              >
                Learn More
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
