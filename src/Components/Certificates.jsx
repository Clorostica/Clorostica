import React, { useCallback, useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Award, BadgeCheck, X } from "lucide-react";
import javascript from "../assets/Img/javascript.png";
import frontend from "../assets/Img/frontend.png";
import html from "../assets/Img/html.png";
import Folder from "./Folder/Folder";
import { useLanguage } from "../i18n/LanguageContext";

// Titles, dates and verification links as printed on each certificate
const certificates = [
  {
    title: "Introduction to Front-End Development",
    provider: "Meta · Coursera",
    date: "2024-09-08",
    image: frontend,
    verify: "https://coursera.org/verify/0JTGKZ7JD0FM",
  },
  {
    title: "Programming with JavaScript",
    provider: "Meta · Coursera",
    date: "2024-10-13",
    image: javascript,
    verify: "https://coursera.org/verify/X3CZCYV5Y0O4",
  },
  {
    title: "HTML and CSS in depth",
    provider: "Meta · Coursera",
    date: "2024-10-28",
    image: html,
    verify: "https://coursera.org/verify/5I6TIOPTV58E",
  },
];

// One page inside the folder: certificate thumbnail on paper with its title.
function CertificatePage({ certificate }) {
  return (
    <div className="flex h-full flex-col gap-2 p-2 text-left">
      <img
        src={certificate.image}
        alt=""
        draggable={false}
        className="w-full aspect-[4/3] object-cover rounded-[3px] border border-slate-200 pointer-events-none"
      />
      <p className="text-[10px] font-semibold leading-tight text-slate-800">
        {certificate.title}
      </p>
      <p className="mt-auto flex items-center gap-1 text-[9px] text-slate-500">
        <Award size={9} aria-hidden /> {certificate.provider}
      </p>
    </div>
  );
}

function CertificateViewer({ certificate, closeLabel, verifyLabel, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const previous = document.activeElement;
    closeRef.current?.focus();
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previous?.focus?.();
    };
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={certificate.title}
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-10 bg-slate-950/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <figure
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="absolute -top-12 right-0 flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 border border-slate-700 text-white hover:border-purple-500 transition-colors"
        >
          <X size={20} aria-hidden />
        </button>
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full max-h-[78vh] object-contain rounded-xl shadow-2xl"
        />
        <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3 text-white">
          <span>
            <span className="block text-lg font-semibold">
              {certificate.title}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-slate-300">
              <Award size={15} className="text-purple-400" aria-hidden />
              {certificate.provider}
            </span>
          </span>
          <a
            href={certificate.verify}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm font-medium hover:border-purple-500 transition-colors"
          >
            <BadgeCheck size={16} className="text-emerald-400" aria-hidden />
            {verifyLabel}
          </a>
        </figcaption>
      </figure>
    </div>,
    document.body,
  );
}

export function Certificates() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isPhone, setIsPhone] = useState(
    () => window.matchMedia?.("(max-width: 767px)").matches ?? false,
  );
  const sectionRef = useRef(null);
  const closeViewer = useCallback(() => setSelected(null), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const query = window.matchMedia?.("(max-width: 767px)");
    if (!query) return undefined;
    const onChange = (e) => setIsPhone(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="main_container">
      <section
        id="certificates"
        className="relative py-16 md:py-24 px-3 sm:px-6"
        ref={sectionRef}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div
            className={`transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] pb-1 mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t.certificates.title}
            </h2>
            <p className="text-white text-lg mb-6">{t.certificates.subtitle}</p>
            <ul className="space-y-2 mb-6">
              {certificates.map((cert, index) => (
                <li key={cert.title}>
                  <button
                    type="button"
                    onClick={() => setSelected(index)}
                    className="flex items-center gap-2 text-left text-slate-200 hover:text-purple-300 transition-colors"
                  >
                    <Award
                      size={16}
                      className="shrink-0 text-purple-400"
                      aria-hidden
                    />
                    {cert.title}
                    <span className="text-slate-500">· {cert.provider}</span>
                  </button>
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-400">{t.certificates.hint}</p>
          </div>

          <div className="flex justify-center pt-28 pb-6 md:pt-40 md:pb-0">
            <Folder
              label={t.certificates.folderLabel}
              color="#8b5cf6"
              paperColor="#ffffff"
              size={isPhone ? 1 : 1.8}
              tabPosition="left"
              items={certificates.map((cert) => ({
                content: <CertificatePage certificate={cert} />,
              }))}
              onItemClick={(_, index) => setSelected(index)}
              draggable={false}
              zoomOnClick={false}
              tilt={0.15}
              bounce={0.2}
            />
          </div>
        </div>
      </section>

      {selected !== null && (
        <CertificateViewer
          certificate={certificates[selected]}
          closeLabel={t.certificates.close}
          verifyLabel={t.certificates.verify}
          onClose={closeViewer}
        />
      )}
    </div>
  );
}
