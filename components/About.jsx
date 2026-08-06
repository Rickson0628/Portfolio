"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  imageClassName = "",
  mobile = false,
}) => {
  return (
    <motion.div
      className={`absolute transform-gpu ${className}`}
      style={cursorStyle}
    >
      {/* Handles the card animation */}
      <motion.div
        className="
          relative
          isolate
          h-full
          w-full
          rounded-2xl
          transform-gpu
          will-change-transform
        "
        style={scrollStyle}
      >
        {/* Orange glow behind the card */}
        <div
          aria-hidden="true"
          className={`
            absolute
            -inset-1
            z-0
            rounded-[1.35rem]
            bg-univ/15

            ${mobile ? "blur-md" : "blur-xl"}
          `}
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
            [contain:paint]
          "
        >
          {/* Top-right picture glow */}
          <div
            aria-hidden="true"
            className={`
              absolute
              aspect-square
              rounded-full
              bg-border

              ${
                mobile
                  ? "-right-[20%] -top-[20%] w-[65%] opacity-70 blur-xl"
                  : "-right-[30%] top-[10%] w-[60%] blur-3xl"
              }
            `}
          />

          {/* Bottom-left picture glow */}
          <div
            aria-hidden="true"
            className={`
              absolute
              aspect-square
              rounded-full
              bg-border

              ${
                mobile
                  ? "-bottom-[15%] -left-[12%] w-[45%] opacity-70 blur-xl"
                  : "-bottom-[10%] -left-[30%] w-[60%] blur-3xl"
              }
            `}
          />
        </div>

        {/* Portrait image */}
        <div
          className="
            absolute
            inset-0
            z-20
            overflow-hidden
            rounded-2xl
            [contain:paint]
          "
        >
          <Image
            src={src}
            alt=""
            aria-hidden="true"
            fill
            sizes={
              mobile
                ? "82vw"
                : "(min-width: 1024px) 32vw, 520px"
            }
            className={`
              object-contain
              object-bottom
              ${imageClassName}
            `}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

// Full desktop About animation
const DesktopAbout = ({
  scrollYProgress,
  leftPicture,
  rightPicture,
}) => {
  // Moves the desktop cards left and right
  const leftX = useTransform(
    scrollYProgress,
    [0, 0.1, 0.75, 1],
    ["0vw", "0vw", "-34vw", "-34vw"],
  );

  const rightX = useTransform(
    scrollYProgress,
    [0, 0.1, 0.75, 1],
    ["0vw", "0vw", "34vw", "34vw"],
  );

  // Slightly straightens the cards while scrolling
  const leftRotate = useTransform(
    scrollYProgress,
    [0.1, 0.75],
    [-4, -2],
  );

  const rightRotate = useTransform(
    scrollYProgress,
    [0.1, 0.75],
    [4, 2],
  );

  // Desktop card scale
  const desktopPictureScale = useTransform(
    scrollYProgress,
    [0.1, 0.75],
    [1, 0.94],
  );

  // Reveals the About text
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 1],
    [0, 0, 1, 1],
  );

  const textScale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.6, 1],
    [0.82, 0.82, 1, 1],
  );

  const textY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.6, 1],
    [30, 30, 0, 0],
  );

  // Stores the cursor position
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);

  // Converts the cursor position into card movement
  const cursorX = useTransform(pointerX, [0, 1], [-16, 16]);
  const cursorY = useTransform(pointerY, [0, 1], [-10, 10]);

  // Smooths the cursor movement
  const smoothCursorX = useSpring(cursorX, {
    stiffness: 160,
    damping: 22,
  });

  const smoothCursorY = useSpring(cursorY, {
    stiffness: 160,
    damping: 22,
  });

  // Tracks the cursor inside the section
  const handlePointerMove = (event) => {
    if (event.pointerType === "touch") return;

    const container =
      event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - container.left) / container.width;

    const y =
      (event.clientY - container.top) / container.height;

    pointerX.set(Math.max(0, Math.min(1, x)));
    pointerY.set(Math.max(0, Math.min(1, y)));
  };

  // Returns the cards to the center
  const handlePointerLeave = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  // Desktop card sizes
  const desktopPictureClasses = `
    h-[clamp(320px,56vh,560px)]
    w-[clamp(260px,32vw,520px)]
  `;

  return (
    <div
      className="
        relative
        flex
        h-full
        w-full
        items-center
        justify-center
      "
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* About text */}
      <motion.div
        className="
          relative
          z-30
          w-[min(32vw,500px)]
          text-center
        "
        style={{
          opacity: textOpacity,
          scale: textScale,
          y: textY,
        }}
      >
        <p
          className="
            mb-2
            text-sm
            font-semibold
            uppercase
            tracking-[0.35em]
            text-univ
          "
        >
          Beyond the Code
        </p>

        <h2
          className="
            text-[clamp(3rem,6vw,6rem)]
            font-semibold
            tracking-[-0.055em]
            xl:text-[clamp(3rem,7vw,6rem)]
          "
        >
          About Me
        </h2>

        <p className="mx-auto mt-2 max-w-lg leading-7 text-muted">
          {`I’m at my best when there’s a real problem to solve. Give me a frustrating process, a repetitive task, or a confusing experience, and I’ll find a way to make it simpler.`}
        </p>

        <p className="mx-auto mt-2 max-w-lg leading-7 text-muted">
          {`Working code is only the starting point. The goal is to build software that feels clear, dependable, and genuinely useful—something that reduces friction instead of adding to it.`}
        </p>

        <p className="mx-auto mt-2 max-w-lg text-xl leading-7 text-muted">
          <span className="font-bold text-univ">Find</span>{" "}
          the friction,{" "}
          <span className="font-bold text-univ">
            Simplify
          </span>{" "}
          the process,{" "}
          <span className="font-bold text-univ">Build</span>{" "}
          it right.
        </p>
      </motion.div>

      {/* Desktop portrait cards */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-20
          flex
          items-center
          justify-center
        "
      >
        {/* Left portrait card */}
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

        {/* Right portrait card */}
        <PictureCard
          src={rightPicture}
          className={desktopPictureClasses}
          imageClassName="
            origin-bottom
            object-bottom
            lg:scale-[1.2]
            xl:scale-[1.1]
            2xl:scale-100
          "
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
  );
};

