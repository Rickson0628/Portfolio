"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { IBM_Plex_Sans } from "next/font/google";
import { useReducedMotion } from "framer-motion";

import { CgFileDocument } from "react-icons/cg";
import { BiChevronsUp, BiCubeAlt } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

// Loads the local Spline component only when it is rendered
const SplineScene = dynamic(() => import("./SplineScene.jsx"), {
  ssr: false,
  loading: () => <RobotLoadingState />,
});

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
const socialLinks = [
  {
    icon: <AiFillGithub size={25} />,
    href: "https://github.com/Rickson0628",
    label: "GitHub",
  },
  {
    icon: <AiFillLinkedin size={25} />,
    href: "https://www.linkedin.com/in/rickson-bozar-628729320/",
    label: "LinkedIn",
  },
  {
    icon: <AiOutlineInstagram size={25} />,
    href: "https://www.instagram.com/ricksonbozar/",
    label: "Instagram",
  },
  {
    icon: <CgFileDocument size={24} />,
    href: "/Rickson-Bozar-Resume.pdf",
    label: "Resume",
  },
];

// Displays while the 3D model is loading
function RobotLoadingState() {
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

        {/* Loading message */}
        <span className="font-mono text-xs text-muted">
          Loading 3D model
        </span>
      </div>
    </div>
  );
}

// Lightweight preview shown before Spline loads on mobile
const MobileRobotPreview = ({ onLoad }) => {
  return (
    <div
      className="
        relative
        flex
        h-full
        w-full
        items-center
        justify-center
        overflow-hidden
        rounded-[2rem]
        border
        border-border
        bg-surface-raised
      "
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-[18%]
          rounded-full
          bg-univ/15
          blur-2xl
        "
      />

      {/* Preview content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* 3D cube icon */}
        <div
          className="
            mb-4
            flex
            size-24
            items-center
            justify-center
            rounded-full
            border
            border-border
            bg-background/80
            text-5xl
            text-univ
            shadow-lg
          "
        >
          <BiCubeAlt aria-hidden="true" />
        </div>

        {/* Preview title */}
        <p className="font-mono text-sm font-semibold text-foreground">
          Interactive 3D robot
        </p>

        {/* Preview description */}
        <p className="mt-2 max-w-60 text-sm leading-5 text-muted">
          Tap below to load and interact with the 3D model.
        </p>

        {/* Loads Spline after the button is pressed */}
        <button
          type="button"
          onClick={onLoad}
          className="
            mt-5
            min-h-11
            rounded-full
            border
            border-univ
            bg-univ
            px-6
            py-3
            font-mono
            text-sm
            font-semibold
            text-white
            transition-transform
            hover:scale-[1.02]
            active:scale-95
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-univ
          "
        >
          Load 3D model
        </button>
      </div>
    </div>
  );
};

