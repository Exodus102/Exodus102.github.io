"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Boxes } from "@/components/ui/background-boxes";
import { FlipWords } from "@/components/ui/flip-words";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Lens } from "@/components/ui/lens";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { Timeline } from "@/components/ui/timeline";
import { Tooltip } from "@/components/ui/tooltip-card";
import { div, main } from "motion/react-client";
import { title } from "process";
import { useState } from "react";
import { text } from "stream/consumers";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const words = [
    "Full-Stack Developer",
    "Tech Enthusiast",
    "Open Source Enthusiast",
  ];

  const wordsTypewriter = [
    { text: "Full-Stack Developer", className: "text-blue-400" },
    { text: "Tech Enthusiast", className: "text-green-400" },
    { text: "Open Source Enthusiast", className: "text-purple-400" },
  ];

  const ursb = () => {
    return (
      <div>
        <img src="/ursb.png" alt="image" className="rounded-lg" />
        <br />
        <span className="text-neutral-500 font-bold">
          University of Rizal System Binangonan Campus
        </span>
      </div>
    );
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="bg-black scroll-smooth">
      <div className="relative w-full">
        <Navbar>
          <NavBody>
            <NavItems items={navItems}></NavItems>
          </NavBody>
        </Navbar>
      </div>
      <div id="home" className="w-full h-screen text-white p-5 flex px-20">
        <div className="w-full flex flex-col justify-center text-neutral-500">
          <span className="text-2xl">Hello!</span>
          <h1 className="text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
            I'm Jenrick Aran
          </h1>
          <span className="mt-4 text-3xl">
            A <FlipWords words={words} />
          </span>
          <br />
          <span className="w-100">
            I specialize in building exceptional digital experiences. As a
            full-stack developer, I bring ideas to life with clean code and
            user-centric design, from the server to the browser.
          </span>
          <div className="flex gap-3 mt-2 z-20">
            <a href="https://github.com/Exodus102" target="_blank">
              <svg
                data-v-597a8c31=""
                role="img"
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title data-v-597a8c31="">GitHub</title>
                <path
                  data-v-597a8c31=""
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                ></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/jenrick-aran/" target="_blank">
              <button className="cursor-pointer">
                <svg
                  data-v-597a8c31=""
                  role="img"
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title data-v-597a8c31="">LinkedIn</title>
                  <path
                    data-v-597a8c31=""
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  ></path>
                </svg>
              </button>
            </a>
            <a
              href="https://discordapp.com/users/javascripters2"
              target="_blank"
            >
              <button className="cursor-pointer">
                <svg
                  data-v-597a8c31=""
                  role="img"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title data-v-597a8c31="">Discord</title>
                  <path
                    data-v-597a8c31=""
                    d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
                  ></path>
                </svg>
              </button>
            </a>
            <a href="https://www.facebook.com/aranjenrick" target="_blank">
              <button className="cursor-pointer">
                <svg
                  data-v-597a8c31=""
                  role="img"
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title data-v-597a8c31="">Facebook</title>
                  <path
                    data-v-597a8c31=""
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
          <br />
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="a"
            href="/Jenrick P. Aran - CV.pdf"
            download="Jenrick P. Aran - CV.pdf"
            className="px-6 py-3 font-semibold bg-transparent hover:bg-blur text-white hover:font-bold"
          >
            Download CV
          </HoverBorderGradient>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <Lens>
            <div className="w-full">
              <div className="w-87.5 h-87.5 rounded-full overflow-hidden">
                <img src="/cv-pic.jpg" alt="image" className="object-cover" />
              </div>
            </div>
          </Lens>
        </div>
        <BackgroundBeams />
      </div>
      <div
        id="about"
        className="w-full text-white p-5 px-20 flex flex-col items-center justify-center pt-20"
      >
        <h1 className="text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          About me
        </h1>
        <br />
        <span className="text-neutral-500 text-center">
          Hi, I'm Jenrick Aran. I started coding when I was in college. My
          coding journey began when I got hooked on a code compiler, which was
          fun and engaging to use, until coding and programming became my hobby.
          I was in the ABM strand in senior high school, but then I shifted to
          BSIT at the{" "}
          <Tooltip content={ursb()}>
            <span className="font-bold text-white">
              University of Rizal System Binangonan Campus
            </span>
          </Tooltip>
          . Most of the programming languages I know, I learned on my own and
          through my own research.
        </span>
        <br/>
      </div>
      <div id="projects" className="w-full h-screen text-white">
        this projects page
      </div>
      <div id="contact" className="w-full h-screen text-white">
        this contact page
      </div>
    </main>
  );
}
