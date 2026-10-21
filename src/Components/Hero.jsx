import React from "react";
import { CalendarClock, Download, Github, Languages, Linkedin } from "lucide-react";
import CV from "../Docs/ClaudiaSaez.pdf";
import CVDeutsch from "../Docs/Claudia_Saez_CV_Deutsch.pdf";
import portrait from "../assets/Img/yo.jpg";
import { useLanguage } from "../i18n/LanguageContext";
import { AboutIntro } from "./AboutIntro";
import { buttonPrimary, buttonSecondary } from "./Section";

const FACT_ICONS = [CalendarClock, Languages];

// Where each fact card sits around the photo (large screens only)
const FACT_POSITIONS = ["top-10 -left-12", "bottom-6 right-0 2xl:-right-10"];

const SOCIAL = [
  { href: "https://github.com/Clorostica", label: "GitHub", icon: Github },
  {
    href: "https://www.linkedin.com/in/claudia-saez-orostica-97221624b/",
    label: "LinkedIn",
    icon: Linkedin,
  },
];

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center px-5 sm:px-8 md:px-12 lg:px-[120px] pt-28 pb-16 md:pt-32"
    >
      <div className="hero-wash absolute inset-0 -z-0 pointer-events-none" aria-hidden />
      <div className="relative max-w-7xl w-full mx-auto">
        <div className="grid md:grid-cols-[1.15fr_1fr] gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                {t.hero.role}
              </p>
              <h1 className="font-display text-6xl sm:text-7xl xl:text-8xl 2xl:text-[7.5rem] font-extrabold tracking-tight leading-[0.95] text-fg">
                Claudia Saez
              </h1>

              <AboutIntro className="text-lg md:text-xl 2xl:text-2xl text-muted leading-relaxed max-w-2xl" />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonPrimary} px-6 py-3`}
              >
                <Download size={18} aria-hidden />
                {t.hero.resume}
              </a>
              <a
                href={CVDeutsch}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonSecondary} px-6 py-3`}
              >
                <Download size={18} aria-hidden />
                {t.hero.resumeDe}
              </a>
            </div>

            <ul className="flex gap-2">
              {SOCIAL.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="flex items-center justify-center w-11 h-11 rounded-full border border-line text-muted hover:text-accent hover:border-accent transition-colors duration-200"
                  >
                    <Icon size={20} aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative md:h-[500px] flex items-center justify-center">
            <div className="portrait">
              <img src={portrait} alt="Claudia Saez" width="352" height="352" />
            </div>
            {/* Experience at a glance, filling the space around the photo */}
            <ul className="hidden xl:block" aria-label={t.experience.title}>
              {t.hero.facts.map((fact, i) => {
                const Icon = FACT_ICONS[i];
                return (
                  <li
                    key={fact.label}
                    className={`absolute z-10 flex items-center gap-3 pl-3 pr-5 py-3 rounded-2xl border border-line bg-surface/90 backdrop-blur-xl shadow-xl shadow-black/5 ${FACT_POSITIONS[i]}`}
                  >
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-soft text-accent">
                      <Icon size={20} aria-hidden />
                    </span>
                    <span className="leading-tight">
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-2">
                        {fact.label}
                      </span>
                      <span className="block text-base font-semibold text-fg">
                        {fact.value}
                      </span>
                      <span className="block text-sm text-muted">
                        {fact.detail}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
