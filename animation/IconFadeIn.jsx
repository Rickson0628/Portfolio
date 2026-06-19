"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const IconFadeIn = ({
  children,
  delay = 0,
  triggerPoint = 0.9,
  className = "",
}) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const triggerY = window.innerHeight * triggerPoint;

      setShow(rect.top <= triggerY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [triggerPoint]);

  return (
    <motion.div
      ref={ref}
      className={`inline-flex ${className}`}
      initial={false}
      animate={
        show
          ? {
              opacity: 1,
           
              scale: 1,
              filter: "blur(0px)",
            }
          : {
              opacity: 0,
             
              scale: 0.9,
              filter: "blur(4px)",
            }
      }
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