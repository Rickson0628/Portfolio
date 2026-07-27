"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import WordTypewriter from "@/animation/WordTypeWriter";

const milestones = [
  {
    title: "Service Advisor",
    company: "Canadian Tire",
    description:
      "Delivered customer-focused service by communicating effectively, resolving issues under pressure, coordinating with mechanics, automotive parts, and service advisors, multitasking in a fast-paced environment, and training new colleagues on internal systems and company policies.",
    date: "2023 - Present",
    type: "Work",
  },
  {
    title: "Diploma in Computer Programming",
    company: "Seneca Polytechnic",
    description:
      "Student at Seneca Polytechnic with a 3.7 GPA. Coursework spans full-stack development, object-oriented programming, software testing, database management, operating systems, software analysis and design, and data structures and algorithms.",
    date: "2024 - 2025",
    type: "School Learning",
  },
  {
    title: "Full-Stack Developer",
    company: "DBTK",
    description:
      "Assisted in developing responsive and high-performing web pages using Next.js, including server-rendered and statically generated pages. Supported backend functionality with Node.js, REST API integration, and MongoDB database management.",
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

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const circlePosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={timelineRef} className="p-8 lg:p-15 xl:p-20">
      <div className="mb-10 mt-10 font-sans text-4xl font-semibold leading-none tracking-[-0.05em] sm:text-5xl lg:mb-20 lg:flex lg:justify-center lg:text-6xl">
         <WordTypewriter text="Milestones"/>
      </div>

      <div className="relative w-full">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 h-full w-[2px] lg:left-1/2 lg:-translate-x-1/2">
          {/* Background line */}
          <div className="absolute h-full w-[2px] bg-gray-300"></div>

          {/* Animated glowing line */}
          <motion.div
            className="absolute h-full w-[2px] origin-top bg-univ shadow-[#5B7553]"
            style={{ scaleY }}
          />

          {/* Moving pulsing circle */}
          <motion.div
            className="absolute left-1/2 z-20 h-4 w-4 -translate-x-1/2 -translate-y-1/2"
            style={{ top: circlePosition }}
          >
            {/* Pulse glow */}
            <motion.div
              className="absolute inset-0 rounded-full bg-univ shadow-[#5B7553]]"
              animate={{
                scale: [1, 2.5, 1],
                opacity: [0.7, 0, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Main circle */}
            <div className="relative h-4 w-4 rounded-full bg-univ shadow-[#5B7553]"></div>
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
                        <WordTypewriter text={milestone.title}/>
                        
                      </div>

                      <div className="font-sans text-sm leading-6 text-gray-600 sm:text-base lg:text-lg">
                         <WordTypewriter text={milestone.company}/>
                      </div>
                    </div>

                    <div className="text-right ">
                      <div className="mb-1 font-mono text-xs tracking-[-0.02em] text-gray-600 tabular-nums sm:text-sm lg:text-base">
                         <WordTypewriter text={milestone.date}/>
                      </div>

                      <div className="font-mono text-xs font-medium tracking-[-0.02em] text-univ sm:text-sm lg:text-base">
                         <WordTypewriter text={milestone.type}/>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side */}
                <div className="font-sans text-base leading-7 text-gray-700 sm:text-lg lg:pl-5 lg:leading-8">
                   <WordTypewriter text={milestone.description}/>
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
