import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Sparkles } from 'lucide-react';
import myPhoto from '../assets/Img/yo.jpg';

export function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Software Developer focused on UX and accessibility. I build intuitive, engaging digital experiences using modern frameworks like React and Tailwind. ✨";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

        <div className="space-y-6 z-10">
          <div className="space-y-2">
            <p className="text-purple-400 text-sm uppercase tracking-wider flex items-center gap-2 animate-pulse">
              <Sparkles size={16} /> Software Developer
            </p>
            <h1 className="text-6xl md:text-7xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] animate-pulse">
            C
          </span>
          laudia&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] animate-pulse">
            S
          </span>
          aez
        </h1>
            <p className="text-xl text-slate-400 leading-relaxed min-h-[120px]">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://clorostica.github.io/Doc/CV_ClaudiaOrostica.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <Download size={18} className="group-hover:animate-bounce" /> Resume
            </a>
            <a
              href="https://clorostica.github.io/Doc/CV_ClaudiaOrosticaGerman.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-purple-500 hover:shadow-xl"
            >
              <Download size={18} className="group-hover:animate-bounce" /> German Resume
            </a>
            <a
              href="https://github.com/Clorostica"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-purple-500 hover:shadow-xl"
            >
              <Github size={18} className="group-hover:rotate-12 transition-transform" /> GitHub
            </a>
          </div>

          <div className="flex gap-4 pt-4">
            <a 
              href="https://github.com/Clorostica" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-purple-400 transition-all duration-300 hover:scale-125 hover:rotate-12"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/claudia-saez-orostica-97221624b/" 
              target="_blank"
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-purple-400 transition-all duration-300 hover:scale-125 hover:-rotate-12"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className="relative h-96 md:h-[500px] flex items-center justify-center">
          <img
            src={myPhoto}
            alt="Claudia Sáez"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
            style={{
              boxShadow: '0 0 30px 6px rgba(198, 96, 255, 0.4), 0 0 50px 12px rgba(255, 105, 180, 0.3)'
            }}
          />
        </div>

      </div>
    </section>
  );
}
