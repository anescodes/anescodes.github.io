import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

// Custom clean GitHub SVG icon
const GithubIcon = ({ size = 20 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

// Custom clean LinkedIn SVG icon
const LinkedinIcon = ({ size = 20 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const About = () => {
  const socialLinks = [
    {
      icon: GithubIcon,
      url: personalInfo.github,
      label: 'GitHub',
      color: 'hover:text-slate-900 dark:hover:text-slate-100'
    },
    {
      icon: LinkedinIcon,
      url: personalInfo.linkedin,
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: Mail,
      url: `mailto:${personalInfo.email}`,
      label: 'Email',
      color: 'hover:text-cyan-600'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 transition-colors">
            About Me
          </h2>
          
          <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>
              I am deeply passionate about Artificial Intelligence and Cybersecurity, driven by a 
              mindset that prioritizes <span className="text-cyan-600 dark:text-cyan-400 font-semibold">quality over quantity</span> in 
              every system and solution I build. 
            </p>
            
            <p>
              My philosophy centers around continuous learning and technical rigor. Whether exploring 
              intelligent architectures, secure data workflows, or resilient engineering principles, 
              I strive to deeply understand the core fundamentals rather than just scratching the surface.
            </p>

            <p>
              Committed to lifelong growth and innovation, I continuously refine my expertise to craft 
              clean, robust, and secure technological solutions.
            </p>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
          >
            Get in touch <ArrowRight size={16} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'Years Experience', value: '1+' },
              { label: 'Projects Completed', value: '2+' },
              { label: 'Technologies', value: '10+' },
              { label: 'Continuous Learning', value: '∞' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all"
              >
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  {stat.value}
                </p>
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-2 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-xl p-6">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-4 uppercase tracking-wider">
              Connect With Me
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors ${link.color}`}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {personalInfo?.cv && (
            <motion.a
              href={personalInfo.cv}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/20 transition-all"
            >
              <Download size={18} />
              Download My CV
            </motion.a>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default About;