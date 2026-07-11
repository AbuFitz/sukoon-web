"use client";

import Image from "next/image";
import { useState } from "react";
import { ingredients, homepageImages } from "@/lib/homepage";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

const icons: Record<string, React.ReactNode> = {
  "Olive Squalane": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22C12 22 5 17 5 11a7 7 0 0 1 14 0c0 6-7 11-7 11Z"/>
      <line x1="12" y1="11" x2="12" y2="16"/>
    </svg>
  ),
  "Vitamin B3": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 L14.5 8.5 L21 9.3 L16.5 13.7 L17.7 20.1 L12 17.2 L6.3 20.1 L7.5 13.7 L3 9.3 L9.5 8.5 Z"/>
    </svg>
  ),
  "Black Seed Oil": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="12" rx="4" ry="7" transform="rotate(-30 12 12)"/>
      <ellipse cx="12" cy="12" rx="4" ry="7" transform="rotate(30 12 12)"/>
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>
    </svg>
  ),
  "Vitamin E": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21 C8 18 4 14.5 4 10.5 C4 7.5 6.5 5 9.5 5 C10.8 5 12 5.6 12 5.6 C12 5.6 13.2 5 14.5 5 C17.5 5 20 7.5 20 10.5 C20 14.5 16 18 12 21Z"/>
    </svg>
  ),
  "Vanilla Extract": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="21" x2="12" y2="6"/>
      <path d="M12 10 C10 8 7 7.5 6 9 C7 11 10 11.5 12 10Z"/>
      <path d="M12 14 C14 12 17 11.5 18 13 C17 15 14 15.5 12 14Z"/>
    </svg>
  ),
};

function IngredientColumn({ ing, index, isLast }: { ing: typeof ingredients[number]; index: number; isLast: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        paddingInline: "2rem",
        paddingLeft: index === 0 ? 0 : undefined,
        paddingRight: isLast ? 0 : undefined,
        borderRight: !isLast ? "1px solid #e4e5de" : "none",
        paddingTop: "2.75rem",
        display: "flex", flexDirection: "column", gap: "0.875rem",
      }}
    >
      {/* Icon — bare, no circle */}
      <div
        style={{
          height: 28,
          display: "flex", alignItems: "center",
          flexShrink: 0,
          color: hovered ? "#45543d" : "#8a9482",
          transition: "color 220ms ease, transform 220ms ease",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
        }}
      >
        {icons[ing.name] ?? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="8"/>
          </svg>
        )}
      </div>

      <div>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 600,
          color: "#292b25", margin: "0 0 0.25rem",
        }}>
          {ing.name}
        </p>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 600,
          letterSpacing: "0.13em", textTransform: "uppercase",
          color: "#a8ad9e", margin: "0 0 0.75rem",
        }}>
          {ing.latin}
        </p>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.75,
          color: "#64685f", margin: 0,
        }}>
          {ing.description}
        </p>
      </div>

      <p style={{
        fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 700,
        letterSpacing: "0.1em", textTransform: "uppercase", color: "#9a9f95",
        margin: "auto 0 0",
        paddingTop: "0.75rem",
        borderTop: `1px solid ${hovered ? "rgba(69,84,61,0.2)" : "rgba(69,84,61,0.1)"}`,
        transition: "border-color 220ms ease",
      }}>
        {ing.percent} of formula
      </p>
    </div>
  );
}

export function IngredientsSection() {
  return (
    <section
      id="ingredients"
      style={{
        backgroundColor: "#FFFFFF",
        padding: "112px 0 120px",
        borderTop: "1px solid #e4e0d6",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Single botanical branch — top right only */}
      <div style={{
        position: "absolute", top: -60, right: -70,
        width: "clamp(220px, 22vw, 340px)",
        opacity: 0.88, pointerEvents: "none", zIndex: 1,
      }}>
        <Image
          src={homepageImages.ingredientsLeafTop}
          alt=""
          width={340}
          height={415}
          style={{ width: "100%", height: "auto" }}
          unoptimized
        />
      </div>

      {/* Content */}
      <div style={{ width: "min(calc(100% - 80px), 1400px)", margin: "0 auto", position: "relative", zIndex: 2 }}>

        <FadeIn direction="up" delay={0.05}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: "clamp(2.625rem, 3.8vw, 4.25rem)",
            lineHeight: 0.98, letterSpacing: "-0.028em",
            color: "#292b25", margin: 0,
          }}>
            Five ingredients. Nothing extra.
          </h2>
        </FadeIn>

        {/* Desktop grid */}
        <FadeInStagger stagger={0.07} delay={0.15}>
          <div className="hidden md:grid" style={{ gridTemplateColumns: "repeat(5, minmax(0, 1fr))", marginTop: 54 }}>
            {ingredients.map((ing, i) => (
              <FadeInItem key={ing.name} direction="up">
                <IngredientColumn ing={ing} index={i} isLast={i === ingredients.length - 1} />
              </FadeInItem>
            ))}
          </div>
        </FadeInStagger>

        {/* Mobile stacked */}
        <div className="flex flex-col md:hidden" style={{ marginTop: 40 }}>
          {ingredients.map((ing, i) => (
            <div
              key={ing.name}
              style={{
                display: "grid", gridTemplateColumns: "50px 1fr",
                gap: "1.125rem", alignItems: "flex-start",
                padding: "1.625rem 0",
                borderBottom: i < ingredients.length - 1 ? "1px solid #e8e9e2" : "none",
              }}
            >
              <div style={{
                width: 50, height: 50,
                border: "1px solid rgba(69,84,61,0.28)",
                borderRadius: "9999px",
                display: "grid", placeItems: "center",
                color: "#78836e", flexShrink: 0,
              }}>
                {icons[ing.name] ?? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="8"/></svg>}
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 600, color: "#292b25", margin: "0 0 0.2rem" }}>{ing.name}</p>
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
