import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import profileImg from '../../assets/profile.jpg';
import { useTheme } from '../../context/ThemeContext';

const Hero = () => {
    const { theme } = useTheme();

    return (
        <section id="hero" className="min-h-[88vh] flex items-center justify-center px-6 relative overflow-hidden py-12 transition-colors duration-500">
            
            {/* Dynamic Sea Waves Glow Effect */}
            <motion.div
                animate={{
                    scale: [1, 1.25, 1],
                    opacity: theme === 'dark' ? [0.2, 0.4, 0.2] : [0.4, 0.6, 0.4],
                    rotate: [0, 90, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 ${
                    theme === 'dark' 
                    ? 'bg-gradient-to-br from-cyan-600/30 via-blue-900/30 to-teal-500/20' 
                    : 'bg-gradient-to-br from-cyan-300/70 via-sky-200/60 to-blue-300/50'
                }`}
            />

            {/* Grid Pattern */}
            <div className={`absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none ${
                theme === 'dark' ? 'opacity-30' : 'opacity-40'
            }`} />

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight mb-4 transition-colors">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-teal-400 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">{personalInfo.name}</span>
                    </h1>
                    <p className="text-lg text-slate-700 dark:text-slate-300 font-medium mb-4 transition-colors">
                        {personalInfo.title}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 transition-colors">
                        {personalInfo.bio}
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <a href="#projects" className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white dark:text-slate-950 font-semibold px-6 py-3 rounded-lg transition-all text-sm shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95">
                            View Projects <ArrowRight size={16} />
                        </a>
                        <a href="#contact" className="flex items-center gap-2 border border-slate-300 dark:border-slate-700 hover:border-cyan-500/50 text-slate-800 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 px-6 py-3 rounded-lg transition-all text-sm bg-white/70 dark:bg-slate-900/50 backdrop-blur-sm hover:scale-105 active:scale-95 shadow-sm">
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                        className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl p-1 bg-gradient-to-tr from-cyan-400 via-teal-400 to-blue-600 shadow-2xl shadow-cyan-500/20 group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>

                        <div className="w-full h-full bg-slate-100 dark:bg-slate-950 rounded-[14px] overflow-hidden flex items-center justify-center relative z-10 transition-colors">
                            <img
                                src={profileImg}
                                alt={personalInfo.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 dark:from-slate-950/80 via-transparent to-transparent opacity-60" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;