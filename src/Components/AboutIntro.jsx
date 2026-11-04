import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

// The personal intro shown under the name in the hero
export function AboutIntro({ className = "" }) {
  const { t } = useLanguage();
  return (
    <p className={`max-w-xl text-lg md:text-xl text-fg/75 leading-relaxed ${className}`}>
      {t.about.intro}
    </p>
  );
}
