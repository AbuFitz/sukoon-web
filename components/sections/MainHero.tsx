"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function MainHero() {
  return (
    <section
      aria-label="Hero"
      style={{
        minHeight: "100svh",
        backgroundColor: "#F7F4EE",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Left ───────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(5rem, 8vw, 7rem) clamp(2.5rem, 6vw, 6rem) clamp(4rem, 6vw, 5rem) clamp(2.5rem, 6vw, 6rem)",
          position: "relative",
        }}
      >
        {/* Vertical scroll text */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: "clamp(0.75rem, 1.5vw, 1.25rem)",
            bottom: "clamp(2.5rem, 5vh, 4rem)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.5rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#9BA584",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            Scroll to discover
          </span>
          <div style={{ width: "1px", height: "2.5rem", backgroundColor: "#C8C0B4" }} />
          <div
            style={{
              width: "1px",
              height: "6px",
              backgroundColor: "#9BA584",
              animation: "none",
            }}
          />
        </div>

        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.625rem",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#9BA584",
            marginBottom: "1.375rem",
          }}
        >
          Beauty Rooted in Simplicity
        </p>

        {/* Headline — two colours */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.75rem, 5.5vw, 5.5rem)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            marginBottom: "1.75rem",
          }}
        >
          <span style={{ color: "#1E2318", display: "block" }}>
            Rooted<br />in nature.
          </span>
          <span style={{ color: "#6B7451", display: "block" }}>
            Guided by<br />purpose.
          </span>
        </h1>

        {/* Sub copy */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9375rem",
            lineHeight: 1.75,
            color: "#6B7451",
            maxWidth: "320px",
            marginBottom: "2.5rem",
          }}
        >
          Sukoon is a return to what truly matters.<br />
          Pure ingredients. Timeless traditions.<br />
          Peace in every drop.
        </p>

        {/* Pill CTA */}
        <a
          href="#waitlist"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.625rem",
            fontFamily: "var(--font-body)",
            fontSize: "0.6875rem",
            fontWeight: 500,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#1E2318",
            textDecoration: "none",
            border: "1px solid #1E2318",
            borderRadius: "999px",
            padding: "0.875rem 1.875rem",
            alignSelf: "flex-start",
            transition: "background 0.25s, color 0.25s",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.backgroundColor = "#1E2318";
            el.style.color = "#F7F4EE";
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.backgroundColor = "transparent";
            el.style.color = "#1E2318";
          }}
        >
          Launching Soon
          <ArrowRight size={12} strokeWidth={1.75} />
        </a>
      </div>

      {/* ── Right ──────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(4rem, 6vw, 5rem) clamp(2rem, 4vw, 4rem) clamp(3rem, 5vw, 4rem) 0",
        }}
      >
        {/* Circular sage disc */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "50%",
            left: "52%",
            transform: "translate(-50%, -50%)",
            width: "clamp(300px, 46vw, 560px)",
            height: "clamp(300px, 46vw, 560px)",
            borderRadius: "50%",
            backgroundColor: "#8F9872",
            opacity: 0.22,
          }}
        />

        {/* Product image */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "clamp(200px, 26vw, 320px)",
            height: "clamp(320px, 42vw, 520px)",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1707539160277-e39464517645?w=1200&q=90&fit=crop"
            alt="Sukoon Black Seed Face Oil"
            fill
            priority
            sizes="(max-width: 768px) 70vw, 26vw"
            style={{ objectFit: "contain", objectPosition: "bottom center" }}
          />
        </div>

      </div>
    </section>
  );
}
