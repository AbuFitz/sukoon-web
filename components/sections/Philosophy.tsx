import Image from "next/image";

export function Philosophy() {
  return (
    <section
      id="philosophy"
      aria-label="Brand philosophy"
      style={{
        backgroundColor: "#FBF8F3",
        padding: "clamp(5rem, 12vh, 10rem) clamp(2rem, 6vw, 5rem)",
      }}
    >
      <div style={{ maxWidth: "1380px", margin: "0 auto" }}>

        {/* Asymmetric grid: wide image left, text right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "clamp(3rem, 6vw, 7rem)",
            alignItems: "center",
          }}
          className="block md:grid"
        >
          {/* Image */}
          <div
            style={{
              position: "relative",
              height: "clamp(420px, 65vh, 680px)",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?w=1200&q=85&fit=crop"
              alt="Sukoon ritual"
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>

          {/* Text */}
          <div style={{ paddingTop: "clamp(2rem, 4vh, 3rem)" }} className="mt-8 md:mt-0">
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.625rem",
                fontWeight: 400,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#98A27E",
                marginBottom: "1.75rem",
              }}
            >
              Why Sukoon Exists
            </p>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.5vw, 3.25rem)",
                fontWeight: 300,
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                color: "#2E3423",
                marginBottom: "2rem",
                maxWidth: "420px",
              }}
            >
              Skincare became complicated.<br />
              We wanted it simple again.
            </h2>

            <div
              style={{
                width: "2rem",
                height: "1px",
                backgroundColor: "#C4BAB0",
                marginBottom: "2rem",
              }}
            />

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                lineHeight: 1.85,
                color: "#6B7451",
                maxWidth: "360px",
                marginBottom: "1.5rem",
              }}
            >
              Sukoon — سكون — is the Arabic word for stillness.
              It is what we hope every person feels when they slow down,
              pick up the bottle, and take a moment that belongs only to them.
            </p>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                lineHeight: 1.85,
                color: "#6B7451",
                maxWidth: "360px",
              }}
            >
              We started with one oil. Not because it was easy,
              but because doing one thing extraordinarily well
              felt more honest than doing many things adequately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
