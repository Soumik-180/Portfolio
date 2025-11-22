import React from 'react';
import { motion } from 'framer-motion';
import { Dna, Code, Database, Camera } from 'lucide-react';

const interests = [
    { icon: Camera, label: "Photography" },
    { icon: Code, label: "Coding" },
    { icon: Dna, label: "Computational Biology" },
    { icon: Database, label: "Data Analysis" },
];

import SectionHeading from '../components/SectionHeading';

const About = () => {
    return (
        <section className="py-20" id="about">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <SectionHeading text="About Me" />

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Bio Card - Moving Gradient Border */}
                    <div className="md:col-span-2 relative group">
                        {/* Animated Gradient Border */}
                        <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-50 blur-sm bg-[length:400%_400%] animate-border-flow" />

                        <div className="relative h-full bg-primary/90 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-10 overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                            <div className="relative z-10 space-y-6 text-muted text-lg">
                                <p>
                                    As a <span className="text-white">B.Tech Biotechnology</span> student, I'm passionate about decoding biological systems through the lens of computation and data. With a growing interest in bioinformatics and computational biology, I aim to explore how algorithms, statistics, and machine learning can uncover patterns hidden in biological data.
                                </p>
                                <p>
                                    I believe in learning by doing — whether it's through hands-on projects, coding for data analysis, or diving deep into research papers. I'm currently seeking opportunities (internships, collaborations, or mentorship) that will help me grow technically and intellectually in the field of computational biosciences.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Areas of Interest Board - Moving Gradient Border (No Rotation) */}
                    <div className="relative md:col-span-1 group">
                        {/* Animated Gradient Border */}
                        <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-accent via-purple-500 to-emerald-500 opacity-75 blur-sm bg-[length:400%_400%] animate-border-flow" />

                        <div className="relative h-full bg-primary/90 backdrop-blur-xl rounded-3xl border border-white/10 p-8 flex flex-col justify-center">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                                </span>
                                Areas of Interest
                            </h3>

                            <ul className="space-y-4">
                                {interests.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 5, scale: 1.02 }}
                                        className="flex items-center gap-4 text-muted cursor-default group/item"
                                    >
                                        <div className="p-2.5 bg-white/5 rounded-xl text-accent group-hover/item:bg-accent group-hover/item:text-primary transition-colors duration-300">
                                            <item.icon size={20} />
                                        </div>
                                        <span className="font-medium group-hover/item:text-white transition-colors">{item.label}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
