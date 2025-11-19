import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import EngineeringMesh from '../canvas/EngineeringMesh';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-slate-900 overflow-hidden">
      
      {/* 1. The HTML Overlay (Text) */}
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 flex flex-col items-start gap-5 z-10 pointer-events-none">
        {/* pointer-events-none ensures the text doesn't block mouse interaction with the 3D model */}
        
        <h1 className="text-white font-black text-6xl sm:text-8xl">
          Hello, I'm <span className="text-[#00d8ff]">Alex</span>
        </h1>
        
        <p className="mt-2 text-slate-300 text-xl sm:text-2xl max-w-lg font-mono">
          Mechanical Engineer | CAD Designer <br />
          Bridging the gap between solid mechanics and digital experience.
        </p>

        <div className="pointer-events-auto mt-8">
           <button className="bg-[#00d8ff] text-slate-900 font-bold py-3 px-8 rounded hover:bg-white transition-colors duration-300">
             View My Work
           </button>
        </div>
      </div>

      {/* 2. The 3D Scene Canvas */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          
          {/* The Rotating Object */}
          {/* We shift it to the right (position-x: 2) so it doesn't overlap the text */}
          <EngineeringMesh position={[2, 0, 0]} />

          {/* Mouse Controls (Optional: allows user to rotate the camera) */}
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;