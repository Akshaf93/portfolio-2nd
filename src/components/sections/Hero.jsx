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
                    
                    {/* 2. The Prominent "Latest Build" Card */}
                    <motion.div 
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                      className="flex items-center gap-4 bg-slate-900/60 backdrop-blur-md border border-slate-700 p-3 pr-6 rounded-lg cursor-pointer hover:border-[#00d8ff] transition-all group w-full lg:w-auto"
                    >
                        {/* Icon Box */}
                        <div className="w-12 h-12 bg-slate-800 rounded flex items-center justify-center text-[#00d8ff] border border-slate-600 group-hover:border-[#00d8ff] transition-colors">
                           {/* Gear Icon SVG */}
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                             <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                           </svg>
                        </div>

                        {/* Text Info */}
                        <div className="flex flex-col">
                             <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mb-1">Current Prototype</span>
                             <div className="flex items-center gap-3">
                                <span className="text-sm font-bold text-white group-hover:text-[#00d8ff] transition-colors">
                                    ASME ROVER V2
                                </span>
                                {/* Enhanced Pulse Indicator */}
                                <span className="relative flex h-3 w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
                                </span>
                             </div>
                        </div>
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