"use client";

import Link from "next/link";

const BG    = "#3F4A36";
const LINEN = "#f5f3ed";
const FAINT = "rgba(245,243,237,0.65)";
const HEAD  = "rgba(245,243,237,0.42)";
const LINE  = "rgba(255,255,255,0.14)";
const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`;

const cols = [
  {
    heading: "Shop",
    links: [
      { label: "All Products",   href: "/shop"   },
      { label: "Best Sellers",   href: "/shop"   },
      { label: "Bundles",        href: "/shop"   },
      { label: "Skincare",       href: "/shop"   },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "Our Story",    href: "/about"       },
      { label: "Ingredients",  href: "#ingredients" },
      { label: "Ritual",       href: "#ritual"      },
      { label: "Journal",      href: "#"            },
    ],
  },
  {
    heading: "Help",
    links: [
      { label: "FAQ",           href: "/faq"      },
      { label: "Shipping",      href: "/shipping" },
      { label: "Returns",       href: "/shipping" },
      { label: "Contact Us",    href: "/contact"  },
      { label: "Track Order",   href: "/contact"  },
    ],
  },
  {
    heading: "Account",
    links: [
      { label: "My Account", href: "/account" },
      { label: "Orders",     href: "/account" },
      { label: "Wishlist",   href: "/account" },
      { label: "Rewards",    href: "/account" },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: BG, position: "relative" }} aria-label="Site footer">
      <div style={{ position: "absolute", inset: 0, backgroundImage: GRAIN, opacity: 0.025, pointerEvents: "none", zIndex: 0 }} />

      {/* Main columns */}
      <div style={{
        maxWidth: 1440, margin: "0 auto",
        padding: "clamp(4.5rem, 8vw, 5.5rem) clamp(2.5rem, 5vw, 4rem) clamp(3rem, 5vw, 4rem)",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.5fr repeat(4, 1fr)",
          gap: "clamp(2rem, 4vw, 3.375rem)",
        }}
          className="grid-cols-2 md:grid-cols-[1.5fr_repeat(4,1fr)]"
        >
          {/* Brand column */}
          <div>
            <a href="/" style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase",
              color: LINEN, textDecoration: "none", lineHeight: 1,
              display: "block", marginBottom: "1.125rem",
            }}>
              Sukoon
            </a>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.7,
              color: FAINT, marginBottom: "0.375rem",
            }}>
              Care for your face.
            </p>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.7,
              color: FAINT,
            }}>
              Care for your hairline.
            </p>
          </div>

          {/* Nav columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 600,
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: HEAD, marginBottom: "1.25rem",
              }}>
                {col.heading}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      style={{
                        fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.9,
                        color: FAINT, textDecoration: "none",
                        transition: "color 0.18s ease",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = LINEN)}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = FAINT)}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Legal bar */}
      <div style={{ borderTop: `1px solid ${LINE}` }}>
        <div style={{
          maxWidth: 1440, margin: "0 auto",
          padding: "1.375rem clamp(2rem, 5vw, 3.5rem)",
          display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.75rem",
        }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: HEAD }}>
            © {new Date().getFullYear()} Sukoon. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms & Conditions", href: "/terms" }, { label: "Cookies", href: "/cookies" }].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  fontFamily: "var(--font-body)", fontSize: "0.75rem",
                  color: HEAD, textDecoration: "none",
                  transition: "color 0.18s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = LINEN)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = HEAD)}
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
