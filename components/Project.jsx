import LineHorizontalIcon from "@/svg/horizontal-line";
import Image from "next/image";
import React from "react";

const projects = [
  {
    title: "Serv",
    date: "January 2026 - Present",
    description:
      "Online service platform that helps customers find qualified skilled workers for repairs, maintenance, and other service needs.",
    image: "/serv.png",
  },
];

const Project = () => {
  return (
    <div className="sm:mx-5 lg:p-20">
     <div className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-10 mb-5">PROJECTS</div>
      <LineHorizontalIcon />
      {projects.map((project) => (
        <div key={project.title} className='border border-gray-300 p-3 rounded-2xl'>  
          <Image
            src={project.image}
            width={300}
            height={300}
            alt="Serv-image"
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="flex justify-between"> 
            <div className="font-bold text-2xl mt-2">{project.title}</div>
            <div className="text-lg text-gray-600 mt-2">{project.date}</div>
          </div>
          <div>{project.description}</div>
        
        </div>
      ))}
    </div>
  );
};

export default Project;
