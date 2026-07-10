import Image from "next/image";

export function LifestyleSplit() {
  return (
    <section id="story" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "clamp(500px, 70vh, 800px)" }}>

        {/* Image — full bleed, no aspect ratio constraints */}
        <div style={{ position: "relative", minHeight: "clamp(360px, 55vw, 700px)", backgroundColor: "#EDE7DC", order: 1 }}>
          <Image
            src="https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?w=1400&q=90&fit=crop"
            alt="Woman applying The Daily Solace Fluid"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>

        {/* Text — right column, vertically centred */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(3.5rem, 7vw, 8rem) clamp(2.5rem, 6vw, 7rem)",
          backgroundColor: "#F7F4EF",
          order: 2,
        }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 700,
            letterSpacing: "0.22em", textTransform: "uppercase", color: "#98A47D",
            marginBottom: "1.75rem",
          }}>
            The Science
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.015em",
            color: "#2C2A1F", marginBottom: "2rem",
          }}>
            Built for the hairline every other product forgot.
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.85,
            color: "#6B6860", marginBottom: "1.375rem",
          }}>
            Every serum on the shelf was made for your face alone. Nobody built one for the hairline strain that tight styles, tension, and daily wear press in quietly — over years.
          </p>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.85,
            color: "#6B6860", marginBottom: "2.75rem",
          }}>
            100% waterless. Nothing greasy. Sixty seconds — and it&rsquo;s working.
          </p>
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            <a href="/about" style={{
              fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 700,
              letterSpacing: "0.16em", textTransform: "uppercase",
              color: "#2C2A1F", textDecoration: "none",
              borderBottom: "1.5px solid #2C2A1F", paddingBottom: "3px",
            }}>
              Our Story
            </a>
            <a href="#ingredients" style={{
              fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 700,
              letterSpacing: "0.16em", textTransform: "uppercase",
              color: "#98A47D", textDecoration: "none",
              borderBottom: "1.5px solid #98A47D", paddingBottom: "3px",
            }}>
              The Formula
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
