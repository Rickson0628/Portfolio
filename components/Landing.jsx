"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { IBM_Plex_Sans } from "next/font/google";

import { CgFileDocument } from "react-icons/cg";
import { BiChevronsUp } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

// Displays while the Spline component is loading
const RobotLoadingState = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        {/* Loading circle */}
        <div
          aria-hidden="true"
          className="
            size-9
            animate-spin
            rounded-full
            border-2
            border-border
            border-t-univ
          "
        />

        {/* Loading text */}
        <span className="font-mono text-xs text-muted">
          Loading 3D model
        </span>
      </div>
    </div>
  );
};

// Loads the local Spline wrapper only when it is rendered
const SplineScene = dynamic(
  () => import("./SplineScene.jsx"),
  {
    ssr: false,
    loading: () => <RobotLoadingState />,
  },
);

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
});

// Greeting words shown at the beginning
const greetings = [
  "Hello",
  "Bonjour",
  "Hallo",
  "Hola",
  "Nǐ hǎo",
  "Marhaba",
  "Konnichiwa",
];

// Mobile social media links
const icons = [
  {
    name: <AiFillGithub size={25} />,
    href: "https://github.com/Rickson0628",
    label: "GitHub",
  },
  {
    name: <AiFillLinkedin size={25} />,
    href: "https://www.linkedin.com/in/rickson-bozar-628729320/",
    label: "LinkedIn",
  },
  {
    name: <AiOutlineInstagram size={25} />,
    href: "https://www.instagram.com/ricksonbozar/",
    label: "Instagram",
  },
  {
    name: <CgFileDocument size={24} />,
    href: "/Rickson-Bozar-Resume.pdf",
    label: "Resume",
  },
];

