"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

const products = [
  {
    id: "morning-oil",
    step: "Step One",
    name: "The Morning Oil",
    subtitle: "Brightening Face Oil",
    description:
      "A weightless blend of Argan and Rosehip pressed at low temperature, absorbed in seconds, leaving nothing but warmth.",
    volume: "30 ml",
    price: "£48",
    note: "Best applied to damp skin",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Glass dropper bottle of morning oil resting on warm stone",
  },
  {
    id: "still-toner",
    step: "Step Two",
    name: "The Still Toner",
    subtitle: "Balancing Essence",
    description:
      "Rose hydrosol and hyaluronic acid in a formula thin as water. Pressed gently into the skin with open palms — not cotton.",
    volume: "150 ml",
    price: "£34",
    note: "Use morning and evening",
    image:
      "https://images.unsplash.com/photo-1556228720-da8e2c9bcd42?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Frosted glass toner bottle beside a ceramic dish",
  },
  {
    id: "slow-cream",
    step: "Step Three",
    name: "The Slow Cream",
    subtitle: "Deep Moisture",
    description:
      "Alpine clay and Shea in a cream that rewards patience. Apply slowly. Leave it to work. Some things cannot be rushed.",
    volume: "50 ml",
    price: "£56",
    note: "Particularly effective at night",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Open cream jar resting on warm plaster surface in morning light",
  },
];

export function Collection() {
  return (
    <section
      id="collection"
      aria-label="The Collection"
      className="bg-ivory section-padding"
    >
      <div className="container-page">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <FadeIn>
            <div>
              <span
                className="label text-stone block mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                The Collection
              </span>
              <h2
                className="font-display font-light text-bark"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                  letterSpacing: "-0.015em",
                  lineHeight: "1.05",
                }}
              >
                Three steps.
                <br />
                <em>One ritual.</em>
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} direction="none">
            <p
              className="text-stone max-w-xs text-sm leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                letterSpacing: "0.01em",
              }}
            >
              Designed to be used in sequence. Each product prepares the skin
              for the one that follows.
            </p>
          </FadeIn>
        </div>

        {/* Product list */}
        <FadeInStagger stagger={0.15}>
          <div className="flex flex-col gap-0">
            {products.map((product, i) => (
              <FadeInItem key={product.id}>
                <article
                  className={[
                    "group grid md:grid-cols-[1fr_1.4fr_1fr] gap-0",
                    "border-t border-linen last:border-b",
                    "py-10 md:py-0",
                  ].join(" ")}
                >
                  {/* Column 1: Image */}
                  <div className="relative overflow-hidden md:py-10 md:pr-10">
                    <div
                      className="relative overflow-hidden"
                      style={{
                        aspectRatio: "3/4",
                        borderRadius: "2px",
                        maxWidth: "220px",
                      }}
                    >
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        sizes="(max-width: 768px) 50vw, 22vw"
                        className="object-cover object-center transition-transform duration-700 ease-out
                                   group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>

                  {/* Column 2: Details */}
                  <div className="md:py-10 md:px-10 md:border-x md:border-linen flex flex-col justify-between gap-6 md:gap-0">
                    <div>
                      <span
                        className="label text-stone block mb-4"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {product.step}
                      </span>
                      <h3
                        className="font-display font-light text-bark mb-1"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(1.75rem, 2.5vw, 2.25rem)",
                          letterSpacing: "-0.01em",
                          lineHeight: "1.1",
                        }}
                      >
                        {product.name}
                      </h3>
                      <p
                        className="label text-stone mb-6"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {product.subtitle}
                      </p>
                      <p
                        className="text-bark-mid leading-[1.7] max-w-sm"
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.9375rem",
                          letterSpacing: "0.01em",
                        }}
                      >
                        {product.description}
                      </p>
                    </div>

                    <p
                      className="text-xs text-stone italic mt-4 md:mt-0"
                      style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
                    >
                      {product.note}
                    </p>
                  </div>

                  {/* Column 3: Price & CTA */}
                  <div className="md:py-10 md:pl-10 flex md:flex-col justify-between md:justify-start gap-4 items-start md:items-end md:text-right">
                    <div>
                      <span
                        className="label text-stone block mb-1"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {product.volume}
                      </span>
                      <span
                        className="font-display font-light text-bark"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {product.price}
                      </span>
                    </div>

                    <Link
                      href={`#${product.id}`}
                      className="btn-ghost mt-auto flex items-center gap-2"
                      aria-label={`Add ${product.name} to your ritual`}
                    >
                      Add to ritual
                      <ArrowUpRight size={13} strokeWidth={1.5} />
                    </Link>
                  </div>
                </article>
              </FadeInItem>
            ))}
          </div>
        </FadeInStagger>

        {/* View all CTA */}
        <FadeIn delay={0.1} direction="up">
          <div className="mt-14 flex justify-center">
            <Link href="#collection" className="text-link">
              View the complete collection
              <ArrowUpRight size={12} strokeWidth={1.5} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
