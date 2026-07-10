"use client";

import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

const steps = [
  {
    number: "01",
    title: "Cleanse",
    body: "Start with clean, slightly damp skin. The oil absorbs better and spreads more evenly when there is residual moisture.",
  },
  {
    number: "02",
    title: "Warm the oil",
    body: "Place 2–3 drops in your palms. Press them together gently for five seconds to warm the formula.",
  },
  {
    number: "03",
    title: "Press into skin",
    body: "Apply with light upward pressure — not rubbing. Let the oil find the skin rather than being worked into it.",
  },
  {
    number: "04",
    title: "Morning or evening",
    body: "Use daily. Some prefer mornings for the glow. Others use it as the final step in an evening routine.",
  },
];

export function HowToUse() {
  return (
    <section
      id="story"
      aria-label="How to use"
      className="section"
      style={{ backgroundColor: "#F6F1E8" }}
    >
      <div className="container">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">

          {/* Left: heading */}
          <FadeIn>
            <div className="md:sticky md:top-28 md:self-start">
              <span className="eyebrow block mb-4">The ritual</span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                  fontWeight: 600,
                  letterSpacing: "-0.012em",
                  lineHeight: 1.1,
                  color: "#434A33",
                  marginBottom: "1rem",
                }}
              >
                How to use Sukoon.
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.65,
                  color: "#98A47D",
                }}
              >
                Four steps. Thirty seconds.
                Done every day.
              </p>
            </div>
          </FadeIn>

          {/* Right: steps */}
          <FadeInStagger stagger={0.1}>
            <ol className="list-none flex flex-col gap-0">
              {steps.map((s, i) => (
                <FadeInItem key={s.number}>
                  <li
                    className={[
                      "flex gap-6 py-7 md:py-8",
                      i < steps.length - 1 ? "border-b" : "",
                    ].join(" ")}
                    style={{ borderColor: "#DDD5C8" }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.5rem",
                        fontStyle: "italic",
                        fontWeight: 400,
                        color: "#DDD5C8",
                        minWidth: "2.5rem",
                        paddingTop: "2px",
                      }}
                    >
                      {s.number}
                    </span>
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.375rem",
                          fontWeight: 600,
                          color: "#434A33",
                          marginBottom: "0.5rem",
                          lineHeight: 1.2,
                        }}
                      >
                        {s.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.9375rem",
                          lineHeight: 1.65,
                          color: "#98A47D",
                        }}
                      >
                        {s.body}
                      </p>
                    </div>
                  </li>
                </FadeInItem>
              ))}
            </ol>
          </FadeInStagger>
        </div>
      </div>
    </section>
  );
}
