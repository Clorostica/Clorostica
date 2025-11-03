import React, { useState, useEffect, useRef } from "react";

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

  const techStack = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Auth0",
      icon: "https://cdn.auth0.com/website/bob/press/shield-dark.png",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Postman",
      icon: "https://www.svgrepo.com/show/354202/postman-icon.svg",
    },
  ];

  return (
    <div className="main_container reveal">
      <section
        id="aboutme"
        className="relative py-8 md:py-24 px-6"
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

          <div
            className={`bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800 p-6 md:p-8 shadow-lg transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
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
                implementing highly performant enterprise applications in
                banking, marketing websites, and startups. I also have
                experience as a designer and have worked on corporate branding.
              </p>
              <p>
                I already have the skills and experience on the front-end and
                design, but I'm always learning and exploring new technologies.
                My goal is to continue evolving as a developer and designer, and
                also to become fullstack so that I can build things end-to-end.
              </p>
            </div>
          </div>

          <div
            className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-2 px-4 py-3 bg-slate-900/50 backdrop-blur-lg rounded-2xl transition-all duration-700 hover:scale-105 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.4)] hover:border-purple-500/80"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-8 h-8 object-contain"
                />
                <span className="text-slate-300 text-sm font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
