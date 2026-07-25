"use client";
import { BiChevronsUp } from "react-icons/bi"; 
import { ImLocation } from "react-icons/im";
import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";
import { IBM_Plex_Sans } from "next/font/google";
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';


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
  {name:  <AiFillGithub size={25}  />, href: "https://github.com/Rickson0628"},
  {name: <AiFillLinkedin size={25}  />, href: "https://www.linkedin.com/in/rickson-bozar-628729320/"},
  {name:  <AiOutlineInstagram size={25} />, href: "https://www.instagram.com/ricksonbozar/"},
]

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
    <div className="p-8  md:pt-20 lg:p-15 lg:pl-25 mt-5 lg:mt-15 xl:pl-50 xl:pt-10 relative flex min-h-screen w-full max-w-screen flex-col items-center justify-center overflow-x-clip">
      {/* Horizontal Line */}

      {/*First line */}
      <div className="flex  items-center gap-2 mb-5   w-full">
        {/* Animated greeting */}
        <div className="flex justify-center items-center">
          <div
            className={`text-xl md:text-2xl  font-mono font-semibold transition-all duration-500 ease-out text-univ ${
              isVisible
                ? "translate-y-0 scale-100 opacity-100 blur-0"
                : "-translate-y-3 scale-50 opacity-0 blur-sm"
            } `}
          >
            {greetings[index]}!
            <div className=" mt-3 h-0.5 bg-univ rounded-2xl " />
          </div>
        </div>
        <div className="font-mono text-xl md:text-2xl text-gray-600 mb-4 ">
          I am
        </div>
      </div>

      {/* Name */}
      <div className={` w-full ${ibmPlexSans.className} font-medium tracking-[-0.06em] leading-[0.85] text-8xl md:text-9xl xl:text-[150px] pb-5 -ml-5 `}>
        <div className="">Rickson</div>
        <div className="">Bozar</div>
      </div>
      {/* Field and location*/}

      <div className="relative flex w-full">
        <div>
          <div className="font-mono  font-extrabold text-xl md:text-3xl lg:text-3xl xl:text-3xl  mt-5  xl:mt-0 text-univ">
            <div className="flex gap-1 mb-5 lg:mb-0 text-gray-600 lg:opacity-0">
            {icons.map((icon,index)=>(
              <a key={index} href={icon.href} target="_blank">{icon.name}</a>
            ))}
            </div>
            FULL-STACK
          </div>

          <div className="font-mono font-extrabold  text-xl md:text-3xl lg:text-3xl xl:text-3xl text-gray-500  ">
            DEVELOPER
          </div>
        </div>
        {/* Greeting robot */}
        <div className=" absolute -top-45 left-35  h-[500px] w-[500px]
        sm:h-[570px] sm:w-[570px] sm:left-45 sm:-top-75 
        md:left-70 md:-top-85 md:h-[620px] md:w-[600px]  lg:left-80 lg:-top-100 lg:h-[700px] lg:w-[700px] xl:h-[800px] xl:w-[900px] xl:-top-120 xl:left-120 overflow-hidden cursor-grab active:cursor-grabbing max-w-full z-0 ">
          <Spline
            scene="https://prod.spline.design/n3j9W3bacAtGt2Zo/scene.splinecode"
            className="h-full w-full"
          />
        </div>
        <div className="absolute top-53 left-85 sm:top-35 sm:left-112   
        md:top-35 md:text-[10px] md:left-135 lg:left-160 xl:left-230
        text-[7px] flex flex-col items-center justify-center animate-move-it text-univ">
          <div><BiChevronsUp /></div>
          <div>Move me</div>
          </div>


      </div>
      {/* Location */}

      <div className="w-full  mt-10  text-gray-600  ">
        <div className="gray w-90 h-0.5 mb-2 bg-gray-200 sm:w-75 md:w-100"></div>
        <div className="flex items-center gap-2 text-base">
          <div>
            <ImLocation />
          </div>
          <div>Toronto, ON</div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
