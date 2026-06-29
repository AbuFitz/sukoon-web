import Image from "next/image";

export function LifestyleSplit() {
  return (
    <section id="story" className="flex flex-col md:grid md:grid-cols-2" style={{ backgroundColor: "#FBF8F3", borderTop: "1px solid #E8E1D8" }}>
      <div style={{ position: "relative", minHeight: "clamp(380px, 100vw, 700px)" }}>
        <Image
          src="https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?w=1200&q=85&fit=crop"
          alt="Woman applying Sukoon face oil"
          fill sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </div>

      <div style={{
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "clamp(3rem, 8vw, 7rem) clamp(2rem, 7vw, 6rem)",
      }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9BA584", marginBottom: "clamp(1.5rem, 4vw, 2rem)" }}>
          Our Story
        </p>

        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 5vw, 3.25rem)",
          fontWeight: 400, lineHeight: 1.12, letterSpacing: "-0.01em",
          color: "#2A2F1E", marginBottom: "clamp(1.5rem, 4vw, 2rem)",
        }}>
          Skincare became complicated. We wanted it simple again.
        </h2>

        <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85, color: "#6B7451", marginBottom: "1.25rem" }}>
          Sukoon started with a simple question: why does effective skincare need so many ingredients? We stripped everything back to what actually works — and found the answer in tradition.
        </p>

        <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85, color: "#6B7451" }}>
          Backed by Cairo-based Universal & Amounia Lab for safe, effective skincare rooted in time-tested wisdom.
        </p>
      </div>
    </section>
  );
}
