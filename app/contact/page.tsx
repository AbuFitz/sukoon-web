"use client";

import { useState } from "react";
import { SiteNav } from "@/components/nav/SiteNav";
import { Footer } from "@/components/sections/Footer";

const INK  = "#2C2A1F";
const SAGE = "#98A47D";
const LINE = "#E8D4AE";
const LINEN = "#FBF8F3";

const inputStyle = {
  width: "100%",
  fontFamily: "var(--font-body)",
  fontSize: "0.9375rem",
  color: INK,
  backgroundColor: "#F7F1E4",
  border: `1px solid ${LINE}`,
  padding: "0.875rem 1rem",
  outline: "none",
  boxSizing: "border-box" as const,
  display: "block",
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <SiteNav />
      <main style={{ paddingTop: "calc(1.75rem + 56px)", backgroundColor: LINEN, minHeight: "80vh" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "clamp(3rem, 7vw, 5rem) clamp(1.5rem, 5vw, 3rem)" }}>
          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400, letterSpacing: "-0.015em", color: INK,
            marginBottom: "0.75rem",
          }}>Get in touch</h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.8, color: SAGE,
            marginBottom: "2.5rem",
          }}>
            A real person reads every message. We aim to respond within one working day.
          </p>

          {sent ? (
            <div style={{
              backgroundColor: "#F7F1E4", border: `1px solid ${LINE}`,
              padding: "2rem", textAlign: "center",
            }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 400, color: INK, marginBottom: "0.5rem" }}>
                Message received.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: SAGE }}>
                We'll be in touch within one working day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <label style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: INK, display: "block", marginBottom: "0.5rem" }}>
                  Name
                </label>
                <input
                  type="text" name="name" required
                  value={form.name} onChange={handleChange}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: INK, display: "block", marginBottom: "0.5rem" }}>
                  Email
                </label>
                <input
                  type="email" name="email" required
                  value={form.email} onChange={handleChange}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: INK, display: "block", marginBottom: "0.5rem" }}>
                  Subject
                </label>
                <select
                  name="subject" required
                  value={form.subject} onChange={handleChange}
                  style={{ ...inputStyle, cursor: "pointer" }}
                >
                  <option value="">Select a topic</option>
                  <option value="order">My order</option>
                  <option value="product">Product question</option>
                  <option value="returns">Returns & refunds</option>
                  <option value="press">Press enquiry</option>
                  <option value="other">Something else</option>
                </select>
              </div>
              <div>
                <label style={{ fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: INK, display: "block", marginBottom: "0.5rem" }}>
                  Message
                </label>
                <textarea
                  name="message" required rows={6}
                  value={form.message} onChange={handleChange}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>
              <button
                type="submit"
                style={{
                  alignSelf: "flex-start",
                  fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 500,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "#F7F1E4", backgroundColor: INK, border: "none",
                  padding: "1rem 2rem", cursor: "pointer",
                  transition: "background 0.25s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#3F4A36"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = INK; }}
              >
                Send Message
              </button>
            </form>
          )}

          <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: `1px solid ${LINE}` }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: SAGE, lineHeight: 1.7 }}>
              Or reach us directly at{" "}
              <a href="mailto:hello@sukoon.co.uk" style={{ color: INK, textUnderlineOffset: "3px" }}>
                hello@sukoon.co.uk
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
