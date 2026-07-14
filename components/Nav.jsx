import { AiOutlineInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import React from "react";
import Image from "next/image";

const routes = ["Home", "About", "Milestones", "Projects", "Skills"]
const icons = [
  {name:  <AiFillGithub size={40} color="#014D4E" />, href: "a"},
  {name: <AiFillLinkedin size={40} color= "#014D4E" />, href: "b"},
  {name:  <AiOutlineInstagram size={40} color="#014D4E"/>, href: "c"},
]


const Nav = ({ setSideBar }) => {
  return (
    <nav className="fixed p-12 w-full z-50 shadow-sm backdrop-blur-xs">
      
      {/* Left fixed vertical nav */}
      <div className="fixed left-1 -top-2 z-60 flex flex-col h-screen w-20  items-center justify-between py-8">
        {/* Top logo */}
        <a href="#">
          <Image src="/rx-logo.png" width={60} height={60} alt="Logo" />
          </a>
        
        {/* Bottom social icons */}
        <div className="hidden lg:flex flex-col items-center gap-5 pb-5">
            {icons.map((icon, index)=>(
              <a key={icon.href} href={icon.href} className="transition transform hover:scale-115  duration-300">
                {icon.name}
              </a>
            ))}
        </div>
      </div>

      {/* Hamburger button */}
      <button
        className="fixed right-10 top-10 z-50 cursor-pointer lg:hidden"
        onClick={() => setSideBar((prev) => !prev)}
        aria-label="Open menu"
      >
        <RxHamburgerMenu size={25} color="#000000" />
      </button>
      <div className="hidden lg:flex fixed right-13 top-10 z-50 cursor-pointer w-max gap-15  justify-between items-center">     
        {routes.map((route)=>(
          <div key={route}>
            <button className="text-lg hover:text-univ cursor-pointer">{route}</button>
          </div>
        ))}
      </div>

    </nav>
  );
};

export default Nav;