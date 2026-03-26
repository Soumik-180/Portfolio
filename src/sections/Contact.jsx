import React from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/soumik-ray-455524361/',
    gif: 'linkedin.gif'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Soumik-180',
    gif: 'github.gif'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/soumik180/',
    gif: 'instagram.gif'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/soumik.ray.142/',
    gif: 'facebook.gif'
  },
  {
    name: 'Gmail',
    url: 'mailto:skrsoumikray@gmail.com',
    gif: 'gmail.gif'
  }
];

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="min-h-[60vh] py-20 bg-white dark:bg-[#0f172a] transition-colors duration-300 flex flex-col items-center justify-center relative z-10 w-full"
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        
        {/* Title with hover zoom effect */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[#111] dark:text-white mb-16 md:mb-24 transition-transform duration-500 hover:scale-[1.15] cursor-default"
        >
          Contact me
        </motion.h2>

        {/* Social Links Flex Container */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring", stiffness: 100 
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.15,
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
              whileTap={{ scale: 0.95 }}
              title={social.name}
              className="group relative flex flex-col items-center"
            >
               {/* GIF Image */}
               <img 
                 src={`${import.meta.env.BASE_URL}assets/logo/${social.gif}`} 
                 alt={social.name}
                 className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain relative z-10 drop-shadow-lg ${social.name === 'LinkedIn' ? 'scale-[0.8]' : ''}`}
               />
               
               {/* Tooltip-style Name on Hover */}
               <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium font-heading text-gray-700 dark:text-gray-300">
                 {social.name}
               </span>
            </motion.a>
          ))}
        </div>

        {/* Final Outro Message */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 md:mt-32 text-xl md:text-2xl font-serif italic text-gray-500 dark:text-gray-400 text-center"
        >
          Thank you for visiting
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
