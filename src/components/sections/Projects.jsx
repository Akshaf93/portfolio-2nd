import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from '../ui/ProjectModal';
// Import the specific model component


const projectsData = [
  {
    id: "01",
    title: "ASME EFX Rover",
    status: "Manufacturing",
    category: "Robotics",
    desc: "Competition-ready rover chassis. Optimized suspension geometry for rough terrain.",
    tech: ["SolidWorks", "FEA", "Aluminum"],
    
    // HERE IS THE MAGIC: We pass the component itself
    fullDesc: {
      overview: "Designed and fabricated a robust robotic rover...",
      challenge: "Balancing lightweight design with structural integrity...",
      approachPoints: ["Custom rock-bogie suspension.", "FEA on chassis frame."],
      results: "Achieved competitive weight-to-strength ratio."
    }
  },
  {
    id: "02",
    title: "High-Torque Sprocket",
    status: "Prototyping",
    category: "Component Design",
    desc: "Parametric design of a drive sprocket for a 22mm pitch track.",
    tech: ["Gear Design", "3D Printing"],
    
    // If you don't have a model for this yet, leave it undefined or null
    ModelComponent: null, 
    
    fullDesc: {
       overview: "Parametric design...",
       challenge: "Tooth profile stress...",
       approachPoints: ["Calculated stress distribution.", "Iterative prototyping."],
       results: "Successful test fit."
    }
  },

  {
    id: "03",
    title: "Turbulent Flow Pipe",
    status: "Simulation",
    category: "CFD Analysis",
    desc: "CFD Analysis of laminar vs turbulent flow in a custom pipe geometry using ANSYS Fluent.",
    tech: ["ANSYS Fluent", "CFD", "Fluid Dynamics", "Meshing", "Python"],
    githubLink: "https://github.com/yourusername/cfd-project",
    fullDesc: {
        overview: "Performed a Computational Fluid Dynamics (CFD) analysis to simulate and understand flow behavior (laminar vs. turbulent) within a custom pipe geometry using ANSYS Fluent. The project aimed to visualize velocity profiles, pressure drops, and turbulence intensity.",
        challenge: "Accurately capturing the transition from laminar to turbulent flow and managing mesh density for computational efficiency without compromising accuracy. Validating simulation results against theoretical models was also a key challenge.",
        approachPoints: [
            "Generated structured and unstructured meshes in ANSYS Meshing, focusing on boundary layer refinement for accurate flow prediction.",
            "Applied appropriate turbulence models (e.g., k-epsilon, k-omega) based on flow regime and Reynolds number.",
            "Configured boundary conditions, solver settings, and convergence criteria within ANSYS Fluent.",
            "Post-processed results to visualize velocity contours, streamlines, pressure distributions, and identify areas of high turbulence."
        ],
        results: "The simulation successfully characterized flow transitions and predicted pressure losses, providing valuable insights for pipe system optimization. This project significantly improved proficiency in CFD software, mesh generation strategies, and fluid mechanics principles."
    }
  },
];

const SpotlightCard = ({ project, onClick }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      onClick={() => onClick(project)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }} // Optim: Only animate when actually in view
      className="relative overflow-hidden rounded-xl border border-slate-800/50 bg-slate-900/50 px-8 py-10 shadow-2xl cursor-pointer transition-transform hover:scale-[1.01]" // Reduced scale for performance
    >
      {/* Optimized Spotlight: Uses inline styles driven by state but throttled by React's batching */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(0, 216, 255, 0.05), transparent 40%)`, // Reduced opacity for cleaner look
        }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
             <span className="font-mono text-xs text-slate-500 border border-slate-700 px-2 py-1 rounded">
                ID: {project.id}
             </span>
             <span className="font-mono text-xs text-[#00d8ff] bg-[#00d8ff]/10 px-2 py-1 rounded">
                STATUS: {project.status}
             </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00d8ff] transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.desc}
        </p>

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
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
                <span className="text-[#00d8ff] font-mono text-lg block mb-2">/// PROJECT_CATALOG</span>
                The Workshop
            </h2>
            <p className="text-slate-400 max-w-2xl">
                Detailed breakdown of mechanical systems. Click to inspect.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            // Optim: Add index to key
            <SpotlightCard key={project.id || index} project={project} onClick={setSelectedProject} />
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;