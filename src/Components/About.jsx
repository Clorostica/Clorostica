import React, { useState, useEffect, useRef } from "react";
import { LogoLoop } from "./LogoLoop";
import "../Styles/logoloop.css";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];

  const imageLogos = [
    {
      src: "/logos/company1.png",
      alt: "Company 1",
      href: "https://company1.com",
    },
    {
      src: "/logos/company2.png",
      alt: "Company 2",
      href: "https://company2.com",
    },
    {
      src: "/logos/company3.png",
      alt: "Company 3",
      href: "https://company3.com",
    },
  ];

  return (
    <div className="main_container reveal">
      <section
        id="about"
        className="relative pt-8 md:pt-24 px-6"
        ref={sectionRef}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            About Me
          </h2>
          <div className="space-y-6 text-slate-300 leading-relaxed text-justify">
            <p>
              Currently, I am a{" "}
              <span className="text-pink-400 font-medium">
                freelance front-end developer
              </span>{" "}
              based in{" "}
              <span className="text-purple-400 font-medium">Berlin</span>.
            </p>
            <p>
              Right now I'm working with small businesses to make their
              websites, but in my past I've worked on diverse projects from
              implementing highly performant enterprise applications in banking,
              marketing websites, and startups. I also have experience as a
              designer and have worked on corporate branding.
            </p>
            <p>
              I already have the skills and experience on the front-end and
              design, but I'm always learning and exploring new technologies. My
              goal is to continue evolving as a developer and designer, and also
              to become fullstack so that I can build things end-to-end.
            </p>
          </div>
          <div className="relative overflow-hidden pt-8">
            <LogoLoop
              logos={techLogos}
              speed={280}
              direction="left"
              logoHeight={48}
              gap={40}
              hoverSpeed={0}
              scaleOnHover
              ariaLabel="Technology partners"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
