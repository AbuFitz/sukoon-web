"use client";

import Image from "next/image";

export function HeroSplit() {
  return (
    <section aria-label="Hero" className="flex flex-col md:grid md:grid-cols-2" style={{ minHeight: "100svh", backgroundColor: "#F7F1E4" }}>

      {/* Image */}
      <div className="order-1 md:order-2" style={{ position: "relative", minHeight: "clamp(380px, 90vw, 100svh)", flexShrink: 0, backgroundColor: "#E8D4AE" }}>
        <Image
          src="https://images.unsplash.com/photo-1707539160277-e39464517645?w=1400&q=90&fit=crop"
          alt="The Daily Solace Fluid dropper bottle"
          fill priority
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      {/* Text */}
      <div className="order-2 md:order-1" style={{
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "clamp(2.5rem, 8vw, 6rem) clamp(1.75rem, 6vw, 6rem) clamp(3rem, 8vw, 5rem)",
      }}>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500,
          letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B7B5C",
          marginBottom: "clamp(1.5rem, 4vw, 2.5rem)", lineHeight: 1.8,
        }}>
          Care for your face. Care for your hairline.
        </p>

        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.625rem, 7vw, 5rem)",
          fontWeight: 400, letterSpacing: "-0.025em", lineHeight: 1.06,
          color: "#2C2A1F",
          marginBottom: "clamp(1.25rem, 3vw, 1.75rem)",
        }}>
          The Daily<br />Solace<br />Fluid.
        </h1>

        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.8,
          color: "#6B7B5C", maxWidth: "320px",
          marginBottom: "clamp(2rem, 6vw, 2.75rem)",
        }}>
          One waterless oil. Engineered for both your skin and the hairline strain hijabs, under-caps, and tight styles leave behind.
        </p>

        <a href="#waitlist" style={{
          display: "inline-flex", alignItems: "center", gap: "0.625rem",
          alignSelf: "flex-start",
          fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500,
          letterSpacing: "0.2em", textTransform: "uppercase",
          color: "#2C2A1F", textDecoration: "none",
          border: "1px solid #2C2A1F",
          padding: "1rem 1.75rem",
          marginBottom: "1.5rem",
          transition: "background 0.25s, color 0.25s",
        }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "#2C2A1F"; el.style.color = "#F7F1E4"; }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "transparent"; el.style.color = "#2C2A1F"; }}
        >
          Shop £35
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>

        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.6875rem", letterSpacing: "0.04em",
          color: "#A9BA98",
        }}>
          UK Halal Certified · Formulated &amp; Made in the UK
        </p>
      </div>
    </section>
  );
}
