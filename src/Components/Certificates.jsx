import React, { useState, useEffect, useRef } from 'react';
import { Award } from 'lucide-react';
import javascript from '../assets/Img/javascript.png';
import frontend from '../assets/Img/frontend.png';
import html from '../assets/Img/html.png';

export function Certificates() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const certificates = [
    {
      title: 'Meta Front-End Developer',
      provider: 'Coursera',
      image: frontend,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      provider: 'Coursera',
      image: javascript,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Responsive Web Design',
      provider: 'Coursera',
      image: html,
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    
    <section id="certificates" className="relative py-32 px-6 scroll-mt-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
      <h2
            className={`text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
        Certificates
     </h2>
        <p className={`text-slate-400 mb-12 text-lg transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '0.1s' }}>
          Professional certifications and achievements
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`group relative bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800 overflow-hidden hover:border-purple-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden relative bg-slate-800">
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-purple-400 transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-slate-400 text-sm flex items-center gap-2">
                  <Award size={16} className="text-purple-400" />
                  {cert.provider}
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>
          ))}

        
        </div>
      </div>
    </section>
  );
}