import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion, useInView } from 'framer-motion';
import EngineeringMesh from '../canvas/EngineeringMesh';
import { motion } from 'framer-motion';

const Hero = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.1 });

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-screen flex items-center overflow-hidden"
    >
      
      {/* LEFT SIDE: Text & Controls */}
    {/* LEFT SIDE: Text & Controls */}
    <div className="w-full md:w-1/2 pl-8 md:pl-24 z-20 flex flex-col justify-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-orange-500 font-mono text-xs font-bold tracking-widest mb-6">
          MECHANICAL ENGINEER // DESIGN PORTFOLIO
        </h2>
        
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
          Design. <br />
          Simulate. <br />
          <span className="text-slate-400">Fabricate.</span>
        </h1>

        <p className="text-slate-400 text-lg max-w-md leading-relaxed mb-8 border-l-4 border-orange-500 pl-6">
          Bridging the gap between solid mechanics, thermodynamics, and embedded systems at NUST.
        </p>

        <div className="flex gap-6">
          <button className="px-8 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition-all shadow-lg">
            View Projects
          </button>
          <button className="px-8 py-3 border border-slate-600 text-slate-300 rounded hover:bg-slate-800 transition-all">
            Download Resume
          </button>
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white font-mono tracking-wider">
              ASME ROVER V2
            </span>
            {/* Simple Green LED Dot */}
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></span>
          </div>
        </div>
      </motion.div>
    </div>
      {/* RIGHT SIDE: The 3D Machine */}
      <div className="absolute inset-0 md:static md:w-1/2 h-full z-10 opacity-30 md:opacity-100 pointer-events-none md:pointer-events-auto">
        <Canvas 
          camera={{ position: [3, 2, 5], fov: 50 }}
          dpr={[1, 2]}
          gl={{ antialias: true, powerPreference: "high-performance" }}
          frameloop={isInView ? "always" : "never"}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#00d8ff" />
          <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#ff0000" />
          
          <EngineeringMesh position={[0, 0, 0]} />
          
          <OrbitControls enableZoom={false} autoRotate={isInView} autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#050a14] to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Hero;