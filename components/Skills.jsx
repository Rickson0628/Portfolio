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
import LineHorizontalIcon from "@/svg/horizontal-line";
import WordTypewriter from "@/animation/WordTypeWriter";
import FadeInOnScroll from "@/animation/IconFadeIn";
import IconFadeIn from "@/animation/IconFadeIn";

const frontSkills = {
  title: "Frontend",
  description: "Building responsive and intuitive user interfaces",
  skills: [
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
    { name: "HTML", icon: <AiFillHtml5 size={20} /> },
    { name: "CSS", icon: <FaCss3Alt size={20} /> },
    { name: "Jotai", icon: <BiGhost size={18} /> },
  ],
};

const backSkills = {
  title: "Backend",
  description: "Developing scalable server-side logic and APIs",
  skills: [
    { name: "Node.js", icon: <SiNodedotjs size={18} /> },
    { name: "Express", icon: <SiExpress size={15} /> },
    { name: "REST API", icon: <FaDatabase size={15} /> },
    { name: "Python", icon: <SiPython size={18} /> },
    { name: "C++", icon: <SiCplusplus size={18} /> },
    { name: "Jest", icon: <SiJest size={18} /> },
    { name: "Cypress", icon: <SiCypress size={18} /> },
  ],
};
const databaseSkills = {
  title: "Databases",
  description: "Working with relational and NoSQL databases",
  skills: [
    { name: "MongoDB", icon: <SiMongodb size={20} /> },
    { name: "MySQL", icon: <SiMysql size={24} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={20} /> },
    { name: "JSON", icon: <FaDatabase size={15} /> },
  ],
};

const authSkills = {
  title: "Authentication",
  description: "Implementing secure authentication and authorization",
  skills: [
    { name: "JWT", icon: <SiJsonwebtokens size={18} /> },
    { name: "OAuth", icon: <MdSecurity size={18} /> },
    { name: "bcrypt", icon: <FaLock size={15} /> },
    { name: "Cookies", icon: <FaCookieBite size={18} /> },
  ],
};
const toolSkills = {
  title: "Tools",
  description: "Develop, test, and deploy applications efficiently",
  skills: [
    { name: "Git", icon: <FaGitAlt size={20} /> },
    { name: "GitHub", icon: <FaGithub size={18} /> },
    { name: "Vercel", icon: <SiVercel size={18} /> },
    { name: "Figma", icon: <FaFigma size={20} /> },
    { name: "Jira", icon: <SiJira size={18} /> },
    { name: "Postman", icon: <SiPostman size={18} /> },
    { name: "Thunder", icon: <AiFillThunderbolt size={20} /> },
  ],
};

const allSkills = [
  frontSkills,
  backSkills,
  databaseSkills,
  authSkills,
  toolSkills,
];

const Skills = () => {
  return (
    // Top Line
    <div className="p-8 lg:p-15 xl:p-20 -mt-10 lg:-mt-20 lg:-mb-10">
      
      <div className="mb-6 mt-10 font-sans text-4xl font-semibold leading-none tracking-[-0.05em] sm:mx-5 sm:text-5xl lg:text-6xl">
        <WordTypewriter text="SKILLS"/>
      </div>
      <div className="sm:mx-5">
        <LineHorizontalIcon />
      </div>
      {allSkills.map((section, index) => (
        <div key={section.title}>
          <div className="transform rounded-lg transition hover:bg-highlight sm:p-5 lg:flex lg:items-center lg:gap-10">
            {/* Right Side */}
            <div className="lg:w-1/3 flex flex-col justify-center">
              {/* Title */}
              <div className="mb-5 font-sans text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-3xl lg:text-4xl">
                <WordTypewriter text={section.title}/>
              </div>
              {/* Description */}
              <div className="mb-5 font-sans text-sm leading-6 text-muted sm:text-base lg:text-lg lg:leading-7">
                <WordTypewriter text={section.description}/>
              </div>
            </div>

            {/* Left Side */}
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:w-2/3 md:flex md:flex-wrap gap-2 lg:gap-2 xl:grid xl:grid-cols-4">
              {section.skills.map((skill, index) => (
                // Icon
                <div
                  key={skill.name}
                  className="h-14.5 flex items-center justify-center gap-2 rounded-lg border-2 border-border bg-surface px-4 transition-all duration-200 hover:scale-105 hover:border-univ hover:bg-highlight hover:shadow-md sm:mt-5 md:mt-5"
                >
                  <IconFadeIn>
                  <div className="w-8 flex justify-center items-center shrink-0 animate-fade-in ">
                    {skill.icon}
                  </div>
                  </IconFadeIn>
                  {/* Icon Name */}
                  <span className="whitespace-nowrap font-mono text-xs font-medium tracking-[-0.02em] sm:text-sm">
                     <WordTypewriter text={skill.name}/>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {index !== allSkills.length - 1 ? (
            <div className="sm:ml-5">
              <LineHorizontalIcon />
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default Skills;
