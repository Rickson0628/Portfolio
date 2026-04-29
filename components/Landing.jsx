import { ImLocation } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import React from "react";
import EarthZoom from './Earth';

const Landing = () => {
  return (
    <div className="my-20 mx-5 lg:p-20">
      {/* Left Side */}
      <div className="flex gap-5">
        <div>
          {/* Title Text */}
          <div className="font-medium"> {`HELLO WORLD! IT'S ME,`} </div>
          <div className="font-extrabold text-5xl">Rickson Bozar</div>
          <div className="text-bold text-2xl text-univ">
            Full-Stack Developer
          </div>

          <div className="flex gap-5 mb-4 items-center justify-between">
            {/* Logo  */}
            <div className="flex gap-5">
              <div>
                <AiFillLinkedin color="#6a7282" size={20} />
              </div>
              <div>
                <AiFillGithub color="#6a7282" size={20} />
              </div>
            </div>
          
          </div>
          <div className="flex gap-5">
            <button className="text-white bg-univ p-3">Contact Me</button>
            <button className="p-3 border-2 border-univ">
              Download Resume
            </button>
          </div>
        </div>
           {/* Right Side */}
       <div className="space-y-3">
  <EarthZoom design="h-[420px] w-full rounded-3xl" />

  <div className="flex items-center justify-center gap-2 text-gray-500">
    <ImLocation />
    Toronto, ON
  </div>
</div>
      </div>
   
    </div>
  );
};

export default Landing;
