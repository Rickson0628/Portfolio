"use client";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import { AiOutlineClose, AiOutlineLink } from "react-icons/ai";
import { ImArrowDownLeft2 } from "react-icons/im";

import WordTypewriter from "@/animation/WordTypeWriter";

// Project content
const projects = [
  {
    id: 1,
    title: "Serv",
    date: "Present",
    description:
      "Online service platform that helps customers find qualified skilled workers for repairs, maintenance,service platform that helps customers find qualified skilled workers for repairs, maintenance,service platform that helps customers find qualified skilled workers for repairs, maintenance, and other service needs",
    image: [
      "/serv-image.png",
      "/hoverServ-image.png",
      "/serv-image.png",
      "/hoverServ-image.png",
      "/hoverServ-image.png",
      "/serv-image.png",
      "/hoverServ-image.png",
    ],
    hoverImage: "/hoverServ-image.png",
    role: "Full-Stack Developer",
    technologies: [
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
      },
      {
        name: "React",
        icon: <SiReact />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
      },
    ],
    link: "https://www.figma.com/design/mfDny3wMR43p24YnegKCeN/Serv?node-id=0-1&t=2rjeML1fHNnI6Dy4-1",
  },

  {
    id: 2,
    title: "Nike Store",
    date: "March 2026",
    description:
      "A practice e-commerce website built with Tailwind CSS, featuring a clean store layout, product sections, and a responsive design for a modern shopping experience.",
    image: ["/nike.png", "/hoverNike.png", "/nike.png", "/hoverNike.png"],
    hoverImage: "/hoverNike.png",
    role: "Full-Stack Developer",
    technologies: [
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
      },
      {
        name: "React",
        icon: <SiReact />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
      },
    ],
    link: "https://tailwind-project-lime-pi.vercel.app/",
  },
  {
    id: 3,
    title: "Serv",
    date: "Present",
    description:
      "Online service platform that helps customers find qualified skilled workers for repairs, maintenance, and other service needs.",
    image: [
      "/serv-image.png",
      "/hoverServ-image.png",
      "/serv-image.png",
      "/hoverServ-image.png",
    ],
    hoverImage: "/hoverServ-image.png",
    role: "Full-Stack Developer",
    technologies: [
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
      },
      {
        name: "React",
        icon: <SiReact />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
      },
    ],
    link: "https://www.figma.com/design/mfDny3wMR43p24YnegKCeN/Serv?node-id=0-1&t=2rjeML1fHNnI6Dy4-1",
  },

  {
    id: 4,
    title: "Nike Store",
    date: "March 2026",
    description:
      "A practice e-commerce website built with Tailwind CSS, featuring a clean store layout, product sections, and a responsive design for a modern shopping experience.",
    image: ["/nike.png", "/hoverNike.png", "/nike.png", "/hoverNike.png"],
    hoverImage: "/hoverNike.png",
    role: "Full-Stack Developer",
    technologies: [
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
      },
      {
        name: "React",
        icon: <SiReact />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
      },
    ],
    link: "https://tailwind-project-lime-pi.vercel.app/",
  },
];

