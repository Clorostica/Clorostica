import React, { useState, useEffect } from "react";
import { Home, User, Code, Briefcase, Award, Mail } from "lucide-react";
import GlassSurface from "./GlassSurface";

const sections = [
  { name: "Home", icon: Home },
  { name: "About", icon: User },
  { name: "Projects", icon: Code },
  { name: "Experience", icon: Briefcase },
  { name: "Certificates", icon: Award },
  { name: "Contact", icon: Mail },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("Home");
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (window.innerWidth >= 768) {
        setShowNav(currentY < lastScrollY || currentY < 50);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);

    const observers = sections.map((sec) => {
      const el = document.getElementById(sec.name.toLowerCase());
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(sec.name);
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
    <>
      {/* ================= DESKTOP MENU ================= */}
      <nav
        className={`hidden md:block fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 top-6 ${
          showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <div className="max-w-[var(--max-width)] mx-auto px-4 md:px-6 py-2">
          <GlassSurface
            width="auto"
            height={60}
            borderRadius={30}
            borderWidth={0.07}
            brightness={50}
            opacity={0.93}
            blur={11}
            className="flex items-center justify-center gap-12 px-10"
            style={{ minWidth: "fit-content" }}
          >
            {sections.map((sec) => (
              <a
                key={sec.name}
                href={`#${sec.name.toLowerCase()}`}
                className={`pr-10 font-semibold text-lg transition-colors ${
                  activeSection === sec.name
                    ? "text-purple-400"
                    : "text-slate-300 hover:text-purple-400"
                }`}
              >
                {sec.name}
              </a>
            ))}
          </GlassSurface>
        </div>
      </nav>

      {/* ================= MOBILE DOCK MENU ================= */}
      <nav
        className={`md:hidden fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 top-12 px-4 pb-16 w-full ${
          showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <GlassSurface
          width="100%"
          height={80}
          borderRadius={40}
          borderWidth={0.07}
          brightness={50}
          opacity={0.93}
          blur={11}
          className="flex items-center justify-around px-1"
        >
          {sections.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeSection === sec.name;

            return (
              <a
                key={sec.name}
                href={`#${sec.name.toLowerCase()}`}
                className="relative flex flex-col items-center justify-center group flex-shrink-0"
                style={{ width: "60px", height: "60px" }}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(
                    sec.name.toLowerCase()
                  );
                  if (target) {
                    const y =
                      target.getBoundingClientRect().top + window.scrollY - 120; // <-- OFFSET PARA QUE NO LO TAPE EL NAV

                    window.scrollTo({
                      top: y,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {/* Active background */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "bg-purple-500/20 scale-100 opacity-100"
                      : "bg-transparent scale-90 opacity-0 group-hover:bg-purple-500/10 group-hover:scale-95 group-hover:opacity-100"
                  }`}
                  style={{
                    backdropFilter: isActive ? "blur(8px)" : "none",
                  }}
                />

                {/* Icon */}
                <Icon
                  size={26}
                  className={`relative z-10 transition-all duration-300 ${
                    isActive
                      ? "text-purple-400 scale-110"
                      : "text-slate-400 group-hover:text-purple-300 group-hover:scale-105"
                  }`}
                  strokeWidth={isActive ? 2.5 : 2}
                />

                {/* Label */}
                <span
                  className={`absolute -bottom-9 text-xs font-medium px-2 py-1 rounded-lg transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? "opacity-100 translate-y-0 text-purple-300 bg-slate-800/80"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                  style={{ backdropFilter: "blur(8px)" }}
                >
                  {sec.name}
                </span>

                {/* Active dot */}
                <div
                  className={`absolute top-1 w-1 h-1 rounded-full bg-purple-400 transition-all duration-300 ${
                    isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                />
              </a>
            );
          })}
        </GlassSurface>
      </nav>
    </>
  );
}
