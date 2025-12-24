import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
  { 
    category: "DESIGN & CAD", 
    skills: [
      { name: "SolidWorks", level: 90 }, // 90% width
      { name: "Fusion 360", level: 80 },
      { name: "Blender (Rendering)", level: 60 }
    ]
  },
  { 
    category: "SIMULATION & ANALYSIS", 
    skills: [
      { name: "ANSYS Fluent (CFD)", level: 75 },
      { name: "Static FEA", level: 85 },
      { name: "MATLAB / Simulink", level: 70 }
    ]
  },
  { 
    category: "EMBEDDED SYSTEMS", 
    skills: [
      { name: "Raspberry Pi / Linux", level: 80 },
      { name: "C++ / Arduino", level: 85 },
      { name: "Python Automation", level: 75 }
    ]
  }
];

const SkillBar = ({ skill, index }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-xs font-mono mb-1">
        <span className="text-slate-300">{skill.name}</span>
        <span className="text-[#00d8ff]">{skill.level}% CAPACITY</span>
      </div>
      {/* The Bar Background */}
      <div className="h-2 bg-slate-800 w-full rounded-sm overflow-hidden border border-slate-700 relative">
        {/* The Fill Animation */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className="h-full bg-[#00d8ff] relative"
        >
        </motion.div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="py-32 relative border-t border-slate-800/50 bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-black text-white mb-2">SYSTEM TELEMETRY</h2>
            <p className="text-slate-400 font-mono text-sm">/// TECHNICAL_PROFICIENCY_LOG</p>
          </div>
          {/* Decorative Binary Decoration */}
          <div className="hidden md:block font-mono text-[10px] text-slate-800 text-right leading-tight">
            01001101 01000101 01000011 01001000<br/>
            SYSTEM OPTIMIZED // READY
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {techStack.map((stack, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-slate-950/50 p-6 border border-slate-800 rounded-xl"
            >
              <h3 className="text-[#00d8ff] font-mono text-sm font-bold mb-6 border-b border-slate-800 pb-2 tracking-widest">
                {stack.category}
              </h3>
              <div>
                {stack.skills.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;