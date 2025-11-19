import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null; // Don't render if no project is selected

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={onClose} // Close when clicking outside the modal content
        >
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-slate-900 border border-slate-700 w-full max-w-4xl max-h-[90vh] rounded-lg shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Modal Header */}
            <div className="relative p-6 border-b border-slate-800 bg-slate-950 flex justify-between items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-[#00d8ff] font-mono text-sm">{project.category}</p>
              </div>
              <button 
                onClick={onClose} 
                className="text-slate-500 hover:text-white transition-colors text-2xl"
              >
                &times;
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="p-6 overflow-y-auto custom-scrollbar flex-grow">
              {/* Main Image/Render */}
              <div className="w-full h-64 bg-slate-800 rounded mb-6 flex items-center justify-center text-slate-500 font-mono text-sm">
                {/* Replace with an actual image later */}
                [Detailed Render of {project.title}]
              </div>

              {/* Overview */}
              <h4 className="text-xl font-bold text-[#00d8ff] mb-3 border-b border-slate-800 pb-2">01. OVERVIEW</h4>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {project.fullDesc.overview}
              </p>

              {/* Engineering Challenge */}
              <h4 className="text-xl font-bold text-[#00d8ff] mb-3 border-b border-slate-800 pb-2">02. CHALLENGE & APPROACH</h4>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {project.fullDesc.challenge}
              </p>
              <ul className="list-disc list-inside text-slate-400 mb-6 space-y-2">
                {project.fullDesc.approachPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              {/* Technologies Utilized */}
              <h4 className="text-xl font-bold text-[#00d8ff] mb-3 border-b border-slate-800 pb-2">03. TECHNOLOGIES & TOOLS</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tag) => (
                  <span key={tag} className="text-xs font-mono bg-slate-800 px-3 py-1 rounded border border-slate-700 text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Results & Conclusion */}
              <h4 className="text-xl font-bold text-[#00d8ff] mb-3 border-b border-slate-800 pb-2">04. RESULTS & KEY LEARNINGS</h4>
              <p className="text-slate-300 leading-relaxed">
                {project.fullDesc.results}
              </p>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950 flex justify-end">
              <a 
                href={project.githubLink} // Example link
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-700 text-slate-200 px-6 py-2 rounded hover:bg-[#00d8ff] hover:text-slate-900 transition-all font-mono text-sm"
              >
                VIEW GITHUB
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;