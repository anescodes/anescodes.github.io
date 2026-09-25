import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Sparkles } from 'lucide-react';
import { academicPath } from '../../data/portfolioData';

const AcademicPath = () => {
  return (
    <section id="academic" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3 transition-colors">
          Academic Journey
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm transition-colors">
          A continuous path of engineering, data science, and advanced research
        </p>
      </motion.div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500 opacity-30 rounded-full" />

        <div className="space-y-12 md:space-y-20">
          {academicPath.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`flex flex-col justify-center ${idx % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all h-full"
                >
                  <div className="absolute top-6 right-6">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                      item.status === 'Ongoing' 
                        ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30 animate-pulse' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  <div className="flex items-start gap-4 mb-6 pr-16">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color} text-white flex-shrink-0 shadow-lg`}>
                      <GraduationCap size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                        {item.fullName}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-3">
                      <GraduationCap size={16} className="text-cyan-500 flex-shrink-0" />
                      <span className="font-medium">{item.school}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={16} className="text-cyan-500 flex-shrink-0" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar size={16} className="text-cyan-500 flex-shrink-0" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div>
                    <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 mb-3 uppercase tracking-wider opacity-70">
                      Key Focus Areas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, hIdx) => (
                        <span
                          key={hIdx}
                          className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className={`flex flex-col justify-center ${idx % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-40 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                  
                  <div className="relative rounded-2xl overflow-hidden bg-slate-900 h-64 md:h-72">
                    <img
                      src={item.image}
                      alt={item.school}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h4 className="text-lg font-bold mb-1">{item.school}</h4>
                      <p className="text-xs opacity-90">{item.location}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold border border-cyan-500/20">
          <Sparkles size={14} />
        </div>
      </motion.div>
    </section>
  );
};

export default AcademicPath;