"use client";

import Image from "next/image";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

const ingredients = [
  {
    id: "argan",
    name: "Argan",
    origin: "Souss-Massa, Morocco",
    role: "Primary oil",
    description:
      "Pressed from kernels gathered by Berber women in the Atlas foothills. Cold-pressed within 48 hours of harvest. Unrefined. Unfiltered. Exactly as it was found.",
    property: "Restores lipid barrier",
    image:
      "https://images.unsplash.com/photo-1474979078301-2e37cf1a2660?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Argan nuts and oil in warm morning light",
  },
  {
    id: "rosa-damascena",
    name: "Rosa Damascena",
    origin: "Rose Valley, Bulgaria",
    role: "Hydrating essence",
    description:
      "Steam-distilled at dawn when the flower holds its highest concentration of aromatic compounds. Each litre of hydrosol requires several kilograms of petals harvested by hand.",
    property: "Soothes and balances",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Rosa damascena petals in soft morning light",
  },
  {
    id: "alpine-clay",
    name: "Alpine Kaolin",
    origin: "Haute-Savoie, France",
    role: "Purifying mineral",
    description:
      "White clay formed over millions of years beneath the Alpine foothills. The gentlest of all clays — refined to draw without stripping, to cleanse without disturbing.",
    property: "Draws without stripping",
    image:
      "https://images.unsplash.com/photo-1506905925-4b9c3e561c61?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Fine white clay powder on a warm stone surface",
  },
];

export function Ingredients() {
  return (
    <section
      id="ingredients"
      aria-label="Key ingredients"
      className="section-padding"
      style={{ backgroundColor: "#2B1F14" }}
    >
      <div className="container-page">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <FadeIn>
            <div>
              <span
                className="label block mb-4"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "rgba(214, 201, 180, 0.55)",
                }}
              >
                What goes into it
              </span>
              <h2
                className="font-display font-light"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                  letterSpacing: "-0.015em",
                  lineHeight: "1.05",
                  color: "#F8F3EC",
                }}
              >
                Three ingredients.
                <br />
                <em>Each one earned.</em>
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} direction="none">
            <p
              className="max-w-xs text-sm leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(168, 153, 138, 0.85)",
                letterSpacing: "0.01em",
              }}
            >
              We don't formulate with trend ingredients. We formulate with
              ingredients we can trace to a specific valley, grower, and harvest.
            </p>
          </FadeIn>
        </div>

        {/* Ingredient grid */}
        <FadeInStagger stagger={0.14}>
          <div className="grid md:grid-cols-3 gap-0 md:gap-0">
            {ingredients.map((ing, i) => (
              <FadeInItem key={ing.id}>
                <article
                  className={[
                    "group",
                    i < ingredients.length - 1
                      ? "border-b md:border-b-0 md:border-r"
                      : "",
                    "py-10 md:py-0",
                    i > 0 ? "md:pl-10" : "",
                    i < ingredients.length - 1 ? "md:pr-10" : "",
                  ].join(" ")}
                  style={{ borderColor: "rgba(248, 243, 236, 0.1)" }}
                >
                  {/* Image */}
                  <div
                    className="relative overflow-hidden mb-8"
                    style={{ aspectRatio: "4/3", borderRadius: "2px" }}
                  >
                    <Image
                      src={ing.image}
                      alt={ing.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out
                                 group-hover:scale-[1.04]"
                    />
                    {/* Warm dark overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 50%, rgba(43,31,20,0.35) 100%)",
                      }}
                    />
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="label"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "rgba(168, 153, 138, 0.7)",
                      }}
                    >
                      {ing.role}
                    </span>
                    <span
                      className="label"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "rgba(214, 201, 180, 0.4)",
                        fontSize: "0.625rem",
                      }}
                    >
                      {ing.origin}
                    </span>
                  </div>

                  <h3
                    className="font-display font-light mb-4"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
                      letterSpacing: "-0.01em",
                      lineHeight: "1.1",
                      color: "#F8F3EC",
                    }}
                  >
                    {ing.name}
                  </h3>

                  <p
                    className="text-sm leading-[1.75] mb-6"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "rgba(168, 153, 138, 0.8)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {ing.description}
                  </p>

                  {/* Property tag */}
                  <span
                    className="inline-block px-3 py-1 text-[0.625rem] font-medium tracking-[0.2em] uppercase"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "rgba(214, 201, 180, 0.5)",
                      border: "1px solid rgba(214, 201, 180, 0.15)",
                      borderRadius: "2px",
                    }}
                  >
                    {ing.property}
                  </span>
                </article>
              </FadeInItem>
            ))}
          </div>
        </FadeInStagger>
      </div>
    </section>
  );
}
