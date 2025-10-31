import React, { useState, useEffect, useRef } from 'react';
import { User } from 'lucide-react';

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
   <section id="about" ref={sectionRef} className="relative scroll-mt-24">
    <div className="max-w-7xl mx-auto">
    <h2 className={`text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        >
        About Me
        </h2>
    <p
      className={`text-slate-400 mb-12 text-lg transition-all duration-700 px-4 md:px-0 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'
      }`}
      style={{ transitionDelay: '0.1s' }}
    >
      A brief story about my journey, focus, and creative mindset.
    </p>

    <div
      className={`bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800 p-8 md:p-12 shadow-lg transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'
      }`}
      style={{ transitionDelay: '0.2s' }}
    >
      <div className="space-y-6 text-slate-300 leading-relaxed text-justify">
        <p>
          Currently based in <span className="text-purple-400 font-medium">Berlin</span>, I’ve
          worked on diverse projects from corporate branding to front-end development. My
          mission is to capture the essence of each project through design and code that feels
          both intuitive and visually engaging.
        </p>

        <p>
          I’m passionate about collaboration and believe great work happens where creativity
          meets functionality. Over the years, I’ve built digital products for startups and
          businesses worldwide from marketing websites to complex enterprise apps always
          prioritizing accessibility and performance.
        </p>

        <p>
          Currently, I collaborate with small businesses as a{' '}
          <span className="text-pink-400 font-medium">freelance front-end developer</span>. I
          previously worked with <span className="text-purple-400 font-medium">JFX</span>,
          helping develop web solutions for Banco de Chile and Banco Estado. Before that, I
          focused on UI/UX design, transforming sketches and prototypes into polished user
          interfaces.
        </p>

        <p>
          I’m always learning and exploring new technologies. My goal is to continue evolving as
          a developer and designer, blending creativity with logic to build meaningful digital
          experiences that inspire users.
        </p>
      </div>
    </div>
  </div>
</section>

  );
}
