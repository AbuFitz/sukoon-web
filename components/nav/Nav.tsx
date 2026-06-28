"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "The Collection", href: "#collection" },
  { label: "The Ritual", href: "#ritual" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Journal", href: "#journal" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile nav is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={[
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled ? "nav-scrolled" : "border-b border-transparent",
        ].join(" ")}
      >
        <div className="container-page">
          <nav
            aria-label="Main navigation"
            className="flex items-center justify-between h-[72px]"
          >
            {/* Brand mark */}
            <Link
              href="/"
              className="label text-bark hover:text-bark-mid transition-colors duration-300 no-underline"
              aria-label="Sukoon — home"
            >
              Sukoon
            </Link>

            {/* Desktop links — centred */}
            <ul className="hidden md:flex items-center gap-8 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-[0.6875rem] font-[400] tracking-[0.12em] uppercase
                               text-stone hover:text-bark transition-colors duration-300 no-underline"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="#begin"
                className="hidden md:inline-flex btn-primary"
                aria-label="Begin your ritual"
              >
                Begin
              </Link>
              <button
                className="md:hidden p-2 -mr-2 text-bark"
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation"
              >
                <Menu size={20} strokeWidth={1.5} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile navigation overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-ivory flex flex-col"
          >
            <div className="container-page flex items-center justify-between h-[72px]">
              <span className="label text-bark">Sukoon</span>
              <button
                className="p-2 -mr-2 text-bark"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center container-page pb-16">
              <ul className="list-none flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.45 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-4 font-display text-4xl font-light italic text-bark
                                 border-b border-linen hover:text-olive-light transition-colors duration-300
                                 no-underline"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-12"
              >
                <Link
                  href="#begin"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary"
                >
                  Begin your ritual
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
