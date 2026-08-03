"use client";
import { BiLeftDownArrowCircle } from "react-icons/bi"; 
import { AiOutlineLink } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BiLeftArrowCircle } from "react-icons/bi";
import { BiRightArrowCircle } from "react-icons/bi";
import { BiInfoCircle } from "react-icons/bi";
import LineHorizontalIcon from "@/svg/horizontal-line";
import Image from "next/image";
import React, { useState } from "react";

const projects = [
  {
    title: "Serv",
    date: "Present",
    description:
      "Online service platform that helps customers find qualified skilled workers for repairs, maintenance, and other service needs.",
    image: ["/serv-image.png", "/hoverServ-image.png"],
    hoverImage: "/hoverServ-image.png",
    role: "Full-Stack Developer",
    link: "https://www.figma.com/design/mfDny3wMR43p24YnegKCeN/Serv?node-id=0-1&t=2rjeML1fHNnI6Dy4-1",
  },
  {
    title: "Nike Store",
    date: "March 2026",
    description:
      "A practice e-commerce website built with Tailwind CSS, featuring a clean store layout, product sections, and a responsive design for a modern shopping experience.",
    image: ["/nike.png", "/hoverNike.png"],
    hoverImage: "/hoverNike.png",
    role: "Full-Stack Developer",
    link: "https://tailwind-project-lime-pi.vercel.app/"
  },
    {
    title: "Serv",
    date: "Present",
    description:
      "Online service platform that helps customers find qualified skilled workers for repairs, maintenance, and other service needs.",
    image: ["/serv-image.png", "/hoverServ-image.png"],
    hoverImage: "/hoverServ-image.png",
    role: "Full-Stack Developer",
    link: "https://www.figma.com/design/mfDny3wMR43p24YnegKCeN/Serv?node-id=0-1&t=2rjeML1fHNnI6Dy4-1",
  },
  {
    title: "Nike Store",
    date: "March 2026",
    description:
      "A practice e-commerce website built with Tailwind CSS, featuring a clean store layout, product sections, and a responsive design for a modern shopping experience.",
    image: ["/nike.png", "/hoverNike.png"],
    hoverImage: "/hoverNike.png",
    role: "Full-Stack Developer",
    link: "https://tailwind-project-lime-pi.vercel.app/"
  },
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageCount, setImageCount] = useState(0);
  const nextImage = () => {
    setImageCount((prev) =>
      prev === selectedProject.image.length - 1 ? 0 : prev + 1,
    );
  };
  const prevImage = () => {
    setImageCount((prev) =>
      prev === 0 ? selectedProject.image.length - 1 : prev - 1,
    );
  };
  return (
    <section id="projects" className="p-8 -mt-10 lg:p-15 xl:p-20 sm:mx-5 lg:-mb-5 lg:-mt-20">
      <h2 className="mb-5 mt-10 font-sans text-4xl font-semibold leading-none tracking-[-0.05em] sm:text-5xl lg:text-6xl">
        PROJECTS
      </h2>
      <div className=""></div>
      <LineHorizontalIcon />

      {/* Card  */}
      <div className="gap-8 lg:grid lg:grid-cols-2 lg:mt-3 ">
        {projects.map((project) => (
          <article
            key={project.title}
            onClick={() => {
              setImageCount(0);
              setSelectedProject(project);
            }}
            className="group relative mt-8 rounded-2xl border-2 border-border bg-surface p-4 shadow-md transition-all duration-300 hover:scale-[1.02] hover:cursor-pointer  hover:bg-highlight"
          >
            {/* Icon */}
            <div className="absolute right-8 top-8 z-10">
              <BiInfoCircle
                size={22}
                className="text-on-media opacity-100 transition-opacity duration-300 group-hover:opacity-0"
              />
         
              <BiLeftDownArrowCircle
                size={22}
                className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 text-on-media scale-115"
              />
            </div>

            {/* Image Container */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mt-2">
              <Image
                src={project.image[0]}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
              />

              <Image
                src={project.hoverImage}
                alt={`${project.title} hover preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              />
            </div>

            {/* Project Info */}
            <div className="flex justify-between sm:items-center mt-4 gap-1">
              {/* Project Title */}
              <h3 className="font-sans text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl lg:text-2xl xl:text-3xl">
                {project.title}
              </h3>
              {/* Project Date */}
              <p className="font-mono text-xs tracking-[-0.02em] text-muted tabular-nums sm:text-sm">
                {project.date}
              </p>
            </div>

            {/* Marquee Description */}
            <div className="mt-2 overflow-hidden whitespace-nowrap font-sans text-sm leading-6 text-muted">
              <p className="inline-block animate-marquee sm:text-base">
                ★ {project.description} ★
              </p>
            </div>
          </article>
        ))}
      </div>
      {/* Project Modal */}
      {selectedProject && (
        // Project  Modal Container
        <div
          className="fixed inset-0 z-100 overflow-y-auto bg-overlay p-5"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="mx-auto my-8 w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Upper Modal */}
            <div className="relative mb-5 w-full rounded-xl border border-border bg-surface-raised p-5 text-foreground shadow-xl">
              {/* Image Container */}
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mt-2">
                {/* Arrows */}
                <button
                  className="absolute left-1 top-1/2 z-50 -translate-y-1/2 text-2xl text-on-media transition-opacity hover:opacity-70"
                  onClick={prevImage}
                  aria-label="Previous project image"
                >
                  <BiLeftArrowCircle />
                </button>
                <button
                  className="absolute right-1 top-1/2 z-50 -translate-y-1/2 text-2xl text-on-media transition-opacity hover:opacity-70"
                  onClick={nextImage}
                  aria-label="Next project image"
                >
                  <BiRightArrowCircle />
                </button>

                <Image
                  src={selectedProject.image[imageCount]}
                  alt={`${selectedProject.title} preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-100 transition-all duration-500 hover:scale-[1.02] "
                />
                <div className="absolute bottom-3 right-3 z-50 rounded-full bg-overlay px-3 py-1 font-mono text-xs text-on-media tabular-nums">
                  {imageCount + 1} / {selectedProject.image.length}
                </div>
              </div>
            </div>
            {/* Lower Modal */}
            <div className="relative w-full rounded-xl border border-border bg-surface-raised p-5 text-foreground shadow-xl">
              {/* First Div */}
              <div className="flex w-full my-2 gap-2 ">
                {/* Title and Link */}
                <a className="w-7/8 rounded-sm border border-border bg-background p-4 shadow-xl transition-all duration-300 hover:scale-[1.01] hover:cursor-pointer hover:bg-highlight" href={selectedProject.link}
                target="_bka">
                  <div className="flex justify-between">
                    <div className="font-sans text-xl font-semibold tracking-[-0.03em] md:text-2xl lg:text-3xl">
                      {selectedProject.title}
                    </div>
                    <div className="flex items-center justify-between text-xl text-univ md:text-2xl lg:text-3xl">
                      <AiOutlineLink />
                    </div>
                  </div>
                </a>
                {/* Close Button */}
                <button
                  className="flex w-1/8 items-center justify-center rounded-sm border border-border bg-background p-4 text-2xl font-extrabold text-foreground shadow-xl transition-all duration-300 hover:scale-[1.05] hover:cursor-pointer hover:bg-highlight hover:text-univ md:text-3xl lg:text-4xl"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                >
                  <AiOutlineClose />
                </button>
              </div>

              {/* Second Div */}
              <div className="w-full my-2 mt-5 ">
                {/* Year and Tech Stack*/}
                <div className="flex justify-between rounded-sm border border-border bg-background p-4 shadow-xl">
                  <div>
                    <div className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-muted sm:text-xs">Year:</div>
                    <div className="font-mono text-sm font-medium tabular-nums sm:text-base">{selectedProject.date}</div>
                  </div>
                  <div>
                    <div className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-muted sm:text-xs">Role:</div>
                    <div className="font-sans text-sm font-medium sm:text-base">{selectedProject.role}</div>
                  </div>
                </div>
              </div>

              {/* Third Div */}
              <div className="w-full my-2 mt-5 ">
                {/* Project Description*/}
                <div className="rounded-sm border border-border bg-background p-4 shadow-xl transition-colors hover:bg-highlight">
                  <div>
                    <div className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-muted sm:text-xs">Overview:</div>
                    <div className="font-sans text-base leading-7 sm:text-lg">{selectedProject.description}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
