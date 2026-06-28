"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function Invitation() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  /* Subtle parallax on the background image */
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      id="begin"
      ref={sectionRef}
      aria-label="Begin your ritual"
      className="relative overflow-hidden"
      style={{ minHeight: "80svh" }}
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 scale-[1.12]"
        style={{ y: imageY }}
      >
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80"
          alt="A quiet morning scene — warm light, smooth surfaces, complete stillness"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Warm dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(43,31,20,0.72) 0%, rgba(43,31,20,0.38) 60%, rgba(43,31,20,0.55) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-page section-padding flex flex-col justify-center min-h-[80svh]">
        <FadeIn direction="up" duration={0.9}>
          <span
            className="label block mb-6"
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(248, 243, 236, 0.55)",
            }}
          >
            Your ritual awaits
          </span>
        </FadeIn>

        <FadeIn delay={0.15} duration={1.0}>
          <h2
            className="font-display font-light"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(2.75rem, 7vw, 6.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: "0.95",
              color: "#F8F3EC",
              maxWidth: "820px",
              marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
            }}
          >
            Begin with one moment
            <br />
            of complete stillness.
          </h2>
        </FadeIn>

        <FadeIn delay={0.3} duration={0.85}>
          <p
            className="max-w-sm leading-[1.75] mb-10"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9375rem",
              color: "rgba(248, 243, 236, 0.72)",
              letterSpacing: "0.01em",
            }}
          >
            The complete Sukoon ritual. Three products, thoughtfully
            sequenced. Yours to begin any morning.
          </p>
        </FadeIn>

        <FadeIn delay={0.42} duration={0.8}>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#collection" className="btn-ghost-light">
              Shop the ritual
              <ArrowUpRight size={13} strokeWidth={1.5} />
            </Link>
            <Link href="#collection" className="text-link text-link-light">
              Learn more
            </Link>
          </div>
        </FadeIn>

        {/* Floating detail: price anchor */}
        <FadeIn delay={0.55} direction="none">
          <div
            className="mt-16 pt-8 flex items-center gap-6 border-t"
            style={{ borderColor: "rgba(248, 243, 236, 0.15)", maxWidth: "440px" }}
          >
            <div>
              <span
                className="label block mb-1"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "rgba(248, 243, 236, 0.4)",
                }}
              >
                The complete ritual
              </span>
              <span
                className="font-display font-light"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem",
                  color: "#F8F3EC",
                  letterSpacing: "-0.01em",
                }}
              >
                £138
              </span>
            </div>
            <div
              className="h-8 w-px"
              style={{ background: "rgba(248, 243, 236, 0.2)" }}
            />
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem",
                color: "rgba(248, 243, 236, 0.5)",
                letterSpacing: "0.01em",
                lineHeight: "1.6",
              }}
            >
              Or purchase each step
              <br />
              individually from £34
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
