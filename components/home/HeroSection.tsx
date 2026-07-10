"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { homepageImages } from "@/lib/homepage";

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`;

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const leafY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const leafRotate = useTransform(scrollYProgress, [0, 1], [0, 1.5]);

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(680px, 80vh, 900px)",
        overflow: "hidden",
        backgroundColor: "#d8d3c8",
      }}
    >
      <Image
        src={homepageImages.hero}
        alt="Sukoon Daily Solace Fluid"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
        unoptimized
      />

      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(90deg, rgba(27,30,25,0.36) 0%, rgba(27,30,25,0.12) 55%, rgba(27,30,25,0) 80%)",
      }} />

      {/* Grain */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        backgroundImage: GRAIN,
        opacity: 0.028,
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        display: "flex", alignItems: "center",
        padding: "0 clamp(2.625rem, 5.25vw, 5.25rem)",
      }}>
        <div style={{ maxWidth: 650 }}>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: "clamp(3.375rem, 5.2vw, 5.125rem)",
            lineHeight: 0.98, letterSpacing: "-0.035em",
            color: "#FFFFFF", margin: "0 0 1.5rem",
          }}>
            <span style={{ display: "block" }}>Care for your face.</span>
            <em style={{ display: "block", fontStyle: "italic" }}>Care for your hairline.</em>
          </h1>

          <p style={{
            fontFamily: "var(--font-body)", fontSize: "clamp(0.9375rem, 1.2vw, 1.0625rem)",
            lineHeight: 1.65, color: "rgba(255,255,255,0.68)",
            margin: "0 0 2.5rem", maxWidth: 400,
          }}>
            Skincare that protects where your skin meets your story.
          </p>

          <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
            <a
              href="/shop"
              style={{
                display: "inline-flex", alignItems: "center",
                fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 500,
                letterSpacing: "0.06em", textTransform: "uppercase",
                color: "#FFFFFF", backgroundColor: "#3F4A36",
                border: "1px solid #3F4A36",
                height: 52, padding: "0 2rem",
                textDecoration: "none",
                transition: "background 180ms ease, border-color 180ms ease",
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = "#2C3528"; el.style.borderColor = "#2C3528"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = "#3F4A36"; el.style.borderColor = "#3F4A36"; }}
            >
              Shop Now
            </a>
            <a
              href="/about"
              style={{
                display: "inline-flex", alignItems: "center",
                fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 500,
                letterSpacing: "0.06em", textTransform: "uppercase",
                color: "#FFFFFF",
                border: "1px solid rgba(255,255,255,0.6)",
                height: 52, padding: "0 2rem",
                textDecoration: "none",
                backdropFilter: "blur(3px)",
                transition: "border-color 180ms ease, background 180ms ease",
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "rgba(255,255,255,0.9)"; el.style.backgroundColor = "rgba(255,255,255,0.1)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "rgba(255,255,255,0.6)"; el.style.backgroundColor = "transparent"; }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Botanical foreground — parallax on scroll */}
      <motion.div
        style={{
          position: "absolute",
          right: -70,
          bottom: -50,
          width: "clamp(240px, 24vw, 440px)",
          zIndex: 3,
          pointerEvents: "none",
          y: leafY,
          rotate: leafRotate,
        }}
      >
        <Image
          src={homepageImages.heroLeaf}
          alt=""
          width={440}
          height={660}
          style={{ width: "100%", height: "auto", opacity: 0.88 }}
          unoptimized
        />
      </motion.div>
    </section>
  );
}
