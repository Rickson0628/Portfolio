"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

const CursorTracker = () => {
  // Starts the cursor follower outside the screen
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooths out the cursor movement
  const smoothX = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
  });

  // Updates the position whenever the cursor moves
  const handlePointerMove = (event) => {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  };

  return (
    <section
      onPointerMove={handlePointerMove}
      className="relative min-h-screen overflow-hidden"
    >
      <h1 className="p-20 text-6xl font-bold">
        Move your cursor
      </h1>

      {/* Cursor follower */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      >
        {/* Centers the circle on the actual cursor position */}
        <div className="h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-univ" />
      </motion.div>
    </section>
  );
};

export default CursorTracker;
