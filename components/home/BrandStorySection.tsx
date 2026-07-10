"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { homepageImages } from "@/lib/homepage";

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`;

export function BrandStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const detailY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      ref={sectionRef}
      aria-label="Our story"
      style={{ backgroundColor: "#f3efe7", position: "relative", overflow: "visible" }}
    >
      {/* Grain overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: GRAIN, opacity: 0.022, pointerEvents: "none",
      }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          minHeight: 620,
          position: "relative", zIndex: 1,
        }}
        className="grid-cols-1 md:grid-cols-[0.9fr_1.1fr]"
      >
        {/* Text panel */}
        <div style={{
          display: "flex", alignItems: "center",
          padding: "clamp(4rem, 8vw, 5.625rem) clamp(2.5rem, 6vw, 6.25rem)",
          order: 1,
        }}>
          <div style={{ maxWidth: 480 }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 400,
              fontSize: "clamp(2.25rem, 3.5vw, 3.25rem)",
              lineHeight: 1.06, letterSpacing: "-0.025em",
              color: "#292b25", marginBottom: "1.875rem",
            }}>
              Rooted in calm.<br />
              <em style={{ fontStyle: "italic" }}>Made with intention.</em>
            </h2>

            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.75,
              color: "#64685f", marginBottom: "1.125rem",
            }}>
              Sukoon was born from the belief that less can do more — when it&rsquo;s made with care.
            </p>

            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.75,
              color: "#64685f", marginBottom: "2.5rem",
            }}>
              We create high-performance formulas that nourish deeply, protect gently, and support the moments that matter.
            </p>

            <a
              href="/about"
              style={{
                fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 500,
                color: "#292b25", textDecoration: "none", letterSpacing: "0.02em",
                borderBottom: "1px solid #292b25", paddingBottom: 2,
                transition: "color 180ms ease, border-color 180ms ease",
                display: "inline-block",
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "#3F4A36"; el.style.borderColor = "#3F4A36"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "#292b25"; el.style.borderColor = "#292b25"; }}
            >
              Read our story →
            </a>
          </div>
        </div>

        {/* Image — bleeds slightly past right edge */}
        <div
          style={{
            position: "relative",
            minHeight: "clamp(400px, 55vw, 700px)",
            backgroundColor: "#ddd8cd",
            order: 2,
            marginRight: "-5vw",
          }}
          className="mr-0 md:mr-[-5vw]"
        >
          <Image
            src={homepageImages.story}
            alt="Sukoon brand story — calm, intentional skincare"
            fill
            sizes="(min-width: 1024px) 63vw, 100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            unoptimized
          />

          {/* Overlapping detail image — bottom left of image panel */}
          <motion.div
            style={{
              position: "absolute",
              left: -70,
              bottom: -45,
              width: 190,
              zIndex: 4,
              border: "10px solid #f3efe7",
              boxShadow: "0 20px 45px rgba(40,45,36,0.1)",
              overflow: "hidden",
              aspectRatio: "4 / 5",
              y: detailY,
            }}
          >
            <Image
              src={homepageImages.storyDetail}
              alt=""
              fill
              sizes="190px"
              style={{ objectFit: "cover" }}
              unoptimized
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
