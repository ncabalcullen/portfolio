"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  { text: "> init devsystem.studio", delay: 0 },
  { text: "  [OK] Fullstack Engine loaded", delay: 0.4, color: "text-emerald-400" },
  { text: "  [OK] Automation hub connected", delay: 0.8, color: "text-emerald-400" },
  { text: "  [OK] Cloud infrastructure ready", delay: 1.2, color: "text-emerald-400" },
  { text: "> status --all", delay: 1.8 },
  { text: "  Availability: OPEN FOR PROJECTS", delay: 2.6, color: "text-[#00fff0]" },
];

function TerminalLine({ line, globalDelay }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), (line.delay + globalDelay) * 1000);
    return () => clearTimeout(timer);
  }, [line.delay, globalDelay]);

  if (!visible) return null;
  return (
    <motion.div
      initial={{ opacity: 0, x: -4 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={`font-mono text-xs sm:text-sm leading-relaxed ${line.color || "text-white/50"}`}
    >
      {line.text}
    </motion.div>
  );
}

export default function TerminalWidget() {
  const [started, setStarted] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 600);
    const interval = setInterval(() => setShowCursor((p) => !p), 530);
    return () => { clearTimeout(t); clearInterval(interval); };
  }, []);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0d0d14]">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
        <span className="ml-3 font-mono text-xs text-white/30">
          bash — devsystem@studio
        </span>
      </div>
      {/* Body */}
      <div className="p-5 space-y-1.5 min-h-[190px]">
        {started &&
          lines.map((line, i) => (
            <TerminalLine key={i} line={line} globalDelay={0} />
          ))}
        <span
          className={`inline-block w-2 h-4 bg-[#00fff0]/80 ml-0.5 align-middle ${showCursor ? "opacity-100" : "opacity-0"}`}
        />
      </div>
    </div>
  );
}
