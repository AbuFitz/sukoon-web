"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function Opening() {
  return (
    <section
      aria-label="Opening"
      className="relative min-h-[100svh] flex flex-col md:flex-row overflow-hidden"
    >
      {/* ── Left: photography panel ──────────────────── */}
      <div className="relative w-full md:w-[55%] min-h-[55vw] md:min-h-0">
        <Image
          src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1200&q=85"
          alt="A glass serum bottle resting on warm stone in morning light"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 55vw"
          className="object-cover object-center"
        />
        {/* Very subtle warm gradient at the bottom edge */}
        <div
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(248,243,236,0.15) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Right: brand statement panel ─────────────── */}
      <div
        className="relative w-full md:w-[45%] bg-ivory flex flex-col justify-between
                   px-10 md:px-[clamp(2.5rem,5vw,5rem)] pt-[88px] pb-12 md:pt-[96px] md:pb-16"
      >
        {/* Top: Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="flex items-center gap-4"
        >
          <span
            className="label text-stone"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Est. 2024
          </span>
          <span className="flex-1 h-px bg-linen" />
          <span
            className="label text-stone"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Skincare
          </span>
        </motion.div>

        {/* Centre: Heading */}
        <div className="my-auto py-10 md:py-0">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.5, ease }}
            className="font-display font-light text-bark leading-[0.92] tracking-[-0.02em]"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(3.25rem, 6vw, 5.5rem)",
            }}
          >
            The pause
            <br />
            before the
            <br />
            day begins.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease }}
            className="mt-7 text-stone leading-relaxed max-w-xs"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.875rem, 1.2vw, 0.9375rem)",
              letterSpacing: "0.015em",
            }}
          >
            Sukoon is a skincare ritual rooted in stillness.
            Thoughtfully formulated to invite a slower,
            more intentional moment into your day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05, ease }}
            className="mt-9 flex items-center gap-6"
          >
            <Link href="#collection" className="btn-primary">
              The Collection
            </Link>
            <Link href="#ritual" className="text-link">
              Our Ritual
            </Link>
          </motion.div>
        </div>

        {/* Bottom: Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4, ease }}
          className="flex items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown
              size={14}
              strokeWidth={1.5}
              className="text-stone"
            />
          </motion.div>
          <span
            className="label text-stone"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Scroll to discover
          </span>
        </motion.div>
      </div>
    </section>
  );
}
