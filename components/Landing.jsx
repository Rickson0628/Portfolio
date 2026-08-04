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
  { name: <AiFillGithub size={25} />, href: "https://github.com/Rickson0628", label: "Github" },
  {
    name: <AiFillLinkedin size={25} />,
    href: "https://www.linkedin.com/in/rickson-bozar-628729320/",
    label: "Linkedin"
  },
  {
    name: <AiOutlineInstagram size={25} />,
    href: "https://www.instagram.com/ricksonbozar/",
    label: "Instagram"
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
    <div className="p-8 md:p-15 md:pt-35 lg:p-20  lg:pt-35  xl:p-25 xl:pt-35   relative flex min-h-screen w-full max-w-screen flex-col items-center justify-center overflow-x-clip  sm:flex-row">
      {/* Decorative layer: fading grid across the hero section */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.20] dark:opacity-[1]
    bg-[linear-gradient(var(--theme-border)_1px,transparent_1px),linear-gradient(90deg,var(--theme-border)_1px,transparent_1px)]
    [background-size:40px_40px]
    [mask-image:linear-gradient(to_bottom,black_0%,black_40%,transparent_80%)]
      dark:[mask-image:linear-gradient(to_bottom,black_0%,black_10%,transparent_70%)]"
        />
      {/* Decorative layer: subtle accent glow entering from the left */}
      <div className="pointer-events-none absolute -left-[18rem] top-[10%] size-[30rem] rounded-full bg-univ  opacity-[0.15]
      blur-[140px] mix-blend-multiply dark:opacity-[0.20] dark:mix-blend-screen"/>

      {/* Left column: introduction, name, role, social links, and location */}
      <div className="w-full md:w-1/2 md:shrink-0">
        {/* Introduction row: animated greeting followed by "I am" */}
        <div className="flex  items-center gap-2 mb-5 w-full motion-safe:animate-[slide-right_500ms_ease-out_0.5s_both]">
          {/* Rotating greeting label and underline */}
          <div className="flex justify-center items-center">
            <div
              className={`text-xl md:text-2xl font-mono font-semibold text-univ  transition-all duration-500 ease-out ${
                isVisible
                  ? "translate-y-0 scale-100 opacity-100 blur-0"
                  : "-translate-y-3 scale-50 opacity-0 blur-sm"
              } `}
            >
              {greetings[index]}!
              <div className="mt-3 h-0.5 rounded-2xl bg-univ" />
            </div>
          </div>
          {/* Static introduction text */}
          <div className="mb-4 font-mono text-xl text-muted md:text-2xl">
            I am
          </div>
        </div>

        {/* Primary heading: name */}
        <div
          className={` w-full ${ibmPlexSans.className} font-medium tracking-[-0.06em] leading-[0.85] text-8xl md:text-9xl xl:text-[150px] pb-5 -ml-5 motion-safe:animate-[slide-right_700ms_ease-out_0.8s_both]`}
        >
          <div className="">Rickson</div>
          <div className="">Bozar</div>
        </div>

        {/* Role row: mobile socials and job title; anchors the mobile robot */}
        <div className="relative flex w-full">
          {/* Job title and social links */}
          <div className="motion-safe:animate-[slide-right_700ms_ease-out_1s_both]">
            <div className="mt-5 font-mono text-xl font-extrabold text-univ md:text-3xl lg:text-3xl xl:mt-0 xl:text-3xl">
              {/* Mobile/tablet socials; desktop socials live in the navigation */}
              <div className="relative mb-5  flex gap-1 text-muted lg:mb-0 lg:opacity-0">
                {icons.map((icon, index) => (
                  <a key={index} href={icon.href}  aria-label={icon.label} target="_blank" className="pointer-events-auto inline-flex cursor-pointer transition-colors hover:text-univ ">
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
          {/* Mobile-only interactive robot overlay */}
          <div
            className=" absolute -top-45 left-35  h-[500px] w-[500px]
        sm:h-[570px] sm:w-[570px] sm:left-45 sm:-top-75 
        overflow-hidden cursor-grab active:cursor-grabbing max-w-full z-10 md:hidden motion-safe:animate-[slide-up_700ms_ease-out_1s_both] "
          >
            <Spline
              scene="https://prod.spline.design/n3j9W3bacAtGt2Zo/scene.splinecode"
              className="h-full w-full"
            />
          </div>
          {/* Mobile-only interaction hint below the robot */}
          <div
            className="absolute top-53 left-85 sm:top-35 sm:left-112   
        md:top-35 md:text-[10px] md:left-135 lg:left-160 xl:left-230
        text-[7px] flex flex-col items-center justify-center animate-move-it text-univ md:hidden motion-safe:animate-[slide-up_700ms_ease-out_1s_both]"
          >
            <div>
              <BiChevronsUp />
            </div>
            <div>Move me</div>
          </div>
        </div>

        {/* Location section below the introduction content */}
        <div className="mt-10 w-full text-muted motion-safe:animate-[slide-up_700ms_ease-out_1s_both]">
          {/* Divider above the location */}
          <div className="mb-2 h-0.5 w-90 bg-border sm:w-75 md:w-100 xl:w-115"></div>
          {/* Location icon and label */}
          <div className="flex items-center gap-2 text-base">
            <div>
              <ImLocation />
            </div>
            <div>Toronto, ON</div>
          </div>
        </div>
      </div>

      {/* Right column: desktop-only robot scene */}
      <div className="relative hidden min-w-0 max-w-full flex-1 md:flex md:items-center md:justify-center pl-30 ">
        {/* Desktop robot viewport */}
        <div className="relative h-[70vh] w-full overflow-visible motion-safe:animate-[fade-in_700ms_ease-out_1s_both]">
          {/* Interactive Spline scene centered inside the viewport */}
          <div
            className=" z-10  absolute left-1/2 top-1/2 h-[80vw] w-[80vw] lg:h-[70vw] lg:h-[70vw] xl:w-[60vw] xl:h-[60vw] 2xl:w-[55vw] 2xl:h-[55vw]
                    -translate-x-1/2 -translate-y-1/2 "
          >
          
            <Spline
              scene="https://prod.spline.design/n3j9W3bacAtGt2Zo/scene.splinecode"
              className="h-full w-full cursor-grab active:cursor-grabbing"
            />
          </div>

          {/* Desktop interaction hint below the robot */}
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
