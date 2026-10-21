import React from "react";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "../theme/ThemeContext";

export function ThemeToggle({ className = "", iconSize = 20 }) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const label = theme === "dark" ? t.nav.toLight : t.nav.toDark;
  const Icon = theme === "dark" ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`flex items-center justify-center text-muted hover:text-accent transition-colors duration-200 ${className}`}
    >
      <Icon size={iconSize} aria-hidden />
    </button>
  );
}
