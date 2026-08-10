"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  "Free UK delivery on orders over £40",
  "Made in the UK",
  "Vegan & cruelty-free",
];

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % MESSAGES.length),
      4500,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      role="note"
      aria-label="Announcement"
      style={{
        position: "relative",
        height: "2.125rem",
        backgroundColor: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingInline: "1rem",
      }}
    >
      {MESSAGES.map((message, i) => (
        <p
          key={message}
          aria-hidden={i !== index}
          style={{
            position: "absolute",
            fontFamily: "var(--font-body)",
            fontSize: "0.6875rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#FFFFFF",
            margin: 0,
            textAlign: "center",
            opacity: i === index ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        >
          {message}
        </p>
      ))}
      <span className="sr-only">{MESSAGES[index]}</span>
    </div>
  );
}
