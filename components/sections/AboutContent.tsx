"use client";

import Image from "next/image";
import { homepageImages } from "@/lib/homepage";

export function AboutContent() {
  return (
    <article className="container" style={{ paddingTop: "clamp(1rem, 2vw, 1.5rem)", paddingBottom: "clamp(1rem, 2vw, 1.25rem)" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(1rem, 2vw, 1.25rem)" }}>

        {/* Hero */}
        <div className="card" style={{
          padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 5vw, 3.5rem)",
        }}>
          <div style={{ maxWidth: "780px" }}>
            <span className="eyebrow">About Sukoon</span>
            <h1 style={{
              fontFamily: "var(--font-body)", fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
              fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.035em", color: "#111111",
              margin: "0.75rem 0 clamp(1.5rem, 3vw, 2rem)",
            }}>
              The skincare industry built everything for your face. We built one thing for what it missed.
            </h1>
            <div className="card-flat" style={{ padding: "1.25rem 1.5rem", maxWidth: "560px" }}>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "1.0625rem", lineHeight: 1.7,
                color: "#5C5C5C", margin: 0,
              }}>
                سكون. In Arabic, it means stillness. The moment the day slows down, the noise drops away, and you return to yourself. That&rsquo;s the feeling we wanted to bottle — not just for your face, but for every part of your ritual that never had a product made for it.
              </p>
            </div>
          </div>
        </div>

        {/* Split: Image + The Problem */}
        <div className="card about-split" style={{ display: "grid", gridTemplateColumns: "5fr 7fr", overflow: "hidden" }}>
          <div style={{ position: "relative", minHeight: "clamp(320px, 45vw, 520px)", backgroundColor: "#EFEFEF" }}>
            <Image
              src={homepageImages.story}
              alt="Applying the Daily Solace Fluid"
              fill sizes="(max-width: 768px) 100vw, 42vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div style={{
            display: "flex", flexDirection: "column", justifyContent: "center",
            padding: "clamp(2rem, 5vw, 3.5rem)",
          }}>
            <h2 style={{
              fontFamily: "var(--font-body)", fontSize: "clamp(1.375rem, 2.4vw, 1.875rem)",
              fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", color: "#111111",
              margin: "0 0 1.25rem",
            }}>
              Millions of people are managing hairline thinning with products that were never made for them.
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.75, color: "#5C5C5C",
              margin: "0 0 1rem",
            }}>
              Traction alopecia — hairline thinning caused by daily friction and tension from tight styles, braids, weaves, and ponytails — is well-documented. The products addressing it are not. Most hairline treatments are thick, heavy, and scented for overnight use. Most face oils ignore the hairline entirely.
            </p>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.75, color: "#5C5C5C", margin: 0,
            }}>
              The Daily Solace Fluid was built to exist in that gap. Lightweight enough for daily face use. Active enough to support the hairline. One formula. Two rituals.
            </p>
          </div>
        </div>

        {/* The Formula Philosophy */}
        <div className="card" style={{ padding: "clamp(2rem, 5vw, 3rem) clamp(1.5rem, 5vw, 3rem)" }}>
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <span className="eyebrow">The Formula</span>
            <h2 style={{
              fontFamily: "var(--font-body)", fontSize: "clamp(1.5rem, 2.6vw, 2.125rem)",
              fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em",
              color: "#111111", margin: "0.75rem 0 clamp(1.25rem, 3vw, 1.75rem)",
            }}>
              Five ingredients. Nothing extra.
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.7,
              color: "#5C5C5C", marginBottom: "1rem",
            }}>
              We didn&rsquo;t want a formula that impressed with its length. We wanted one that was impossible to argue with. Every ingredient in The Daily Solace Fluid has a specific job — and nothing made the cut unless it did that job better than the alternative.
            </p>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.7,
              color: "#5C5C5C", marginBottom: "1.75rem",
            }}>
              Just five ingredients doing exactly what they were chosen to do. Nothing more, nothing less.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5" style={{ gap: "0.75rem" }}>
              {[
                { name: "Olive Squalane", pct: "80%" },
                { name: "Niacinamide", pct: "14.9%" },
                { name: "Black Seed Oil", pct: "2%" },
                { name: "Vitamin E", pct: "3%" },
                { name: "Vanilla Extract", pct: "0.1%" },
              ].map(ing => (
                <div key={ing.name} className="card-flat" style={{ padding: "1rem" }}>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "1.375rem", fontWeight: 700,
                    color: "#111111", lineHeight: 1, marginBottom: "0.375rem",
                  }}>{ing.pct}</p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "0.75rem",
                    color: "#5C5C5C", margin: 0,
                  }}>{ing.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "clamp(1rem, 2vw, 1.25rem)" }}>
          {[
            { label: "UK Halal Certified", sub: "Independently audited" },
            { label: "Made in the UK", sub: "Formulated & manufactured" },
            { label: "Vegan & Cruelty-Free", sub: "No animal testing, ever" },
            { label: "Fragrance-Free", sub: "No synthetic perfumes" },
          ].map(c => (
            <div key={c.label} className="card" style={{ padding: "1.25rem" }}>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 700,
                color: "#111111", margin: "0 0 0.25rem",
              }}>{c.label}</p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#5C5C5C", margin: 0,
              }}>{c.sub}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="card" style={{
          padding: "clamp(2.5rem, 5vw, 3.5rem)",
          textAlign: "center",
          backgroundColor: "#EBEBEB",
        }}>
          <h2 style={{
            fontFamily: "var(--font-body)", fontSize: "clamp(1.5rem, 2.6vw, 2.125rem)",
            fontWeight: 700, letterSpacing: "-0.025em", color: "#111111",
            margin: "0 0 1.5rem", lineHeight: 1.15,
          }}>
            One bottle. Two rituals.
          </h2>
          <a href="/shop" className="btn btn-dark">
            Shop The Daily Solace Fluid
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-split { grid-template-columns: 1fr !important; }
          .about-split > div:first-child { aspect-ratio: 4 / 3; min-height: 0 !important; }
        }
      `}</style>
    </article>
  );
}
