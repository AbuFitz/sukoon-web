const items = [
  "Free UK Delivery over £40",
  "30-Day Unopened Returns",
  "Made in the UK",
];

export function TrustStrip() {
  return (
    <section aria-label="Trust signals" className="container" style={{ paddingTop: "clamp(2rem, 4vw, 3rem)", paddingBottom: "clamp(2rem, 4vw, 3rem)" }}>
      <div
        className="block flex flex-col sm:flex-row"
        style={{ padding: "1.25rem clamp(1.5rem, 3vw, 2rem)" }}
      >
        {items.map((item, i) => (
          <p
            key={item}
            className={`tracked${i > 0 ? " border-t sm:border-t-0 sm:border-l" : ""}`}
            style={{
              flex: 1,
              fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 700,
              color: "#000000", margin: 0, textAlign: "center",
              padding: "0.5rem 0",
              borderColor: "#E5E5E5",
            }}
          >
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}
