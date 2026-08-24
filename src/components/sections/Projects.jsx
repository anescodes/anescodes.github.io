import React from 'react';
import { motion } from 'framer-motion';
import { Folder } from 'lucide-react';
import { projects } from '../../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold text-slate-100 mb-3">Featured Projects</h2>
        <p className="text-slate-400 text-sm max-w-lg mx-auto">
          A selection of my backend and full-stack software development work.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 hover:shadow-xl transition-all group"
          >
            <div>
              <div className="flex justify-between items-center mb-6 text-slate-400">
                <Folder size={32} className="text-cyan-400" />
                <div className="flex items-center gap-3">
                  {/* GitHub Icon SVG */}
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-cyan-400 transition-colors"
                    title="View GitHub Repository"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  
                  {/* Live Demo Icon SVG (إذا كان الرابط متوفرًا) */}
                  {project.live && project.live !== "#" && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="hover:text-cyan-400 transition-colors"
                      title="View Live Demo"
                    >
                      <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, tIdx) => (
                <span 
                  key={tIdx} 
                  className="text-[11px] font-medium px-2.5 py-1 rounded bg-slate-800/80 text-cyan-300 border border-slate-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;