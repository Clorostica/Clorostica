import React from "react";
import { Certificates } from "./Components/Certificates";
import { ContactMe } from "./Components/ContactMe";
import { Navigation } from "./Components/Navigation";
import { Projects } from "./Components/Projects";
import { Experience } from "./Components/Experience";
import { Hero } from "./Components/Hero";
import { About } from "./Components/About";
import "./Styles/index.css";
import { useLanguage } from "./i18n/LanguageContext";

export default function App() {
  const { t } = useLanguage();
  return (
    <div style={{ width: "100%", minHeight: "100vh", position: "relative" }}>
      <div
        style={{ position: "relative", zIndex: 1 }}
        className="px-2 md:px-16 lg:px-24 md:pt-12"
      >
        <Navigation />
        <Hero className="py-8 md:py-24" />
        <Projects className="py-8 md:py-24" />
        <About className="py-8 md:py-24" />
        <Experience className="py-8 md:py-24" />
        <Certificates className="py-8 md:py-24" />
        <ContactMe className="py-8 md:py-24" />
        <footer className="relative py-8 px-10 md:px-16 lg:px-24 border-t border-slate-800">
          <div className="max-w-7xl mx-auto text-center text-white">
            <p>{t.footer}</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
