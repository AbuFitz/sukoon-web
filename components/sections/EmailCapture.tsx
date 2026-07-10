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
        position: "relative", overflow: "hidden",
        background: "linear-gradient(135deg, #3F4A36 0%, #2C2A1F 100%)",
        padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 5rem)",
      }}
    >
      {/* Decorative ring */}
      <div aria-hidden style={{
        position: "absolute", right: "-5%", top: "50%", transform: "translateY(-50%)",
        width: "clamp(300px, 45vw, 640px)", aspectRatio: "1",
        borderRadius: "50%", border: "1px solid rgba(152,164,125,0.12)",
        pointerEvents: "none",
      }} />
      <div aria-hidden style={{
        position: "absolute", right: "5%", top: "50%", transform: "translateY(-50%)",
        width: "clamp(200px, 30vw, 440px)", aspectRatio: "1",
        borderRadius: "50%", border: "1px solid rgba(152,164,125,0.08)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1320px", margin: "0 auto", position: "relative" }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "clamp(3rem, 7vw, 7rem)", alignItems: "center" }}>

          {/* Left */}
          <div>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 700,
              letterSpacing: "0.22em", textTransform: "uppercase", color: "#98A47D",
              marginBottom: "1.75rem",
            }}>
              Stay in the Circle
            </p>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
              fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em",
              color: "#F7F1E4", marginBottom: "1.5rem",
            }}>
              Early access.<br />Ritual notes.<br />Nothing more.
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8,
              color: "rgba(247,241,228,0.5)",
            }}>
              New products, restocks, and the thinking behind the formula. No noise.
            </p>
          </div>

          {/* Right — form */}
          <div>
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "3rem 2rem" }}>
                <p style={{
                  fontFamily: "var(--font-display)", fontSize: "2rem", fontStyle: "italic",
                  color: "#F7F1E4", marginBottom: "0.75rem",
                }}>
                  You&rsquo;re in.
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "rgba(247,241,228,0.5)" }}>
                  We&rsquo;ll be in touch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <label style={{
                  display: "block",
                  fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 700,
                  letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(247,241,228,0.45)",
                  marginBottom: "0.75rem",
                }}>
                  Your email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setStatus("idle"); }}
                  placeholder="your@email.com"
                  aria-invalid={status === "error"}
                  required
                  style={{
                    display: "block", width: "100%", boxSizing: "border-box" as const,
                    fontFamily: "var(--font-body)", fontSize: "1rem", color: "#F7F1E4",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    border: `1px solid ${status === "error" ? "rgba(255,160,160,0.5)" : "rgba(247,241,228,0.2)"}`,
                    padding: "1rem 1.25rem", outline: "none", marginBottom: "0.75rem",
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
                    padding: "1.0625rem", cursor: "pointer",
                    transition: "background 0.25s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#98A47D"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F7F1E4"; }}
                >
                  Join the Circle
                </button>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.6875rem",
                  color: "rgba(247,241,228,0.3)", marginTop: "1rem",
                }}>
                  No spam. Unsubscribe any time.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
