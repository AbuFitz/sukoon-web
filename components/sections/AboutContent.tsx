"use client";

import Image from "next/image";
import { homepageImages, ingredients } from "@/lib/homepage";

const TEXT   = "#0D0F10";
const MUTED  = "#8A9296";
const BORDER = "#DCE1E3";
const CANVAS = "#F5F7F8";

const CERTIFICATIONS = [
  { label: "UK Halal Certified", sub: "Independently audited" },
  { label: "Made in the UK", sub: "Formulated & manufactured" },
  { label: "Vegan & Cruelty-Free", sub: "No animal testing, ever" },
  { label: "Fragrance-Free", sub: "No synthetic perfumes" },
];

export function AboutContent() {
  return (
    <article className="container" style={{ paddingTop: "clamp(1rem, 2vw, 1.5rem)", paddingBottom: "clamp(1rem, 2vw, 1.25rem)" }}>
      <div style={{ backgroundColor: CANVAS, borderRadius: "var(--radius-2xl)", overflow: "hidden", marginBottom: "clamp(1rem, 2vw, 1.25rem)" }}>

        {/* Intro */}
        <div style={{ padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 5vw, 3.5rem)" }}>
          <div style={{ maxWidth: "780px" }}>
            <h1 style={{
              fontFamily: "var(--font-body)", fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
              fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.035em", color: TEXT,
              margin: "0 0 clamp(1.5rem, 3vw, 2rem)",
            }}>
              The skincare industry built everything for your face. We built one thing for what it missed.
            </h1>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "1.0625rem", lineHeight: 1.7,
              color: "#4A5256", margin: 0, maxWidth: "560px",
              borderLeft: `2px solid ${BORDER}`, paddingLeft: "1.25rem",
            }}>
              سكون. In Arabic, it means stillness. The moment the day slows down, the noise drops away, and you return to yourself. That&rsquo;s the feeling we wanted to bottle — not just for your face, but for every part of your ritual that never had a product made for it.
            </p>
          </div>
        </div>

        {/* Split: Image + The Problem */}
        <div className="about-split" style={{ borderTop: `1px solid ${BORDER}`, display: "grid", gridTemplateColumns: "5fr 7fr" }}>
          <div style={{ position: "relative", minHeight: "clamp(320px, 45vw, 480px)", backgroundColor: "#ECEFF1" }}>
            <Image
              src={homepageImages.story}
              alt="Applying the Daily Solace Fluid"
              fill sizes="(max-width: 768px) 100vw, 42vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div style={{
            display: "flex", flexDirection: "column", justifyContent: "center",
            padding: "clamp(2rem, 5vw, 3.5rem)", borderLeft: `1px solid ${BORDER}`,
          }}>
            <h2 style={{
              fontFamily: "var(--font-body)", fontSize: "clamp(1.375rem, 2.4vw, 1.875rem)",
              fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", color: TEXT,
              margin: "0 0 1.25rem",
            }}>
              Millions of people are managing hairline thinning with products that were never made for them.
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.75, color: "#4A5256",
              margin: "0 0 1rem",
            }}>
              Traction alopecia — hairline thinning caused by daily friction and tension from tight styles, braids, weaves, and ponytails — is well-documented. The products addressing it are not. Most hairline treatments are thick, heavy, and scented for overnight use. Most face oils ignore the hairline entirely.
            </p>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.75, color: "#4A5256", margin: 0,
            }}>
              The Daily Solace Fluid was built to exist in that gap. Lightweight enough for daily face use. Active enough to support the hairline. One formula. Two rituals.
            </p>
          </div>
        </div>

        {/* The Formula Philosophy */}
        <div style={{ borderTop: `1px solid ${BORDER}`, padding: "clamp(2rem, 5vw, 3rem) clamp(1.5rem, 5vw, 3rem) clamp(1.5rem, 3vw, 2rem)" }}>
          <h2 style={{
            fontFamily: "var(--font-body)", fontSize: "clamp(1.5rem, 2.6vw, 2.125rem)",
            fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em",
            color: TEXT, margin: "0 0 0.875rem",
          }}>
            Five ingredients. Nothing extra.
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.7,
            color: "#4A5256", margin: 0, maxWidth: 640,
          }}>
            We didn&rsquo;t want a formula that impressed with its length. We wanted one that was impossible to argue with — every ingredient has a specific job, and nothing made the cut unless it did that job better than the alternative.
          </p>
        </div>
        <div className="about-ing-grid" style={{ borderTop: `1px solid ${BORDER}` }}>
          {ingredients.map((ing, i) => (
            <div key={ing.name} className="about-ing-cell" data-i={i} style={{ padding: "clamp(1.125rem, 2.5vw, 1.75rem) clamp(1.125rem, 2.5vw, 1.5rem)" }}>
              <p style={{
                fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "1.375rem",
                letterSpacing: "-0.02em", color: TEXT, margin: "0 0 0.375rem",
              }}>
                {ing.percent}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.875rem", color: TEXT, margin: "0 0 0.125rem" }}>
                {ing.name}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", lineHeight: 1.45, color: MUTED, margin: 0 }}>
                {ing.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="about-cert-row" style={{ borderTop: `1px solid ${BORDER}`, display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {CERTIFICATIONS.map((c, i) => (
            <div key={c.label} style={{
              padding: "clamp(1.25rem, 2.5vw, 1.75rem)",
              borderLeft: i > 0 ? `1px solid ${BORDER}` : "none",
            }}>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 700,
                color: TEXT, margin: "0 0 0.25rem",
              }}>{c.label}</p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#4A5256", margin: 0,
              }}>{c.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="card" style={{
        padding: "clamp(2.5rem, 5vw, 3.5rem)",
        textAlign: "center",
        backgroundColor: "#E7EBED",
      }}>
        <h2 style={{
          fontFamily: "var(--font-body)", fontSize: "clamp(1.5rem, 2.6vw, 2.125rem)",
          fontWeight: 700, letterSpacing: "-0.025em", color: TEXT,
          margin: "0 0 1.5rem", lineHeight: 1.15,
        }}>
          One bottle. Two rituals.
        </h2>
        <a href="/shop" className="btn btn-dark">
          Shop The Daily Solace Fluid
        </a>
      </div>

      <style>{`
        .about-ing-grid { display: grid; grid-template-columns: repeat(5, 1fr); }
        .about-ing-cell:not(:last-child) { border-right: 1px solid ${BORDER}; }
        @media (max-width: 900px) {
          .about-split { grid-template-columns: 1fr !important; }
          .about-split > div:first-child { aspect-ratio: 4 / 3; min-height: 0 !important; }
          .about-split > div:last-child { border-left: none !important; border-top: 1px solid ${BORDER}; }
          .about-ing-grid { grid-template-columns: repeat(2, 1fr); }
          .about-ing-cell:not(:last-child) { border-right: 1px solid ${BORDER}; }
          .about-ing-cell:nth-child(even) { border-right: none !important; }
          .about-ing-cell:nth-child(n + 3) { border-top: 1px solid ${BORDER}; }
          .about-cert-row { grid-template-columns: repeat(2, 1fr) !important; }
          .about-cert-row > div:nth-child(even) { border-left: none !important; }
          .about-cert-row > div:nth-child(n + 3) { border-top: 1px solid ${BORDER}; }
        }
        @media (max-width: 560px) {
          .about-ing-grid { grid-template-columns: 1fr; }
          .about-ing-cell { border-right: none !important; }
          .about-ing-cell:not(:first-child) { border-top: 1px solid ${BORDER}; }
          .about-cert-row { grid-template-columns: 1fr !important; }
          .about-cert-row > div { border-left: none !important; }
          .about-cert-row > div:not(:first-child) { border-top: 1px solid ${BORDER}; }
        }
      `}</style>
    </article>
  );
}
