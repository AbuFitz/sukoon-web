import Image from "next/image";
import { homepageImages } from "@/lib/homepage";

export function HeroSection() {
  return (
    <section aria-label="Hero" style={{
      position: "relative", minHeight: "min(88vh, 760px)", overflow: "hidden",
      marginTop: "-76px",
    }}>
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
          color: "#FFFFFF", margin: "0 0 1.75rem", maxWidth: 640,
        }}>
          One oil. Two rituals.
        </h1>

        <div>
          <a href="#collection" className="btn btn-dark">
            Shop The Fluid
          </a>
        </div>
      </div>
    </section>
  );
}
