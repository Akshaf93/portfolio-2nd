import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion'; // Import motion
import EngineeringMesh from '../canvas/EngineeringMesh';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 flex flex-col items-start gap-5 z-10 pointer-events-none">
        
        {/* Small decorative label */}
        <span className="text-[#00d8ff] font-mono text-xs tracking-[0.2em] border border-[#00d8ff]/30 px-2 py-1 bg-[#00d8ff]/10 rounded">
          SYSTEM STATUS: ONLINE
        </span>

        {/* High Impact Headline */}
        <h1 className="text-white font-black text-6xl sm:text-8xl leading-tight">
          ALEX <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d8ff] to-slate-500">
            BUILDER.
          </span>
        </h1>
        
        {/* Value Proposition - Typewriter Effect */}
        <motion.p 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="mt-2 text-slate-400 text-xl sm:text-2xl max-w-lg font-mono overflow-hidden whitespace-nowrap border-r-4 border-[#00d8ff]"
        >
          Transforming concepts into solid mechanics.
        </motion.p>

        <div className="pointer-events-auto mt-8 flex gap-4">
           <button className="bg-[#00d8ff] text-slate-900 font-bold py-3 px-8 rounded hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,216,255,0.3)]">
             Inspect Projects
           </button>
           <button className="border border-slate-600 text-slate-300 font-bold py-3 px-8 rounded hover:border-[#00d8ff] hover:text-[#00d8ff] transition-colors font-mono">
             Download CV
           </button>
        </div>
      </div>

      <div className="absolute inset-0 w-full h-full z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <EngineeringMesh position={[2.5, 0, 0]} />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;