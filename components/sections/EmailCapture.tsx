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
      aria-label="Join the circle"
      style={{
        backgroundColor: "#F7F1E4",
        padding: "clamp(3rem, 7vw, 5rem) clamp(2rem, 6vw, 5rem)",
        borderTop: "1px solid #E8D4AE",
      }}
    >
      <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>

        <h2 style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(1.625rem, 3.5vw, 2.25rem)",
          fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#2C2A1F", marginBottom: "1rem",
        }}>
          Early access. Ritual notes.<br />Dispatches from the making of Sukoon.
        </h2>

        <form onSubmit={handleSubmit} noValidate aria-label="Email signup" style={{ marginTop: "1.75rem" }}>
          <div style={{
            display: "flex", gap: 0, maxWidth: "400px", margin: "0 auto",
            border: "1px solid #2C2A1F", flexWrap: "wrap",
          }}>
            <input
              type="email"
              value={email}
              onChange={e => { setEmail(e.target.value); setStatus("idle"); }}
              placeholder="your@email.com"
              aria-label="Email address"
              aria-invalid={status === "error"}
              required
              style={{
                flex: 1, fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#2C2A1F",
                backgroundColor: "transparent", border: "none", padding: "0.875rem 1.125rem",
                outline: "none", minWidth: 0,
              }}
            />
            <button
              type="submit"
              style={{
                fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 600,
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: "#F7F1E4", backgroundColor: "#2C2A1F", border: "none",
                padding: "0.875rem 1.375rem", cursor: "pointer", whiteSpace: "nowrap",
                transition: "background 0.25s", flexShrink: 0,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#3F4A36"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#2C2A1F"; }}
            >
              Join the Circle
            </button>
          </div>

          {status === "error" && (
            <p role="alert" style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#6B7B5C", marginTop: "0.75rem" }}>
              Please enter a valid email address.
            </p>
          )}
          {status === "success" && (
            <p role="status" style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontStyle: "italic", color: "#3F4A36", marginTop: "0.875rem" }}>
              You&rsquo;re in. We&rsquo;ll be in touch.
            </p>
          )}
        </form>

        <a href="/shop" style={{
          display: "inline-block", marginTop: "1.75rem",
          fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 500,
          letterSpacing: "0.04em", color: "#2C2A1F", textDecoration: "underline",
        }}>
          Shop The Daily Solace Fluid
        </a>
      </div>
    </section>
  );
}
