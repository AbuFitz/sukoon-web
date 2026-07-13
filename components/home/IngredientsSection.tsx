"use client";

import Image from "next/image";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

const ingredients = [
  {
    numeral: "١",
    name: "Olive Squalane",
    description: "Lightweight hydration that absorbs quickly without clogging pores.",
    bg: "#CEC2AE",
    numColor: "rgba(255,255,255,0.22)",
  },
  {
    numeral: "٢",
    name: "Vitamin B3",
    description: "Supports the skin barrier across the face and hairline.",
    bg: "#A8BCA0",
    numColor: "rgba(255,255,255,0.22)",
  },
  {
    numeral: "٣",
    name: "Black Seed Oil",
    description: "Helps calm visible irritation and nourish stressed skin.",
    bg: "#364530",
    numColor: "rgba(255,255,255,0.14)",
  },
  {
    numeral: "٤",
    name: "Vitamin E",
    description: "Antioxidant support that helps protect and preserve the formula.",
    bg: "#C99850",
    numColor: "rgba(255,255,255,0.20)",
  },
  {
    numeral: "٥",
    name: "Vanilla Extract",
    description: "Softens the natural scent without synthetic fragrance.",
    bg: "#B8ADA4",
    numColor: "rgba(255,255,255,0.22)",
  },
];

export function IngredientsSection() {
  return (
    <section
      id="ingredients"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        padding: "112px 0 120px",
        borderTop: "1px solid #e4e0d6",
      }}
    >
      {/* Botanical leaf — enters from top-right, hidden on mobile */}
      <div
        className="hidden md:block"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "clamp(180px, 18vw, 320px)",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 1,
          transform: "translate(10%, -10%)",
        }}
        aria-hidden="true"
      >
        <Image
          src="/images/decor/ingredients-leaf.png"
          alt=""
          width={320}
          height={213}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      {/* Content */}
      <div style={{ width: "min(calc(100% - 80px), 1400px)", margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* Heading */}
        <FadeIn direction="up" delay={0.05}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: "clamp(2.625rem, 3.8vw, 4.25rem)",
            lineHeight: 0.98, letterSpacing: "-0.028em",
            color: "#292b25", margin: "0 0 clamp(2rem, 4vw, 3rem)",
          }}>
            Five ingredients. Nothing extra.
          </h2>
        </FadeIn>

        {/* Grid: 5-col desktop / 2-col tablet / 1-col mobile */}
        <FadeInStagger stagger={0.07} delay={0.12}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
            style={{ gap: "clamp(1rem, 2vw, 1.5rem)" }}
          >
            {ingredients.map((ing) => (
              <FadeInItem key={ing.name} direction="up">
                <div>
                  {/* Coloured card with numeral watermark */}
                  <div style={{
                    position: "relative",
                    backgroundColor: ing.bg,
                    aspectRatio: "3 / 4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    marginBottom: "1.25rem",
                  }}>
                    <span style={{
                      fontFamily: '"Noto Naskh Arabic", "Amiri", Georgia, serif',
                      fontWeight: 400,
                      fontSize: "clamp(96px, 9vw, 140px)",
                      lineHeight: 1,
                      color: ing.numColor,
                      userSelect: "none",
                      pointerEvents: "none",
                    }}>
                      {ing.numeral}
                    </span>
                  </div>

                  {/* Name */}
                  <p style={{
                    fontFamily: "var(--font-body)", fontWeight: 600,
                    fontSize: "0.9375rem",
                    color: "#22231F",
                    margin: "0 0 0.5rem",
                    lineHeight: 1.3,
                  }}>
                    {ing.name}
                  </p>

                  {/* Description */}
                  <p style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "#292A26",
                    margin: 0,
                  }}>
                    {ing.description}
                  </p>
                </div>
              </FadeInItem>
            ))}
          </div>
        </FadeInStagger>
      </div>
    </section>
  );
}
