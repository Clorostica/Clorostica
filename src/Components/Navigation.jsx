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
        { threshold: 0.6 },
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
      <nav
        className={`hidden md:block fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 top-6 w-full ${
          showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <div className="w-full px-4 md:px-6 py-2">
          <div className="max-w-[800px] mx-auto w-full">
            <GlassSurface
            width="100%"
            height={60}
            borderRadius={30}
            borderWidth={0.07}
            brightness={50}
            opacity={0.93}
            blur={11}
            className="flex items-center justify-between pl-5 pr-2 py-0"
            style={{ minWidth: 0 }}
          >
            <a
              href="#home"
              className="shrink-0 font-semibold text-[26px] text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 hover:from-purple-200 hover:to-pink-200 transition-all"
              style={{ fontFamily: '"Instrument Sans", sans-serif' }}
            >
              Clorostica
            </a>
            <div className="flex-1 min-w-0" />
            <div className="flex items-center justify-center gap-1 shrink-0">
              {sections
                .filter((sec) => sec.name !== "Contact")
                .map((sec) => (
                  <a
                    key={sec.name}
                    href={`#${sec.name.toLowerCase()}`}
                    className={`font-normal text-base transition-colors whitespace-nowrap px-2 py-2 ${
                      activeSection === sec.name
                        ? "text-purple-400"
                        : "text-slate-300 hover:text-purple-400"
                    }`}
                  >
                    {sec.name}
                  </a>
                ))}
            </div>
            <div className="flex-1 min-w-0" />
            <a
              href="#contact"
              className={`shrink-0 px-6 py-2.5 rounded-full font-semibold text-base transition-all duration-300 border ${
                activeSection === "Contact"
                  ? "bg-purple-500/30 text-purple-400 border-purple-500/50"
                  : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:border-purple-500 hover:text-white"
              }`}
            >
              Contact
            </a>
          </GlassSurface>
        </div>
        </div>
      </nav>

      <nav
        className={`md:hidden fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 top-6 ${
          showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <GlassSurface
          width="85vw"
          height={68}
          borderRadius={34}
          borderWidth={0.07}
          brightness={50}
          opacity={0.93}
          blur={11}
          className="flex items-center justify-around px-3"
          style={{ minWidth: 0 }}
        >
          {sections.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeSection === sec.name;

            return (
              <a
                key={sec.name}
                href={`#${sec.name.toLowerCase()}`}
                className="relative flex flex-col items-center justify-center group flex-shrink-0"
                style={{ width: "46px", height: "56px" }}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(
                    sec.name.toLowerCase(),
                  );
                  if (target) {
                    const y =
                      target.getBoundingClientRect().top +
                      window.scrollY -
                      120;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
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

                <Icon
                  size={24}
                  className={`relative z-10 transition-all duration-300 ${
                    isActive
                      ? "text-purple-400 scale-110"
                      : "text-slate-400 group-hover:text-purple-300 group-hover:scale-105"
                  }`}
                  strokeWidth={isActive ? 2.5 : 2}
                />

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

      <div className="h-16"></div>
    </>
  );
}
