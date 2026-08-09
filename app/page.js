"use client";

import Nav from "@/components/Nav";
import Landing from "../components/Landing";
import { useState } from "react";
import SideBar from "@/components/SideBar";
import SideContent from "@/components/SideContent";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Project from "./../components/Project";
import Milestone from "@/components/Milestones";
import { motion, useScroll } from "framer-motion";
import { BiSun, BiMoon } from "react-icons/bi";
import About from "@/components/About";
import Loading from "@/components/Loading";
import { usePageLoader } from "@/hooks/usePageLoader";

export default function Home() {
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [isSideBarOpen, setSideBar] = useState(false);

  const { scrollYProgress } = useScroll();

  const { canFinishLoading } = usePageLoader(splineLoaded);

  const startAnimations = !showLoader;

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {showLoader && (
        <Loading
          canFinishLoading={canFinishLoading}
          onFinished={() => setShowLoader(false)}
        />
      )}

      <div className="fixed left-0 top-0 z-[999] h-1 w-full">
        <motion.div
          className="absolute inset-0 origin-left bg-univ opacity-90 blur-[5px]"
          style={{ scaleX: scrollYProgress }}
        />
        <motion.div
          className="absolute inset-0 origin-left bg-univ"
          style={{ scaleX: scrollYProgress }}
        />
      </div>

      <Nav
        setSideBar={setSideBar}
        startAnimations={startAnimations}
      />

      <button
        className="fixed bottom-5 right-5 z-100 flex cursor-pointer items-center justify-center rounded-3xl border border-border/80 bg-surface-raised p-3 text-xl text-muted shadow-lg transition-transform hover:scale-108 hover:bg-black/80 hover:text-background dark:border-white/10 dark:text-white dark:hover:bg-white/80"
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

      <Landing
        onSplineLoad={() => setSplineLoaded(true)}
        startAnimations={startAnimations}
      />

      <About />
      <Milestone />
      <Project />

      <SideBar isOpen={isSideBarOpen} setSideBar={setSideBar}>
        <SideContent setSideBar={setSideBar} />
      </SideBar>

      <Skills />
      <Footer />
    </main>
  );
}