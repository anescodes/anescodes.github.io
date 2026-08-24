import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import profileImg from '../../assets/profile.jpg';
const Hero = () => {
    return (
        <section id="hero" className="min-h-[88vh] flex items-center justify-center px-6 relative overflow-hidden py-12">
            {/* Dynamic Glow Effect */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-medium mb-6">
                        <Sparkles size={14} /> Open for Part-Time Remote Work
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-100 leading-tight mb-4">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{personalInfo.name}</span>
                    </h1>
                    <p className="text-lg text-slate-300 font-medium mb-4">
                        {personalInfo.title}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8">
                        {personalInfo.bio}
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <a href="#projects" className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6 py-3 rounded-lg transition-all text-sm shadow-lg shadow-cyan-500/20">
                            View Projects <ArrowRight size={16} />
                        </a>
                        <a href="#contact" className="flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 px-6 py-3 rounded-lg transition-all text-sm bg-slate-900/50">
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                {/* Movable Interactive Profile Frame */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl p-1 bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-500 shadow-2xl shadow-cyan-500/10"
                    >
                        <div className="w-full h-full bg-slate-900 rounded-[14px] overflow-hidden flex items-center justify-center relative group">
                            {/* Image Placeholder or Actual Image */}
                            <img
                                src={profileImg}
                                alt={personalInfo.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;