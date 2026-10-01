import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Network, Database, Shield, Code, Terminal } from 'lucide-react';

const ResearchAndSkills = () => {
  const skillCategories = [
    {
      title: 'Systems & Backend',
      icon: Database,
      skills: ['Node.js', 'Express', 'PostgreSQL', 'Drizzle ORM', 'FastAPI', 'RESTful APIs', 'Python']
    },
    {
      title: 'Frontend Architecture',
      icon: Code,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Zustand', 'Zod', 'Framer Motion']
    },
    {
      title: 'AI & Data Workflow',
      icon: Cpu,
      skills: ['Scikit-Learn', 'Pandas', 'NumPy', 'Pydantic', 'Local Edge AI', 'Distributed Training']
    },
    {
      title: 'Tools & Infrastructure',
      icon: Terminal,
      skills: ['Linux', 'Docker', 'Git / GitHub', 'Miniconda', 'Bash', 'R / RStudio']
    }
  ];

  const researchTopics = [
    { title: 'Privacy-Preserving On-Device AI', desc: 'Executing local LLMs and ML workflows directly on mobile hardware without cloud relay.' },
    { title: 'Frugal Distributed Training', desc: 'Optimizing model training efficiency across volatile node resources and edge clusters.' },
    { title: 'Multi-Authority Attribute-Based Encryption', desc: 'Secure decentralized cryptographic access control in cloud and fog computing.' }
  ];

  return (
    <section id="research" className="py-24 px-6 max-w-6xl mx-auto border-t border-border">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-surface border border-border text-xs font-mono text-accent mb-3 shadow-sm">
          <Network size={13} />
          <span>TECHNICAL MAP // COMPETENCIES</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-text tracking-tight">
          Research & Core Skills
        </h2>
      </motion.div>

      {/* Research Grid */}
      <div className="mb-20">
        <h3 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-6">
          // Active Research Directions
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {researchTopics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface border border-border p-6 rounded-sm shadow-sm relative group hover:border-accent/40 transition-colors"
            >
              <div className="absolute top-4 right-4 text-[10px] font-mono text-accent">
                RES_0{idx + 1}
              </div>
              <h4 className="text-lg font-bold text-text mb-2 pr-8">{item.title}</h4>
              <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills Mathematical Grid */}
      <div>
        <h3 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-6">
          // Technical Stack Matrix
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-surface border border-border p-6 rounded-sm shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4 text-accent">
                    <Icon size={18} />
                    <h4 className="text-sm font-bold font-mono uppercase text-text">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-mono px-2.5 py-1 bg-surface-muted text-text-muted border border-border rounded-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchAndSkills;