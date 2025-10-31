import { Certificates } from "./Components/Certificates";
import { ContactMe } from "./Components/ContactMe";
import { Navigation } from "./Components/Navigation";
import { Projects } from "./Components/Projects";
import { Experience } from "./Components/Experience";
import { Hero } from "./Components/Hero";
import { About } from "./Components/About";
import { useState, useEffect } from "react";
import './Styles/index.css';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">

      {/* Fondo animado */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20"
          style={{
            left: `${mousePosition.x / 30}px`,
            top: `${mousePosition.y / 30}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20"
          style={{
            right: `${mousePosition.x / 40}px`,
            bottom: `${mousePosition.y / 40}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
      </div>

      <Navigation />
      <Hero className="pt-20 pb-20 md:pt-28 md:pb-28" />
      <About className="py-16 md:py-24" />
      <Projects className="py-16 md:py-24" />
      <Experience className="py-16 md:py-24" />
      <Certificates className="py-16 md:py-24" />
      <ContactMe className="py-16 md:py-24" />
      <footer className="relative py-8 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>© 2025 Claudia Sáez. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
