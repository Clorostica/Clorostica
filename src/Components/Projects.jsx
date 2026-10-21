import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ExternalLink,
  KeyRound,
  Play,
  TramFront,
} from "lucide-react";
import {
  SiAuth0,
  SiCloudflare,
  SiCloudflareworkers,
  SiDocker,
  SiHono,
  SiReact,
  SiResend,
  SiStripe,
  SiSwiper,
  SiTailwindcss,
  SiTwilio,
  SiTypescript,
  SiVite,
  SiVitest,
} from "react-icons/si";
import { useLanguage } from "../i18n/LanguageContext";
import { Section, SectionHeader, buttonPrimary, buttonSecondary } from "./Section";

const TECH = {
  React: { icon: SiReact, color: "#61DAFB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },
  "Cloudflare Workers": { icon: SiCloudflareworkers, color: "#F38020" },
  "Cloudflare D1": { icon: SiCloudflare, color: "#F38020" },
  Hono: { icon: SiHono, color: "#FF5B11" },
  Auth0: { icon: SiAuth0, color: "#EB5424" },
  Stripe: { icon: SiStripe, color: "#8B83FF" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Vite: { icon: SiVite, color: "#A78BFA" },
  Swiper: { icon: SiSwiper, color: "#0080FF" },
  "VBB API": { icon: TramFront, color: "#F0D722" },
  WorkOS: { icon: KeyRound, color: "#6363F1" },
  Twilio: { icon: SiTwilio, color: "#F22F46" },
  // No brand color: follows the text color so it shows in both themes
  Resend: { icon: SiResend, color: null },
  Vitest: { icon: SiVitest, color: "#6E9F18" },
};

// The three projects that best show the full stack and the design side
const projects = [
  {
    id: "gobento",
    title: "Gobento",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Cloudflare Workers",
      "Hono",
      "Cloudflare D1",
      "Auth0",
      "Stripe",
      "Docker",
    ],
    link: "https://gobento.clorostica.com/",
  },
  {
    id: "navi",
    title: "Navi",
    tech: [
      "React",
      "TypeScript",
      "Cloudflare Workers",
      "Cloudflare D1",
      "VBB API",
      "WorkOS",
      "Twilio",
      "Resend",
      "Vitest",
    ],
    link: "https://navi-flax-nu.vercel.app/",
  },
  {
    id: "epica",
    title: "Épica",
    tech: ["React", "Vite", "Tailwind CSS", "Swiper"],
    link: "https://epica-iota.vercel.app/",
  },
];

const prefersReducedMotion = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

// Recorded walkthrough of the live site, framed as a browser window.
// Plays only while on screen; with reduced motion it waits for hover.
function ProjectPreview({ project, label }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const reduced = useRef(prefersReducedMotion());

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduced.current) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.35 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const playOnHover = () => {
    if (reduced.current) videoRef.current?.play().catch(() => {});
  };
  const pauseOnLeave = () => {
    if (reduced.current) videoRef.current?.pause();
  };

  const host = new URL(project.link).host;

  return (
    <div
      className="relative rounded-2xl overflow-hidden border border-line bg-surface-2 shadow-xl shadow-black/5"
      onMouseEnter={playOnHover}
      onMouseLeave={pauseOnLeave}
    >
      <div className="flex items-center gap-3 px-3 py-2 border-b border-line">
        <div className="flex gap-1.5 shrink-0" aria-hidden>
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-300/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <div className="flex-1 min-w-0 truncate text-center text-[11px] font-mono text-subtle bg-bg rounded-md px-3 py-0.5">
          {host}
        </div>
        <span
          className={`shrink-0 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider ${
            playing ? "text-accent-2" : "text-subtle"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              playing ? "bg-accent-2" : "bg-subtle"
            }`}
          />
          <span className="hidden sm:inline">{label}</span>
        </span>
      </div>
      <div className="relative aspect-[16/10] bg-black">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-top"
          src={`/projects/${project.id}.webm`}
          poster={`/projects/${project.id}.jpg`}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${project.title} – ${label}`}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-surface text-accent shadow-lg">
              <Play size={20} className="ml-0.5" aria-hidden />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectShowcase({ project, index, t }) {
  const copy = t.projects.items[project.id];

  return (
    <article className="p-5 md:p-10 rounded-[2rem] border border-line bg-surface shadow-sm">
      <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
        <div className="space-y-3">
          <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            <span className="font-mono text-subtle">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>
              {copy.category}
              <span className="text-subtle"> · {copy.role}</span>
            </span>
          </p>
          <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-fg">
            {project.title}
          </h3>
          <p className="text-xl md:text-2xl text-muted leading-snug max-w-3xl">
            {copy.tagline}
          </p>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonSecondary} shrink-0 self-start md:self-auto px-5 py-3`}
        >
          {t.projects.viewLive} <ExternalLink size={16} aria-hidden />
        </a>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        <div className="lg:col-span-2">
          <ProjectPreview project={project} label={t.projects.live} />
        </div>

        <div className="flex flex-col gap-7">
          <dl className="space-y-6">
            <div>
              <dt className="mb-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-2">
                {t.projects.impact}
              </dt>
              <dd className="text-lg text-fg/90 leading-relaxed">{copy.impact}</dd>
            </div>
            <div>
              <dt className="mb-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-2">
                {t.projects.build}
              </dt>
              <dd className="text-lg text-fg/90 leading-relaxed">{copy.build}</dd>
            </div>
          </dl>

          <div>
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-subtle">
              {t.projects.tech}
            </p>
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((name) => {
                const { icon: Icon, color } = TECH[name];
                return (
                  <li
                    key={name}
                    className="inline-flex items-center gap-2 pl-2.5 pr-3.5 py-1.5 rounded-full text-sm font-medium text-fg bg-bg border border-line"
                  >
                    <Icon size={16} style={color ? { color } : undefined} aria-hidden />
                    {name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const { t } = useLanguage();

  return (
    <Section id="projects" tone="alt">
      <SectionHeader
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        subtitle={t.projects.subtitle}
      />

      <div className="flex flex-col gap-10 md:gap-14">
        {projects.map((project, index) => (
          <ProjectShowcase key={project.id} project={project} index={index} t={t} />
        ))}
      </div>

      <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-5 text-center">
        <p className="font-display text-2xl md:text-3xl font-bold tracking-tight text-fg">
          {t.projects.ctaTitle}
        </p>
        <a href="#contact" className={`${buttonPrimary} px-6 py-3 text-base`}>
          {t.projects.ctaButton} <ArrowRight size={18} aria-hidden />
        </a>
      </div>
    </Section>
  );
}
