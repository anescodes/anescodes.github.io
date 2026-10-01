import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Cpu } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto flex items-center">
      <div className="grid md:grid-cols-12 gap-12 items-center w-full z-10">
        
        {/* Left Column: Metadata & Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-surface border border-border text-xs font-mono text-accent shadow-sm">
            <Terminal size={13} />
            <span>AI SYSTEMS & DISTRIBUTED ARCHITECTURE</span>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-mono tracking-widest text-text-muted uppercase">
              // Portfolio & Research Profile
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text">
              {personalInfo.name}
            </h1>
            <p className="text-lg md:text-xl font-medium text-accent">
              {personalInfo.title}
            </p>
          </div>

          <p className="text-text-muted text-base leading-relaxed max-w-xl">
            {personalInfo.bio || 
              "Designing rigorous full-stack applications, intelligent edge agents, and distributed cryptographic architectures with mathematical precision."
            }
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-accent hover:bg-accent-hover text-on-accent text-sm font-medium rounded-sm shadow-sm inline-flex items-center gap-2 transition-all"
            >
              Explore Systems
              <ArrowRight size={16} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-surface hover:bg-surface-muted text-text border border-border text-sm font-medium rounded-sm transition-all"
            >
              Initiate Contact
            </motion.a>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border font-mono text-xs text-text-muted">
            <div>
              <span className="block text-text font-bold text-sm">M1 AIDA</span>
              Paris Dauphine-PSL
            </div>
            <div>
              <span className="block text-text font-bold text-sm">Full-Stack</span>
              MERN / PERN / Python
            </div>
            <div>
              <span className="block text-text font-bold text-sm">Focus</span>
              Edge AI & Systems
            </div>
          </div>
        </motion.div>

        {/* Right Column: Clean Profile Photo Card (Without Outside Frames) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-sm bg-surface border border-border p-3 shadow-sm rounded-sm">
            <div className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-surface border border-border font-mono text-[9px] text-accent">
              REF_IMG_01 // 
            </div>
            
            <div className="w-full aspect-[4/5] bg-surface-muted overflow-hidden relative rounded-xs border border-border/60">
              {personalInfo.image ? (
                <img 
                  src={personalInfo.image} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-text-muted font-mono text-xs">
                  <Cpu size={36} className="mb-2 text-accent" />
                  <span>[ PORTRAIT MATRIX ]</span>
                </div>
              )}
            </div>

            <div className="mt-3 pt-2 border-t border-border flex justify-between items-center text-[10px] font-mono text-text-muted">
              <span>COORDS: 36.8065° N, 10.1815° E</span>
              <span className="text-accent">● ACTIVE</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;