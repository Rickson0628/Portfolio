"use client"
import Nav from "@/components/Nav";
import Landing from "../components/Landing";
import { useState } from "react";
import SideBar from "@/components/SideBar";
import SideContent from "@/components/SideContent";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  const [isSideBarOpen, setSideBar] = useState(false)

  return (
    <div className="p-8">
      <Nav setSideBar={setSideBar} />
      <Landing />
      <SideBar isOpen={isSideBarOpen} setSideBar={setSideBar}>
        <SideContent />
      </SideBar>
      <Skills />
      <Footer />
    </div>
  );
}
