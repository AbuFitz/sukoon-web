"use client";

import { Leaf, Droplets, Shield, Package, Recycle } from "lucide-react";
import { FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";
import { FadeIn } from "@/components/ui/FadeIn";

const badges = [
  {
    icon: Leaf,
    title: "100% natural ingredients",
    body: "Every ingredient is plant-derived or mineral. No synthetic fragrance, parabens or sulphates.",
  },
  {
    icon: Droplets,
    title: "Cold-pressed, unrefined",
    body: "Oils are processed at low temperatures to preserve active compounds and nutritional profile.",
  },
  {
    icon: Package,
    title: "Small-batch approach",
    body: "Each batch is produced in small volumes to ensure freshness and quality control.",
  },
  {
    icon: Recycle,
    title: "Recyclable glass bottle",
    body: "30ml amber glass dropper. Fully recyclable packaging. Minimal plastic, minimal waste.",
  },
  {
    icon: Shield,
    title: "Cruelty-free",
    body: "Never tested on animals. Not now, not ever. Certified and committed.",
  },
];

export function TrustBadges() {
  return (
    <section
      aria-label="Why trust Sukoon"
      className="section"
      style={{ backgroundColor: "#FBF8F3" }}
    >
      <div className="container">
        <FadeIn>
          <div className="mb-10 md:mb-14">
            <span className="eyebrow block mb-3">Our commitment</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                fontWeight: 600,
                letterSpacing: "-0.012em",
                lineHeight: 1.1,
                color: "#434A33",
              }}
            >
              Made the right way, from the start.
            </h2>
          </div>
        </FadeIn>

        <FadeInStagger stagger={0.09}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px"
            style={{ backgroundColor: "#DDD5C8" }}
          >
            {badges.map((b) => {
              const Icon = b.icon;
              return (
                <FadeInItem key={b.title}>
                  <div
                    className="flex flex-col gap-3 p-6 md:p-7"
                    style={{ backgroundColor: "#FBF8F3" }}
                  >
                    <Icon size={20} strokeWidth={1.75} color="#98A47D" />
                    <h3
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "#434A33",
                        lineHeight: 1.3,
                      }}
                    >
                      {b.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8375rem",
                        lineHeight: 1.6,
                        color: "#98A47D",
                      }}
                    >
                      {b.body}
                    </p>
                  </div>
                </FadeInItem>
              );
            })}
          </div>
        </FadeInStagger>
      </div>
    </section>
  );
}
