import Image from "next/image";

const steps = [
  { time: "Morning", copy: "Two drops. Warm between your palms. Press gently into skin before anything else. Take ten seconds." },
  { time: "Evening", copy: "After cleansing. Before bed. Let it absorb while you slow your breathing. The ritual ends when you decide it does." },
  { time: "A moment", copy: "Not a routine to complete. A pause you earn. The scent of black seed. The warmth of oil. The quiet before the day." },
];

export function Ritual() {
  return (
    <section
      aria-label="The ritual"
      style={{
        backgroundColor: "#FBF8F3",
        padding: "clamp(5rem, 12vh, 10rem) clamp(2rem, 6vw, 5rem)",
      }}
    >
      <div style={{ maxWidth: "1380px", margin: "0 auto" }}>

        {/* Asymmetric: text left narrow, image right wide */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.85fr 1.15fr",
            gap: "clamp(3rem, 6vw, 8rem)",
            alignItems: "start",
          }}
          className="block md:grid"
        >
          {/* Left */}
          <div style={{ paddingTop: "clamp(1rem, 3vh, 2.5rem)" }}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.625rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#98A47D",
                marginBottom: "1.75rem",
              }}
            >
              The Ritual
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.5vw, 3.25rem)",
                fontWeight: 300,
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                color: "#2E3423",
                marginBottom: "clamp(2.5rem, 5vh, 4rem)",
              }}
            >
              A quieter way<br />
              to care for your skin.
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {steps.map((s, i) => (
                <div key={s.time} style={{ display: "flex", gap: "1.5rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.8125rem",
                      color: "#C4BAB0",
                      paddingTop: "0.15rem",
                      minWidth: "1.5rem",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.0625rem",
                        fontWeight: 400,
                        fontStyle: "italic",
                        color: "#434A33",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {s.time}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        lineHeight: 1.8,
                        color: "#98A47D",
                        maxWidth: "300px",
                      }}
                    >
                      {s.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — tall editorial image */}
          <div
            style={{
              position: "relative",
              height: "clamp(480px, 75vh, 780px)",
              overflow: "hidden",
            }}
            className="mt-10 md:mt-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1633169621790-71e519cfb42d?w=1200&q=85&fit=crop"
              alt="Sukoon ritual — botanical still life"
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
