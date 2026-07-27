"use client";
import { BiChevronsUp } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";
import { IBM_Plex_Sans } from "next/font/google";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import WordTypewriter from "@/animation/WordTypeWriter";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
});

const greetings = [
  "Hello",
  "Bonjour",
  "Hallo",
  "Hola",
  "Nǐ hǎo",
  "Marhaba",
  "Konnichiwa",
];
const icons = [
  { name: <AiFillGithub size={25} />, href: "https://github.com/Rickson0628" },
  {
    name: <AiFillLinkedin size={25} />,
    href: "https://www.linkedin.com/in/rickson-bozar-628729320/",
  },
  {
    name: <AiOutlineInstagram size={25} />,
    href: "https://www.instagram.com/ricksonbozar/",
  },
];

const Landing = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Store the timeout so it can be cancelled during cleanup
    let transitionTimeout;

    // Start a greeting change every two seconds
    const interval = setInterval(() => {
      // Fade out the current greeting
      setIsVisible(false);

      // Change the greeting after the fade-out finishes
      transitionTimeout = setTimeout(() => {
        // Move to the next greeting and loop back after the last one
        setIndex((previousIndex) => {
          return (previousIndex + 1) % greetings.length;
        });

        // Fade in the new greeting
        setIsVisible(true);
      }, 500);
    }, 2000);

    // Stop all timers when the component is removed
    return () => {
      clearInterval(interval);
      clearTimeout(transitionTimeout);
    };
  }, []);

  return (
    <div className="p-8 md:p-15 md:pt-35 lg:p-20  lg:pt-35  xl:p-25 xl:pt-35   relative flex min-h-screen w-full max-w-screen flex-col items-center justify-center overflow-x-clip sm:flex-row">
      {/* Horizontal Line */}

      {/* Left Container */}
      <div className="w-full md:w-1/2 md:shrink-0">
        {/*First line */}
        <div className="flex  items-center gap-2 mb-5   w-full">
          {/* Animated greeting */}
          <div className="flex justify-center items-center">
            <div
              className={`text-xl md:text-2xl font-mono font-semibold text-univ transition-all duration-500 ease-out ${
                isVisible
                  ? "translate-y-0 scale-100 opacity-100 blur-0"
                  : "-translate-y-3 scale-50 opacity-0 blur-sm"
              } `}
            >
           {greetings[index]}!
              <div className="mt-3 h-0.5 rounded-2xl bg-univ" />
            </div>
          </div>
          <div className="mb-4 font-mono text-xl text-muted md:text-2xl">
              I am
          </div>
        </div>

        {/* Name */}
        <div
          className={` w-full ${ibmPlexSans.className} font-medium tracking-[-0.06em] leading-[0.85] text-8xl md:text-9xl xl:text-[150px] pb-5 -ml-5 `}
        >
          <div className="">   Rickson</div>  
          <div className="">   Bozar</div>
        </div>
        {/* Field and location*/}

        <div className="relative flex w-full">
          <div>
            <div className="mt-5 font-mono text-xl font-extrabold text-univ md:text-3xl lg:text-3xl xl:mt-0 xl:text-3xl">
              <div className="mb-5 flex gap-1 text-muted lg:mb-0 lg:opacity-0">
                {icons.map((icon, index) => (
                  <a key={index} href={icon.href} target="_blank">
                    {icon.name}
                  </a>
                ))}
              </div>
                  FULL-STACK
            </div>

            <div className="font-mono text-xl font-extrabold text-muted md:text-3xl lg:text-3xl xl:text-3xl">
                 DEVELOPER
            </div>
          </div>
          {/* Greeting robot */}
          <div
            className=" absolute -top-45 left-35  h-[500px] w-[500px]
        sm:h-[570px] sm:w-[570px] sm:left-45 sm:-top-75 
        overflow-hidden cursor-grab active:cursor-grabbing max-w-full z-0 md:hidden "
          >
            <Spline
              scene="https://prod.spline.design/n3j9W3bacAtGt2Zo/scene.splinecode"
              className="h-full w-full"
            />
          </div>
          <div
            className="absolute top-53 left-85 sm:top-35 sm:left-112   
        md:top-35 md:text-[10px] md:left-135 lg:left-160 xl:left-230
        text-[7px] flex flex-col items-center justify-center animate-move-it text-univ md:hidden"
          >
            <div>
              <BiChevronsUp />
            </div>
            <div>Move me</div>
          </div>
        </div>
        {/* Location */}

        <div className="mt-10 w-full text-muted">
          {/* Line */}
          <div className="mb-2 h-0.5 w-90 bg-border sm:w-75 md:w-100 xl:w-115"></div>
          <div className="flex items-center gap-2 text-base">
            <div>
              <ImLocation />
            </div>
            <div>Toronto, ON</div>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="relative hidden min-w-0 max-w-full flex-1 md:flex md:items-center md:justify-center pl-30 ">
        {/* Robot */}
        <div className="relative h-[70vh] w-full overflow-visible">
          <div
            className="absolute left-1/2 top-1/2 h-[80vw] w-[80vw] lg:h-[70vw] lg:h-[70vw] xl:w-[60vw] xl:h-[60vw] 2xl:w-[55vw] 2xl:h-[55vw]
                    -translate-x-1/2 -translate-y-1/2"
          >
            <Spline
              scene="https://prod.spline.design/n3j9W3bacAtGt2Zo/scene.splinecode"
              className="h-full w-full cursor-grab active:cursor-grabbing"
            />
          </div>

          <div
            className="pointer-events-none absolute bottom-[5%] lg:bottom-[2%] xl:-bottom-[3%] left-1/2 flex
                    -translate-x-1/2 animate-move-it flex-col items-center
                    text-[7px] text-univ"
          >
            <BiChevronsUp />
            <div>Move me</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
