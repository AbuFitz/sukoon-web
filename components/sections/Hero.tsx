"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const ease = [0.22, 0.48, 0.32, 0.98] as const;

const pills = [
  "Lightweight daily oil",
  "Black seed & argan",
  "All skin types",
  "Cruelty-free",
];

export function Hero() {
  return (
    <section
      id="shop"
      aria-label="Sukoon Black Seed Face Oil"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
      style={{ backgroundColor: "#F6F1E8" }}
    >
      <div className="container w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center py-24 md:py-0 md:min-h-[100svh]">

          {/* ── Text ─────────────────────────────────── */}
          <div className="order-2 md:order-1 flex flex-col justify-center md:py-32">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15, ease }}
            >
              <span className="eyebrow block mb-5">New — Face Oil No. 01</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)",
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
                color: "#434A33",
                marginBottom: "1.25rem",
              }}
            >
              Skincare rooted
              <br />
              in nature, made for
              <br />
              <em style={{ fontWeight: 400 }}>everyday ritual.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.44, ease }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.9375rem, 1.3vw, 1.0625rem)",
                lineHeight: 1.7,
                color: "#98A47D",
                maxWidth: "26rem",
                marginBottom: "2rem",
              }}
            >
              A lightweight botanical face oil with cold-pressed black seed
              and argan. Nourishes, calms and supports a healthy glow —
              morning or evening, every day.
            </motion.p>

            {/* Pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.56, ease }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {pills.map((p) => (
                <span
                  key={p}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "#434A33",
                    backgroundColor: "#E8DFC9",
                    border: "1px solid #DDD5C8",
                    borderRadius: "99px",
                    padding: "0.3125rem 0.875rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {p}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.68, ease }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link href="#waitlist" className="btn btn-olive">
                Join the Waitlist
                <ChevronRight size={15} strokeWidth={2} />
              </Link>
              <Link href="#ingredients" className="btn btn-outline">
                Explore ingredients
              </Link>
            </motion.div>

            {/* Price note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.82 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem",
                color: "#98A47D",
                marginTop: "1rem",
                letterSpacing: "0.01em",
              }}
            >
              30 ml · launching soon · free UK delivery
            </motion.p>
          </div>

          {/* ── Product image ─────────────────────────── */}
          <motion.div
            className="order-1 md:order-2 flex items-center justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
          >
            <div
              className="relative w-full"
              style={{ maxWidth: "480px", aspectRatio: "3/4" }}
            >
              {/* Background blob */}
              <div
                className="absolute inset-0 rounded-full blur-3xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 60% 55%, #E8DFC9 0%, transparent 70%)",
                  transform: "scale(1.15)",
                }}
              />

              <Image
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=85"
                alt="Sukoon Black Seed Face Oil — 30ml glass dropper bottle"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 45vw"
                className="object-contain object-center"
                style={{ borderRadius: "4px" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative divider */}
      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{ backgroundColor: "#DDD5C8" }}
      />
    </section>
  );
}
