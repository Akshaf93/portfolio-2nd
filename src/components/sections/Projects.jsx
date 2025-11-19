import React from 'react';
import { motion } from 'framer-motion';

// Sample Data - Replace with your actual projects
const projects = [
  {
    title: "ASME EFX Rover",
    category: "Robotics / Manufacturing",
    desc: "Designed a competition-ready rover. Optimized suspension geometry and chassis stiffness using SolidWorks simulation.",
    tech: ["SolidWorks", "FEA", "3D Printing"],
  },
  {
    title: "Track Sprocket Design",
    category: "Component Design",
    desc: "Parametric design of a drive sprocket for a 22mm pitch track. Calculated stress distribution on tooth profile.",
    tech: ["CAD", "Material Science", "Machining"],
  },
  {
    title: "Fluid Simulation",
    category: "CFD Analysis",
    desc: "Analysis of laminar vs turbulent flow in a custom pipe geometry using ANSYS Fluent.",
    tech: ["ANSYS", "Fluid Dynamics", "Python"],
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-slate-800/50 border border-slate-700 p-6 rounded-lg hover:border-[#00d8ff] transition-all duration-300 group"
    >
      <div className="h-48 bg-slate-700 mb-4 rounded w-full flex items-center justify-center text-slate-500 font-mono text-sm">
        {/* Placeholder for Project Image */}
        [Project Render Placeholder]
      </div>
      
      <h3 className="text-xl font-bold text-white group-hover:text-[#00d8ff] transition-colors">
        {project.title}
      </h3>
      <p className="text-[#00d8ff] text-xs font-mono mb-2">{project.category}</p>
      <p className="text-slate-400 text-sm mb-4 leading-relaxed">
        {project.desc}
      </p>
      
      <div className="flex gap-2 flex-wrap">
        {project.tech.map((tag) => (
          <span key={tag} className="text-xs font-mono bg-slate-900 px-2 py-1 rounded text-slate-300 border border-slate-700">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-4xl font-black mb-12 border-l-4 border-[#00d8ff] pl-4"
        >
          The Workshop
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;