"use client";

import Image from "next/image";
import { useState } from "react";
import { homepageImages } from "@/lib/homepage";
import { FadeIn } from "@/components/ui/FadeIn";

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`;

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
      style={{ backgroundColor: "#ebe7dd", position: "relative" }}
    >
      {/* Grain */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: GRAIN, opacity: 0.022, pointerEvents: "none",
      }} />

      <div
        style={{ minHeight: 420, position: "relative", zIndex: 1 }}
        className="grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr]"
      >
        {/* Image side */}
        <div style={{
          position: "relative",
          minHeight: "clamp(280px, 35vw, 420px)",
          backgroundColor: "#d8d4c9",
          order: 1,
          overflow: "hidden",
        }}>
          <Image
            src={homepageImages.newsletter}
            alt="Sukoon skincare ritual"
            fill
            sizes="(min-width: 1024px) 44vw, 100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        {/* Content */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(3.5rem, 7vw, 4.5rem) clamp(2.5rem, 6vw, 5.5rem)",
          order: 2,
        }}>
          <FadeIn direction="up" delay={0.08}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 400,
              fontSize: "clamp(2rem, 3vw, 2.875rem)",
              lineHeight: 1.06, letterSpacing: "-0.022em",
              color: "#292b25", margin: "0 0 0.75rem",
            }}>
              Join our community.
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.7,
              color: "#64685f", margin: "0 0 1.875rem", maxWidth: 400,
            }}>
              Get skincare insights and early access to new products.
            </p>

            {state === "success" ? (
              <div>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "1.625rem", fontStyle: "italic", color: "#45543d", marginBottom: "0.5rem" }}>
                  You&rsquo;re in.
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "#64685f" }}>
                  Welcome to the circle. We&rsquo;ll be in touch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="nl-email" style={{
                  fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "#78836e", display: "block", marginBottom: "0.625rem",
                }}>
                  Email address
                </label>
                <div style={{ display: "flex", maxWidth: 480 }}>
                  <input
                    id="nl-email"
                    type="email"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setState("idle"); }}
                    placeholder="Enter your email"
                    aria-invalid={state === "error"}
                    required
                    style={{
                      flex: 1, minHeight: 50,
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
                      minHeight: 50, padding: "0 1.625rem",
                      fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600,
                      letterSpacing: "0.12em", textTransform: "uppercase",
                      color: "#FFFFFF", backgroundColor: "#45543d",
                      border: "1px solid #45543d",
                      cursor: "pointer", whiteSpace: "nowrap",
                      transition: "background-color 220ms ease, transform 220ms ease",
                    }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLButtonElement; el.style.backgroundColor = "#34402f"; el.style.borderColor = "#34402f"; el.style.transform = "translateY(-1px)"; }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLButtonElement; el.style.backgroundColor = "#45543d"; el.style.borderColor = "#45543d"; el.style.transform = "none"; }}
                  >
                    {state === "loading" ? "…" : "Join Sukoon"}
                  </button>
                </div>
                {state === "error" && (
                  <p role="alert" style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#b04040", marginTop: "0.5rem" }}>
                    Please enter a valid email address.
                  </p>
                )}
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#9a9f95", marginTop: "0.875rem" }}>
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
