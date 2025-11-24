import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stage, OrbitControls, Html, useProgress } from '@react-three/drei';
import ErrorBoundary from './ErrorBoundary';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-[#00d8ff] font-mono text-xs whitespace-nowrap bg-slate-900/80 px-2 py-1 rounded border border-slate-700">
        LOADING_PLASTIC_MATRIX... {progress.toFixed(0)}%
      </div>
    </Html>
  );
}

const ModelViewer = ({ children }) => {
  return (
    <div className="w-full h-[400px] bg-slate-950 rounded-lg overflow-hidden border border-slate-800 relative shadow-inner">
      <ErrorBoundary>
        <Canvas 
          dpr={[1, 2]} 
          camera={{ fov: 40, position: [4, 4, 4] }} 
          shadows
          className="relative z-10 bg-slate-900" 
        >
          <Suspense fallback={<Loader />}>
            {/* PLASTIC LIGHTING SETUP:
               - environment="studio": Very soft, neutral white light. No harsh reflections.
               - intensity={0.6}: Keeps it from glowing.
               - contactShadow opacity={0.5}: Softer shadow on the floor.
            */}
            <Stage 
                environment="studio" 
                intensity={0.6} 
                contactShadow={true} 
                shadows="contact" 
                adjustCamera={true}
            >
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