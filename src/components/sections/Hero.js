"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TerminalWidget from "@/components/ui/TerminalWidget";
import MagneticButton from "@/components/ui/MagneticButton";

const MONO = { fontFamily: "'JetBrains Mono', 'Courier New', monospace" };

const pillars = [
  { label: "Fullstack Dev" },
  { label: "Automatización" },
  { label: "Cloud & M365" },
  { label: "Backend & APIs" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={ref} style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "64px", overflow: "hidden" }}>
      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        maskImage: "radial-gradient(ellipse at 50% 0%, black 20%, transparent 72%)",
        WebkitMaskImage: "radial-gradient(ellipse at 50% 0%, black 20%, transparent 72%)",
      }} />

      {/* Ambient glow */}
      <div style={{
        position: "absolute", top: "35%", left: "50%", transform: "translate(-50%, -50%)",
        width: "700px", height: "500px", borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(ellipse, rgba(0,255,240,0.05) 0%, transparent 65%)",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "112px 24px", width: "100%" }}>
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}
        >
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {/* Badge */}
            <motion.div variants={item}>
              <span style={{
                ...MONO,
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "6px 14px", borderRadius: "100px",
                border: "1px solid rgba(0,255,240,0.22)", background: "rgba(0,255,240,0.06)",
                color: "#00fff0", fontSize: "12px",
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 6px #4ade80" }} />
                Disponibles para nuevos proyectos
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={item} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h1 style={{ fontSize: "clamp(2.4rem, 4.2vw, 3.6rem)", fontWeight: "700", color: "#fff", letterSpacing: "-0.035em", lineHeight: 1.06 }}>
                Ingeniería de software{" "}
                <span style={{ background: "linear-gradient(130deg, #00fff0 0%, #0ea5e9 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  a medida.
                </span>
              </h1>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: "460px" }}>
                Somos un equipo especializado en crear aplicaciones, automatizar procesos y gestionar infraestructura cloud. Trabajamos directamente con vos, sin intermediarios.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <MagneticButton>
                <button onClick={() => scrollTo("#contact")} style={{ padding: "12px 24px", borderRadius: "10px", fontWeight: "600", fontSize: "14px", color: "#0a0a0f", background: "#00fff0", border: "none", boxShadow: "0 0 30px rgba(0,255,240,0.28)", cursor: "none" }}>
                  Hablar con el equipo →
                </button>
              </MagneticButton>
              <MagneticButton strength={0.25}>
                <button onClick={() => scrollTo("#services")} style={{ padding: "12px 24px", borderRadius: "10px", fontWeight: "500", fontSize: "14px", color: "rgba(255,255,255,0.65)", background: "transparent", border: "1px solid rgba(255,255,255,0.12)", cursor: "none" }}>
                  Ver servicios
                </button>
              </MagneticButton>
            </motion.div>

            {/* Pillars (honest: what we do, not fake numbers) */}
            <motion.div variants={item} style={{ display: "flex", gap: "8px", flexWrap: "wrap", paddingTop: "8px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <p style={{ ...MONO, fontSize: "11px", color: "rgba(255,255,255,0.25)", width: "100%", paddingTop: "16px", marginBottom: "8px" }}>ESPECIALIDADES</p>
              {pillars.map((p) => (
                <span key={p.label} style={{ ...MONO, fontSize: "11px", padding: "5px 10px", borderRadius: "6px", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}>
                  {p.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — Terminal */}
          <motion.div variants={item} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <TerminalWidget />
            <p style={{ ...MONO, fontSize: "11px", color: "rgba(255,255,255,0.18)", textAlign: "center" }}>
              Buenos Aires, Argentina · Trabajo remoto
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", opacity: 0.3 }}>
        <span style={{ ...MONO, fontSize: "10px", color: "rgba(255,255,255,0.6)", letterSpacing: "0.15em" }}>SCROLL</span>
        <motion.div style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.4)", transformOrigin: "top" }} animate={{ scaleY: [0, 1, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} />
      </div>
    </section>
  );
}
