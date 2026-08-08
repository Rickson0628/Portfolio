import { AiOutlineDownload } from "react-icons/ai";
import { BiArrowToRight } from "react-icons/bi";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { CgPhone } from "react-icons/cg";

const routes = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Milestones", href: "#milestones" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
];

const icons = [
  { name: <AiFillGithub size={25} />, href: "https://github.com/Rickson0628", label: "GitHub" },
  { name: <AiFillLinkedin size={25} />, href: "https://www.linkedin.com/in/rickson-bozar-628729320/", label: "LinkedIn" },
  { name: <AiOutlineInstagram size={25} />, href: "https://www.instagram.com/ricksonbozar/", label: "Instagram" },
];

const SideContent = ({ setSideBar }) => {
  const handleRouteClick = (event, href) => {
    event.preventDefault();

    setSideBar(false);

    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 1000);
  };

  return (
    <section className="flex min-h-full w-full flex-col px-5 pb-10 pt-15 sm:px-8">
      {/* Let's Connect */}
      <div>
        <div className="flex items-center gap-3 pb-4">
          <span className="size-2 rounded-full bg-univ" />
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
            Let's Connect
          </span>
        </div>

        <div className="h-px w-full bg-border" />

        <div className="mt-5 flex items-center gap-4 text-muted">
          {icons.map((icon) => (
            <a key={icon.href} href={icon.href} target="_blank" rel="noreferrer" aria-label={icon.label} className="transition-colors duration-300 hover:text-univ">
              {icon.name}
            </a>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12">
        <div className="flex items-center gap-3 pb-4">
          <span className="size-2 rounded-full bg-univ" />
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
            Navigation
          </span>
        </div>

        <div className="h-px w-full bg-border" />

        <div>
          {routes.map((route, index) => (
            <a key={route.href} href={route.href} onClick={(event) => handleRouteClick(event, route.href)} className="group flex items-center border-b border-border py-5 transition-colors duration-300 hover:text-univ sm:py-6">
              <span className="w-14 shrink-0 font-mono text-sm font-medium text-univ tabular-nums">
                {String(index + 1).padStart(2, "0")}.
              </span>

              <span className="font-sans text-lg font-medium tracking-[-0.04em]">
                {route.name}
              </span>

              <BiArrowToRight className="ml-auto text-xl text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-univ" />
            </a>
          ))}
        </div>
      </div>

      {/* Get In Touch */}
      <div className="mt-12">
        <div className="flex items-center gap-3 pb-4">
          <span className="size-2 rounded-full bg-univ" />
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
            Get In Touch
          </span>
        </div>

        <div className="h-px w-full bg-border" />

        <div className="mt-6 flex flex-col gap-4 text-muted">
          <a href="mailto:ricksonbozar2@gmail.com" className="flex items-center gap-4 font-sans text-sm transition-colors duration-300 hover:text-univ sm:text-base">
            <MdEmail className="shrink-0 text-lg text-univ" />
            <span>ricksonbozar2@gmail.com</span>
          </a>

          <a href="tel:+14374245853" className="flex items-center gap-4 font-mono text-sm transition-colors duration-300 hover:text-univ">
            <CgPhone className="shrink-0 text-lg text-univ" />
            <span className="tabular-nums text-sm">(437)-424-5853</span>
          </a>
        </div>

        <a href="/Rickson-Bozar-Resume.pdf" target="_blank" rel="noreferrer" className="group mt-8 flex w-fit min-w-45 items-center justify-center gap-2 border border-univ px-4 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-univ transition-colors duration-300 hover:bg-univ hover:text-background">
          <span>View Resume</span>
          <AiOutlineDownload className="text-lg transition-transform duration-300 group-hover:translate-y-0.5" />
        </a>
      </div>
    </section>
  );
};

export default SideContent;