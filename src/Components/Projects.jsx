import React, { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import weatherAppDefault from "../assets/Img/weatherapp1.png";
import eggTimerDefault from "../assets/Img/eggtimer1.png";
import floreriaDefault from "../assets/Img/floreria.png";
import epicaDefault from "../assets/Img/epica1.png";
import littleLemonDefault from "../assets/Img/Littlelemon.png";
import taskFlow from "../assets/Img/Gobento.png";

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Gobento",

      description:
        "Social media event app that allows users to save and share events with friends, upload photos, and organize them as memories or future plans. Easily manage your schedule, view profiles with privacy settings, follow friends, and keep track of your social life effortlessly.",
      tech: "React, TypeScript, TailwindCSS, Auth0, Node.js, Docker, Postman",
      role: "Fullstack development",
      link: "https://task-list-delta-sandy.vercel.app/",
      image: taskFlow,
    },
    {
      title: "Weather App",
      description:
        "Check real-time weather by city with a clean and responsive UI.",
      tech: "React, Vite, OpenWeather API, CSS",
      role: "Design and development",
      link: "https://weatherapp-delta-jet.vercel.app/",
      image: weatherAppDefault,
    },
    {
      title: "Little Lemon",
      description:
        "Restaurant site offering homemade dishes with a modern twist.",
      tech: "HTML, CSS",
      role: "Layout and branding",
      link: "https://clorostica.github.io/LittleLemon2/",
      image: littleLemonDefault,
    },
    {
      title: "Egg Timer",
      description: "Simple timer app for boiling eggs to your preferred level.",
      tech: "JavaScript, HTML, CSS",
      role: "Functionality and design",
      link: "https://clorostica.github.io/Eggtimer/",
      image: eggTimerDefault,
    },
    {
      title: "Cordillera",
      description:
        "Floral arrangements crafted with elegance and natural beauty.",
      tech: "HTML, CSS, JS",
      role: "Web design & development",
      link: "https://clorostica.github.io/Cordillera",
      image: floreriaDefault,
    },
    {
      title: "Epica",
      description:
        "E-commerce or online catalog website with modern responsive design.",
      tech: "HTML, CSS, JavaScript, Swiper.js",
      role: "Frontend Development, UI/UX Design",
      link: "https://clorostica.github.io/Epica/",
      image: epicaDefault,
    },
  ];

  const getProjectLayoutClasses = (index) => {
    // Bento-style layout: only column spans (no manual row spans) so the grid can
    // auto-calculate heights and avoid vertical gaps while still feeling varied.
    // lg = 6 columns → row 1: 3 + 3, row 2: 2 + 2 + 2
    switch (index) {
      case 0:
        return "lg:col-span-3";
      case 1:
        return "lg:col-span-3";
      case 2:
      case 3:
      case 4:
      case 5:
        return "lg:col-span-2";
      default:
        return "lg:col-span-2";
    }
  };

  return (
    <div className="main_container reveal">
      <section
        id="projects"
        className="relative py-8 md:py-24 px-6"
        ref={sectionRef}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-5xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 md:gap-6 items-stretch">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`h-full transition-all duration-700 ${getProjectLayoutClasses(index)} ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block h-full w-full rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-lg overflow-hidden transition-[transform,box-shadow,border-color] duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_0_40px_-12px_rgba(168,85,247,0.7)] hover:border-purple-500/80"
                >
                  <div className="relative w-full h-full aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-[0.8deg]"
                    />

                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-slate-950/10 via-slate-950/80 to-slate-900/95" />

                    <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[conic-gradient(at_0%_0%,rgba(168,85,247,0.8),rgba(236,72,153,0.5),transparent_60%)] blur-sm" />

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 md:p-5 gap-2 overflow-y-auto">
                      <div className="space-y-1.5">
                        <h3 className="text-lg md:text-xl font-bold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                          {project.title}
                        </h3>
                        <p className="text-xs md:text-sm text-slate-100 leading-snug">
                          {project.description}
                        </p>
                      </div>

                      <div className="space-y-2.5 pt-1">
                        <ul className="space-y-1 text-[11px] md:text-xs text-slate-200">
                          <li className="flex items-start gap-2">
                            <ChevronRight
                              className="w-3 h-3 md:w-4 md:h-4 mt-0.5 text-purple-400"
                              strokeWidth={2.5}
                              aria-hidden
                            />
                            <span>
                              <strong>Tech:</strong> {project.tech}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight
                              className="w-3 h-3 md:w-4 md:h-4 mt-0.5 text-purple-400"
                              strokeWidth={2.5}
                              aria-hidden
                            />
                            <span>
                              <strong>Role:</strong> {project.role}
                            </span>
                          </li>
                        </ul>

                        <div className="pt-1">
                          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-800/90 hover:bg-slate-700/90 transition-all duration-300 border border-slate-700 hover:border-purple-500 text-white text-sm shadow-lg shadow-purple-500/30">
                            View Project
                            <ChevronRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>
        {`
          @keyframes shine {
            0% { transform: translateX(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(100%); opacity: 0; }
          }
          .animate-shine {
            animation: shine 100.5s ease-in-out;
          }
        `}
      </style>
    </div>
  );
}
