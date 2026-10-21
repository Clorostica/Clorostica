import React from "react";
import { Certificates } from "./Components/Certificates";
import { ContactMe } from "./Components/ContactMe";
import { Navigation } from "./Components/Navigation";
import { Projects } from "./Components/Projects";
import { Experience } from "./Components/Experience";
import { Hero } from "./Components/Hero";
import "./Styles/index.css";
import { useLanguage } from "./i18n/LanguageContext";

export default function App() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-bg text-fg transition-colors duration-300">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Certificates />
        <ContactMe />
      </main>
      <footer className="px-5 py-10 border-t border-line text-center text-sm text-subtle">
        {t.footer}
      </footer>
    </div>
  );
}
