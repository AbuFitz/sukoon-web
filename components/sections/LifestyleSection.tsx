"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";

export function LifestyleSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      ref={ref}
      aria-label="For every skin type"
      className="relative overflow-hidden"
      style={{ minHeight: "70svh" }}
    >
      {/* Parallax image */}
      <motion.div
        className="absolute inset-0 scale-[1.1]"
        style={{ y }}
      >
        <Image
          src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1600&q=80"
          alt="Sukoon face oil on a warm stone surface with linen in morning light"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(67,74,51,0.72) 0%, rgba(67,74,51,0.2) 55%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex items-center section"
        style={{ minHeight: "70svh" }}
      >
        <div className="container">
          <div style={{ maxWidth: "480px" }}>
            <span
              className="block mb-4"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.6875rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(251,248,243,0.65)",
              }}
            >
              Made for every skin type
            </span>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                fontWeight: 600,
                letterSpacing: "-0.015em",
                lineHeight: 1.06,
                color: "#FBF8F3",
                marginBottom: "1.25rem",
              }}
            >
              Gentle enough for
              <br />
              sensitive skin. Effective
              <br />
              enough for everyone.
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.9375rem, 1.2vw, 1rem)",
                lineHeight: 1.7,
                color: "rgba(251,248,243,0.78)",
                marginBottom: "2rem",
                maxWidth: "360px",
              }}
            >
              Whether your skin is dry, oily or reactive — the formula
              works by supporting the skin's own balance rather than
              overriding it.
            </p>

            <Link href="#waitlist" className="btn btn-outline-light">
              Join the waitlist
              <ChevronRight size={15} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
