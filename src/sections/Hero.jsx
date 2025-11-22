import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';
import ProfileImage from '../components/ProfileImage';

const Hero = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="min-h-screen flex items-center py-20" id="hero">
            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="order-2 md:order-1"
                >
                    <motion.span variants={item} className="text-accent font-medium tracking-wider text-sm uppercase mb-4 block">
                        Portfolio
                    </motion.span>
                    <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Soumik Ray</span>.
                    </motion.h1>
                    <motion.h2 variants={item} className="text-2xl md:text-3xl text-muted mb-8 max-w-2xl">
                        Pursuing B.Tech Biotechnology at Sharda University.
                        <br className="hidden md:block" />
                        Exploring the intersection of <span className="text-white">Biology</span> and <span className="text-white">Code</span>.
                    </motion.h2>




                </motion.div>

                <div className="order-1 md:order-2 flex justify-center">
                    <ProfileImage />
                </div>
            </div>
        </section>
    );
};

export default Hero;
