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

export default function Home() {
  const [isSideBarOpen, setSideBar] = useState(false);

  const { scrollYProgress } = useScroll();

  return (
    <main className="">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed left-0 top-0 z-999 h-1 w-full origin-left bg-univ"
        style={{ scaleX: scrollYProgress }}
      />

      <Nav setSideBar={setSideBar} />
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