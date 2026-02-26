import { useState } from "react";
import "../Styles/index.css";
import "../Styles/styles.css";

export function ProjectCard({
  title,
  description,
  tech,
  role,
  images,
  detailsId,
  link,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800 overflow-hidden hover:border-purple-500 transition-all duration-150 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 p-6 block cursor-pointer"
    >
      <div className="mb-4 rounded-lg overflow-hidden">
        <div className="relative w-full h-64">
          <img
            src={images.default}
            alt={title}
            className="w-full h-full object-cover transition-opacity duration-150 rounded-lg"
          />
          {images.hover && (
            <img
              src={images.hover}
              alt={`${title} hover`}
              className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-1 transition-opacity duration-10 rounded-lg"
            />
          )}
        </div>
      </div>

      <h3 className="text-lg font-bold mb-2 text-white group-hover:text-purple-400 transition-colors duration-150">
        {title} <span className="inline-block">↗</span>
      </h3>

      <p className="mb-4 text-white">{description}</p>

      <button
        type="button"
        className="readMoreBtn mb-4 px-4 py-2 rounded-full bg-purple-700/30 text-purple-200 font-medium hover:bg-purple-600 transition-colors duration-150"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleDetails();
        }}
        aria-expanded={isOpen}
        aria-controls={detailsId}
      >
        {isOpen ? "Read Less" : "Read More"}
      </button>

      <div
        id={detailsId}
        className={`moreDetails ${
          isOpen ? "block" : "hidden"
        } text-sm mt-2 text-white`}
        aria-hidden={!isOpen}
      >
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Tech:</strong> {tech}
          </li>
          <li>
            <strong>Role:</strong> {role}
          </li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {tech.split(",").map((t) => (
          <div
            key={t}
            className="px-3 py-1 bg-purple-700/30 text-purple-200 rounded-full text-sm font-medium"
          >
            {t.trim()}
          </div>
        ))}
      </div>
    </a>
  );
}
