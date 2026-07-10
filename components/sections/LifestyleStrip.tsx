"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function LifestyleStrip() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "480px",
      }}
      className="flex-col md:grid"
    >
      {/* Lifestyle photo */}
      <div style={{ position: "relative", minHeight: "360px" }}>
        <Image
          src="https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?w=1000&q=85&fit=crop"
          alt="Woman with glowing skin applying Sukoon face oil"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </div>

      {/* Text block */}
      <div
        style={{
          backgroundColor: "#98A47D",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(3rem, 6vw, 5rem) clamp(2.5rem, 5vw, 4.5rem)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.625rem",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(251,248,243,0.5)",
            marginBottom: "1.25rem",
          }}
        >
          Pure · Ethical · Effective
        </p>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.875rem, 3.5vw, 3rem)",
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            color: "#FBF8F3",
            marginBottom: "2rem",
            maxWidth: "380px",
          }}
        >
          Skincare that honours your skin and the world around you.
        </h2>

        <a
          href="#approach"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(251,248,243,0.7)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FBF8F3")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(251,248,243,0.7)")}
        >
          Our Approach
          <ArrowRight size={13} strokeWidth={1.75} />
        </a>
      </div>
    </div>
  );
}
