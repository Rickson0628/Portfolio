"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

const WordTypewriter = ({
  text,
  speed = 0.01,
  triggerPoint = 0.9,
}) => {
  // This watches the text block
  const ref = useRef(null);

  // This controls whether the text should show or hide
  const [show, setShow] = useState(false);

  // Split the sentence into words
  // useMemo prevents the words from being recalculated unnecessarily
  const words = useMemo(() => {
    return text.trim().split(/\s+/);
  }, [text]);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      // Get the position of this text block on the screen
      const rect = ref.current.getBoundingClientRect();

      // This is the invisible trigger line on the screen
      // 0.6 means 60% from the top of the screen
      const triggerY = window.innerHeight * triggerPoint;

      // If the top of the text has passed the trigger line, show it
      // If it goes below the trigger line again, hide it
      setShow(rect.top <= triggerY);
    };

    // Run once immediately
    handleScroll();

    // Run whenever the user scrolls
    window.addEventListener("scroll", handleScroll);

    // Run also when screen size changes
    window.addEventListener("resize", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [triggerPoint]);

  return (
    <span ref={ref} className="block">
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"

          // Do not force an initial animation on page load
          initial={false}

          // If show is true, reveal the word
          // If show is false, hide/reset the word
          animate={
            show
              ? {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }
              : {
                  opacity: 0,
                  y: 8,
                  filter: "blur(4px)",
                }
          }

          // Delay only when showing
          // No delay when hiding, so it resets quickly
          transition={{
            duration: 0.3,
            delay: show ? index * speed : 0,
            ease: "easeOut",
          }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </span>
  );
};

export default WordTypewriter;