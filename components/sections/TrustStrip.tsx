const items = [
  "Free UK delivery over £40",
  "30-day returns",
  "Made in the UK",
];

export function TrustStrip() {
  return (
    <section
      aria-label="Trust signals"
      className="stack-panel stack-inner"
      style={{ backgroundColor: "#F1EBDD", paddingBottom: "1px" }}
    >
      <div
        className="flex flex-col sm:flex-row"
        style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 3rem) 2rem" }}
      >
        {items.map((item, i) => (
          <p
            key={item}
            className={i > 0 ? "border-t sm:border-t-0 sm:border-l" : ""}
            style={{
              flex: 1,
              fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 500,
              color: "#111111", margin: 0, textAlign: "center",
              padding: "0.5rem 0",
              borderColor: "#E5E5E2",
            }}
          >
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}
