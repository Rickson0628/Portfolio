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
    <section ref={timelineRef} className="p-8 lg:p-16 xl:p-20">
      <div className="lg:flex lg:justify-center font-extrabold text-3xl sm:text-4xl  lg:text-5xl mt-10 mb-10 lg:mb-20">
         <WordTypewriter text="Milestones"/>
      </div>

      <div className="relative w-full">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 h-full w-[2px] lg:left-1/2 lg:-translate-x-1/2">
          {/* Background line */}
          <div className="absolute h-full w-[2px] bg-gray-300"></div>

          {/* Animated glowing line */}
          <motion.div
            className="absolute h-full w-[2px] origin-top bg-univ shadow-[0_0_18px_rgba(240,128,0,0.9)]"
            style={{ scaleY }}
          />

          {/* Moving pulsing circle */}
          <motion.div
            className="absolute left-1/2 z-20 h-4 w-4 -translate-x-1/2 -translate-y-1/2"
            style={{ top: circlePosition }}
          >
            {/* Pulse glow */}
            <motion.div
              className="absolute inset-0 rounded-full bg-univ shadow-[0_0_18px_8px_rgba(240,128,0,0.6)]"
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
            <div className="relative h-4 w-4 rounded-full bg-univ shadow-[0_0_18px_8px_rgba(240,128,0,0.6)]"></div>
          </motion.div>
        </div>

        {/* Milestone Section */}
        <div className="ml-12 lg:ml-6">
          {milestones.map((milestone, index) => (
            <div key={index}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-24">
                {/* Left side */}
                <div className="lg:pr-5 lg:text-right">
                  <div className="flex justify-between mb-4 gap-4 ">
                    <div className="text-left">
                      <div className="font-bold mb-1 sm:text-lg lg:text-xl lg:text-2xl">
                        <WordTypewriter text={milestone.title}/>
                        
                      </div>

                      <div className="text-univ sm:text-lg lg:text-xl xl:text-2xl">
                         <WordTypewriter text={milestone.company}/>
                      </div>
                    </div>

                    <div className="text-right ">
                      <div className="text-gray-600 mb-1 sm:text-lg lg:text-xl">
                         <WordTypewriter text={milestone.date}/>
                      </div>

                      <div className="text-univ sm:text-lg lg:text-xl">
                         <WordTypewriter text={milestone.type}/>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side */}
                <div className="text-gray-700 lg:pr-5 lg:text-lg">
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