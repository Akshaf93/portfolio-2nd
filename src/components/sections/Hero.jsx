import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion, useInView } from 'framer-motion';
import EngineeringMesh from '../canvas/EngineeringMesh';
import GlitchText from '../ui/GlitchText';

const Hero = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.1 });

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-screen flex items-center overflow-hidden"
    >
      
      {/* LEFT SIDE: Text & Controls */}
      <div className="w-full md:w-1/2 pl-8 md:pl-24 z-20 flex flex-col justify-center h-full pointer-events-none">
        <div className="pointer-events-auto">
            
            {/* Animated Vertical Line */}
            <motion.div 
              initial={{ height: 0 }} 
              animate={{ height: "120px" }} 
              transition={{ duration: 1, delay: 0.5 }}
              className="w-[1px] bg-gradient-to-b from-transparent via-[#00d8ff] to-transparent absolute left-6 md:left-16 top-1/3 hidden md:block"
            />

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-[#00d8ff] font-mono text-xs sm:text-sm tracking-[0.3em] mb-4 bg-[#00d8ff]/5 inline-block px-2 py-1 rounded border border-[#00d8ff]/20">
                    /// ENGINEERING_PORTFOLIO
                </h2>
                
                <h1 className="text-5xl md:text-7xl font-black leading-none mb-6">
                    <GlitchText text="DESIGN." className="block text-white" />
                    <span className="text-slate-600">SIMULATE.</span> <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d8ff] to-white">
                        BUILD.
                    </span>
                </h1>

                <p className="text-slate-400 text-base sm:text-lg max-w-md leading-relaxed border-l-2 border-slate-800 pl-6 mb-8 font-mono">
                    Mechanical Engineering student at <strong className="text-slate-200">NUST</strong>. 
                    Bridging the gap between solid mechanics, thermodynamics, and embedded systems.
                </p>

                {/* --- UPGRADED ACTION AREA --- */}
                <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
                    
                    {/* 1. Primary Button */}
                    <button className="px-8 py-4 bg-[#00d8ff] text-slate-950 font-bold text-sm hover:bg-white transition-all tracking-widest shadow-[0_0_20px_rgba(0,216,255,0.3)] hover:shadow-[0_0_40px_rgba(0,216,255,0.5)] clip-path-polygon w-full lg:w-auto">
                        VIEW SCHEMATICS
                    </button>
                    
                    {/* 2. The Holographic "Latest Build" Indicator */}
                    <motion.div 
                      whileHover={{ 
                          scale: 1.05, 
                          boxShadow: "0 0 30px rgba(0, 216, 255, 0.2)",
                          borderColor: "#00d8ff"
                       }}
                      className="relative flex items-center justify-center gap-3 bg-slate-900/40 backdrop-blur-md border border-slate-700 p-3 pr-4 rounded-lg cursor-pointer transition-all group w-full lg:w-auto text-sm font-mono text-slate-300 overflow-hidden"
                    >
                        {/* Animated Border Glow (subtle) */}
                        <div className="absolute inset-0 rounded-lg pointer-events-none group-hover:animate-border-glow border border-transparent"
                            style={{
                                backgroundImage: `linear-gradient(90deg, transparent, rgba(0,216,255,0.3), transparent)`
                            }}
                        ></div>


                        {/* Data Stream Indicator (replacing gear icon) */}
                        <div className="relative w-4 h-4 mr-1 flex items-center justify-center">
                            <span className="absolute w-2 h-2 rounded-full bg-[#00d8ff]/50 animate-pulse-slow"></span>
                            <span className="absolute w-1 h-1 rounded-full bg-[#00d8ff]"></span>
                        </div>

                        {/* Text */}
                        <span className="text-[11px] text-slate-400 uppercase tracking-widest mr-2">LIVE FEED:</span>
                        <span className="text-sm font-bold text-white group-hover:text-[#00d8ff] transition-colors">
                            ASME ROVER V2 // {new Date().getFullYear()}
                        </span>
                        
                        {/* Enhanced Pulse Indicator */}
                        <span className="relative flex h-3 w-3 ml-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
                        </span>
                        
                    </motion.div>
                    
                </div>
            </motion.div>
        </div>
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