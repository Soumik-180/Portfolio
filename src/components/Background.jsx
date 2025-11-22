import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';


const DNAHelix = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 2000], [0, -500]);
    const y2 = useTransform(scrollY, [0, 2000], [0, -300]);

    // Create an array of dots for the DNA strands
    const dots = Array.from({ length: 30 });

    return (
        <div className="fixed right-0 top-0 bottom-0 w-1/3 md:w-1/4 pointer-events-none z-0 flex justify-center items-center opacity-20 md:opacity-30">
            <div className="relative w-full h-[120vh] -top-[10vh]">
                {dots.map((_, i) => (
                    <DNAPair key={i} index={i} total={dots.length} scrollY={scrollY} />
                ))}
            </div>
        </div>
    );
};

const DNAPair = ({ index, total, scrollY }) => {
    const yOffset = (index / total) * 100; // Percentage down the screen

    // Parallax effect for individual dots
    const y = useTransform(scrollY, [0, 1000], [0, index * 10]);

    return (
        <motion.div
            className="absolute w-full left-0"
            style={{ top: `${yOffset}%`, y }}
        >
            {/* Strand 1 */}
            <motion.div
                animate={{
                    x: [-50, 50, -50],
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0.8, 0.4], // Stabilized opacity
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1,
                }}
                className="absolute left-1/2 w-3 h-3 bg-accent rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"
            />

            {/* Strand 2 */}
            <motion.div
                animate={{
                    x: [50, -50, 50],
                    scale: [1.5, 1, 1.5],
                    opacity: [0.8, 0.4, 0.8], // Stabilized opacity
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1,
                }}
                className="absolute left-1/2 w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]"
            />

            {/* Connecting Line (Hydrogen Bond) */}
            <motion.div
                animate={{
                    width: [0, 100, 0],
                    opacity: [0.1, 0.3, 0.1], // Stabilized opacity
                    x: [-50, 0, -50] // Move with the dots
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1,
                }}
                className="absolute left-1/2 h-[1px] bg-gradient-to-r from-accent to-emerald-400"
                style={{ translateX: "-50%" }}
            />
        </motion.div>
    );
};



import { Atom, Bug, Hexagon, CircleDot, Zap } from 'lucide-react';

const FloatingParticles = () => {
    // Generate random particles using useMemo to ensure stability
    const particles = React.useMemo(() => {
        return Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            Icon: [Atom, Bug, Hexagon, CircleDot, Zap][i % 5],
            initialX: Math.random() * 100,
            initialY: Math.random() * 100,
            duration: 20 + Math.random() * 20,
            delay: Math.random() * 5,
            scale: 0.5 + Math.random() * 0.5,
        }));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    initial={{
                        x: `${particle.initialX}vw`,
                        y: `${particle.initialY}vh`,
                        opacity: 0
                    }}
                    animate={{
                        x: [`${particle.initialX}vw`, `${(particle.initialX + 20) % 100}vw`, `${(particle.initialX - 10) % 100}vw`],
                        y: [`${particle.initialY}vh`, `${(particle.initialY + 30) % 100}vh`, `${(particle.initialY - 20) % 100}vh`],
                        rotate: [0, 180, 360],
                        opacity: [0.2, 0.6, 0.2]
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: particle.delay
                    }}
                    className="absolute text-accent/40"
                    style={{ scale: particle.scale }}
                >
                    <particle.Icon size={48} />
                </motion.div>
            ))}
        </div>
    );
};

const Background = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <div className="fixed inset-0 z-[-1] bg-[#0f172a] overflow-hidden">
            {/* Static Gradient Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />

            {/* Floating Biological Particles */}
            <FloatingParticles />



            {/* DNA Helix Animation */}
            <DNAHelix />

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        </div>
    );
};

export default Background;
