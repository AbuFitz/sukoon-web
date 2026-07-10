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
      style={{
        backgroundColor: "#2C2A1F",
        padding: "clamp(5rem, 12vw, 11rem) clamp(1.5rem, 6vw, 5rem)",
      }}
    >
      <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>

        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 700,
          letterSpacing: "0.22em", textTransform: "uppercase", color: "#98A47D",
          marginBottom: "2rem",
        }}>
          Stay in the Circle
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 4rem)",
          fontWeight: 400, lineHeight: 1.08, letterSpacing: "-0.025em",
          color: "#F7F1E4", marginBottom: "1.5rem",
          fontStyle: "italic",
        }}>
          Early access.<br />Ritual notes.<br />Nothing more.
        </h2>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.8,
          color: "rgba(247,241,228,0.45)", marginBottom: "3rem",
        }}>
          New products, restocks, and the thinking behind the formula. No noise.
        </p>

        {status === "success" ? (
          <div style={{ padding: "2rem 0" }}>
            <p style={{
              fontFamily: "var(--font-display)", fontSize: "2.25rem", fontStyle: "italic",
              color: "#F7F1E4", marginBottom: "0.75rem",
            }}>
              You&rsquo;re in.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "rgba(247,241,228,0.45)" }}>
              We&rsquo;ll be in touch.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate style={{ textAlign: "left" }}>
            <input
              type="email"
              value={email}
              onChange={e => { setEmail(e.target.value); setStatus("idle"); }}
              placeholder="your@email.com"
              aria-label="Email address"
              aria-invalid={status === "error"}
              required
              style={{
                display: "block", width: "100%", boxSizing: "border-box" as const,
                fontFamily: "var(--font-body)", fontSize: "1rem", color: "#F7F1E4",
                backgroundColor: "rgba(255,255,255,0.05)",
                border: `1px solid ${status === "error" ? "rgba(255,160,160,0.5)" : "rgba(247,241,228,0.15)"}`,
                padding: "1.125rem 1.5rem", outline: "none", marginBottom: "0.75rem",
              }}
            />
            {status === "error" && (
              <p role="alert" style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "rgba(255,180,180,0.8)", marginBottom: "0.75rem" }}>
                Please enter a valid email.
              </p>
            )}
            <button
              type="submit"
              style={{
                display: "block", width: "100%",
                fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 700,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "#2C2A1F", backgroundColor: "#F7F1E4", border: "none",
                padding: "1.125rem", cursor: "pointer",
                transition: "background 0.25s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#98A47D"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F7F1E4"; }}
            >
              Join the Circle
            </button>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.6875rem",
              color: "rgba(247,241,228,0.25)", marginTop: "1.25rem", textAlign: "center",
            }}>
              No spam. Unsubscribe any time.
            </p>
          </form>
        )}

      </div>
    </section>
  );
}
