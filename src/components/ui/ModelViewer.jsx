import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stage, OrbitControls, Html, useProgress } from '@react-three/drei';
import ErrorBoundary from './ErrorBoundary';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-[#00d8ff] font-mono text-xs whitespace-nowrap bg-slate-900/80 px-2 py-1 rounded border border-slate-700">
        LOADING_CAD_DATA... {progress.toFixed(0)}%
      </div>
    </Html>
  );
}

const ModelViewer = ({ children }) => {
  return (
    <div className="w-full h-[400px] bg-slate-950 rounded-lg overflow-hidden border border-slate-800 relative">
      <ErrorBoundary>
        <Canvas 
          dpr={[1, 2]} 
          camera={{ fov: 45 }} 
          shadows
          className="relative z-10 bg-slate-950"
        >
          <Suspense fallback={<Loader />}>
            {/* FIX: 
               1. Changed preset to 'rembrandt' (softer) 
               2. Lowered intensity to 0.15 (prevents whiteout)
            */}
            <Stage environment="city" intensity={0.15} contactShadow={false}>
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