// Card entrance animation
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: (index) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.55,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Project = () => {
  const shouldReduceMotion = useReducedMotion();

  const projectScrollRef = useRef(null);
  const projectViewportRef = useRef(null);
  const projectTrackRef = useRef(null);
  const imageContainerRefScroller = useRef([]);

  const [isHorizontalScroll, setIsHorizontalScroll] = useState(false);
  const [horizontalDistance, setHorizontalDistance] = useState(0);

  const [selectedProject, setSelectedProject] = useState(null);

  const [imageCount, setImageCount] = useState(0);

  useEffect(() => {
    imageContainerRefScroller?.current[imageCount]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [imageCount]);

  // Tracks vertical progress through the sticky Projects area.
  const { scrollYProgress } = useScroll({
    target: projectScrollRef,
    offset: ["start start", "end end"],
  });

  // Converts the vertical progress into horizontal movement.
  const projectX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -horizontalDistance],
  );

  const smoothProjectX = useSpring(projectX, {
    stiffness: 130,
    damping: 30,
    mass: 0.35,
  });

  // Uses horizontal scrolling from Tailwind's large breakpoint and above.
  useEffect(() => {
    const largeScreen = window.matchMedia("(min-width: 1024px)");

    const updateScrollMode = () => {
      setIsHorizontalScroll(largeScreen.matches && !shouldReduceMotion);
    };

    updateScrollMode();
    largeScreen.addEventListener("change", updateScrollMode);

    return () => {
      largeScreen.removeEventListener("change", updateScrollMode);
    };
  }, [shouldReduceMotion]);

  // Measures the exact distance the project track needs to travel.
  useEffect(() => {
    if (!isHorizontalScroll) return;

    const measureTrack = () => {
      const viewport = projectViewportRef.current;
      const track = projectTrackRef.current;

      if (!viewport || !track) return;

      setHorizontalDistance(
        Math.max(0, track.scrollWidth - viewport.clientWidth),
      );
    };

    const animationFrame = requestAnimationFrame(measureTrack);
    const resizeObserver = new ResizeObserver(measureTrack);

    if (projectViewportRef.current) {
      resizeObserver.observe(projectViewportRef.current);
    }

    if (projectTrackRef.current) {
      resizeObserver.observe(projectTrackRef.current);
    }

    window.addEventListener("resize", measureTrack);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", measureTrack);
    };
  }, [isHorizontalScroll]);

  const openProject = (project) => {
    setImageCount(0);
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (!selectedProject) return;

    setImageCount((previousImage) =>
      previousImage === selectedProject.image.length - 1
        ? 0
        : previousImage + 1,
    );
  };

  const previousImage = () => {
    if (!selectedProject) return;

    setImageCount((previousImage) =>
      previousImage === 0
        ? selectedProject.image.length - 1
        : previousImage - 1,
    );
  };

  return (
    // Projects section
    <section
      id="projects"
      className="-mt-10 p-8 sm:mx-5 lg:-mb-5 lg:-mt-20 lg:p-15 xl:p-20"
    >
      {/* Project scroll area */}
      <div
        ref={projectScrollRef}
        className="relative"
        style={
          isHorizontalScroll
            ? { height: `calc(100dvh + ${horizontalDistance}px)` }
            : undefined
        }
      >
        {/* Sticky viewport */}
        <div
          ref={projectViewportRef}
          className={
            isHorizontalScroll
              ? "sticky top-0 flex h-dvh flex-col overflow-hidden"
              : ""
          }
        >
          {/* Section heading stays visible during the horizontal scroll */}
          <div
            className={isHorizontalScroll ? "w-full shrink-0 pt-3 sm:pt-6" : ""}
          >
            {/* Section title */}
            <h2 className="mb-5 mt-10 text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-none tracking-[-0.055em]">
              <WordTypewriter text="Projects" />
            </h2>

            {/* Section divider */}
          </div>

          {/* Project track */}
          <motion.div
            ref={projectTrackRef}
            className={
              isHorizontalScroll
                ? "my-auto flex w-max gap-8 py-5 xl:gap-9"
                : "gap-8"
            }
            style={{ x: isHorizontalScroll ? smoothProjectX : 0 }}
          >
            {projects.map((project, index) => (
              // Project card
              <motion.article
                key={project.id}
                custom={index}
                variants={cardVariants}
                initial={shouldReduceMotion ? false : "hidden"}
                whileInView={shouldReduceMotion ? undefined : "visible"}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                onClick={() => openProject(project)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openProject(project);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View ${project.title} project details`}
                style={
                  isHorizontalScroll
                    ? {
                        width:
                          "min(72vw, 850px, max(15rem, calc((100dvh - 18rem) * 1.5)))",
                      }
                    : undefined
                }
                className={`group relative overflow-hidden rounded-2xl border-2 border-border bg-surface pb-4   shadow-md transition-[background-color,border-color,box-shadow] duration-300 hover:cursor-pointer hover:bg-highlight hover:shadow-xl  ${
                  isHorizontalScroll ? "shrink-0" : "mt-8"
                }`}
              >
                {/* Bottom accent line */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-univ transition-transform duration-500 ease-out group-hover:scale-x-100"
                />

                {/* Card icon */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-5 z-10 flex size-7 sm:size-8 items-center justify-center rounded-full dark:bg-[#181a1c] text-white shadow-sm ring-1 ring-white bg-white dark:ring-white/5"
                >
                  {/* Default dot */}
                  <span className="size-1.5 sm:size-2 rounded-full  bg-black/70 dark:bg-white/80 transition-all duration-300 group-hover:scale-0 group-hover:opacity-0" />

                  {/* Hover arrow */}
                  <ImArrowDownLeft2
                    size={11}
                    strokeWidth={0.5}
                    className="absolute translate-x-1 text-black/70 dark:text-white/80 -translate-y-1 scale-75 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"
                  />
                </div>

                {/* Image preview */}
                <div className="relative  aspect-video w-full overflow-hidden xl:aspect-[3/2]">
                  {/* Default image */}
                  <Image
                    src={project.image[0]}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(min-width: 1280px) 850px, (min-width: 1024px) 50vw, 100vw"
                    className="object-cover opacity-100 transition-[opacity,transform] duration-500 group-hover:scale-[1.015] group-hover:opacity-0 "
                  />

                  {/* Hover image */}
                  <Image
                    src={project.hoverImage}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="(min-width: 1280px) 850px, (min-width: 1024px) 50vw, 100vw"
                    className="object-cover opacity-0 transition-[opacity,transform] duration-500 group-hover:scale-[1.015] group-hover:opacity-100"
                  />

                  {/* Project title and date */}
                  <div className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between">
                    {/* Project title and date overlay */}
                    <div className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between bg-linear-to-t from-black/90 via-black/45 to-transparent px-4 pb-4 pt-16 sm:px-5 sm:pb-5">
                      {/* Project title */}
                      <div className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className="h-8 w-[3px] rounded-full bg-univ"
                        />

                        <h3 className="font-sans text-xl font-semibold leading-none tracking-[-0.03em] text-white sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
                          {project.title}
                        </h3>
                      </div>

                      {/* Project date */}
                      <p className="rounded-full border border-white/15 bg-black/35 px-3 py-1 font-mono text-xs text-white/75 backdrop-blur-md sm:text-sm">
                        {project.date}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project description */}
                <div className="mt-2 overflow-hidden whitespace-nowrap font-sans text-sm sm:text-base leading-6 text-muted mx-4 xl:mt-3">
                  {/* Moving text */}
                  <motion.div
                    initial={{ x: "1%" }}
                    whileInView={{ x: "-50%" }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{
                      duration: 20,
                      delay: 0.8,
                      ease: "linear",
                    }}
                    className="inline-block sm:text-base"
                  >
                    {project.description}
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Project modal */}
      <AnimatePresence>
        {selectedProject && (
          // Modal backdrop
          <motion.div
            key="project-modal"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.2,
            }}
            className="fixed inset-0 z-100 overflow-y-auto bg-overlay p-5 "
            onClick={closeProject}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            {/* Modal container */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 30,
                      scale: 0.98,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 0,
                      y: 20,
                      scale: 0.98,
                    }
              }
              transition={{
                duration: shouldReduceMotion ? 0.4 : 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto my-8 w-full max-w-5xl bg-border dark:bg-white/80 "
              onClick={(event) => event.stopPropagation()}
            >
              {/* Whole Card Container */}
              <div className="relative mb-5 w-full rounded-xl border border-border bg-background py-3 px-2  text-foreground shadow-xl overflow-hidden lg:grid lg:grid-cols-[55%_45%] lg:gap-3 lg:py-5 lg:px-4 ">
                {/* Desktop size: Image Carousel and Preview pictures */}
                <div className="relative lg:grid lg:grid-rows-[70%_30%] lg:gap-3 lg:overflow-hidden">
                  {/* Image carousel */}
                  <div className="relative aspect-video w-full  lg:h-full lg:aspect-auto rounded-lg  overflow-hidden ">
                    {/* Previous image */}
                    <button
                      type="button"
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center text-lg size-7 border border-border rounded-lg text-white bg-black/55 hover:bg-black/70 border-white/15"
                      onClick={previousImage}
                      aria-label="Previous project image"
                    >
                      <AiOutlineLeft />
                    </button>

                    {/* Next image */}
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center text-lg size-7 border border-border rounded-lg text-white bg-black/55 hover:bg-black/70 border-white/15"
                      onClick={nextImage}
                      aria-label="Next project image"
                    >
                      <AiOutlineRight />
                    </button>

                    {/* Image transition */}
                    <AnimatePresence initial={false} mode="wait">
                      {/* Active image layer */}
                      <motion.div
                        key={selectedProject.image[imageCount]}
                        initial={
                          shouldReduceMotion
                            ? false
                            : {
                                opacity: 0,
                                scale: 0.985,
                              }
                        }
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={
                          shouldReduceMotion
                            ? undefined
                            : {
                                opacity: 0,
                                scale: 1.015,
                              }
                        }
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.3,
                          ease: "easeOut",
                        }}
                        className="absolute inset-0"
                      >
                        {/* Active image */}
                        <Image
                          src={selectedProject.image[imageCount]}
                          alt={`${selectedProject.title} project preview ${imageCount + 1}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 1024px"
                          className="object-cover "
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Image counter */}
                    <div className="absolute bottom-3 right-3 z-50 rounded-full bg-overlay px-3 py-1 font-mono text-xs tabular-nums text-on-media">
                      {imageCount + 1} / {selectedProject.image.length}
                    </div>
                  </div>
                  {/* Preview pictures */}
                  <div className="mt-3 hidden gap-2 overflow-x-auto lg:flex">
                    {selectedProject.image.map((image, index) => (
                      <button
                        ref={(element) =>
                          (imageContainerRefScroller.current[index] = element)
                        }
                        key={image}
                        className={`relative w-1/4 h-full flex-shrink-0 rounded-lg overflow-hidden border-2  ${
                          imageCount === index ? "border-univ" : "border-border"
                        }`}
                        onClick={() => setImageCount(index)}
                      >
                        <Image
                          src={image}
                          alt={`${image} project preview ${index + 1}`}
                          fill
                          sizes="100px"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project details Container */}
                <div className="flex flex-col gap-4 w-full py-4 px-2">
                  {/* Project title, link, close button */}
                  <div className="flex items-center justify-between">
                    {/* Project title */}
                    <h3
                      id="project-modal-title"
                      className="font-mono text-[clamp(2.5rem,4vw,3.5rem)] lg:text-[clamp(2rem,3vw,3.5rem)] font-semibold tracking-[-0.03em]"
                    >
                      {selectedProject.title}
                    </h3>
                    {/* Link icon and close button container */}
                    <div className="flex gap-3">
                      {/* Link icon */}
                      <button
                        type="button"
                        onClick={() =>
                          window.open(selectedProject.link, "_blank")
                        }
                        aria-label="Open project link in a new tab"
                        className="flex items-center justify-center text-lg text-univ w-[clamp(2.5rem,6vw,3rem)] h-[clamp(2.5rem,6vw,3rem)] lg:w-[clamp(2rem,5vw,2.5rem)] lg:h-[clamp(2rem,5vw,2.5rem)] border border-border rounded-full cursor-pointer transition-colors duration-200 hover:border-univ transition-transform hover:scale-102"
                      >
                        <BiLinkExternal />
                      </button>
                      {/* Close button */}
                      <button
                        type="button"
                        className="flex items-center justify-center text-lg text-foreground w-[clamp(2.5rem,6vw,3rem)] h-[clamp(2.5rem,6vw,3rem)] lg:w-[clamp(2rem,5vw,2.5rem)] lg:h-[clamp(2rem,5vw,2.5rem)] border border-border rounded-full cursor-pointer transition-colors duration-200  hover:border-red-700 hover:text-red-700 transition-transform hover:scale-102"
                        onClick={closeProject}
                        aria-label="Close project details"
                      >
                        <AiOutlineClose />
                      </button>
                    </div>
                  </div>

                  {/* Year and role container */}
                  <div className="relative grid grid-cols-2  border-y border-border py-4 px-1 ">
                    {/* Year */}
                    <div className="flex flex-col gap-1 pr-6">
                      {/* Year label */}
                      <div className="font-mono text-[clamp(0.65rem,1vw,0.8rem)] lg:text-[clamp(0.65rem,1vw,0.75rem)] font-medium uppercase tracking-[0.12em] text-muted">
                        Year
                      </div>

                      {/* Year value */}
                      <div className="font-mono text-[clamp(0.95rem,1.8vw,1.25rem)] lg:text-[clamp(0.85rem,1.5vw,1.105rem)] font-medium tabular-nums">
                        {selectedProject.date}
                      </div>
                    </div>

                    {/* Middle Line */}
                    <div
                      aria-hidden="true"
                      className=" absolute inset-y-4 left-1/2 w-px -translate-x-1/2 bg-border "
                    />

                    {/* Role */}
                    <div className="flex flex-col gap-1 pl-6">
                      {/* Role label */}
                      <div className="font-mono text-[clamp(0.65rem,1vw,0.8rem)] lg:text-[clamp(0.65rem,1vw,0.75rem)] font-medium uppercase tracking-[0.12em] text-muted ">
                        Role
                      </div>

                      {/* Role value */}
                      <div className="font-sans text-[clamp(0.95rem,1.8vw,1.25rem)] lg:text-[clamp(0.85rem,1.5vw,1.105rem)] font-medium ">
                        {selectedProject.role}
                      </div>
                    </div>
                  </div>

                  {/* Overview container */}
                  <div className="border-border border-b  py-2 pt-0 px-1 ">
                    {/* Overview label */}
                    <div className="mb-2 font-mono text-[clamp(0.7rem,1.1vw,0.8rem)]  lg:text-[clamp(0.65rem,1vw,0.75rem)] font-medium uppercase tracking-[0.12em] text-muted text-sm text-univ">
                      Overview
                    </div>

                    {/* Project description */}
                    <div className="font-sans text-[clamp(0.95rem,1.4vw,1.125rem)]  lg:text-[clamp(0.85rem,1.25vw,1rem)] text-foreground leading-7 ">
                      {selectedProject.description}
                    </div>
                  </div>

                  {/* Technologies Container */}
                  <div className="  border-border  px-1 ">
                    {/* Technologies label */}
                    <div className="mb-4 font-mono text-[clamp(0.7rem,1vw,0.8rem)]  lg:text-[clamp(0.65rem,1vw,0.75rem)] font-medium uppercase tracking-[0.12em] text-muted text-sm text-univ">
                      Technologies
                    </div>
                    {/* Technologies list */}
                    <div className="flex flex-wrap gap-y-3 gap-x-2">
                      {selectedProject.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center gap-2 justify-center font-sans text-[clamp(0.75rem,1vw,0.85rem)]  lg:text-[clamp(0.7rem,0.9vw,0.8rem)] font-medium text-foreground  border border-border py-2 px-3 bg-surface rounded-lg"
                        >
                          {tech.icon} {tech.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;
