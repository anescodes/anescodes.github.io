import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Server, Network, BoxIcon, Brain } from 'lucide-react';

const ResearchAndSkills = () => {
  const [activeSkillTab, setActiveSkillTab] = useState('programming');

  const researchInterests = [
    { icon: '🤖', title: 'Artificial Intelligence', description: 'Advanced AI systems, machine learning, and intelligent agents' },
    { icon: '🧠', title: 'Machine Learning', description: 'Deep learning, neural networks, and statistical learning methods' },
    { icon: '🔗', title: 'Distributed AI', description: 'Federated learning, edge AI, and distributed computing' },
    { icon: '🌐', title: 'AI + Networks', description: 'Network optimization and distributed AI systems' },
    { icon: '🔐', title: 'Privacy-Preserving AI', description: 'Secure computation, differential privacy, and secure AI' },
    { icon: '📱', title: 'Edge / Embedded AI', description: 'AI on edge devices, mobile ML, and resource-constrained systems' }
  ];

  const skills = {
    programming: ["Python", "JavaScript/TypeScript", "React", "Node.js", "Java"],
    backend: ["FastAPI", "Django", "Express.js", "GraphQL", "REST APIs"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "SQL"],
    networks: ["TCP/IP", "Socket Programming", "Network Protocols", "Distributed Systems"],
    devops: ["Docker", "Kubernetes", "Linux", "Git", "CI/CD Pipelines"],
    ai_data: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Data Analysis"]
  };

  const skillTabs = [
    { key: 'programming', label: 'Programming', icon: Code2 },
    { key: 'backend', label: 'Backend', icon: Server },
    { key: 'databases', label: 'Databases', icon: Database },
    { key: 'networks', label: 'Networks', icon: Network },
    { key: 'devops', label: 'DevOps', icon: BoxIcon },
    { key: 'ai_data', label: 'AI & Data', icon: Brain },
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3 transition-colors text-center">
          Research Interests
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm transition-colors text-center mb-12">
          Focused on advancing distributed AI and privacy-preserving technologies
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchInterests.map((interest, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {interest.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 transition-colors">
                {interest.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3 transition-colors text-center">
          Technical Skills
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm transition-colors text-center mb-12">
          Expertise across full-stack development and AI technologies
        </p>

        <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-lg">
          <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
            {skillTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.key}
                  onClick={() => setActiveSkillTab(tab.key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    activeSkillTab === tab.key
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </motion.button>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            key={activeSkillTab}
            className="grid md:grid-cols-2 gap-3"
          >
            {skills[activeSkillTab as keyof typeof skills].map((skill, idx) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group flex items-center gap-3 p-3 rounded-lg bg-slate-100/50 dark:bg-slate-800/50 hover:bg-cyan-500/10 dark:hover:bg-cyan-500/10 transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:scale-150 transition-transform" />
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ResearchAndSkills;