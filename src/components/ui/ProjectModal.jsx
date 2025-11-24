import React, { useEffect } from 'react'; // Import useEffect
import { motion, AnimatePresence } from 'framer-motion';
import ModelViewer from './ModelViewer';
import RoverModel from '../canvas/RoverModel'; 

const ProjectModal = ({ project, onClose }) => {
  // 1. SCROLL LOCK EFFECT
  useEffect(() => {
    if (project) {
      // Prevent scrolling on the main page
      document.body.style.overflow = 'hidden';
    }
    return () => {
      // Re-enable scrolling when modal closes
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const isRoverProject = project.title.includes("Rover") || project.id === "01";

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            className="bg-slate-900 border border-slate-700 w-full max-w-5xl max-h-[90vh] rounded-lg shadow-2xl overflow-hidden flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-950 shrink-0">
              <div>
                <h3 className="text-2xl font-bold text-white font-mono">{project.title}</h3>
                <div className="flex gap-2 mt-1">
                  <span className="text-[#00d8ff] text-xs font-mono border border-[#00d8ff]/30 px-2 py-0.5 rounded bg-[#00d8ff]/5">
                    {project.category || "ENGINEERING"}
                  </span>
                </div>
              </div>
              <button onClick={onClose} className="text-slate-400 hover:text-white text-2xl font-bold p-2">&times;</button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto custom-scrollbar flex-grow p-6">
              
              {/* 3D Viewer Area */}
              <div className="mb-8">
                 {isRoverProject ? (
                    <ModelViewer>
                       <RoverModel />
                    </ModelViewer>
                 ) : (
                    <div className="w-full h-[400px] bg-slate-800 rounded-lg flex items-center justify-center text-slate-500 font-mono">
                       [STATIC_IMAGE_PLACEHOLDER]
                    </div>
                 )}
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                    <div>
                        <h4 className="text-[#00d8ff] font-mono text-sm font-bold mb-2">/// OBJECTIVE</h4>
                        <p className="text-slate-300 leading-relaxed text-sm">
                           {project.fullDesc?.overview || project.desc}
                        </p>
                    </div>
                    {/* Add Challenge/Solution sections if available */}
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