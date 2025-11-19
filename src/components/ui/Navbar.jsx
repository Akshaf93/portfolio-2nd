import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Area */}
        <div className="text-2xl font-bold font-mono tracking-tighter">
          ALEX<span className="text-[#00d8ff]">.MECH</span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-8 font-mono text-sm text-slate-300">
          <li className="hover:text-[#00d8ff] cursor-pointer transition-colors">Projects</li>
          <li className="hover:text-[#00d8ff] cursor-pointer transition-colors">Specs</li>
          <li className="hover:text-[#00d8ff] cursor-pointer transition-colors">Contact</li>
        </ul>

        {/* Mobile Menu Button (Placeholder) */}
        <button className="md:hidden text-slate-300 hover:text-white">
          /// 
        </button>
      </div>
    </nav>
  );
};

export default Navbar;