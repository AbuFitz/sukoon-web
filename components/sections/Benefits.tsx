"use client";

import { Leaf, Droplets, Sun, Shield } from "lucide-react";
import { FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";
import { FadeIn } from "@/components/ui/FadeIn";

const benefits = [
  {
    icon: Droplets,
    title: "Deeply nourishes",
    body: "Cold-pressed black seed and argan replenish the skin's natural lipid barrier, leaving it visibly softer.",
  },
  {
    icon: Sun,
    title: "Supports a healthy glow",
    body: "Rich in omega-6 and vitamin E. Daily use brings a natural radiance without heaviness.",
  },
  {
    icon: Leaf,
    title: "Lightweight daily oil",
    body: "Absorbs quickly. No greasy residue. Wears well under makeup and settles in minutes.",
  },
  {
    icon: Shield,
    title: "Calms sensitive skin",
    body: "Thymoquinone in black seed has centuries of use in calming irritated and reactive skin.",
  },
];

export function Benefits() {
  return (
    <section
      aria-label="Product benefits"
      className="section"
      style={{ backgroundColor: "#FBF8F3" }}
    >
      <div className="container">
        <FadeIn>
          <div className="mb-10 md:mb-14">
            <span className="eyebrow block mb-3">Why Sukoon</span>
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
              One oil. Four reasons to use it daily.
            </h2>
          </div>
        </FadeIn>

        <FadeInStagger stagger={0.09}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "#DDD5C8" }}>
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <FadeInItem key={b.title}>
                <div
                  className="flex flex-col gap-4 p-7 md:p-8"
                  style={{ backgroundColor: "#FBF8F3" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#E8DFC9" }}
                  >
                    <Icon size={18} strokeWidth={1.75} color="#98A47D" />
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      color: "#434A33",
                      lineHeight: 1.2,
                    }}
                  >
                    {b.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
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
