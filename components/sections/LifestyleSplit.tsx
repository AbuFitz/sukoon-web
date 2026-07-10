import Image from "next/image";

export function LifestyleSplit() {
  return (
    <section id="story" style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #EDE7DC" }}>
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "clamp(540px, 78vh, 920px)" }}>

        {/* Image — fills left column, no constraints */}
        <div style={{ position: "relative", minHeight: "clamp(400px, 60vw, 820px)", backgroundColor: "#EDE7DC" }}>
          <Image
            src="https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?w=1400&q=90&fit=crop"
            alt="Woman applying The Daily Solace Fluid"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
          />
        </div>

        {/* Text — right column, vertically centred, cream background */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(4rem, 8vw, 9rem) clamp(2.5rem, 6vw, 7rem)",
          backgroundColor: "#F7F4EF",
        }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 700,
            letterSpacing: "0.22em", textTransform: "uppercase", color: "#98A47D",
            marginBottom: "2rem",
          }}>
            The Science
          </p>

          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
            fontWeight: 400, lineHeight: 1.08, letterSpacing: "-0.025em",
            color: "#2C2A1F", marginBottom: "2.5rem",
          }}>
            Built for the hairline every other product forgot.
          </h2>

          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85,
            color: "#6B6860", marginBottom: "3rem", maxWidth: "380px",
          }}>
            100% waterless. Absorbs in under sixty seconds. Formulated for your face and the hairline tight styles quietly strain — over years.
          </p>

          <div style={{ display: "flex", gap: "2.5rem" }}>
            <a href="/about" style={{
              fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 700,
              letterSpacing: "0.16em", textTransform: "uppercase",
              color: "#2C2A1F", textDecoration: "none",
              borderBottom: "1.5px solid #2C2A1F", paddingBottom: "3px",
            }}>
              Our Story
            </a>
            <a href="#ingredients" style={{
              fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 700,
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
