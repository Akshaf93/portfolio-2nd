import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800" id="contact">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Section Header - Clean & Direct */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Project Inquiries
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Currently available for collaboration on robotics, mechanical design, and simulation projects.
            Please provide technical requirements below.
          </p>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900/50 p-8 rounded-lg border border-slate-800 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            
            {/* Name Input */}
            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Name
              </label>
              <input 
                type="text" 
                className="bg-slate-950 border border-slate-700 text-slate-200 p-3 rounded-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all" 
                placeholder="Enter your name" 
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input 
                type="email" 
                className="bg-slate-950 border border-slate-700 text-slate-200 p-3 rounded-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all" 
                placeholder="name@company.com" 
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="flex flex-col mb-8">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Project Details
            </label>
            <textarea 
              rows="5" 
              className="bg-slate-950 border border-slate-700 text-slate-200 p-3 rounded-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all resize-none" 
              placeholder="Outline technical specifications or inquiry..."
            ></textarea>
          </div>

          {/* Action Button */}
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-sm transition-all shadow-lg hover:shadow-orange-500/20 uppercase tracking-wide text-sm">
            Send Message
          </button>

        </motion.form>
      </div>
    </section>
  );
};

export default Contact;