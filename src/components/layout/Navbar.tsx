import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'Academic', href: '#academic' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.button
            onClick={() => scrollToSection('#hero')}
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer"
          >
            {personalInfo?.name ? personalInfo.name.split(' ')[0] : 'Portfolio'}
          </motion.button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                whileHover={{ y: -2 }}
                className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pt-4 border-t border-slate-200 dark:border-slate-800"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ x: 4 }}
                    className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 text-left transition-colors py-2"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;