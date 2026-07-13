"use client";

import Link from "next/link";

const BG    = "#292b25";
const LINEN = "#f5f3ed";
const MUTED = "rgba(245,243,237,0.5)";
const LINE  = "rgba(255,255,255,0.1)";

const navLinks = [
  { label: "Shop",         href: "/shop"        },
  { label: "Our Story",    href: "/about"       },
  { label: "Ingredients",  href: "/#ingredients"},
  { label: "FAQ",          href: "/faq"         },
  { label: "Shipping",     href: "/shipping"    },
  { label: "Contact",      href: "/contact"     },
];

const legal = [
  { label: "Privacy",  href: "/privacy" },
  { label: "Terms",    href: "/terms"   },
  { label: "Cookies",  href: "/cookies" },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: BG }} aria-label="Site footer">
      <div style={{
        maxWidth: 1440, margin: "0 auto",
        padding: "clamp(2.5rem, 5vw, 3.5rem) clamp(2rem, 5vw, 3.5rem)",
        display: "flex", flexDirection: "column", gap: "2rem",
      }}>

        {/* Top row: wordmark + nav links */}
        <div style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "baseline", justifyContent: "space-between", gap: "1.5rem",
        }}>
          <a href="/" style={{
            fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: LINEN, textDecoration: "none", lineHeight: 1,
          }}>
            Sukoon
          </a>

          <nav style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem 2rem" }} aria-label="Footer">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                style={{
                  fontFamily: "var(--font-body)", fontSize: "0.8125rem",
                  color: MUTED, textDecoration: "none",
                  transition: "color 0.18s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = LINEN)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = MUTED)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: LINE }} />

        {/* Bottom row: copyright + credentials + legal */}
        <div style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "center", justifyContent: "space-between", gap: "1rem",
        }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: MUTED, margin: 0 }}>
            © {new Date().getFullYear()} Sukoon. All rights reserved.
          </p>

          <div style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", letterSpacing: "0.06em", color: MUTED }}>
              UK Halal Certified · Made in the UK
            </span>
          </div>

          <div style={{ display: "flex", gap: "1.25rem" }}>
            {legal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  fontFamily: "var(--font-body)", fontSize: "0.75rem",
                  color: MUTED, textDecoration: "none",
                  transition: "color 0.18s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = LINEN)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = MUTED)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
