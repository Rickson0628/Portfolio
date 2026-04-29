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

const frontSkills = {
  title: "Frontend",
  description: "Building responsive and intuitive user interfaces",
  skills: [
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
    { name: "HTML", icon: <AiFillHtml5 size={20} color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt size={20} color="#1572B6" /> },
    { name: "Jotai", icon: <BiGhost size={18} /> },
  ],
};

const backSkills = {
  title: "Backend",
  description: "Developing scalable server-side logic and APIs",
  skills: [
    { name: "Node.js", icon: <SiNodedotjs size={18} color="#339933" /> },
    { name: "Express", icon: <SiExpress size={15} /> },
    { name: "REST API", icon: <FaDatabase size={15} /> },
    { name: "Python", icon: <SiPython size={18} color="#3776AB" /> },
    { name: "C++", icon: <SiCplusplus size={18} color="#00599C" /> },
    { name: "Jest", icon: <SiJest size={18} color="#C21325" /> },
    { name: "Cypress", icon: <SiCypress size={18} color="#17202C" /> },
  ],
};
const databaseSkills = {
  title: "Databases",
  description: "Working with relational and NoSQL databases",
  skills: [
    { name: "MongoDB", icon: <SiMongodb size={20} color="#47A248" /> },
    { name: "MySQL", icon: <SiMysql size={24} color="#4479A1" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={20} color="#336791" /> },
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
    { name: "Cookies", icon: <FaCookieBite size={18} color="#D2691E" /> },
  ],
};
const toolSkills = {
  title: "Tools",
  description: "Develop, test, and deploy applications efficiently",
  skills: [
    { name: "Git", icon: <FaGitAlt size={20} color="#F05032" /> },
    { name: "GitHub", icon: <FaGithub size={18} /> },
    { name: "Vercel", icon: <SiVercel size={18} /> },
    { name: "Figma", icon: <FaFigma size={20} color="#F24E1E" /> },
    { name: "Jira", icon: <SiJira size={18} color="#0052CC" /> },
    { name: "Postman", icon: <SiPostman size={18} color="#FF6C37" /> },
    { name: "Thunder", icon: <AiFillThunderbolt size={20} color="#8A5CF6" /> },
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
    <div className="lg:p-20">
      <div className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-10 mb-6 ml-5">
        SKILLS
      </div>
      <div className="ml-5">
        <LineHorizontalIcon />
      </div>
      {allSkills.map((section, index) => (
        <div key={section.title}>
          <div className="lg:flex lg:items-center lg:gap-10  p-5  rounded-lg transition transform hover:bg-orange-50">
            {/* Right Side */}
            <div className="lg:w-1/3 flex flex-col justify-center">
              {/* Title */}
              <div className="font-extrabold mb-6 text-2xl sm:text-3xl lg:text-4xl">
                {section.title}
              </div>
              {/* Description */}
              <div className="mb-7 sm:text-md md:text-lg text-gray-500">
                {section.description}
              </div>
            </div>

            {/* Left Side */}
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:w-2/3 md:flex md:flex-wrap gap-2 lg:gap-7">
              {section.skills.map((skill, index) => (
                // Icon
                <div
                  key={skill.name}
                  className=" h-14.5 px-4 flex items-center justify-center gap-2 border-2 border-gray-100 hover:border-univ rounded-lg 
              hover:scale-105 hover:shadow-md transition-all duration-200 sm:mt-5 md:mt-5"
                >
                  <div className="w-8 flex justify-center items-center shrink-0">
                    {skill.icon}
                  </div>

                  {/* Icon Name */}
                  <span className="text-sm font-medium whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {index !== allSkills.length - 1 ? (
            <div className=" mt-5 ml-5">
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
