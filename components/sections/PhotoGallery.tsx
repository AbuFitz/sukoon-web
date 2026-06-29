import Image from "next/image";

export function PhotoGallery() {
  return (
    <section
      style={{
        backgroundColor: "#FBF8F3",
        borderTop: "1px solid #E8E1D8",
        padding: "clamp(3rem, 5vw, 4rem) clamp(1.5rem, 6vw, 5rem) clamp(4rem, 7vw, 6rem)",
      }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#9BA584", marginBottom: "2rem" }}>
          THE RITUAL OF SUKOON
        </p>

        {/* Desktop: 3-col mosaic */}
        <div className="hidden md:grid" style={{
          gridTemplateColumns: "1.2fr 1fr 1fr",
          gridTemplateRows: "360px 360px",
          gap: "0.625rem",
        }}>
          {/* Col 1: portrait — spans both rows */}
          <div style={{ gridRow: "1 / 3", position: "relative", overflow: "hidden", backgroundColor: "#EDE7DE" }}>
            <Image src="https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?w=900&q=85&fit=crop" alt="Skincare ritual" fill priority sizes="40vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
          </div>
          {/* Col 2 top: dropper bottle */}
          <div style={{ position: "relative", overflow: "hidden", backgroundColor: "#EDE7DE" }}>
            <Image src="https://images.unsplash.com/photo-1707539160277-e39464517645?w=900&q=85&fit=crop" alt="Sukoon face oil" fill priority sizes="30vw" style={{ objectFit: "cover" }} />
          </div>
          {/* Col 2 bottom: botanicals */}
          <div style={{ position: "relative", overflow: "hidden", backgroundColor: "#EDE7DE" }}>
            <Image src="https://images.unsplash.com/photo-1633169621790-71e519cfb42d?w=900&q=85&fit=crop" alt="Dried botanicals" fill priority sizes="30vw" style={{ objectFit: "cover" }} />
          </div>
          {/* Col 3: amber bottle — spans both rows */}
          <div style={{ gridRow: "1 / 3", gridColumn: "3", position: "relative", overflow: "hidden", backgroundColor: "#EDE7DE" }}>
            <Image src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=900&q=85&fit=crop" alt="Natural ingredients" fill priority sizes="30vw" style={{ objectFit: "cover", objectPosition: "center 40%" }} />
          </div>
        </div>

        {/* Mobile: 2-col grid */}
        <div className="grid grid-cols-2 md:hidden" style={{ gap: "0.5rem" }}>
          {[
            { src: "https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?w=700&q=85&fit=crop", alt: "Skincare ritual" },
            { src: "https://images.unsplash.com/photo-1707539160277-e39464517645?w=700&q=85&fit=crop", alt: "Face oil" },
            { src: "https://images.unsplash.com/photo-1633169621790-71e519cfb42d?w=700&q=85&fit=crop", alt: "Botanicals" },
            { src: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=700&q=85&fit=crop", alt: "Natural ingredients" },
          ].map((img) => (
            <div key={img.src} style={{ position: "relative", height: "200px", overflow: "hidden", backgroundColor: "#EDE7DE" }}>
              <Image src={img.src} alt={img.alt} fill sizes="50vw" style={{ objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
