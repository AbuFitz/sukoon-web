"use client";

import { useState } from "react";

const faqs = [
  { q: "How long does shipping take?", a: "UK orders ship within 1–2 business days and typically arrive within 3–5 business days. Free shipping is included on every order." },
  { q: "What ingredients are in the formula?", a: "Olive Squalane, Niacinamide (Vitamin B3), Black Seed Oil, and Vitamin E — four ingredients, chosen with intention. No water, fragrance, or filler oils." },
  { q: "Can I use it on my hairline as well as my face?", a: "Yes — it's engineered for both. Use a couple of drops on the face daily, and apply along the part-line weekly as a hairline treatment." },
  { q: "Is it suitable for sensitive skin?", a: "The formula is fragrance-free and formulated to be gentle, but we always recommend a patch test 24 hours before first full use." },
  { q: "Is it Halal certified?", a: "Yes, The Daily Solace Fluid is UK Halal Certified and formulated and made in the UK." },
  { q: "What's your returns policy?", a: "Unopened products can be returned within 30 days of delivery for a full refund. Reach out to our support team to start a return." },
  { q: "When will my order ship?", a: "All orders are processed and shipped from our UK facility within 1–2 business days of purchase." },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" aria-label="Frequently asked questions" style={{
      backgroundColor: "#FBF8F3",
      padding: "clamp(3.5rem, 8vw, 6rem) clamp(1.5rem, 6vw, 5rem)",
      borderTop: "1px solid #E8D4AE",
    }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 6vw, 3.5rem)" }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500,
            letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B7B5C", marginBottom: "1rem",
          }}>
            FAQ
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
            fontWeight: 400, letterSpacing: "-0.01em", color: "#2C2A1F",
          }}>
            Questions, answered.
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {faqs.map((item, i) => {
            const open = openIdx === i;
            return (
              <div key={item.q} style={{ borderBottom: "1px solid #E8D4AE" }}>
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                  style={{
                    width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                    gap: "1rem", background: "none", border: "none", cursor: "pointer", textAlign: "left",
                    padding: "1.25rem 0",
                    fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 600, color: "#2C2A1F",
                  }}
                >
                  {item.q}
                  <span aria-hidden style={{
                    flexShrink: 0, fontSize: "1.125rem", color: "#6B7B5C",
                    transform: open ? "rotate(45deg)" : "none", transition: "transform 0.25s ease",
                  }}>
                    +
                  </span>
                </button>
                <div style={{
                  maxHeight: open ? "240px" : "0px", overflow: "hidden",
                  transition: "max-height 0.35s ease",
                }}>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.75,
                    color: "#6B7B5C", paddingBottom: "1.25rem", maxWidth: "620px",
                  }}>
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
