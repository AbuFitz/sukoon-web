import Link from "next/link";

const BADGES = ["100% Waterless", "Made in the UK", "Fragrance-Free", "Vegan & Cruelty-Free"];

export function HeroSection() {
  return (
    <section aria-label="Hero" className="container" style={{ paddingTop: "clamp(1rem, 2vw, 1.5rem)" }}>
      <div className="card" style={{
        padding: "clamp(3rem, 8vw, 6rem) clamp(1.5rem, 6vw, 4rem)",
        display: "flex", flexDirection: "column", alignItems: "center",
        textAlign: "center",
      }}>
        <span className="eyebrow" style={{ marginBottom: "1.25rem" }}>Waterless Skincare, Made in the UK</span>

        <h1 style={{
          fontFamily: "var(--font-body)", fontWeight: 700,
          fontSize: "clamp(2.25rem, 5vw, 4rem)",
          lineHeight: 1.04, letterSpacing: "-0.035em",
          color: "#111111", margin: "0 0 1.5rem", maxWidth: 760,
        }}>
          One waterless oil.
          <br />
          Two rituals — face &amp; hairline.
        </h1>

        <p style={{
          fontFamily: "var(--font-body)", fontSize: "1.0625rem", lineHeight: 1.7,
          color: "#5C5C5C", maxWidth: 520, margin: "0 0 2rem",
        }}>
          Most skincare is 70% water. We removed it entirely, leaving five active
          ingredients built to calm skin, strengthen the barrier, and reverse
          friction-induced hairline thinning — in under sixty seconds.
        </p>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "2.25rem" }}>
          <Link href="/shop" className="btn btn-dark">Shop the Fluid</Link>
          <Link href="/about" className="btn btn-outline">Why Waterless</Link>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
          {BADGES.map(b => (
            <span key={b} className="badge">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
