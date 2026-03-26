import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', color: 'from-blue-400/20 to-blue-600/20', border: 'border-blue-400/30', xDur: 14, yDur: 11, delay: 0 },
  { name: 'C', color: 'from-yellow-400/20 to-yellow-600/20', border: 'border-yellow-400/30', xDur: 17, yDur: 9, delay: 1 },
  { name: 'PERL', color: 'from-green-400/20 to-green-600/20', border: 'border-green-400/30', xDur: 13, yDur: 18, delay: 2 },
  { name: 'NGS', color: 'from-purple-400/20 to-purple-600/20', border: 'border-purple-400/30', fullName: 'Next Generation Sequencing', xDur: 21, yDur: 13, delay: 3 },
];

const Skills = () => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    const observer = new MutationObserver(updateDimensions);
    if (containerRef.current) {
      observer.observe(containerRef.current, { attributes: true });
    }

    return () => {
      window.removeEventListener('resize', updateDimensions);
      observer.disconnect();
    };
  }, []);

  const boardSize = 230; 

  return (
    <section 
      ref={containerRef}
      className="h-[600px] md:h-screen w-full relative overflow-hidden bg-[#f8f8f8] dark:bg-[#0f172a] transition-colors duration-300 rounded-3xl" 
      id="skills"
    >
      {/* Title - Fixed on top */}
      <div className="absolute top-12 left-0 w-full z-40 pointer-events-none">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-center text-[#111] dark:text-white pointer-events-auto hover:scale-105 transition-transform duration-300">
          Skills
        </h2>
      </div>

      {/* Realistic Bubble Bounce Area */}
      {dimensions.width > 0 && skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="absolute z-10"
          initial={{ 
            x: Math.random() * (dimensions.width - boardSize),
            y: Math.random() * (dimensions.height - boardSize)
          }}
          animate={{
            x: [0, dimensions.width - boardSize],
            y: [0, dimensions.height - boardSize]
          }}
          transition={{
            x: { duration: skill.xDur, repeat: Infinity, repeatType: "mirror", ease: "linear", delay: skill.delay },
            y: { duration: skill.yDur, repeat: Infinity, repeatType: "mirror", ease: "linear", delay: skill.delay }
          }}
        >
          <div className="group cursor-default p-4">
            <div className={`relative w-44 h-44 md:w-48 md:h-48 rounded-full bg-gradient-to-br ${skill.color} backdrop-blur-md border border-white/20 dark:border-white/10 shadow-[inset_0_0_25px_rgba(255,255,255,0.2),0_10px_30px_rgba(0,0,0,0.1)] flex items-center justify-center transition-all duration-700 group-hover:scale-110 animate-wobble overflow-hidden`}>
              
              {/* Iridescent Layer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/5 via-pink-400/5 to-yellow-400/5 animate-iridescence pointer-events-none"></div>

              {/* Primary High-gloss Highlight (Top Left) */}
              <div className="absolute top-[10%] left-[15%] w-[35%] h-[25%] bg-gradient-to-b from-white/60 to-transparent rounded-[100%] rotate-[-35deg] blur-[4px] pointer-events-none"></div>
              
              {/* Secondary Highlight (Bottom Right) */}
              <div className="absolute bottom-[12%] right-[15%] w-[20%] h-[15%] bg-white/20 rounded-[100%] blur-[6px] pointer-events-none"></div>
              
              {/* Subtle Inner Glow */}
              <div className={`absolute inset-4 rounded-full border border-white/5 bg-gradient-to-tl from-transparent via-transparent to-white/10 pointer-events-none`}></div>

              <div className="relative text-center p-4 z-10 select-none">
                <span className="block text-2xl md:text-3xl font-bold text-[#111] dark:text-white mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                  {skill.name}
                </span>
                {skill.fullName && (
                  <span className="block text-[10px] md:text-xs text-black/50 dark:text-white/50 font-medium px-2 italic max-w-[120px]">
                    {skill.fullName}
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/10 dark:bg-blue-900/5 rounded-full blur-[120px] -z-0 opacity-40"></div>
    </section>
  );
};

export default Skills;
