"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1707539160277-e39464517645?w=2400&q=95&fit=crop";

export function HeroSplit() {
  const [shown, setShown] = useState(false);
  useEffect(() => { setShown(true); }, []);

  return (
    <section aria-label="Hero" style={{
      position: "relative",
      height: "100svh",
      minHeight: "600px",
      overflow: "hidden",
      backgroundColor: "#1a1a18",
    }}>

      {/* Full-bleed image */}
      <Image
        src={HERO_IMAGE}
        alt="The Daily Solace Fluid"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center 30%" }}
      />

      {/* Gradient — bottom-to-top fade so text reads cleanly */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(20,19,17,0.82) 0%, rgba(20,19,17,0.35) 45%, rgba(20,19,17,0.05) 100%)",
        zIndex: 1,
      }} />

      {/* Content — sits above gradient at bottom */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: "clamp(2rem, 5vw, 4rem) clamp(1.5rem, 6vw, 5rem)",
        paddingTop: "6rem",
      }}>
        <div style={{
          maxWidth: "1320px", width: "100%", margin: "0 auto",
          display: "flex", flexDirection: "column",
          gap: "0",
        }}>

          {/* Eyebrow */}
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 600,
            letterSpacing: "0.24em", textTransform: "uppercase", color: "#98A47D",
            marginBottom: "clamp(1rem, 2.5vw, 1.5rem)",
            opacity: shown ? 1 : 0,
            transition: "opacity 1s ease 0.1s",
          }}>
            The Daily Solace Fluid
          </p>

          {/* Headline */}
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.75rem, 6.5vw, 5.5rem)",
            fontWeight: 400, letterSpacing: "-0.025em", lineHeight: 1.04,
            color: "#FFFFFF",
            marginBottom: "clamp(1.25rem, 3vw, 2rem)",
            maxWidth: "720px",
            opacity: shown ? 1 : 0,
            transform: shown ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1s ease 0.2s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.2s",
          }}>
            Care for your face.<br />Care for your hairline.
          </h1>

          {/* Sub + CTA row */}
          <div style={{
            display: "flex", flexWrap: "wrap", alignItems: "center",
            gap: "clamp(1.25rem, 3vw, 2.5rem)",
            opacity: shown ? 1 : 0,
            transform: shown ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 1s ease 0.35s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.35s",
          }}>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "clamp(0.875rem, 1.4vw, 1rem)",
              lineHeight: 1.7, color: "rgba(255,255,255,0.65)",
              maxWidth: "340px", margin: 0,
            }}>
              One waterless oil. Sinks in under sixty seconds. Built for skin and the hairline tight styles quietly strain.
            </p>

            <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
              <a href="/shop" style={{
                display: "inline-flex", alignItems: "center",
                fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 600,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "#2C2A1F", backgroundColor: "#FFFFFF",
                padding: "1rem 2.25rem", textDecoration: "none",
                transition: "background 0.3s, color 0.3s",
                flexShrink: 0,
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "#98A47D"; el.style.color = "#fff"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "#FFFFFF"; el.style.color = "#2C2A1F"; }}
              >
                Shop Now
              </a>
              <a href="#ritual" style={{
                display: "inline-flex", alignItems: "center",
                fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 600,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.4)",
                padding: "1rem 2.25rem", textDecoration: "none",
                transition: "border-color 0.3s, background 0.3s",
                flexShrink: 0,
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.8)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.4)"; }}
              >
                Discover the Ritual
              </a>
            </div>
          </div>

          {/* Stat strip inside hero, bottom strip */}
          <div style={{
            display: "flex", gap: 0,
            marginTop: "clamp(2rem, 5vw, 3.5rem)",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "clamp(1.25rem, 3vw, 1.75rem)",
            opacity: shown ? 1 : 0,
            transition: "opacity 1s ease 0.5s",
          }}>
            {[
              { v: "5", l: "Ingredients" },
              { v: "80%", l: "Olive Squalane" },
              { v: "< 60s", l: "Absorbs" },
              { v: "100%", l: "Waterless" },
            ].map((s, i) => (
              <div key={s.l} style={{
                display: "flex", alignItems: "baseline", gap: "0.625rem",
                paddingRight: "clamp(1.5rem, 4vw, 3rem)",
                marginRight: "clamp(1.5rem, 4vw, 3rem)",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.12)" : "none",
              }}>
                <span style={{
                  fontFamily: "var(--font-display)", fontSize: "clamp(1.125rem, 2.5vw, 1.625rem)",
                  fontWeight: 400, color: "#FFFFFF", lineHeight: 1,
                }}>
                  {s.v}
                </span>
                <span style={{
                  fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 600,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                }}>
                  {s.l}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
