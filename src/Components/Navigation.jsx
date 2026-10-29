import React, { useState, useEffect } from "react";
import { Home, Code, Briefcase, Mail } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageMenu } from "./LanguageMenu";
import { ThemeToggle } from "./ThemeToggle";
import { buttonPrimary } from "./Section";
import "../Styles/logo.css";

const sections = [
  { id: "home", icon: Home },
  { id: "projects", icon: Code },
  { id: "experience", icon: Briefcase },
  { id: "contact", icon: Mail },
];

const bar = "bg-surface/80 backdrop-blur-xl border border-line shadow-lg shadow-black/5";

export function Navigation() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers = sections.map((sec) => {
      const el = document.getElementById(sec.id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(sec.id);
        },
        // Active when the section crosses the middle of the viewport,
        // so tall sections still register.
        { rootMargin: "-45% 0px -50% 0px" },
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <>
      <nav className="hidden md:block fixed inset-x-0 top-6 z-50">
        {/* Same side margins as the page sections so the nav lines up with the content */}
        <div className="px-12 lg:px-[120px]">
          <div className="max-w-7xl mx-auto flex items-center gap-3">
            {/* Page navigation */}
            <div className={`flex-1 min-w-0 h-16 flex items-center gap-3 pl-6 pr-2 rounded-full ${bar}`}>
              <a
                href="#home"
                aria-label="Clorostica"
                className="logo shrink-0 font-display font-bold text-2xl"
              >
                {"Clorostica".split("").map((letter, i) => (
                  <span key={i} aria-hidden className="logo-letter" style={{ "--i": i }}>
                    {letter}
                  </span>
                ))}
              </a>
              <div className="flex flex-1 min-w-0 items-center justify-evenly gap-1 px-2">
                {sections
                  .filter((sec) => sec.id !== "contact")
                  .map((sec) => {
                    const Icon = sec.icon;
                    const isActive = activeSection === sec.id;
                    return (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        title={t.nav[sec.id]}
                        aria-current={isActive ? "true" : undefined}
                        className={`flex items-center gap-2 font-medium text-base 2xl:text-[17px] whitespace-nowrap px-3 2xl:px-4 py-2 rounded-full transition-colors duration-200 ${
                          isActive
                            ? "text-accent bg-accent-soft"
                            : "text-muted hover:text-fg"
                        }`}
                      >
                        <Icon size={18} aria-hidden className="shrink-0" />
                        <span className="hidden xl:inline">{t.nav[sec.id]}</span>
                      </a>
                    );
                  })}
              </div>
            </div>

            {/* Settings live apart from the page links */}
            <div className={`shrink-0 h-16 flex items-center gap-1 px-2 rounded-full ${bar}`}>
              <ThemeToggle className="w-12 h-12 rounded-full hover:bg-accent-soft" />
              <LanguageMenu
                iconSize={20}
                className="w-12 h-12 rounded-full hover:bg-accent-soft"
              />
            </div>
            <a
              href="#contact"
              className={`${buttonPrimary} shrink-0 h-14 px-6 2xl:px-7 text-base 2xl:text-[17px]`}
            >
              {t.projects.ctaButton}
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile: every section as an icon, spread across the full width */}
      <nav className="md:hidden fixed inset-x-0 top-0 z-50 bg-bg/90 backdrop-blur-xl border-b border-line">
        <div className="flex h-16 items-center justify-between px-1">
          {sections.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeSection === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                aria-label={t.nav[sec.id]}
                aria-current={isActive ? "true" : undefined}
                className="flex flex-1 items-center justify-center h-12"
              >
                <span
                  className={`flex items-center justify-center w-11 h-11 rounded-2xl transition-colors duration-200 ${
                    isActive ? "bg-accent-soft text-accent" : "text-muted"
                  }`}
                >
                  <Icon size={22} strokeWidth={isActive ? 2.4 : 2} aria-hidden />
                </span>
              </a>
            );
          })}
          <span className="w-px h-7 bg-line mx-0.5" aria-hidden />
          <ThemeToggle iconSize={22} className="flex-1 h-12 rounded-2xl" />
          <LanguageMenu iconSize={22} className="flex-1 h-12 rounded-2xl" />
        </div>
      </nav>
    </>
  );
}
