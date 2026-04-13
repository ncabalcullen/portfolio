"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MONO = { fontFamily: "'JetBrains Mono', 'Courier New', monospace" };

const links = [
  { label: "Servicios", href: "#services" },
  { label: "Proyectos", href: "#projects" },
  { label: "Proceso", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.4s, border-color 0.4s",
        background: scrolled ? "rgba(10,10,15,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 24px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        
        <a
          href="/"
          style={{ textDecoration: "none" }}
          data-cursor-hover
        >
          <span style={{ ...MONO, fontSize: "14px", fontWeight: "500", color: "rgba(255,255,255,0.85)" }}>
            dev<span style={{ color: "#00fff0" }}>system</span>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>.</span>
            <span style={{ color: "rgba(255,255,255,0.5)" }}>studio</span>
          </span>
        </a>

        <div className="hidden-mobile" style={{ alignItems: "center", gap: "4px" }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              data-cursor-hover
              style={{
                ...MONO,
                fontSize: "12px",
                color: "rgba(255,255,255,0.42)",
                textDecoration: "none",
                padding: "8px 14px",
                borderRadius: "8px",
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.85)";
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.42)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden-mobile">
          <a
            href="#contact"
          onClick={(e) => handleClick(e, "#contact")}
          data-cursor-hover
          style={{
            ...MONO,
            fontSize: "12px",
            fontWeight: "500",
            padding: "8px 18px",
            borderRadius: "8px",
            color: "#00fff0",
            textDecoration: "none",
            border: "1px solid rgba(0,255,240,0.25)",
            background: "rgba(0,255,240,0.06)",
            transition: "background 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(0,255,240,0.12)";
            e.currentTarget.style.borderColor = "rgba(0,255,240,0.45)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(0,255,240,0.06)";
            e.currentTarget.style.borderColor = "rgba(0,255,240,0.25)";
          }}
        >
            Cotizar →
          </a>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden", background: "rgba(10,10,15,0.97)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div style={{ padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: "4px" }}>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  style={{ ...MONO, fontSize: "13px", color: "rgba(255,255,255,0.55)", textDecoration: "none", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