// Lightweight tablet and mobile About animation
const MobileAbout = ({
  scrollYProgress,
  leftPicture,
  rightPicture,
}) => {
  // Moves the cards vertically
  const topY = useTransform(
    scrollYProgress,
    [0, 0.12, 0.68, 1],
    ["0vh", "0vh", "-31vh", "-31vh"],
  );

  const bottomY = useTransform(
    scrollYProgress,
    [0, 0.12, 0.68, 1],
    ["0vh", "0vh", "35vh", "35vh"],
  );

  // Reveals the About text
  const textOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.48, 0.7, 1],
    [0, 1, 1, 1],
  );

  const textY = useTransform(
    scrollYProgress,
    [0.2, 0.48, 1],
    [20, 0, 0],
  );

  // Tablet and mobile card sizes
  const smallerPictureClasses = `
    h-[clamp(130px,22vh,220px)]
    w-[min(82vw,520px)]
  `;

  return (
    <div
      className="
        relative
        flex
        h-full
        w-full
        items-center
        justify-center
        px-3
      "
    >
      {/* Responsive About text */}
      <motion.div
        className="
          relative
          z-30
          w-full
          max-w-xl
          rounded-[clamp(1rem,4vw,1.5rem)]
          border
          border-border
          bg-surface-raised
          px-[clamp(1rem,4vw,1.75rem)]
          py-[clamp(0.875rem,2.6vh,1.75rem)]
          text-center
          shadow-lg
        "
        style={{
          opacity: textOpacity,
          y: textY,
        }}
      >
        <p
          className="
            mb-[clamp(0.4rem,1.2vh,0.75rem)]
            text-[clamp(0.65rem,min(2.8vw,2.5vh),0.875rem)]
            font-semibold
            uppercase
            leading-none
            tracking-[0.22em]
            text-univ
          "
        >
          Beyond the Code
        </p>

        <h2
          className="
            py-3
            text-[clamp(2.15rem,min(9vw,11vh),4.5rem)]
            font-bold
            leading-[0.95]
          "
        >
          About Me
        </h2>

        <p
          className="
            mx-auto
            mt-[clamp(0.75rem,2vh,1.25rem)]
            text-[clamp(0.72rem,min(3.3vw,2.8vh),1rem)]
            leading-[1.5]
            text-muted
          "
        >
          {`I’m at my best when there’s a real problem to solve. Give me a frustrating process, a repetitive task, or a confusing experience, and I’ll find a way to make it simpler.`}
        </p>

        <p
          className="
            mx-auto
            mt-[clamp(0.75rem,2vh,1.25rem)]
            text-[clamp(0.72rem,min(3.3vw,2.8vh),1rem)]
            leading-[1.5]
            text-muted
          "
        >
          {`Working code is only the starting point. The goal is to build software that feels clear, dependable, and genuinely useful—something that reduces friction instead of adding to it.`}
        </p>

        <p
          className="
            mx-auto
            mt-[clamp(0.65rem,1.7vh,1rem)]
            pt-3
            text-[clamp(0.72rem,min(3.3vw,2.8vh),1rem)]
            leading-[1.4]
            text-muted
          "
        >
          <span className="font-bold text-univ">Find</span>{" "}
          the friction,{" "}
          <span className="font-bold text-univ">
            Simplify
          </span>{" "}
          the process,{" "}
          <span className="font-bold text-univ">Build</span>{" "}
          it right.
        </p>
      </motion.div>

      {/* Tablet and mobile portrait cards */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-20
          flex
          items-center
          justify-center
        "
      >
        {/* Top portrait card */}
        <PictureCard
          src={leftPicture}
          className={`
            ${smallerPictureClasses}
            -rotate-[2deg]
          `}
          mobile
          scrollStyle={{
            y: topY,
          }}
        />

        {/* Bottom portrait card */}
        <PictureCard
          src={rightPicture}
          className={`
            ${smallerPictureClasses}
            rotate-[2deg]
          `}
          mobile
          scrollStyle={{
            y: bottomY,
          }}
        />
      </div>
    </div>
  );
};

