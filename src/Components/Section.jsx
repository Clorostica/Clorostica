import React from "react";

// Full-width band with the page's content column inside.
// tone="alt" gives the section its own background so sections read as separate chapters.
export function Section({ id, tone = "base", className = "", children }) {
  const toneClass =
    tone === "alt" ? "bg-bg-alt border-y border-line" : "bg-transparent";
  return (
    <section
      id={id}
      className={`relative px-5 sm:px-8 md:px-12 lg:px-[120px] py-20 md:py-28 ${toneClass} ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, subtitle, className = "" }) {
  return (
    <header className={`max-w-3xl mb-12 md:mb-16 ${className}`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
        {eyebrow}
      </p>
      <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] text-fg">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg md:text-xl text-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </header>
  );
}

// Shared button looks
export const buttonPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-accent text-on-accent font-semibold shadow-lg shadow-accent/20 hover:brightness-110 transition-[filter] duration-200";
export const buttonSecondary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-surface text-fg font-medium border border-line hover:border-accent hover:text-accent transition-colors duration-200";