// Social links displayed on mobile
const SocialLinks = () => {
  return (
    <div className="flex items-center gap-2 text-muted">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            min-h-11
            min-w-11
            items-center
            justify-center
            rounded-full
            transition-colors
            hover:text-univ
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-univ
          "
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

const Landing = () => {
  const shouldReduceMotion = useReducedMotion();

  // Controls the currently displayed greeting
  const [greetingIndex, setGreetingIndex] = useState(0);

  // Controls the greeting fade animation
  const [isGreetingVisible, setGreetingVisible] = useState(true);

  // Tracks whether the screen is desktop size
  const [isDesktop, setIsDesktop] = useState(false);

  // Tracks whether the screen size has been checked
  const [hasResolvedScreen, setHasResolvedScreen] = useState(false);

  // Controls whether Spline has been requested on mobile
  const [loadMobileSpline, setLoadMobileSpline] = useState(false);

  // Checks whether the screen is mobile or desktop
  useEffect(() => {
    const desktopMediaQuery = window.matchMedia("(min-width: 768px)");

    const updateScreenSize = () => {
      setIsDesktop(desktopMediaQuery.matches);
      setHasResolvedScreen(true);
    };

    // Checks the screen size when the page first loads
    updateScreenSize();

    // Checks again when the screen crosses the breakpoint
    desktopMediaQuery.addEventListener("change", updateScreenSize);

    return () => {
      desktopMediaQuery.removeEventListener(
        "change",
        updateScreenSize,
      );
    };
  }, []);

  // Changes the greeting every few seconds
  useEffect(() => {
    // Stops the greeting animation when reduced motion is enabled
    if (shouldReduceMotion) {
      setGreetingVisible(true);
      return;
    }

    let transitionTimeout;

    const greetingInterval = window.setInterval(() => {
      // Hides the current greeting
      setGreetingVisible(false);

      // Changes the greeting after the fade-out
      transitionTimeout = window.setTimeout(() => {
        setGreetingIndex((currentIndex) => {
          return (currentIndex + 1) % greetings.length;
        });

        // Shows the new greeting
        setGreetingVisible(true);
      }, 350);
    }, 2500);

    return () => {
      window.clearInterval(greetingInterval);
      window.clearTimeout(transitionTimeout);
    };
  }, [shouldReduceMotion]);

  /*
   * Desktop loads Spline automatically.
   * Mobile loads Spline only after the button is pressed.
   */
  const shouldRenderSpline =
    hasResolvedScreen && (isDesktop || loadMobileSpline);

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
        px-8
        pb-12
        pt-28
        md:flex-row
        md:px-15
        md:pt-35
        lg:px-20
        xl:px-25
      "
    >
      {/* Grid background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(var(--theme-border)_1px,transparent_1px),linear-gradient(90deg,var(--theme-border)_1px,transparent_1px)]
          [background-size:40px_40px]
          [mask-image:linear-gradient(to_bottom,black_0%,black_35%,transparent_80%)]
          opacity-[0.16]
          dark:opacity-60
        "
      />

      {/* Background accent glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-[12%]
          size-80
          rounded-full
          bg-univ
          opacity-10
          blur-[70px]

          md:-left-[18rem]
          md:size-[30rem]
          md:opacity-15
          md:blur-[140px]

          dark:mix-blend-screen
        "
      />

      {/* Left introduction section */}
      <div className="relative z-20 w-full min-w-0 md:w-1/2 md:shrink-0">
        {/* Greeting section */}
        <div
          className="
            mb-5
            flex
            items-center
            gap-2
            motion-safe:animate-[slide-right_500ms_ease-out_0.3s_both]
          "
        >
          {/* Changing greeting */}
          <div
            className={`
              font-mono
              text-xl
              font-semibold
              text-univ
              transition-[opacity,transform]
              duration-300
              md:text-2xl

              ${
                isGreetingVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-2 opacity-0"
              }
            `}
          >
            {greetings[greetingIndex]}!

            {/* Greeting underline */}
            <div className="mt-2 h-0.5 rounded-full bg-univ" />
          </div>

          {/* Static greeting text */}
          <div className="font-mono text-xl text-muted md:text-2xl">
            I am
          </div>
        </div>

        {/* Main name heading */}
        <h1
          className={`
            ${ibmPlexSans.className}
            -ml-1
            pb-5
            text-[clamp(4.5rem,21vw,7.5rem)]
            font-medium
            leading-[0.82]
            tracking-[-0.065em]

            md:-ml-4
            md:text-[clamp(6rem,11vw,9.5rem)]

            motion-safe:animate-[slide-right_700ms_ease-out_0.5s_both]
          `}
        >
          <span className="block">Rickson</span>
          <span className="block">Bozar</span>
        </h1>

        {/* Job title and mobile social links */}
        <div className="motion-safe:animate-[slide-right_700ms_ease-out_0.7s_both]">
          {/* Mobile social links */}
          <div className="mb-3 md:hidden">
            <SocialLinks />
          </div>

          {/* Job title */}
          <p className="font-mono text-xl font-extrabold text-univ md:text-3xl">
            FULL-STACK
          </p>

          <p className="font-mono text-xl font-extrabold text-muted md:text-3xl">
            DEVELOPER
          </p>
        </div>

        {/* Location section */}
        <div
          className="
            mt-10
            text-muted
            motion-safe:animate-[slide-up_700ms_ease-out_0.8s_both]
          "
        >
          {/* Location divider */}
          <div className="mb-3 h-px w-full max-w-115 bg-border" />

          {/* Location information */}
          <div className="flex items-center gap-2 text-base">
            <ImLocation aria-hidden="true" />
            <span>Toronto, ON</span>
          </div>
        </div>
      </div>

      {/* Right robot section */}
      <div
        className="
          relative
          z-10
          mt-8
          flex
          w-full
          min-w-0
          flex-1
          items-center
          justify-center
          md:mt-0
        "
      >
        {/* Responsive robot container */}
        <div
          className="
            relative
            aspect-square
            w-[min(92vw,560px)]
            md:w-[min(52vw,760px)]
            motion-safe:animate-[fade-in_700ms_ease-out_0.8s_both]
          "
        >
          {/* Waits until the screen size has been checked */}
          {!hasResolvedScreen ? (
            <RobotLoadingState />
          ) : shouldRenderSpline ? (
            // Interactive 3D model
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
            // Mobile preview before loading Spline
            <MobileRobotPreview
              onLoad={() => setLoadMobileSpline(true)}
            />
          )}

          {/* Interaction indicator */}
          {shouldRenderSpline && (
            <div
              className="
                pointer-events-none
                absolute
                bottom-[3%]
                left-1/2
                flex
                -translate-x-1/2
                flex-col
                items-center
                font-mono
                text-[9px]
                text-univ
                motion-safe:animate-move-it
              "
            >
              <BiChevronsUp aria-hidden="true" />
              <span>Move me</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Landing;