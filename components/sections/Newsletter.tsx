"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }
    /* Replace with actual API call */
    setStatus("success");
    setEmail("");
  }

  return (
    <section
      id="waitlist"
      aria-label="Join the waitlist"
      className="section"
      style={{ backgroundColor: "#E8DFC9" }}
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* Text */}
          <FadeIn>
            <span className="eyebrow block mb-4">Launching soon</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
                letterSpacing: "-0.015em",
                lineHeight: 1.07,
                color: "#434A33",
                marginBottom: "1.125rem",
              }}
            >
              Be the first to experience Sukoon.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                lineHeight: 1.68,
                color: "#98A47D",
              }}
            >
              Join the waitlist for early access, launch pricing and an
              introductory ritual guide when we open.
              No inbox noise — just the launch notification.
            </p>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.15}>
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Waitlist signup form"
            >
              <label
                htmlFor="email"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#98A47D",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                Your email address
              </label>

              <div className="flex gap-2">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
                  placeholder="you@example.com"
                  className="input flex-1"
                  aria-invalid={status === "error"}
                  aria-describedby={status !== "idle" ? "form-message" : undefined}
                  required
                />
                <button
                  type="submit"
                  className="btn btn-olive shrink-0"
                  aria-label="Join waitlist"
                >
                  Join
                  <ChevronRight size={15} strokeWidth={2} />
                </button>
              </div>

              {status === "error" && (
                <p
                  id="form-message"
                  role="alert"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    color: "#9B6E4A",
                    marginTop: "0.625rem",
                  }}
                >
                  Please enter a valid email address.
                </p>
              )}

              {status === "success" && (
                <p
                  id="form-message"
                  role="status"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    color: "#434A33",
                    fontWeight: 500,
                    marginTop: "0.625rem",
                  }}
                >
                  You&rsquo;re on the list. We&rsquo;ll be in touch.
                </p>
              )}

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  color: "#98A47D",
                  marginTop: "0.875rem",
                }}
              >
                No spam. Unsubscribe anytime. See our{" "}
                <a
                  href="#"
                  style={{ color: "#98A47D", textDecoration: "underline" }}
                >
                  privacy policy
                </a>
                .
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
