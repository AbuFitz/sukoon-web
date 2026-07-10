"use client";

import Image from "next/image";

const images = [
  { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85&fit=crop", alt: "Skincare texture", tall: true  },
  { src: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=900&q=85&fit=crop",   alt: "Stone and oil",   tall: false },
  { src: "https://images.unsplash.com/photo-1707539160277-e39464517645?w=900&q=85&fit=crop", alt: "Morning ritual",  tall: false },
  { src: "https://images.unsplash.com/photo-1633169621790-71e519cfb42d?w=900&q=85&fit=crop", alt: "Botanical stem",  tall: true  },
  { src: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=900&q=85&fit=crop", alt: "Mediterranean botanicals", tall: false },
  { src: "https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?w=900&q=85&fit=crop", alt: "Skin close-up",   tall: true  },
];

export function Gallery() {
  return (
    <section
      aria-label="Editorial gallery"
      style={{
        backgroundColor: "#F3EFE6",
        padding: "clamp(4rem, 10vh, 8rem) clamp(2rem, 6vw, 5rem)",
      }}
    >
      <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.625rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#98A47D",
            marginBottom: "clamp(2rem, 4vh, 3.5rem)",
          }}
        >
          The World of Sukoon
        </p>

        {/* Masonry via CSS columns */}
        <div
          style={{
            columnCount: 3,
            columnGap: "1rem",
          }}
          className="columns-2 md:columns-3"
        >
          {images.map((img, i) => (
            <div
              key={i}
              style={{
                breakInside: "avoid",
                marginBottom: "1rem",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={img.tall ? 800 : 480}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = "scale(1.03)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
