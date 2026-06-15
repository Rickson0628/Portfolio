import { CgFileDocument, CgPhone } from "react-icons/cg";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import React from "react";
import LineHorizontalIcon from "@/svg/horizontal-line";

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
          <div className="text-2xl font-bold">reppin</div>
          <div className="text-univ font-bold text-2xl mb-2">
            {`lorem epsum`}
          </div>
          <div className="text-gray-600">Full Stack Developer</div>
        </div>

        {/* Contact */}
        <div className="my-7 flex flex-col gap-2">
          <div className="text-univ font-bold">CONTACT</div>

          <div className="flex gap-2 items-center text-sm">
            <MdEmail className="text-gray-600" />
            ricksonbozar2@gmail.com
          </div>

          <div className="flex gap-2 items-center text-sm">
            <CgPhone className="text-gray-600" />
            {`+1 (437) 424-5853`}
          </div>
        </div>

        {/* Socials */}
        <div className="my-7 flex flex-col gap-2">
          <div className="text-univ font-bold">SOCIAL</div>

          <div className="flex gap-2 items-center text-sm">
            <AiFillGithub className="text-gray-600" />
            Github
          </div>

          <div className="flex gap-2 items-center text-sm">
            <AiFillLinkedin className="text-gray-600" />
            LinkedIn
          </div>

          <div className="flex gap-2 items-center text-sm">
            <CgFileDocument className="text-gray-600" />
            Resume
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