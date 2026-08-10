import Image from "next/image";
import Link from "next/link";
import { homepageImages } from "@/lib/homepage";

const BADGES = ["5 Active Ingredients", "Made in the UK", "Fragrance-Free", "Vegan & Cruelty-Free"];

export function HeroSection() {
  return (
    <section aria-label="Hero" className="container" style={{ paddingTop: "clamp(1rem, 2vw, 1.5rem)" }}>
      <div
        className="hero-grid"
        style={{ display: "grid", gridTemplateColumns: "6fr 6fr", gap: "clamp(1rem, 2vw, 1.25rem)" }}
      >
        {/* Editorial copy */}
        <div className="card" style={{
          padding: "clamp(2.5rem, 5vw, 4rem) clamp(1.75rem, 4vw, 3rem)",
          display: "flex", flexDirection: "column", justifyContent: "center",
          minHeight: "clamp(420px, 46vw, 560px)",
        }}>
          <span className="eyebrow" style={{ marginBottom: "1.25rem" }}>Made in the UK</span>

          <h1 style={{
            fontFamily: "var(--font-body)", fontWeight: 700,
            fontSize: "clamp(2.25rem, 4vw, 3.375rem)",
            lineHeight: 1.03, letterSpacing: "-0.035em",
            color: "#111111", margin: "0 0 1.5rem",
          }}>
            One oil.
            <br />
            Two rituals — face &amp; hairline.
          </h1>

          <p style={{
            fontFamily: "var(--font-body)", fontSize: "1.0625rem", lineHeight: 1.7,
            color: "#5C5C5C", maxWidth: 460, margin: "0 0 2rem",
          }}>
            Five active ingredients, nothing else — built to calm skin, strengthen
            the barrier, and reverse friction-induced hairline thinning, in under
            sixty seconds.
          </p>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2.25rem" }}>
            <Link href="/shop" className="btn btn-dark">Shop the Fluid</Link>
            <Link href="/about" className="btn btn-outline">Our Story</Link>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {BADGES.map(b => (
              <span key={b} className="badge">{b}</span>
            ))}
          </div>
        </div>

        {/* Atmospheric ritual shot — ingredients and application, not the product itself */}
        <div className="card" style={{
          position: "relative", overflow: "hidden",
          minHeight: "clamp(420px, 46vw, 560px)",
          backgroundColor: "#EFEFEF",
        }}>
          <Image
            src={homepageImages.story}
            alt="The Daily Solace ritual — active ingredients and application"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
