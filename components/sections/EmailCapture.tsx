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
      style={{
        backgroundColor: "#3F4A36",
        padding: "clamp(6rem, 14vh, 12rem) clamp(2rem, 6vw, 5rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Arabic watermark */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "clamp(1rem, 5vw, 4rem)",
          bottom: "-2rem",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(8rem, 18vw, 18rem)",
          color: "rgba(251,248,243,0.04)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.02em",
        }}
      >
        سكون
      </div>

      <div
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.625rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(251,248,243,0.35)",
            marginBottom: "1.75rem",
          }}
        >
          Launching Soon
        </p>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            color: "#FBF8F3",
            marginBottom: "1.5rem",
          }}
        >
          Be the first to try<br />
          The Daily Solace Fluid.
        </h2>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9375rem",
            lineHeight: 1.8,
            color: "rgba(251,248,243,0.45)",
            marginBottom: "3rem",
            maxWidth: "380px",
            margin: "0 auto 3rem",
          }}
        >
          Launching at £35. Our first batch is limited to just 610 bottles —
          join the waitlist to secure yours before they sell out.
        </p>

        <form onSubmit={handleSubmit} noValidate aria-label="Waitlist signup">
          <div
            style={{
              display: "flex",
              gap: "0",
              maxWidth: "440px",
              margin: "0 auto",
              border: "1px solid rgba(251,248,243,0.2)",
              flexWrap: "wrap",
            }}
          >
            <input
              type="email"
              value={email}
              onChange={e => { setEmail(e.target.value); setStatus("idle"); }}
              placeholder="your@email.com"
              aria-label="Email address"
              aria-invalid={status === "error"}
              required
              style={{
                flex: 1,
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                color: "#FBF8F3",
                backgroundColor: "transparent",
                border: "none",
                padding: "1rem 1.25rem",
                outline: "none",
                minWidth: 0,
              }}
            />
            <button
              type="submit"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.625rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#3F4A36",
                backgroundColor: "#FBF8F3",
                border: "none",
                padding: "1rem 1.5rem",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "background 0.25s, color 0.25s",
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "#E8D4AE";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "#FBF8F3";
              }}
            >
              Notify Me
            </button>
          </div>

          {status === "error" && (
            <p role="alert" style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "rgba(251,248,243,0.5)", marginTop: "0.875rem" }}>
              Please enter a valid email address.
            </p>
          )}
          {status === "success" && (
            <p role="status" style={{ fontFamily: "var(--font-display)", fontSize: "1.0625rem", fontStyle: "italic", color: "rgba(251,248,243,0.65)", marginTop: "1rem" }}>
              You&rsquo;re on the list. We&rsquo;ll be in touch.
            </p>
          )}

          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", color: "rgba(251,248,243,0.22)", marginTop: "1.25rem", letterSpacing: "0.04em" }}>
            No spam. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </section>
  );
}
