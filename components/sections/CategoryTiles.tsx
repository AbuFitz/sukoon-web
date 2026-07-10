import Image from "next/image";

const categories = [
  { label: "Face",        href: "#story",       src: "https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?w=400&q=85&fit=crop" },
  { label: "Hairline",    href: "#ritual",       src: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=400&q=85&fit=crop" },
  { label: "The Ritual",  href: "#ritual",       src: "https://images.unsplash.com/photo-1633169621790-71e519cfb42d?w=400&q=85&fit=crop" },
  { label: "Ingredients", href: "#ingredients",  src: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&q=85&fit=crop" },
  { label: "Our Story",   href: "#story",        src: "https://images.unsplash.com/photo-1707539160277-e39464517645?w=400&q=85&fit=crop" },
];

export function CategoryTiles() {
  return (
    <section
      aria-label="Discover by category"
      style={{
        backgroundColor: "#F7F1E4",
        padding: "clamp(2.5rem, 6vw, 4.5rem) clamp(1.5rem, 6vw, 5rem)",
        borderTop: "1px solid #E8D4AE",
      }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#98A47D", marginBottom: "clamp(1.5rem, 4vw, 2.5rem)" }}>
          Discover by Category
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5" style={{ gap: "clamp(1rem, 2.5vw, 1.5rem)" }}>
          {categories.map((c) => (
            <a key={c.label} href={c.href} style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.875rem" }}>
              <div style={{
                position: "relative", width: "100%", aspectRatio: "1 / 1",
                borderRadius: "50%", overflow: "hidden", backgroundColor: "#E8D4AE",
              }}>
                <Image src={c.src} alt={c.label} fill sizes="(max-width: 768px) 30vw, 18vw" style={{ objectFit: "cover" }} />
              </div>
              <span style={{
                fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 500,
                letterSpacing: "0.04em", color: "#2C2A1F", textAlign: "center",
              }}>
                {c.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
