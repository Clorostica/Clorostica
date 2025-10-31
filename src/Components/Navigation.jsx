import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'About', 'Projects', 'Experience', 'Certificates', 'Contact'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-lg bg-slate-950/90 border-b border-slate-800 shadow-lg'
          : 'backdrop-blur-lg bg-slate-950/70 border-b border-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="hidden md:flex gap-8 items-center">
          {menuItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="led-text transition-all duration-300 relative group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-[var(--text-secondary)] hover:text-white transition-colors p-2 hover:bg-[var(--secondary-bg)] rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden bg-[var(--secondary-bg)] border-t border-[var(--border-color)] transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {menuItems.map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="block px-6 py-3 led-text hover:text-white hover:translate-x-2 transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
            style={{
              animation: isMenuOpen
                ? `slideIn 0.3s ease-out ${index * 50}ms both`
                : 'none',
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
