"use client";

import React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const SideBar = ({ children, isOpen, setSideBar }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Dark overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[55] bg-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
            onClick={() => setSideBar(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed right-0 top-0 z-[60] h-full w-full overflow-y-auto bg-surface-raised p-5 text-foreground md:w-1/2 lg:w-[35%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.15,
              delay: shouldReduceMotion ? 0 : 0.45,
            }}
          >
            <button className="absolute right-4 top-4 z-20 p-2 font-mono text-lg font-medium text-foreground transition-colors hover:text-univ" onClick={() => setSideBar(false)} aria-label="Close menu">
              X
            </button>

            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Orange wipe */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="pointer-events-none fixed right-0 top-0 z-[70] h-full w-full bg-univ md:w-1/2 lg:w-[35%]"
            initial={{
              clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
            }}
            animate={{
              clipPath: [
                "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                "polygon(15% 0, 100% 0, 100% 100%, 35% 100%)",
                "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
                "polygon(0% 0, 0% 0, 0% 100%, 0% 100%)",
              ],
            }}
            exit={{
              clipPath: [
                "polygon(0% 0, 0% 0, 0% 100%, 0% 100%)",
                "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
                "polygon(15% 0, 100% 0, 100% 100%, 35% 100%)",
                "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
              ],
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 1,
              times: [0, 0.35, 0.7, 1],
              ease: [0.76, 0, 0.24, 1],
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SideBar;