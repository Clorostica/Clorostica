import React, { useState, useEffect, useRef } from "react";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import StarBorder from "./StarBorder/StarBorder";
import { useLanguage } from "../i18n/LanguageContext";

export function ContactMe() {
  const { t } = useLanguage();
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-slate-900 -mx-2 md:-mx-16 lg:-mx-24 px-5 md:px-[88px] lg:px-[120px]"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-10">
          <h2
            className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] pb-1 text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] transition-all duration-500`}
          >
            {t.contact.title}
          </h2>

          <div className="space-y-6">
            <div
              className={`flex items-center gap-4 p-5 md:p-6 bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800 transition-all duration-500 hover:border-purple-500 hover:shadow-lg`}
            >
              <Mail className="text-purple-400" size={32} />
              <div>
                <h3 className="font-semibold text-xl md:text-2xl text-slate-100">{t.contact.email}</h3>
                <a
                  href="mailto:clsaez1018@gmail.com"
                  className="text-white hover:text-purple-400 transition-colors text-lg"
                >
                  clsaez1018@gmail.com
                </a>
              </div>
            </div>

            <div
              className={`flex items-center gap-4 p-5 md:p-6 bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800 transition-all duration-500 hover:border-purple-500 hover:shadow-lg`}
            >
              <MapPin className="text-purple-400" size={32} />
              <div>
                <h3 className="font-semibold text-xl md:text-2xl text-slate-100">
                  {t.contact.location}
                </h3>
                <p className="text-white text-lg">{t.contact.locationValue}</p>
              </div>
            </div>

            <div
              className={`flex items-center gap-4 p-5 md:p-6 bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800 transition-all duration-500 hover:border-purple-500 hover:shadow-lg`}
            >
              <Github className="text-purple-400" size={32} />
              <div>
                <h3 className="font-semibold text-xl md:text-2xl text-slate-100">
                  {t.contact.social}
                </h3>
                <div className="flex gap-4 mt-1">
                  <a
                    href="https://github.com/Clorostica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-purple-400 transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/claudia-saez-orostica-97221624b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-purple-400 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form
          action="https://formsubmit.co/8e0862922f3402a25639bcc38f5a6b58"
          method="POST"
          className={`space-y-4 p-5 md:p-6 bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800 transition-all duration-500`}
        >
          <input
            type="text"
            name="firstName"
            value={contactData.firstName}
            onChange={handleInputChange}
            placeholder={t.contact.firstName}
            className="w-full p-4 mb-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-purple-400 outline-none text-white text-lg"
            required
          />
          <input
            type="text"
            name="lastName"
            value={contactData.lastName}
            onChange={handleInputChange}
            placeholder={t.contact.lastName}
            className="w-full p-4 mb-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-purple-400 outline-none text-white text-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={contactData.email}
            onChange={handleInputChange}
            placeholder={t.contact.emailPlaceholder}
            className="w-full p-4 mb-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-purple-400 outline-none text-white text-lg"
            required
          />
          <textarea
            name="message"
            value={contactData.message}
            onChange={handleInputChange}
            placeholder={t.contact.message}
            rows={4}
            className="w-full p-4 mb-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-purple-400 outline-none text-white text-lg resize-none"
            required
          />
          <StarBorder
            type="submit"
            radius={12}
            hover="reveal"
            glow={0.8}
            color="#f0abfc"
            trailColor="#a855f7"
            backgroundColor="rgba(88, 28, 135, 0.7)"
            borderColor="rgba(236, 72, 153, 0.4)"
            className="w-full text-lg font-semibold"
            style={{ padding: "1rem 1.5rem" }}
          >
            <Send size={20} /> {t.contact.send}
          </StarBorder>
        </form>
      </div>
    </section>
  );
}
