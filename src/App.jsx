import React from 'react';
import Hero from './sections/Hero';
import Navbar from './components/Navbar';
import About from './sections/About';
import Project from './sections/Project';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Achievement from './sections/Achievement';
import Photography from './sections/Photography';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] dark:bg-[#0f172a] text-[#111] dark:text-gray-100 font-sans selection:bg-accent selection:text-white pb-20 transition-colors duration-300">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
        <Hero />
        <About />
        <Project />
        <Skills />
        <Education />
        <Achievement />
        <Photography />
        <Contact />
      </main>
    </div>
  );
}

export default App;
