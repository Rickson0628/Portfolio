  "use client";

  import { useRef } from "react";
  import {
    motion,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
  } from "framer-motion";

  const PictureCard = ({
    src,
    className,
    scrollStyle,
    cursorStyle,
  }) => {
    return (
      // Moves the complete card based on the cursor
      <motion.div
        className={`absolute ${className}`}
        style={cursorStyle}
      >
        {/* Handles the original scroll animation */}
        <motion.div
          className="relative isolate h-full w-full rounded-2xl"
          style={scrollStyle}
        >
          {/* Glow behind the complete card */}
          <div
            aria-hidden="true"
            className="
              absolute
              -inset-1
              z-0
              rounded-[1.35rem]
              bg-univ/15
              blur-xl
            "
          />

          {/* Portrait background */}
          <div
            className="
              absolute
              inset-0
              z-10
              overflow-hidden
              rounded-2xl
              border
              border-border
              bg-surface
            "
          >
            {/* Top-right background circle */}
            <div
              aria-hidden="true"
              className="
                absolute
                -right-[28%]
                -top-[25%]
                aspect-square
                w-[72%]
                rounded-full
                bg-border
                blur-3xl
                
                lg:top-[10%]
                lg:-right-[30%] 
                lg:w-[60%]   
                      
                "/>

            {/* Bottom-left background circle */}
            <div
              aria-hidden="true"
              className="
                absolute
                -bottom-[18%]
                -left-[15%]
                aspect-square
                w-[48%]
                rounded-full
                bg-border
                blur-3xl
              
                lg:bottom-[10%]
                lg:w-[60%]
                lg:-left-[30%]
                
              "
            />
          </div>

          {/* Portrait image */}
          <img
            src={src}
            alt=""
            aria-hidden="true"
            className="relative z-20 h-full w-full object-contain"
          />
        </motion.div>
      </motion.div>
    );
  };

  const About = () => {
    const sectionRef = useRef(null);

    // Tracks the scroll progress of the About section
    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start start", "end end"],
    });

    // Moves the desktop cards left and right
    const leftX = useTransform(
      scrollYProgress,
      [0, 0.1, 0.75, 1],
      ["0vw", "0vw", "-34vw", "-34vw"]
    );

    const rightX = useTransform(
      scrollYProgress,
      [0, 0.1, 0.75, 1],
      ["0vw", "0vw", "34vw", "34vw"]
    );

    // Moves the smaller cards up and down
    const topY = useTransform(
      scrollYProgress,
      [0, 0.1, 0.75, 1],
      ["0vh", "0vh", "-34vh", "-34vh"]
    );

    const bottomY = useTransform(
      scrollYProgress,
      [0, 0.1, 0.75, 1],
      ["0vh", "0vh", "34vh", "34vh"]
    );

    // Slightly straightens the cards while scrolling
    const leftRotate = useTransform(
      scrollYProgress,
      [0.1, 0.75],
      [-4, -2]
    );

    const rightRotate = useTransform(
      scrollYProgress,
      [0.1, 0.75],
      [4, 2]
    );

    // Desktop card scale
    const desktopPictureScale = useTransform(
      scrollYProgress,
      [0.1, 0.75],
      [1, 0.94]
    );

    // Tablet and mobile card scale
    const smallerPictureScale = useTransform(
      scrollYProgress,
      [0.1, 0.75],
      [1, 0.82]
    );

    // Reveals the About text
    const textOpacity = useTransform(
      scrollYProgress,
      [0, 0.2, 0.6, 1],
      [0, 0, 1, 1]
    );

    const textScale = useTransform(
      scrollYProgress,
      [0, 0.25, 0.6, 1],
      [0.82, 0.82, 1, 1]
    );

    const textY = useTransform(
      scrollYProgress,
      [0, 0.25, 0.6, 1],
      [30, 30, 0, 0]
    );

    // Stores the cursor position from 0 to 1
    const pointerX = useMotionValue(0.5);
    const pointerY = useMotionValue(0.5);

    // Converts the cursor position into a small card movement
    const cursorX = useTransform(
      pointerX,
      [0, 1],
      [-16, 16]
    );

    const cursorY = useTransform(
      pointerY,
      [0, 1],
      [-10, 10]
    );

    // Smooths the cursor movement
    const smoothCursorX = useSpring(cursorX, {
      stiffness: 160,
      damping: 22,
    });

    const smoothCursorY = useSpring(cursorY, {
      stiffness: 160,
      damping: 22,
    });

    // Tracks the cursor inside the visible section
    const handlePointerMove = (event) => {
      if (event.pointerType === "touch") return;

      const container =
        event.currentTarget.getBoundingClientRect();

      const x =
        (event.clientX - container.left) /
        container.width;

      const y =
        (event.clientY - container.top) /
        container.height;

      pointerX.set(Math.max(0, Math.min(1, x)));
      pointerY.set(Math.max(0, Math.min(1, y)));
    };

    // Returns both cards to the center
    const handlePointerLeave = () => {
      pointerX.set(0.5);
      pointerY.set(0.5);
    };

    const leftPicture = "/Selfie-Image.png";
    const rightPicture = "/Whole-Image.png";

    // Desktop card sizes
    const desktopPictureClasses = `
      h-[clamp(320px,56vh,560px)]
      w-[clamp(260px,32vw,520px)]
    `;

    // Tablet and mobile card sizes
    const smallerPictureClasses = `
      h-[clamp(130px,22vh,220px)]
      w-[min(82vw,520px)]
    `;

    return (
      // Main section that provides the scrolling distance
      <section
        ref={sectionRef}
        className="relative h-[240vh] w-full bg-background text-foreground"
      >
        {/* Sticky container where the cursor is tracked */}
        <div
          className="sticky top-0 h-screen overflow-hidden"
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          {/* Desktop layout */}
          <div className="relative hidden h-full w-full items-center justify-center lg:flex">
            {/* About text */}
            <motion.div
              className="relative z-30 w-[min(32vw,500px)] text-center"
              style={{
                opacity: textOpacity,
                scale: textScale,
                y: textY,
              }}
            >
              <p className="mb-2 font-semibold text-sm uppercase tracking-[0.35em] text-univ ">
                Beyond the Code
              </p>

              <h2 className="text-[clamp(3rem,6vw,6rem)] xl:text-[clamp(3rem,7vw,6rem)] font-semibold tracking-[-0.055em]">
                About Me
              </h2>

              <p className="mx-auto mt-2 max-w-lg leading-7 text-muted">
                {`I’m at my best when there’s a real problem to solve. Give me a frustrating process, a repetitive task, or a confusing experience, and I’ll find a way to make it simpler.`}
              </p>
               <p className="mx-auto mt-2 max-w-lg leading-7 text-muted">
                {`Working code is only the starting point. The goal is to build software that feels clear, dependable, and genuinely useful—something that reduces friction instead of adding to it.`}
              </p>
              <p className="mx-auto mt-2 max-w-lg leading-7 text-muted text-xl"><span className="text-univ font-bold">Find</span> the friction, <span className="text-univ font-bold">Simplify</span> the process, <span className="text-univ font-bold">Build</span> it right.</p>
            </motion.div>

            {/* Desktop portrait cards */}
            <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
              <PictureCard
                src={leftPicture}
                className={desktopPictureClasses}
                cursorStyle={{
                  x: smoothCursorX,
                  y: smoothCursorY,
                }}
                scrollStyle={{
                  x: leftX,
                  rotate: leftRotate,
                  scale: desktopPictureScale,
                }}
              />

              <PictureCard
                src={rightPicture}
                className={desktopPictureClasses}
                cursorStyle={{
                  x: smoothCursorX,
                  y: smoothCursorY,
                }}
                scrollStyle={{
                  x: rightX,
                  rotate: rightRotate,
                  scale: desktopPictureScale,
                }}
              />
            </div>
          </div>

          {/* Tablet and mobile layout */}
          <div className="mt-4 relative flex h-full w-full items-center justify-center lg:hidden">
            {/* Responsive About text */}
            <motion.div
              className="
                relative
                z-30
                w-[95vw]
                max-w-xl
                rounded-[clamp(1rem,4vw,1.5rem)]
                border
                border-border
                bg-surface-raised/95
                px-[clamp(1rem,4vw,1.75rem)]
                py-[clamp(0.875rem,2.6vh,1.75rem)]
                text-center
                shadow-2xl
              "
              style={{
                opacity: textOpacity,
                scale: textScale,
                y: textY,
              }}
            >
              <p className="mb-[clamp(0.4rem,1.2vh,0.75rem)] font-semibold text-[clamp(0.65rem,min(2.8vw,2.5vh),0.875rem)] uppercase leading-none tracking-[0.22em] text-univ">
                Beyond the Code
              </p>

              <h2 className="text-[clamp(2.15rem,min(9vw,11vh),4.5rem)] py-4 font-bold leading-[0.95]">
                About Me
              </h2>

              <p className="mx-auto mt-[clamp(0.75rem,2vh,1.25rem)] text-[clamp(0.72rem,min(3.3vw,2.8vh),1rem)] leading-[1.5] text-muted ">
                {`I’m at my best when there’s a real problem to solve. Give me a frustrating process, a repetitive task, or a confusing experience, and I’ll find a way to make it simpler.`}
              </p>     
               <p className="mx-auto mt-[clamp(0.75rem,2vh,1.25rem)] text-[clamp(0.72rem,min(3.3vw,2.8vh),1rem)] leading-[1.5] text-muted ">
                {`Working code is only the starting point. The goal is to build software that feels clear, dependable, and genuinely useful—something that reduces friction instead of adding to it.`}
              </p>                   

              <p className="mx-auto mt-[clamp(0.65rem,1.7vh,1rem)] text-[clamp(0.72rem,min(3.3vw,2.8vh),1rem)] leading-[1.4] text-muted pt-4"><span className="text-univ font-bold">Find</span> the friction, <span className="text-univ font-bold">Simplify</span> the process, <span className="text-univ font-bold">Build</span> it right.</p>
            </motion.div>

            {/* Tablet and mobile portrait cards */}
            <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
              <PictureCard
                src={leftPicture}
                className={smallerPictureClasses}
                cursorStyle={{
                  x: smoothCursorX,
                  y: smoothCursorY,
                }}
                scrollStyle={{
                  y: topY,
                  rotate: leftRotate,
                  scale: smallerPictureScale,
                }}
              />

              <PictureCard
                src={rightPicture}
                className={smallerPictureClasses}
                cursorStyle={{
                  x: smoothCursorX,
                  y: smoothCursorY,
                }}
                scrollStyle={{
                  y: bottomY,
                  rotate: rightRotate,
                  scale: smallerPictureScale,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default About;
