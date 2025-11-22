import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Photography from './sections/Photography';
import Contact from './sections/Contact';
import Background from './components/Background';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen text-text selection:bg-accent selection:text-primary relative">
      <Background />
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 sm:px-12 relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Photography />
        <Contact />
      </main>
    </div>
  );
}

export default App;
