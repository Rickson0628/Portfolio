"use client";

import { motion } from "framer-motion";

const IconFadeIn = ({
  children,
  delay = 0,
  triggerPoint = 0.9,
  className = "",
}) => {
  // Keeps the trigger point between 0 and 1
  const safeTriggerPoint = Math.min(
    1,
    Math.max(0, triggerPoint),
  );

  // triggerPoint 0.9 means the animation starts
  // when the icon reaches 90% of the screen height
  const bottomMargin =
    -(1 - safeTriggerPoint) * 100;

  return (
    <motion.div
      className={`inline-flex ${className}`}
      initial={{
        opacity: 0,
        scale: 0.9,
        filter: "blur(4px)",
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{
        // Allows the animation to reverse and replay
        once: false,

        // Starts as soon as part of the icon crosses the trigger
        amount: 0.01,

        // Controls where inside the viewport it triggers
        margin: `0px 0px ${bottomMargin}% 0px`,
      }}
      transition={{
        duration: 0.4,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default IconFadeIn;