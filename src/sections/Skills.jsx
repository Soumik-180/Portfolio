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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { setIsVisible(entry.isIntersecting); },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    let timeoutId;
    const updateDimensions = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (containerRef.current) {
          setDimensions({ width: containerRef.current.offsetWidth, height: containerRef.current.offsetHeight });
        }
      }, 100);
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions, { passive: true });
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
      window.removeEventListener('resize', updateDimensions);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="h-[600px] md:h-screen w-full relative overflow-hidden rounded-3xl"
      id="skills"
    >
      <div className="absolute top-12 left-0 w-full z-40 pointer-events-none">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-center text-[#111] dark:text-white pointer-events-auto hover:scale-105 transition-transform duration-300">
          Skills
        </h2>
      </div>

      {dimensions.width > 0 && skills.map((skill) => (
        <motion.div
          key={skill.name}
          className="absolute z-10"
          initial={{ x: Math.random() * (dimensions.width - 230), y: Math.random() * (dimensions.height - 230) }}
          animate={isVisible ? { x: [0, dimensions.width - 230], y: [0, dimensions.height - 230] } : {}}
          transition={{
            x: { duration: skill.xDur, repeat: Infinity, repeatType: "mirror", ease: "linear", delay: skill.delay },
            y: { duration: skill.yDur, repeat: Infinity, repeatType: "mirror", ease: "linear", delay: skill.delay }
          }}
          style={{ willChange: "transform" }}
        >
          <div className="group cursor-default p-4">
            <div className={`relative w-44 h-44 md:w-48 md:h-48 rounded-full bg-gradient-to-br ${skill.color} backdrop-blur-md border border-white/20 shadow-[inset_0_0_25px_rgba(255,255,255,0.2),0_10px_30px_rgba(0,0,0,0.1)] flex items-center justify-center transition-all duration-700 group-hover:scale-110 ${isVisible ? 'animate-wobble' : ''} overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-tr from-cyan-400/5 via-pink-400/5 to-yellow-400/5 ${isVisible ? 'animate-iridescence' : ''} pointer-events-none`}></div>
              <div className="absolute top-[10%] left-[15%] w-[35%] h-[25%] bg-gradient-to-b from-white/60 to-transparent rounded-[100%] rotate-[-35deg] blur-[4px] pointer-events-none"></div>
              <div className="absolute bottom-[12%] right-[15%] w-[20%] h-[15%] bg-white/20 rounded-[100%] blur-[6px] pointer-events-none"></div>
              <div className="absolute inset-4 rounded-full border border-white/5 bg-gradient-to-tl from-transparent via-transparent to-white/10 pointer-events-none"></div>
              <div className="relative text-center p-4 z-10 select-none">
                <span className="block text-2xl md:text-3xl font-bold text-[#111] dark:text-white mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">{skill.name}</span>
                {skill.fullName && (
                  <span className="block text-[10px] md:text-xs text-black/50 dark:text-white/60 font-medium px-2 italic max-w-[120px]">{skill.fullName}</span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Skills;
