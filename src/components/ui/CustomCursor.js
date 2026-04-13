"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const dotX = useMotionValue(-200);
  const dotY = useMotionValue(-200);

  const springConfig = { damping: 28, stiffness: 280, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);
  const scaleVal = useMotionValue(1);
  const smoothScale = useSpring(scaleVal, { damping: 20, stiffness: 300 });
  const opacityVal = useMotionValue(0);
  const smoothOpacity = useSpring(opacityVal, { damping: 20, stiffness: 200 });

  useEffect(() => {
    let raf;
    const moveCursor = (e) => {
      raf = requestAnimationFrame(() => {
        cursorX.set(e.clientX - 20);
        cursorY.set(e.clientY - 20);
        dotX.set(e.clientX - 3);
        dotY.set(e.clientY - 3);
        opacityVal.set(1);
      });
    };

    const handleEnter = () => scaleVal.set(2.2);
    const handleLeave = () => scaleVal.set(1);
    const handleMouseDown = () => scaleVal.set(0.85);
    const handleMouseUp = () => scaleVal.set(1);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const addListeners = () => {
      document.querySelectorAll("a, button, [data-cursor-hover]").forEach((el) => {
        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mouseleave", handleLeave);
      });
    };

    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    addListeners();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999]"
        style={{
          x: smoothX,
          y: smoothY,
          scale: smoothScale,
          opacity: smoothOpacity,
          border: "1px solid rgba(0,255,240,0.45)",
          backdropFilter: "blur(0px)",
        }}
      />
      
      <motion.div
        className="fixed top-0 left-0 w-[6px] h-[6px] rounded-full pointer-events-none z-[9999] bg-[#00fff0]"
        style={{ x: dotX, y: dotY, opacity: smoothOpacity }}
      />
    </>
  );
}
