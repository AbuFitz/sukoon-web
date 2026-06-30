"use client";

import Image from "next/image";
import { useState } from "react";
import { products } from "@/lib/products";

const INK  = "#2C2A1F";
const SAGE = "#6B7B5C";
const LINE = "#E8D4AE";

const highlights = [
  "80% Olive Squalane — lightweight, sinks in under 60 seconds",
  "14.9% Niacinamide — strengthens barrier, fades marks",
  "2% Black Seed Oil — calms follicle inflammation at the scalp",
  "One bottle, two rituals: face in the morning, hairline at night",
];

export function ProductDetailGrid() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = products[activeIdx];

  return (
    <section aria-label="Product detail" style={{
      backgroundColor: "#FBF8F3",
      padding: "clamp(2rem, 5vw, 4rem) clamp(1.5rem, 6vw, 5rem) clamp(3.5rem, 8vw, 6rem)",
    }}>
      <div className="grid grid-cols-1 md:grid-cols-2" style={{
        maxWidth: "1320px", margin: "0 auto", gap: "clamp(2.5rem, 6vw, 5rem)", alignItems: "start",
      }}>
        {/* Image */}
        <div style={{
          position: "relative", aspectRatio: "4 / 5", backgroundColor: "#E8D4AE",
          maxWidth: "560px",
        }}>
          <Image src={active.src} alt={active.name} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
          <span style={{
            position: "absolute", top: "1rem", left: "1rem",
            fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: INK, backgroundColor: "#F7F1E4", padding: "0.3rem 0.625rem",
          }}>
            {active.tag}
          </span>
        </div>

        {/* Details */}
        <div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.625rem, 3.5vw, 2.25rem)",
            fontWeight: 400, letterSpacing: "-0.015em", color: INK, marginBottom: "0.625rem",
          }}>
            The Daily Solace Fluid
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.25rem", fontWeight: 600, color: INK, marginBottom: "1.75rem" }}>
            {active.price}
          </p>

          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.75, color: SAGE, marginBottom: "2rem", maxWidth: "440px" }}>
            {active.description}
          </p>

          {/* Size selector */}
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600, color: INK,
            letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.875rem",
          }}>
            Choose your start
          </p>
          <div role="radiogroup" aria-label="Size" style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.25rem" }}>
            {products.map((p, i) => {
              const isActive = i === activeIdx;
              return (
                <button
                  key={p.slug}
                  role="radio"
                  aria-checked={isActive}
                  onClick={() => setActiveIdx(i)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    width: "100%", textAlign: "left", cursor: "pointer",
                    padding: "0.9375rem 1.125rem",
                    border: `1.5px solid ${isActive ? INK : LINE}`,
                    backgroundColor: isActive ? "#FFFFFF" : "transparent",
                    transition: "border-color 0.2s ease",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span aria-hidden style={{
                      width: 16, height: 16, borderRadius: "50%",
                      border: `1.5px solid ${isActive ? INK : LINE}`,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      {isActive && <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: INK }} />}
                    </span>
                    <span>
                      <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 600, color: INK }}>
                        {p.size}
                      </span>
                      <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "0.75rem", color: SAGE }}>
                        {p.tag}
                      </span>
                    </span>
                  </span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 600, color: INK }}>
                    {p.price}
                  </span>
                </button>
              );
            })}
          </div>

          <a href="/#waitlist" style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 500,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "#F7F1E4", textDecoration: "none",
            backgroundColor: INK, padding: "1.0625rem", marginBottom: "2.25rem",
            transition: "background 0.25s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#3F4A36"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = INK; }}
          >
            Notify Me When Live
          </a>

          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {highlights.map((h) => (
              <li key={h} style={{
                display: "flex", alignItems: "flex-start", gap: "0.625rem",
                fontFamily: "var(--font-body)", fontSize: "0.8125rem", lineHeight: 1.6, color: SAGE,
              }}>
                <span aria-hidden style={{ color: INK, lineHeight: 1.4 }}>—</span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
