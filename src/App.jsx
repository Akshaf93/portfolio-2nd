import React from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen text-slate-200 selection:bg-orange-500 selection:text-white font-sans">
      
      {/* Clean Background */}
      <div className="bg-grid"></div>

      {/* REMOVED: bg-noise, bg-vignette, and the HUD Frame div */}
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Optional: Simple Footer Bar for "CAD Status" look */}
      <div className="fixed bottom-0 w-full h-6 bg-slate-950 border-t border-slate-800 z-50 flex items-center px-4 text-[10px] text-slate-500 font-mono">
         READY // VIEWPORT_01 // SCALE 1:1
      </div>
    </div>
  );
}

export default App;