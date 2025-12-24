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
        <span className="text-gray-700 font-semibold">{skill.name}</span>
        <span className="text-gray-500">{skill.level}%</span>
      </div>
      {/* The Bar Background */}
      <div className="h-2 bg-gray-200 w-full rounded-full overflow-hidden relative">
        {/* The Fill Animation */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className="h-full bg-indigo-600 relative"
        >
        </motion.div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="py-32 relative border-t border-gray-200 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-2">TECHNICAL COMPETENCIES</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {techStack.map((stack, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 border border-gray-200 rounded-xl shadow-sm"
            >
              <h3 className="text-indigo-600 font-mono text-sm font-bold mb-6 border-b border-gray-100 pb-2 tracking-widest">
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