import Image from "next/image";

export function LifestyleSplit() {
  return (
    <section
      id="story"
      className="flex flex-col md:grid md:grid-cols-2"
      style={{ backgroundColor: "#FBF8F3", borderTop: "1px solid #E8E1D8" }}
    >
      {/* Image */}
      <div style={{ position: "relative", minHeight: "clamp(300px, 60vw, 640px)" }}>
        <Image
          src="https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?w=1200&q=85&fit=crop"
          alt="Woman applying Sukoon face oil"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </div>

      {/* Text */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(3rem, 7vw, 7rem) clamp(2rem, 6vw, 6rem)",
          backgroundColor: "#FBF8F3",
        }}
      >
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#9BA584", marginBottom: "2rem" }}>
          Our Story
        </p>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.875rem, 4vw, 3.25rem)",
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            color: "#2A2F1E",
            marginBottom: "1.75rem",
            maxWidth: "400px",
          }}
        >
          Skincare became complicated. We wanted it simple again.
        </h2>

        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.85, color: "#6B7451", maxWidth: "380px", marginBottom: "1.25rem" }}>
          Sukoon started with a single question: why does effective skincare need twenty ingredients? We stripped everything back to what actually works — and found the answer in tradition.
        </p>

        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.85, color: "#6B7451", maxWidth: "380px" }}>
          Black seed. Cold-pressed. Unhurried. A formula built for skin that deserves better than noise.
        </p>
      </div>
    </section>
  );
}
