"use client";

import Image from "next/image";

export function HeroSplit() {
  return (
    <section
      aria-label="Hero"
      style={{
        minHeight: "100svh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        backgroundColor: "#FBF8F3",
      }}
    >
      {/* Left — text */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(6rem, 9vw, 8rem) clamp(3rem, 6vw, 6rem) clamp(4rem, 6vw, 5rem)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.5625rem",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#9BA584",
            marginBottom: "0.5rem",
          }}
        >
          Black Seed Face Oil
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.5625rem",
            fontWeight: 400,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#C4BAB0",
            marginBottom: "2rem",
          }}
        >
          Launching 2025
        </p>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.75rem, 5vw, 5rem)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "#2A2F1E",
            marginBottom: "1.75rem",
            maxWidth: "440px",
          }}
        >
          Skincare worth slowing down for.
        </h1>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9375rem",
            lineHeight: 1.8,
            color: "#6B7451",
            maxWidth: "340px",
            marginBottom: "2.5rem",
          }}
        >
          One carefully considered oil. Cold-pressed botanicals and crafted for a quieter kind of ritual.
        </p>

        <a
          href="#waitlist"
          style={{
            display: "inline-flex",
            alignItems: "center",
            alignSelf: "flex-start",
            fontFamily: "var(--font-body)",
            fontSize: "0.625rem",
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#2A2F1E",
            textDecoration: "none",
            border: "1px solid rgba(42,47,30,0.4)",
            padding: "0.875rem 1.75rem",
            transition: "border-color 0.25s, background 0.25s, color 0.25s",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.backgroundColor = "#2A2F1E";
            el.style.color = "#FBF8F3";
            el.style.borderColor = "#2A2F1E";
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.backgroundColor = "transparent";
            el.style.color = "#2A2F1E";
            el.style.borderColor = "rgba(42,47,30,0.4)";
          }}
        >
          Join the Waitlist
        </a>
      </div>

      {/* Right — full-bleed image */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Image
          src="https://images.unsplash.com/photo-1707539160277-e39464517645?w=1400&q=90&fit=crop"
          alt="Sukoon Black Seed Face Oil"
          fill
          priority
          sizes="50vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
    </section>
  );
}
