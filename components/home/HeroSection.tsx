import Image from "next/image";
import Link from "next/link";
import { homepageImages, type FeaturedProduct } from "@/lib/homepage";

const BADGES = ["Made in the UK", "Fragrance-Free", "Vegan & Cruelty-Free"];

export function HeroSection({ products }: { products: FeaturedProduct[] }) {
  const size30 = products.find(p => p.handle.includes("30ml"));
  const size15 = products.find(p => p.handle.includes("15ml"));

  return (
    <section aria-label="Hero" style={{ position: "relative", minHeight: "min(88vh, 760px)", overflow: "hidden" }}>
      <Image
        src={homepageImages.hero}
        alt="The Daily Solace Fluid ritual"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "62% 50%" }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(0deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.18) 45%, rgba(0,0,0,0.05) 70%)",
      }} />

      <div className="container" style={{
        position: "relative", height: "100%", minHeight: "min(88vh, 760px)",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        paddingTop: "clamp(4rem, 10vw, 6rem)", paddingBottom: "clamp(2.5rem, 5vw, 4rem)",
      }}>
        <h1 style={{
          fontFamily: "var(--font-body)", fontWeight: 700,
          fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
          lineHeight: 1.02, letterSpacing: "-0.035em",
          color: "#FFFFFF", margin: "0 0 1rem", maxWidth: 640,
        }}>
          One oil. Two rituals — face &amp; hairline.
        </h1>

        <p style={{
          fontFamily: "var(--font-body)", fontSize: "1.0625rem", lineHeight: 1.6,
          color: "rgba(255,255,255,0.88)", maxWidth: 460, margin: "0 0 1.75rem",
        }}>
          Five active ingredients. Zero fillers. Calms skin, strengthens the
          barrier, and reverses hairline friction — in sixty seconds.
        </p>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {size30 && (
            <Link href={`/products/${size30.handle}`} className="btn btn-dark">
              Shop 30ml — {size30.price}
            </Link>
          )}
          {size15 && (
            <Link
              href={`/products/${size15.handle}`}
              className="btn btn-outline"
              style={{ backgroundColor: "transparent", borderColor: "rgba(255,255,255,0.6)", color: "#FFFFFF" }}
            >
              Discover 15ml — {size15.price}
            </Link>
          )}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {BADGES.map(b => (
            <span key={b} className="badge" style={{ backgroundColor: "rgba(255,255,255,0.14)", color: "#FFFFFF" }}>{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