const About = () => {
  const sectionRef = useRef(null);

  // Tracks whether the desktop layout should be rendered
  const [isDesktop, setIsDesktop] = useState(false);

  // Tracks whether the screen size has been checked
  const [hasResolvedScreen, setHasResolvedScreen] =
    useState(false);

  // Checks when the screen crosses the desktop breakpoint
  useEffect(() => {
    const desktopQuery = window.matchMedia(
      "(min-width: 1024px)",
    );

    const updateScreenSize = () => {
      setIsDesktop(desktopQuery.matches);
      setHasResolvedScreen(true);
    };

    updateScreenSize();

    desktopQuery.addEventListener(
      "change",
      updateScreenSize,
    );

    return () => {
      desktopQuery.removeEventListener(
        "change",
        updateScreenSize,
      );
    };
  }, []);

  // Tracks the scroll progress of the About section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const leftPicture = "/Selfie-Image.png";
  const rightPicture = "/Whole-Image.png";

  return (
    <section
      id="about"
      ref={sectionRef}
      className="
        relative
        h-[190vh]
        w-full
        bg-background
        text-foreground
        lg:h-[240vh]
      "
    >
      {/* Sticky visible About section */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {hasResolvedScreen &&
          (isDesktop ? (
            <DesktopAbout
              scrollYProgress={scrollYProgress}
              leftPicture={leftPicture}
              rightPicture={rightPicture}
            />
          ) : (
            <MobileAbout
              scrollYProgress={scrollYProgress}
              leftPicture={leftPicture}
              rightPicture={rightPicture}
            />
          ))}
      </div>
    </section>
  );
};

export default About;