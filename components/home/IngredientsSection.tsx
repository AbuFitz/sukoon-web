"use client";

import Image from "next/image";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

const ingredients = [
  {
    numeral: "١",
    name: "Olive Squalane",
    description: "Lightweight hydration that absorbs quickly without clogging pores.",
    color: "#A79B8B",
  },
  {
    numeral: "٢",
    name: "Vitamin B3",
    description: "Supports the skin barrier across the face and hairline.",
    color: "#8FA37D",
  },
  {
    numeral: "٣",
    name: "Black Seed Oil",
    description: "Helps calm visible irritation and nourish stressed skin.",
    color: "#34432D",
  },
  {
    numeral: "٤",
    name: "Vitamin E",
    description: "Antioxidant support that helps protect and preserve the formula.",
    color: "#C68B3C",
  },
  {
    numeral: "٥",
    name: "Vanilla Extract",
    description: "Softens the natural scent without synthetic fragrance.",
    color: "#9D9184",
  },
];

export function IngredientsSection() {
  return (
    <section
      id="ingredients"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#FAF9F5",
        padding: "clamp(80px, 9vw, 140px) clamp(2rem, 5vw, 5rem)",
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

      {/* Content — sits above leaf */}
      <div
        style={{
          width: "min(calc(100% - 0px), 1400px)",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Heading */}
        <FadeIn direction="up" delay={0.05}>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "clamp(2.75rem, 4.5vw, 4.25rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#292b25",
            margin: "0 0 clamp(3.5rem, 6vw, 5.5rem)",
            maxWidth: "14ch",
          }}>
            Five ingredients. Nothing extra.
          </h2>
        </FadeIn>

        {/* Desktop: 5-col grid / Tablet: 2-col / Mobile: 1-col */}
        <FadeInStagger stagger={0.07} delay={0.12}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
            style={{ gap: "clamp(2rem, 3vw, 3.5rem)" }}
          >
            {ingredients.map((ing) => (
              <FadeInItem key={ing.name} direction="up">
                <div style={{ textAlign: "center" }}>

                  {/* Arabic numeral */}
                  <div style={{
                    fontFamily: '"Noto Naskh Arabic", "Amiri", "Cormorant Garamond", Georgia, serif',
                    fontWeight: 400,
                    fontSize: "clamp(64px, 6vw, 96px)",
                    lineHeight: 1,
                    color: ing.color,
                    marginBottom: "1.5rem",
                    display: "block",
                  }}>
                    {ing.numeral}
                  </div>

                  {/* Name */}
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    fontSize: "clamp(1.25rem, 1.7vw, 1.6875rem)",
                    lineHeight: 1.2,
                    color: "#22231F",
                    margin: "0 0 0.875rem",
                  }}>
                    {ing.name}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9375rem",
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
