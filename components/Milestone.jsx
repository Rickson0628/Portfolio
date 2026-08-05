"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import WordTypewriter from "@/animation/WordTypeWriter";

const milestones = [
  {
    title: "Service Advisor",
    company: "Canadian Tire",
    description:
      "Delivered customer-focused service by communicating effectively, resolving issues under pressure, coordinating with mechanics, automotive parts, and .",
    date: "2023 - Present",
    type: "Work",
  },
  {
    title: "Computer Programming Graduate",
    company: "Seneca Polytechnic",
    description:
      "Student at Seneca Polytechnic with a 3.7 GPA. Coursework spans full-stack development, object-oriented programming, software testing, database .",
    date: "2024 - 2025",
    type: "School Learning",
  },
  {
    title: "Full-Stack Developer",
    company: "DBTK",
    description:
      "Assisted in developing responsive and high-performing web pages using Next.js, including server-rendered and statically generated pages. Supported .",
    date: "2025",
    type: "Internship",
  },
  {
    title: "Diploma in Computer Programming",
    company: "Seneca Polytechnic",
    description:
      "Student at Seneca Polytechnic with a 3.7 GPA. Coursework spans full-stack development, object-oriented programming, software testing, database ",
    date: "2024 - 2025",
    type: "School Learning",
  },
  {
    title: "Full-Stack Developer",
    company: "DBTK",
    description:
      "Assisted in developing responsive and high-performing web pages using Next.js, including server-rendered and statically generated pages. Supported ",
    date: "2025",
    type: "Internship",
  },
];

const Milestone = () => {
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 20%"],
  });

  const scaleY = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  const circlePosition = useTransform(
    scrollYProgress,
    [0.1, 0.9],
    ["0%", "100%"],
  );
  const circleGlow = useTransform(
    scrollYProgress,
    [0.1, 0.5, 0.9],
    [1, 2, 1],
  );

  return (
    <section ref={timelineRef} className="p-8 lg:p-15 xl:p-20 pt-0 lg:-mt-10">
      <h2 className="mb-10 mt-10 text-[clamp(3rem,7vw,6rem)] font-bold leading-none tracking-[-0.06em] lg:mb-20 lg:flex lg:justify-center">
        <WordTypewriter text="Milestones" />
      </h2>
      <div className="relative w-full">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 h-full w-[2px] lg:left-1/2 lg:-translate-x-1/2">
          {/* Animated glowing line */}
          <motion.div
            className="absolute h-full w-[2px] origin-top lg:w-[3px] "
            style={{ scaleY }}
            
          >
            {/* Orange glow */}
            <div className="absolute inset-0 bg-linear-to-b from-bg-univ/50 from-[2%] to-univ to-[100%] opacity-80 blur-[5px]" />

            {/* Sharp orange line */}
            <div className="absolute inset-0 bg-linear-to-b from-bg-univ/50 from-[2%] to-univ to-[100%]" />
          </motion.div>

          {/* Moving pulsing circle */}
          <motion.div
            className="absolute left-1/2 z-20 h-4 w-4 -translate-x-1/2 -translate-y-1/2"
            style={{ top: circlePosition }}
          >
            {/* Centered orange glow */}
            <motion.div
              className="absolute -inset-3 rounded-full  dark:blur-2xl dark:bg-radial-[at_5%_25%] from-white to-univ to-75%"
              style={{scale:circleGlow}}
              animate
            />
             {/* Stable outer glow */ }
             <div className="absolute -inset-1 rounded-full bg-[#feb46a] scale-150  opacity-20 blur-md" /> 

            {/* Main circle */}
            <div className="relative h-4 w-4 rounded-full bg-univ shadow-[0_0_10px_1px_rgba(255,255,255,0.5)]"></div>
          </motion.div>
        </div>

        {/* Milestone Section */}
        <div className="ml-12 lg:ml-6">
          {milestones.map((milestone, index) => (
            <div key={index}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-24">
                {/* Left side */}
                <div className="lg:pr-8 lg:text-right">
                  <div className="flex justify-between mb-4 gap-4 ">
                    <div className="text-left">
                      <div className="mb-1 font-sans text-xl font-semibold leading-tight tracking-[-0.03em] sm:text-2xl lg:text-3xl">
                        <WordTypewriter text={milestone.title} />
                      </div>

                      <div className="font-sans text-sm leading-6 text-muted sm:text-base lg:text-lg font-semibold text-univ">
                        <WordTypewriter text={milestone.company} />
                      </div>
                    </div>

                    <div className="text-right ">
                      <div className="mb-1 font-mono text-xs tracking-[-0.02em]    text-muted tabular-nums sm:text-sm lg:text-base">
                        <WordTypewriter text={milestone.date} />
                      </div>

                      <div className="font-mono text-xs font-medium tracking-[-0.02em] text-univ sm:text-sm lg:text-base">
                        <WordTypewriter text={milestone.type} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side */}
                <div className="font-sans  sm:text-lg lg:pl-5 leading-7 text-muted">
                  <WordTypewriter text={milestone.description} />
                </div>
              </div>

              {index < milestones.length - 1 ? (
                <div className="mb-20"></div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestone;
