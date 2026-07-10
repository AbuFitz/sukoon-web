"use client";

import Image from "next/image";
import { homepageImages } from "@/lib/homepage";

export function HeroSection() {
  return (
    <section
      aria-label="Hero"
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(620px, 76vh, 860px)",
        overflow: "hidden",
        backgroundColor: "#d8d3c8",
      }}
    >
      <Image
        src={homepageImages.hero}
        alt="Sukoon Daily Solace Fluid"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
        unoptimized
      />

      {/* Subtle left-to-right gradient for text legibility */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(90deg, rgba(27,30,25,0.28) 0%, rgba(27,30,25,0.08) 48%, rgba(27,30,25,0) 75%)",
      }} />

      {/* Content */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        maxWidth: "1440px", margin: "0 auto",
        padding: "0 clamp(2rem, 5vw, 3.5rem)",
        display: "flex", alignItems: "center",
        left: 0, right: 0,
      }}>
        <div style={{ maxWidth: 590 }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 500,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.82)", marginBottom: "1.125rem",
          }}>
            Care That Calms
          </p>

          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: "clamp(3.25rem, 5vw, 4.875rem)",
            lineHeight: 0.98, letterSpacing: "-0.035em",
            color: "#FFFFFF", margin: "0 0 1.375rem",
          }}>
            <span style={{ display: "block" }}>Care for your face.</span>
            <em style={{ display: "block", fontStyle: "italic" }}>Care for your hairline.</em>
          </h1>

          <p style={{
            fontFamily: "var(--font-body)", fontSize: "clamp(0.9375rem, 1.3vw, 1.0625rem)",
            lineHeight: 1.65, color: "rgba(255,255,255,0.72)",
            margin: "0 0 2.25rem", maxWidth: 400,
          }}>
            Skincare that protects where your skin meets your story.
          </p>

          <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
            <a
              href="/shop"
              style={{
                display: "inline-flex", alignItems: "center",
                fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 500,
                letterSpacing: "0.06em", textTransform: "uppercase",
                color: "#FFFFFF", backgroundColor: "#3F4A36",
                border: "1px solid #3F4A36",
                height: 52, padding: "0 1.875rem",
                textDecoration: "none",
                transition: "background 180ms ease, border-color 180ms ease",
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = "#2C3528"; el.style.borderColor = "#2C3528"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = "#3F4A36"; el.style.borderColor = "#3F4A36"; }}
            >
              Shop Now
            </a>
            <a
              href="/about"
              style={{
                display: "inline-flex", alignItems: "center",
                fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 500,
                letterSpacing: "0.06em", textTransform: "uppercase",
                color: "#FFFFFF", backgroundColor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.65)",
                height: 52, padding: "0 1.875rem",
                textDecoration: "none",
                backdropFilter: "blur(3px)",
                transition: "background 180ms ease, border-color 180ms ease",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.15)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.08)"; }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
