import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?w=900&q=85&fit=crop",
    alt: "Skincare ritual",
    objectPosition: "center top",
  },
  {
    src: "https://images.unsplash.com/photo-1707539160277-e39464517645?w=900&q=85&fit=crop",
    alt: "Sukoon Black Seed Face Oil",
    objectPosition: "center",
  },
  {
    src: "https://images.unsplash.com/photo-1633169621790-71e519cfb42d?w=900&q=85&fit=crop",
    alt: "Dried botanicals",
    objectPosition: "center",
  },
  {
    src: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=900&q=85&fit=crop",
    alt: "Natural ingredients",
    objectPosition: "center",
  },
];

export function PhotoGallery() {
  return (
    <section
      style={{
        backgroundColor: "#FBF8F3",
        borderTop: "1px solid #E8E1D8",
        padding: "clamp(3rem, 5vw, 4rem) clamp(2rem, 6vw, 5rem) clamp(4rem, 7vw, 6rem)",
      }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.5625rem",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#9BA584",
            marginBottom: "2rem",
          }}
        >
          The World of Sukoon
        </p>

        {/* 2-col mosaic: left tall, right stacked 2 rows, bottom full-width */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "340px 340px", gap: "0.75rem" }}>
          {/* Large left — spans 2 rows */}
          <div style={{ gridRow: "1 / 3", position: "relative", overflow: "hidden", backgroundColor: "#EDE7DE" }}>
            <Image src={photos[0].src} alt={photos[0].alt} fill priority sizes="50vw" style={{ objectFit: "cover", objectPosition: photos[0].objectPosition }} />
          </div>
          {/* Top right */}
          <div style={{ position: "relative", overflow: "hidden", backgroundColor: "#EDE7DE" }}>
            <Image src={photos[1].src} alt={photos[1].alt} fill priority sizes="50vw" style={{ objectFit: "cover", objectPosition: photos[1].objectPosition }} />
          </div>
          {/* Bottom right */}
          <div style={{ position: "relative", overflow: "hidden", backgroundColor: "#EDE7DE" }}>
            <Image src={photos[2].src} alt={photos[2].alt} fill priority sizes="50vw" style={{ objectFit: "cover", objectPosition: photos[2].objectPosition }} />
          </div>
        </div>

        {/* Bottom strip */}
        <div style={{ position: "relative", height: "280px", overflow: "hidden", marginTop: "0.75rem", backgroundColor: "#EDE7DE" }}>
          <Image src={photos[3].src} alt={photos[3].alt} fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center 40%" }} />
        </div>
      </div>
    </section>
  );
}
