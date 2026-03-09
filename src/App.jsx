import React from "react";
import { Certificates } from "./Components/Certificates";
import { ContactMe } from "./Components/ContactMe";
import { Navigation } from "./Components/Navigation";
import { Projects } from "./Components/Projects";
import { Experience } from "./Components/Experience";
import { Hero } from "./Components/Hero";
import { About } from "./Components/About";
import "./Styles/index.css";
import LiquidEther from "./Components/LiquidEther";
export default function App() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", position: "relative" }}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <LiquidEther
          // colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          // mouseForce={20}
          // cursorSize={100}
          // isViscous={false}
          // viscous={30}
          // iterationsViscous={32}
          // iterationsPoisson={32}
          // resolution={0.5}
          // isBounce={false}
          // autoDemo={true}
          // autoSpeed={0.5}
          // autoIntensity={2.2}
          // takeoverDuration={0.25}
          autoResumeDelay={500}
          // autoRampDuration={0.6}
        />
      </div>

      <div
        style={{ position: "relative", zIndex: 1 }}
        className="px-2 md:px-16 lg:px-24 pt-8 md:pt-12"
      >
        <Navigation />
        <Hero className="py-8 md:py-24" />
        <About className="py-8 md:py-24" />
        <Experience className="py-8 md:py-24" />
        <Projects className="py-8 md:py-24" />
        <Certificates className="py-8 md:py-24" />
        <ContactMe className="py-8 md:py-24" />
        <footer className="relative py-8 px-10 md:px-16 lg:px-24 border-t border-slate-800">
          <div className="max-w-7xl mx-auto text-center text-white">
            <p>© 2026 Claudia Sáez. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
