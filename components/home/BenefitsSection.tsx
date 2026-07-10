"use client";

import Image from "next/image";
import { benefits, homepageImages } from "@/lib/homepage";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

const benefitIcons: React.ReactNode[] = [
  <svg key="soothe" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    <path d="M2 12 C5 9 7 15 10 12 C13 9 15 15 18 12 C19.5 10.5 21 12 22 12"/>
  </svg>,
  <svg key="shield" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3 L4 6.5 L4 12.5 C4 16.5 7.5 20 12 21.5 C16.5 20 20 16.5 20 12.5 L20 6.5 Z"/>
  </svg>,
  <svg key="drop" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3 C12 3 5 11 5 15.5 A7 7 0 0 0 19 15.5 C19 11 12 3 12 3Z"/>
  </svg>,
  <svg key="leaf" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 21 C6 21 6 13 12 9 C18 5 21 3 21 3 C21 3 19 9 15 13 C11 17 6 21 6 21Z"/>
    <line x1="6" y1="21" x2="12" y2="13"/>
  </svg>,
];

export function BenefitsSection() {
  return (
    <section
      aria-label="Product benefits"
      style={{ backgroundColor: "#f7f4ed" }}
    >
      <div
        style={{ display: "grid", gridTemplateColumns: "1.25fr 0.75fr", alignItems: "stretch" }}
        className="grid-cols-1 md:grid-cols-[1.25fr_0.75fr]"
      >
        {/* Left — text */}
        <div style={{ padding: "clamp(4rem, 9vw, 6rem) clamp(2.5rem, 6vw, 6.25rem)", order: 1 }}>
          <FadeIn direction="up" delay={0.05}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 400,
              fontSize: "clamp(2.625rem, 3.8vw, 4rem)",
              lineHeight: 0.98, letterSpacing: "-0.028em",
              color: "#292b25", margin: "0 0 3.25rem",
            }}>
              Real care.<br />
              <em style={{ fontStyle: "italic" }}>Real change.</em>
            </h2>
          </FadeIn>

          <FadeInStagger stagger={0.08} delay={0.15}>
            <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "1.75rem" }}>
              {benefits.map((b, i) => (
                <FadeInItem key={b.title} direction="up">
                  <div>
                    <div style={{
                      color: "#78836e",
                      marginBottom: "0.875rem",
                    }}>
                      {benefitIcons[i]}
                    </div>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontWeight: 600,
                      color: "#292b25", margin: "0 0 0.375rem", lineHeight: 1.3,
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
          minHeight: "clamp(380px, 50vw, 640px)",
          backgroundColor: "#ddd8cd",
          order: 2,
          overflow: "hidden",
        }}>
          <Image
            src={homepageImages.benefits}
            alt="Applying Sukoon Daily Solace Fluid"
            fill
            sizes="(min-width: 1024px) 35vw, 100vw"
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
