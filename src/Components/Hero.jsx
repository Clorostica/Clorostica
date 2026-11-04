import React from "react";
import { Download, Github, Linkedin } from "lucide-react";
import CV from "../Docs/ClaudiaSaez.pdf";
import CVDeutsch from "../Docs/Claudia_Saez_CV_Deutsch.pdf";
import portrait from "../assets/Img/yo.jpg";
import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "../theme/ThemeContext";
import DarkVeil from "./DarkVeil/DarkVeil";
import { AboutIntro } from "./AboutIntro";
import { buttonPrimary, buttonSecondary } from "./Section";

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
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center px-5 sm:px-8 md:px-12 lg:px-[120px] pt-28 pb-16 md:pt-32"
    >
      {/* Animated veil behind the hero, fading into the page below */}
      <div className="hero-veil absolute inset-0 pointer-events-none" aria-hidden>
        <DarkVeil
          color="#7c3aed"
          speed={0.4}
          brightness={theme === "light" ? 1 : 1.4}
          glow={0.8}
          sheen={0.6}
          lightMode={theme === "light"}
          opacity={theme === "light" ? 0.45 : 0.85}
        />
      </div>
      {/* Scrim so the copy stays readable over the veil */}
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-r from-bg/80 via-bg/40 to-transparent"
        aria-hidden
      />
      <div className="relative max-w-7xl w-full mx-auto">
        <div className="grid md:grid-cols-[1.15fr_1fr] gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="font-mono text-sm md:text-base text-accent">
                {t.hero.role}
              </p>
              <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] text-fg">
                Claudia Orostica
              </h1>

              <AboutIntro />
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
              <img src={portrait} alt="Claudia Orostica" width="352" height="352" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
