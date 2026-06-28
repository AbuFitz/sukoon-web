"use client";

import Image from "next/image";

export function EditorialHero() {
  return (
    <section
      aria-label="Hero"
      style={{
        position: "relative",
        height: "100svh",
        minHeight: "600px",
        backgroundColor: "#FBF8F3",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        overflow: "hidden",
      }}
    >
      {/* Left — text */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "clamp(5rem, 10vw, 8rem) clamp(2rem, 6vw, 5rem) clamp(4rem, 7vh, 6rem)",
        }}
      >
        {/* Scroll indicator */}
        <div
          className="hidden md:flex"
          style={{
            position: "absolute",
            left: "clamp(1.5rem, 2.5vw, 2.5rem)",
            bottom: "clamp(2.5rem, 5vh, 4rem)",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.875rem",
          }}
          aria-hidden
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.5rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#98A27E",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            Scroll to discover
          </span>
          <div style={{ width: "1px", height: "3rem", backgroundColor: "#C4BAB0" }} />
        </div>

        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.625rem",
            fontWeight: 400,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#98A27E",
            marginBottom: "1.5rem",
          }}
        >
          Black Seed Face Oil · Launching in the UK
        </p>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 5vw, 5.25rem)",
            fontWeight: 300,
            letterSpacing: "-0.015em",
            lineHeight: 1.1,
            color: "#2E3423",
            marginBottom: "2rem",
            maxWidth: "520px",
          }}
        >
          Skincare worth<br />
          slowing down for.
        </h1>

        {/* Body */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9375rem",
            lineHeight: 1.75,
            color: "#6B7451",
            maxWidth: "340px",
            marginBottom: "2.75rem",
          }}
        >
          One carefully considered oil. Cold-pressed black seed,
          crafted for a quieter kind of ritual.
        </p>

        {/* Pill CTA */}
        <div>
          <a
            href="#waitlist"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              fontFamily: "var(--font-body)",
              fontSize: "0.6875rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#2E3423",
              textDecoration: "none",
              border: "1px solid rgba(46,52,35,0.4)",
              borderRadius: "999px",
              padding: "0.9rem 2rem",
              transition: "border-color 0.3s, background 0.3s, color 0.3s",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#2E3423";
              el.style.backgroundColor = "#2E3423";
              el.style.color = "#FBF8F3";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(46,52,35,0.4)";
              el.style.backgroundColor = "transparent";
              el.style.color = "#2E3423";
            }}
          >
            Join the Waitlist
          </a>
        </div>
      </div>

      {/* Right — image */}
      <div style={{ position: "relative" }}>
        <Image
          src="https://images.unsplash.com/photo-1707539160277-e39464517645?w=1400&q=90&fit=crop"
          alt="Sukoon Black Seed Face Oil"
          fill
          priority
          sizes="50vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Subtle left-fade to blend into cream bg */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, #FBF8F3 0%, transparent 18%)",
          }}
        />
      </div>
    </section>
  );
}
