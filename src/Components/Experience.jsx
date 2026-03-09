import { useEffect, useRef, useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import "../Styles/index.css";
import "../Styles/styles.css";

function useReveal() {
  useEffect(() => {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("active"));
  }, []);
}

const ACCENTS = [
  "from-purple-500 to-pink-500",
  "from-indigo-400 to-purple-500",
  "from-pink-500 to-purple-600",
  "from-violet-500 to-indigo-400",
  "from-pink-400 to-rose-500",
  "from-purple-400 to-violet-500",
];

export function Experience() {
  useReveal();
  const [openIndex, setOpenIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Software Developer - Fractal Development",
      date: "2025",
      tasks: [
        "Worked on blockchain-based web solutions integrating smart contracts with React and Node.js",
        "Improved app performance and enhanced user experience",
        "Collaborated with clients to define requirements and maintain scalable codebases",
      ],
      tech: ["React", "Next.js", "TypeScript", "NextAuth", "Git", "Vercel"],
    },
    {
      title: "Frontend Developer - Freelancer",
      date: "2023 – 2025",
      tasks: [
        "Built responsive UIs using React, Next.js, and Tailwind CSS",
        "Translated Figma and Adobe XD designs into modular, reusable components",
        "Developed front-end features with TypeScript and integrated APIs with Axios",
        "Implemented authentication flows using Auth0 and NextAuth",
        "Delivered client-ready websites via Webflow and WordPress",
      ],
      tech: ["React", "Next.js", "TypeScript", "Tailwind", "Figma", "NextAuth", "Webflow", "Git", "Vercel"],
    },
    {
      title: "Frontend Developer – JFX",
      date: "2021 – 2023",
      tasks: [
        "Designed dynamic UIs in React for internal banking tools used by account executives",
        "Developed dashboards, simulators, and real-time customer management interfaces",
        "Integrated RESTful APIs with JSON data structures for efficient data handling",
        "Worked with Banco de Chile to meet strict accessibility and performance standards",
      ],
      tech: ["React", "JavaScript", "Node.js", "JSON", "REST APIs", "CSS"],
    },
    {
      title: "Web Designer - Kreativlab",
      date: "2020 – 2021",
      tasks: [
        "Developed UI mockups and prototypes to visualize design solutions",
        "Illustrated design ideas using storyboards, process flows, and sitemaps",
        "Identified and resolved UX issues to improve user experience",
        "Designed and conducted usability tests to validate design alternatives",
      ],
      tech: ["WordPress", "Adobe XD", "Git & GitHub", "Postman", "Illustrator", "Photoshop"],
    },
    {
      title: "Graphic Designer - CREA7IVE",
      date: "2019 – 2020",
      tasks: [
        "Created original graphic concepts based on user research and analysis",
        "Collaborated across departments to improve user experience",
        "Produced low to high-fidelity wireframes and prototypes",
        "Iterated designs using user feedback and data-driven decisions",
      ],
      tech: ["Illustrator", "Photoshop", "Canva", "Figma"],
    },
    {
      title: "Web Designer - MAD AGENCY",
      date: "2019",
      tasks: [
        "Developed WordPress websites and marketing campaigns for an e-commerce startup",
        "Created graphics, wrote copy, and managed email and social media campaigns",
        "Oversaw projects from concept to launch ensuring consistent online presence",
      ],
      tech: ["Figma", "Elementor", "WordPress", "InDesign", "Google Analytics"],
    },
  ];

  return (
    <div className="main_container reveal">
      <section id="experience" className="scroll-mt-24 pt-22 px-6" ref={sectionRef}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-white mb-12 text-base">
            Professional experience and key roles I've held across different companies and projects.
          </p>

          <div className="flex flex-col">
            {experiences.map((exp, index) => {
              const isOpen   = openIndex === index;
              const parts    = exp.title.split(/\s*[-–]\s*/);
              const role     = parts[0]?.trim() ?? exp.title;
              const company  = parts.slice(1).join(" – ").trim() || null;
              const nodeNum  = String(index + 1).padStart(2, "0");
              const accent   = ACCENTS[index];

              return (
                <div
                  key={index}
                  className={`
                    transition-all duration-500 ease-out border-b border-slate-800/60
                    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                    ${isOpen ? "bg-slate-900/40" : "bg-transparent hover:bg-slate-900/20"}
                  `}
                  style={{ transitionDelay: visible ? `${index * 60}ms` : "0ms" }}
                >
                  {/* Header — always visible, click to toggle */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center gap-5 px-4 py-5 text-left group cursor-pointer"
                  >
                    {/* Index number */}
                    <span className={`
                      shrink-0 font-mono text-xs font-bold tracking-widest
                      bg-gradient-to-r ${accent} bg-clip-text text-transparent
                      transition-opacity duration-300
                      ${isOpen ? "opacity-100" : "opacity-60 group-hover:opacity-90"}
                    `}>
                      {nodeNum}
                    </span>

                    {/* Role + company */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                        <h3 className={`
                          font-bold text-xl leading-tight transition-colors duration-300
                          ${isOpen ? "text-white" : "text-slate-200 group-hover:text-white"}
                        `}>
                          {role}
                        </h3>
                        {company && (
                          <span className={`
                            text-xs font-semibold tracking-[0.14em] uppercase transition-colors duration-300
                            ${isOpen ? "text-purple-300" : "text-slate-300 group-hover:text-slate-200"}
                          `}>
                            {company}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Date */}
                    <span className={`
                      shrink-0 font-mono text-xs tracking-widest hidden sm:block
                      transition-colors duration-300
                      ${isOpen ? "text-purple-300" : "text-slate-300 group-hover:text-slate-200"}
                    `}>
                      {exp.date}
                    </span>

                    {/* Chevron */}
                    <ChevronDown
                      className={`shrink-0 w-4 h-4 transition-all duration-300
                        ${isOpen ? "rotate-180 text-purple-400" : "text-slate-300 group-hover:text-white"}
                      `}
                      strokeWidth={2}
                    />
                  </button>

                  {/* Expandable content */}
                  <div className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="px-4 pb-6 pl-14">
                      {/* Accent line */}
                      <div className={`h-px w-full bg-gradient-to-r ${accent} opacity-20 mb-5`} />

                      <div className="sm:flex sm:gap-10">
                        {/* Tasks */}
                        <ul className="space-y-2.5 flex-1 mb-5 sm:mb-0">
                          {exp.tasks.map((task, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <ChevronRight
                                className="shrink-0 w-3.5 h-3.5 text-purple-400 mt-[3px]"
                                strokeWidth={2.5}
                                aria-hidden
                              />
                              <span className="text-slate-200 text-base leading-relaxed">{task}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech */}
                        <div className="sm:w-48 shrink-0">
                          <p className="text-[10px] font-mono tracking-[0.15em] uppercase text-slate-400 mb-2">Stack</p>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.tech.map((t) => (
                              <span
                                key={t}
                                className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-purple-500/10 text-purple-300/80 border border-purple-500/20"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
