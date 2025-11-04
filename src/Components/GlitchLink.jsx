import React, { useState, useRef } from "react";

export const GlitchLink = ({
  onClick,
  children,
  href = "#",
  className = "",
  glitchSpeed = 10,
  glitchIntensity = 3,
}) => {
  const [displayText, setDisplayText] = useState(children);
  const [isGlitching, setIsGlitching] = useState(false);
  const glitchIntervalRef = useRef(null);
  const text = children;

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()[]{}|\\/<>?~`+-=_.:;,'\"αβγδεζηθικλμνξοπρστυφχψωΔΦΓΛΩΠΨΣΘ█▓▒░";

  const startGlitch = () => {
    if (glitchIntervalRef.current) return;

    setIsGlitching(true);
    let iterations = 0;

    glitchIntervalRef.current = setInterval(() => {
      if (iterations < text.length * glitchIntensity) {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (iterations < index * glitchIntensity) {
                return char;
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("")
        );
        iterations++;
      } else {
        setDisplayText(text);
        setIsGlitching(false);
        clearInterval(glitchIntervalRef.current);
        glitchIntervalRef.current = null;
      }
    }, glitchSpeed);
  };

  const stopGlitch = () => {
    if (glitchIntervalRef.current) {
      clearInterval(glitchIntervalRef.current);
      glitchIntervalRef.current = null;
    }
    setDisplayText(text);
    setIsGlitching(false);
  };

  return (
    <a
      href={href}
      className={`inline-block ${className} ${
        isGlitching ? "glitch-active" : ""
      }`}
      onMouseEnter={startGlitch}
      onMouseLeave={stopGlitch}
      onClick={onClick}
    >
      {displayText}
      <style>{`
        .glitch-active {
          animation: glitch-shake 0.1s infinite;
        }
        
        @keyframes glitch-shake {
          0% {
            transform: translate(0, 0) skew(0deg);
          }
          25% {
            transform: translate(-2px, 1px) skew(-1deg);
          }
          50% {
            transform: translate(2px, -1px) skew(1deg);
          }
          75% {
            transform: translate(-1px, -1px) skew(0.5deg);
          }
          100% {
            transform: translate(0, 0) skew(0deg);
          }
        }
      `}</style>
    </a>
  );
};
