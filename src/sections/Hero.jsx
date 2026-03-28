import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Dynamically import Lottie only when needed
const Lottie = lazy(() => import('lottie-react'));

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lottieData, setLottieData] = useState(null);
  const lottieRef = useRef(null);
  const heroRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Visibility observer for Lottie and Animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        // Load Lottie JSON conditionally when component becomes visible
        if (entry.isIntersecting && !lottieData) {
          import('../assets/Robot-Says-Hi.json').then((module) => {
            setLottieData(module.default);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, [lottieData]);

  return (
    <section ref={heroRef} className="min-h-[85vh] flex items-center pt-32 pb-12 md:pb-20 relative overflow-hidden" id="home">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">

        {/* Left Image Section */}
        <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start lg:pl-12 lg:-mt-12 mt-16 md:mt-20">
          {/* Increased profile photo size: w-[480px] instead of [400px] */}
          <div className="relative w-80 md:w-[480px] aspect-[4/5] z-10 group mb-8 md:mb-12">

            {/* Peeking Robot Companion (Tucked on bottom right) */}
            {!shouldReduceMotion && (
              <motion.div
                className="absolute -bottom-[40px] -right-[30px] md:-bottom-[50px] md:-right-[50px] z-20 pointer-events-none drop-shadow-2xl"
                initial={{ y: 5 }}
                animate={isVisible ? { y: [5, -5, 5] } : {}}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{ width: 180, height: 180, willChange: "transform" }}
              >
                <div className="w-full h-full transform -rotate-12 origin-top-left transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110">
                  {lottieData && (
                    <Suspense fallback={<div className="w-full h-full bg-transparent"></div>}>
                      <Lottie
                        lottieRef={lottieRef}
                        animationData={lottieData}
                        loop={isVisible}
                        autoplay={isVisible}
                        speed={0.8}
                        className="w-full h-full"
                      />
                    </Suspense>
                  )}
                </div>
              </motion.div>
            )}

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
                <picture>
                  {/* WebP format for modern browsers */}
                  <source 
                    srcSet={`${import.meta.env.BASE_URL}photo.webp`}
                    type="image/webp"
                  />
                  {/* PNG fallback for older browsers */}
                  <img
                    src={`${import.meta.env.BASE_URL}photo-optimized.png`}
                    alt="Soumik Ray Profile Art"
                    className="w-full h-full object-cover relative z-10"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
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

    </section>
  );
};

export default Hero;
