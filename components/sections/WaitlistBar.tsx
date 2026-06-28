"use client";

import { useState } from "react";

export function WaitlistBar() {
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
        backgroundColor: "#3D4430",
        padding: "clamp(2.5rem, 5vh, 4rem) clamp(2rem, 6vw, 6rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Arabic ghost */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "clamp(0.5rem, 3vw, 3rem)",
          bottom: "-1.5rem",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(6rem, 14vw, 14rem)",
          color: "rgba(247,244,238,0.05)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "0.02em",
        }}
      >
        سكون
      </div>

      <div
        style={{
          maxWidth: "1380px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "auto 1px auto 1fr",
          gap: "clamp(1.5rem, 3vw, 3rem)",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="block md:grid"
      >
        {/* Headline */}
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)",
            fontWeight: 500,
            fontStyle: "italic",
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
            color: "#F7F4EE",
            whiteSpace: "nowrap",
          }}
          className="mb-4 md:mb-0"
        >
          Be the first to know.
        </h2>

        {/* Divider */}
        <div
          className="hidden md:block"
          style={{ height: "2.5rem", width: "1px", backgroundColor: "rgba(247,244,238,0.15)" }}
          aria-hidden
        />

        {/* Sub copy */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.875rem",
            lineHeight: 1.7,
            color: "rgba(247,244,238,0.45)",
            maxWidth: "260px",
          }}
          className="mb-4 md:mb-0"
        >
          Early access, launch-day offers and the stories behind our ingredients.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate style={{ display: "flex", gap: "0", maxWidth: "400px" }}>
          <input
            type="email"
            value={email}
            onChange={e => { setEmail(e.target.value); setStatus("idle"); }}
            placeholder="your@email.com"
            aria-label="Email address"
            required
            style={{
              flex: 1,
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              color: "#1E2318",
              backgroundColor: "#F7F4EE",
              border: "none",
              padding: "0.875rem 1.125rem",
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
              color: "#F7F4EE",
              backgroundColor: "#1E2318",
              border: "none",
              padding: "0.875rem 1.25rem",
              cursor: "pointer",
              whiteSpace: "nowrap",
              flexShrink: 0,
              transition: "background 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "#2E3423")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "#1E2318")}
          >
            Notify Me
          </button>
        </form>

        {status === "error" && (
          <p role="alert" style={{ gridColumn: "4", fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "rgba(247,244,238,0.5)", marginTop: "-0.5rem" }}>
            Please enter a valid email.
          </p>
        )}
        {status === "success" && (
          <p role="status" style={{ gridColumn: "4", fontFamily: "var(--font-display)", fontSize: "0.9375rem", fontStyle: "italic", color: "rgba(247,244,238,0.65)", marginTop: "-0.5rem" }}>
            You&rsquo;re on the list. We&rsquo;ll be in touch.
          </p>
        )}
      </div>

      {/* Bottom: no spam + socials */}
      <div
        style={{
          maxWidth: "1380px",
          margin: "1.25rem auto 0",
          display: "flex",
          justifyContent: "flex-end",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.625rem", color: "rgba(247,244,238,0.22)", letterSpacing: "0.06em" }}>
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
