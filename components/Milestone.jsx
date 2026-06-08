import React from "react";

const milestones = [
  {
    title: "Service Advisor",
    company: "Canadian Tire",
    description:
      "Delivered customer-focused service by communicating effectively, resolving issues under pressure, coordinating with mechanics, parts, and service advisors, multitasking in a fast-paced environment, and training new colleagues on internal systems and company policies.",
    date: "Aug 2023 - Present",
  },
  {
    title: "Diploma in Computer Programming",
    company: "Seneca Polytechnic",
    description:
      "Student at Seneca Polytechnic with a 3.7 GPA. Coursework spans full-stack development, object-oriented programming, software testing, database management, operating systems, software analysis and design, and data structures and algorithms. Experienced in building dynamic MERN stack applications, writing SQL/Oracle queries, debugging and documenting programs, automating tasks with scripts, and applying SDLC principles to deliver efficient software solutions.Delivered customer-focused service by communicating effectively, resolving issues under pressure, coordinating with mechanics, parts, and service advisors, multitasking in a fast-paced environment, and training new colleagues on internal systems and company policies.",
    date: "January 2024 - December 2025",
  },

  {
    title: "Full-Stack Developer",
    company: "DBTK",
    description:
      "Assisted in developing responsive and high-performing web pages using Next.js, including server-rendered and statically generated pages. Supported backend functionality with Node.js, REST API integration, and MongoDB database management. Collaborated with the development team using Git/GitHub, helped debug frontend and backend issues, and contributed to delivering stable and user-focused web features.",
    date: "May 2025 - August 2025",
  },
];

const Milestone = () => {
  return (
    <div className="lg:p-20">
      <div className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-10 mb-5">
        MILESTONES
      </div>
      {milestones.map((milestone) => (
        <div key={milestone.title} className="mb-5">
          <div className="flex">
            <div className="w-1/4">{milestone.date}</div>
            <divz className="w-3/4">
              <div>{milestone.title}</div>
              <div>{milestone.company}</div>
              <div>{milestone.description}</div>
            </divz>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Milestone;
