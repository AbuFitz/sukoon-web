"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { homepageImages } from "@/lib/homepage";

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`;

type State = "idle" | "loading" | "success" | "error";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bottleY = useTransform(scrollYProgress, [0, 1], [20, -20]);

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
      ref={sectionRef}
      aria-label="Newsletter signup"
      style={{ backgroundColor: "#ede9df", position: "relative" }}
    >
      {/* Grain */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: GRAIN, opacity: 0.022, pointerEvents: "none",
      }} />

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr", minHeight: 430, position: "relative", zIndex: 1 }}
        className="grid-cols-1 md:grid-cols-[1fr_1.25fr]"
      >
        {/* Image side */}
        <div style={{ position: "relative", minHeight: "clamp(280px, 35vw, 430px)", backgroundColor: "#d8d4c9", order: 1, overflow: "visible" }}>
          <Image
            src={homepageImages.newsletter}
            alt="Sukoon skincare ritual"
            fill
            sizes="(min-width: 1024px) 44vw, 100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            unoptimized
          />

          {/* Bottle crossing into content panel */}
          <motion.div
            style={{
              position: "absolute",
              right: -80, bottom: 25,
              width: 150, zIndex: 4,
              filter: "drop-shadow(0 18px 24px rgba(35,40,30,0.12))",
              y: bottleY,
            }}
          >
            <Image
              src={homepageImages.newsletterProductCutout}
              alt=""
              width={150}
              height={375}
              style={{ width: "100%", height: "auto" }}
              unoptimized
            />
          </motion.div>
        </div>

        {/* Content — extra left padding to accommodate bottle overlap */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(3.5rem, 7vw, 4.5rem) clamp(2.5rem, 6vw, 5.5rem)",
          paddingLeft: "clamp(4.5rem, 8vw, 7rem)",
          order: 2,
        }}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: "clamp(1.875rem, 3vw, 2.75rem)",
            lineHeight: 1.08, letterSpacing: "-0.02em",
            color: "#292b25", margin: "0 0 0.75rem",
          }}>
            Join our community.
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.65,
            color: "#64685f", margin: "0 0 1.75rem",
          }}>
            Get skincare insights and early access.
          </p>

          {state === "success" ? (
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontStyle: "italic", color: "#3F4A36", marginBottom: "0.5rem" }}>
                You&rsquo;re in.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "#64685f" }}>
                Welcome to the circle. We&rsquo;ll be in touch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
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
                    flex: 1, minHeight: 52,
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
                    minHeight: 52, padding: "0 1.625rem",
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
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#9a9f95", marginTop: "0.875rem" }}>
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
