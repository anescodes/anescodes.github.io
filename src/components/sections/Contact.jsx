import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const Contact = () => {
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // IMPORTANT:
    // This only changes the UI.
    // It does NOT actually send an email yet.
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-4xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
          Contact
        </p>

        <h2 className="text-3xl font-bold text-text mb-3">
          Get In Touch
        </h2>

        <p className="text-text-muted text-sm">
          Have a project or collaboration idea? Drop a message.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 bg-surface border border-border rounded-2xl p-8 shadow-sm">

        {/* Left side */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-text mb-4">
              Let's Connect
            </h3>

            <p className="text-text-muted text-sm leading-relaxed mb-8">
              I am open to software development projects, technical
              discussions, and professional opportunities.
            </p>
          </div>

          <div className="space-y-4 text-sm text-text-muted">

            <div className="flex items-center gap-3">
              <Mail size={16} className="text-accent" />
              <span>{personalInfo.email}</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-accent" />
              <span>{personalInfo.location}</span>
            </div>

          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={sendEmail}
          className="space-y-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full bg-surface-muted border border-border rounded-lg p-3 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full bg-surface-muted border border-border rounded-lg p-3 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full bg-surface-muted border border-border rounded-lg p-3 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
          />

          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent-hover text-on-accent font-semibold p-3 rounded-lg text-sm flex items-center justify-center gap-2 transition-all shadow-sm hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            {sent ? (
              'Message Sent!'
            ) : (
              <>
                <Send size={14} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;