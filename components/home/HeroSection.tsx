"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { homepageImages } from "@/lib/homepage";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  return (
    <section
      aria-label="Hero"
      style={{
        position: "relative",
        backgroundColor: "#F5F5F3",
        overflow: "hidden",
        borderBottom: "1px solid #E3E3DF",
      }}
    >
      <div
        className="hero-grid"
        style={{
          maxWidth: 1480, margin: "0 auto", width: "100%",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          alignItems: "stretch",
          minHeight: "88vh",
        }}
      >
        {/* Left — copy */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(6rem, 10vw, 8rem) clamp(1.25rem, 5vw, 4.5rem) clamp(3rem, 6vw, 4rem)",
        }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="eyebrow"
            style={{ marginBottom: "1.75rem" }}
          >
            100% Waterless · Made in the UK
          </motion.p>

          <h1 style={{
            fontFamily: "var(--font-body)",
            fontWeight: 200,
            fontSize: "clamp(3.25rem, 7.5vw, 7rem)",
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            color: "#111111",
            margin: "0 0 1.75rem",
          }}>
            {["One oil.", "Your face", "and hairline."].map((line, i) => (
              <motion.span
                key={line}
                style={{ display: "block", overflow: "hidden" }}
              >
                <motion.span
                  style={{ display: "block" }}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.85, delay: 0.1 + i * 0.09, ease: easeOut }}
                >
                  {line}
                </motion.span>
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: easeOut }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 1.25vw, 1.125rem)",
              lineHeight: 1.7,
              color: "#676764",
              maxWidth: 440,
              margin: "0 0 2.5rem",
            }}
          >
            The Daily Solace Fluid tackles acne, strengthens your skin barrier,
            and reverses friction-induced hairline thinning — all in under 60 seconds.
            Five ingredients. No fillers. No water.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62, ease: easeOut }}
            style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}
          >
            <Link href="/shop" className="magnetic-btn magnetic-btn--dark">
              <span>Shop Now</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link href="/#ingredients" className="magnetic-btn magnetic-btn--outline">
              See the Formula
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            style={{ marginTop: "2.75rem", display: "flex", gap: "2rem", flexWrap: "wrap" }}
          >
            {["Vegan", "Cruelty Free", "Waterless", "5 Ingredients"].map(s => (
              <span key={s} style={{
                fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase", color: "#92928D",
              }}>
                {s}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right — product image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: easeOut }}
          style={{ position: "relative", overflow: "hidden", backgroundColor: "#EAEAE8", minHeight: 420 }}
        >
          <Image
            src={homepageImages.hero}
            alt="Sukoon Daily Solace Fluid"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .hero-grid > div:last-child {
            aspect-ratio: 4 / 5;
            min-height: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
