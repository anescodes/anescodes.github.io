import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-cyan-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-xs text-slate-500 border-t border-slate-900">
        © 2026 Anes Abdelmounaim Touati. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;