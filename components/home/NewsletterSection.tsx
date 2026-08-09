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
    <section style={{ backgroundColor: "#F7F3EC", padding: "clamp(5rem, 9vw, 8rem) 0" }}>
      <div style={{
        maxWidth: 1320, margin: "0 auto",
        padding: "0 clamp(1.25rem, 4vw, 3rem)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(3rem, 6vw, 6rem)",
        alignItems: "center",
      }}
      className="newsletter-grid"
      >
        {/* Copy + form */}
        <div>
          <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>Stay in the loop</p>
          <h2 style={{
            fontFamily: "var(--font-body)", fontWeight: 700,
            fontSize: "clamp(2rem, 3vw, 2.75rem)",
            letterSpacing: "-0.025em", color: "#111111",
            margin: "0 0 1rem",
          }}>
            Skincare without the noise.
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.7,
            color: "#676764", margin: "0 0 2rem",
          }}>
            Formulation updates, early access, and honest skin content. No spam, ever.
          </p>

          {submitted ? (
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 500,
              color: "#111111",
            }}>
              You&apos;re in. Talk soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="input"
                style={{ flex: "1 1 200px", maxWidth: 320 }}
                aria-label="Email address"
              />
              <button
                type="submit"
                style={{
                  height: 52, padding: "0 1.75rem",
                  fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 500,
                  color: "#FFFFFF", backgroundColor: "#111111",
                  border: "1.5px solid #111111", borderRadius: 12,
                  cursor: "pointer", transition: "background-color 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#333333"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#111111"; }}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* Image */}
        <div>
          <div style={{
            position: "relative",
            aspectRatio: "4 / 3",
            borderRadius: 24,
            overflow: "hidden",
            backgroundColor: "#EFE9DF",
          }}>
            <Image
              src={homepageImages.newsletter}
              alt="Sukoon skincare"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .newsletter-grid {
            grid-template-columns: 1fr !important;
          }
          .newsletter-grid > div:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
