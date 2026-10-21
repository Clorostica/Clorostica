import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../i18n/LanguageContext";

// Shared with the hero, which shows them on large screens
export function AboutIntro({ className = "" }) {
  const { t } = useLanguage();
  return (
    <p className={className}>
      {t.about.intro.pre}
      <span className="text-pink-400 font-medium">{t.about.intro.role}</span>
      {t.about.intro.mid}
      <span className="text-purple-400 font-medium">{t.about.intro.city}</span>
      {t.about.intro.post}
    </p>
  );
}

export function AboutHighlights({ className = "" }) {
  const { t } = useLanguage();
  return (
    <ul className={`grid md:grid-cols-3 gap-x-10 gap-y-6 ${className}`}>
      {t.about.highlights.map((item) => (
        <li key={item.title} className="border-t border-slate-600/60 pt-4">
          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-1.5 text-base text-slate-300 leading-relaxed">
            {item.text}
          </p>
        </li>
      ))}
    </ul>
  );
}

export function About() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="main_container xl:hidden">
      <section
        id="about"
        className="relative py-16 md:py-24 px-3 sm:px-6"
        ref={sectionRef}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] pb-1 mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-500 [will-change:opacity,transform] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {t.about.title}
          </h2>
          <AboutIntro className="text-xl md:text-2xl text-white leading-snug max-w-3xl" />

          <AboutHighlights className="mt-8" />
        </div>
      </section>
    </div>
  );
}