const Landing = () => {
  // Controls the currently displayed greeting
  const [index, setIndex] = useState(0);

  // Controls the greeting transition
  const [isVisible, setIsVisible] = useState(true);

  // Controls whether the robot has been loaded on mobile
  const [loadMobileSpline, setLoadMobileSpline] =
    useState(false);

  // Changes the greeting every two seconds
  useEffect(() => {
    let transitionTimeout;

    const interval = window.setInterval(() => {
      // Hides the current greeting
      setIsVisible(false);

      // Changes the greeting after it fades out
      transitionTimeout = window.setTimeout(() => {
        setIndex((previousIndex) => {
          return (previousIndex + 1) % greetings.length;
        });

        // Shows the new greeting
        setIsVisible(true);
      }, 500);
    }, 2000);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(transitionTimeout);
    };
  }, []);

  return (
    // Main landing section
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        w-full
        max-w-screen
        flex-col
        items-center
        justify-center
        overflow-x-clip
        p-8

        sm:flex-row

        md:p-15
        md:pt-35

        lg:p-20
        lg:pt-35

        xl:p-25
        xl:pt-35
      "
    >
      {/* Fading grid background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(var(--theme-border)_1px,transparent_1px),linear-gradient(90deg,var(--theme-border)_1px,transparent_1px)]
          [background-size:40px_40px]
          [mask-image:linear-gradient(to_bottom,black_0%,black_40%,transparent_80%)]
          opacity-[0.20]

          dark:opacity-[1]
          dark:[mask-image:linear-gradient(to_bottom,black_0%,black_10%,transparent_70%)]
        "
      />

      {/* Accent glow on the left */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[18rem]
          top-[10%]
          size-[30rem]
          rounded-full
          bg-univ
          opacity-[0.15]
          blur-[140px]
          mix-blend-multiply

          dark:opacity-[0.20]
          dark:mix-blend-screen
        "
      />

      {/* Left introduction section */}
      <div className="w-full md:w-1/2 md:shrink-0">
        {/* Greeting section */}
        <div
          className="
            mb-5
            flex
            w-full
            items-center
            gap-2

            motion-safe:animate-[slide-right_500ms_ease-out_0.5s_both]
          "
        >
          {/* Changing greeting */}
          <div className="flex items-center justify-center">
            <div
              className={`
                font-mono
                text-xl
                font-semibold
                text-univ
                transition-all
                duration-500
                ease-out

                md:text-2xl

                ${
                  isVisible
                    ? "translate-y-0 scale-100 opacity-100 blur-0"
                    : "-translate-y-3 scale-50 opacity-0 blur-sm"
                }
              `}
            >
              {greetings[index]}!

              {/* Greeting underline */}
              <div className="mt-3 h-0.5 rounded-2xl bg-univ" />
            </div>
          </div>

          {/* Static greeting text */}
          <div className="mb-4 font-mono text-xl text-muted md:text-2xl">
            I am
          </div>
        </div>

        {/* Main name heading */}
        <div
          className={`
            ${ibmPlexSans.className}
            -ml-5
            w-full
            pb-5
            text-8xl
            font-medium
            leading-[0.85]
            tracking-[-0.06em]

            md:text-9xl

            xl:text-[150px]

            motion-safe:animate-[slide-right_700ms_ease-out_0.8s_both]
          `}
        >
          <div>Rickson</div>
          <div>Bozar</div>
        </div>

        {/* Job title, social links and mobile robot */}
        <div className="relative flex w-full">
          {/* Job title and social links */}
          <div className="motion-safe:animate-[slide-right_700ms_ease-out_1s_both]">
            <div
              className="
                mt-5
                font-mono
                text-xl
                font-extrabold
                text-univ

                md:text-3xl

                lg:text-3xl

                xl:mt-0
                xl:text-3xl
              "
            >
              {/* Mobile and tablet social links */}
              <div
                className="
                  relative
                  mb-5
                  flex
                  gap-1
                  text-muted

                  lg:mb-0
                  lg:opacity-0
                "
              >
                {icons.map((icon) => (
                  <a
                    key={icon.label}
                    href={icon.href}
                    aria-label={icon.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      pointer-events-auto
                      inline-flex
                      cursor-pointer
                      transition-colors
                      hover:text-univ
                    "
                  >
                    {icon.name}
                  </a>
                ))}
              </div>

              FULL-STACK
            </div>

            <div
              className="
                font-mono
                text-xl
                font-extrabold
                text-muted

                md:text-3xl
                lg:text-3xl
                xl:text-3xl
              "
            >
              DEVELOPER
            </div>
          </div>

          {/* Mobile robot stays in its original position */}
          <div
            className="
              absolute
              -top-45
              left-35
              z-10
              h-[500px]
              w-[500px]
              max-w-full
              overflow-hidden

              sm:-top-75
              sm:left-45
              sm:h-[570px]
              sm:w-[570px]

              md:hidden

              motion-safe:animate-[slide-up_700ms_ease-out_1s_both]
            "
          >
            {loadMobileSpline ? (
              // Interactive robot in its original mobile location
              <SplineScene
                scene="https://prod.spline.design/n3j9W3bacAtGt2Zo/scene.splinecode"
                className="
                  h-full
                  w-full
                  cursor-grab
                  active:cursor-grabbing
                "
              />
            ) : (
              // Button appears inside the original robot container
              <div className="flex h-full w-full items-center justify-center">
                <button
                  type="button"
                  onClick={() => setLoadMobileSpline(true)}
                  className="
                    pointer-events-auto
                    min-h-11
                    rounded-full
                    border
                    border-univ
                    bg-background/90
                    px-6
                    py-3
                    font-mono
                    text-sm
                    font-semibold
                    text-univ
                    shadow-lg
                    backdrop-blur-sm
                    transition-transform

                    hover:scale-[1.03]
                    active:scale-95

                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-univ
                  "
                >
                  Load 3D Robot
                </button>
              </div>
            )}
          </div>

          {/* Mobile interaction hint */}
          {loadMobileSpline && (
            <div
              className="
                absolute
                left-85
                top-53
                flex
                flex-col
                items-center
                justify-center
                text-[7px]
                text-univ

                sm:left-112
                sm:top-35

                md:hidden

                motion-safe:animate-[slide-up_700ms_ease-out_1s_both]
              "
            >
              <BiChevronsUp />
              <div>Move me</div>
            </div>
          )}
        </div>

        {/* Location section */}
        <div
          className="
            mt-10
            w-full
            text-muted

            motion-safe:animate-[slide-up_700ms_ease-out_1s_both]
          "
        >
          {/* Location divider */}
          <div
            className="
              mb-2
              h-0.5
              w-90
              bg-border

              sm:w-75
              md:w-100
              xl:w-115
            "
          />

          {/* Location information */}
          <div className="flex items-center gap-2 text-base">
            <ImLocation />
            <div>Toronto, ON</div>
          </div>
        </div>
      </div>

      {/* Desktop robot section */}
      <div
        className="
          relative
          hidden
          min-w-0
          max-w-full
          flex-1
          pl-30

          md:flex
          md:items-center
          md:justify-center
        "
      >
        {/* Desktop robot viewport */}
        <div
          className="
            relative
            h-[70vh]
            w-full
            overflow-visible

            motion-safe:animate-[fade-in_700ms_ease-out_1s_both]
          "
        >
          {/* Desktop robot stays in its original position */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              z-10
              h-[80vw]
              w-[80vw]
              -translate-x-1/2
              -translate-y-1/2

              lg:h-[70vw]
              lg:w-[70vw]

              xl:h-[60vw]
              xl:w-[60vw]

              2xl:h-[55vw]
              2xl:w-[55vw]
            "
          >
            <SplineScene
              scene="https://prod.spline.design/n3j9W3bacAtGt2Zo/scene.splinecode"
              className="
                h-full
                w-full
                cursor-grab
                active:cursor-grabbing
              "
            />
          </div>

          {/* Desktop interaction hint */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-[5%]
              left-1/2
              flex
              -translate-x-1/2
              animate-move-it
              flex-col
              items-center
              text-[7px]
              text-univ

              lg:bottom-[2%]
              xl:-bottom-[3%]
            "
          >
            <BiChevronsUp />
            <div>Move me</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;