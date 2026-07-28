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
    <main className="min-h-screen bg-background text-foreground">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed left-0 top-0 z-999 h-1 w-full origin-left bg-univ"
        style={{ scaleX: scrollYProgress }}
      />

      <Nav setSideBar={setSideBar} />
      {/* Dark Mode Button */}
      <button
        className="fixed bottom-5 right-5 z-100 flex cursor-pointer items-center justify-center rounded-3xl border border-border bg-surface p-3 text-xl text-muted shadow-lg transition hover:scale-110 hover:bg-univ hover:text-background motion-safe:animate-[fade-in_700ms_ease-out_0.3s_both]"
        onClick={toggleDarkMode}
        aria-label="Toggle Dark Mode"
      >
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
