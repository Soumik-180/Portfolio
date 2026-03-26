import React from 'react';
import { motion } from 'framer-motion';

const Achievement = () => {
  return (
    <section id="achievement" className="min-h-screen pt-20 pb-10 bg-[#f8f8f8] dark:bg-[#0f172a] transition-colors duration-300 flex items-center justify-center relative z-10 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        {/* Title */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="inline-block text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#111] dark:text-white transition-all duration-500 hover:scale-110 hover:text-blue-500 dark:hover:text-blue-400 cursor-default">
            Achievement
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          
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
                src={`${import.meta.env.BASE_URL}assets/achievement.gif`}
                alt="Achievement Illustration"
                className="w-full h-full object-cover rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 transition-transform duration-500 hover:scale-105 cursor-pointer"
              />
            </motion.div>
          </div>

          {/* Right Side: Details Card */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-[500px] bg-white dark:bg-[#1e293b] p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 transition-shadow duration-500 hover:shadow-2xl cursor-default group"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4 font-heading group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                Bioinformatics with AI
              </h3>
              
              <h4 className="text-xl md:text-2xl font-bold text-[#111] dark:text-gray-100 mb-6 font-heading">
                Ethical Edufabrica Pvt. Ltd.
              </h4>
              
              <div className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-5 py-2.5 rounded-lg font-bold tracking-widest text-sm md:text-md border border-blue-200 dark:border-blue-800/50 uppercase shadow-sm">
                June 2025
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievement;
