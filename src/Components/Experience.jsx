import { useEffect } from "react";
import { ChevronRight, Calendar } from "lucide-react";
import "../Styles/index.css";
import "../Styles/styles.css";

export function Experience() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => el.classList.add("active"));
  }, []);

  const experiences = [
    {
      title: "Software Developer - Fractal Development",
      date: "2025",
      tasks: [
        "Worked on blockchain-based web solutions, integrating smart contracts with React and Node.js applications",
        "Improved App performance and enhanced user experience",
        "Collaborated with clients to define technical requirements propose solutions, and maintain scalable, maintainable codebases",
      ],
      tech: ["React", "Next.js", "TypeScript", "NextAuth", "Git", "Vercel"],
    },

    {
      title: "Frontend Developer - Freelancer",
      date: "2023 - 2025",
      tasks: [
        "Built responsive UIs using React, Next.js, and Tailwind CSS.",
        "Translated Figma and Adobe XD designs into modular, reusable components.",
        "Developed front-end features with TypeScript and integrated APIs with Axios.",
        "Implemented authentication flows using Auth0 and NextAuth.",
        "Delivered client-ready websites via Webflow and WordPress.",
      ],
      tech: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Figma",
        "NextAuth",
        "Webflow",
        "Git",
        "Vercel",
      ],
    },
    {
      title: "Frontend Developer – JFX",
      date: "2021 – 2023",
      tasks: [
        "Designed and implemented dynamic, responsive user interfaces using React for internal tools used by account executives.",
        "Developed interactive dashboards, simulators, and real-time customer management interfaces to streamline daily banking workflows.",
        "Integrated RESTful APIs and internal services using JSON data structures for efficient data handling.",
        "Collaborated with backend teams using Node.js-based services to ensure smooth data flow and optimized performance.",
        "Worked closely with Banco de Chile to meet strict accessibility, performance, and usability standards.",
      ],
      tech: ["React", "JavaScript", "Node.js", "JSON", "REST APIs", "CSS"],
    },
    {
      title: "Web Designer - Kreativlab",
      date: "2020 - 2021",
      tasks: [
        "Developed UI mockups and prototypes to visualize design solutions.",
        "Illustrated design ideas using storyboards, process flows, and sitemaps.",
        "Identified and resolved UX issues to improve user experience.",
        "Designed and conducted usability tests to validate design alternatives.",
      ],
      tech: [
        "WordPress",
        "Adobe XD",
        "Git & GitHub",
        "Postman",
        "Illustrator",
        "Photoshop",
      ],
    },
    {
      title: "Graphic Designer - CREA7IVE",
      date: "2019 - 2020",
      tasks: [
        "Created original graphic concepts based on user research and analysis.",
        "Collaborated across departments to improve user experience.",
        "Produced low to high-fidelity wireframes and prototypes.",
        "Iterated designs using user feedback and data-driven decisions.",
      ],
      tech: ["Illustrator", "Photoshop", "Canva", "Figma"],
    },
    {
      title: "Web Designer - MAD AGENCY",
      date: "2019",
      tasks: [
        "Developed WordPress websites and marketing campaigns for an e-commerce startup.",
        "Created graphics, wrote copy, and managed email and social media campaigns.",
        "Oversaw projects from concept to launch, ensuring consistent online presence.",
      ],
      tech: ["Figma", "Elementor", "WordPress", "InDesign", "Google Analytics"],
    },
  ];

  return (
    <div className="main_container reveal">
      <section id="experience" className="scroll-mt-24 pt-22 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-white mb-12 text-base">
            Professional experience and key roles I’ve held across different
            companies and projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800 overflow-hidden transition-[transform,box-shadow,border-color] duration-300 ease-out hover:scale-105 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.4)] hover:border-purple-500/80"
              >
                <div className="p-6">
                  <div className="flex flex-wrap justify-between items-center gap-3 mb-4">
                    <div>
                      {(() => {
                        const parts = exp.title.split(/\s*[-–]\s*/);
                        const role = parts[0]?.trim() ?? exp.title;
                        const company =
                          parts.slice(1).join(" – ").trim() || null;
                        return (
                          <>
                            <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                              {role}
                            </h3>
                            {company && (
                              <p className="text-sm font-medium text-slate-400 mt-0.5 group-hover:text-purple-300/90 transition-colors">
                                {company}
                              </p>
                            )}
                          </>
                        );
                      })()}
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium border border-purple-500/30">
                      <Calendar className="w-4 h-4 shrink-0" strokeWidth={2} />
                      {exp.date}
                    </span>
                  </div>
                  <ul className="space-y-2.5 mb-4 text-white text-base list-none pl-0">
                    {exp.tasks.map((task, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ChevronRight
                          className="shrink-0 w-5 h-5 text-purple-400 mt-0.5"
                          strokeWidth={2.5}
                          aria-hidden
                        />
                        <span className="text-slate-200 leading-relaxed">
                          {task}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-8">
                    {exp.tech.map((tech) => (
                      <div
                        key={tech}
                        className="px-3 py-1 bg-purple-700/30 text-purple-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
