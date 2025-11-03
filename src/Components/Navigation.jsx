import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { GlitchLink } from "./GlitchLink";

const sections = [
  "Home",
  "About",
  "Projects",
  "Experience",
  "Certificates",
  "Contact",
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      // Desktop hide/show, mobile always visible
      if (window.innerWidth >= 768) {
        setShowNav(currentY < lastScrollY || currentY < 50);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);

    const observers = sections.map((sec) => {
      const el = document.getElementById(sec.toLowerCase());
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(sec);
        },
        { threshold: 0.6 }
      );
      observer.observe(el);
      return observer;
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((obs) => obs?.disconnect());
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        showNav
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10 md:opacity-0 md:-translate-y-10"
      }`}
    >
      <div className="max-w-[var(--max-width)] mx-auto flex justify-between items-center gap-6 px-6 py-2">
        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          {sections.map((sec) => (
            <GlitchLink
              key={sec}
              href={`#${sec.toLowerCase()}`}
              className={`font-semibold text-lg transition-colors ${
                activeSection === sec
                  ? "text-purple-400"
                  : "text-slate-300 hover:text-purple-400"
              }`}
              glitchSpeed={10}
              glitchIntensity={3}
            >
              {sec}
            </GlitchLink>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-purple-400 transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile overlay con fondo semitransparente */}
          <div
            className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 flex flex-col gap-3 bg-slate-900/90 backdrop-blur-lg rounded-xl p-4 transition-all duration-500 ${
              isMenuOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {sections.map((sec, i) => (
              <GlitchLink
                key={sec}
                href={`#${sec.toLowerCase()}`}
                className={`font-medium text-slate-200 transition-colors ${
                  activeSection === sec
                    ? "text-purple-400"
                    : "hover:text-purple-400"
                }`}
                glitchSpeed={15}
                glitchIntensity={4}
                style={{ transitionDelay: `${i * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {sec}
              </GlitchLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
