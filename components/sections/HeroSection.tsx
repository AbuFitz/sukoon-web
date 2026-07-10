"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      aria-label="Hero"
      style={{
        minHeight: "100svh",
        backgroundColor: "#FBF8F3",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        position: "relative",
        overflow: "hidden",
      }}
      className="flex-col md:grid"
    >
      {/* ── Left: Text ─────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(6rem, 10vw, 8rem) clamp(2rem, 6vw, 5rem) clamp(4rem, 6vw, 5rem)",
          position: "relative",
        }}
      >
        {/* Vertical scroll indicator */}
        <div
          className="hidden md:flex"
          style={{
            position: "absolute",
            left: "clamp(1rem, 2vw, 1.5rem)",
            bottom: "clamp(2rem, 4vw, 3rem)",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.5625rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#98A47D",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            Scroll to discover
          </span>
          <div style={{ width: "1px", height: "2.5rem", backgroundColor: "#C4BAB0" }} />
        </div>

        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.6875rem",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#98A47D",
            marginBottom: "1.25rem",
          }}
        >
          Beauty rooted in simplicity
        </p>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 5.5vw, 5.5rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            marginBottom: "1.5rem",
          }}
        >
          <span style={{ color: "#2E3423", display: "block" }}>Rooted<br />in nature.</span>
          <span style={{ color: "#98A47D", display: "block" }}>Guided by<br />purpose.</span>
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9375rem",
            lineHeight: 1.7,
            color: "#98A47D",
            maxWidth: "340px",
            marginBottom: "2.5rem",
          }}
        >
          Sukoon is a return to what truly matters.
          Pure ingredients. Timeless traditions.
          Peace in every drop.
        </p>

        {/* CTA */}
        <div>
          <a
            href="#waitlist"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.625rem",
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#2E3423",
              textDecoration: "none",
              border: "1px solid #2E3423",
              borderRadius: "999px",
              padding: "0.875rem 1.75rem",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "#2E3423";
              el.style.color = "#FBF8F3";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "transparent";
              el.style.color = "#2E3423";
            }}
          >
            Launching soon
            <ArrowRight size={13} strokeWidth={1.75} />
          </a>
        </div>
      </div>

      {/* ── Right: Product image ───────────────────────── */}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(5rem, 8vw, 7rem) clamp(2rem, 4vw, 3rem) clamp(3rem, 5vw, 4rem)",
        }}
      >
        {/* Circular backdrop */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "5%",
            transform: "translateY(-50%)",
            width: "clamp(280px, 45vw, 520px)",
            height: "clamp(280px, 45vw, 520px)",
            borderRadius: "50%",
            backgroundColor: "#98A47D",
            opacity: 0.18,
          }}
          aria-hidden
        />

        {/* Second softer circle (depth) */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "10%",
            transform: "translateY(-54%)",
            width: "clamp(220px, 36vw, 420px)",
            height: "clamp(220px, 36vw, 420px)",
            borderRadius: "50%",
            backgroundColor: "#98A47D",
            opacity: 0.13,
          }}
          aria-hidden
        />

        {/* Product image */}
        <div
          style={{
            position: "relative",
            width: "clamp(220px, 30vw, 380px)",
            height: "clamp(340px, 46vw, 580px)",
            zIndex: 1,
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1707539160277-e39464517645?w=1200&q=85&fit=crop"
            alt="Sukoon Black Seed Face Oil"
            fill
            priority
            sizes="(max-width: 768px) 60vw, 30vw"
            style={{ objectFit: "contain", objectPosition: "center bottom" }}
          />
        </div>

        {/* Botanical placeholder — swap for your own olive branch / botanical image */}
      </div>
    </section>
  );
}
