"use client";

import Image from "next/image";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

const pillars = [
  {
    number: "01",
    title: "Intention",
    body: "Every product begins with a question: does this serve the skin, or the shelf?",
  },
  {
    number: "02",
    title: "Purity",
    body: "We source one primary ingredient per formula and build around it, nothing superfluous.",
  },
  {
    number: "03",
    title: "Ritual",
    body: "Instructions matter. We guide you not just in what to apply, but how and when.",
  },
];

export function Philosophy() {
  return (
    <section
      id="ritual"
      aria-label="Brand philosophy"
      className="bg-cream section-padding"
    >
      <div className="container-page">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Left: editorial image */}
          <FadeIn direction="left" duration={0.9}>
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "4/5", borderRadius: "2px" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80"
                alt="Warm ceramic bowls and skincare arranged on a linen cloth"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </FadeIn>

          {/* Right: text content */}
          <div>
            <FadeIn delay={0.1}>
              <span
                className="label text-stone block mb-8"
                style={{ fontFamily: "var(--font-body)" }}
              >
                A different kind of skincare
              </span>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2
                className="font-display font-light text-bark leading-[1.08] mb-8"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  letterSpacing: "-0.015em",
                }}
              >
                Most routines are optimised for results.
                Ours is designed for{" "}
                <em>the moment itself.</em>
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p
                className="text-bark-mid leading-[1.8] mb-12"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                  fontWeight: 300,
                  letterSpacing: "0.005em",
                }}
              >
                Sukoon was born from a belief that the skin responds not just
                to what you apply, but to how you apply it. Slowing down is
                not a luxury. It is the practice. When you approach your skin
                with attention — with breath, with stillness — everything
                changes. The product becomes secondary to the ritual.
              </p>
            </FadeIn>

            {/* Pillars */}
            <FadeInStagger stagger={0.1} delay={0.35}>
              <ul className="list-none flex flex-col gap-0">
                {pillars.map((p, i) => (
                  <FadeInItem key={p.number} direction="up">
                    <li
                      className={[
                        "flex gap-6 py-6",
                        i < pillars.length - 1
                          ? "border-b border-linen"
                          : "",
                      ].join(" ")}
                    >
                      <span
                        className="label text-stone shrink-0 mt-0.5"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {p.number}
                      </span>
                      <div>
                        <span
                          className="label text-bark block mb-2"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {p.title}
                        </span>
                        <p
                          className="text-stone text-sm leading-relaxed"
                          style={{
                            fontFamily: "var(--font-body)",
                            letterSpacing: "0.01em",
                          }}
                        >
                          {p.body}
                        </p>
                      </div>
                    </li>
                  </FadeInItem>
                ))}
              </ul>
            </FadeInStagger>
          </div>
        </div>
      </div>
    </section>
  );
}
