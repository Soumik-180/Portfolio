import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const education = [
    {
        school: "Sharda University, Greater Noida",
        degree: "Bachelor of Technology - B.Tech, Biotechnology",
        date: "Aug 2024 - 2028",
        details: "Activities: Badminton. Skills: Next-Generation Sequencing (NGS), Python.",
    },
    {
        school: "DRMC - Dhaka Residential Model College",
        degree: "HSC",
        date: "Sep 2020 - May 2022",
        details: "Grade: GPA 5.0. Activities: Badminton & Handball.",
    },
    {
        school: "Amena-Baki Residential Model School & College",
        degree: "SSC",
        date: "Feb 2016 - Feb 2020",
        details: "Grade: GPA 5.0. Activities: Football, Handball, Volleyball, Badminton. Skills: C.",
    }
];

import SectionHeading from '../components/SectionHeading';

const Experience = () => {
    return (
        <section className="py-20" id="experience">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <SectionHeading text="Education & Experience" />

                <div className="relative group">
                    {/* Animated Gradient Border */}
                    <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-50 blur-sm bg-[length:400%_400%] animate-border-flow" />

                    <div className="relative bg-primary/90 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12">
                        <div className="space-y-12 relative border-l border-white/10 ml-3 pl-8 md:ml-0 md:pl-0 md:border-l-0">
                            {education.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    whileHover={{ x: 10 }}
                                    className="relative md:grid md:grid-cols-[220px_1fr] md:gap-0 group"
                                >
                                    {/* Timeline dot (Mobile) */}
                                    <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-primary bg-accent md:hidden group-hover:scale-125 transition-transform" />

                                    <div className="text-sm text-muted md:text-right pt-1 uppercase tracking-wider whitespace-nowrap md:pr-8">
                                        {item.date}
                                    </div>

                                    <div className="relative md:border-l md:border-white/10 md:pl-8">
                                        {/* Desktop Timeline dot */}
                                        <div className="hidden md:block absolute -left-[10.5px] top-1.5 w-5 h-5 rounded-full border-4 border-primary bg-accent group-hover:scale-125 transition-transform" />

                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{item.school}</h3>
                                        <p className="text-accent mb-4 flex items-center gap-2">
                                            <GraduationCap size={16} />
                                            {item.degree}
                                        </p>
                                        <p className="text-muted">{item.details}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-16">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Award className="text-accent" size={24} />
                                Certifications & Achievements
                            </h3>
                            <div className="grid gap-4 md:grid-cols-2">
                                {[
                                    {
                                        title: "Internal Smart India Hackathon (SIH) 2025",
                                        issuer: "Sharda School of Computing Science & Engineering",
                                        date: "September 2025"
                                    },
                                    {
                                        title: "World Heart Day Walkathon 2025",
                                        issuer: "ShardaCare - Healthcity",
                                        date: "September 2025"
                                    },
                                    {
                                        title: "Bioinformatics with AI",
                                        issuer: "Ethical Edufabrica Pvt. Ltd.",
                                        date: "June 2025"
                                    }
                                ].map((cert, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-6 bg-secondary/30 rounded-xl border border-white/5 hover:border-accent/30 transition-colors group"
                                    >
                                        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">{cert.title}</h4>
                                        <p className="text-muted text-sm mb-1">{cert.issuer}</p>
                                        <p className="text-accent text-xs uppercase tracking-wider">{cert.date}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default Experience;
