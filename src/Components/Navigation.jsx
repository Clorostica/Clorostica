import React, { useState, useEffect } from "react";
import { Home, User, Code, Briefcase, Award, Mail } from "lucide-react";
import GlassSurface from "./GlassSurface";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageMenu } from "./LanguageMenu";
import "../Styles/logo.css";

const sections = [
  { id: "home", icon: Home },
  { id: "projects", icon: Code },
  { id: "about", icon: User },
  { id: "experience", icon: Briefcase },
  { id: "certificates", icon: Award },
  { id: "contact", icon: Mail },
];

// Dark tint behind the glass so text scrolling underneath stays calm
const GLASS_TINT = "rgba(12, 10, 28, 0.55)";

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

  const logo = (className) => (
    <a
      href="#home"
      aria-label="Clorostica"
      className={`logo shrink-0 font-semibold ${className}`}
      style={{ fontFamily: '"Instrument Sans", sans-serif' }}
    >
      {"Clorostica".split("").map((letter, i) => (
        <span key={i} aria-hidden className="logo-letter" style={{ "--i": i }}>
          {letter}
        </span>
      ))}
    </a>
  );

  const ctaClass =
    "shrink-0 inline-flex items-center rounded-full font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-900/30 hover:brightness-110 hover:shadow-pink-500/30 transition-[filter,box-shadow] duration-300";

  return (
    <>
      <nav className="hidden md:block fixed left-1/2 -translate-x-1/2 z-50 top-6 w-full">
        {/* Same side margins as the page sections so the nav lines up with the content */}
        <div className="w-full px-4 lg:px-[120px] py-2">
          <div className="max-w-7xl mx-auto w-full flex items-center gap-3">
            {/* Page navigation */}
            <GlassSurface
              width="100%"
              height={68}
              borderRadius={34}
              borderWidth={0.07}
              brightness={50}
              opacity={0.93}
              blur={11}
              className="flex-1 flex items-center justify-between gap-3 pl-5 pr-2 py-0"
              style={{ minWidth: 0, background: GLASS_TINT }}
            >
              {logo("text-[28px]")}
              <div className="flex flex-1 min-w-0 items-center justify-evenly gap-2 px-4">
                {sections
                  .filter((sec) => sec.id !== "contact")
                  .map((sec) => {
                    const Icon = sec.icon;
                    const isActive = activeSection === sec.id;
                    // About lives in the hero on large screens
                    return (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        title={t.nav[sec.id]}
                        aria-current={isActive ? "true" : undefined}
                        className={`${sec.id === "about" ? "xl:hidden " : ""}group flex items-center gap-1.5 font-medium text-base 2xl:text-[17px] transition-colors whitespace-nowrap px-3 2xl:px-4 py-2.5 rounded-full ${
                          isActive
                            ? "text-purple-300 bg-purple-500/15"
                            : "text-slate-300 hover:text-purple-300"
                        }`}
                      >
                        <Icon
                          size={19}
                          strokeWidth={isActive ? 2.4 : 2}
                          className="shrink-0"
                          aria-hidden
                        />
                        <span className="hidden xl:inline">
                          {t.nav[sec.id]}
                        </span>
                      </a>
                    );
                  })}
              </div>
            </GlassSurface>

            {/* Actions live apart from the page links */}
            <GlassSurface
              width={68}
              height={68}
              borderRadius={34}
              borderWidth={0.07}
              brightness={50}
              opacity={0.93}
              blur={11}
              className="shrink-0"
              style={{ background: GLASS_TINT }}
            >
              <LanguageMenu
                iconSize={22}
                className="w-12 h-12 rounded-full hover:bg-purple-500/15"
              />
            </GlassSurface>
            <a
              href="#contact"
              className={`${ctaClass} h-14 2xl:h-[60px] px-6 2xl:px-7 text-base 2xl:text-[17px]`}
            >
              {t.projects.ctaButton}
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile: every section as an icon, spread across the full width */}
      <nav className="md:hidden fixed inset-x-0 top-0 z-50 bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80">
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
                  className={`flex items-center justify-center w-12 h-12 rounded-2xl transition-colors duration-300 ${
                    isActive
                      ? "bg-purple-500/20 text-purple-300"
                      : "text-slate-300 active:bg-purple-500/10"
                  }`}
                >
                  <Icon
                    size={24}
                    strokeWidth={isActive ? 2.4 : 2}
                    aria-hidden
                  />
                </span>
              </a>
            );
          })}
          <LanguageMenu iconSize={24} className="flex-1 h-12 rounded-2xl" />
        </div>
      </nav>

      <div className="hidden md:block h-16"></div>
    </>
  );
}
