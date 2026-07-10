"use client";

import { useState } from "react";

const faqs = [
  { q: "How long does shipping take?", a: "We pack and ship from the UK within 1–2 working days. You'll typically have it in 3–5 days. Free on every order, always." },
  { q: "What ingredients are in the formula?", a: "Olive Squalane, Niacinamide (Vitamin B3), Black Seed Oil, and Vitamin E. Four ingredients. Nothing else. No water, no fragrance, no fillers." },
  { q: "Can I use it on my hairline as well as my face?", a: "Yes — that's the whole point. A couple of drops on the face each morning. Along the part-line when your hairline needs it. One bottle, both cared for." },
  { q: "Is it suitable for sensitive skin?", a: "The formula is fragrance-free and made to be gentle. We still recommend a patch test 24 hours before first full use — just to be sure." },
  { q: "Is it Halal certified?", a: "Yes. UK Halal Certified, independently audited. Formulated and made in the UK." },
  { q: "What's your returns policy?", a: "Unopened, within 30 days of delivery. Full refund. Just get in touch and we'll sort it." },
  { q: "When will my order ship?", a: "Packed and shipped from the UK within 1–2 working days of your order." },
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
            letterSpacing: "0.2em", textTransform: "uppercase", color: "#98A47D", marginBottom: "1rem",
          }}>
            FAQ
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
            fontWeight: 400, letterSpacing: "-0.01em", color: "#2C2A1F",
          }}>
            Honest answers.
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
                    flexShrink: 0, fontSize: "1.125rem", color: "#98A47D",
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
                    color: "#98A47D", paddingBottom: "1.25rem", maxWidth: "620px",
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
