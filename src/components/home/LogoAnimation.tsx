"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LogoAnimation() {
  const [phase, setPhase] = useState<"project" | "studio">("project");

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => (prev === "project" ? "studio" : "project"));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter text-white select-none">
          RISE
        </h1>

        <div className="relative h-10 mt-1 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            {phase === "project" ? (
              <motion.span
                key="project"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute text-lg sm:text-xl tracking-[0.5em] font-light text-white/60 uppercase"
              >
                PROJECT
              </motion.span>
            ) : (
              <motion.span
                key="studio"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute text-lg sm:text-xl tracking-[0.5em] font-light text-white/60 uppercase"
              >
                STUDIO
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          className="absolute -top-2 -right-3 w-2 h-2 rounded-full bg-rise-red"
          animate={{
            opacity: [1, 0.4, 1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
}
