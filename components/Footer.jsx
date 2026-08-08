import { CgFileDocument, CgPhone } from "react-icons/cg";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import React from "react";
import LineHorizontalIcon from "@/svg/horizontal-line";
import WordTypewriter from "@/animation/WordTypeWriter";
import IconFadeIn from "@/animation/IconFadeIn";

const Footer = () => {
  return (
    <footer className="px-8 pb-6 pt-8">
      {/* Line design */}
      <div className="flex items-center justify-center">
        <LineHorizontalIcon length={150} />
      </div>

      {/* Footer details */}
      <div className="md:flex md:justify-between md:gap-10 lg:px-20 lg:py-12">
        {/* Short intro */}
        <div className="my-7">
          <div className="font-sans text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-3xl lg:text-4xl">
            <WordTypewriter text="Ideas are only the beginning" />
          </div>

          <div className="mb-2 font-sans text-2xl font-semibold leading-tight tracking-[-0.04em] text-univ sm:text-3xl lg:text-4xl">
            <WordTypewriter text="I build what comes next." />
          </div>

          <div className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted sm:text-sm">
            <WordTypewriter text="Full Stack Developer" />
          </div>
        </div>

        {/* Contact */}
        <div className="my-7 flex flex-col gap-2">
          <div className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-univ">
            <WordTypewriter text="CONTACT" />
          </div>

          <a href="mailto:ricksonbozar2@gmail.com" className="group flex items-center gap-2 font-sans text-sm transition-colors duration-300 hover:text-univ sm:text-base">
            <IconFadeIn>
              <MdEmail className="text-muted transition-colors duration-300 group-hover:text-univ" />
            </IconFadeIn>

            <WordTypewriter text="ricksonbozar2@gmail.com" />
          </a>

          <a href="tel:+14374245853" className="group flex items-center gap-2 font-mono text-xs tabular-nums transition-colors duration-300 hover:text-univ sm:text-sm">
            <IconFadeIn>
              <CgPhone className="text-muted transition-colors duration-300 group-hover:text-univ" />
            </IconFadeIn>

            <WordTypewriter text="+1 (437) 424-5853" />
          </a>
        </div>

        {/* Socials */}
        <div className="my-7 flex flex-col gap-2">
          <div className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-univ">
            <WordTypewriter text="SOCIAL" />
          </div>

          <a href="https://github.com/Rickson0628" target="_blank" rel="noreferrer" className="group flex items-center gap-2 font-sans text-sm transition-colors duration-300 hover:text-univ sm:text-base">
            <IconFadeIn>
              <AiFillGithub className="text-muted transition-colors duration-300 group-hover:text-univ" />
            </IconFadeIn>

            <WordTypewriter text="GitHub" />
          </a>

          <a href="https://www.linkedin.com/in/rickson-bozar-628729320/" target="_blank" rel="noreferrer" className="group flex items-center gap-2 font-sans text-sm transition-colors duration-300 hover:text-univ sm:text-base">
            <IconFadeIn>
              <AiFillLinkedin className="text-muted transition-colors duration-300 group-hover:text-univ" />
            </IconFadeIn>

            <WordTypewriter text="LinkedIn" />
          </a>

          <a href="/Rickson-Bozar-Resume.pdf" target="_blank" rel="noreferrer" className="group flex items-center gap-2 font-sans text-sm transition-colors duration-300 hover:text-univ sm:text-base">
            <IconFadeIn>
              <CgFileDocument className="text-muted transition-colors duration-300 group-hover:text-univ" />
            </IconFadeIn>

            <WordTypewriter text="Resume" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 font-mono text-[11px] tracking-[-0.02em] text-muted sm:text-xs lg:px-20">
        © 2026 Rickson Bozar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;