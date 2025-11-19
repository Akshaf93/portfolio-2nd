import React from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen text-white selection:bg-[#00d8ff] selection:text-slate-900 font-sans">
      
      {/* --- BACKGROUND LAYERS --- */}
      <div className="bg-grid"></div>
      <div className="bg-vignette"></div>
      <div className="bg-noise"></div>

      {/* --- HUD FRAME (The "Click" Factor) --- */}
      {/* This adds a fixed border and technical markings around the screen */}
      <div className="fixed inset-4 border border-slate-800 pointer-events-none z-40 rounded-sm hidden md:block">
        {/* Top Left Corner */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#00d8ff]"></div>
        {/* Bottom Right Corner */}
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#00d8ff]"></div>
        
        {/* Decorative Lines */}
        <div className="absolute top-1/2 -left-1 w-2 h-8 bg-slate-900 border-y border-slate-600"></div>
        <div className="absolute top-1/2 -right-1 w-2 h-8 bg-slate-900 border-y border-slate-600"></div>
        
        {/* Status Text */}
        <div className="absolute bottom-4 right-6 font-mono text-[10px] text-[#00d8ff] opacity-50 tracking-widest">
          SYS.VER.2.0 // ONLINE
        </div>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

    </div>
  );
}

export default App;