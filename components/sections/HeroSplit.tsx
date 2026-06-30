"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const badges = [
  { label: "Plant-Derived", icon: "leaf" },
  { label: "Vegan",         icon: "sprout" },
  { label: "Cruelty-Free",  icon: "heart" },
  { label: "Non-Toxic",     icon: "drop" },
] as const;

function BadgeIcon({ icon }: { icon: typeof badges[number]["icon"] }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (icon === "leaf") return <svg {...common}><path d="M5 19c8-1 13-6 14-14-8 1-13 6-14 14z" /><path d="M5 19c2-4 5-8 9-11" /></svg>;
  if (icon === "sprout") return <svg {...common}><path d="M12 21V11" /><path d="M12 11c0-4-3-6-7-6 0 4 3 6 7 6z" /><path d="M12 14c0-3.5 2.5-5.5 6-5.5 0 3.5-2.5 5.5-6 5.5z" /></svg>;
  if (icon === "heart") return <svg {...common}><path d="M12 20s-7-4.4-9.3-9.1C1.4 7.7 3 4.5 6.2 4 8.4 3.7 10.5 4.8 12 7c1.5-2.2 3.6-3.3 5.8-3 3.2.5 4.8 3.7 3.5 6.9C19 15.6 12 20 12 20z" /></svg>;
  return <svg {...common}><path d="M12 3c3 4.5 6 8 6 11.5a6 6 0 1 1-12 0C6 11 9 7.5 12 3z" /></svg>;
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    setShown(true);
  }, []);
  return { ref, shown };
}

export function HeroSplit() {
  const { ref: textRef, shown } = useReveal();

  return (
    <>
      <section aria-label="Hero" className="flex flex-col md:grid md:grid-cols-2" style={{ position: "relative", minHeight: "100svh", backgroundColor: "#F7F1E4", overflow: "hidden" }}>

        {/* Scroll cue */}
        <div className="hidden md:flex" style={{
          position: "absolute", left: "1.5rem", bottom: "2.5rem", zIndex: 2,
          alignItems: "center", gap: "0.75rem",
          opacity: shown ? 0.6 : 0, transition: "opacity 1s ease 1.1s",
        }}>
          <span style={{
            writingMode: "vertical-rl", transform: "rotate(180deg)",
            fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 500,
            letterSpacing: "0.22em", textTransform: "uppercase", color: "#6B7B5C",
          }}>
            Scroll to discover
          </span>
          <span style={{
            display: "block", width: "1px", height: "2.5rem", backgroundColor: "#6B7B5C",
            animation: "sukoon-scrollline 2.2s ease-in-out infinite",
          }} />
        </div>

        {/* Image */}
        <div className="order-1 md:order-2" style={{
          position: "relative", minHeight: "clamp(380px, 90vw, 100svh)", flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          backgroundColor: "#F1E9D7",
        }}>
          <div style={{
            position: "absolute", width: "min(62vw, 520px)", aspectRatio: "1 / 1", borderRadius: "50%",
            background: "radial-gradient(circle at 35% 30%, #DCE3CC, #C7D2AE 70%)",
            opacity: shown ? 1 : 0,
            transform: shown ? "scale(1)" : "scale(0.85)",
            transition: "opacity 1.1s ease, transform 1.1s cubic-bezier(0.22,1,0.36,1)",
          }} />
          <div style={{
            position: "relative", width: "min(72vw, 560px)", aspectRatio: "3 / 4",
            opacity: shown ? 1 : 0,
            transform: shown ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 1.2s ease 0.2s, transform 1.2s cubic-bezier(0.22,1,0.36,1) 0.2s",
            animation: shown ? "sukoon-float 7s ease-in-out 1.4s infinite" : "none",
          }}>
            <Image
              src="https://images.unsplash.com/photo-1707539160277-e39464517645?w=1400&q=90&fit=crop"
              alt="The Daily Solace Fluid dropper bottle resting on stone"
              fill priority
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </div>

        {/* Text */}
        <div ref={textRef} className="order-2 md:order-1" style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "clamp(2.5rem, 8vw, 6rem) clamp(1.75rem, 6vw, 6rem) clamp(3rem, 8vw, 5rem) clamp(2.75rem, 8vw, 6rem)",
        }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 500,
            letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B7B5C",
            marginBottom: "clamp(1.5rem, 4vw, 2.5rem)", lineHeight: 1.8,
            opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 0.8s ease 0.1s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s",
          }}>
            Care for your face. Care for your hairline.
          </p>

          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.625rem, 7vw, 5rem)",
            fontWeight: 400, letterSpacing: "-0.025em", lineHeight: 1.06,
            color: "#2C2A1F",
            marginBottom: "clamp(1.25rem, 3vw, 1.75rem)",
            opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 0.9s ease 0.22s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.22s",
          }}>
            Skincare worth<br />slowing down for.
          </h1>

          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.8,
            color: "#6B7B5C", maxWidth: "340px",
            marginBottom: "clamp(2rem, 6vw, 2.75rem)",
            opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 0.8s ease 0.34s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.34s",
          }}>
            One waterless oil. Engineered for both your skin and the hairline strain hijabs, under-caps, and tight styles leave behind.
          </p>

          <div style={{
            opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.8s ease 0.46s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.46s",
          }}>
            <a href="#waitlist" style={{
              display: "inline-flex", alignItems: "center", gap: "0.625rem",
              fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 500,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#2C2A1F", textDecoration: "none",
              border: "1px solid #2C2A1F", borderRadius: "999px",
              padding: "1rem 1.875rem",
              marginBottom: "1.5rem",
              transition: "background 0.3s ease, color 0.3s ease, border-color 0.3s ease",
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "#2C2A1F"; el.style.color = "#F7F1E4"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "transparent"; el.style.color = "#2C2A1F"; }}
            >
              Shop £35
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.6875rem", letterSpacing: "0.04em",
            color: "#A9BA98",
            opacity: shown ? 1 : 0,
            transition: "opacity 0.8s ease 0.56s",
          }}>
            UK Halal Certified · Formulated &amp; Made in the UK
          </p>
        </div>
      </section>

      {/* Trust badges */}
      <section aria-label="Why Sukoon" style={{
        backgroundColor: "#FBF8F3", borderTop: "1px solid #E8D4AE", borderBottom: "1px solid #E8D4AE",
        padding: "clamp(1.75rem, 4vw, 2.5rem) clamp(1.5rem, 6vw, 5rem)",
      }}>
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ maxWidth: "1100px", margin: "0 auto", gap: "clamp(1.5rem, 3vw, 2rem)" }}>
          {badges.map((b, i) => (
            <div key={b.label} style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: "0.625rem", textAlign: "center",
              color: "#6B7B5C",
            }}>
              <BadgeIcon icon={b.icon} />
              <span style={{
                fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 500,
                letterSpacing: "0.1em", textTransform: "uppercase", color: "#2C2A1F",
              }}>
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes sukoon-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes sukoon-scrollline {
          0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
          40% { transform: scaleY(1); transform-origin: top; opacity: 1; }
          60% { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
          100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
        }
      `}</style>
    </>
  );
}
