"use client";

import Nav from "@/components/Nav";
import Landing from "../components/Landing";
import { useEffect, useState } from "react";
import SideBar from "@/components/SideBar";
import SideContent from "@/components/SideContent";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Project from "./../components/Project";
import Milestone from "@/components/Experience";
import { motion, useScroll } from "framer-motion";
import { BiSun } from "react-icons/bi";
import { BiMoon } from "react-icons/bi";
import About from "@/components/About";

export default function Home() {
  const [isSideBarOpen, setSideBar] = useState(false);
  const { scrollYProgress } = useScroll();
  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
  };
  // Start with user preferred mode
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Scroll progress bar */}
      <div className="fixed left-0 top-0 z-[999] h-1 w-full">
        {/* Orange glow */}
        <motion.div
          className="absolute inset-0 origin-left bg-univ opacity-90 blur-[5px]"
          style={{ scaleX: scrollYProgress }}
        />

        {/* Sharp orange line */}
        <motion.div
          className="absolute inset-0 origin-left bg-univ"
          style={{ scaleX: scrollYProgress }}
        />
      </div>

      <Nav setSideBar={setSideBar} />
      {/* Dark and Light Mode Buttons */}
      <button
        className="fixed bottom-5 right-5 z-100 flex cursor-pointer items-center justify-center rounded-3xl border border-border/80  dark:border-white/10
        bg-surface-raised p-3 text-xl text-muted shadow-lg transition-transform  hover:scale-108  hover:bg-black/80 dark:hover:bg-white/80 dark:text-white
        hover:text-background motion-
        safe:animate-[fade-in_700ms_ease-out_0.3s_both] "
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
      <About />
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
