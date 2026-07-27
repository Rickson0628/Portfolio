import React from 'react';
import { AiFillThunderbolt, AiFillHtml5 } from "react-icons/ai";
import { BiGhost } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { BsFillBootstrapFill } from "react-icons/bs";
import {
  FaCss3Alt,
  FaDatabase,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaLock,
  FaCookieBite,
} from "react-icons/fa";
import {  
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiJest,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiCplusplus,
  SiCypress,
  SiVercel,
  SiJira,
  SiPostman,
  SiJsonwebtokens,
} from "react-icons/si";
import { DiReact } from "react-icons/di";
import { MdSecurity } from "react-icons/md";
import LineHorizontalIcon from '@/svg/horizontal-line';

const Skills = [
    { name: "Next.js", icon: <SiNextdotjs size={20} /> },
      { name: "React", icon: <DiReact size={24} /> },
      {
        name: "JavaScript",
        icon: <IoLogoJavascript size={20} />,
      },
      { name: "Tailwind", icon: <SiTailwindcss size={20} /> },
      {
        name: "Bootstrap",
        icon: <BsFillBootstrapFill size={20} />,
      },
      { name: "Node.js", icon: <SiNodedotjs size={18} /> },
          { name: "Express", icon: <SiExpress size={15} /> },
          { name: "REST API", icon: <FaDatabase size={15} /> },
          { name: "Python", icon: <SiPython size={18} /> },
          { name: "C++", icon: <SiCplusplus size={18} /> },
          { name: "Jest", icon: <SiJest size={18} /> },
          { name: "Cypress", icon: <SiCypress size={18} /> },

      { name: "HTML", icon: <AiFillHtml5 size={20} /> },
      { name: "CSS", icon: <FaCss3Alt size={20} /> },
      { name: "Jotai", icon: <BiGhost size={18} /> },
       { name: "MongoDB", icon: <SiMongodb size={20} /> },
          { name: "MySQL", icon: <SiMysql size={24} /> },
          { name: "PostgreSQL", icon: <SiPostgresql size={20} /> },
          { name: "JSON", icon: <FaDatabase size={15} /> },
            { name: "JWT", icon: <SiJsonwebtokens size={18} /> },
              { name: "OAuth", icon: <MdSecurity size={18} /> },
              { name: "bcrypt", icon: <FaLock size={15} /> },
              { name: "Cookies", icon: <FaCookieBite size={18} /> },
               { name: "Git", icon: <FaGitAlt size={20} /> },
                  { name: "GitHub", icon: <FaGithub size={18} /> },
                  { name: "Vercel", icon: <SiVercel size={18} /> },
                  { name: "Figma", icon: <FaFigma size={20} /> },
                  { name: "Jira", icon: <SiJira size={18} /> },
                  { name: "Postman", icon: <SiPostman size={18} /> },
                  { name: "Thunder", icon: <AiFillThunderbolt size={20} /> },
]

const TechStack = () => {
  return (
    <section className='p-8 lg:p-20'>
       <div className="mb-6 mt-10 flex items-center justify-center font-sans text-4xl font-semibold leading-none tracking-[-0.05em] text-univ sm:mx-5 sm:text-5xl lg:text-6xl">
        SKILLS
      </div>
      <div className="sm:mx-5 flex justify-center mb-10">
        <LineHorizontalIcon />
      </div>
      <div className='flex flex-wrap gap-8 max-w-full justify-center items-center '>
        {Skills.map((skill)=>(
          <div key={skill.name} className='flex w-29 flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:scale-105 hover:border-univ hover:bg-highlight hover:shadow-md'>
            <div>{skill.icon}</div>
            <div className="font-mono text-xs font-medium tracking-[-0.02em] sm:text-sm">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
