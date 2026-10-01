import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight, X, Maximize2, Terminal } from 'lucide-react';
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
    if (selectedProject && selectedProject.images) {
      setCurrentImgIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedProject && selectedProject.images) {
      setCurrentImgIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto border-t border-border">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-surface border border-border text-xs font-mono text-accent mb-3 shadow-sm">
            <Terminal size={13} />
            <span>SYSTEM_MODULES // PORTFOLIO</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text tracking-tight">
            Engineered Projects
          </h2>
        </div>
        <p className="text-text-muted text-sm max-w-md font-mono">
          // Full-stack systems, distributed microservices, and cryptographic access control implementations.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id || idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -4 }}
            className="group bg-surface border border-border hover:border-accent/40 rounded-sm p-6 shadow-sm transition-all flex flex-col justify-between cursor-pointer"
            onClick={() => openModal(project)}
          >
            <div>
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between mb-4 font-mono text-xs text-text-muted">
                <span className="text-accent">MOD_0{idx + 1}</span>
                <span>{project.category || 'System Architecture'}</span>
              </div>

              {/* Thumbnail / Image Preview */}
              {project.images && project.images.length > 0 && (
                <div className="relative w-full h-48 bg-surface-muted border border-border rounded-xs overflow-hidden mb-5">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale contrast-125 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1 bg-surface border border-border text-xs font-mono text-text shadow-sm flex items-center gap-1.5">
                      <Maximize2 size={12} className="text-accent" /> Inspect Module
                    </span>
                  </div>
                </div>
              )}

              <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors mb-2">
                {project.title}
              </h3>

              <p className="text-text-muted text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-border/60">
                {project.technologies && project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2.5 py-1 bg-surface-muted text-text-muted border border-border rounded-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Specification →
                </span>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-text-muted hover:text-accent flex items-center gap-1"
                  >
                    Source <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-surface border border-border rounded-sm max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-xl relative"
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 rounded-xs bg-surface-muted border border-border text-text-muted hover:text-accent transition-colors"
              >
                <X size={18} />
              </button>

              <div className="font-mono text-xs text-accent mb-1">// PROJECT SPECIFICATION</div>
              <h3 className="text-2xl font-bold text-text mb-4">{selectedProject.title}</h3>

              {/* Image Carousel */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="relative w-full h-64 md:h-80 bg-surface-muted border border-border rounded-xs overflow-hidden mb-6">
                  <img
                    src={selectedProject.images[currentImgIndex]}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />

                  {selectedProject.images.length > 1 && (
                    <div className="absolute inset-0 flex items-center justify-between p-4">
                      <button
                        onClick={prevImage}
                        className="p-2 bg-surface/90 border border-border text-text hover:text-accent rounded-xs shadow-sm"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="p-2 bg-surface/90 border border-border text-text hover:text-accent rounded-xs shadow-sm"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-surface/90 border border-border text-[10px] font-mono text-text">
                    IMG {currentImgIndex + 1} / {selectedProject.images.length}
                  </div>
                </div>
              )}

              <p className="text-text-muted text-sm leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-mono font-bold text-text uppercase tracking-wider mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies && selectedProject.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono px-3 py-1 bg-accent-soft text-accent border border-accent/20 rounded-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-border">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 bg-surface hover:bg-surface-muted border border-border text-text text-xs font-mono rounded-xs inline-flex items-center gap-2 transition-all"
                  >
                    View Source Code <ExternalLink size={14} />
                  </a>
                )}
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-on-accent text-xs font-mono rounded-xs inline-flex items-center gap-2 transition-all shadow-sm"
                  >
                    Live Deployment <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;