import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

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
  return (
    <section id="education" className="min-h-screen pt-20 pb-10 bg-[#f8f8f8] dark:bg-[#0f172a] transition-colors duration-300 flex items-center justify-center relative z-10 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        {/* Title */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="inline-block text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#111] dark:text-white transition-all duration-500 hover:scale-110 hover:text-blue-500 dark:hover:text-blue-400 cursor-default">
            Education
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* Left Side: Graphic */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[450px] lg:max-w-[480px] h-[400px] md:h-[450px] lg:h-[500px]"
            >
              <img
                src={`${import.meta.env.BASE_URL}assets/education.gif`}
                alt="Education Illustration"
                className="w-full h-full object-cover rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
            </motion.div>
          </div>

          {/* Right Side: Timeline */}
          <div className="w-full lg:w-1/2 flex justify-start">
            <div className="relative border-l-2 border-blue-500/30 dark:border-blue-400/30 pl-6 md:pl-10 space-y-6 lg:space-y-8 w-full max-w-[600px]">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-[33px] md:-left-[51px] top-1 h-4 w-4 md:h-5 md:w-5 rounded-full bg-blue-500 ring-4 ring-white dark:ring-[#0f172a] group-hover:scale-125 transition-transform duration-500"></span>

                  {/* Content Wrapper for Hover Zoom */}
                  <div className="group-hover:scale-105 origin-left transition-transform duration-500 cursor-default">
                    {/* Period */}
                    <h4 className="text-xs md:text-sm font-bold text-blue-600 dark:text-blue-400 mb-1 lg:mb-2 uppercase tracking-wider font-heading">
                      {item.period}
                    </h4>

                    {/* Institution */}
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#111] dark:text-white mb-1 font-heading transition-colors duration-300 leading-tight">
                      {item.institution}
                    </h3>

                    {/* Degree/Role */}
                    <p className="text-sm md:text-md font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-blue-500 flex-shrink-0" />
                      {item.degree}
                    </p>

                    {/* Details */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-sans leading-relaxed group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                      {item.details}
                    </p>
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
