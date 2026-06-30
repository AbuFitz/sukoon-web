import Image from "next/image";

export function LifestyleSplit() {
  return (
    <section id="story" className="flex flex-col md:grid md:grid-cols-2" style={{ backgroundColor: "#F7F1E4", borderTop: "1px solid #E6DCC6" }}>
      <div style={{ position: "relative", minHeight: "clamp(380px, 100vw, 700px)", backgroundColor: "#E8D4AE" }}>
        <Image
          src="https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?w=1200&q=85&fit=crop"
          alt="Woman applying The Daily Solace Fluid"
          fill sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </div>

      <div style={{
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "clamp(3rem, 8vw, 7rem) clamp(2rem, 7vw, 6rem)",
      }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B7B5C", marginBottom: "clamp(1.5rem, 4vw, 2rem)" }}>
          The Innovation
        </p>

        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 5vw, 3.25rem)",
          fontWeight: 400, lineHeight: 1.12, letterSpacing: "-0.01em",
          color: "#2C2A1F", marginBottom: "clamp(1.5rem, 4vw, 2rem)",
        }}>
          One oil. Two rituals.<br />Endless benefits.
        </h2>

        <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85, color: "#6B7B5C", marginBottom: "1.25rem" }}>
          Hijabs, under-caps, and tight styles put daily friction on your hairline — yet every serum on the shelf was built for your face alone. We engineered a single waterless oil that supports both: calming facial breakouts and barrier stress, while soothing the friction and tension tight styles leave behind at the hairline.
        </p>

        <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85, color: "#6B7B5C" }}>
          100% anhydrous. Absorbs in under 60 seconds. Never greasy, on skin or scalp.
        </p>
      </div>
    </section>
  );
}
