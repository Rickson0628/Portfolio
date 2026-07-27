"use client";

import Nav from "@/components/Nav";
import Landing from "../components/Landing";
import { useState } from "react";
import SideBar from "@/components/SideBar";
import SideContent from "@/components/SideContent";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Project from "./../components/Project";
import Milestone from "@/components/Milestone";
import { motion, useScroll } from "framer-motion";
import { BiSun } from "react-icons/bi";
import { BiMoon } from "react-icons/bi";

export default function Home() {
  const [isSideBarOpen, setSideBar] = useState(false);
  const { scrollYProgress } = useScroll();
  const toggleDarkMode = ()=>{
    window.document.documentElement.classList.toggle("dark")
  }

  return (
    <main className="">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed left-0 top-0 z-999 h-1 w-full origin-left bg-univ"
        style={{ scaleX: scrollYProgress }}
      />

      <Nav setSideBar={setSideBar} />
      {/* Dark Mode Button */}
      <button className="fixed flex justify-center items-center bottom-5 right-5 p-3 border text-xl border-gray-300 rounded-3xl shadow-lg z-100 cursor-pointer transition hover:scale-110 text-gray-500 hover:text-white  hover:bg-black dark:text-black dark:bg-white" 
      onClick={toggleDarkMode}  
      aria-label="Toggle Dark Mode">
        <span className="dark:hidden">
          <BiMoon />
        </span>
        <span className="hidden dark:block">
          <BiSun />
        </span>
      </button>
      <Landing />
      <Milestone />
      <Project />

      <SideBar isOpen={isSideBarOpen} setSideBar={setSideBar}>
        <SideContent />
      </SideBar>

      <Skills />

      <Footer />
    </main>
  );
}
