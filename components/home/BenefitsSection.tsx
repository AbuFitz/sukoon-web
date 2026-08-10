"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { homepageImages } from "@/lib/homepage";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const BENEFITS = [
  {
    label: "Face + Hairline",
    body: "The only oil that serves both your skin and your hairline in one bottle. Morning ritual, done.",
  },
  {
    label: "Absorbs in seconds",
    body: "Olive Squalane mirrors your skin's natural sebum — it sinks in without residue or shine.",
  },
  {
    label: "Barrier strength",
    body: "Vitamin B3 rebuilds the lipid barrier on your face and along your follicles simultaneously.",
  },
  {
    label: "Anti-inflammatory",
    body: "Black Seed Oil (Nigella Sativa) quiets redness, breakouts, and friction damage at the source.",
  },
];

export function BenefitsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section style={{ backgroundColor: "#F5F5F3", padding: "clamp(5rem, 9vw, 8rem) 0" }}>
      <div style={{
        maxWidth: 1320, margin: "0 auto",
        padding: "0 clamp(1.25rem, 4vw, 3rem)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(3rem, 6vw, 6rem)",
        alignItems: "center",
      }}
      className="benefits-grid"
      >
        {/* Copy */}
        <div>
          <Reveal><p className="eyebrow" style={{ marginBottom: "1.25rem" }}>Why it works</p></Reveal>
          <Reveal delay={0.06}>
            <h2 style={{
              fontFamily: "var(--font-body)", fontWeight: 200,
              fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
              letterSpacing: "-0.02em", color: "#111111",
              margin: "0 0 3rem", lineHeight: 1.05,
            }}>
              Designed around<br />real results.
            </h2>
          </Reveal>

          <RevealGroup style={{ display: "flex", flexDirection: "column" }} stagger={0.06}>
            {BENEFITS.map((b, i) => (
              <RevealItem key={b.label} y={16}>
                <div style={{
                  padding: "1.5rem 0",
                  borderTop: i === 0 ? "1px solid #E3E3DF" : undefined,
                  borderBottom: "1px solid #E3E3DF",
                }}>
                  <p style={{
                    fontFamily: "var(--font-body)", fontWeight: 700,
                    fontSize: "0.9375rem", color: "#111111", margin: "0 0 0.375rem",
                  }}>
                    {b.label}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "0.875rem",
                    lineHeight: 1.65, color: "#676764", margin: 0,
                  }}>
                    {b.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* Image */}
        <div ref={ref} style={{
          position: "relative",
          aspectRatio: "4 / 5",
          overflow: "hidden",
          backgroundColor: "#EAEAE8",
        }}>
          <motion.div style={{ position: "absolute", inset: "-6% 0", y }}>
            <Image
              src={homepageImages.benefits}
              alt="Sukoon Daily Solace Fluid in use"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .benefits-grid {
            grid-template-columns: 1fr !important;
          }
          .benefits-grid > div:last-child {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
