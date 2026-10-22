import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Section, SectionHeader } from "./Section";

const experienceMeta = [
  { date: "2025", tech: ["React", "Next.js", "TypeScript", "NextAuth", "Git", "Vercel"] },
  { date: "2023 – 2025", tech: ["React", "Next.js", "TypeScript", "Tailwind", "Figma", "NextAuth", "Webflow", "Git", "Vercel"] },
  { date: "2021 – 2023", tech: ["React", "JavaScript", "Node.js", "JSON", "REST APIs", "CSS"] },
  { date: "2020 – 2021", tech: ["WordPress", "Adobe XD", "Git & GitHub", "Postman", "Illustrator", "Photoshop"] },
  { date: "2019 – 2020", tech: ["Illustrator", "Photoshop", "Canva", "Figma"] },
  { date: "2019", tech: ["Figma", "Elementor", "WordPress", "InDesign", "Google Analytics"] },
];

export function Experience() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);
  const experiences = t.experience.items.map((item, i) => ({ ...item, ...experienceMeta[i] }));

  return (
    <Section id="experience">
      <SectionHeader
        eyebrow={t.experience.eyebrow}
        title={t.experience.title}
        subtitle={t.experience.subtitle}
      />

      <div className="border-t border-line">
        {experiences.map((exp, index) => {
          const isOpen = openIndex === index;
          const parts = exp.title.split(/\s*[-–]\s*/);
          const role = parts[0]?.trim() ?? exp.title;
          const company = parts.slice(1).join(" – ").trim() || null;
          const panelId = `experience-panel-${index}`;

          return (
            <div
              key={index}
              className={`border-b border-line transition-colors duration-200 ${
                isOpen ? "bg-surface" : "hover:bg-surface/50"
              }`}
            >
              {/* Header, always visible, click to toggle */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full flex items-center gap-3 sm:gap-5 px-4 py-5 text-left group"
              >
                <span
                  className={`shrink-0 font-mono text-xs font-bold tracking-widest ${
                    isOpen ? "text-accent" : "text-subtle"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex-1 min-w-0 flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                  <h3 className="font-display font-semibold text-lg md:text-xl tracking-tight leading-tight text-fg">
                    {role}
                  </h3>
                  {company && (
                    <span
                      className={`text-xs font-semibold tracking-[0.14em] uppercase ${
                        isOpen ? "text-accent" : "text-muted"
                      }`}
                    >
                      {company}
                    </span>
                  )}
                </div>

                <span className="shrink-0 font-mono text-xs tracking-widest hidden sm:block text-muted">
                  {exp.date}
                </span>

                <ChevronDown
                  className={`shrink-0 w-4 h-4 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-accent" : "text-muted group-hover:text-fg"
                  }`}
                  strokeWidth={2}
                  aria-hidden
                />
              </button>

              {/* Expandable content */}
              <div
                id={panelId}
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-7 sm:pl-14 sm:flex sm:gap-10">
                  <ul className="space-y-2.5 flex-1 mb-5 sm:mb-0">
                    {exp.tasks.map((task, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ChevronRight
                          className="shrink-0 w-3.5 h-3.5 text-accent mt-[5px]"
                          strokeWidth={2.5}
                          aria-hidden
                        />
                        <span className="text-fg/90 text-base leading-relaxed">{task}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="sm:w-52 shrink-0">
                    <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-subtle mb-2">
                      {t.experience.stack}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((name) => (
                        <span
                          key={name}
                          className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-soft text-accent"
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
