import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import AcademicPath from './components/sections/AcademicPath';
import ResearchAndSkills from './components/sections/ResearchAndSkills';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import { AnimatePresence } from 'framer-motion';
import { personalInfo } from './data/portfolioData'; // <-- Added missing import

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
          <Navbar />

          <main className="pt-16">
            <Hero />
            <About />
            <Projects />
            <AcademicPath />
            <ResearchAndSkills />
            <Certifications />
            <Contact />
          </main>

          <footer className="border-t border-slate-200 dark:border-slate-800 py-8 px-6 transition-colors">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  © 2024 Anes Touati. All rights reserved.
                </p>
                <div className="flex gap-6">
                  <a 
                    href={personalInfo.github}
                    target="_blank" 
                    rel="noreferrer"
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    GitHub
                  </a>
                  <a 
                    href={personalInfo.linkedin}
                    target="_blank" 
                    rel="noreferrer"
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;