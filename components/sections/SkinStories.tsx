"use client";

import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

const testimonials = [
  {
    id: "sarah",
    quote:
      "I've used expensive serums for years. This is the first one that made me slow down and actually enjoy the moment. The oil absorbs before I've even finished applying it.",
    name: "Sarah M.",
    skinType: "Combination skin",
    location: "London",
    initials: "S",
  },
  {
    id: "amara",
    quote:
      "The morning ritual changed my relationship with my skin entirely. Not just how it looks — how I feel in it. I didn't expect a face oil to do that.",
    name: "Amara K.",
    skinType: "Dry skin",
    location: "Amsterdam",
    initials: "A",
  },
  {
    id: "lea",
    quote:
      "My skin has never reacted well to products. Sukoon was the first brand where nothing stung, nothing broke out. Just quiet, consistent improvement.",
    name: "Léa D.",
    skinType: "Sensitive skin",
    location: "Paris",
    initials: "L",
  },
];

export function SkinStories() {
  return (
    <section
      aria-label="Skin stories"
      className="bg-cream section-padding"
    >
      <div className="container-page">
        {/* Header */}
        <FadeIn>
          <div className="mb-16 md:mb-20">
            <span
              className="label text-stone block mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Skin stories
            </span>
            <h2
              className="font-display font-light text-bark"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                letterSpacing: "-0.015em",
                lineHeight: "1.05",
                maxWidth: "480px",
              }}
            >
              From those who
              <br />
              <em>found their stillness.</em>
            </h2>
          </div>
        </FadeIn>

        {/* Testimonials */}
        <FadeInStagger stagger={0.13}>
          <div className="grid md:grid-cols-3 gap-10 md:gap-0">
            {testimonials.map((t, i) => (
              <FadeInItem key={t.id}>
                <article
                  className={[
                    "group",
                    i < testimonials.length - 1
                      ? "pb-10 md:pb-0 border-b md:border-b-0 md:border-r border-linen"
                      : "",
                    i > 0 ? "md:pl-10" : "",
                    i < testimonials.length - 1 ? "md:pr-10" : "",
                  ].join(" ")}
                >
                  {/* Quote mark */}
                  <div
                    className="font-display text-linen mb-6 leading-none select-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "5rem",
                      fontStyle: "italic",
                      lineHeight: "0.7",
                    }}
                    aria-hidden
                  >
                    &ldquo;
                  </div>

                  <blockquote
                    className="font-display font-light text-bark-mid leading-[1.75] mb-8"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1rem, 1.4vw, 1.1875rem)",
                      fontStyle: "italic",
                      letterSpacing: "0.005em",
                    }}
                  >
                    {t.quote}
                  </blockquote>

                  {/* Attribution */}
                  <footer className="flex items-center gap-4">
                    {/* Monogram circle */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#D6C9B4" }}
                      aria-hidden
                    >
                      <span
                        className="font-display text-bark"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "0.875rem",
                          fontStyle: "italic",
                        }}
                      >
                        {t.initials}
                      </span>
                    </div>

                    <div>
                      <cite
                        className="not-italic"
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.8125rem",
                          fontWeight: 500,
                          color: "#2B1F14",
                          letterSpacing: "0.01em",
                          display: "block",
                        }}
                      >
                        {t.name}
                      </cite>
                      <span
                        className="label text-stone"
                        style={{ fontFamily: "var(--font-body)", fontSize: "0.625rem" }}
                      >
                        {t.skinType} &middot; {t.location}
                      </span>
                    </div>
                  </footer>
                </article>
              </FadeInItem>
            ))}
          </div>
        </FadeInStagger>
      </div>
    </section>
  );
}
