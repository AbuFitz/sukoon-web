import Image from "next/image";

const cards = [
  {
    eyebrow: "For the tight-style wearer",
    headline: "Your hairline has been waiting for this.",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=85&fit=crop",
  },
  {
    eyebrow: "For the minimalist",
    headline: "One bottle. The whole ritual.",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=85&fit=crop",
  },
  {
    eyebrow: "For the conscious buyer",
    headline: "Everything in it is there for a reason.",
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
            flexShrink: 0,
          }}>
            Shop Now
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1.5rem" }}>
          {cards.map((c) => (
            <div key={c.eyebrow} style={{ display: "flex", flexDirection: "column" }}>
              {/* Image — tall and dominant */}
              <div style={{ position: "relative", aspectRatio: "3/4", backgroundColor: "#EDE7DC", overflow: "hidden" }}>
                <Image
                  src={c.image}
                  alt={c.headline}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              {/* Caption below */}
              <div style={{ padding: "1.5rem 0 0" }}>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 700,
                  letterSpacing: "0.16em", textTransform: "uppercase", color: "#98A47D",
                  margin: "0 0 0.625rem",
                }}>
                  {c.eyebrow}
                </p>
                <p style={{
                  fontFamily: "var(--font-display)", fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                  fontWeight: 400, color: "#2C2A1F", margin: 0, lineHeight: 1.25,
                }}>
                  {c.headline}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
