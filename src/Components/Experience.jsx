import { useEffect, useRef, useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import "../Styles/index.css";
import "../Styles/styles.css";
import { useLanguage } from "../i18n/LanguageContext";

const ACCENTS = [
  "from-purple-500 to-pink-500",
  "from-indigo-400 to-purple-500",
  "from-pink-500 to-purple-600",
  "from-violet-500 to-indigo-400",
  "from-pink-400 to-rose-500",
  "from-purple-400 to-violet-500",
];

export function Experience() {
  const { t } = useLanguage();
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

  const experienceMeta = [
    { date: "2025", tech: ["React", "Next.js", "TypeScript", "NextAuth", "Git", "Vercel"] },
    { date: "2023 – 2025", tech: ["React", "Next.js", "TypeScript", "Tailwind", "Figma", "NextAuth", "Webflow", "Git", "Vercel"] },
    { date: "2021 – 2023", tech: ["React", "JavaScript", "Node.js", "JSON", "REST APIs", "CSS"] },
    { date: "2020 – 2021", tech: ["WordPress", "Adobe XD", "Git & GitHub", "Postman", "Illustrator", "Photoshop"] },
    { date: "2019 – 2020", tech: ["Illustrator", "Photoshop", "Canva", "Figma"] },
    { date: "2019", tech: ["Figma", "Elementor", "WordPress", "InDesign", "Google Analytics"] },
  ];
  const experiences = t.experience.items.map((item, i) => ({ ...item, ...experienceMeta[i] }));

  return (
    <div className="main_container">
      <section id="experience" className="relative py-16 md:py-24 -mx-2 md:-mx-16 lg:-mx-24 px-5 sm:px-8 md:px-[88px] lg:px-[120px] section-experience" ref={sectionRef}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] pb-1 mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {t.experience.title}
          </h2>
          <p className="text-white mb-12 text-base">
            {t.experience.subtitle}
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
                    className="w-full flex items-center gap-3 sm:gap-5 px-4 py-5 text-left group cursor-pointer"
                  >
                    {/* Index number */}
                    <span className={`
                      shrink-0 font-mono text-xs font-bold tracking-widest
                      bg-gradient-to-r ${accent} bg-clip-text text-transparent clip-text-gpu
                      transition-[filter] duration-300
                      ${isOpen ? "[filter:brightness(1)]" : "[filter:brightness(0.55)] group-hover:[filter:brightness(0.85)]"}
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
                    <div className="px-4 pb-6 sm:pl-14">
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
                          <p className="text-[10px] font-mono tracking-[0.15em] uppercase text-slate-400 mb-2">{t.experience.stack}</p>
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
