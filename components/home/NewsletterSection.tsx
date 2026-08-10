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
    <section className="container" style={{ paddingTop: "clamp(1rem, 2vw, 1.25rem)" }}>
      <div className="card newsletter-grid" style={{
        display: "grid",
        gridTemplateColumns: "5fr 7fr",
        backgroundColor: "#F6F1E9",
        overflow: "hidden",
      }}>
        {/* Copy + form */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(2rem, 4vw, 3rem)",
        }}>
          <span className="eyebrow">Sukoon Circle</span>
          <h2 style={{
            fontFamily: "var(--font-body)", fontWeight: 700,
            fontSize: "clamp(1.375rem, 2.2vw, 1.875rem)",
            letterSpacing: "-0.025em", color: "#111111",
            margin: "0.5rem 0 0.625rem", lineHeight: 1.1,
          }}>
            Skincare without the noise.
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.6,
            color: "#666666", margin: "0 0 1.5rem", maxWidth: 340,
          }}>
            Formulation updates, early access, and honest skin content. No spam, ever.
          </p>

          {submitted ? (
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 700,
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
                style={{ flex: "1 1 200px", maxWidth: 280 }}
                aria-label="Email address"
              />
              <button type="submit" className="btn btn-dark">Subscribe</button>
            </form>
          )}
        </div>

        {/* Image */}
        <div style={{ position: "relative", minHeight: 260 }}>
          <Image
            src={homepageImages.newsletter}
            alt="Sukoon skincare"
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
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
