"use client";

import { Reveal } from "@/components/ui/Reveal";

export function ShopHero() {
  return (
    <section style={{
      backgroundColor: "#FFFFFF",
      padding: "clamp(3rem, 6vw, 4.5rem) clamp(1.25rem, 4vw, 3rem) clamp(2.5rem, 4vw, 3.5rem)",
      borderBottom: "1px solid #E3E3DF",
    }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <Reveal>
          <p style={{
            fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.6875rem",
            letterSpacing: "0.16em", textTransform: "uppercase", color: "#92928D",
            margin: "0 0 1rem",
          }}>
            All Products
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 style={{
            fontFamily: "var(--font-body)", fontWeight: 200,
            fontSize: "clamp(3rem, 6.5vw, 5.5rem)",
            letterSpacing: "-0.025em", color: "#111111", margin: 0, lineHeight: 0.98,
          }}>
            Shop Sukoon
          </h1>
        </Reveal>
      </div>
    </section>
  );
}
