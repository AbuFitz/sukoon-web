import Image from "next/image";

export function ShopHero() {
  return (
    <section
      aria-label="Shop"
      style={{ position: "relative", height: "clamp(380px, 55vw, 680px)", overflow: "hidden", backgroundColor: "#1a1a18" }}
    >
      <Image
        src="https://images.unsplash.com/photo-1707539160277-e39464517645?w=2000&q=90&fit=crop"
        alt="The Daily Solace Collection"
        fill priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center 35%" }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to right, rgba(20,19,17,0.75) 0%, rgba(20,19,17,0.2) 70%, rgba(20,19,17,0) 100%)",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: "clamp(2rem, 5vw, 4rem) clamp(1.5rem, 6vw, 5rem)",
        paddingTop: "8rem",
      }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", width: "100%" }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 700,
            letterSpacing: "0.22em", textTransform: "uppercase", color: "#98A47D",
            marginBottom: "1rem",
          }}>
            The Collection
          </p>
          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 400, letterSpacing: "-0.025em", lineHeight: 1.06,
            color: "#FFFFFF", maxWidth: "640px",
          }}>
            One oil. Every ritual it belongs in.
          </h1>
        </div>
      </div>
    </section>
  );
}
