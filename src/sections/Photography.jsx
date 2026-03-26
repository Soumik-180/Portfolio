import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const photoFiles = [
  'IMG-20250530-WA0126.jpeg',
  'IMG_20201128_080731.jpeg',
  'PXL_20250110_193655121.NIGHT.jpeg',
  'PXL_20250228_120121148.jpeg',
  'PXL_20250301_051548454.MP.jpeg',
  'PXL_20250329_093602821.MP.jpeg',
  'PXL_20250330_120642675.jpeg',
  'PXL_20250530_115148008.MP.jpeg',
  'PXL_20250713_135225045.NIGHT.jpeg',
  'PXL_20251113_103223695.MP.jpeg',
  'PXL_20260305_164617798.NIGHT.jpeg',
  'PXL_20250213_051226487.jpeg'
];

const Photography = () => {
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

  const phoneWidth = 320;
  const phoneHeight = 600;

  return (
    <section 
      id="photography" 
      ref={containerRef}
      className="min-h-screen pt-20 pb-20 bg-[#f8f8f8] dark:bg-[#0f172a] transition-colors duration-300 relative z-10 w-full overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-20 pointer-events-none">
        
        {/* Title */}
        <div className="text-center mb-10 md:mb-16 pointer-events-auto">
          <h2 className="inline-block text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#111] dark:text-white transition-all duration-500 hover:scale-110 hover:text-blue-500 dark:hover:text-blue-400 cursor-default">
            Photography
          </h2>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 pb-32 md:pb-0 pointer-events-auto">
          {photoFiles.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="relative overflow-hidden group rounded-lg md:rounded-2xl shadow-sm hover:shadow-xl transition-shadow bg-gray-200 dark:bg-gray-800 aspect-square lg:aspect-[4/3]"
            >
              <img
                src={`${import.meta.env.BASE_URL}assets/Photography/${photo}`}
                alt={`Photography ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transform-gpu transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Smartphone Mockup */}
      {dimensions.width > 0 && (
        <motion.div 
          className="absolute top-0 left-0 z-50 pointer-events-none"
          initial={{ 
            x: dimensions.width > phoneWidth ? Math.random() * (dimensions.width - phoneWidth) : 0,
            y: dimensions.height > phoneHeight ? Math.random() * (dimensions.height - phoneHeight) : 0
          }}
          animate={{
            x: dimensions.width > phoneWidth ? [0, dimensions.width - phoneWidth] : 0,
            y: dimensions.height > phoneHeight ? [0, dimensions.height - phoneHeight] : 0
          }}
          transition={{
            x: { duration: 25, repeat: Infinity, repeatType: "mirror", ease: "linear" },
            y: { duration: 35, repeat: Infinity, repeatType: "mirror", ease: "linear" }
          }}
        >
          <div className="pointer-events-auto w-[280px] sm:w-[320px] h-[600px] bg-[#fdfdfd] rounded-[3rem] border-[14px] border-gray-900 overflow-hidden flex flex-col group transition-transform hover:scale-105 active:scale-95 cursor-grab active:cursor-grabbing transform-gpu shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
            {/* Top Speaker/Notch Area */}
            <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-xl w-32 mx-auto flex items-center justify-center gap-2 z-20">
              <div className="w-10 h-1.5 rounded-full bg-gray-800"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50"></div>
            </div>
            
            {/* Phone Screen Content */}
            <div className="flex-1 bg-gray-50/80 flex flex-col items-center p-6 pt-12 space-y-6 relative overflow-hidden">
              
              {/* Aesthetic Top Bar for Phone */}
              <div className="w-full flex justify-between items-center text-gray-500 text-[10px] font-medium mb-2">
                <span>9:41</span>
                <div className="flex gap-1">
                  <span className="block w-4 h-2 bg-gray-800 rounded-sm"></span>
                </div>
              </div>

              <div className="text-center space-y-1">
                <h3 className="font-heading font-bold text-xl text-gray-900 tracking-tight">Soumik Ray</h3>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">Photography Links</p>
              </div>
              
              <div className="w-full space-y-4 flex-1 flex flex-col justify-center pb-8">
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/_ray_graphy_/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2"
                >
                  <span className="font-sans">Instagram</span>
                </a>
                
                {/* Pinterest */}
                <a 
                  href="https://in.pinterest.com/skrsoumikray/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full py-3.5 px-4 bg-[#E60023] text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2"
                >
                  <span className="font-sans">Pinterest</span>
                </a>
                
                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/profile.php?id=61578165031613" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full py-3.5 px-4 bg-[#1877F2] text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2"
                >
                  <span className="font-sans">Facebook</span>
                </a>
              </div>

              {/* Home Bar (Bottom) */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      )}

    </section>
  );
};

export default Photography;
