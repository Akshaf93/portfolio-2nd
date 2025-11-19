import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-black mb-8">Initialize Communication</h2>
        <p className="text-slate-400 mb-12">
          Have a project in mind? Whether it's robotics, product design, or simulation, 
          let's discuss the parameters.
        </p>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-6 text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-xs font-mono text-[#00d8ff] mb-2">INPUT: NAME</label>
              <input type="text" className="bg-slate-800 border border-slate-700 p-3 rounded focus:border-[#00d8ff] focus:outline-none text-white" placeholder="John Doe" />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-mono text-[#00d8ff] mb-2">INPUT: EMAIL</label>
              <input type="email" className="bg-slate-800 border border-slate-700 p-3 rounded focus:border-[#00d8ff] focus:outline-none text-white" placeholder="john@example.com" />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-xs font-mono text-[#00d8ff] mb-2">INPUT: MESSAGE</label>
            <textarea rows="4" className="bg-slate-800 border border-slate-700 p-3 rounded focus:border-[#00d8ff] focus:outline-none text-white" placeholder="Project details..."></textarea>
          </div>

          <button className="w-full bg-[#00d8ff] text-slate-900 font-bold py-4 rounded hover:bg-white transition-all duration-300 uppercase tracking-widest">
            Transmit Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;