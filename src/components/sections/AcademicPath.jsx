import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  MapPin,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { academicPath } from '../../data/portfolioData';

const AcademicPath = () => {
  return (
    <section
      id="academic"
      className="py-20 px-6 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
          Education
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">
          Academic Journey
        </h2>

        <p className="text-text-muted text-sm">
          A continuous path through engineering, data science, and
          advanced research
        </p>
      </motion.div>

      <div className="relative">

        {/* Timeline */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-border rounded-full" />

        <div className="space-y-12 md:space-y-20">
          {academicPath.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
            >

              {/* Card */}
              <div
                className={`flex flex-col justify-center ${
                  idx % 2 === 1
                    ? 'md:order-2'
                    : 'md:order-1'
                }`}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="relative bg-surface border border-border rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-accent/30 transition-all h-full"
                >

                  {/* Status */}
                  <div className="absolute top-6 right-6">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                        item.status === 'Ongoing'
                          ? 'bg-accent-soft text-accent border-accent/30'
                          : 'bg-surface-muted text-text-muted border-border'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="flex items-start gap-4 mb-6 pr-16">
                    <div className="p-3 rounded-lg bg-accent text-on-accent flex-shrink-0 shadow-sm">
                      <GraduationCap size={28} />
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-text">
                        {item.degree}
                      </h3>

                      <p className="text-xs font-semibold text-accent mt-1">
                        {item.fullName}
                      </p>
                    </div>
                  </div>

                  {/* Information */}
                  <div className="space-y-2 mb-6 text-sm text-text-muted">
                    <div className="flex items-center gap-3">
                      <GraduationCap
                        size={16}
                        className="text-accent flex-shrink-0"
                      />
                      <span className="font-medium">
                        {item.school}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin
                        size={16}
                        className="text-accent flex-shrink-0"
                      />
                      <span>{item.location}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Calendar
                        size={16}
                        className="text-accent flex-shrink-0"
                      />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p className="text-sm text-text-muted mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div>
                    <p className="text-xs font-semibold text-text mb-3 uppercase tracking-wider">
                      Key Focus Areas
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, hIdx) => (
                        <span
                          key={hIdx}
                          className="text-xs px-3 py-1.5 rounded-full bg-accent-soft text-accent border border-accent/20 font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Image */}
              <div
                className={`flex flex-col justify-center ${
                  idx % 2 === 1
                    ? 'md:order-1'
                    : 'md:order-2'
                }`}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.94,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden border border-border shadow-md"
                >
                  <div className="relative rounded-2xl overflow-hidden bg-surface-muted h-64 md:h-72">

                    <img
                      src={item.image}
                      alt={item.school}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-overlay/70 via-overlay/10 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h4 className="text-lg font-bold mb-1">
                        {item.school}
                      </h4>

                      <p className="text-xs opacity-90">
                        {item.location}
                      </p>
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
        className="mt-20 pt-10 border-t border-border text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-soft text-accent text-xs font-semibold border border-accent/20">
          <Sparkles size={14} />
          Always learning
        </div>
      </motion.div>
    </section>
  );
};

export default AcademicPath;