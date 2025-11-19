import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { category: "CAD & Simulation", items: ["SolidWorks", "ANSYS", "AutoCAD", "Fusion 360"] },
  { category: "Prototyping", items: ["3D Printing (FDM/SLA)", "Laser Cutting", "CNC Basics", "Arduino/ESP32"] },
  { category: "Computational", items: ["MATLAB", "Python", "C++", "MathCAD"] },
];

const Skills = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-4xl font-black mb-12 text-right border-r-4 border-[#00d8ff] pr-4"
        >
          Technical Specs
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillSet, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-slate-900 p-8 rounded-xl border-t border-slate-800 hover:border-[#00d8ff] transition-colors"
            >
              <h3 className="text-xl font-bold text-[#00d8ff] mb-6 font-mono">
                0{index + 1}. {skillSet.category}
              </h3>
              <ul className="space-y-3">
                {skillSet.items.map((item) => (
                  <li key={item} className="flex items-center text-slate-300">
                    <span className="w-2 h-2 bg-slate-600 mr-3 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;