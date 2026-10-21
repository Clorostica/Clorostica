import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Check, Globe } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { LANGUAGES } from "../i18n/translations";
import "../Styles/languagemenu.css";

// Globe button that opens the list of languages. The list is portaled to
// <body> because the glass nav clips its overflow.
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
          open ? "text-purple-300" : "text-slate-300 hover:text-purple-300"
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
            className="fixed z-[60] min-w-[11rem] p-1.5 rounded-2xl border border-slate-700/80 bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-purple-950/50 animate-[langMenuIn_0.18s_ease-out]"
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
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm transition-colors outline-none focus-visible:bg-purple-500/20 ${
                    active
                      ? "text-purple-200 bg-purple-500/15"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <span className="w-7 text-[11px] font-bold tracking-wider text-slate-400">
                    {lang.label}
                  </span>
                  <span className="flex-1">{lang.name}</span>
                  {active && (
                    <Check size={15} className="text-purple-300" aria-hidden />
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
