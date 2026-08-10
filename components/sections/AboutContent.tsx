"use client";

import Image from "next/image";
import { homepageImages } from "@/lib/homepage";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

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
          <Reveal>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 700,
              letterSpacing: "0.25em", textTransform: "uppercase", color: "#92928D",
              marginBottom: "1.5rem",
            }}>
              About Sukoon
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 style={{
              fontFamily: "var(--font-body)", fontSize: "clamp(2.75rem, 7vw, 5.25rem)",
              fontWeight: 200, lineHeight: 1.0, letterSpacing: "-0.025em", color: "#111111",
              marginBottom: "clamp(1.5rem, 4vw, 2.25rem)",
            }}>
              The skincare industry built<br />everything for your face.<br />
              We built one thing<br />for what it missed.
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85,
              color: "#676764", maxWidth: "560px",
            }}>
              سكون. In Arabic, it means stillness. The moment the day slows down, the noise drops away, and you return to yourself. That&rsquo;s the feeling we wanted to bottle — not just for your face, but for every part of your ritual that never had a product made for it.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Split: Image + The Problem */}
      <div className="flex flex-col md:grid md:grid-cols-2" style={{ backgroundColor: "#FFFFFF" }}>
        <Reveal y={0} className="about-image" style={{ position: "relative", minHeight: "clamp(360px, 60vw, 680px)", backgroundColor: "#F0F0EE" }}>
          <Image
            src={homepageImages.story}
            alt="Applying the Daily Solace Fluid"
            fill sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </Reveal>
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(3rem, 8vw, 7rem) clamp(2rem, 7vw, 6rem)",
        }}>
          <Reveal>
            <h2 style={{
              fontFamily: "var(--font-body)", fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
              fontWeight: 200, lineHeight: 1.15, color: "#111111",
              marginBottom: "clamp(1.5rem, 4vw, 2rem)",
            }}>
              Millions of people are managing hairline thinning with products that were never made for them.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85, color: "#676764",
              marginBottom: "1.25rem",
            }}>
              Traction alopecia — hairline thinning caused by daily friction and tension from tight styles, braids, weaves, and ponytails — is well-documented. The products addressing it are not. Most hairline treatments are thick, heavy, and scented for overnight use. Most face oils ignore the hairline entirely.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85, color: "#676764",
            }}>
              The Daily Solace Fluid was built to exist in that gap. Lightweight enough for daily face use. Active enough to support the hairline. One formula. Two rituals.
            </p>
          </Reveal>
        </div>
      </div>

      {/* The Formula Philosophy */}
      <div style={{
        backgroundColor: "#111111",
        padding: "clamp(4rem, 9vw, 7rem) clamp(2rem, 7vw, 7rem)",
      }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <Reveal>
            <h2 style={{
              fontFamily: "var(--font-body)", fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              fontWeight: 200, lineHeight: 1.1, letterSpacing: "-0.02em",
              color: "#F5F5F3", marginBottom: "clamp(1.5rem, 4vw, 2rem)",
            }}>
              Five ingredients. Nothing extra.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85,
              color: "rgba(245,245,243,0.65)", marginBottom: "1.25rem",
            }}>
              We didn&rsquo;t want a formula that impressed with its length. We wanted one that was impossible to argue with. Every ingredient in The Daily Solace Fluid has a specific job — and nothing made the cut unless it did that job better than the alternative.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85,
              color: "rgba(245,245,243,0.65)", marginBottom: "2.5rem",
            }}>
              Just five ingredients doing exactly what they were chosen to do. Nothing more, nothing less.
            </p>
          </Reveal>
          <RevealGroup className="grid grid-cols-2 md:grid-cols-5" style={{ gap: "clamp(1.5rem, 3vw, 2rem)" }} stagger={0.07}>
            {[
              { name: "Olive Squalane", pct: "80%" },
              { name: "Niacinamide", pct: "14.9%" },
              { name: "Black Seed Oil", pct: "2%" },
              { name: "Vitamin E", pct: "3%" },
              { name: "Vanilla Extract", pct: "0.1%" },
            ].map(ing => (
              <RevealItem key={ing.name} y={14}>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "2.25rem", fontWeight: 200,
                  color: "#F5F5F3", lineHeight: 1, marginBottom: "0.5rem",
                }}>{ing.pct}</p>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.8125rem",
                  color: "rgba(245,245,243,0.55)", letterSpacing: "0.01em",
                }}>{ing.name}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>

      {/* Certifications */}
      <div style={{
        backgroundColor: "#F5F5F3", borderBottom: "1px solid #E3E3DF",
        padding: "clamp(2.5rem, 5vw, 4rem) clamp(2rem, 7vw, 7rem)",
      }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <RevealGroup className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "clamp(2rem, 4vw, 3rem)" }} stagger={0.06}>
            {[
              { label: "UK Halal Certified", sub: "Independently audited" },
              { label: "Made in the UK", sub: "Formulated & manufactured" },
              { label: "Vegan & Cruelty-Free", sub: "No animal testing, ever" },
              { label: "Fragrance-Free", sub: "No synthetic perfumes" },
            ].map(c => (
              <RevealItem key={c.label} y={12}>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase", color: "#111111",
                  marginBottom: "0.375rem",
                }}>{c.label}</p>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#676764",
                }}>{c.sub}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>

      {/* CTA */}
      <div style={{
        backgroundColor: "#FFFFFF",
        padding: "clamp(4rem, 8vw, 6rem) clamp(2rem, 7vw, 7rem)",
        textAlign: "center",
      }}>
        <Reveal>
          <h2 style={{
            fontFamily: "var(--font-body)", fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
            fontWeight: 200, letterSpacing: "-0.02em", color: "#111111",
            marginBottom: "2rem", lineHeight: 1.1,
          }}>
            One bottle.<br />Two rituals.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <a href="/shop" className="magnetic-btn magnetic-btn--dark">
            <span>Shop The Daily Solace Fluid</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </Reveal>
      </div>

    </article>
  );
}
