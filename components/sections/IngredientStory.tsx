"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

const facts = [
  { label: "Origin",      value: "Ethiopia & Egypt" },
  { label: "INCI name",   value: "Nigella Sativa Seed Oil" },
  { label: "Key compound","value": "Thymoquinone (TQ)" },
  { label: "Use in formula","value": "35% concentration" },
];

export function IngredientStory() {
  return (
    <section
      id="ingredients"
      aria-label="Key ingredient — Black Seed Oil"
      className="section overflow-hidden"
      style={{ backgroundColor: "#E8DFC9" }}
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Image */}
          <FadeIn direction="left" duration={0.8}>
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "4/5", borderRadius: "4px", maxWidth: "480px" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1474979078301-2e37cf1a2660?auto=format&fit=crop&w=900&q=80"
                alt="Black seed and botanical ingredients in warm light"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover object-center"
              />
            </div>
          </FadeIn>

          {/* Text */}
          <div>
            <FadeIn delay={0.1}>
              <span className="eyebrow block mb-5">Hero ingredient</span>
            </FadeIn>

            <FadeIn delay={0.18}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  fontWeight: 600,
                  letterSpacing: "-0.015em",
                  lineHeight: 1.05,
                  color: "#434A33",
                  marginBottom: "1.25rem",
                }}
              >
                Black Seed Oil.
                <br />
                <em style={{ fontWeight: 400 }}>Used for 3,000 years.</em>
              </h2>
            </FadeIn>

            <FadeIn delay={0.26}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.9375rem, 1.3vw, 1.0625rem)",
                  lineHeight: 1.72,
                  color: "#6B7451",
                  marginBottom: "1.5rem",
                }}
              >
                Nigella sativa — black seed — has been documented in
                traditional medicine across the Middle East and North Africa
                for millennia. Modern research has identified thymoquinone
                as its most active compound, shown to support skin barrier
                function, reduce redness and regulate sebum.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.9375rem, 1.3vw, 1.0625rem)",
                  lineHeight: 1.72,
                  color: "#6B7451",
                  marginBottom: "2.5rem",
                }}
              >
                We source ours cold-pressed from certified organic farms
                in Ethiopia, combined with cold-pressed argan to create
                a blend that absorbs rapidly and leaves no residue.
              </p>
            </FadeIn>

            {/* Fact table */}
            <FadeIn delay={0.34}>
              <dl className="grid grid-cols-2 gap-px" style={{ backgroundColor: "#DDD5C8" }}>
                {facts.map((f) => (
                  <div
                    key={f.label}
                    className="p-4 md:p-5"
                    style={{ backgroundColor: "#E8DFC9" }}
                  >
                    <dt
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.6875rem",
                        fontWeight: 500,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#98A27E",
                        marginBottom: "0.375rem",
                      }}
                    >
                      {f.label}
                    </dt>
                    <dd
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9375rem",
                        fontWeight: 500,
                        color: "#434A33",
                        lineHeight: 1.4,
                      }}
                    >
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
