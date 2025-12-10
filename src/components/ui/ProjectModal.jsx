import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// 1. Import the new Google Wrapper
import GoogleModelViewer from './GoogleModelViewer'; 

const ProjectModal = ({ project, onClose }) => {
  const [activeView, setActiveView] = useState('model'); 
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      setActiveView('model'); 
      setActiveImageIndex(0);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  // Check if this project has a specific 3D model file
  const isRoverProject = project.id === "01" || project.title.includes("Rover");
  const hasGallery = project.gallery && project.gallery.length > 0;

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
            {/* ... (HEADER CODE REMAINS THE SAME) ... */}
            <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-950 shrink-0">
               {/* ... Keep Header Content ... */}
               <div className="flex gap-2">
                 <button onClick={() => setActiveView('model')} className={`px-4 py-2 text-xs font-mono font-bold border ${activeView === 'model' ? 'bg-[#00d8ff] text-black border-[#00d8ff]' : 'text-slate-400 border-slate-700'}`}>CAD_VIEW</button>
                 {hasGallery && <button onClick={() => setActiveView('gallery')} className={`px-4 py-2 text-xs font-mono font-bold border ${activeView === 'gallery' ? 'bg-[#00d8ff] text-black border-[#00d8ff]' : 'text-slate-400 border-slate-700'}`}>GALLERY</button>}
                 <button onClick={onClose} className="ml-4 text-slate-400 hover:text-white text-2xl font-bold px-2">&times;</button>
               </div>
            </div>

            <div className="overflow-y-auto custom-scrollbar flex-grow p-6">
              
              <div className="mb-8 w-full h-[450px] bg-slate-950 rounded-lg border border-slate-800 relative overflow-hidden">
                 
                 {/* VIEW 1: GOOGLE MODEL VIEWER */}
                 {activeView === 'model' && (
                    isRoverProject ? (
                        // 2. USE THE NEW COMPONENT
                        <GoogleModelViewer src="/models/rover.glb" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-500 font-mono flex-col gap-2">
                           <span>NO_3D_DATA_AVAILABLE</span>
                        </div>
                    )
                 )}

                 {/* VIEW 2: GALLERY (Keep existing code) */}
                 {activeView === 'gallery' && (
                    <div className="w-full h-full flex flex-col">
                        <div className="flex-grow relative bg-black/50 flex items-center justify-center overflow-hidden">
                            <img src={project.gallery[activeImageIndex].src} className="max-w-full max-h-full object-contain" alt="gallery" />
                            <div className="absolute bottom-0 left-0 w-full bg-black/70 p-2 border-t border-slate-800">
                                <p className="text-[#00d8ff] font-mono text-xs text-center">{project.gallery[activeImageIndex].caption}</p>
                            </div>
                        </div>
                        <div className="h-20 bg-slate-900 border-t border-slate-800 flex items-center gap-2 px-4 overflow-x-auto">
                            {project.gallery.map((item, idx) => (
                                <button key={idx} onClick={() => setActiveImageIndex(idx)} className={`w-24 h-16 border-2 shrink-0 ${activeImageIndex === idx ? 'border-[#00d8ff]' : 'border-transparent opacity-50'}`}>
                                    <img src={item.src} className="w-full h-full object-cover" alt="thumb" />
                                </button>
                            ))}
                        </div>
                    </div>
                 )}
              </div>

              {/* ... (REST OF DETAILS SECTION REMAINS THE SAME) ... */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {/* ... Keep the objective/tech stack text ... */}
                  <div className="md:col-span-2 space-y-6">
                      <h4 className="text-[#00d8ff] font-mono text-sm font-bold mb-2">/// PROJECT_DETAILS</h4>
                      <p className="text-slate-300 text-sm">{project.fullDesc?.overview || project.desc}</p>
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