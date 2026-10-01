import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import ArchitecturalBackground from './components/ArchitecturalBackground'; // سيحمل الشكل الـ 3D الجديد تلقائياً
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import AcademicPath from './components/sections/AcademicPath';
import ResearchAndSkills from './components/sections/ResearchAndSkills';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-canvas text-text relative selection:bg-accent/20 selection:text-accent">
      {/* 3D Hexagon Background Replacement */}
      <ArchitecturalBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <AcademicPath />
        <ResearchAndSkills />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <footer className="py-8 px-6 border-t border-border text-center text-xs font-mono text-text-muted relative z-10 bg-surface/50 backdrop-blur-xs">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} Anes Abdelmounaim Touati. All rights reserved.</span>
          <span className="text-accent">3D HEXAGONS // SYSTEMS // ARCHITECTURE</span>
        </div>
      </footer>
    </div>
  );
}

export default App;