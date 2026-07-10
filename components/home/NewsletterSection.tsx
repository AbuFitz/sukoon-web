"use client";

import Image from "next/image";
import { useState } from "react";
import { homepageImages } from "@/lib/homepage";

type State = "idle" | "loading" | "success" | "error";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) { setState("error"); return; }
    setState("loading");
    // TODO: wire to email platform
    await new Promise(r => setTimeout(r, 600));
    setState("success");
    setEmail("");
  }

  return (
    <section
      aria-label="Newsletter signup"
      style={{ backgroundColor: "#ede9df" }}
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.25fr",
        minHeight: 390,
      }}
        className="grid-cols-1 md:grid-cols-[1fr_1.25fr]"
      >
        {/* Image */}
        <div style={{ position: "relative", minHeight: "clamp(280px, 35vw, 430px)", backgroundColor: "#d8d4c9", order: 1 }}>
          <Image
            src={homepageImages.newsletter}
            alt="Sukoon skincare ritual"
            fill
            sizes="(min-width: 1024px) 44vw, 100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            unoptimized
          />
        </div>

        {/* Content */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(3rem, 7vw, 4.5rem) clamp(2.5rem, 6vw, 5rem)",
          order: 2,
        }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 500,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "#78836e", marginBottom: "1.125rem",
          }}>
            Be Part of the Ritual
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: "clamp(1.875rem, 3vw, 2.75rem)",
            lineHeight: 1.08, letterSpacing: "-0.02em",
            color: "#292b25", margin: "0 0 0.875rem",
          }}>
            Join our community.<br />
            <span style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.25rem)", color: "#64685f" }}>
              Get skincare insights and early access.
            </span>
          </h2>

          {state === "success" ? (
            <div style={{ marginTop: "1.75rem" }}>
              <p style={{
                fontFamily: "var(--font-display)", fontSize: "1.5rem", fontStyle: "italic",
                color: "#3F4A36", marginBottom: "0.5rem",
              }}>
                You&rsquo;re in.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "#64685f" }}>
                Welcome to the circle. We&rsquo;ll be in touch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate style={{ marginTop: "1.75rem" }}>
              <label htmlFor="nl-email" style={{
                fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 500,
                letterSpacing: "0.08em", textTransform: "uppercase",
                color: "#64685f", display: "block", marginBottom: "0.625rem",
              }}>
                Email address
              </label>
              <div style={{ display: "flex", maxWidth: 520 }}>
                <input
                  id="nl-email"
                  type="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setState("idle"); }}
                  placeholder="Enter your email"
                  aria-invalid={state === "error"}
                  required
                  style={{
                    flex: 1, minHeight: 48,
                    padding: "0 1rem",
                    fontFamily: "var(--font-body)", fontSize: "0.9375rem",
                    color: "#292b25", backgroundColor: "#FFFFFF",
                    border: `1px solid ${state === "error" ? "rgba(200,80,80,0.5)" : "rgba(63,76,56,0.25)"}`,
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  disabled={state === "loading"}
                  style={{
                    minHeight: 48, padding: "0 1.625rem",
                    fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 500,
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    color: "#FFFFFF", backgroundColor: "#3F4A36",
                    border: "1px solid #3F4A36",
                    cursor: "pointer", whiteSpace: "nowrap",
                    transition: "background 180ms ease",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2C3528"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#3F4A36"; }}
                >
                  {state === "loading" ? "…" : "Join Sukoon"}
                </button>
              </div>
              {state === "error" && (
                <p role="alert" style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#b04040", marginTop: "0.5rem" }}>
                  Please enter a valid email address.
                </p>
              )}
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.75rem",
                color: "#9a9f95", marginTop: "0.875rem",
              }}>
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
