"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1707539160277-e39464517645?w=1800&q=90&fit=crop";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    setShown(true);
  }, []);
  return { ref, shown };
}

export function HeroSplit() {
  const { ref: textRef, shown } = useReveal();

  return (
    <>
      {/* Desktop: full-bleed image with overlaid left-aligned text */}
      <section aria-label="Hero" className="hidden md:block" style={{
        position: "relative", minHeight: "100svh", paddingTop: "1.75rem",
        backgroundColor: "#F1E9D7", overflow: "hidden",
      }}>
        {/* Background image */}
        <Image
          src={HERO_IMAGE}
          alt="The Daily Solace Fluid dropper bottle"
          fill priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />

        {/* Left-side gradient veil — ensures text legibility on any uploaded photo */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          background: "linear-gradient(to right, rgba(247,241,228,0.78) 0%, rgba(247,241,228,0.42) 45%, transparent 72%)",
        }} />

        {/* Scroll cue */}
        <div className="hidden md:flex" style={{
          position: "absolute", left: "clamp(2rem, 5vw, 5rem)", bottom: "2.5rem", zIndex: 2,
          alignItems: "center", gap: "0.75rem",
          opacity: shown ? 0.6 : 0, transition: "opacity 1s ease 1.1s",
        }}>
          <span style={{
            writingMode: "vertical-rl", transform: "rotate(180deg)",
            fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 500,
            letterSpacing: "0.22em", textTransform: "uppercase", color: "#6B7B5C",
          }}>
            Scroll to discover
          </span>
          <span style={{
            display: "block", width: "1px", height: "2.5rem", backgroundColor: "#6B7B5C",
            animation: "sukoon-scrollline 2.2s ease-in-out infinite",
          }} />
        </div>

        {/* Text overlay */}
        <div ref={textRef} style={{
          position: "relative", zIndex: 1, height: "100%", minHeight: "100svh",
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "0 clamp(4rem, 7vw, 7rem) 4rem",
          maxWidth: "700px",
        }}>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 6vw, 5.25rem)",
            fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.06,
            color: "#2C2A1F",
            marginBottom: "clamp(1.25rem, 3vw, 1.75rem)",
            opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 0.9s ease 0.1s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s",
          }}>
            Care for your face.<br />Care for your hairline.
          </h1>

          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.75,
            color: "#454332", maxWidth: "360px",
            marginBottom: "clamp(1.75rem, 4vw, 2.25rem)",
            opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 0.8s ease 0.22s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.22s",
          }}>
            A 100% waterless oil nectar, crafted to restore your skin, strengthen your barrier and protect your hairline.
          </p>

          <div style={{
            opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.8s ease 0.34s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.34s",
          }}>
            <a href="#ritual" style={{
              display: "inline-flex", alignItems: "center",
              fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 500,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#F7F1E4", textDecoration: "none",
              backgroundColor: "#3F4A36", border: "1px solid #3F4A36",
              padding: "0.9375rem 1.875rem",
              transition: "background 0.3s ease",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#2C2A1F"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#3F4A36"; }}
            >
              Discover the Ritual
            </a>

            <a href="#ritual" style={{
              display: "flex", alignItems: "center", gap: "0.5rem", width: "fit-content",
              fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 400,
              color: "rgba(44,42,31,0.65)", textDecoration: "none",
              marginTop: "1.125rem",
              transition: "opacity 0.2s ease",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.color = "#2C2A1F"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.color = "rgba(44,42,31,0.65)"; }}
            >
              Learn more
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" aria-hidden>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </a>
          </div>

          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.6875rem", letterSpacing: "0.04em",
            color: "#A9BA98", marginTop: "1.75rem",
            opacity: shown ? 1 : 0,
            transition: "opacity 0.8s ease 0.54s",
          }}>
            UK Halal Certified &middot; Formulated &amp; Made in the UK
          </p>
        </div>
      </section>

      {/* Mobile: existing stacked layout, unchanged */}
      <section aria-label="Hero" className="flex flex-col md:hidden" style={{ position: "relative", minHeight: "100svh", paddingTop: "1.75rem", backgroundColor: "#F7F1E4", overflow: "hidden" }}>

        {/* Image */}
        <div style={{
          position: "relative", minHeight: "clamp(380px, 90vw, 100svh)", flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          backgroundColor: "#F1E9D7",
        }}>
          <div style={{
            position: "absolute", width: "min(62vw, 520px)", aspectRatio: "1 / 1", borderRadius: "50%",
            background: "radial-gradient(circle at 35% 30%, #DCE3CC, #C7D2AE 70%)",
            opacity: shown ? 1 : 0,
            transform: shown ? "scale(1)" : "scale(0.85)",
            transition: "opacity 1.1s ease, transform 1.1s cubic-bezier(0.22,1,0.36,1)",
          }} />
          <div style={{
            position: "relative", width: "min(72vw, 560px)", aspectRatio: "3 / 4",
            opacity: shown ? 1 : 0,
            transform: shown ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 1.2s ease 0.2s, transform 1.2s cubic-bezier(0.22,1,0.36,1) 0.2s",
            animation: shown ? "sukoon-float 7s ease-in-out 1.4s infinite" : "none",
          }}>
            <Image
              src={HERO_IMAGE}
              alt="The Daily Solace Fluid dropper bottle resting on stone"
              fill priority
              sizes="100vw"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </div>

        {/* Text */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(2.5rem, 8vw, 6rem) clamp(1.75rem, 6vw, 6rem) clamp(3rem, 8vw, 5rem) clamp(2.75rem, 8vw, 6rem)",
        }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500,
            letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B7B5C",
            marginBottom: "clamp(1.5rem, 4vw, 2.5rem)", lineHeight: 1.8,
            opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 0.8s ease 0.1s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s",
          }}>
            Care for your face. Care for your hairline.
          </p>

          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.625rem, 7vw, 5rem)",
            fontWeight: 400, letterSpacing: "-0.025em", lineHeight: 1.06,
            color: "#2C2A1F",
            marginBottom: "clamp(1.25rem, 3vw, 1.75rem)",
            opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 0.9s ease 0.22s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.22s",
          }}>
            One oil, made<br />for both rituals.
          </h1>

          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.8,
            color: "#6B7B5C", maxWidth: "340px",
            marginBottom: "clamp(2rem, 6vw, 2.75rem)",
            opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 0.8s ease 0.34s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.34s",
          }}>
            A 100% waterless oil nectar, engineered for both your skin and the hairline strain hijabs, under-caps, and tight styles leave behind.
          </p>

          <div style={{
            display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem",
            opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.8s ease 0.46s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.46s",
            marginBottom: "1.5rem",
          }}>
            <a href="/shop" style={{
              display: "inline-flex", alignItems: "center", gap: "0.625rem",
              fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 500,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#F7F1E4", textDecoration: "none",
              backgroundColor: "#2C2A1F", border: "1px solid #2C2A1F", borderRadius: "999px",
              padding: "1rem 1.875rem",
              transition: "background 0.3s ease",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#3F4A36"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#2C2A1F"; }}
            >
              Shop The Daily Solace Fluid
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a href="#ritual" style={{
              display: "inline-flex", alignItems: "center", gap: "0.625rem",
              fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 500,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#2C2A1F", textDecoration: "none",
              border: "1px solid #2C2A1F", borderRadius: "999px",
              padding: "1rem 1.875rem",
              transition: "background 0.3s ease, color 0.3s ease, border-color 0.3s ease",
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "#2C2A1F"; el.style.color = "#F7F1E4"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "transparent"; el.style.color = "#2C2A1F"; }}
            >
              Discover the ritual
            </a>
          </div>

          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.6875rem", letterSpacing: "0.04em",
            color: "#A9BA98",
            opacity: shown ? 1 : 0,
            transition: "opacity 0.8s ease 0.56s",
          }}>
            UK Halal Certified &middot; Formulated &amp; Made in the UK
          </p>
        </div>
      </section>

      {/* Trust badges (mobile-only carryover; desktop uses TrustStrip section below) */}
      <section aria-label="Why Sukoon" className="md:hidden" style={{
        backgroundColor: "#FBF8F3", borderTop: "1px solid #E8D4AE", borderBottom: "1px solid #E8D4AE",
        padding: "clamp(1.75rem, 4vw, 2.5rem) clamp(1.5rem, 6vw, 5rem)",
      }}>
        <div className="grid grid-cols-2" style={{ maxWidth: "1100px", margin: "0 auto", gap: "clamp(1.5rem, 3vw, 2rem)" }}>
          {[
            { label: "Plant-Derived" },
            { label: "Vegan" },
            { label: "Cruelty-Free" },
            { label: "Non-Toxic" },
          ].map((b) => (
            <div key={b.label} style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: "0.625rem", textAlign: "center",
              color: "#6B7B5C",
            }}>
              <span style={{
                fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 500,
                letterSpacing: "0.1em", textTransform: "uppercase", color: "#2C2A1F",
              }}>
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes sukoon-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes sukoon-scrollline {
          0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
          40% { transform: scaleY(1); transform-origin: top; opacity: 1; }
          60% { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
          100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
        }
      `}</style>
    </>
  );
}
