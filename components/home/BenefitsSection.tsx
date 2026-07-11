"use client";

import Image from "next/image";
import { benefits, homepageImages } from "@/lib/homepage";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

const benefitIcons: React.ReactNode[] = [
  // Soothe — calm wave
  <svg key="soothe" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M2 12 C5 9 7 15 10 12 C13 9 15 15 18 12 C19.5 10.5 21 12 22 12"/>
  </svg>,
  // Shield — barrier
  <svg key="shield" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3 L4 6.5 L4 12.5 C4 16.5 7.5 20 12 21.5 C16.5 20 20 16.5 20 12.5 L20 6.5 Z"/>
  </svg>,
  // Drop — hydration
  <svg key="drop" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3 C12 3 5 11 5 15.5 A7 7 0 0 0 19 15.5 C19 11 12 3 12 3Z"/>
  </svg>,
  // Leaf — natural protection
  <svg key="leaf" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 21 C6 21 6 13 12 9 C18 5 21 3 21 3 C21 3 19 9 15 13 C11 17 6 21 6 21Z"/>
    <line x1="6" y1="21" x2="12" y2="13"/>
  </svg>,
];

export function BenefitsSection() {
  return (
    <section
      aria-label="Product benefits"
      style={{ backgroundColor: "#f4f0e6" }}
    >
      <div
        style={{ display: "grid", gridTemplateColumns: "1.25fr 0.75fr", alignItems: "stretch" }}
        className="grid-cols-1 md:grid-cols-[1.25fr_0.75fr]"
      >
        {/* Left — heading + 2×2 benefit grid */}
        <div style={{
          padding: "clamp(3.5rem, 8vw, 5.5rem) clamp(2rem, 6vw, 5.75rem)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          order: 1,
        }}>
          <FadeIn direction="up" delay={0.05}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 400,
              fontSize: "clamp(2.5rem, 3.6vw, 3.875rem)",
              lineHeight: 0.98, letterSpacing: "-0.028em",
              color: "#292b25", margin: "0 0 clamp(2rem, 4vw, 3rem)",
            }}>
              Real care.<br />
              <em style={{ fontStyle: "italic" }}>Real change.</em>
            </h2>
          </FadeIn>

          <FadeInStagger stagger={0.09} delay={0.12}>
            <div className="grid grid-cols-2" style={{ gap: "clamp(1.25rem, 2.5vw, 2rem)" }}>
              {benefits.map((b, i) => (
                <FadeInItem key={b.title} direction="up">
                  <div style={{
                    borderLeft: "2px solid #8a9e7f",
                    paddingLeft: "1.25rem",
                    paddingTop: "0.125rem",
                  }}>
                    <div style={{
                      color: "#45543d",
                      marginBottom: "0.75rem",
                    }}>
                      {benefitIcons[i]}
                    </div>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 600,
                      color: "#292b25", margin: "0 0 0.4rem", lineHeight: 1.3,
                    }}>
                      {b.title}
                    </p>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.7,
                      color: "#64685f", margin: 0,
                    }}>
                      {b.description}
                    </p>
                  </div>
                </FadeInItem>
              ))}
            </div>
          </FadeInStagger>
        </div>

        {/* Right — image */}
        <div style={{
          position: "relative",
          minHeight: "clamp(420px, 55vw, 700px)",
          backgroundColor: "#c8c0b0",
          order: 2,
          overflow: "hidden",
        }}>
          <Image
            src={homepageImages.benefits}
            alt="Applying Sukoon Daily Solace Fluid"
            fill
            sizes="(min-width: 1024px) 38vw, 100vw"
            style={{
              objectFit: "cover", objectPosition: "center",
              transition: "transform 800ms cubic-bezier(0.2,0.7,0.2,1)",
            }}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
