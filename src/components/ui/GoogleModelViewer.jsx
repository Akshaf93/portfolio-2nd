import React from 'react';

const GoogleModelViewer = ({ src }) => {
  return (
    <div className="w-full h-full bg-slate-950 relative rounded-lg overflow-hidden border border-slate-800">
      
      <model-viewer 
        src={src || "/models/rover.glb"} 
        poster="/images/poster.webp" 
        
        // YOUR SPECIFIC SETTINGS
        ar 
        ar-modes="webxr scene-viewer quick-look" 
        camera-controls 
        tone-mapping="neutral" 
        shadow-intensity="1.29" 
        shadow-softness="0.99"
        exposure="1" 
        auto-rotate 
        camera-orbit="-301.5deg 57.28deg 1.085m" 
        field-of-view="30deg" 
        environment-image="legacy"
        
        // REACT STYLING
        style={{ width: '100%', height: '100%', backgroundColor: '#020617' }}
        alt="ASME Rover Engineering Model"
      >
        
        {/* --- HOTSPOT 1: SCOOP --- */}
        <button className="Hotspot" slot="hotspot-1" 
          data-position="0.157m 0.127m 0.095m" data-normal="0m 0m 1m" data-visibility-attribute="visible">
            <div className="HotspotAnnotation">Scoop Assy</div>
        </button>

        {/* --- HOTSPOT 2: TRACKS --- */}
        <button className="Hotspot" slot="hotspot-3" 
          data-position="-0.057m 0.019m 0.151m" data-normal="0.178m 0.983m 0m" data-visibility-attribute="visible">
            <div className="HotspotAnnotation">Rubber Tracks</div>
        </button>

        {/* --- HOTSPOT 3: SPROCKETS --- */}
        <button className="Hotspot" slot="hotspot-4" 
          data-position="0.020m 0.045m 0.116m" data-normal="0m 0m 1m" data-visibility-attribute="visible">
            <div className="HotspotAnnotation">Drive Sprocket</div>
        </button>

        {/* --- HOTSPOT 4: MOTORS --- */}
        <button className="Hotspot" slot="hotspot-5" 
          data-position="0.026m 0.048m 0.038m" data-normal="0.979m -0.202m 0m" data-visibility-attribute="visible">
            <div className="HotspotAnnotation">DC Motors (12V)</div>
        </button>

        {/* --- HOTSPOT 5: CHASSIS --- */}
        <button className="Hotspot" slot="hotspot-7" 
          data-position="-0.115m 0.069m 0.005m" data-normal="0m 1m 0m" data-visibility-attribute="visible">
            <div className="HotspotAnnotation">Al-Chassis</div>
        </button>

        {/* LOADING BAR */}
        <div className="progress-bar hide" slot="progress-bar">
            <div className="update-bar"></div>
        </div>

        {/* AR BUTTON */}
        <button slot="ar-button" className="bg-[#00d8ff] text-black absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded border-none cursor-pointer z-50">
            VIEW IN AR
        </button>

      </model-viewer>

      {/* Static Overlay */}
      <div className="absolute bottom-4 right-4 bg-slate-900/80 px-3 py-1 rounded text-[10px] text-slate-400 font-mono pointer-events-none z-10 border border-slate-700">
        INTERACTIVE_VIEWER // GOOGLE_ENGINE
      </div>
    </div>
  );
};

export default GoogleModelViewer;