"use client";

import { useState } from "react";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) { setStatus("error"); return; }
    setStatus("success");
    setEmail("");
  }

  return (
    <section
      id="waitlist"
      aria-label="Join the waitlist"
      style={{ backgroundColor: "#434A33", position: "relative", overflow: "hidden" }}
    >
      {/* Arabic سكون watermark */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "clamp(1rem, 4vw, 3rem)",
          bottom: "-0.5rem",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(5rem, 12vw, 10rem)",
          color: "rgba(251,248,243,0.06)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        سكون
      </div>

      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "clamp(3rem, 6vw, 5rem) clamp(2rem, 6vw, 5rem)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Desktop: single row. Mobile: stacked */}
        <div className="flex flex-col md:flex-row md:items-center" style={{ gap: "clamp(1.5rem, 4vw, 3rem)" }}>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.875rem, 3vw, 2.75rem)",
            fontWeight: 600,
            fontStyle: "italic",
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
            color: "#FBF8F3",
            flexShrink: 0,
          }}
        >
          Be the first to know.
        </h2>

        {/* Divider */}
        <div
          className="hidden md:block"
          style={{ width: "1px", alignSelf: "stretch", minHeight: "3rem", backgroundColor: "rgba(251,248,243,0.15)", flexShrink: 0 }}
          aria-hidden
        />

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9rem",
            lineHeight: 1.7,
            color: "rgba(251,248,243,0.55)",
            maxWidth: "260px",
            flexShrink: 0,
          }}
        >
          Early access, launch-day offers and the stories behind our ingredients.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate aria-label="Waitlist signup" style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
              placeholder="your@email.com"
              aria-label="Email address"
              aria-invalid={status === "error"}
              required
              style={{
                flex: 1,
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                color: "#2E3423",
                backgroundColor: "#FBF8F3",
                border: "1px solid transparent",
                borderRadius: "3px",
                padding: "0.75rem 1rem",
                outline: "none",
                minWidth: 0,
              }}
            />
            <button
              type="submit"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#FBF8F3",
                backgroundColor: "#2E3423",
                border: "none",
                borderRadius: "3px",
                padding: "0.75rem 1.25rem",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#1a1f14")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#2E3423")}
            >
              Notify me
            </button>
          </div>
          {status === "error" && (
            <p role="alert" style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "#D4A88A", marginTop: "0.5rem" }}>
              Please enter a valid email.
            </p>
          )}
          {status === "success" && (
            <p role="status" style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "rgba(251,248,243,0.65)", marginTop: "0.5rem" }}>
              You&rsquo;re on the list — we&rsquo;ll be in touch.
            </p>
          )}
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", color: "rgba(251,248,243,0.3)", marginTop: "0.625rem" }}>
            No spam. Unsubscribe anytime.
          </p>
        </form>
        </div>{/* end flex row */}
      </div>
    </section>
  );
}
