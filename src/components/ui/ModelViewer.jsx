import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stage, OrbitControls } from '@react-three/drei';
import ErrorBoundary from './ErrorBoundary'; // Import the shield

const ModelViewer = ({ children }) => {
  return (
    <div className="w-full h-[400px] bg-slate-950 rounded-lg overflow-hidden border border-slate-800 relative">
      
      {/* Loading Text */}
      <div className="absolute inset-0 flex items-center justify-center text-[#00d8ff] font-mono text-xs pointer-events-none z-0">
        LOADING_CAD_DATA...
      </div>

      {/* 1. WRAP CANVAS IN ERROR BOUNDARY */}
      <ErrorBoundary>
        <Canvas 
          dpr={[1, 2]} 
          camera={{ fov: 45 }} 
          shadows
          className="relative z-10"
        >
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6} contactShadow={false}>
              {children}
            </Stage>
          </Suspense>
          <OrbitControls autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </ErrorBoundary>

      <div className="absolute bottom-4 right-4 bg-slate-900/80 px-3 py-1 rounded text-[10px] text-slate-400 font-mono pointer-events-none z-20 border border-slate-700">
        DRAG TO ROTATE
      </div>
    </div>
  );
};

export default ModelViewer;