import { CgFileDocument } from "react-icons/cg";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import React from "react";
import Image from "next/image";

const routes = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Milestones", href: "#milestones" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
];

const icons = [
  {
    name: <AiFillGithub size={37} />,
    href: "https://github.com/Rickson0628",
  },
  {
    name: <AiFillLinkedin size={37} />,
    href: "https://www.linkedin.com/in/rickson-bozar-628729320/",
  },
  {
    name: <AiOutlineInstagram size={37} />,
    href: "https://www.instagram.com/ricksonbozar/",
  },
];

const Nav = ({ setSideBar }) => {
  return (
    <>
      {/* Logo + social icons */}
      <div className="fixed left-5 -top-7 z-[70] flex h-screen w-20 flex-col items-center justify-between py-8 pointer-events-none lg:-top-5">

        {/* Top logo */}
        <a href="#home" className="pointer-events-auto dark:hidden" aria-label="Go to home">
          <Image
            src="/rx-black-logo.webp"
            width={80}
            height={80}
            alt="Black-Logo"
            fetchPriority="high"
          />
        </a>

        <a href="#home" className="pointer-events-auto hidden dark:block" aria-label="Go to home">
          <Image
            src="/rx-whiteLogo.webp"
            width={80}
            height={80}
            alt="White-Logo"
            fetchPriority="high"
          />
        </a>

        {/* Bottom social icons */}
        <div className="hidden translate-y-5 flex-col items-center gap-4 text-muted lg:mr-11 lg:flex xl:mr-5">
          {icons.map((icon) => (
            <a
              key={icon.href}
              href={icon.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Go to ${icon.href}`}
              className="pointer-events-auto transform transition duration-300 hover:scale-108 hover:text-univ"
            >
              {icon.name}
            </a>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <nav className="fixed z-50 w-full bg-background/80 p-10 text-foreground shadow-sm backdrop-blur-xs lg:p-8 motion-safe:animate-[fade-in_700ms_ease-out_0.3s_both]">

        {/* Hamburger button */}
        <button
          className="fixed right-10 top-7 z-50 cursor-pointer lg:hidden lg:top-10"
          onClick={() => setSideBar((prev) => !prev)}
          aria-label="Open menu"
        >
          <RxHamburgerMenu size={25} />
        </button>

        {/* All routes */}
        <div className="hidden w-full flex-row items-center justify-center gap-15 lg:flex">
          {routes.map((route) => (
            <div key={route.href}>
              <a
                href={route.href}
                className="cursor-pointer font-mono text-lg font-medium tracking-[-0.01em] hover:text-univ"
              >
                {route.name}
              </a>
            </div>
          ))}
        </div>

        {/* Resume */}
        <div className="fixed right-10 top-6 hidden lg:block">
          <a
            href="/Rickson-Bozar-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-sm font-semibold tracking-[0.08em] transition-all duration-300 hover:-translate-y-0.5 hover:border-univ hover:text-univ focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-univ"
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
    </>
  );
};

export default Nav;