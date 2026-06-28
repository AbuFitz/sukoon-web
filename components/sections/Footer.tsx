"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
/* Social icons as inline SVG — lucide-react v1.x doesn't bundle Instagram/Youtube */
function IconInstagram({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4.5"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function IconYoutube({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
    </svg>
  );
}

const footerNav = [
  {
    heading: "Shop",
    links: [
      { label: "The Morning Oil", href: "#" },
      { label: "The Still Toner", href: "#" },
      { label: "The Slow Cream", href: "#" },
      { label: "The Complete Ritual", href: "#" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { label: "The Ritual", href: "#ritual" },
      { label: "Ingredients", href: "#ingredients" },
      { label: "Journal", href: "#" },
      { label: "About Sukoon", href: "#" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "How to Use", href: "#" },
      { label: "Shipping", href: "#" },
      { label: "Returns", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      aria-label="Site footer"
      style={{ backgroundColor: "#2B1F14" }}
    >
      {/* Main footer body */}
      <div className="container-page pt-16 pb-12">
        <div className="grid md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12 md:gap-8">

          {/* Brand column */}
          <FadeIn direction="up">
            <div>
              <span
                className="label block mb-6"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "#F8F3EC",
                  fontSize: "1rem",
                  letterSpacing: "0.26em",
                }}
              >
                Sukoon
              </span>
              <p
                className="leading-[1.75] mb-8"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.125rem",
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "rgba(168, 153, 138, 0.75)",
                  letterSpacing: "0.005em",
                  maxWidth: "240px",
                }}
              >
                Skincare as a ritual
                <br />
                of stillness.
              </p>

              {/* Social */}
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sukoon on Instagram"
                  className="w-9 h-9 rounded-sm flex items-center justify-center transition-colors duration-300"
                  style={{
                    border: "1px solid rgba(214, 201, 180, 0.15)",
                    color: "rgba(168, 153, 138, 0.7)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(214, 201, 180, 0.4)";
                    (e.currentTarget as HTMLElement).style.color = "#F8F3EC";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(214, 201, 180, 0.15)";
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(168, 153, 138, 0.7)";
                  }}
                >
                  <IconInstagram size={15} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sukoon on YouTube"
                  className="w-9 h-9 rounded-sm flex items-center justify-center transition-colors duration-300"
                  style={{
                    border: "1px solid rgba(214, 201, 180, 0.15)",
                    color: "rgba(168, 153, 138, 0.7)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(214, 201, 180, 0.4)";
                    (e.currentTarget as HTMLElement).style.color = "#F8F3EC";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(214, 201, 180, 0.15)";
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(168, 153, 138, 0.7)";
                  }}
                >
                  <IconYoutube size={15} />
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Navigation columns */}
          {footerNav.map((col, i) => (
            <FadeIn key={col.heading} delay={0.1 + i * 0.07} direction="up">
              <div>
                <span
                  className="label block mb-5"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "rgba(168, 153, 138, 0.5)",
                    fontSize: "0.625rem",
                  }}
                >
                  {col.heading}
                </span>
                <ul className="list-none flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm transition-colors duration-300 no-underline"
                        style={{
                          fontFamily: "var(--font-body)",
                          color: "rgba(214, 201, 180, 0.55)",
                          letterSpacing: "0.01em",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color = "#F8F3EC";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color =
                            "rgba(214, 201, 180, 0.55)";
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Legal bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(248, 243, 236, 0.08)" }}
      >
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.6875rem",
              color: "rgba(168, 153, 138, 0.45)",
              letterSpacing: "0.06em",
            }}
          >
            © {new Date().getFullYear()} Sukoon. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                className="no-underline transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6875rem",
                  color: "rgba(168, 153, 138, 0.45)",
                  letterSpacing: "0.06em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "rgba(248, 243, 236, 0.65)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "rgba(168, 153, 138, 0.45)";
                }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
