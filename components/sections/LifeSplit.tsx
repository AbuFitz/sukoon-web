"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function LifeSplit() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "clamp(440px, 60vh, 620px)",
      }}
    >
      {/* Lifestyle photo */}
      <div style={{ position: "relative", minHeight: "360px" }}>
        <Image
          src="https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?w=1100&q=90&fit=crop"
          alt="Glowing skin"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </div>

      {/* Text block — sage olive */}
      <div
        style={{
          backgroundColor: "#6B7451",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(3rem, 5vw, 5rem) clamp(2.5rem, 5vw, 5rem)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.5625rem",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(247,244,238,0.45)",
            marginBottom: "1.375rem",
          }}
        >
          Pure · Ethical · Effective
        </p>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.875rem, 3.5vw, 3.25rem)",
            fontWeight: 500,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            color: "#F7F4EE",
            marginBottom: "2rem",
            maxWidth: "400px",
          }}
        >
          Skincare that honours your skin and the world around you.
        </h2>

        <a
          href="#philosophy"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontFamily: "var(--font-body)",
            fontSize: "0.625rem",
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(247,244,238,0.55)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#F7F4EE")}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(247,244,238,0.55)")}
        >
          Our Approach
          <ArrowRight size={12} strokeWidth={1.75} />
        </a>
      </div>
    </div>
  );
}
