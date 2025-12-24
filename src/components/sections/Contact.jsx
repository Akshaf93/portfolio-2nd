import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState(null); // null, 'submitting', 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate network request
    setTimeout(() => setStatus('success'), 1000);
  };

  if (status === 'success') {
    return (
      <section className="py-24 bg-slate-950 flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-slate-300"
        >
          <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
          <p className="mb-6">I'll get back to you shortly.</p>
          <button 
            onClick={() => setStatus(null)}
            className="text-orange-500 font-medium hover:text-orange-400 text-sm transition-colors"
          >
            Send another message
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-slate-950" id="contact">
      <div className="max-w-xl mx-auto px-6">
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
          <p className="text-slate-400 leading-relaxed">
            Interested in collaboration? Please enter your details below.
          </p>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Simple Grid for Name/Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-500">Name</label>
              <input 
                required
                type="text" 
                className="w-full bg-slate-900 rounded border border-slate-800 px-4 py-3 text-slate-200 focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-500">Email</label>
              <input 
                required
                type="email" 
                className="w-full bg-slate-900 rounded border border-slate-800 px-4 py-3 text-slate-200 focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-500">Message</label>
            <textarea 
              required
              rows="4" 
              className="w-full bg-slate-900 rounded border border-slate-800 px-4 py-3 text-slate-200 focus:outline-none focus:border-orange-500 transition-colors resize-none"
            ></textarea>
          </div>

          <button 
            disabled={status === 'submitting'}
            className="bg-white text-slate-950 px-8 py-3 rounded font-bold hover:bg-orange-500 hover:text-white transition-all disabled:opacity-50"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;