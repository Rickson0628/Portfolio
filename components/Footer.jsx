import { CgFileDocument } from "react-icons/cg";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { CgPhone } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import React from "react";
import LineHorizontalIcon from "@/svg/horizontal-line";

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-center items-center">
  <LineHorizontalIcon length={150}/>
</div>
      <div className="md:flex md:gap-15 lg:gap-50 lg:p-20 ">
        <div className="my-7">
          <div className="text-2xl font-bold">Got a problem?</div>
          <div className="text-univ font-bold  text-2xl mb-2">{`I'll bring the code`}</div>
          <div className="text-gray-600">Full Stack Developer</div>
        </div>

        <div className="my-7 flex flex-col gap-2">
          <div className="text-univ font-bold">CONTACT</div>
          <div className="flex  gap-2 items-center text-sm">
            <MdEmail className="text-gray-600" />
            ricksonbozar2@gmail.com
          </div>
          <div className="flex  gap-2 items-center text-sm">
            <CgPhone className="text-gray-600" />
            {`+1 (437) 424-5853`}
          </div>
        </div>

        <div className="my-7 flex flex-col gap-2">
          <div className="text-univ font-bold">SOCIAL</div>
          <div className="flex  gap-2 items-center text-sm">
            <AiFillGithub className="text-gray-600" />
            Github
          </div>
          <div className="flex  gap-2 items-center text-sm">
            <AiFillLinkedin className="text-gray-600" />
            LinkedIn
          </div>
          <div className="flex  gap-2 items-center text-sm">
            <CgFileDocument className="text-gray-600" />
            Resume
          </div>
        </div>
      </div>
      <div className="text-gray-600 text-xs md:text-sm lg:p-20 lg:-mt-30  ">
        2026 Rickson Bozar. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
