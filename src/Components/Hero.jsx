import React from "react";
import {
  CalendarClock,
  Download,
  Github,
  Languages,
  Linkedin,
  Sparkles,
} from "lucide-react";
import CV from "../Docs/ClaudiaSaez.pdf";
import CVDeutsch from "../Docs/Claudia_Saez_CV_Deutsch.pdf";
import { useLanguage } from "../i18n/LanguageContext";
import { AboutHighlights, AboutIntro } from "./About";

const FACT_ICONS = [CalendarClock, Languages];

// Where each fact card sits around the photo (large screens only)
const FACT_POSITIONS = ["top-10 -left-12", "bottom-6 right-0 2xl:-right-10"];

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[100svh] md:min-h-[calc(100svh-7rem)] flex items-center justify-center px-4 md:px-6 pt-24 pb-10 md:pt-0 md:pb-16"
    >
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-[1.15fr_1fr] gap-8 md:gap-12 items-center">
          <div className="space-y-6 z-10">
            <div className="space-y-4 md:space-y-2">
              <p className="text-sm uppercase tracking-wider flex items-center gap-2">
                <Sparkles size={16} /> {t.hero.role}
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold leading-[1.05]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                  C
                </span>
                laudia&nbsp;
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                  S
                </span>
                aez
              </h1>

              <p className="xl:hidden text-lg md:text-xl text-white leading-relaxed md:min-h-[4rem]">
                {t.hero.typed}
              </p>
              {/* Large screens: the About intro replaces the tagline */}
              <AboutIntro className="hidden xl:block pt-2 text-2xl text-white leading-snug max-w-2xl" />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:brightness-110 transition-[filter] duration-300"
              >
                <Download size={18} aria-hidden />
                {t.hero.resume}
              </a>
              <a
                href={CVDeutsch}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-purple-500 hover:shadow-xl"
              >
                <Download size={18} aria-hidden />
                {t.hero.resumeDe}
              </a>
              <a
                href="https://github.com/Clorostica"
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden sm:flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-purple-500 hover:shadow-xl"
              >
                <Github size={18} aria-hidden />
                GitHub
              </a>
            </div>

            <div className="flex gap-4 pt-1 md:pt-4">
              <a
                href="https://github.com/Clorostica"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/claudia-saez-orostica-97221624b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="relative py-2 md:py-0 md:h-[500px] flex items-center justify-center">
            <div className="drop-shadow-div blob"></div>
            {/* Experience at a glance, filling the space around the photo */}
            <ul className="hidden xl:block" aria-label={t.experience.title}>
              {t.hero.facts.map((fact, i) => {
                const Icon = FACT_ICONS[i];
                return (
                  <li
                    key={fact.label}
                    className={`absolute z-10 flex items-center gap-3 pl-3 pr-5 py-3 rounded-2xl border border-slate-700/70 bg-slate-950/75 backdrop-blur-xl shadow-xl shadow-purple-950/40 ${FACT_POSITIONS[i]}`}
                  >
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-500/15 text-purple-300">
                      <Icon size={20} aria-hidden />
                    </span>
                    <span className="leading-tight">
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-pink-300">
                        {fact.label}
                      </span>
                      <span className="block text-base font-semibold text-white">
                        {fact.value}
                      </span>
                      <span className="block text-sm text-slate-400">
                        {fact.detail}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <AboutHighlights className="hidden xl:grid mt-16" />
      </div>
    </section>
  );
}
