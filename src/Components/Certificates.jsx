import React, { useCallback, useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Award, BadgeCheck, X } from "lucide-react";
import javascript from "../assets/Img/javascript.png";
import frontend from "../assets/Img/frontend.png";
import html from "../assets/Img/html.png";
import Folder from "./Folder/Folder";
import { useLanguage } from "../i18n/LanguageContext";
import { Section, SectionHeader } from "./Section";

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
          className="absolute -top-12 right-0 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
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
              <Award size={15} className="text-violet-300" aria-hidden />
              {certificate.provider}
            </span>
          </span>
          <a
            href={certificate.verify}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/20 transition-colors"
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

// The folder shrinks on smaller screens so it fits its half of the grid
const getFolderSize = () => {
  const matches = (q) => window.matchMedia?.(q).matches ?? false;
  if (matches("(max-width: 767px)")) return 1;
  if (matches("(max-width: 1023px)")) return 1.3;
  return 1.8;
};

export function Certificates() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(null);
  const [folderSize, setFolderSize] = useState(getFolderSize);
  const closeViewer = useCallback(() => setSelected(null), []);

  useEffect(() => {
    const queries = ["(max-width: 767px)", "(max-width: 1023px)"]
      .map((q) => window.matchMedia?.(q))
      .filter(Boolean);
    const onChange = () => setFolderSize(getFolderSize());
    queries.forEach((q) => q.addEventListener("change", onChange));
    return () => queries.forEach((q) => q.removeEventListener("change", onChange));
  }, []);

  return (
    <Section id="certificates" tone="alt">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <SectionHeader
            title={t.certificates.title}
            subtitle={t.certificates.subtitle}
            className="!mb-8"
          />
          <ul className="divide-y divide-line border-y border-line mb-6">
            {certificates.map((cert, index) => (
              <li key={cert.title}>
                <button
                  type="button"
                  onClick={() => setSelected(index)}
                  className="w-full flex items-center gap-3 py-3.5 text-left group"
                >
                  <span className="flex items-center justify-center w-9 h-9 shrink-0 rounded-xl bg-accent-soft text-accent">
                    <Award size={18} aria-hidden />
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold text-fg group-hover:text-accent transition-colors">
                      {cert.title}
                    </span>
                    <span className="block text-sm text-subtle">{cert.provider}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <p className="text-sm text-subtle">{t.certificates.hint}</p>
        </div>

        <div className="flex justify-center pt-28 pb-6 md:pt-40 md:pb-0">
          <Folder
            label={t.certificates.folderLabel}
            color="#8b5cf6"
            paperColor="#ffffff"
            size={folderSize}
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

      {selected !== null && (
        <CertificateViewer
          certificate={certificates[selected]}
          closeLabel={t.certificates.close}
          verifyLabel={t.certificates.verify}
          onClose={closeViewer}
        />
      )}
    </Section>
  );
}
