import { useState } from "react";
import "../Styles/index.css";
import "../Styles/styles.css";

export function ProjectCard({ title, description, tech, role, images, detailsId, link }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="group relative bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800 overflow-hidden hover:border-purple-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 p-6">
      <a href={link} target="_blank" rel="noopener noreferrer" className="block mb-4 rounded-lg overflow-hidden">
        <div className="relative w-full h-64">
          <img
            src={images.default}
            alt={title}
            className="w-full h-full object-cover transition-opacity duration-300 rounded-lg"
          />
          {images.hover && (
            <img
              src={images.hover}
              alt={`${title} hover`}
              className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"
            />
          )}
        </div>
      </a>

      <h3 className="text-lg font-bold mb-2 text-white group-hover:text-purple-400 transition-colors duration-300">
        {title} <span className="inline-block">↗</span>
      </h3>

      <p className="mb-4 text-slate-300">{description}</p>

      <button
        className="readMoreBtn mb-4 px-4 py-2 rounded-full bg-purple-700/30 text-purple-200 font-medium hover:bg-purple-600 transition-colors duration-300"
        onClick={toggleDetails}
        aria-expanded={isOpen}
        aria-controls={detailsId}
      >
        {isOpen ? "Read Less" : "Read More"}
      </button>

      <div
        id={detailsId}
        className={`moreDetails ${isOpen ? "block" : "hidden"} text-sm mt-2 text-slate-300`}
        aria-hidden={!isOpen}
      >
        <ul className="list-disc pl-5 mb-4">
          <li><strong>Tech:</strong> {tech}</li>
          <li><strong>Role:</strong> {role}</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {tech.split(",").map((t) => (
          <div key={t} className="px-3 py-1 bg-purple-700/30 text-purple-200 rounded-full text-sm font-medium">
            {t.trim()}
          </div>
        ))}
      </div>
    </div>
  );
}
