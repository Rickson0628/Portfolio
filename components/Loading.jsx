"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loading = ({ canFinishLoading, onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Once the real page is ready, finish the progress
    if (canFinishLoading) {
      setProgress(100);

      // Give 100% a moment to show before exiting
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 500);

      return () => clearTimeout(exitTimer);
    }

    // Slowly increases the visual progress while the page is loading
    const interval = setInterval(() => {
      setProgress((previous) => {
        // Never reach 100 until the real page is ready
        if (previous >= 95) {
          return previous;
        }

        return previous + 1;
      });
    }, 31);

    return () => clearInterval(interval);
  }, [canFinishLoading]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col justify-between overflow-hidden bg-background px-8 py-8 text-foreground md:px-12 md:py-10"

      // Slides the whole loader upward when exiting
      animate={isExiting ? { y: "-100%" } : { y: 0 }}

      // Controls the loader exit animation
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}

      // Removes the loader only after the exit animation finishes
      onAnimationComplete={() => {
        if (isExiting) {
          onFinished();
        }
      }}
    >
      {/* Top information */}
      <motion.div
        className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-muted"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span>Rickson Bozar</span>

        <span>Portfolio</span>
      </motion.div>

      {/* Main loading content */}
      <div className="flex flex-1 items-center">
        <div className="w-full">
          <div className="flex items-end justify-between">
            {/* Loading status */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-univ">
                Loading experience
              </div>

              <div className="font-mono text-xs text-muted">
                {progress < 95
                  ? "Initializing"
                  : progress < 100
                    ? "Waiting for resources"
                    : "Ready"}
              </div>
            </motion.div>

            {/* Loading percentage */}
            <motion.div
              className="font-mono text-[clamp(5rem,16vw,13rem)] font-medium leading-[0.75] tracking-[-0.08em]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {String(progress).padStart(2, "0")}

              <span className="ml-2 text-[0.2em] text-univ">%</span>
            </motion.div>
          </div>

          {/* Progress bar */}
          <div className="mt-8 h-px w-full overflow-hidden bg-border">
            <motion.div
              className="h-full origin-left bg-univ"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            />
          </div>

          {/* Progress limits */}
          <div className="mt-4 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            <span>00</span>
            <span>100</span>
          </div>
        </div>
      </div>

      {/* Bottom information */}
      <motion.div
        className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <span>Toronto / ON</span>

        <div className="flex items-center gap-3">
          {/* Pulsing loading indicator */}
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-univ"
            animate={
              progress === 100
                ? { opacity: 1, scale: 1 }
                : {
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1, 0.8],
                  }
            }
            transition={{
              duration: 1.2,
              repeat: progress === 100 ? 0 : Infinity,
            }}
          />

          <span>{progress === 100 ? "Ready" : "Please wait"}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Loading;