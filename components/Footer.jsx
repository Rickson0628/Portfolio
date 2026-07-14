import { CgFileDocument, CgPhone } from "react-icons/cg";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import React from "react";
import LineHorizontalIcon from "@/svg/horizontal-line";
import WordTypewriter from "@/animation/WordTypeWriter";
import IconFadeIn from './../animation/IconFadeIn';

const Footer = () => {
  return (
    <footer className="px-8 pt-8 pb-6">
      {/* Line design */}
      <div className="flex justify-center items-center">
        <LineHorizontalIcon length={150} />
      </div>

      {/* Footer details */}
      <div className="md:flex md:gap-30 lg:gap-30 lg:px-20 lg:py-12 xl:gap-70">
        {/* Short intro */}
        <div className="my-7">        
          <div className="text-2xl font-bold"> <WordTypewriter text="reppin" /></div>
          <div className="text-univ font-bold text-2xl mb-2">
            <WordTypewriter text="lorem epsum" />
          </div>
          <div className="text-gray-600"><WordTypewriter text="Full Stack Developer" /></div>
        </div>

        {/* Contact */}
        <div className="my-7 flex flex-col gap-2">
          <div className="text-univ font-bold"><WordTypewriter text="CONTACT" /></div>

          <div className="flex gap-2 items-center text-sm">
            <IconFadeIn><MdEmail className="text-gray-600" /></IconFadeIn>
            <WordTypewriter text="ricksonbozar2@gmail.com" />
          </div>

          <div className="flex gap-2 items-center text-sm">
            <IconFadeIn><CgPhone className="text-gray-600" /></IconFadeIn>
            <WordTypewriter text="+1 (437) 424-5853" />
          </div>
        </div>

        {/* Socials */}
        <div className="my-7 flex flex-col gap-2">
          <div className="text-univ font-bold"><WordTypewriter text="SOCIAL" /></div>

          <div className="flex gap-2 items-center text-sm">
            <IconFadeIn><AiFillGithub className="text-gray-600" /></IconFadeIn>
            <WordTypewriter text="Github" />
          </div>

          <div className="flex gap-2 items-center text-sm">
            <IconFadeIn><AiFillLinkedin className="text-gray-600" /></IconFadeIn>
           <WordTypewriter text="LinkedIn" /> 
          </div>

          <div className="flex gap-2 items-center text-sm">
           <IconFadeIn> <CgFileDocument className="text-gray-600" /></IconFadeIn>
            <WordTypewriter text="Resume" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-gray-600 text-xs md:text-sm lg:px-20">
       © 2026 Rickson Bozar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;