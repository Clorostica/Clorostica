import React, { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Section, SectionHeader, buttonPrimary } from "./Section";

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-bg border border-line text-fg text-base placeholder:text-subtle outline-none focus:border-accent focus:ring-4 focus:ring-accent/15 transition-[border-color,box-shadow]";

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block mb-1.5 text-sm font-medium text-muted">{label}</span>
      {children}
    </label>
  );
}

function ContactRow({ icon: Icon, label, children }) {
  return (
    <li className="flex items-center gap-4 py-4">
      <span className="flex items-center justify-center w-11 h-11 shrink-0 rounded-xl bg-accent-soft text-accent">
        <Icon size={20} aria-hidden />
      </span>
      <span>
        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
          {label}
        </span>
        <span className="block text-lg text-fg">{children}</span>
      </span>
    </li>
  );
}

export function ContactMe() {
  const { t } = useLanguage();
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const socialLink =
    "inline-flex items-center gap-1.5 hover:text-accent transition-colors";

  return (
    <Section id="contact">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <SectionHeader
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            subtitle={t.contact.subtitle}
            className="!mb-8"
          />
          <ul className="divide-y divide-line border-y border-line">
            <ContactRow icon={Mail} label={t.contact.email}>
              <a href="mailto:clsaez1018@gmail.com" className="hover:text-accent transition-colors">
                clsaez1018@gmail.com
              </a>
            </ContactRow>
            <ContactRow icon={MapPin} label={t.contact.location}>
              {t.contact.locationValue}
            </ContactRow>
            <ContactRow icon={Github} label={t.contact.social}>
              <span className="flex gap-5">
                <a
                  href="https://github.com/Clorostica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialLink}
                >
                  <Github size={18} aria-hidden /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/claudia-saez-orostica-97221624b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialLink}
                >
                  <Linkedin size={18} aria-hidden /> LinkedIn
                </a>
              </span>
            </ContactRow>
          </ul>
        </div>

        <form
          action="https://formsubmit.co/8e0862922f3402a25639bcc38f5a6b58"
          method="POST"
          className="space-y-5 p-6 md:p-8 rounded-[2rem] bg-surface border border-line shadow-sm"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label={t.contact.firstName}>
              <input
                type="text"
                name="firstName"
                autoComplete="given-name"
                value={contactData.firstName}
                onChange={handleInputChange}
                className={inputClass}
                required
              />
            </Field>
            <Field label={t.contact.lastName}>
              <input
                type="text"
                name="lastName"
                autoComplete="family-name"
                value={contactData.lastName}
                onChange={handleInputChange}
                className={inputClass}
                required
              />
            </Field>
          </div>
          <Field label={t.contact.emailPlaceholder}>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={contactData.email}
              onChange={handleInputChange}
              className={inputClass}
              required
            />
          </Field>
          <Field label={t.contact.message}>
            <textarea
              name="message"
              value={contactData.message}
              onChange={handleInputChange}
              rows={5}
              className={`${inputClass} resize-none`}
              required
            />
          </Field>
          <button type="submit" className={`${buttonPrimary} w-full py-3.5 text-lg`}>
            <Send size={18} aria-hidden /> {t.contact.send}
          </button>
        </form>
      </div>
    </Section>
  );
}
