import Image from "next/image";

const articles = [
  {
    category: "Science",
    title: "Why tight styles and hairlines need their own science",
    src: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=700&q=85&fit=crop",
  },
  {
    category: "Formulation",
    title: "Inside the formula: olive squalane explained",
    src: "https://images.unsplash.com/photo-1633169621790-71e519cfb42d?w=700&q=85&fit=crop",
  },
  {
    category: "The Ritual",
    title: "A 60-second routine, twice a day",
    src: "https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?w=700&q=85&fit=crop",
  },
];

export function JournalRow() {
  return (
    <section
      aria-label="Recommended reading"
      style={{
        backgroundColor: "#F7F1E4",
        borderTop: "1px solid #E8D4AE",
        padding: "clamp(3rem, 7vw, 6rem) clamp(1.5rem, 6vw, 5rem)",
      }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#98A47D", marginBottom: "1rem" }}>
          The Journal
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(1.875rem, 4.5vw, 3.25rem)",
          fontWeight: 400, letterSpacing: "-0.015em", color: "#2C2A1F",
          marginBottom: "clamp(2rem, 5vw, 3rem)",
        }}>
          Recommended reading.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "clamp(1.5rem, 3vw, 2rem)" }}>
          {articles.map((a) => (
            <a key={a.title} href="#" style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", aspectRatio: "4 / 3", backgroundColor: "#E8D4AE", marginBottom: "1.125rem" }}>
                <Image src={a.src} alt={a.title} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "#98A47D", marginBottom: "0.5rem" }}>
                {a.category}
              </p>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 400, lineHeight: 1.3, color: "#2C2A1F" }}>
                {a.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
