"use client";

import Image from "next/image";
import { homepageImages } from "@/lib/homepage";

export function AboutContent() {
  return (
    <article>

      {/* Hero */}
      <div style={{
        backgroundColor: "#FAFAFA",
        padding: "clamp(2.75rem, 6vw, 4.5rem) clamp(1.5rem, 6vw, 6rem) clamp(2.25rem, 5vw, 3.5rem)",
        borderBottom: "1px solid #E5E5E2",
      }}>
        <div style={{ maxWidth: "780px" }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 600,
            color: "#969690",
            marginBottom: "1.25rem",
          }}>
            About Sukoon
          </p>
          <h1 style={{
            fontFamily: "var(--font-body)", fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
            fontWeight: 600, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#111111",
            marginBottom: "clamp(1.25rem, 3vw, 1.75rem)",
          }}>
            The skincare industry built<br />everything for your face.<br />
            We built one thing<br />for what it missed.
          </h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85,
            color: "#636360", maxWidth: "560px",
          }}>
            سكون. In Arabic, it means stillness. The moment the day slows down, the noise drops away, and you return to yourself. That&rsquo;s the feeling we wanted to bottle — not just for your face, but for every part of your ritual that never had a product made for it.
          </p>
        </div>
      </div>

      {/* Split: Image + The Problem */}
      <div className="flex flex-col md:grid md:grid-cols-2" style={{ backgroundColor: "#FFFFFF" }}>
        <div style={{ position: "relative", minHeight: "clamp(340px, 55vw, 620px)", backgroundColor: "#F4F4F2" }}>
          <Image
            src={homepageImages.story}
            alt="Applying the Daily Solace Fluid"
            fill sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(2.5rem, 6vw, 5rem) clamp(1.5rem, 6vw, 5rem)",
        }}>
          <h2 style={{
            fontFamily: "var(--font-body)", fontSize: "clamp(1.625rem, 3vw, 2.25rem)",
            fontWeight: 600, lineHeight: 1.15, letterSpacing: "-0.02em", color: "#111111",
            marginBottom: "clamp(1.25rem, 3vw, 1.75rem)",
          }}>
            Millions of people are managing hairline thinning with products that were never made for them.
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85, color: "#636360",
            marginBottom: "1.25rem",
          }}>
            Traction alopecia — hairline thinning caused by daily friction and tension from tight styles, braids, weaves, and ponytails — is well-documented. The products addressing it are not. Most hairline treatments are thick, heavy, and scented for overnight use. Most face oils ignore the hairline entirely.
          </p>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85, color: "#636360",
          }}>
            The Daily Solace Fluid was built to exist in that gap. Lightweight enough for daily face use. Active enough to support the hairline. One formula. Two rituals.
          </p>
        </div>
      </div>

      {/* The Formula Philosophy */}
      <div style={{
        backgroundColor: "#111111",
        padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 6vw, 6rem)",
      }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--font-body)", fontSize: "clamp(1.625rem, 3vw, 2.375rem)",
            fontWeight: 600, lineHeight: 1.15, letterSpacing: "-0.02em",
            color: "#FAFAFA", marginBottom: "clamp(1.25rem, 3vw, 1.75rem)",
          }}>
            Five ingredients. Nothing extra.
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.65,
            color: "rgba(250,250,250,0.65)", marginBottom: "1rem",
          }}>
            We didn&rsquo;t want a formula that impressed with its length. We wanted one that was impossible to argue with. Every ingredient in The Daily Solace Fluid has a specific job — and nothing made the cut unless it did that job better than the alternative.
          </p>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.65,
            color: "rgba(250,250,250,0.65)", marginBottom: "2rem",
          }}>
            Just five ingredients doing exactly what they were chosen to do. Nothing more, nothing less.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5" style={{ gap: "clamp(1.25rem, 3vw, 1.75rem)" }}>
            {[
              { name: "Olive Squalane", pct: "80%" },
              { name: "Niacinamide", pct: "14.9%" },
              { name: "Black Seed Oil", pct: "2%" },
              { name: "Vitamin E", pct: "3%" },
              { name: "Vanilla Extract", pct: "0.1%" },
            ].map(ing => (
              <div key={ing.name}>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "1.625rem", fontWeight: 600,
                  color: "#FAFAFA", lineHeight: 1, marginBottom: "0.375rem",
                }}>{ing.pct}</p>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.8125rem",
                  color: "rgba(250,250,250,0.55)",
                }}>{ing.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div style={{
        backgroundColor: "#FAFAFA", borderBottom: "1px solid #E5E5E2",
        padding: "clamp(2rem, 4vw, 3rem) clamp(1.5rem, 6vw, 6rem)",
      }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "clamp(1.5rem, 3vw, 2.5rem)" }}>
            {[
              { label: "UK Halal Certified", sub: "Independently audited" },
              { label: "Made in the UK", sub: "Formulated & manufactured" },
              { label: "Vegan & Cruelty-Free", sub: "No animal testing, ever" },
              { label: "Fragrance-Free", sub: "No synthetic perfumes" },
            ].map(c => (
              <div key={c.label}>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 600,
                  color: "#111111",
                  marginBottom: "0.25rem",
                }}>{c.label}</p>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#636360",
                }}>{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{
        backgroundColor: "#FFFFFF",
        padding: "clamp(3rem, 6vw, 4.5rem) clamp(1.5rem, 6vw, 6rem)",
        textAlign: "center",
      }}>
        <h2 style={{
          fontFamily: "var(--font-body)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
          fontWeight: 600, letterSpacing: "-0.03em", color: "#111111",
          marginBottom: "1.5rem", lineHeight: 1.1,
        }}>
          One bottle. Two rituals.
        </h2>
        <a href="/shop" className="btn btn-dark">
          Shop The Daily Solace Fluid
        </a>
      </div>

    </article>
  );
}
