import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
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
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Academic', href: '#academic' },
    { label: 'Research & Skills', href: '#research' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href:any) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/90 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-canvas/80 backdrop-blur-xs border-b border-border/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Identifier */}
        <motion.button
          onClick={() => scrollToSection('#hero')}
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-2 font-mono text-sm font-bold text-text tracking-tight cursor-pointer"
        >
          <Terminal size={16} className="text-accent" />
          <span>{personalInfo?.name ? personalInfo.name.split(' ')[0].toUpperCase() : 'PORTFOLIO'}.SYS</span>
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-mono text-xs">
          {navLinks.map((link) => (
            <motion.button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              whileHover={{ y: -1 }}
              className="text-text-muted hover:text-accent transition-colors relative group py-1"
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </motion.button>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          className="md:hidden p-2 rounded-xs bg-surface border border-border text-text-muted hover:text-accent transition-colors"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </motion.button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-border px-6 py-4"
          >
            <div className="flex flex-col gap-3 font-mono text-xs">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-text-muted hover:text-accent text-left py-2 transition-colors border-b border-border/40 last:border-none"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;