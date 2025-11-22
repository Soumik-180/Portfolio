import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "Next-Generation Sequencing (NGS)",
    "Python",
    "C Programming"
];

import SectionHeading from '../components/SectionHeading';

const Skills = () => {
    return (
        <section className="py-20" id="skills">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <SectionHeading text="Skills" />

                <div className="relative group">
                    {/* Animated Gradient Border */}
                    <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-50 blur-sm bg-[length:400%_400%] animate-border-flow" />

                    <div className="relative bg-primary/90 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12">
                        <div className="flex flex-wrap gap-4">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="bg-secondary px-6 py-3 rounded-lg text-muted hover:text-accent hover:bg-secondary/80 transition-colors cursor-default border border-white/5"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
