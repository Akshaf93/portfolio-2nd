import React, { Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ModelViewer from './ModelViewer';

// 1. DIRECT IMPORT: We import the Rover model here directly
import RoverModel from '../canvas/RoverModel'; 

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  // 2. LOGIC: Check if this is the Rover project
  const isRoverProject = project.title.includes("Rover") || project.id === "01";

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
                    {project.category || "ENGINEERING"}
                  </span>
                </div>
              </div>
              <button onClick={onClose} className="text-slate-400 hover:text-white text-2xl">&times;</button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto custom-scrollbar flex-grow p-6">
              
              {/* --- 3D VIEWER AREA --- */}
              <div className="mb-8">
                 {isRoverProject ? (
                    // 3. RENDER: If it is the Rover, show the ModelViewer
                    <ModelViewer>
                       <RoverModel />
                    </ModelViewer>
                 ) : (
                    // Fallback for other projects
                    <div className="w-full h-[400px] bg-slate-800 rounded-lg flex items-center justify-center text-slate-500 font-mono">
                       [STATIC_IMAGE_PLACEHOLDER]
                    </div>
                 )}
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                    <div>
                        <h4 className="text-[#00d8ff] font-mono text-sm font-bold mb-2">/// OBJECTIVE</h4>
                        <p className="text-slate-300 leading-relaxed text-sm">
                           {project.fullDesc?.overview || project.desc}
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-slate-950 p-4 rounded border border-slate-800">
                        <h4 className="text-slate-500 font-mono text-xs mb-3">TECH STACK</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tech && project.tech.map(t => (
                                <span key={t} className="text-xs text-white bg-slate-800 px-2 py-1 rounded border border-slate-700">{t}</span>
                            ))}
                        </div>
                    </div>
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