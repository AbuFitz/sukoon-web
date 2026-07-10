"use client";

import Image from "next/image";

const items = [
  {
    name: "Black Seed",
    latin: "Nigella Sativa",
    description: "Cold-pressed and unrefined. Used for centuries across the Middle East and North Africa for its deeply calming and restorative properties.",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=85&fit=crop",
  },
  {
    name: "Argan Oil",
    latin: "Argania Spinosa",
    description: "Rich in oleic and linoleic acids. Absorbs without residue and leaves skin visibly softer within days of consistent use.",
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&q=85&fit=crop",
  },
  {
    name: "Rosehip",
    latin: "Rosa Canina",
    description: "A quiet powerhouse. Naturally high in vitamin C and essential fatty acids that support evenness, luminosity and barrier repair.",
    image: "https://images.unsplash.com/photo-1490750967868-88df5691cc6c?w=800&q=85&fit=crop",
  },
  {
    name: "Chamomile",
    latin: "Matricaria Chamomilla",
    description: "Chosen for its gentleness. Soothes reactive and sensitive skin, making the ritual feel as calming as it sounds.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=85&fit=crop",
  },
];

export function Ingredients() {
  return (
    <section
      id="ingredients"
      aria-label="Key ingredients"
      style={{
        backgroundColor: "#F3EFE6",
        padding: "clamp(5rem, 12vh, 10rem) clamp(2rem, 6vw, 5rem)",
      }}
    >
      <div style={{ maxWidth: "1380px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "clamp(3rem, 6vh, 5rem)", maxWidth: "520px" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.625rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#98A47D",
              marginBottom: "1.25rem",
            }}
          >
            What Goes In
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              color: "#2E3423",
            }}
          >
            Four ingredients.<br />
            Chosen with intention.
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }}
          className="grid-cols-2 md:grid-cols-4"
        >
          {items.map((item) => (
            <article key={item.name}>
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  height: "clamp(200px, 28vw, 340px)",
                  marginBottom: "1.5rem",
                  overflow: "hidden",
                  backgroundColor: "#E8DFC9",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="25vw"
                  style={{ objectFit: "cover", objectPosition: "center", transition: "transform 0.6s ease" }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.transform = "scale(1.04)")}
                  onMouseLeave={e => ((e.target as HTMLElement).style.transform = "scale(1)")}
                />
              </div>

              {/* Text */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.5625rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#98A47D",
                  marginBottom: "0.375rem",
                }}
              >
                {item.latin}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.375rem",
                  fontWeight: 400,
                  color: "#2E3423",
                  marginBottom: "0.75rem",
                  lineHeight: 1.2,
                }}
              >
                {item.name}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  lineHeight: 1.75,
                  color: "#98A47D",
                }}
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
