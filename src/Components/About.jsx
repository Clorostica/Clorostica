import React, { useState, useEffect, useRef } from "react";
import { Rocket, Palette, Layers } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const HIGHLIGHT_ICONS = [Rocket, Palette, Layers];

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
    <div className="main_container">
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
          <p className="text-xl md:text-2xl text-white leading-snug max-w-3xl">
            {t.about.intro.pre}
            <span className="text-pink-400 font-medium">
              {t.about.intro.role}
            </span>
            {t.about.intro.mid}
            <span className="text-purple-400 font-medium">
              {t.about.intro.city}
            </span>
            {t.about.intro.post}
          </p>

          <ul className="grid md:grid-cols-3 gap-4 mt-8">
            {t.about.highlights.map((item, i) => {
              const Icon = HIGHLIGHT_ICONS[i];
              return (
                <li
                  key={i}
                  className="flex gap-3 p-5 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-lg"
                >
                  <Icon
                    size={22}
                    className="shrink-0 mt-0.5 text-pink-400"
                    aria-hidden
                  />
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed mt-1">
                      {item.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
