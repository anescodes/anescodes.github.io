import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../../data/portfolioData';

const Contact = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-slate-100 mb-3">Get In Touch</h2>
        <p className="text-slate-400 text-sm">Have a project or remote opportunity? Drop a message!</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 bg-slate-900/40 border border-slate-800 rounded-2xl p-8">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-200 mb-4">Let's Connect</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-8">
              I am open to part-time software development roles, contract work, or technical discussions.
            </p>
          </div>
          <div className="space-y-4 text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-cyan-400" />
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-cyan-400" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <input 
            type="text" 
            name="user_name" 
            placeholder="Your Name" 
            required 
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
          />
          <input 
            type="email" 
            name="user_email" 
            placeholder="Your Email" 
            required 
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
          />
          <textarea 
            name="message" 
            rows="4" 
            placeholder="Your Message" 
            required 
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
          />
          <button 
            type="submit" 
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold p-3 rounded-lg text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/10"
          >
            {sent ? "Message Sent!" : <><Send size={14} /> Send Message</>}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;