"use client";

import Image from "next/image";

export function AboutContent() {
  return (
    <article>

      {/* Hero */}
      <div style={{
        backgroundColor: "#F5F5F3",
        padding: "clamp(4rem, 9vw, 7rem) clamp(2rem, 7vw, 7rem) clamp(3rem, 7vw, 5rem)",
        borderBottom: "1px solid #E3E3DF",
      }}>
        <div style={{ maxWidth: "780px" }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 700,
            letterSpacing: "0.25em", textTransform: "uppercase", color: "#92928D",
            marginBottom: "1.5rem",
          }}>
            About Sukoon
          </p>
          <h1 style={{
            fontFamily: "var(--font-body)", fontSize: "clamp(2.5rem, 6vw, 4.25rem)",
            fontWeight: 200, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#111111",
            marginBottom: "clamp(1.5rem, 4vw, 2.25rem)",
          }}>
            The skincare industry built<br />everything for your face.<br />
            We built one thing<br />for what it missed.
          </h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85,
            color: "#676764", maxWidth: "560px",
          }}>
            سكون. In Arabic, it means stillness. The moment the day slows down, the noise drops away, and you return to yourself. That&rsquo;s the feeling we wanted to bottle — not just for your face, but for every part of your ritual that never had a product made for it.
          </p>
        </div>
      </div>

      {/* Split: Image + The Problem */}
      <div className="flex flex-col md:grid md:grid-cols-2" style={{ backgroundColor: "#FFFFFF" }}>
        <div style={{ position: "relative", minHeight: "clamp(360px, 60vw, 680px)", backgroundColor: "#F0F0EE" }}>
          <Image
            src="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=1200&q=85&fit=crop"
            alt="Close portrait"
            fill sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(3rem, 8vw, 7rem) clamp(2rem, 7vw, 6rem)",
        }}>
          <h2 style={{
            fontFamily: "var(--font-body)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 300, lineHeight: 1.2, color: "#111111",
            marginBottom: "clamp(1.5rem, 4vw, 2rem)",
          }}>
            Millions of people are managing hairline thinning with products that were never made for them.
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85, color: "#676764",
            marginBottom: "1.25rem",
          }}>
            Traction alopecia — hairline thinning caused by daily friction and tension from tight styles, braids, weaves, and ponytails — is well-documented. The products addressing it are not. Most hairline treatments are thick, heavy, and scented for overnight use. Most face oils ignore the hairline entirely.
          </p>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85, color: "#676764",
          }}>
            The Daily Solace Fluid was built to exist in that gap. Lightweight enough for daily face use. Active enough to support the hairline. One formula. Two rituals.
          </p>
        </div>
      </div>

      {/* The Formula Philosophy */}
      <div style={{
        backgroundColor: "#111111",
        padding: "clamp(4rem, 9vw, 7rem) clamp(2rem, 7vw, 7rem)",
      }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--font-body)", fontSize: "clamp(1.875rem, 4vw, 3rem)",
            fontWeight: 200, lineHeight: 1.15, letterSpacing: "-0.01em",
            color: "#F5F5F3", marginBottom: "clamp(1.5rem, 4vw, 2rem)",
          }}>
            Five ingredients. Nothing extra.
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85,
            color: "rgba(245,245,243,0.65)", marginBottom: "1.25rem",
          }}>
            We didn&rsquo;t want a formula that impressed with its length. We wanted one that was impossible to argue with. Every ingredient in The Daily Solace Fluid has a specific job — and nothing made the cut unless it did that job better than the alternative.
          </p>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85,
            color: "rgba(245,245,243,0.65)", marginBottom: "2.5rem",
          }}>
            Just five ingredients doing exactly what they were chosen to do. Nothing more, nothing less.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5" style={{ gap: "clamp(1.5rem, 3vw, 2rem)" }}>
            {[
              { name: "Olive Squalane", pct: "80%" },
              { name: "Niacinamide", pct: "14.9%" },
              { name: "Black Seed Oil", pct: "2%" },
              { name: "Vitamin E", pct: "3%" },
              { name: "Vanilla Extract", pct: "0.1%" },
            ].map(ing => (
              <div key={ing.name}>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "2rem", fontWeight: 200,
                  color: "#F5F5F3", lineHeight: 1, marginBottom: "0.5rem",
                }}>{ing.pct}</p>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.8125rem",
                  color: "rgba(245,245,243,0.55)", letterSpacing: "0.01em",
                }}>{ing.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div style={{
        backgroundColor: "#F5F5F3", borderBottom: "1px solid #E3E3DF",
        padding: "clamp(2.5rem, 5vw, 4rem) clamp(2rem, 7vw, 7rem)",
      }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "clamp(2rem, 4vw, 3rem)" }}>
            {[
              { label: "UK Halal Certified", sub: "Independently audited" },
              { label: "Made in the UK", sub: "Formulated & manufactured" },
              { label: "Vegan & Cruelty-Free", sub: "No animal testing, ever" },
              { label: "Fragrance-Free", sub: "No synthetic perfumes" },
            ].map(c => (
              <div key={c.label}>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase", color: "#111111",
                  marginBottom: "0.375rem",
                }}>{c.label}</p>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#676764",
                }}>{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{
        backgroundColor: "#FFFFFF",
        padding: "clamp(4rem, 8vw, 6rem) clamp(2rem, 7vw, 7rem)",
        textAlign: "center",
      }}>
        <h2 style={{
          fontFamily: "var(--font-body)", fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 200, letterSpacing: "-0.015em", color: "#111111",
          marginBottom: "2rem", lineHeight: 1.15,
        }}>
          One bottle.<br />Two rituals.
        </h2>
        <a href="/shop" style={{
          display: "inline-flex", alignItems: "center", gap: "0.625rem",
          fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 700,
          letterSpacing: "0.16em", textTransform: "uppercase",
          color: "#FFFFFF", backgroundColor: "#111111",
          padding: "1rem 2.25rem", textDecoration: "none",
          border: "1px solid #111111",
          transition: "background-color 0.25s ease",
        }}
        >
          Shop The Daily Solace Fluid
        </a>
      </div>

    </article>
  );
}
