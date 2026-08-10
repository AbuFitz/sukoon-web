"use client";

import Image from "next/image";
import Link from "next/link";
import { homepageImages } from "@/lib/homepage";

export function HeroSection() {
  return (
    <section
      aria-label="Hero"
      style={{
        position: "relative",
        backgroundColor: "#F5F5F3",
        overflow: "hidden",
        minHeight: "85vh",
        borderBottom: "1px solid #E3E3DF",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{
        maxWidth: 1320, margin: "0 auto", width: "100%",
        padding: "clamp(3rem, 6vw, 5rem) clamp(1.25rem, 4vw, 3rem)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(3rem, 6vw, 5rem)",
        alignItems: "center",
      }}>
        {/* Left — copy */}
        <div>
          <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>
            100% Waterless · Made in the UK
          </p>

          <h1 style={{
            fontFamily: "var(--font-body)",
            fontWeight: 200,
            fontSize: "clamp(2.75rem, 5.5vw, 5rem)",
            lineHeight: 0.98,
            letterSpacing: "-0.02em",
            color: "#111111",
            margin: "0 0 1.5rem",
          }}>
            One oil.<br />
            Your face<br />
            and hairline.
          </h1>

          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 1.25vw, 1.125rem)",
            lineHeight: 1.7,
            color: "#676764",
            maxWidth: 420,
            margin: "0 0 2.5rem",
          }}>
            The Daily Solace Fluid tackles acne, strengthens your skin barrier,
            and reverses friction-induced hairline thinning — all in under 60 seconds.
            Five ingredients. No fillers. No water.
          </p>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
            <a
              href="/shop"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 700,
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: "#FFFFFF", backgroundColor: "#111111",
                padding: "1rem 2.25rem",
                textDecoration: "none", border: "1px solid #111111",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#333333"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#111111"; }}
            >
              Shop Now
            </a>
            <Link
              href="/#ingredients"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 700,
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: "#111111", backgroundColor: "transparent",
                padding: "1rem 2.25rem",
                textDecoration: "none", border: "1px solid #E3E3DF",
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#111111"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E3E3DF"; }}
            >
              See the Formula
            </Link>
          </div>

          <div style={{ marginTop: "2.5rem", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            {["Vegan", "Cruelty Free", "Waterless", "5 Ingredients"].map(s => (
              <span key={s} style={{
                fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase", color: "#92928D",
              }}>
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Right — product image */}
        <div>
          <div style={{
            position: "relative",
            aspectRatio: "4 / 5",
            overflow: "hidden",
            backgroundColor: "#EAEAE8",
          }}>
            <Image
              src={homepageImages.hero}
              alt="Sukoon Daily Solace Fluid"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
