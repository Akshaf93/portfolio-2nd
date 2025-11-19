import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stage, OrbitControls } from '@react-three/drei';

const ModelViewer = ({ children }) => {
  return (
    <div className="w-full h-[400px] bg-slate-950 rounded-lg overflow-hidden border border-slate-800 relative">
      
      {/* 1. Fallback Text (Visible while loading) */}
      <div className="absolute inset-0 flex items-center justify-center text-[#00d8ff] font-mono text-xs pointer-events-none z-0">
        LOADING_SYSTEM...
      </div>

      <Canvas 
        dpr={[1, 2]} 
        camera={{ position: [0, 0, 5], fov: 50 }} // Explicit camera position
        shadows
        className="relative z-10"
      >
        {/* 2. Suspense Fallback is null because we have the text behind the canvas */}
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6} contactShadow={false}>
            {children}
          </Stage>
        </Suspense>
        <OrbitControls autoRotate autoRotateSpeed={1.0} />
      </Canvas>

      <div className="absolute bottom-4 right-4 bg-slate-900/80 px-3 py-1 rounded text-[10px] text-slate-400 font-mono pointer-events-none z-20 border border-slate-700">
        DEBUG MODE
      </div>
    </div>
  );
};

export default ModelViewer;