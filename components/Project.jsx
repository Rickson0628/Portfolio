"use client";
import { AiOutlineLink } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BiLeftArrowCircle } from "react-icons/bi";
import { BiRightArrowCircle } from "react-icons/bi";
import { AiOutlineRightCircle } from "react-icons/ai";
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
    <section className="p-8 lg:p-15 xl:p-20 sm:mx-5 lg:-mb-5">
      <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-10 mb-5">
        PROJECTS
      </h2>

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
            className="relative group border-2 border-gray-100 p-4 rounded-2xl shadow-md hover:bg-orange-50 hover:border-univ transition-all duration-300 hover:scale-[1.02] hover:cursor-pointer mt-8"
          >
            {/* Icon */}
            <div className="absolute right-8 top-8 z-10">
              <BiInfoCircle
                size={22}
                color="white"
                className="transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              />

              <AiOutlineRightCircle
                size={22}
                className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 text-univ"
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
              <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
                {project.title}
              </h3>
              {/* Project Date */}
              <p className="text-sm text-gray-600 sm:text-base md:text-lg lg:text-base">
                {project.date}
              </p>
            </div>

            {/* Marquee Description */}
            <div className="overflow-hidden whitespace-nowrap text-sm text-gray-600 mt-2">
              <p className="inline-block animate-marquee sm:text-base md:text-lg lg:text-base">
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
          className="fixed z-100 inset-0 overflow-y-auto  bg-black/50 p-5"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="mx-auto my-8 w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Upper Modal */}
            <div className="relative p-5 bg-white w-full rounded-xl shadow-xl mb-5">
              {/* Image Container */}
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mt-2">
                {/* Arrows */}
                <button
                  className="absolute z-50 top-1/2 -translate-y-1/2 left-1 text-white text-2xl hover:text-univ"
                  onClick={prevImage}
                >
                  <BiLeftArrowCircle />
                </button>
                <button
                  className="absolute z-50 top-1/2  -translate-y-1/2 right-1 text-white text-2xl hover:text-univ"
                  onClick={nextImage}
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
                <div className="absolute bottom-3 right-3 z-50 rounded-full bg-black/50 px-3 py-1  text-xs text-white">
                  {imageCount + 1} / {selectedProject.image.length}
                </div>
              </div>
            </div>
            {/* Lower Modal */}
            <div className="relative p-5 bg-white w-full rounded-xl shadow-xl">
              {/* First Div */}
              <div className="flex w-full my-2 gap-2 ">
                {/* Title and Link */}
                <a className="w-7/8 bg-gray-200 p-4 rounded-sm shadow-xl  hover:bg-orange-100 transition-all duration-300 hover:scale-[1.02] hover:cursor-pointer" href={selectedProject.link}
                target="_bka">
                  <div className="flex justify-between">
                    <div className="font-bold text-xl md:text-2xl lg:text-3xl">
                      {selectedProject.title}
                    </div>
                    <div className="flex justify-between items-center text-blue-700 text-xl md:text-2xl lg:text-3xl ">
                      <AiOutlineLink />
                    </div>
                  </div>
                </a>
                {/* Close Button */}
                <button
                  className="w-1/8 bg-gray-200 p-4 rounded-sm flex items-center justify-center text-red-500 text-2xl font-extrabold shadow-xl hover:bg-orange-100 transition-all duration-300 hover:scale-[1.10] hover:cursor-pointer md:text-3xl lg:text-4xl"
                  onClick={() => setSelectedProject(null)}
                >
                  <AiOutlineClose />
                </button>
              </div>

              {/* Second Div */}
              <div className="w-full my-2 mt-5 ">
                {/* Year and Tech Stack*/}
                <div className="bg-gray-200 p-4 rounded-sm shadow-xl flex justify-between">
                  <div>
                    <div className="text-sm font-light md:text-base ">Year:</div>
                    <div className="md:text-lg ">{selectedProject.date}</div>
                  </div>
                  <div>
                    <div className="text-sm font-light md:text-base ">Role:</div>
                    <div className="md:text-lg ">{selectedProject.role}</div>
                  </div>
                </div>
              </div>

              {/* Third Div */}
              <div className="w-full my-2 mt-5 ">
                {/* Project Description*/}
                <div className=" bg-gray-200 p-4 rounded-sm shadow-xl hover:gradient">
                  <div>
                    <div className="mb-2 text-sm font-light md:text-base">Overview:</div>
                    <div className="md:text-lg">{selectedProject.description}</div>
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
