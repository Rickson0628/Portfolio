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
      { name: "React", icon: <DiReact size={24} color="#61DBFB" /> },
      {
        name: "JavaScript",
        icon: <IoLogoJavascript size={20} color="#F7DF1E" />,
      },
      { name: "Tailwind", icon: <SiTailwindcss size={20} color="#38BDF8" /> },
      {
        name: "Bootstrap",
        icon: <BsFillBootstrapFill size={20} color="#7952B3" />,
      },
      { name: "Node.js", icon: <SiNodedotjs size={18} color="#339933" /> },
          { name: "Express", icon: <SiExpress size={15} /> },
          { name: "REST API", icon: <FaDatabase size={15} /> },
          { name: "Python", icon: <SiPython size={18} color="#3776AB" /> },
          { name: "C++", icon: <SiCplusplus size={18} color="#00599C" /> },
          { name: "Jest", icon: <SiJest size={18} color="#C21325" /> },
          { name: "Cypress", icon: <SiCypress size={18} color="#17202C" /> },

      { name: "HTML", icon: <AiFillHtml5 size={20} color="#E34F26" /> },
      { name: "CSS", icon: <FaCss3Alt size={20} color="#1572B6" /> },
      { name: "Jotai", icon: <BiGhost size={18} /> },
       { name: "MongoDB", icon: <SiMongodb size={20} color="#47A248" /> },
          { name: "MySQL", icon: <SiMysql size={24} color="#4479A1" /> },
          { name: "PostgreSQL", icon: <SiPostgresql size={20} color="#336791" /> },
          { name: "JSON", icon: <FaDatabase size={15} /> },
            { name: "JWT", icon: <SiJsonwebtokens size={18} /> },
              { name: "OAuth", icon: <MdSecurity size={18} /> },
              { name: "bcrypt", icon: <FaLock size={15} /> },
              { name: "Cookies", icon: <FaCookieBite size={18} color="#D2691E" /> },
               { name: "Git", icon: <FaGitAlt size={20} color="#F05032" /> },
                  { name: "GitHub", icon: <FaGithub size={18} /> },
                  { name: "Vercel", icon: <SiVercel size={18} /> },
                  { name: "Figma", icon: <FaFigma size={20} color="#F24E1E" /> },
                  { name: "Jira", icon: <SiJira size={18} color="#0052CC" /> },
                  { name: "Postman", icon: <SiPostman size={18} color="#FF6C37" /> },
                  { name: "Thunder", icon: <AiFillThunderbolt size={20} color="#8A5CF6" /> },
]

const TechStack = () => {
  return (
    <section className='p-8 lg:p-20'>
       <div className="flex items-center justify-center font-extrabold text-univ text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-10 mb-6 sm:mx-5">
        SKILLS
      </div>
      <div className="sm:mx-5 flex justify-center mb-10">
        <LineHorizontalIcon />
      </div>
      <div className='flex flex-wrap gap-8 max-w-full justify-center items-center '>
        {Skills.map((skill)=>(
          <div key={skill.name} className='flex flex-col w-29 gap-2 justify-center items-center border border-gray-300 p-5 rounded-2xl hover:bg-orange-50 hover:border-univ hover:scale-105 hover:shadow-md transition-all duration-200'>
            <div>{skill.icon}</div>
            <div>{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;