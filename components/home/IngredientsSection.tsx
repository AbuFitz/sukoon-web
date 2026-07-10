"use client";

import Image from "next/image";
import { useState } from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ingredients, homepageImages } from "@/lib/homepage";

const icons: Record<string, React.ReactNode> = {
  "Olive Squalane": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#78836e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22C12 22 5 17 5 11a7 7 0 0 1 14 0c0 6-7 11-7 11Z"/>
      <line x1="12" y1="11" x2="12" y2="16"/>
    </svg>
  ),
  "Vitamin B3": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#78836e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 L14.5 8.5 L21 9.3 L16.5 13.7 L17.7 20.1 L12 17.2 L6.3 20.1 L7.5 13.7 L3 9.3 L9.5 8.5 Z"/>
    </svg>
  ),
  "Black Seed Oil": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#78836e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="12" rx="4" ry="7" transform="rotate(-30 12 12)"/>
      <ellipse cx="12" cy="12" rx="4" ry="7" transform="rotate(30 12 12)"/>
      <circle cx="12" cy="12" r="1.5" fill="#78836e" stroke="none"/>
    </svg>
  ),
  "Vitamin E": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#78836e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21 C8 18 4 14.5 4 10.5 C4 7.5 6.5 5 9.5 5 C10.8 5 12 5.6 12 5.6 C12 5.6 13.2 5 14.5 5 C17.5 5 20 7.5 20 10.5 C20 14.5 16 18 12 21Z"/>
    </svg>
  ),
  "Vanilla Extract": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#78836e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="21" x2="12" y2="6"/>
      <path d="M12 10 C10 8 7 7.5 6 9 C7 11 10 11.5 12 10Z"/>
      <path d="M12 14 C14 12 17 11.5 18 13 C17 15 14 15.5 12 14Z"/>
    </svg>
  ),
};

function IngredientItem({ ing, index, isLast }: { ing: typeof ingredients[number]; index: number; isLast: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        paddingInline: index === 0 ? "0 2.25rem" : index === 4 ? "2.25rem 0" : "2.25rem",
        borderRight: !isLast ? "1px solid #dedfd8" : "none",
        paddingTop: "2.75rem",
        display: "flex", flexDirection: "column", gap: "1rem",
        position: "relative",
        transition: "transform 250ms ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
    >
      {/* Hover background */}
      <div style={{
        position: "absolute",
        inset: "-18px 8px",
        backgroundColor: "rgba(120,131,110,0.06)",
        opacity: hovered ? 1 : 0,
        transform: hovered ? "scale(1)" : "scale(0.96)",
        transition: "opacity 250ms ease, transform 250ms ease",
        pointerEvents: "none",
      }} />

      {/* Icon circle */}
      <div style={{
        width: 52, height: 52,
        border: `1px solid ${hovered ? "rgba(120,131,110,0.55)" : "rgba(120,131,110,0.35)"}`,
        borderRadius: "9999px",
        display: "grid", placeItems: "center",
        flexShrink: 0,
        transition: "border-color 250ms ease",
        position: "relative",
      }}>
        {icons[ing.name] ?? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#78836e" strokeWidth="1.6">
            <circle cx="12" cy="12" r="8"/>
          </svg>
        )}
      </div>

      <div style={{ position: "relative" }}>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 500,
          color: "#292b25", margin: "0 0 0.25rem",
        }}>
          {ing.name}
        </p>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 600,
          letterSpacing: "0.12em", textTransform: "uppercase",
          color: "#9a9f95", margin: "0 0 0.75rem",
        }}>
          {ing.latin}
        </p>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.7,
          color: hovered ? "#4a4f46" : "#64685f",
          margin: 0, transition: "color 250ms ease",
        }}>
          {ing.description}
        </p>
      </div>

      <p style={{
        fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 600,
        letterSpacing: "0.08em", color: "#78836e",
        margin: "auto 0 0", position: "relative",
      }}>
        {ing.percent} of formula
      </p>
    </div>
  );
}

export function IngredientsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const leafTopY = useTransform(scrollYProgress, [0, 1], [-20, 30]);
  const leafBottomY = useTransform(scrollYProgress, [0, 1], [30, -20]);

  return (
    <section
      ref={sectionRef}
      id="ingredients"
      style={{
        backgroundColor: "#FFFFFF",
        padding: "clamp(5.5rem, 10vw, 7.5rem) 0",
        borderTop: "1px solid #dedfd8",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Botanical corner — top right */}
      <motion.div style={{
        position: "absolute", top: -50, right: -90,
        width: 310, zIndex: 1, pointerEvents: "none",
        y: leafTopY,
      }}>
        <Image
          src={homepageImages.ingredientsLeafTop}
          alt="" width={310} height={380}
          style={{ width: "100%", height: "auto" }}
          unoptimized
        />
      </motion.div>

      {/* Botanical corner — bottom left */}
      <motion.div style={{
        position: "absolute", left: -100, bottom: -120,
        width: 260, zIndex: 1, pointerEvents: "none", opacity: 0.55,
        y: leafBottomY,
      }}>
        <Image
          src={homepageImages.ingredientsLeafBottom}
          alt="" width={260} height={340}
          style={{ width: "100%", height: "auto" }}
          unoptimized
        />
      </motion.div>

      {/* Content */}
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(2rem, 5vw, 3.5rem)", position: "relative", zIndex: 2 }}>

        {/* Centred heading */}
        <div style={{ marginBottom: 0, textAlign: "center" }}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: "clamp(2.5rem, 3.8vw, 4rem)",
            lineHeight: 0.98, letterSpacing: "-0.025em",
            color: "#292b25", margin: 0,
          }}>
            Five ingredients.<br />
            <em style={{ fontStyle: "italic" }}>Nothing extra.</em>
          </h2>
        </div>

        {/* Desktop grid */}
        <div
          className="hidden md:grid"
          style={{ gridTemplateColumns: "repeat(5, minmax(0, 1fr))", marginTop: 54 }}
        >
          {ingredients.map((ing, i) => (
            <IngredientItem key={ing.name} ing={ing} index={i} isLast={i === ingredients.length - 1} />
          ))}
        </div>

        {/* Mobile stacked */}
        <div className="flex flex-col md:hidden" style={{ marginTop: 40 }}>
          {ingredients.map((ing, i) => (
            <div
              key={ing.name}
              style={{
                display: "grid", gridTemplateColumns: "52px 1fr",
                gap: "1.25rem", alignItems: "flex-start",
                padding: "1.75rem 0",
                borderBottom: i < ingredients.length - 1 ? "1px solid #dedfd8" : "none",
              }}
            >
              <div style={{
                width: 52, height: 52,
                border: "1px solid rgba(120,131,110,0.35)",
                borderRadius: "9999px",
                display: "grid", placeItems: "center", flexShrink: 0,
              }}>
                {icons[ing.name] ?? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#78836e" strokeWidth="1.6"><circle cx="12" cy="12" r="8"/></svg>}
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 500, color: "#292b25", margin: "0 0 0.25rem" }}>{ing.name}</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9a9f95", margin: "0 0 0.5rem" }}>{ing.latin} · {ing.percent}</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.7, color: "#64685f", margin: 0 }}>{ing.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
