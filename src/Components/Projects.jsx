import React, { useState, useEffect, useRef } from "react";
import tasklistDefault from "../assets/Img/tasklist2.png";
import weatherAppDefault from "../assets/Img/weatherapp1.png";
import eggTimerDefault from "../assets/Img/eggtimer1.png";
import floreriaDefault from "../assets/Img/floreria.png";
import epicaDefault from "../assets/Img/epica1.png";
import littleLemonDefault from "../assets/Img/Littlelemon.png";

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Task List App",
      description:
        "Cross-device task manager with authentication and per-user storage.",
      tech: "React, TypeScript, TailwindCSS, Auth0, Node.js, Docker, Postman",
      role: "Fullstack development (frontend, backend & integration)",
      link: "https://task-list-delta-sandy.vercel.app/",
      image: tasklistDefault,
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
      link: "https://clorostica.github.io/Eggtimer/",
      image: eggTimerDefault,
    },
    {
      title: "Cordillera",
      description: "Floral arrangements crafted with elegance and natural beauty.",
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
    {
      title: "Little Lemon",
      description:
        "Restaurant site offering homemade dishes with a modern twist.",
      tech: "HTML, CSS",
      role: "Layout and branding",
      link: "https://clorostica.github.io/LittleLemon2/",
      image: littleLemonDefault,
    },
  ];

  return (
    <div className="main_container reveal">
      <section id="projects" className="relative py-32 px-6" ref={sectionRef}>
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Featured Projects
          </h2>

          <p
            className={`text-slate-400 mb-12 text-lg transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            These are demo projects, not full applications. They were fully designed
            and developed by me using tools like React, Next.js, and Vite.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800 overflow-hidden transition-all duration-700 hover:scale-105 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.4)] hover:border-purple-500/80 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video relative overflow-hidden bg-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-20 transition-opacity duration-700" />

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover p-4 transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1500ms] ease-in-out" />

                  <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] rotate-45 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 animate-shine" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">{project.description}</p>

                  <ul className="list-disc pl-5 text-sm mb-2">
                    <li>
                      <strong>Tech:</strong> {project.tech}
                    </li>
                    <li>
                      <strong>Role:</strong> {project.role}
                    </li>
                  </ul>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
                  >
                    View Project
                  </a>
                </div>
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
            animation: shine 2.5s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}
