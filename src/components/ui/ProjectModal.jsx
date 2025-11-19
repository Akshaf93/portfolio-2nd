import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ModelViewer from './ModelViewer';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            className="bg-slate-900 border border-slate-700 w-full max-w-5xl max-h-[90vh] rounded-lg shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-950">
              <div>
                <h3 className="text-2xl font-bold text-white font-mono">{project.title}</h3>
                <div className="flex gap-2 mt-1">
                  <span className="text-[#00d8ff] text-xs font-mono border border-[#00d8ff]/30 px-2 py-0.5 rounded bg-[#00d8ff]/5">
                    {project.category}
                  </span>
                  <span className="text-slate-400 text-xs font-mono border border-slate-700 px-2 py-0.5 rounded">
                    STATUS: {project.status}
                  </span>
                </div>
              </div>
              <button onClick={onClose} className="text-slate-400 hover:text-white text-2xl">&times;</button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto custom-scrollbar flex-grow p-6">
              
              {/* --- THE MEDIA AREA --- */}
              <div className="mb-8">
                {/* Check if the project has a 3D Component passed to it */}
                {project.ModelComponent ? (
                   <ModelViewer>
                      <project.ModelComponent />
                   </ModelViewer>
                ) : (
                   // Fallback to image if no 3D model exists
                   <div className="w-full h-[400px] bg-slate-800 rounded-lg flex items-center justify-center text-slate-500 font-mono">
                      [NO_3D_DATA_AVAILABLE]
                   </div>
                )}
              </div>

              {/* Project Details (Grid Layout) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Left Col: Description */}
                <div className="md:col-span-2 space-y-6">
                    <div>
                        <h4 className="text-[#00d8ff] font-mono text-sm font-bold mb-2">/// OBJECTIVE</h4>
                        <p className="text-slate-300 leading-relaxed text-sm">{project.fullDesc.overview}</p>
                    </div>
                    <div>
                        <h4 className="text-[#00d8ff] font-mono text-sm font-bold mb-2">/// TECHNICAL_CHALLENGE</h4>
                        <p className="text-slate-300 leading-relaxed text-sm">{project.fullDesc.challenge}</p>
                    </div>
                    <div>
                        <h4 className="text-[#00d8ff] font-mono text-sm font-bold mb-2">/// SOLUTION_MATRIX</h4>
                         <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
                            {project.fullDesc.approachPoints.map((p, i) => <li key={i}>{p}</li>)}
                         </ul>
                    </div>
                </div>

                {/* Right Col: Meta Data */}
                <div className="space-y-6">
                    <div className="bg-slate-950 p-4 rounded border border-slate-800">
                        <h4 className="text-slate-500 font-mono text-xs mb-3">TECH STACK</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map(t => (
                                <span key={t} className="text-xs text-white bg-slate-800 px-2 py-1 rounded border border-slate-700">{t}</span>
                            ))}
                        </div>
                    </div>
                    
                    <button className="w-full py-3 bg-slate-800 hover:bg-[#00d8ff] hover:text-black text-white border border-slate-700 transition-colors font-mono text-sm font-bold">
                        VIEW GITHUB REPO
                    </button>
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;