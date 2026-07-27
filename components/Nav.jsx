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
    <nav className="fixed p-10 lg:p-8  w-full z-50 shadow-sm backdrop-blur-xs ">
      {/* Left fixed vertical nav */}
      <div className="fixed left-5 -top-7 lg:-top-5 z-60 flex flex-col h-screen w-20  items-center justify-between py-8">
        {/* Top logo */}
        <a href="#" className="dark:hidden">
          <Image src="/rx-black-logo.png" width={80} height={80} alt="Logo" />
        </a>
        <a href="#" className="hidden dark:block">
          <Image src="/rx-white-logo.png" width={80} height={80} alt="Logo" />
        </a>

        {/* Bottom social icons */}
        <div className="hidden translate-y-5 lg:flex flex-col items-center gap-4 lg:mr-11 xl:mr-5 text-gray-600 dark:text-white">
          {icons.map((icon, index) => (
            <a
              key={icon.href}
              href={icon.href}
              className="transition transform hover:scale-115  duration-300"
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
        <RxHamburgerMenu size={25} color="#000000" />
      </button>
      <div className="hidden lg:flex flex-row z-50 cursor-pointer gap-15 items-center justify-center w-full">
        {/* All routes */}
        {routes.map((route) => (
          <div key={route}>
            <button className="font-sans text-lg font-medium tracking-[-0.01em] hover:text-univ cursor-pointer">
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
          className="group flex items-center gap-2 rounded-md border border-gray-300 px-5 py-2.5 font-mono text-sm font-semibold tracking-[0.08em]
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
