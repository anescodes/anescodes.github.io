import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-20 px-6 max-w-4xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3 transition-colors">
          Certifications
        </h2>

        <p className="text-slate-600 dark:text-slate-400 text-sm transition-colors">
          Professional credentials and specialized training
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <div className="p-4 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 mb-4">
          <Award size={32} />
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-sm">
          No certifications added yet.
        </p>
      </motion.div>
    </section>
  );
};

export default Certifications;