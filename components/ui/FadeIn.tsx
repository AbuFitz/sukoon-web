"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

type Direction = "up" | "down" | "left" | "right" | "none";

const offsets: Record<Direction, { y?: number; x?: number }> = {
  up:    { y: 28 },
  down:  { y: -28 },
  left:  { x: 28 },
  right: { x: -28 },
  none:  {},
};

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  className?: string;
  once?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.75,
  direction = "up",
  className,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isInView = useInView(ref, { once, margin: "-60px" as any });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: React.ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
}

export function FadeInStagger({
  children,
  stagger = 0.12,
  delay = 0,
  className,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isInView = useInView(ref, { once: true, margin: "-60px" as any });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInItem({
  children,
  direction = "up",
  duration = 0.75,
  className,
}: {
  children: React.ReactNode;
  direction?: Direction;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...offsets[direction] },
        visible: { opacity: 1, y: 0, x: 0, transition: { duration, ease } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
