"use client";

import { useState } from "react";
import { SiteNav } from "@/components/nav/SiteNav";
import { Footer } from "@/components/sections/Footer";

const INK   = "#111111";
const MUTED = "#676764";
const LINE  = "#E3E3DF";
const LINEN = "#F5F5F3";

const inputStyle = {
  width: "100%",
  fontFamily: "var(--font-body)",
  fontSize: "0.9375rem",
  color: INK,
  backgroundColor: "#FFFFFF",
  border: `1px solid ${LINE}`,
  padding: "0.875rem 1rem",
  outline: "none",
  boxSizing: "border-box" as const,
  display: "block",
};

const labelStyle = {
  fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 700,
  letterSpacing: "0.16em", textTransform: "uppercase" as const, color: INK,
  display: "block", marginBottom: "0.5rem",
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
      <main style={{ backgroundColor: LINEN, minHeight: "80vh" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "clamp(3rem, 7vw, 5rem) clamp(1.5rem, 5vw, 3rem)" }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 700,
            letterSpacing: "0.2em", textTransform: "uppercase", color: "#92928D",
            marginBottom: "1rem",
          }}>Contact</p>
          <h1 style={{
            fontFamily: "var(--font-body)", fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 200, letterSpacing: "-0.02em", color: INK,
            marginBottom: "0.75rem",
          }}>We read every message.</h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.8, color: MUTED,
            marginBottom: "2.5rem",
          }}>
            A real person reads every message. We aim to respond within one working day.
          </p>

          {sent ? (
            <div style={{
              backgroundColor: "#FFFFFF", border: `1px solid ${LINE}`,
              padding: "2.5rem 2rem", textAlign: "center",
            }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.75rem", fontWeight: 200, color: INK, marginBottom: "0.5rem" }}>
                Message received.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: MUTED }}>
                We&apos;ll be in touch within one working day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <label style={labelStyle}>Name</label>
                <input
                  type="text" name="name" required
                  value={form.name} onChange={handleChange}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email" name="email" required
                  value={form.email} onChange={handleChange}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Subject</label>
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
                <label style={labelStyle}>Message</label>
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
                  fontFamily: "var(--font-body)", fontSize: "0.6875rem", fontWeight: 700,
                  letterSpacing: "0.16em", textTransform: "uppercase",
                  color: "#FFFFFF", backgroundColor: INK, border: `1px solid ${INK}`,
                  padding: "1rem 2.25rem", cursor: "pointer",
                  transition: "background 0.25s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#333333"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = INK; }}
              >
                Send Message
              </button>
            </form>
          )}

          <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: `1px solid ${LINE}` }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: MUTED, lineHeight: 1.7 }}>
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
