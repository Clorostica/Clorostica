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
      title: "Egg Timer",
      description: "Simple timer app for boiling eggs to your preferred level.",
      tech: "JavaScript, HTML, CSS",
      role: "Functionality and design",
      link: "https://eggtimer-3qye.vercel.app/",
      image: eggTimerDefault,
    },
    {
      title: "Little Lemon",
      description:
        "Restaurant site offering homemade dishes with a modern twist.",
      tech: "HTML, CSS",
      role: "Layout and branding",
      link: "https://little-lemon-nu-nine.vercel.app/,
      image: littleLemonDefault,
    },
    {
      title: "Cordillera",
      description:
        "Floral arrangements crafted with elegance and natural beauty.",
      tech: "HTML, CSS, JS",
      role: "Web design & development",
      link: "https://cordillera-rho.vercel.app/",
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

  const bentoSpans = [
    "col-span-2 row-span-2", // Gobento — featured large
    "", // Weather App
    "", // Egg Timer
    "", // Little Lemon
    "", // Cordillera
    "", // Epica
  ];

  return (
    <div className="main_container reveal">
      <section
        id="projects"
        className="relative py-8 md:py-24 px-6"
        ref={sectionRef}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-5xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-700 [will-change:opacity,transform] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Featured Projects
          </h2>

          {/* Mobile — imagen + contenido siempre visible */}
          <div className="md:hidden flex flex-col gap-5">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden transition-[box-shadow,border-color] duration-300 active:shadow-[0_0_30px_-8px_rgba(168,85,247,0.6)] active:border-purple-500/70"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-active:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <div className="pointer-events-none absolute -inset-px opacity-0 group-active:opacity-100 transition-opacity duration-300 bg-[conic-gradient(at_0%_0%,rgba(168,85,247,0.6),rgba(236,72,153,0.4),transparent_60%)] blur-sm" />
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-3">
                    <h3 className="text-lg font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="space-y-1 text-xs text-slate-400">
                      <div className="flex items-start gap-1.5">
                        <ChevronRight
                          className="w-3.5 h-3.5 mt-0.5 text-purple-400 shrink-0"
                          strokeWidth={2.5}
                          aria-hidden
                        />
                        <span>
                          <strong className="text-slate-200">Tech:</strong>{" "}
                          {project.tech}
                        </span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <ChevronRight
                          className="w-3.5 h-3.5 mt-0.5 text-purple-400 shrink-0"
                          strokeWidth={2.5}
                          aria-hidden
                        />
                        <span>
                          <strong className="text-slate-200">Role:</strong>{" "}
                          {project.role}
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-white text-sm">
                      View Project <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Desktop — bento box sin gaps */}
          <div className="hidden md:block">
            <div
              className="grid grid-cols-3 gap-4"
              style={{ gridTemplateRows: "240px 240px 220px" }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className={`${bentoSpans[index]} transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block w-full h-full rounded-2xl border border-slate-800 bg-slate-900/40 overflow-hidden transition-[box-shadow,border-color] duration-300 hover:shadow-[0_0_40px_-12px_rgba(168,85,247,0.7)] hover:border-purple-500/80"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[conic-gradient(at_0%_0%,rgba(168,85,247,0.8),rgba(236,72,153,0.5),transparent_60%)] blur-sm" />

                    <div className="absolute inset-0 flex flex-col p-5">
                      <div
                        className="flex-1 overflow-y-auto space-y-1.5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 mb-3 pr-1"
                        style={{ transitionDelay: "50ms" }}
                      >
                        <h3 className="text-xl font-bold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                          {project.title}
                        </h3>
                        <p className="text-sm text-slate-100 leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                          {project.description}
                        </p>
                      </div>
                      <div
                        className="shrink-0 space-y-2.5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                        style={{ transitionDelay: "100ms" }}
                      >
                        <ul className="space-y-1 text-xs text-slate-200">
                          <li className="flex items-start gap-2">
                            <ChevronRight
                              className="w-4 h-4 mt-0.5 text-purple-400 shrink-0"
                              strokeWidth={2.5}
                              aria-hidden
                            />
                            <span>
                              <strong>Tech:</strong> {project.tech}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight
                              className="w-4 h-4 mt-0.5 text-purple-400 shrink-0"
                              strokeWidth={2.5}
                              aria-hidden
                            />
                            <span>
                              <strong>Role:</strong> {project.role}
                            </span>
                          </li>
                        </ul>
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-800/90 border border-slate-700 hover:border-purple-500 text-white text-sm shadow-lg shadow-purple-500/30 transition-all duration-300">
                          View Project <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
