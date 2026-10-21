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
import StarBorder from "./StarBorder/StarBorder";
import { useLanguage } from "../i18n/LanguageContext";

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
  Resend: { icon: SiResend, color: "#FFFFFF" },
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
      className="relative rounded-xl overflow-hidden border border-slate-700/70 bg-slate-950 shadow-2xl shadow-purple-900/20"
      onMouseEnter={playOnHover}
      onMouseLeave={pauseOnLeave}
    >
      <div className="flex items-center gap-3 px-3 py-2 bg-slate-900/95 border-b border-slate-800">
        <div className="flex gap-1.5 shrink-0" aria-hidden>
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-300/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <div className="flex-1 min-w-0 truncate text-center text-[11px] font-mono text-slate-400 bg-slate-800/70 rounded-md px-3 py-0.5">
          {host}
        </div>
        <span
          className={`shrink-0 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider ${
            playing ? "text-pink-300" : "text-slate-500"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              playing ? "bg-pink-400" : "bg-slate-500"
            }`}
          />
          <span className="hidden sm:inline">{label}</span>
        </span>
      </div>
      <div className="relative aspect-[16/10]">
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
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/30 pointer-events-none">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/80 border border-purple-500/50 text-purple-200">
              <Play size={20} className="ml-0.5" aria-hidden />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function ViewLiveLink({ project, t }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-800 border border-slate-700 text-white font-medium tracking-wide hover:border-purple-500 hover:bg-slate-700 transition-colors duration-300"
    >
      {t.projects.viewLive} <ExternalLink size={16} aria-hidden />
    </a>
  );
}

function ProjectShowcase({ project, index, t }) {
  const copy = t.projects.items[project.id];

  return (
    <article className="p-5 md:p-10 rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-lg">
      <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
        <div className="space-y-3">
          <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-purple-300/90">
            <span className="font-mono text-slate-500">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>
              {copy.category}
              <span className="text-slate-500"> · {copy.role}</span>
            </span>
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            {project.title}
          </h3>
          <p className="text-xl md:text-2xl text-slate-200 leading-snug max-w-3xl">
            {copy.tagline}
          </p>
        </div>
        <ViewLiveLink project={project} t={t} />
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        <div className="lg:col-span-2">
          <ProjectPreview project={project} label={t.projects.live} />
        </div>

        <div className="flex flex-col gap-7">
          <dl className="space-y-6">
            <div>
              <dt className="mb-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-pink-300">
                {t.projects.impact}
              </dt>
              <dd className="text-lg text-slate-200 leading-relaxed">
                {copy.impact}
              </dd>
            </div>
            <div>
              <dt className="mb-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-pink-300">
                {t.projects.build}
              </dt>
              <dd className="text-lg text-slate-200 leading-relaxed">
                {copy.build}
              </dd>
            </div>
          </dl>

          <div>
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              {t.projects.tech}
            </p>
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((name) => {
                const { icon: Icon, color } = TECH[name];
                return (
                  <li
                    key={name}
                    className="inline-flex items-center gap-2 pl-2.5 pr-3.5 py-1.5 rounded-full text-sm font-medium text-slate-100 bg-slate-950/60 border"
                    style={{ borderColor: `${color}55` }}
                  >
                    <Icon size={16} style={{ color }} aria-hidden />
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="main_container">
      <section
        id="projects"
        className="relative py-16 md:py-24 -mx-2 md:-mx-16 lg:-mx-24 px-5 sm:px-8 md:px-[88px] lg:px-[120px] section-projects"
        ref={sectionRef}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] pb-1 mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-500 [will-change:opacity,transform] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {t.projects.title}
          </h2>
          <p className="text-white mb-12 text-lg max-w-2xl">
            {t.projects.subtitle}
          </p>

          <div className="flex flex-col gap-10 md:gap-14">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${Math.min(index, 2) * 120}ms` }}
              >
                <ProjectShowcase project={project} index={index} t={t} />
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 text-center">
            <p className="text-2xl font-semibold text-white">
              {t.projects.ctaTitle}
            </p>
            <StarBorder
              as="a"
              href="#contact"
              radius={999}
              color="#c084fc"
              trailColor="#ec4899"
              glow={0.8}
              backgroundColor="rgba(88, 28, 135, 0.7)"
              borderColor="rgba(236, 72, 153, 0.4)"
              className="text-base font-semibold"
            >
              {t.projects.ctaButton} <ArrowRight size={18} aria-hidden />
            </StarBorder>
          </div>
        </div>
      </section>
    </div>
  );
}
