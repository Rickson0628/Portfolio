"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import WordTypewriter from "@/animation/WordTypeWriter";
import IconFadeIn from "@/animation/IconFadeIn";

const milestones = [
  {
    title: "Service Advisor",
    company: "Canadian Tire",
    description:
      "Delivered customer-focused service by communicating effectively, resolving issues under pressure, coordinating with mechanics, automotive parts, and service advisors, multitasking in a fast-paced environment, and training new colleagues on internal systems and company policies.",
    date: "2023 - Present",
    type: "Work",
    tags: [
      "Customer Service",
      "Problem Solving",
      "Team Coordination",
    ],
  },
  {
    title: "Computer Programming Graduate",
    company: "Seneca Polytechnic",
    description:
      "Student at Seneca Polytechnic with a 3.7 GPA. Coursework spans full-stack development, object-oriented programming, software testing, database management, operating systems, software analysis and design, and data structures and algorithms.",
    date: "2024 - 2025",
    type: "School Learning",
    tags: [
      "Full-Stack Development",
      "Database Management",
      "Software Testing",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "DBTK",
    description:
      "Assisted in developing responsive and high-performing web pages using Next.js, including server-rendered and statically generated pages. Supported backend functionality with Node.js, REST API integration, and MongoDB database management.",
    date: "2025",
    type: "Internship",
    tags: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    title: "Computer Programming Graduate",
    company: "Seneca Polytechnic",
    description:
      "Student at Seneca Polytechnic with a 3.7 GPA. Coursework spans full-stack development, object-oriented programming, software testing, database management, operating systems, software analysis and design, and data structures and algorithms.",
    date: "2024 - 2025",
    type: "School Learning",
    tags: [
      "Full-Stack Development",
      "Database Management",
      "Software Testing",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "DBTK",
    description:
      "Assisted in developing responsive and high-performing web pages using Next.js, including server-rendered and statically generated pages. Supported backend functionality with Node.js, REST API integration, and MongoDB database management.",
    date: "2025",
    type: "Internship",
    tags: ["Next.js", "Node.js", "MongoDB"],
  },
];

// Only rendered on lg screens and above
const DesktopCircleGlow = ({ scrollYProgress }) => {
  // Animates the circle glow scale
  const circleGlow = useTransform(
    scrollYProgress,
    [0.1, 0.5, 0.7],
    [1, 2, 1],
  );

  return (
    <motion.div
      aria-hidden="true"
      className="
        absolute
        -inset-3
        rounded-full
        from-white
        to-univ
        to-75%
        dark:bg-radial-[at_5%_25%]
        dark:blur-2xl
      "
      style={{
        scale: circleGlow,
      }}
    />
  );
};

const Milestones = () => {
  const timelineRef = useRef(null);

  // Controls whether the desktop glow is mounted
  const [showDesktopGlow, setShowDesktopGlow] =
    useState(false);

  // Checks when the screen crosses the lg breakpoint
  useEffect(() => {
    const desktopQuery = window.matchMedia(
      "(min-width: 1024px)",
    );

    const updateDesktopGlow = () => {
      setShowDesktopGlow(desktopQuery.matches);
    };

    updateDesktopGlow();

    desktopQuery.addEventListener(
      "change",
      updateDesktopGlow,
    );

    return () => {
      desktopQuery.removeEventListener(
        "change",
        updateDesktopGlow,
      );
    };
  }, []);

  // Tracks the timeline scroll progress
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 20%"],
  });

  // Animates the timeline line
  const scaleY = useTransform(
    scrollYProgress,
    [0.1, 0.8],
    [0, 1],
  );

  // Moves the circle along the timeline
  const circlePosition = useTransform(
    scrollYProgress,
    [0.1, 0.8],
    ["0%", "100%"],
  );

  return (
    <section
      id="milestones"
      ref={timelineRef}
      className="
        mt-10
        p-8

        lg:mt-0
        lg:p-15
        lg:pt-0

        xl:p-20
      "
    >
      {/* Section heading */}
      <h2
        className="
          mb-10
          text-[clamp(3rem,6vw,6rem)]
          font-semibold
          tracking-[-0.055em]

          xl:text-[clamp(2.5rem,5vw,5rem)]
        "
      >
        <WordTypewriter text="Milestones" />
      </h2>

      <div className="relative w-full">
        {/* Timeline line */}
        <div
          className="
            absolute
            left-4
            top-0
            h-full
            w-[2px]

            lg:left-6
          "
        >
          {/* Animated timeline line */}
          <motion.div
            className="
              absolute
              h-full
              w-[2px]
              origin-top
              transform-gpu
              will-change-transform
            "
            style={{
              scaleY,
            }}
          >
            {/* Orange line glow */}
            <div
              aria-hidden="true"
              className="
                absolute
                inset-0
                bg-linear-to-b
                from-univ/50
                from-[2%]
                to-univ
                to-[100%]
                opacity-80
                blur-[5px]
              "
            />

            {/* Sharp orange line */}
            <div
              aria-hidden="true"
              className="
                absolute
                inset-0
                bg-linear-to-b
                from-univ/50
                from-[2%]
                to-univ
                to-[100%]
              "
            />
          </motion.div>

          {/* Moving circle */}
          <motion.div
            className="
              absolute
              left-1/2
              z-20
              h-4
              w-4
              -translate-x-1/2
              -translate-y-1/2
              transform-gpu
              will-change-transform
            "
            style={{
              top: circlePosition,
            }}
          >
            {/* Animated glow on lg screens and above */}
            {showDesktopGlow && (
              <DesktopCircleGlow
                scrollYProgress={scrollYProgress}
              />
            )}

            {/* Stable outer glow */}
            <div
              aria-hidden="true"
              className="
                absolute
                -inset-1
                scale-150
                rounded-full
                bg-[#feb46a]
                opacity-20
                blur-md
              "
            />

            {/* Main circle */}
            <div
              className="
                relative
                h-4
                w-4
                rounded-full
                bg-univ
                shadow-[0_0_10px_1px_rgba(255,255,255,0.1)]
              "
            />
          </motion.div>
        </div>

        {/* Milestones */}
        <div className="ml-12 lg:ml-20">
          {milestones.map((milestone, index) => (
            <div key={`${milestone.title}-${index}`}>
              {/* Milestone heading */}
              <div className="mb-4 flex justify-between gap-4">
                <div className="min-w-0 text-left">
                  <div
                    className="
                      mb-1
                      font-sans
                      text-xl
                      font-semibold
                      leading-tight
                      tracking-[-0.03em]

                      sm:text-2xl
                      lg:text-3xl
                    "
                  >
                    <WordTypewriter
                      text={milestone.title}
                    />
                  </div>

                  <div
                    className="
                      font-sans
                      text-sm
                      font-semibold
                      leading-6
                      text-univ

                      sm:text-base
                      lg:text-xl
                    "
                  >
                    <WordTypewriter
                      text={milestone.company}
                    />
                  </div>
                </div>

                {/* Milestone date and type */}
                <div className="shrink-0 text-right">
                  <div
                    className="
                      mb-1
                      font-mono
                      text-xs
                      tabular-nums
                      tracking-[-0.02em]
                      text-muted

                      sm:text-sm
                      lg:text-lg
                    "
                  >
                    <WordTypewriter
                      text={milestone.date}
                    />
                  </div>

                  <div
                    className="
                      font-mono
                      text-xs
                      font-medium
                      tracking-[-0.02em]
                      text-univ

                      sm:text-sm
                      lg:text-lg
                    "
                  >
                    <WordTypewriter
                      text={milestone.type}
                    />
                  </div>
                </div>
              </div>

              {/* Milestone description */}
              <div
                className="
                  font-sans
                  leading-7
                  text-muted

                  sm:text-lg
                "
              >
                <WordTypewriter
                  text={milestone.description}
                />
              </div>

              {/* Milestone tags */}
              <motion.div className="mt-5 flex flex-wrap gap-2">
                {milestone.tags.map((tag) => (
                  <IconFadeIn key={tag}>
                    <span
                      className="
                        rounded-lg
                        border
                        border-border
                        bg-surface-raised
                        px-4
                        py-2
                        font-sans
                        text-xs
                        text-foreground

                        sm:text-sm
                      "
                    >
                      {tag}
                    </span>
                  </IconFadeIn>
                ))}
              </motion.div>

              {/* Milestone spacing */}
              {index < milestones.length - 1 && (
                <div className="mb-20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;