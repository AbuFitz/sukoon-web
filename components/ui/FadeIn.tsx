"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Dir = "up" | "down" | "left" | "right" | "none";

const offsets: Record<Dir, object> = {
  up:    { y: 24 },
  down:  { y: -24 },
  left:  { x: 24 },
  right: { x: -24 },
  none:  {},
};

const ease = [0.22, 0.48, 0.32, 0.98] as const;

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: Dir;
  className?: string;
  once?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.65,
  direction = "up",
  className,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inView = useInView(ref, { once, margin: "-50px" as any });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration, delay, ease }}
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
  stagger = 0.1,
  delay = 0,
  className,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inView = useInView(ref, { once: true, margin: "-50px" as any });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function FadeInItem({
  children,
  direction = "up",
  className,
}: {
  children: React.ReactNode;
  direction?: Dir;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden:  { opacity: 0, ...offsets[direction] },
        visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.6, ease } },
      }}
    >
      {children}
    </motion.div>
  );
}
