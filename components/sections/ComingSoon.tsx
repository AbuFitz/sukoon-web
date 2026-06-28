"use client";

import { useState } from "react";
import Image from "next/image";

function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4.5"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function IconTikTok() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
    </svg>
  );
}

export function ComingSoon() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) { setStatus("error"); return; }
    setStatus("success");
    setEmail("");
  }

  return (
    <div
      className="min-h-screen flex flex-col md:grid"
      style={{
        backgroundColor: "#FBF8F3",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      {/* ── Left: Content ─────────────────────────────────── */}
      <div
        className="flex flex-col md:min-h-screen"
        style={{ padding: "clamp(2rem, 5vw, 4rem) clamp(2rem, 6vw, 5rem)" }}
      >

        {/* Wordmark */}
        <div style={{ marginBottom: "clamp(1.5rem, 3vh, 2.5rem)" }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.25rem, 6vw, 5rem)",
              fontStyle: "italic",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              lineHeight: 1,
              color: "#2E3423",
              display: "block",
            }}
          >
            Sukoon
          </span>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.6875rem",
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#98A27E",
              marginTop: "0.6rem",
            }}
          >
            Black Seed Face Oil
          </p>
        </div>

        {/* Centre block */}
        <div className="md:flex-1 md:flex md:flex-col md:justify-center" style={{ marginTop: "0" }}>
          {/* Thin rule */}
          <div style={{ width: "2.5rem", height: "1px", backgroundColor: "#C4BAB0", marginBottom: "2rem" }} />

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.625rem, 2.8vw, 2.25rem)",
              fontWeight: 500,
              fontStyle: "italic",
              lineHeight: 1.25,
              color: "#2E3423",
              marginBottom: "1.125rem",
              maxWidth: "420px",
            }}
          >
            Skincare rooted in nature,<br />
            made for everyday ritual.
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              lineHeight: 1.75,
              color: "#6B7451",
              marginBottom: "2.5rem",
              maxWidth: "340px",
            }}
          >
            A single, considered product. Cold-pressed black seed facial oil,
            launching in the UK. Join the waitlist for early access.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate aria-label="Waitlist signup">
            <label
              htmlFor="email"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.625rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#98A27E",
                display: "block",
                marginBottom: "0.625rem",
              }}
            >
              Notify me at launch
            </label>

            <div style={{ display: "flex", gap: "0.5rem", maxWidth: "360px" }}>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
                placeholder="your@email.com"
                className="input"
                style={{ flex: 1 }}
                aria-invalid={status === "error"}
                required
              />
              <button
                type="submit"
                className="btn btn-olive"
                style={{ whiteSpace: "nowrap", letterSpacing: "0.08em" }}
                aria-label="Join waitlist"
              >
                Join
              </button>
            </div>

            {status === "error" && (
              <p role="alert" style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "#9B6E4A", marginTop: "0.5rem" }}>
                Please enter a valid email.
              </p>
            )}
            {status === "success" && (
              <p role="status" style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "#434A33", fontWeight: 500, marginTop: "0.5rem" }}>
                You&rsquo;re on the list — we&rsquo;ll be in touch.
              </p>
            )}
          </form>
        </div>

        {/* Footer row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {[
              { label: "Instagram", icon: <IconInstagram />, href: "https://instagram.com" },
              { label: "TikTok",    icon: <IconTikTok />,    href: "https://tiktok.com"   },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Sukoon on ${s.label}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "50%",
                  border: "1px solid #DDD5C8",
                  color: "#98A27E",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#6B7451";
                  el.style.color = "#2E3423";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#DDD5C8";
                  el.style.color = "#98A27E";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.6875rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#C4BAB0",
            }}
          >
            Launching in the UK
          </p>
        </div>
      </div>

      {/* ── Right: Image ───────────────────────────────────── */}
      <div
        className="relative order-first md:order-last"
        style={{ height: "55vw", minHeight: "300px" }}
      >
        {/* On desktop this cell stretches to match the left column via grid — position sticky makes it fill the viewport */}
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
          }}
          className="hidden md:block"
        >
          <Image
            src="https://images.unsplash.com/photo-1707539160277-e39464517645?w=1400&q=85&fit=crop"
            alt="Sukoon black seed face oil — glass dropper bottle"
            fill
            priority
            sizes="50vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        {/* Mobile image */}
        <div className="md:hidden absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1707539160277-e39464517645?w=900&q=80&fit=crop"
            alt="Sukoon black seed face oil"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
      </div>
    </div>
  );
}
