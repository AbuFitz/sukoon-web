import React from "react";
import Image from "next/image";

const items = [
  { src: "/icons/icon-natural.svg",     label: "Natural",     tagline: "100% natural ingredients", showMobile: true  },
  { src: "/icons/icon-ethical.svg",     label: "Ethical",     tagline: "Vegan & cruelty free",      showMobile: true  },
  { src: "/icons/icon-pure.svg",        label: "Pure",        tagline: "No harmful chemicals",      showMobile: true  },
  { src: "/icons/icon-sustainable.svg", label: "Sustainable", tagline: "Eco-friendly packaging",    showMobile: false },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Trust signals"
      style={{
        backgroundColor: "#F7F1E4",
        padding: "clamp(2.5rem, 5vw, 4rem) clamp(2rem, 7vw, 7rem)",
      }}
    >
      {/* Desktop: 4 columns with dividers */}
      <div className="hidden md:flex" style={{ maxWidth: "1320px", margin: "0 auto", alignItems: "flex-start" }}>
        {items.map((item, i) => (
          <React.Fragment key={item.label}>
            <div style={{ flex: 1, padding: "0 clamp(1.5rem, 3vw, 2.5rem)" }}>
              <Image
                src={item.src}
                alt=""
                width={36}
                height={36}
                style={{ objectFit: "contain", display: "block" }}
              />
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 600,
                letterSpacing: "0.12em", textTransform: "uppercase", color: "#2C2A1F",
                marginTop: "1.125rem", marginBottom: "0.375rem",
              }}>
                {item.label}
              </p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.8125rem",
                color: "#98A47D", lineHeight: 1.55,
              }}>
                {item.tagline}
              </p>
            </div>
            {i < items.length - 1 && (
              <div style={{ width: "1px", backgroundColor: "#E0D5C5", alignSelf: "stretch", flexShrink: 0 }} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile: 3-item row (Sustainable hidden), no dividers */}
      <div className="flex md:hidden" style={{ gap: "clamp(1.25rem, 5vw, 2rem)" }}>
        {items.filter(item => item.showMobile).map((item) => (
          <div key={item.label} style={{ flex: 1 }}>
            <Image
              src={item.src}
              alt=""
              width={28}
              height={28}
              style={{ objectFit: "contain", display: "block" }}
            />
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.5rem", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase", color: "#2C2A1F",
              marginTop: "0.75rem", marginBottom: "0.25rem",
            }}>
              {item.label}
            </p>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.6875rem",
              color: "#98A47D", lineHeight: 1.5,
            }}>
              {item.tagline}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
