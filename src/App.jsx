import React from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white selection:bg-[#00d8ff] selection:text-slate-900">
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="py-6 text-center text-slate-600 text-sm font-mono border-t border-slate-800">
        © {new Date().getFullYear()} Mechanical Engineering Portfolio. Built with React & Three.js.
      </footer>
    </div>
  );
}

export default App;