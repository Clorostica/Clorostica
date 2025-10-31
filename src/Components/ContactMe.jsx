import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';

export function ContactMe() {
  const [contactData, setContactData] = useState({ firstName: '', lastName: '', email: '', message: '' });
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
    <section id="contact" className="relative min-h-screen flex items-center justify-center px-6 bg-slate-900" ref={sectionRef}>
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Información de contacto */}
        <div className="space-y-10">
          <h2 className={`text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] transition-all duration-700`}>
            Get In Touch
          </h2>

          <div className="space-y-6">

            <div className={`flex items-center gap-4 p-6 bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800 transition-all duration-500 hover:border-purple-500 hover:shadow-lg`}>
              <Mail className="text-purple-400 animate-pulse" size={32} />
              <div>
                <h3 className="font-semibold text-2xl text-slate-100">Email</h3>
                <a href="mailto:clsaez1018@gmail.com" className="text-slate-400 hover:text-purple-400 transition-colors text-lg">
                  clsaez1018@gmail.com
                </a>
              </div>
            </div>

            <div className={`flex items-center gap-4 p-6 bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800 transition-all duration-500 hover:border-purple-500 hover:shadow-lg`}>
              <MapPin className="text-purple-400 animate-pulse" size={32} />
              <div>
                <h3 className="font-semibold text-2xl text-slate-100">Location</h3>
                <p className="text-slate-400 text-lg">Berlin, Germany</p>
              </div>
            </div>

            <div className={`flex items-center gap-4 p-6 bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800 transition-all duration-500 hover:border-purple-500 hover:shadow-lg`}>
              <Github className="text-purple-400 animate-pulse" size={32} />
              <div>
                <h3 className="font-semibold text-2xl text-slate-100">Social</h3>
                <div className="flex gap-4 mt-1">
                  <a href="https://github.com/Clorostica" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-transform hover:scale-110">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/claudia-saez-orostica-97221624b/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-transform hover:scale-110">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className={`space-y-4 p-6 bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800 transition-all duration-500`}>
          <input
            type="text"
            name="firstName"
            value={contactData.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
            className="w-full p-4 mb-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-purple-400 outline-none text-white text-lg"
            required
          />
          <input
            type="text"
            name="lastName"
            value={contactData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
            className="w-full p-4 mb-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-purple-400 outline-none text-white text-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={contactData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full p-4 mb-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-purple-400 outline-none text-white text-lg"
            required
          />
          <textarea
            name="message"
            value={contactData.message}
            onChange={handleInputChange}
            placeholder="Message"
            rows={4}
            className="w-full p-4 mb-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-purple-400 outline-none text-white text-lg resize-none"
            required
          />
          <button
            onClick={() => window.location.href = `https://formsubmit.co/8e0862922f3402a25639bcc38f5a6b58`}
            className="w-full py-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-xl hover:scale-105 transition-transform font-semibold flex items-center justify-center gap-2 text-lg"
          >
            <Send size={20} /> Send
          </button>
        </div>

      </div>
    </section>
  );
}
