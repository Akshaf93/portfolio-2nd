import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import EngineeringMesh from '../canvas/EngineeringMesh';
import GlitchText from '../ui/GlitchText'; // Assuming you kept this
import { motion, useInView } from 'framer-motion';

const Hero = () => {
  // 1. Create a reference for the section
  const sectionRef = useRef(null);
  
  // 2. Check if the section is in the viewport
  const isInView = useInView(sectionRef, { amount: 0.1 }); // Triggers when 10% visible

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-screen flex items-center overflow-hidden"
    >
      
      {/* ... (Keep your LEFT SIDE text code exactly the same) ... */}
      <div className="w-full md:w-1/2 pl-8 md:pl-24 z-20 flex flex-col justify-center h-full pointer-events-none md:pointer-events-auto">
        {/* ... Your existing text code ... */}
         <div className="pointer-events-auto"> 
            {/* Ensure buttons are clickable */}
             <h1 className="text-5xl md:text-7xl font-black leading-none mb-6">
                <GlitchText text="DESIGN." className="block" />
                <span className="text-slate-600">SIMULATE.</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d8ff] to-white">
                BUILD.
                </span>
            </h1>
            {/* ... etc ... */}
         </div>
      </div>

      {/* RIGHT SIDE: The Machine (Canvas) */}
      <div className="absolute inset-0 md:static md:w-1/2 h-full z-10 opacity-40 md:opacity-100">
        
        {/* OPTIMIZATION: Only render Canvas if we are near the top of the page to save initial load time. 
            Also, use frameloop to PAUSE the engine when scrolled away. */}
        <Canvas 
          camera={{ position: [3, 2, 5], fov: 50 }}
          dpr={[1, 2]} // Clamped pixel ratio
          gl={{ antialias: true, powerPreference: "high-performance" }}
          frameloop={isInView ? "always" : "never"} // <--- THE BATTERY SAVER
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#00d8ff" />
          
          {/* Optimization: Removed the second red light. One directional light is cheaper. */}
          
          <EngineeringMesh position={[0, 0, 0]} />
          
          <OrbitControls enableZoom={false} autoRotate={isInView} autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#050a14] to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Hero;