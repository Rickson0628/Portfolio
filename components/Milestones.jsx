"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import WordTypewriter from "@/animation/WordTypeWriter";
import IconFadeIn from "@/animation/IconFadeIn";

const milestones = [
  {
      title: "Building Serv",
      company: "Independent Project",
      description:
        "Currently designing and building Serv, a two-sided service marketplace, as a hands-on learning project to deepen my full-stack development skills. Exploring application architecture, authentication, location-based services, real-time interactions, payments, database design, and scalable front-end development while working through the challenges of building a larger application from the ground up.",
      date: "Present",
      type: "Project",
      tags: [
        "Full-Stack Development",
        "System Design",
        "Problem Solving",
        "API Integration",
        "Database Design",
        "Continuous Learning",
      ],
  },

    {
    title: "Computer Programming Graduate",
    company: "Education",
    description:
      "Graduated from Seneca Polytechnic with a 3.7 GPA in Computer Programming. Built a strong foundation in full-stack development, software engineering, database systems, software testing, and data structures and algorithms through hands-on projects and collaborative software development.",
    date: "January 2024 - December 2025",
    type: "School Learning",
    tags: [
      "Full-Stack Development",
      "Web Development",
      "Database Systems",
      "Software Engineering",
      "Data Structures & Algorithms",
      "Software Testing",
    ],
  },

    {
    title: "Full-Stack Developer Intern",
    company: "DBTK",
    description:
      "Supported the development and maintenance of DBTK’s web applications by identifying and fixing bugs, resolving UI and responsiveness issues, and improving existing front-end functionality. Worked with an established codebase, tested changes across different screen sizes, and collaborated with the development team to improve usability, consistency, and overall application stability.",
    date: "2025",
    type: "Internship",
    tags: [
      "Bug Fixing",
      "UI Development",
      "Responsive Design",
      "Code Maintenance",
      "Problem Solving",
      "Team Collaboration",
    ],
  },
  {
  title: "Entrepreneurship Pitch Finalist",
  company: "Seneca Polytechnic",
  description:
  "Competed against other teams in Seneca’s Entrepreneurship Work-Integrated Learning Pitch Day and advanced as a Top 5 participant, presenting Serv, a two-sided service marketplace concept, to an audience of approximately 100 people. Developed and delivered the product pitch, communicated the problem and proposed solution, and gained hands-on experience presenting a technical business concept to a live audience.",
  date: "April 2025",
  type: "Achievement",
  tags: [
    "Public Speaking",
    "Product Pitching",
    "Technical Communication",
    "Entrepreneurship",
    "Product Strategy",
    "Presentation Skills",
  ],
},


  {
  title: "Professional Development",
  company: "Udemy",
  description:
    "Completed five certifications focused on modern software development, expanding my skills beyond formal coursework through hands-on training in React, Next.js, Tailwind CSS, Framer Motion, Node.js, and Python.",
  date: "2025 - 2026",
  type: "Certification",
  tags: [
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "Tailwind CSS",
    "Framer Motion",
  ],
},

    {
    title: "Service Advisor",
    company: "Canadian Tire",
    description:
      "Recognized as one of the team’s top sellers through strong communication, problem-solving, and customer-focused recommendations. Worked in a fast-paced environment coordinating across multiple teams, resolving issues under pressure, managing competing priorities, and training new colleagues on internal systems and processes—strengthening transferable skills in collaboration, troubleshooting, adaptability, and technical communication.",
    date: "August 2023 - June 2026",
    type: "Work",
    tags: [
      "Problem Solving",
      "Technical Communication",
      "Cross-Team Collaboration",
      "Troubleshooting",
      "Training & Mentorship",
      "Prioritization",
    ],
  },

{
  title: "STEM Graduate",
  company: "Bataan National High School",
  description:
    "Graduated with High Honors from the Science, Technology, Engineering, and Mathematics strand. Developed a strong foundation in advanced mathematics, scientific research, logical reasoning, and technology-focused problem solving, strengthening the analytical and structured thinking skills that support software development and technical learning.",
  date: "2022",
  type: "Academic",
  tags: [
    "Analytical Thinking",
    "Problem Solving",
    "Logical Reasoning",
    "Research",
    "Mathematics",
    "Technical Learning",
  ],
},
];

// Only rendered on lg screens and above
const DesktopCircleGlow = ({ scrollYProgress }) => {
  // Animates the circle glow scale
  const circleGlow = useTransform(scrollYProgress, [0.1, 0.5, 0.7], [1, 2, 1]);

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
  const [showDesktopGlow, setShowDesktopGlow] = useState(false);

  // Checks when the screen crosses the lg breakpoint
  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    const updateDesktopGlow = () => {
      setShowDesktopGlow(desktopQuery.matches);
    };

    updateDesktopGlow();

    desktopQuery.addEventListener("change", updateDesktopGlow);

    return () => {
      desktopQuery.removeEventListener("change", updateDesktopGlow);
    };
  }, []);

  // Tracks the timeline scroll progress
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 20%"],
  });

  // Animates the timeline line
  const scaleY = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);

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
              <DesktopCircleGlow scrollYProgress={scrollYProgress} />
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
                    <WordTypewriter text={milestone.title} />
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
                    <WordTypewriter text={milestone.company} />
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
                    <WordTypewriter text={milestone.date} />
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
                    <WordTypewriter text={milestone.type} />
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
                <WordTypewriter text={milestone.description} />
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
              {index < milestones.length - 1 && <div className="mb-20" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
