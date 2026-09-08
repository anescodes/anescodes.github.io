import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { projects } from '../../data/portfolioData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImgIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImgIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImgIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">Featured Projects</h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm">Explore my full-stack applications and system architectures</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => openModal(project)}
            className="group rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 overflow-hidden shadow-md hover:shadow-xl hover:border-cyan-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            {/* Project Image Banner */}
            <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
              <img 
                src={project.images && project.images[0] ? project.images[0] : ""} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
              <button className="absolute top-3 right-3 p-2 rounded-lg bg-slate-900/60 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                <Maximize2 size={16} />
              </button>
            </div>

            {/* Card Info */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs font-semibold pt-4 border-t border-slate-200 dark:border-slate-800/60">
                  <span className="text-slate-700 dark:text-slate-300 hover:text-cyan-500 transition-colors flex items-center gap-1">
                    Click for Details & Screenshots →
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Modal Gallery */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={closeModal} 
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors"
              >
                <X size={18} />
              </button>

              {/* Image Gallery (Left/Top) */}
              <div className="relative h-64 md:h-auto md:w-3/5 bg-slate-950 flex items-center justify-center overflow-hidden shrink-0 group/gallery">
                {selectedProject.images && selectedProject.images.length > 0 ? (
                  <>
                    <img 
                      src={selectedProject.images[currentImgIndex]} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-contain"
                    />

                    {selectedProject.images.length > 1 && (
                      <>
                        <button 
                          onClick={prevImage}
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/60 text-white hover:bg-cyan-500 transition-colors"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button 
                          onClick={nextImage}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/60 text-white hover:bg-cyan-500 transition-colors"
                        >
                          <ChevronRight size={20} />
                        </button>
                        
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-slate-900/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                          {selectedProject.images.map((_, i) => (
                            <span 
                              key={i} 
                              className={`h-1.5 rounded-full transition-all ${i === currentImgIndex ? 'bg-cyan-400 w-4' : 'bg-white/50 w-1.5'}`} 
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="text-slate-400 text-sm">No preview images available</div>
                )}
              </div>

              {/* Details (Right/Bottom) */}
              <div className="p-6 md:p-8 flex flex-col md:w-2/5 overflow-y-auto">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 pr-8">
                  {selectedProject.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed flex-grow">
                  {selectedProject.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 mb-3 uppercase tracking-wider">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-4 py-2.5 rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity"
                  >
                    View Code
                  </a>
                  {selectedProject.live && selectedProject.live !== "#" && (
                     <a 
                     href={selectedProject.live} 
                     target="_blank" 
                     rel="noreferrer"
                     className="flex-1 flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-4 py-2.5 rounded-lg text-xs font-semibold hover:border-cyan-500 hover:text-cyan-500 transition-colors"
                   >
                     <ExternalLink size={14} /> Live Demo
                   </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;