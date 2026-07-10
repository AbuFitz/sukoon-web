import Image from "next/image";

export function PhilosophyQuote() {
  return (
    <section
      aria-label="Brand philosophy"
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(480px, 75vh, 900px)",
        overflow: "hidden",
        backgroundColor: "#1a1a18",
      }}
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=2000&q=90&fit=crop"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center 40%" }}
      />

      {/* Dark overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundColor: "rgba(15,14,12,0.62)",
      }} />

      {/* Content — centred */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "clamp(3rem, 8vw, 6rem) clamp(1.5rem, 8vw, 8rem)",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 700,
          letterSpacing: "0.22em", textTransform: "uppercase", color: "#98A47D",
          marginBottom: "2.5rem",
        }}>
          سكون — Stillness, in Arabic
        </p>
        <p style={{
          fontFamily: "var(--font-display)", fontWeight: 400,
          fontSize: "clamp(2.25rem, 6vw, 5rem)", lineHeight: 1.1,
          letterSpacing: "-0.03em", color: "#FFFFFF",
          fontStyle: "italic",
          marginBottom: "3rem",
          maxWidth: "800px",
        }}>
          &ldquo;Not another product.<br />A reason to slow down.&rdquo;
        </p>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.8,
          color: "rgba(255,255,255,0.5)",
          maxWidth: "420px",
        }}>
          Two drops. Sixty seconds. That&rsquo;s the ritual.
        </p>
      </div>
    </section>
  );
}
