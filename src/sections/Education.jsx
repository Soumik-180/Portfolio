import React, { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import Lottie from "lottie-react";
import educationAnimation from "../assets/education.json";

const educationData = [
  {
    period: 'AUG 2024 - 2028',
    institution: 'Sharda University, Greater Noida',
    degree: 'Bachelor of Technology - B.Tech, Biotechnology',
    details: 'Activities: Badminton. Skills: Next-Generation Sequencing (NGS), Python.',
  },
  {
    period: 'SEP 2020 - MAY 2022',
    institution: 'DRMC - Dhaka Residential Model College',
    degree: 'HSC',
    details: 'Grade: GPA 5.0. Activities: Badminton & Handball.',
  },
  {
    period: 'FEB 2016 - FEB 2020',
    institution: 'Amena-Baki Residential Model School & College',
    degree: 'SSC',
    details: 'Grade: GPA 5.0. Activities: Football, Handball, Volleyball, Badminton. Skills: C.',
  },
];

const Education = () => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);
    const lottieRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { setIsVisible(entry.isIntersecting); },
            { threshold: 0.1 }
        );
        if (containerRef.current) observer.observe(containerRef.current);
        return () => { if (containerRef.current) observer.unobserve(containerRef.current); };
    }, []);

  return (
    <section id="education" className="min-h-screen pt-20 pb-10 flex items-center justify-center relative z-10 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="inline-block text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#111] dark:text-white transition-all duration-500 hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400 cursor-default">
            Education
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-start">
            <motion.div
              ref={containerRef}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[550px] lg:max-w-[650px] h-auto aspect-square flex items-center justify-center p-4"
            >
              <Lottie lottieRef={lottieRef} animationData={educationAnimation} loop={isVisible} autoplay={isVisible} speed={0.8} className="w-full h-full" />
            </motion.div>
          </div>
          <div className="w-full lg:w-[45%] flex justify-end">
            <div className="relative border-l-2 border-blue-600/30 dark:border-blue-500/30 pl-6 md:pl-10 space-y-6 lg:space-y-8 w-full max-w-[600px]">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative group"
                >
                  <span className="absolute -left-[33px] md:-left-[51px] top-1 h-4 w-4 md:h-5 md:w-5 rounded-full bg-blue-600 dark:bg-blue-500 ring-4 ring-black/5 dark:ring-white/10 group-hover:scale-125 transition-transform duration-500"></span>
                  <div className="group-hover:scale-105 origin-left transition-transform duration-500 cursor-default">
                    <h4 className="text-xs md:text-sm font-bold text-blue-600 dark:text-blue-400 mb-1 lg:mb-2 uppercase tracking-wider font-heading">{item.period}</h4>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#111] dark:text-white mb-1 font-heading leading-tight">{item.institution}</h3>
                    <p className="text-sm md:text-md font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      {item.degree}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-sans leading-relaxed group-hover:text-[#111] dark:group-hover:text-white transition-colors duration-300">{item.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
