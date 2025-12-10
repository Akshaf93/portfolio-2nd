import React from 'react';

const GoogleModelViewer = ({ src, poster }) => {
  return (
    <div className="w-full h-full bg-slate-950 relative rounded-lg overflow-hidden border border-slate-800">
      
      {/* The Custom Element from modelviewer.dev */}
      <model-viewer
        src={src}
        poster={poster} // Optional: A static image while loading
        
        // VISUAL SETTINGS
        shadow-intensity="1"
        camera-controls       // Enables mouse/touch interaction
        touch-action="pan-y"  // smooth scrolling on mobile
        auto-rotate           // Spin automatically
        
        // ENVIRONMENT (This replaces the "Stage" lighting)
        environment-image="neutral" // "neutral" is best for engineering parts
        exposure="1"
        
        // STYLE
        style={{ width: '100%', height: '100%', backgroundColor: '#020617' }} // slate-950
        alt="3D Engineering Model"
      >
        
        {/* CUSTOM SLOT: Loading Bar */}
        <div slot="progress-bar" className="absolute top-0 left-0 w-full h-1 bg-slate-800">
          <div className="h-full bg-[#00d8ff] origin-left transition-all duration-300" style={{ width: '100%' }}></div>
        </div>

        {/* CUSTOM SLOT: AR Button (Mobile Only) */}
        <button slot="ar-button" className="absolute top-4 right-4 bg-[#00d8ff] text-black font-bold text-xs px-3 py-1 rounded border-none cursor-pointer">
          VIEW IN AR
        </button>

        {/* CUSTOM SLOT: Poster (If you have one) */}
        <div slot="poster" className="flex items-center justify-center w-full h-full text-[#00d8ff] font-mono text-xs">
           LOADING_SYSTEM_DATA...
        </div>

      </model-viewer>

      {/* Static HUD Overlay */}
      <div className="absolute bottom-4 right-4 bg-slate-900/80 px-3 py-1 rounded text-[10px] text-slate-400 font-mono pointer-events-none z-10 border border-slate-700">
        INTERACTIVE_VIEWER // GOOGLE_ENGINE
      </div>
    </div>
  );
};

export default GoogleModelViewer;