import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: "01",
    title: "ASME EFX Rover",
    status: "Manufacturing",
    desc: "Competition-ready rover chassis. Optimized suspension geometry for rough terrain using SolidWorks Simulation.",
    tech: ["SolidWorks", "FEA", "Aluminum 6061"],
  },
  {
    id: "02",
    title: "High-Torque Sprocket",
    status: "Prototyping",
    desc: "Parametric design of a drive sprocket for a 22mm pitch track. Calculated stress distribution on tooth profile.",
    tech: ["Gear Design", "3D Printing (PLA)", "Machining"],
  },
  {
    id: "03",
    title: "Turbulent Flow Pipe",
    status: "Simulation",
    desc: "CFD Analysis of laminar vs turbulent flow in a custom pipe geometry using ANSYS Fluent.",
    tech: ["ANSYS", "Fluid Dynamics", "Python"],
  },
];

const SpotlightCard = ({ project }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 px-8 py-10 shadow-2xl"
    >
      {/* The Moving Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 216, 255, 0.15), transparent 40%)`,
        }}
      />
      
      {/* The Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* ID Tag */}
        <div className="flex justify-between items-start mb-4">
             <span className="font-mono text-xs text-slate-500 border border-slate-700 px-2 py-1 rounded">
                ID: {project.id}
             </span>
             <span className="font-mono text-xs text-[#00d8ff] bg-[#00d8ff]/10 px-2 py-1 rounded">
                STATUS: {project.status}
             </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00d8ff] transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.desc}
        </p>

        {/* Tech Stack (Chips) */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech) => (
            <span key={tech} className="text-xs font-mono text-slate-300 bg-slate-800 px-2 py-1 rounded border border-slate-700">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
                <span className="text-[#00d8ff] font-mono text-lg block mb-2">/// PROJECT_CATALOG</span>
                The Workshop
            </h2>
            <p className="text-slate-400 max-w-2xl">
                Detailed breakdown of mechanical systems, simulations, and embedded designs.
                Hover over cards to inspect details.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <SpotlightCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;