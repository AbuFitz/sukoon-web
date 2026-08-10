"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { homepageImages } from "@/lib/homepage";
import { Reveal } from "@/components/ui/Reveal";

export function BrandStorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "clamp(5rem, 9vw, 8rem) 0" }}>
      <div style={{
        maxWidth: 1320, margin: "0 auto",
        padding: "0 clamp(1.25rem, 4vw, 3rem)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(3rem, 6vw, 6rem)",
        alignItems: "center",
      }}
      className="brand-story-grid"
      >
        {/* Image */}
        <div ref={ref} style={{
          position: "relative",
          aspectRatio: "3 / 4",
          overflow: "hidden",
          backgroundColor: "#F0F0EE",
        }}>
          <motion.div style={{ position: "absolute", inset: "-6% 0", y }}>
            <Image
              src={homepageImages.story}
              alt="Sukoon Daily Solace Fluid application"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </div>

        {/* Copy */}
        <div>
          <Reveal><p className="eyebrow" style={{ marginBottom: "1.25rem" }}>The Science</p></Reveal>
          <Reveal delay={0.06}>
            <h2 style={{
              fontFamily: "var(--font-body)", fontWeight: 200,
              fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
              letterSpacing: "-0.02em", color: "#111111",
              margin: "0 0 1.5rem", lineHeight: 1.05,
            }}>
              Why waterless<br />changes everything.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.75,
              color: "#676764", margin: "0 0 1.25rem",
            }}>
              Most skincare is 70–80% water. That water dilutes every active ingredient
              and requires preservatives to prevent bacteria. We removed it entirely.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.75,
              color: "#676764", margin: "0 0 2rem",
            }}>
              What&apos;s left is a concentrated formula of five actives — each selected
              because it genuinely works, not because it&apos;s cheap to include.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href="/about"
              style={{
                display: "inline-flex", alignItems: "center",
                fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 500,
                color: "#111111", textDecoration: "none",
                borderBottom: "1.5px solid #111111", paddingBottom: 2,
                transition: "color 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = "#676764"; el.style.borderColor = "#676764"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = "#111111"; el.style.borderColor = "#111111"; }}
            >
              Our Story →
            </a>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .brand-story-grid {
            grid-template-columns: 1fr !important;
          }
          .brand-story-grid > div:first-child {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
