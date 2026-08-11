"use client";

import { useState } from "react";

const TEXT   = "#0D0F10";
const MUTED  = "#8A9296";
const BORDER = "#DCE1E3";
const CANVAS = "#F5F7F8";

const sections = [
  {
    heading: "The Product",
    items: [
      { q: "What exactly is The Daily Solace Fluid?", a: "A concentrated oil nectar — 30ml of five active ingredients, nothing else. It works on two areas most products ignore: your face and your hairline. No fragrance, no filler oils." },
      { q: "What ingredients are in the formula?", a: "Olive Squalane (80%), Niacinamide / Vitamin B3 (14.9%), Black Seed Oil (2%), Vitamin E (3%), and Vanilla Extract (0.1%). That's the entire formula. Every percentage is there for a reason." },
      { q: "Does it smell?", a: "Barely. The Black Seed Oil is vacuum-steam-refined to remove its sharp medicinal scent. A trace of vanilla extract rounds the base. Most people describe it as 'clean' or 'almost nothing.'" },
      { q: "Is it suitable for sensitive skin?", a: "The formula is fragrance-free and built to be gentle. We still recommend a patch test 24 hours before first full use — just to be sure." },
    ],
  },
  {
    heading: "Using It",
    items: [
      { q: "How do I use it on my face?", a: "Two drops. Warm between your palms. Press into skin. Morning or evening — or both. It sinks in under sixty seconds and works as a standalone moisturiser for most skin types." },
      { q: "How do I use it on my hairline?", a: "A few drops along the part-line. Massage slowly into the roots. Weekly is enough — more if your hairline is under heavy daily strain from tight styles or under-caps." },
      { q: "Can I use it every day?", a: "Yes. It's designed for daily face use. For the hairline, weekly or as needed." },
      { q: "How much product do I use per application?", a: "Two to three drops for the face. One to two for the hairline. The dropper makes it easy to control. Less is more — it goes a long way." },
    ],
  },
  {
    heading: "Certification & Ethics",
    items: [
      { q: "Is it Halal certified?", a: "Yes. UK Halal Certified, independently audited. The certification stamp is on every bottle." },
      { q: "Is it vegan and cruelty-free?", a: "Yes to both. No animal-derived ingredients, no animal testing — at any stage of production." },
      { q: "Where is it made?", a: "Formulated and manufactured in the United Kingdom." },
    ],
  },
  {
    heading: "Orders & Shipping",
    items: [
      { q: "How long does shipping take?", a: "We pack and ship from the UK within 1–2 working days. You'll typically have it in 3–5 working days. Free on every order, always." },
      { q: "Do you ship internationally?", a: "We're shipping UK-wide for launch. International shipping is coming — sign up to the Sukoon Circle to hear first." },
      { q: "What's your returns policy?", a: "Unopened, within 30 days of delivery. Full refund. Just get in touch and we'll sort it." },
      { q: "Can I track my order?", a: "Yes — you'll receive a tracking link by email once your order has been dispatched." },
    ],
  },
];

export function FAQContent() {
  const [openKey, setOpenKey] = useState<string | null>("The Product-0");

  return (
    <section aria-label="Frequently asked questions" className="container" style={{ paddingTop: "clamp(1rem, 2vw, 1.5rem)", paddingBottom: "clamp(1rem, 2vw, 1.25rem)" }}>
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>

        <h1 style={{
          fontFamily: "var(--font-body)", fontSize: "clamp(2rem, 4.5vw, 3rem)",
          fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1.0, color: TEXT,
          margin: "0 0 clamp(1.5rem, 3vw, 2rem)",
        }}>
          Honest answers.
        </h1>

        <div style={{ backgroundColor: CANVAS, borderRadius: "var(--radius-2xl)", overflow: "hidden" }}>
          {sections.map((sec, si) => (
            <div key={sec.heading} style={{
              padding: "clamp(1.5rem, 3vw, 2rem) clamp(1.5rem, 3vw, 2rem)",
              borderTop: si > 0 ? `1px solid ${BORDER}` : "none",
            }}>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 700,
                letterSpacing: "0.06em", textTransform: "uppercase", color: MUTED,
                margin: "0 0 0.5rem",
              }}>
                {sec.heading}
              </p>
              {sec.items.map((item, i) => {
                const key = `${sec.heading}-${i}`;
                const open = openKey === key;
                return (
                  <div key={item.q} style={{ borderTop: `1px solid ${BORDER}` }}>
                    <button
                      onClick={() => setOpenKey(open ? null : key)}
                      aria-expanded={open}
                      style={{
                        width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                        gap: "1rem", background: "none", border: "none", cursor: "pointer", textAlign: "left",
                        padding: "1.125rem 0",
                        fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 700, color: TEXT,
                      }}
                    >
                      {item.q}
                      <span aria-hidden style={{
                        flexShrink: 0, fontSize: "1.125rem", color: MUTED,
                        display: "inline-block",
                        transform: open ? "rotate(45deg)" : "none", transition: "transform 0.25s ease",
                      }}>+</span>
                    </button>
                    <div style={{
                      maxHeight: open ? "400px" : "0px", overflow: "hidden",
                      transition: "max-height 0.35s ease",
                    }}>
                      <p style={{
                        fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.7,
                        color: "#4A5256", paddingBottom: "1.25rem", maxWidth: "660px", margin: 0,
                      }}>
                        {item.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}

          <div style={{ borderTop: `1px solid ${BORDER}`, padding: "clamp(1.5rem, 3vw, 2rem)" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.75, color: TEXT, margin: 0 }}>
              Didn&rsquo;t find what you were looking for?{" "}
              <a href="mailto:hello@sukoon.co.uk" style={{ color: TEXT, fontWeight: 700, textDecoration: "underline", textUnderlineOffset: "2px" }}>
                Get in touch
              </a>{" "}
              — we reply within one working day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
