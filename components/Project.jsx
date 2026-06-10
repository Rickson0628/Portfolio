"use client"
import { AiOutlineCloseCircle } from "react-icons/ai"; 
import { AiOutlineRightCircle } from "react-icons/ai";
import { BiInfoCircle } from "react-icons/bi";
import LineHorizontalIcon from "@/svg/horizontal-line";
import Image from "next/image";
import React, { useState } from "react";

const projects = [
  {
    title: "Serv",
    date: "January 2026 - Present",
    description:
      "Online service platform that helps customers find qualified skilled workers for repairs, maintenance, and other service needs.",
    image: "/serv-image.png",
    hoverImage: "/hoverServ-image.png",
  },
   {
    title: "Nike Store",
    date: "March 2026",
    description:
  "A practice e-commerce website built with Tailwind CSS, featuring a clean store layout, product sections, and a responsive design for a modern shopping experience.",
    image: "/nike.png",
    hoverImage: "/hoverNike.png",
  },
];

const Project = () => {
  const [selectedProject, setSelectedProject]= useState(null);

  return (
    <section className="p-8 sm:mx-5 lg:p-20 lg:-mb-10">
      <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-10 mb-5">
        PROJECTS
      </h2>
    
        <LineHorizontalIcon />
    
       {/* Card  */}
      <div className="gap-8 lg:grid lg:grid-cols-2 lg:mt-3 ">
        {projects.map((project) => (
          <article
            key={project.title}
            onClick={()=> setSelectedProject(project)}
            className="relative group border-2 border-gray-100 p-4 rounded-2xl shadow-md hover:bg-orange-50 hover:border-orange-400 transition-all duration-300 hover:scale-[1.02] hover:cursor-pointer mt-8"
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
                className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 text-blue-500"
              />
            </div>

            {/* Image Container */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mt-2">
              <Image
                src={project.image}
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
              <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">{project.title}</h3>
               {/* Project Date */}
              <p className="text-sm text-gray-600 sm:text-base md:text-lg lg:text-base">{project.date}</p>
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
        <div className="fixed z-100 inset-0 flex justify-center items-center bg-black/50 p-5">
          <div className="relative p-5 bg-white w-full rounded-xl shadow-xl">
              {/* Close Button */}
              <button className="absolute right-5 top-5 z-10 text-white hover:text-red-500 transition-colors text-2xl"
              onClick={()=> setSelectedProject(null) }>
              <AiOutlineCloseCircle/>
              </button>
             
             {/* Image Container */} 
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mt-2">
              <Image
                src={selectedProject.image}
                alt={`${selectedProject.title} preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
              />

              <Image
                src={selectedProject.hoverImage}
                alt={`${selectedProject.title} hover preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              />
            </div>

            {/* selectedProject Info */}
            <div className="flex justify-between sm:items-center mt-4 gap-1">
              {/* Project Title*/}
              <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">{selectedProject.title}</h3>
              {/* Project Date */}
              <p className="text-sm text-gray-600 sm:text-base md:text-lg lg:text-base">{selectedProject.date}</p>
            </div>
            {/* Project Description */}
             <div className="overflow-hidden text-sm text-gray-600 mt-2">
             
                 {selectedProject.description} 
              </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;