import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Check, Globe } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { LANGUAGES } from "../i18n/translations";
import "../Styles/languagemenu.css";

// Globe button that opens the list of languages. The list is portaled to
// <body> so it sits above the fixed nav bars.
export function LanguageMenu({ className = "", iconSize = 20 }) {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, right: 0 });
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const place = () => {
    const rect = buttonRef.current.getBoundingClientRect();
    setPosition({
      top: rect.bottom + 12,
      right: Math.max(8, window.innerWidth - rect.right),
    });
  };

  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (e) => {
      if (
        !menuRef.current?.contains(e.target) &&
        !buttonRef.current?.contains(e.target)
      )
        setOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const close = () => setOpen(false);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", close, { passive: true });
    window.addEventListener("resize", close);
    menuRef.current?.querySelector('[aria-checked="true"]')?.focus();
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", close);
      window.removeEventListener("resize", close);
    };
  }, [open]);

  const toggle = () => {
    if (!open) place();
    setOpen(!open);
  };

  const choose = (code) => {
    setLanguage(code);
    setOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={toggle}
        aria-label={t.nav.language}
        aria-haspopup="menu"
        aria-expanded={open}
        title={t.nav.language}
        className={`flex items-center justify-center transition-colors duration-300 ${
          open ? "text-accent" : "text-muted hover:text-accent"
        } ${className}`}
      >
        <Globe
          size={iconSize}
          strokeWidth={2}
          className={`transition-transform duration-500 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {open &&
        createPortal(
          <div
            ref={menuRef}
            role="menu"
            aria-label={t.nav.language}
            className="fixed z-[60] min-w-[11rem] p-1.5 rounded-2xl border border-line bg-surface shadow-2xl shadow-black/10 animate-[langMenuIn_0.18s_ease-out]"
            style={{ top: position.top, right: position.right }}
          >
            {LANGUAGES.map((lang) => {
              const active = language === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  role="menuitemradio"
                  aria-checked={active}
                  onClick={() => choose(lang.code)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm transition-colors outline-none focus-visible:bg-accent-soft ${
                    active
                      ? "text-accent bg-accent-soft"
                      : "text-muted hover:bg-surface-2 hover:text-fg"
                  }`}
                >
                  <span className="w-7 text-[11px] font-bold tracking-wider text-subtle">
                    {lang.label}
                  </span>
                  <span className="flex-1">{lang.name}</span>
                  {active && (
                    <Check size={15} className="text-accent" aria-hidden />
                  )}
                </button>
              );
            })}
          </div>,
          document.body,
        )}
    </>
  );
}
