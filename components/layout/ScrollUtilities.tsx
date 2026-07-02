"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-royal-500 via-purple-accent to-cyan-accent"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
      transition={{ duration: 0.2 }}
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-2xl bg-royal-500 text-white shadow-lg shadow-royal-500/25 transition-colors hover:bg-royal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-500 focus-visible:ring-offset-2 disabled:pointer-events-none"
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </motion.button>
  );
}
