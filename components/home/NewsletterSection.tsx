"use client";

import Image from "next/image";
import { useState } from "react";
import { homepageImages } from "@/lib/homepage";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="stack-panel stack-panel--clip" style={{ backgroundColor: "#F6F1E9" }}>
      <div
        className="newsletter-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "45fr 55fr",
          minHeight: "min(60vh, 520px)",
        }}
      >
        {/* Copy + form */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 5vw, 3.5rem)",
        }}>
          <h2 style={{
            fontFamily: "var(--font-body)", fontWeight: 500,
            fontSize: "clamp(1.75rem, 2.8vw, 2.375rem)",
            letterSpacing: "-0.03em", color: "#111111",
            margin: "0 0 0.75rem", lineHeight: 1.08,
          }}>
            Skincare without the noise.
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.6,
            color: "#636360", margin: "0 0 1.75rem", maxWidth: 360,
          }}>
            Formulation updates, early access, and honest skin content. No spam, ever.
          </p>

          {submitted ? (
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 600,
              color: "#111111",
            }}>
              You&apos;re in. Talk soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="input"
                style={{ flex: "1 1 200px", maxWidth: 300, backgroundColor: "#FFFFFF" }}
                aria-label="Email address"
              />
              <button type="submit" className="btn btn-dark">Sign Up</button>
            </form>
          )}
        </div>

        {/* Image */}
        <div style={{ position: "relative", backgroundColor: "#EFE7D8", minHeight: 300 }}>
          <Image
            src={homepageImages.newsletter}
            alt="Sukoon skincare"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .newsletter-grid {
            grid-template-columns: 1fr !important;
            min-height: 0 !important;
          }
          .newsletter-grid > div:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
