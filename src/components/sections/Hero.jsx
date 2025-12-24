import React, { useRef, Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion, useInView } from 'framer-motion';

const EngineeringMesh = lazy(() => import('../canvas/EngineeringMesh'));

const Hero = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.1 });

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-screen flex items-center overflow-hidden bg-[#f3f4f6]"
    >
      {/* Engineering Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-100 pointer-events-none" />
      
      {/* LEFT SIDE: Text & Controls */}
    <div className="w-full md:w-1/2 pl-8 md:pl-24 z-20 flex flex-col justify-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-teal-400 font-mono text-xs font-bold tracking-widest mb-6">
          MECHANICAL ENGINEER // DESIGN PORTFOLIO
        </h2>
        
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
          Design. <br />
          Simulate. <br />
          <span className="text-slate-400">Fabricate.</span>
        </h1>

        <p className="text-slate-400 text-lg max-w-md leading-relaxed mb-8">
          Bridging the gap between solid mechanics, thermodynamics, and embedded systems at NUST.
        </p>

        <div className="flex gap-6">
          <button className="px-8 py-3 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600 transition-all shadow-lg">
            View Projects
          </button>
          <button className="px-8 py-3 border border-slate-600 text-slate-300 rounded hover:bg-slate-800 transition-all">
            Download Resume
          </button>
        </div>

        <div className="flex items-center gap-2 mt-8">
          <span className="text-sm font-bold text-white font-mono tracking-wider">
            ASME ROVER V2
          </span>
          {/* Simple Green LED Dot */}
          <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse shadow-[0_0_8px_#2dd4bf]"></span>
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
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
          <directionalLight position={[-5, -5, -5]} intensity={1} color="#e2e8f0" />
          
          <Suspense fallback={null}>
            <EngineeringMesh position={[0, 0, 0]} />
          </Suspense>
          
          <OrbitControls enableZoom={false} autoRotate={isInView} autoRotateSpeed={0.2} />
        </Canvas>
      </div>

      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#f3f4f6] to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Hero;