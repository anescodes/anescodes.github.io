import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import { ThemeProvider } from './context/ThemeContext';

function AppContent() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen font-sans selection:bg-cyan-500 selection:text-white transition-colors duration-500">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-xs text-slate-500 dark:text-slate-500 border-t border-slate-200 dark:border-slate-900 transition-colors">
        © 2026 Anes Abdelmounaim Touati. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;