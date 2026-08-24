import React from 'react';
import { Mail, Code2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 px-6 py-4 transition-all">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* العودة للرئيسية */}
        <a href="#hero" className="flex items-center gap-2 font-bold text-xl text-cyan-400 hover:text-cyan-300 transition-colors">
          <Code2 size={24} />
          <span>anescodes</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4 text-slate-300">
          <a href="https://github.com/anescodes" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;