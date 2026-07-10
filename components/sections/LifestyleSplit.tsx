"use client";

import Image from "next/image";

export function LifestyleSplit() {
  return (
    <section id="story" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Desktop: image left, text right */}
      <div className="hidden md:grid" style={{ gridTemplateColumns: "1fr 1fr", minHeight: "600px" }}>
        <div style={{ position: "relative", backgroundColor: "#E8D4AE" }}>
          <Image
            src="https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?w=1200&q=85&fit=crop"
            alt="Woman applying The Daily Solace Fluid"
            fill sizes="50vw"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(4rem, 7vw, 8rem) clamp(3rem, 6vw, 7rem)",
          borderLeft: "1px solid #E8E2D8",
        }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 600,
            letterSpacing: "0.22em", textTransform: "uppercase", color: "#98A47D",
            marginBottom: "2rem",
          }}>
            The Problem We Solved
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400, lineHeight: 1.12, letterSpacing: "-0.015em",
            color: "#2C2A1F", marginBottom: "2rem",
          }}>
            Built for the hairline every other product forgot.
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85,
            color: "#6B6860", marginBottom: "1.5rem",
          }}>
            Every serum on the shelf was made for your face alone. Nobody built one for the hairline strain that tight styles, tension, and daily wear press in quietly, over years.
          </p>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85,
            color: "#6B6860", marginBottom: "2.5rem",
          }}>
            So we did. 100% waterless. Nothing greasy. Sixty seconds — then it&rsquo;s gone. Except it isn&rsquo;t. It&rsquo;s working.
          </p>
          <a href="/about" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 600,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "#2C2A1F", textDecoration: "none",
            borderBottom: "1px solid #2C2A1F", paddingBottom: "2px", width: "fit-content",
            transition: "color 0.2s, border-color 0.2s",
          }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = "#98A47D"; el.style.borderColor = "#98A47D"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = "#2C2A1F"; el.style.borderColor = "#2C2A1F"; }}
          >
            Read Our Story
          </a>
        </div>
      </div>

      {/* Mobile: stack, image on top */}
      <div className="flex flex-col md:hidden">
        <div style={{ position: "relative", aspectRatio: "4 / 3", backgroundColor: "#E8D4AE" }}>
          <Image
            src="https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?w=900&q=85&fit=crop"
            alt="Woman applying The Daily Solace Fluid"
            fill sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
        <div style={{
          padding: "clamp(2.5rem, 8vw, 3.5rem) clamp(1.5rem, 6vw, 2.5rem)",
          borderTop: "1px solid #E8E2D8",
        }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 600,
            letterSpacing: "0.2em", textTransform: "uppercase", color: "#98A47D",
            marginBottom: "1.25rem",
          }}>
            The Problem We Solved
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.875rem, 7vw, 2.5rem)",
            fontWeight: 400, lineHeight: 1.12, letterSpacing: "-0.015em",
            color: "#2C2A1F", marginBottom: "1.25rem",
          }}>
            Built for the hairline every other product forgot.
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.85,
            color: "#6B6860", marginBottom: "2rem",
          }}>
            Nobody built a product for the hairline strain that tight styles press in quietly, over years. So we did. 100% waterless. Sixty seconds.
          </p>
          <a href="/about" style={{
            display: "inline-flex",
            fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 600,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "#2C2A1F", textDecoration: "none",
            borderBottom: "1px solid #2C2A1F", paddingBottom: "2px",
          }}>
            Read Our Story
          </a>
        </div>
      </div>
    </section>
  );
}
