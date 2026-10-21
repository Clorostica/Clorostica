import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

// The personal intro shown under the name in the hero
export function AboutIntro({ className = "" }) {
  const { t } = useLanguage();
  return (
    <p className={className}>
      {t.about.intro.pre}
      <span className="text-fg font-semibold">{t.about.intro.role}</span>
      {t.about.intro.mid}
      <span className="text-fg font-semibold">{t.about.intro.city}</span>
      {t.about.intro.post}
    </p>
  );
}
