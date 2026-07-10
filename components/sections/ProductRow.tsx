"use client";

import Image from "next/image";
import { products } from "@/lib/products";

export function ProductRow() {
  return (
    <section
      id="shop"
      aria-label="Shop the Fluid"
      style={{
        backgroundColor: "#FBF8F3",
        padding: "clamp(3rem, 7vw, 6rem) clamp(1.5rem, 6vw, 5rem)",
        borderTop: "1px solid #E8D4AE",
      }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem",
          marginBottom: "clamp(2rem, 5vw, 3rem)",
        }}>
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#98A47D", marginBottom: "1rem" }}>
              Shop the Fluid
            </p>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.875rem, 4.5vw, 3.25rem)",
              fontWeight: 400, letterSpacing: "-0.015em", color: "#2C2A1F",
            }}>
              One formula. Choose your start.
            </h2>
          </div>
          <a href="/shop" style={{
            fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 500,
            letterSpacing: "0.1em", textTransform: "uppercase", color: "#2C2A1F", textDecoration: "underline",
            textUnderlineOffset: "3px",
          }}>
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "clamp(1.5rem, 3vw, 2rem)" }}>
          {products.map((p) => (
            <div key={p.slug} style={{ display: "flex", flexDirection: "column" }}>
              <a href="/shop" style={{ position: "relative", aspectRatio: "4 / 5", backgroundColor: "#E8D4AE", marginBottom: "1.25rem", display: "block" }}>
                <Image src={p.src} alt={p.name} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                <span style={{
                  position: "absolute", top: "0.875rem", left: "0.875rem",
                  fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "#2C2A1F", backgroundColor: "#F7F1E4", padding: "0.3rem 0.625rem",
                }}>
                  {p.tag}
                </span>
              </a>

              <h3 style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 600, color: "#2C2A1F", marginBottom: "0.25rem" }}>
                {p.name}
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "#98A47D", marginBottom: "0.75rem" }}>
                {p.size}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 600, color: "#2C2A1F", marginBottom: "1.25rem" }}>
                {p.price}
              </p>

              <a href="#waitlist" style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "#2C2A1F", textDecoration: "none",
                border: "1px solid #2C2A1F", padding: "0.875rem 1.25rem",
                transition: "background 0.25s, color 0.25s",
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "#2C2A1F"; el.style.color = "#F7F1E4"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "transparent"; el.style.color = "#2C2A1F"; }}
              >
                Notify Me
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
