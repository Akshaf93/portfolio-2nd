import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from '../ui/ProjectModal';
 // Import the new modal component

const projectsData = [ // Renamed to avoid conflict
  {
    id: "01",
    title: "ASME EFX Rover",
    status: "Designing",
    category: "Robotics / Additive Manufacturing",
    desc: "Competition-ready 3d printed all terrain rover. Optimized suspension geometry for rough terrain using SolidWorks Simulation.",
    tech: ["SolidWorks", "FEA", "3D Printing", "Robotics", "Mechanical Design"],
    githubLink: "https://github.com/yourusername/rover-project", // Link to your GitHub repo
    fullDesc: {
      overview: "Designed and fabricated a robust robotic rover for the ASME IAM3d Competition. Focused on modularity, ease of assembly, and off-road mobility to navigate diverse terrains and complete mission objectives.",
      challenge: "The primary challenge was to balance lightweight design with structural integrity to carry payloads and withstand harsh competition environments. Iterative design was crucial to optimize the suspension system for maximum ground contact and stability.",
      approachPoints: [
        "Conceptualized multiple chassis architectures in SolidWorks, evaluating trade-offs between cost, weight, and manufacturability.",
        "Performed Finite Element Analysis (FEA) on critical components (e.g., suspension arms, chassis frame) to identify stress concentrations and optimize material usage.",
        "Developed a custom rock-bogie suspension system for improved articulation and traction over obstacles.",
        "Utilized 3D printing for rapid prototyping and custom brackets, while key structural elements were CNC machined from aluminum.",
      ],
      results: "The final rover achieved a competitive weight-to-strength ratio, demonstrating excellent mobility and payload capacity during preliminary testing. Key learnings included advanced SolidWorks simulation techniques, design for additive manufacturing, and interdisciplinary teamwork."
    }
  },
  {
    id: "02",
    title: "High-Torque Sprocket",
    status: "Prototyping",
    category: "Component Design",
    desc: "Parametric design of a drive sprocket for a 22mm pitch track. Calculated stress distribution on tooth profile.",
    tech: ["Gear Design", "SolidWorks", "3D Printing (PLA)", "Machining", "Material Science"],
    githubLink: "https://github.com/yourusername/sprocket-project",
    fullDesc: {
        overview: "Designed a custom drive sprocket tailored for a specific 22mm pitch track system, focusing on efficient power transmission and durability under high torque loads. This project involved detailed gear geometry calculations and material selection.",
        challenge: "Ensuring adequate tooth strength to prevent failure under peak load conditions, while minimizing material and manufacturing complexity. Accurately modeling the contact forces between the sprocket and track links was critical.",
        approachPoints: [
            "Implemented parametric modeling in SolidWorks to easily modify tooth count, pitch diameter, and bore size.",
            "Conducted stress analysis (FEA) on the tooth profiles to verify structural integrity and identify potential failure points.",
            "Compared various manufacturing methods (CNC vs. 3D printing) for rapid prototyping and final production.",
            "Selected appropriate material (e.g., hardened steel vs. high-strength polymer) based on application requirements and cost efficiency."
        ],
        results: "The resulting sprocket design met all torque specifications with a robust factor of safety. The project enhanced understanding of gear design principles, material selection criteria, and advanced CAD functionalities for component optimization."
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
      className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 px-8 py-10 shadow-2xl cursor-pointer transition-transform hover:scale-[1.01]" // Reduced scale for performance
    >
      {/* Optimized Spotlight: Uses inline styles driven by state but throttled by React's batching */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 216, 255, 0.10), transparent 40%)`, // Reduced opacity for cleaner look
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