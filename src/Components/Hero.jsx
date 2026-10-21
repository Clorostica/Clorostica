import React from "react";
import { Download, Github, Linkedin, Sparkles } from "lucide-react";
import CV from "../Docs/ClaudiaSaez.pdf";
import CVDeutsch from "../Docs/Claudia_Saez_CV_Deutsch.pdf";
import { useLanguage } from "../i18n/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center px-4 md:px-6 pt-24 pb-10 md:py-0"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-[1.15fr_1fr] gap-8 md:gap-12 items-center">
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

            <p className="text-lg md:text-xl xl:text-2xl text-white leading-relaxed md:min-h-[4rem]">
              {t.hero.typed}
            </p>
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
        </div>
      </div>
    </section>
  );
}
