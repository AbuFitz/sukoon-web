"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

function IconInstagram() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4.5"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function IconTikTok() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
    </svg>
  );
}

export function ComingSoon() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  }

  return (
    <main
      className="min-h-screen flex flex-col md:flex-row"
      style={{ backgroundColor: "#FBF8F3" }}
    >
      {/* Content */}
      <div className="flex flex-col justify-between px-8 py-10 md:px-14 md:py-14 md:w-[52%] order-2 md:order-1">

        {/* Top: wordmark */}
        <div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
              fontStyle: "italic",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 0.95,
              color: "#434A33",
              display: "block",
            }}
          >
            Sukoon
          </span>
        </div>

        {/* Middle: headline + form */}
        <div style={{ paddingTop: "clamp(2.5rem, 6vw, 5rem)", paddingBottom: "clamp(2.5rem, 6vw, 5rem)" }}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 500,
              fontStyle: "italic",
              lineHeight: 1.2,
              color: "#434A33",
              marginBottom: "1rem",
              maxWidth: "460px",
            }}
          >
            Skincare rooted in nature,<br />made for everyday ritual.
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              color: "#6B7451",
              marginBottom: "2.25rem",
              maxWidth: "380px",
            }}
          >
            Black seed face oil. Cold-pressed, small-batch,
            launching in the UK. Join the waitlist for early access and launch pricing.
          </p>

          <form onSubmit={handleSubmit} noValidate aria-label="Waitlist signup">
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.6875rem",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#98A27E",
                marginBottom: "0.5rem",
              }}
            >
              Notify me at launch
            </p>
            <div className="flex gap-2" style={{ maxWidth: "380px" }}>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
                placeholder="your@email.com"
                className="input flex-1"
                aria-invalid={status === "error"}
                required
              />
              <button type="submit" className="btn btn-olive shrink-0" aria-label="Join waitlist">
                Join
                <ChevronRight size={14} strokeWidth={2} />
              </button>
            </div>

            {status === "error" && (
              <p
                role="alert"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#9B6E4A", marginTop: "0.5rem" }}
              >
                Please enter a valid email address.
              </p>
            )}
            {status === "success" && (
              <p
                role="status"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#434A33", fontWeight: 500, marginTop: "0.5rem" }}
              >
                You&rsquo;re on the list — we&rsquo;ll be in touch.
              </p>
            )}
          </form>
        </div>

        {/* Bottom: socials + footnote */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {[
              { label: "Instagram", icon: <IconInstagram />, href: "https://instagram.com" },
              { label: "TikTok",    icon: <IconTikTok />,    href: "https://tiktok.com" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Sukoon on ${s.label}`}
                className="flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200"
                style={{ border: "1px solid #DDD5C8", color: "#98A27E" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#6B7451";
                  el.style.color = "#434A33";
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
              fontSize: "0.75rem",
              letterSpacing: "0.06em",
              color: "#C4BAB0",
            }}
          >
            Launching in the UK
          </p>
        </div>
      </div>

      {/* Image */}
      <div
        className="relative order-1 md:order-2 md:flex-1"
        style={{ height: "45vw", minHeight: "260px", maxHeight: "none" }}
      >
        <div className="hidden md:block absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1707539160277-e39464517645?w=1400&q=85&fit=crop"
            alt="Sukoon black seed face oil — glass dropper bottle on warm sandy surface"
            fill
            priority
            sizes="48vw"
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
    </main>
  );
}
