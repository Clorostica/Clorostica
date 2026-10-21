import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { Section, SectionHeader } from "./Section";

// Shared with the hero, which shows it on large screens
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

// On large screens the intro lives in the hero instead
export function About() {
  const { t } = useLanguage();
  return (
    <Section id="about" className="xl:hidden">
      <SectionHeader eyebrow={t.about.eyebrow} title={t.about.title} className="!mb-6" />
      <AboutIntro className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl" />
    </Section>
  );
}
