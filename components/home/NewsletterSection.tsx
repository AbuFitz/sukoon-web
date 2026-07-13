"use client";

import Image from "next/image";
import { useState } from "react";
import { homepageImages } from "@/lib/homepage";
import { FadeIn } from "@/components/ui/FadeIn";

type State = "idle" | "loading" | "success" | "error";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) { setState("error"); return; }
    setState("loading");
    await new Promise(r => setTimeout(r, 600));
    setState("success");
    setEmail("");
  }

  return (
    <section
      aria-label="Newsletter signup"
      style={{ position: "relative", overflow: "hidden", minHeight: 340 }}
    >
      {/* Full-bleed background image */}
      <Image
        src={homepageImages.newsletter}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      {/* Dim overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundColor: "rgba(28, 32, 24, 0.65)",
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 1,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        textAlign: "center",
        padding: "clamp(3rem, 7vw, 5rem) clamp(1.5rem, 5vw, 4rem)",
        minHeight: 340,
      }}>
        <FadeIn direction="up" delay={0.08}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: "clamp(2rem, 3.2vw, 3rem)",
            lineHeight: 1.06, letterSpacing: "-0.022em",
            color: "#FBF8F3", margin: "0 0 0.625rem",
          }}>
            Join our community.
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.7,
            color: "rgba(251,248,243,0.62)", margin: "0 auto 1.75rem", maxWidth: 380,
          }}>
            Skincare insights and early access to new products.
          </p>

          {state === "success" ? (
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1.625rem", fontStyle: "italic", color: "#FBF8F3", marginBottom: "0.375rem" }}>
                You&rsquo;re in.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "rgba(251,248,243,0.55)" }}>
                Welcome to the circle. We&rsquo;ll be in touch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate style={{ width: "100%", maxWidth: 420 }}>
              <div style={{ display: "flex" }}>
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
                    color: "#292b25", backgroundColor: "rgba(255,255,255,0.92)",
                    border: `1px solid ${state === "error" ? "rgba(200,80,80,0.6)" : "transparent"}`,
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  disabled={state === "loading"}
                  style={{
                    minHeight: 48, padding: "0 1.5rem",
                    fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    color: "#FBF8F3", backgroundColor: "#45543d",
                    border: "1px solid #45543d",
                    cursor: "pointer", whiteSpace: "nowrap",
                    transition: "background-color 220ms ease",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2d3628"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#45543d"; }}
                >
                  {state === "loading" ? "…" : "Join Sukoon"}
                </button>
              </div>
              {state === "error" && (
                <p role="alert" style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "rgba(255,160,160,0.9)", marginTop: "0.5rem" }}>
                  Please enter a valid email address.
                </p>
              )}
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", color: "rgba(251,248,243,0.3)", marginTop: "0.75rem", letterSpacing: "0.04em" }}>
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
