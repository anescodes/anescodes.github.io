import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

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
    },
    {
      icon: LinkedinIcon,
      url: personalInfo.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      url: `mailto:${personalInfo.email}`,
      label: 'Email',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 max-w-6xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            About
          </p>

          <h2 className="text-3xl font-bold text-text mb-6">
            About Me
          </h2>

          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              I am deeply passionate about Artificial Intelligence and
              Cybersecurity, driven by a mindset that prioritizes{' '}
              <span className="text-accent font-semibold">
                quality over quantity
              </span>{' '}
              in every system and solution I build.
            </p>

            <p>
              My philosophy centers around continuous learning and
              technical rigor. Whether exploring intelligent
              architectures, secure data workflows, or resilient
              engineering principles, I strive to deeply understand
              the core fundamentals rather than just scratching the
              surface.
            </p>

            <p>
              Committed to lifelong growth and innovation, I continuously
              refine my expertise to craft clean, robust, and secure
              technological solutions.
            </p>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            Get in touch
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5">
            {[
              { label: 'Projects', value: '2+' },
              { label: 'Technologies', value: '10+' },
              { label: 'Academic Degrees', value: '3' },
              { label: 'Learning Focus', value: 'AI' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-surface border border-border rounded-xl p-6 text-center shadow-sm hover:border-accent/30 transition-all"
              >
                <p className="text-2xl font-bold text-accent">
                  {stat.value}
                </p>

                <p className="text-xs font-semibold text-text-muted mt-2 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Social */}
          <div className="bg-surface border border-border rounded-xl p-6 shadow-sm">
            <p className="text-sm font-semibold text-text mb-4 uppercase tracking-wider">
              Connect With Me
            </p>

            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-lg bg-surface-muted text-text-muted hover:text-accent transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* CV */}
          {personalInfo?.cv && (
            <motion.a
              href={personalInfo.cv}
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-on-accent font-semibold rounded-lg shadow-sm transition-all"
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