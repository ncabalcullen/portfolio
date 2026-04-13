"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MONO = { fontFamily: "'JetBrains Mono', 'Courier New', monospace" };

export default function MobileDock() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "Info", id: "#about", icon: "◎" },
    { label: "Servicios", id: "#services", icon: "⬡" },
    { label: "Trabajos", id: "#projects", icon: "◈" },
    { label: "Contacto", id: "#contact", icon: "⌬" },
  ];

  return (
    <motion.div
      initial={{ y: 150, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
      className="show-mobile"
      style={{
        position: "fixed",
        bottom: "24px",
        left: "50%",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "clamp(2px, 2vw, 8px)",
        padding: "8px",
        background: "rgba(10,10,15,0.75)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: "28px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
        width: "calc(100% - 48px)",
        maxWidth: "380px"
      }}
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          style={{
            ...MONO,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            flex: 1,
            height: "56px",
            borderRadius: "20px",
            border: "none",
            background: "transparent",
            color: "rgba(255,255,255,0.55)",
            fontSize: "20px",
            transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
          onPointerDown={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.08)";
            e.currentTarget.style.color = "#00fff0";
            e.currentTarget.style.transform = "scale(0.92)";
          }}
          onPointerUp={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "rgba(255,255,255,0.55)";
            e.currentTarget.style.transform = "scale(1)";
          }}
          onPointerCancel={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "rgba(255,255,255,0.55)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <span style={{ fontSize: "20px", fontWeight: "300" }}>{item.icon}</span>
          <span style={{ fontSize: "9px", fontWeight: "500", letterSpacing: "0.05em", opacity: 0.9 }}>{item.label}</span>
        </button>
      ))}
    </motion.div>
  );
}
