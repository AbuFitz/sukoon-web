"use client";

import Image from "next/image";
import { useState } from "react";

export function LifestyleSplit() {
  const [hoverStory, setHoverStory] = useState(false);
  const [hoverFormula, setHoverFormula] = useState(false);

  return (
    <section
      id="story"
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(540px, 88vh, 1000px)",
        overflow: "hidden",
        backgroundColor: "#1a1a18",
      }}
    >
      {/* Full-bleed image — the whole section IS the image */}
      <Image
        src="https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?w=2000&q=90&fit=crop"
        alt="Woman applying The Daily Solace Fluid"
        fill
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center 20%" }}
      />

      {/* Gradient — bottom-heavy so text reads */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(15,14,12,0.88) 0%, rgba(15,14,12,0.3) 40%, rgba(15,14,12,0) 70%)",
      }} />

      {/* Content — anchored to bottom edge */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: "clamp(2rem, 5vw, 4rem) clamp(1.5rem, 6vw, 5rem)",
      }}>
        <div style={{
          maxWidth: "1320px", width: "100%", margin: "0 auto",
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          flexWrap: "wrap", gap: "2rem",
        }}>
          {/* Left — headline */}
          <div style={{ maxWidth: "560px" }}>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 700,
              letterSpacing: "0.22em", textTransform: "uppercase", color: "#98A47D",
              marginBottom: "1.25rem",
            }}>
              The Science
            </p>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
              fontWeight: 400, lineHeight: 1.08, letterSpacing: "-0.02em",
              color: "#FFFFFF", margin: "0 0 1.75rem",
            }}>
              Built for the hairline every other product forgot.
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "clamp(0.875rem, 1.4vw, 1rem)",
              lineHeight: 1.75, color: "rgba(255,255,255,0.55)",
              margin: 0, maxWidth: "440px",
            }}>
              100% waterless. Nothing greasy. Sixty seconds — and it&rsquo;s working.
            </p>
          </div>

          {/* Right — links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", alignItems: "flex-end" }}>
            <a
              href="/about"
              style={{
                fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 700,
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: hoverStory ? "#FFFFFF" : "rgba(255,255,255,0.55)",
                textDecoration: "none", transition: "color 0.2s",
                borderBottom: `1px solid ${hoverStory ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.2)"}`,
                paddingBottom: "2px",
              }}
              onMouseEnter={() => setHoverStory(true)}
              onMouseLeave={() => setHoverStory(false)}
            >
              Our Story
            </a>
            <a
              href="#ingredients"
              style={{
                fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 700,
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: hoverFormula ? "#98A47D" : "rgba(152,164,125,0.7)",
                textDecoration: "none", transition: "color 0.2s",
                borderBottom: `1px solid ${hoverFormula ? "#98A47D" : "rgba(152,164,125,0.3)"}`,
                paddingBottom: "2px",
              }}
              onMouseEnter={() => setHoverFormula(true)}
              onMouseLeave={() => setHoverFormula(false)}
            >
              The Formula
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
