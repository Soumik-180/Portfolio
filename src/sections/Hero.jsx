import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import helloAnimation from "../assets/Robot-Says-Hi.json";
import { motion } from "framer-motion";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const lottieRef = useRef(null);
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    // Visibility observer for Lottie
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    // Dimension tracking for bounce effect
    const updateDimensions = () => {
      if (heroRef.current) {
        setDimensions({
          width: heroRef.current.offsetWidth,
          height: heroRef.current.offsetHeight,
        });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    const mutObserver = new MutationObserver(updateDimensions);
    if (heroRef.current) mutObserver.observe(heroRef.current, { attributes: true });

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      window.removeEventListener('resize', updateDimensions);
      mutObserver.disconnect();
    };
  }, []);

  const badgeSize = 350; // Increased padding to prevent bottom overflow

  return (
    <section ref={heroRef} className="min-h-[85vh] flex items-center pt-32 pb-12 md:pb-20 relative overflow-hidden" id="home">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">

        {/* Left Image Section */}
        <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start lg:pl-12 lg:-mt-16">
          {/* Increased profile photo size: w-[480px] instead of [400px] */}
          <div className="relative w-80 md:w-[480px] aspect-[4/5] z-10 group">

            {/* The Profile Art with Moving Light Effect (Tilted left) */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden isolate shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Rotating Light Beam (the moving light effect) */}
              <div
                className="absolute left-1/2 top-1/2 -ml-[50%] -mt-[75%] w-[100%] h-[150%] animate-[spin_4s_linear_infinite] -z-10"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 0%, transparent 60%, #c084fc 80%, #38bdf8 100%)'
                }}
              ></div>

              {/* Inner container to crop the middle and form the glowing outline */}
              <div className="absolute inset-[4px] rounded-[14px] overflow-hidden bg-white dark:bg-slate-800 z-10 shadow-[inset_0_0_15px_rgba(0,0,0,0.1)]">
                <img
                  src={`${import.meta.env.BASE_URL}photo.png`}
                  alt="Soumik Ray Profile Art"
                  className="w-full h-full object-cover relative z-10"
                />
              </div>
            </div>

            {/* We removed the static video badge replacement from here because it bounces globally */}
          </div>
        </div>

        {/* Right Typography Section */}
        <div className="order-1 lg:order-2 flex flex-col justify-center max-w-2xl px-4 lg:px-0 lg:pl-4">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold leading-tight text-[#111] dark:text-white mb-6 tracking-tight hover:scale-105 transition-transform duration-300 origin-left inline-block">
            Turning biological data into meaningful information
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl font-medium max-w-[540px] leading-relaxed hover:scale-105 transition-transform duration-300 origin-left inline-block">
            Hi! I'm Soumik Ray. Harnessing the power of code and computation to solve biological problems — from analyzing biological data to diagnosis. I believe data is the new microscope.
          </p>
        </div>

      </div>

      {/* Floating Bounce Back Lottie Animation (like Skills section) */}
      {dimensions.width > 0 && (
        <motion.div
          ref={containerRef}
          className="absolute z-30 pointer-events-none drop-shadow-2xl"
          initial={{ 
            x: Math.random() * Math.max(0, dimensions.width - 350),
            y: Math.random() * Math.max(0, dimensions.height - 550)
          }}
          animate={{
            x: [0, Math.max(0, dimensions.width - 350)],
            y: [0, Math.max(0, dimensions.height - 550)]
          }}
          transition={{
            x: { duration: 15, repeat: Infinity, repeatType: "mirror", ease: "linear" },
            y: { duration: 11, repeat: Infinity, repeatType: "mirror", ease: "linear" }
          }}
          style={{ width: 350, height: 350 }} // Increased base bounds for the floating item
        >
          <div className="w-full h-full pointer-events-auto hover:scale-110 transition-transform duration-300">
            <Lottie
              lottieRef={lottieRef}
              animationData={helloAnimation}
              loop={isVisible}
              autoplay={isVisible}
              speed={0.8}
              className="w-full h-full"
            />
          </div>
        </motion.div>
      )}

    </section>
  );
};

export default Hero;
