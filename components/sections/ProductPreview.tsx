import Image from "next/image";

export function ProductPreview() {
  return (
    <section
      aria-label="First collection preview"
      style={{
        backgroundColor: "#2E3423",
        padding: "clamp(5rem, 12vh, 10rem) clamp(2rem, 6vw, 5rem)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1380px", margin: "0 auto" }}>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(3rem, 6vw, 7rem)",
            alignItems: "center",
          }}
          className="block md:grid"
        >
          {/* Text */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.625rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(251,248,243,0.38)",
                marginBottom: "1.75rem",
              }}
            >
              First Collection
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.25rem, 4vw, 4rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                color: "#FBF8F3",
                marginBottom: "2rem",
              }}
            >
              One oil.<br />
              Everything it needs<br />
              to be.
            </h2>

            <div style={{ width: "2rem", height: "1px", backgroundColor: "rgba(251,248,243,0.2)", marginBottom: "2rem" }} />

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                lineHeight: 1.8,
                color: "rgba(251,248,243,0.5)",
                maxWidth: "340px",
                marginBottom: "2.5rem",
              }}
            >
              Premium black seed facial oil. Cold-pressed.
              Small batch. Launched when it is ready — not before.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {["Cold-pressed Nigella Sativa", "Lightweight — absorbs in minutes", "Fragrance-free formulation", "Frosted glass. Recyclable packaging"].map(f => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#6B7451", flexShrink: 0 }} />
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "rgba(251,248,243,0.45)", letterSpacing: "0.01em" }}>
                    {f}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "3rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.625rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(251,248,243,0.25)",
                }}
              >
                Available Soon · Launching in the UK
              </p>
            </div>
          </div>

          {/* Product image */}
          <div
            style={{
              position: "relative",
              height: "clamp(400px, 60vh, 640px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="mt-10 md:mt-0"
          >
            {/* Soft glow */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                width: "70%",
                height: "70%",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(107,116,81,0.15) 0%, transparent 70%)",
              }}
            />
            <div style={{ position: "relative", width: "clamp(180px, 22vw, 280px)", height: "clamp(280px, 36vw, 460px)" }}>
              <Image
                src="https://images.unsplash.com/photo-1707539160277-e39464517645?w=800&q=90&fit=crop"
                alt="Sukoon Black Seed Face Oil — first collection"
                fill
                sizes="(max-width: 768px) 50vw, 22vw"
                style={{ objectFit: "contain", filter: "brightness(0.95) contrast(1.05)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
