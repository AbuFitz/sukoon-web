import Image from "next/image";

const items = [
  { src: "/icons/icon-natural.svg",       label: "Natural & Botanical",   tagline: "Thoughtfully sourced ingredients." },
  { src: "/icons/icon-waterless.svg",     label: "Waterless Formula",     tagline: "More actives, no fillers." },
  { src: "/icons/icon-face-hairline.svg", label: "Face & Hairline Care",  tagline: "One ritual, dual benefit." },
  { src: "/icons/icon-ethical.svg",       label: "Ethical & Transparent", tagline: "Honest by nature, always." },
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
          <>
            <div key={item.label} style={{ flex: 1, padding: "0 clamp(1.5rem, 3vw, 2.5rem)" }}>
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
                color: "#6B7B5C", lineHeight: 1.55,
              }}>
                {item.tagline}
              </p>
            </div>
            {i < items.length - 1 && (
              <div key={`div-${i}`} style={{ width: "1px", backgroundColor: "#E0D5C5", alignSelf: "stretch", flexShrink: 0 }} />
            )}
          </>
        ))}
      </div>

      {/* Mobile: 2-column grid, no dividers */}
      <div className="grid grid-cols-2 md:hidden" style={{ gap: "clamp(1.75rem, 6vw, 2.5rem)" }}>
        {items.map((item) => (
          <div key={item.label}>
            <Image
              src={item.src}
              alt=""
              width={30}
              height={30}
              style={{ objectFit: "contain", display: "block" }}
            />
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.5625rem", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase", color: "#2C2A1F",
              marginTop: "0.875rem", marginBottom: "0.3rem",
            }}>
              {item.label}
            </p>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "0.75rem",
              color: "#6B7B5C", lineHeight: 1.5,
            }}>
              {item.tagline}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
