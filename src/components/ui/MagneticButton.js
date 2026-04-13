"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticButton({ children, className = "", strength = 0.4 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 200, damping: 18 });
  const smoothY = useSpring(y, { stiffness: 200, damping: 18 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((e.clientX - centerX) * strength);
      y.set((e.clientY - centerY) * strength);
    };

    const handleLeave = () => {
      x.set(0);
      y.set(0);
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength]);

  return (
    <motion.div
      ref={ref}
      style={{ x: smoothX, y: smoothY }}
      className={`inline-flex ${className}`}
      data-cursor-hover
    >
      {children}
    </motion.div>
  );
}
