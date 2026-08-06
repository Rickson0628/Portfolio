import { CgFileDocument } from "react-icons/cg";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import React from "react";
import Image from "next/image";

const routes = ["Home", "About", "Milestones", "Projects", "Skills"];
const icons = [
  { name: <AiFillGithub size={37} />, href: "a" },
  { name: <AiFillLinkedin size={37} />, href: "b" },
  { name: <AiOutlineInstagram size={37} />, href: "c" },
];

const Nav = ({ setSideBar }) => {
  return (
    <nav className="fixed z-50 w-full bg-background/80 p-10 text-foreground shadow-sm backdrop-blur-xs lg:p-8 motion-safe:animate-[fade-in_700ms_ease-out_0.3s_both]">
      {/* Left fixed vertical nav */}
      <div className="fixed pointer-events-none lg:pointer-events-auto left-5 -top-7 lg:-top-5 z-60 flex flex-col h-screen w-20  items-center justify-between py-8">
     
        {/* Top logo */}
        <a href="#" className="pointer-events-auto dark:hidden" aria-label="Go to home">
          <Image src="/rx-black-logo.webp" width={80} height={80} alt="Black-Logo" fetchPriority="high" />
        </a>
        <a href="#" className="pointer-events-auto hidden dark:block" aria-label="Go to home">
          <Image src="/rx-whiteLogo.webp" width={80} height={80} alt="White-Logo" fetchPriority="high" />
        </a>
 
        {/* Bottom social icons */}
        <div className="hidden translate-y-5 flex-col items-center gap-4 text-muted lg:mr-11 lg:flex xl:mr-5">
          {icons.map((icon, index) => (
            <a
              key={icon.href}
              href={icon.href}
              className="transform transition duration-300 hover:scale-108 hover:text-univ"
            >
              {icon.name}
            </a>
          ))}
        </div>
      </div>

      {/* Hamburger button */}
      <button
        className="fixed right-10 top-8 lg:top-10 z-50 cursor-pointer lg:hidden"
        onClick={() => setSideBar((prev) => !prev)}
        aria-label="Open menu"
      >
        <RxHamburgerMenu size={25} />
      </button>
      <div className="hidden lg:flex flex-row z-50 cursor-pointer gap-15 items-center justify-center w-full">
        {/* All routes */}
        {routes.map((route) => (
          <div key={route}>
            <button className="font-mono text-lg font-medium tracking-[-0.01em] hover:text-univ cursor-pointer  ">
              {route}
            </button>
          </div>
        ))}
      </div>
      {/* Resume */}
      <div className="fixed right-10 top-6 hidden lg:block">
        <a
          href="/Rickson-Bozar-Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-sm font-semibold tracking-[0.08em]
      transition-all duration-300 hover:-translate-y-0.5 hover:border-univ hover:text-univ focus-visible:outline-2 focus-visible:outline-offset-4
      focus-visible:outline-univ
    "
        >
          <span>RESUME</span>

          <CgFileDocument
            aria-hidden="true"
            size={20}
            className="transition-transform duration-300 group-hover:rotate-6"
          />
        </a>
      </div>
  
    </nav>
  );
};

export default Nav;
