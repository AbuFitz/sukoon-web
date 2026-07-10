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
        backgroundColor: "#98A47D",
        padding: "clamp(4rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)",
      }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "clamp(2.5rem, 6vw, 5rem)", alignItems: "center" }}>

          {/* Left — copy */}
          <div>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 600,
              letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)",
              marginBottom: "1.5rem",
            }}>
              Stay Close
            </p>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.015em",
              color: "#FFFFFF", marginBottom: "1.25rem",
            }}>
              Early access.<br />Ritual notes.<br />Nothing more.
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.8,
              color: "rgba(255,255,255,0.7)",
            }}>
              No noise. Dispatches from the making of Sukoon — new products, restocks, and the thinking behind the formula.
            </p>
          </div>

          {/* Right — form */}
          <div>
            {status === "success" ? (
              <div style={{ padding: "2.5rem", border: "1px solid rgba(255,255,255,0.3)", textAlign: "center" }}>
                <p style={{
                  fontFamily: "var(--font-display)", fontSize: "1.5rem", fontStyle: "italic",
                  color: "#FFFFFF", marginBottom: "0.5rem",
                }}>
                  You&rsquo;re in.
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "rgba(255,255,255,0.7)" }}>
                  We&rsquo;ll be in touch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Email signup">
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 600,
                  letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)",
                  marginBottom: "0.875rem",
                }}>
                  Your email address
                </p>
                <div style={{
                  display: "flex", flexDirection: "column", gap: "0.75rem",
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
                      fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "#FFFFFF",
                      backgroundColor: "rgba(255,255,255,0.12)",
                      border: `1px solid ${status === "error" ? "rgba(255,200,200,0.7)" : "rgba(255,255,255,0.3)"}`,
                      padding: "1rem 1.25rem",
                      outline: "none", width: "100%", boxSizing: "border-box" as const,
                    }}
                  />
                  {status === "error" && (
                    <p role="alert" style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "rgba(255,220,220,0.9)" }}>
                      Please enter a valid email address.
                    </p>
                  )}
                  <button
                    type="submit"
                    style={{
                      fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 600,
                      letterSpacing: "0.18em", textTransform: "uppercase",
                      color: "#2C2A1F", backgroundColor: "#FFFFFF", border: "none",
                      padding: "1.0625rem", cursor: "pointer", width: "100%",
                      transition: "background 0.25s",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F7F1E4"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#FFFFFF"; }}
                  >
                    Join the Circle
                  </button>
                </div>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.6875rem",
                  color: "rgba(255,255,255,0.5)", marginTop: "1rem",
                }}>
                  No spam, ever. Unsubscribe any time.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
