import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import EngineeringMesh from '../canvas/EngineeringMesh';
import { motion } from 'framer-motion';
import GlitchText from '../ui/GlitchText';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center">
      
      {/* LEFT SIDE: The Specs (Text) */}
      <div className="w-full md:w-1/2 pl-8 md:pl-24 z-20 flex flex-col justify-center h-full">
        
        {/* Animated Line */}
        <motion.div 
          initial={{ height: 0 }} 
          animate={{ height: "100px" }} 
          className="w-[1px] bg-gradient-to-b from-transparent via-[#00d8ff] to-transparent absolute left-6 md:left-16 top-1/3"
        />

        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-[#00d8ff] font-mono text-sm tracking-[0.3em] mb-4">
                ENGINEERING PORTFOLIO
            </h2>
            
           <h1 className="text-5xl md:text-7xl font-black leading-none mb-6">
            <GlitchText text="DESIGN." className="block" />
            <span className="text-slate-600">SIMULATE.</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d8ff] to-white">
            BUILD.
            </span>
           </h1>

            <p className="text-slate-400 text-lg max-w-md leading-relaxed border-l-2 border-slate-800 pl-6 mb-8">
                Mechanical Engineering student at <strong className="text-slate-200">NUST</strong>. 
                Specializing in CAD design, embedded robotics, and structural analysis.
            </p>

            <div className="flex gap-4">
                <button className="px-8 py-3 bg-[#00d8ff] text-slate-950 font-bold hover:bg-white transition-all clip-path-polygon">
                    VIEW SCHEMATICS
                </button>
                <div className="flex flex-col justify-center">
                    <span className="text-[10px] text-slate-500 font-mono uppercase">Latest Build</span>
                    <span className="text-xs text-white font-mono">ASME ROVER V2</span>
                </div>
            </div>
        </motion.div>
      </div>

      {/* RIGHT SIDE: The Machine (Canvas) */}
      <div className="absolute inset-0 md:static md:w-1/2 h-full z-10 opacity-40 md:opacity-100 pointer-events-none md:pointer-events-auto">
        <Canvas 
          camera={{ position: [3, 2, 5], fov: 50 }}
          dpr={[1, 2]} // <--- OPTIMIZATION: Clamps pixel ratio to max 2 (saves battery on 4k screens)
          gl={{ antialias: true, powerPreference: "high-performance" }} // Explicitly request perf
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#00d8ff" />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ff0000" />
          
          <EngineeringMesh position={[0, 0, 0]} />
          
          {/* Disable zooming to keep the layout stable */}
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#050a14] to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Hero;