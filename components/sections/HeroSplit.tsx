"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1707539160277-e39464517645?w=1800&q=90&fit=crop";

const stats = [
  { value: "5", label: "Ingredients" },
  { value: "80%", label: "Olive Squalane" },
  { value: "100%", label: "Waterless" },
  { value: "< 60s", label: "Absorbs" },
];

export function HeroSplit() {
  const [shown, setShown] = useState(false);
  useEffect(() => { setShown(true); }, []);

  return (
    <>
      {/* ── Desktop ── */}
      <section aria-label="Hero" className="hidden md:flex" style={{
        minHeight: "100svh", backgroundColor: "#FFFFFF",
        flexDirection: "column", paddingTop: "1.75rem",
      }}>
        <div style={{
          flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr",
          maxWidth: "100%",
        }}>
          {/* Left — text */}
          <div style={{
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
            padding: "clamp(3rem,6vw,6rem) clamp(2.5rem,6vw,6rem) clamp(3rem,5vw,5rem)",
          }}>
            <div style={{
              opacity: shown ? 1 : 0, transform: shown ? "none" : "translateY(24px)",
              transition: "opacity 1s ease 0.1s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.1s",
            }}>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 600,
                letterSpacing: "0.22em", textTransform: "uppercase", color: "#98A47D",
                marginBottom: "2rem",
              }}>
                The Daily Solace Fluid
              </p>
              <h1 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 5.5vw, 5rem)",
                fontWeight: 400, letterSpacing: "-0.025em", lineHeight: 1.04,
                color: "#2C2A1F", marginBottom: "clamp(1.75rem, 3vw, 2.5rem)",
              }}>
                Care for your face.<br />Care for your<br />hairline.
              </h1>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8,
                color: "#6B6860", maxWidth: "380px", marginBottom: "clamp(2.5rem, 5vw, 3.5rem)",
              }}>
                One waterless oil. Sinks in under sixty seconds. Built for your skin — and for the hairline that tight styles quietly strain.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <a href="/shop" style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 600,
                  letterSpacing: "0.16em", textTransform: "uppercase",
                  color: "#FFFFFF", backgroundColor: "#2C2A1F",
                  padding: "1rem 2rem", textDecoration: "none", border: "1px solid #2C2A1F",
                  transition: "background 0.3s, border-color 0.3s",
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "#98A47D"; el.style.borderColor = "#98A47D"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "#2C2A1F"; el.style.borderColor = "#2C2A1F"; }}
                >
                  Shop Now
                </a>
                <a href="#ritual" style={{
                  fontFamily: "var(--font-body)", fontSize: "0.8125rem",
                  color: "#2C2A1F", textDecoration: "none",
                  borderBottom: "1px solid #2C2A1F", paddingBottom: "2px",
                  transition: "color 0.2s, border-color 0.2s",
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = "#98A47D"; el.style.borderColor = "#98A47D"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = "#2C2A1F"; el.style.borderColor = "#2C2A1F"; }}
                >
                  Discover the ritual
                </a>
              </div>
            </div>
          </div>

          {/* Right — image, full height */}
          <div style={{ position: "relative", overflow: "hidden", backgroundColor: "#F0E9DA" }}>
            <Image
              src={HERO_IMAGE}
              alt="The Daily Solace Fluid"
              fill priority
              sizes="50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>

        {/* Stat strip */}
        <div style={{
          borderTop: "1px solid #E8E2D8",
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          opacity: shown ? 1 : 0,
          transition: "opacity 1s ease 0.5s",
        }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{
              padding: "1.25rem clamp(1.5rem, 3vw, 3rem)",
              display: "flex", alignItems: "center", gap: "1rem",
              borderRight: i < stats.length - 1 ? "1px solid #E8E2D8" : "none",
            }}>
              <span style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)",
                fontWeight: 400, color: "#2C2A1F", lineHeight: 1,
              }}>
                {s.value}
              </span>
              <span style={{
                fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 500,
                letterSpacing: "0.12em", textTransform: "uppercase", color: "#98A47D",
              }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Mobile ── */}
      <section aria-label="Hero" className="flex flex-col md:hidden" style={{
        backgroundColor: "#FFFFFF", paddingTop: "1.75rem",
      }}>
        {/* Image — full width, portrait */}
        <div style={{ position: "relative", aspectRatio: "3 / 4", backgroundColor: "#F0E9DA" }}>
          <Image
            src={HERO_IMAGE}
            alt="The Daily Solace Fluid"
            fill priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>

        {/* Text block */}
        <div style={{
          padding: "clamp(2rem, 7vw, 3rem) clamp(1.5rem, 6vw, 2.5rem)",
          borderBottom: "1px solid #E8E2D8",
        }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 600,
            letterSpacing: "0.22em", textTransform: "uppercase", color: "#98A47D",
            marginBottom: "1.25rem",
          }}>
            The Daily Solace Fluid
          </p>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 9vw, 3.5rem)",
            fontWeight: 400, letterSpacing: "-0.025em", lineHeight: 1.06,
            color: "#2C2A1F", marginBottom: "1.25rem",
          }}>
            Care for your face. Care for your hairline.
          </h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.8,
            color: "#6B6860", marginBottom: "2rem",
          }}>
            One waterless oil. Sinks in under sixty seconds. Built for skin — and the hairline tight styles quietly strain.
          </p>
          <a href="/shop" style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 600,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "#FFFFFF", backgroundColor: "#2C2A1F",
            padding: "1.0625rem", textDecoration: "none",
            marginBottom: "1rem",
          }}>
            Shop Now
          </a>
          <a href="#ritual" style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-body)", fontSize: "0.8125rem",
            color: "#2C2A1F", textDecoration: "none",
            border: "1px solid #E8E2D8", padding: "1.0625rem",
          }}>
            Discover the ritual
          </a>
        </div>

        {/* Mobile stats — 2×2 grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{
              padding: "1.375rem 1.25rem",
              borderRight: i % 2 === 0 ? "1px solid #E8E2D8" : "none",
              borderBottom: i < 2 ? "1px solid #E8E2D8" : "none",
            }}>
              <p style={{
                fontFamily: "var(--font-display)", fontSize: "1.75rem",
                fontWeight: 400, color: "#2C2A1F", lineHeight: 1, marginBottom: "0.25rem",
              }}>
                {s.value}
              </p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500,
                letterSpacing: "0.12em", textTransform: "uppercase", color: "#98A47D",
              }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes sukoon-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </>
  );
}
