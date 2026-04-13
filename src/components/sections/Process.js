"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const MONO = { fontFamily: "'JetBrains Mono', 'Courier New', monospace" };

const steps = [
  {
    num: "01",
    title: "Consulta inicial",
    desc: "Nos reunimos (por llamada o chat) para entender tu problema, tus herramientas actuales y lo que esperás del proyecto.",
    icon: "◎",
    accent: "#00fff0",
  },
  {
    num: "02",
    title: "Propuesta técnica",
    desc: "Elaboramos una propuesta clara con alcance, tecnologías a usar, tiempos estimados y presupuesto. Sin letra chica.",
    icon: "⬡",
    accent: "#a78bfa",
  },
  {
    num: "03",
    title: "Desarrollo iterativo",
    desc: "Construimos en etapas con revisiones frecuentes. Tenés visibilidad total del progreso en todo momento.",
    icon: "⟳",
    accent: "#0ea5e9",
  },
  {
    num: "04",
    title: "Entrega y soporte",
    desc: "Entregamos con documentación completa y acompañamiento post-lanzamiento para asegurar que todo funcione bien.",
    icon: "◈",
    accent: "#f59e0b",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="process" style={{ padding: "120px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }} ref={ref}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "72px" }}
        >
          <p style={{ ...MONO, fontSize: "11px", color: "#00fff0", marginBottom: "16px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            04 — Cómo trabajamos
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "700", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.08 }}>
            Simple, transparente{" "}
            <span style={{ color: "rgba(255,255,255,0.3)" }}>y sin sorpresas.</span>
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px", position: "relative" }}>
          {/* Connector */}
          <div style={{ position: "absolute", top: "36px", left: "12.5%", right: "12.5%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }} />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Icon circle */}
              <div style={{
                width: "56px", height: "56px", borderRadius: "14px", marginBottom: "24px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "22px",
                color: step.accent,
                background: `${step.accent}0d`,
                border: `1px solid ${step.accent}22`,
              }}>
                {step.icon}
              </div>

              <div style={{ ...MONO, fontSize: "11px", color: "rgba(255,255,255,0.22)", marginBottom: "10px" }}>{step.num}</div>
              <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#fff", marginBottom: "10px", letterSpacing: "-0.02em" }}>{step.title}</h3>
              <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.42)", lineHeight: 1.65 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
