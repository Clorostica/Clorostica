import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { GlitchLink } from "./GlitchLink";
import GlassSurface from "./GlassSurface";

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
      className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 top-4 md:top-6 ${
        showNav
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10 md:opacity-0 md:-translate-y-10"
      }`}
    >
      <div className="max-w-[var(--max-width)] mx-auto px-4 md:px-6 py-2">
        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden md:block">
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
              <GlitchLink
                key={sec}
                href={`#${sec.toLowerCase()}`}
                className={`pr-10 font-semibold text-lg transition-colors ${
                  activeSection === sec
                    ? "text-purple-400"
                    : "text-slate-300 hover:text-purple-400"
                }`}
              >
                {sec}
              </GlitchLink>
            ))}
          </GlassSurface>
        </div>
        {/* ================= MOBILE MENU ================= */}
        <div className="md:hidden relative flex flex-col items-center">
          <GlassSurface
            width={56}
            height={56}
            borderRadius={28}
            borderWidth={0.07}
            brightness={50}
            opacity={0.93}
            blur={11}
            className="flex items-center justify-center"
          >
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-lg text-slate-300 hover:text-purple-400 transition-colors active:scale-95"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </GlassSurface>

          {isMenuOpen && (
            <div className="w-full flex justify-center mt-4">
              <GlassSurface
                width="90%"
                height="auto"
                borderRadius={20}
                borderWidth={0.07}
                brightness={50}
                opacity={0.93}
                blur={11}
                className="flex flex-col items-center gap-6 p-6"
                style={{ minHeight: "fit-content" }}
              >
                {sections.map((sec, i) => (
                  <GlitchLink
                    key={sec}
                    href={`#${sec.toLowerCase()}`}
                    className={`block w-full text-center font-medium text-base py-2 text-slate-200 transition-colors ${
                      activeSection === sec
                        ? "text-purple-400"
                        : "hover:text-purple-400"
                    }`}
                    glitchSpeed={15}
                    glitchIntensity={4}
                    style={{
                      transitionProperty: "color",
                      transitionDuration: "0.3s",
                      transitionDelay: `${i * 50}ms`,
                    }}
                    onClick={async () => {
                      await new Promise((resolve) => setTimeout(resolve, 500));
                      setIsMenuOpen(false);
                    }}
                  >
                    {sec}
                  </GlitchLink>
                ))}
              </GlassSurface>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
