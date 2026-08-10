"use client";

import { Reveal } from "@/components/ui/Reveal";

export function ManifestoSection() {
  return (
    <section style={{
      backgroundColor: "#111111",
      padding: "clamp(6rem, 12vw, 10rem) clamp(1.25rem, 4vw, 3rem)",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        <Reveal y={20}>
          <p style={{
            fontFamily: "var(--font-body)",
            fontWeight: 200,
            fontSize: "clamp(2rem, 5vw, 3.75rem)",
            lineHeight: 1.15,
            color: "#F5F5F3",
            margin: "0 0 2rem",
            letterSpacing: "-0.02em",
          }}>
            &ldquo;Skin care shouldn&apos;t require a chemistry degree. Ours requires five ingredients and sixty seconds.&rdquo;
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{
            fontFamily: "var(--font-body)", fontWeight: 700,
            fontSize: "0.75rem", letterSpacing: "0.2em",
            textTransform: "uppercase", color: "#676764",
            margin: 0,
          }}>
            Sukoon Skin
          </p>
        </Reveal>
      </div>
    </section>
  );
}
