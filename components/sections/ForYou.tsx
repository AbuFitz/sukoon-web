"use client";

import Image from "next/image";

const cards = [
  {
    eyebrow: "For the tight-style wearer",
    headline: "Your hairline has been waiting for this.",
    body: "Braids, weaves, ponytails, cornrows — daily tension at the hairline is cumulative and quiet. The thinning it causes is documented. The product for it wasn't until now.",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=85&fit=crop",
  },
  {
    eyebrow: "For the minimalist",
    headline: "One bottle. The whole ritual.",
    body: "No ten-step routine. No separate hairline product. Sixty seconds and it's working. The Daily Solace Fluid is all you need.",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=85&fit=crop",
  },
  {
    eyebrow: "For the conscious buyer",
    headline: "Everything in it is there for a reason.",
    body: "Five ingredients. UK Halal Certified. Made in Britain. Nothing in this formula is there by accident or to pad the label.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=85&fit=crop",
  },
];

export function ForYou() {
  return (
    <section
      aria-label="Who this is for"
      style={{
        backgroundColor: "#FFFFFF",
        padding: "clamp(4rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)",
        borderTop: "1px solid #EDE7DC",
      }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>

        <div style={{
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          flexWrap: "wrap", gap: "2rem",
          marginBottom: "clamp(3rem, 6vw, 5rem)",
        }}>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
            fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em",
            color: "#2C2A1F", margin: 0,
          }}>
            Made with you<br />in mind.
          </h2>
          <a href="/shop" style={{
            display: "inline-flex", alignItems: "center",
            fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 700,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "#FFFFFF", backgroundColor: "#2C2A1F",
            padding: "1rem 1.875rem", textDecoration: "none",
            transition: "background 0.25s", flexShrink: 0,
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#3F4A36"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#2C2A1F"; }}
          >
            Shop Now
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1px", backgroundColor: "#EDE7DC" }}>
          {cards.map((c) => (
            <div key={c.eyebrow} style={{ backgroundColor: "#FFFFFF", display: "flex", flexDirection: "column" }}>
              {/* Card image */}
              <div style={{ position: "relative", aspectRatio: "4/3", backgroundColor: "#EDE7DC", overflow: "hidden" }}>
                <Image
                  src={c.image}
                  alt={c.headline}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              {/* Card text */}
              <div style={{
                padding: "2rem clamp(1.5rem, 3vw, 2.25rem) clamp(2.5rem, 4vw, 3rem)",
                flex: 1, display: "flex", flexDirection: "column", gap: "0.875rem",
              }}>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 700,
                  letterSpacing: "0.16em", textTransform: "uppercase", color: "#98A47D", margin: 0,
                }}>
                  {c.eyebrow}
                </p>
                <p style={{
                  fontFamily: "var(--font-display)", fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                  fontWeight: 400, color: "#2C2A1F", margin: 0, lineHeight: 1.25,
                }}>
                  {c.headline}
                </p>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.875rem",
                  lineHeight: 1.8, color: "#6B6860", margin: 0,
                }}>
                  {c.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
