import React, { createContext, useContext, useEffect, useState } from "react";
import { LANGUAGES, translations } from "./translations";

const STORAGE_KEY = "clorostica-lang";

const LanguageContext = createContext(null);

function getInitialLanguage() {
  const isSupported = (code) => LANGUAGES.some((l) => l.code === code);
  const stored = localStorage.getItem(STORAGE_KEY);
  if (isSupported(stored)) return stored;
  const browser = navigator.language?.slice(0, 2).toLowerCase();
  return isSupported(browser) ? browser : "en";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
