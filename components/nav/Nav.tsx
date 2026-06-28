"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "Shop",        href: "#shop" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Our Story",   href: "#story" },
  { label: "Journal",     href: "#journal" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "nav-blur" : "border-b border-transparent",
        ].join(" ")}
      >
        <div className="container flex items-center justify-between h-16 md:h-[68px]">

          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl font-semibold italic text-olive-dark no-underline tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "#434A33" }}
            aria-label="Sukoon home"
          >
            Sukoon
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main" className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[0.8125rem] font-[400] no-underline transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "#6B7451",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#434A33")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#6B7451")}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="#waitlist" className="btn btn-olive hidden md:inline-flex">
              Join the Waitlist
            </Link>
            <button
              className="md:hidden p-2 -mr-1.5"
              style={{ color: "#434A33" }}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[60]"
              style={{ backgroundColor: "#F6F1E8" }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.32, 0, 0.67, 0] }}
            >
              <div className="container flex items-center justify-between h-16">
                <span
                  className="font-display text-xl font-semibold italic"
                  style={{ fontFamily: "var(--font-display)", color: "#434A33" }}
                >
                  Sukoon
                </span>
                <button
                  style={{ color: "#434A33" }}
                  className="p-2 -mr-1.5"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} strokeWidth={1.75} />
                </button>
              </div>

              <nav className="container pt-8 flex flex-col gap-1" aria-label="Mobile">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.07 + i * 0.06 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-4 no-underline border-b"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.5rem, 5vw, 2rem)",
                        fontStyle: "italic",
                        color: "#434A33",
                        borderColor: "#DDD5C8",
                      }}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.38 }}
                  className="mt-8"
                >
                  <Link
                    href="#waitlist"
                    onClick={() => setOpen(false)}
                    className="btn btn-olive w-full justify-center"
                  >
                    Join the Waitlist
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
