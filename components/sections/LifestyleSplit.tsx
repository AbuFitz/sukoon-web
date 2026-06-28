import Image from "next/image";

export function LifestyleSplit() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "640px",
        backgroundColor: "#FBF8F3",
      }}
    >
      {/* Left — image */}
      <div style={{ position: "relative", minHeight: "520px" }}>
        <Image
          src="https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?w=1200&q=85&fit=crop"
          alt="Woman applying Sukoon face oil"
          fill
          sizes="50vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </div>

      {/* Right — text */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(4rem, 7vw, 7rem) clamp(3rem, 6vw, 6rem)",
          backgroundColor: "#FBF8F3",
        }}
      >
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
          Our Story
        </p>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 3.5vw, 3.25rem)",
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            color: "#2A2F1E",
            marginBottom: "2rem",
            maxWidth: "400px",
          }}
        >
          Skincare became complicated. We wanted it simple again.
        </h2>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9375rem",
            lineHeight: 1.85,
            color: "#6B7451",
            maxWidth: "380px",
            marginBottom: "1.25rem",
          }}
        >
          Sukoon started with a single question: why does effective skincare need twenty ingredients? We stripped everything back to what actually works — and found the answer in tradition.
        </p>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9375rem",
            lineHeight: 1.85,
            color: "#6B7451",
            maxWidth: "380px",
          }}
        >
          Black seed. Cold-pressed. Unhurried. A formula built for skin that deserves better than noise.
        </p>
      </div>
    </section>
  );
}
