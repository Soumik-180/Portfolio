import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Camera, ArrowUpRight } from 'lucide-react';

import SectionHeading from '../components/SectionHeading';

const Photography = () => {
    return (
        <section className="py-20" id="photography">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <SectionHeading text="Photography" />

                <div className="relative group">
                    {/* Animated Gradient Border */}
                    <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-50 blur-sm bg-[length:400%_400%] animate-border-flow" />

                    <div className="relative overflow-hidden rounded-3xl bg-primary/90 backdrop-blur-xl border border-white/10 p-8 md:p-12">
                        {/* Background Decorative Elements */}
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="space-y-4 text-center md:text-left">
                                <h3 className="text-3xl md:text-4xl font-bold text-white">Capturing Moments</h3>
                                <p className="text-muted max-w-lg text-lg">
                                    Beyond code and biology, I explore the world through my lens.
                                    Check out my photography page on Instagram.
                                </p>
                            </div>

                            <motion.a
                                href="https://www.instagram.com/_ray_graphy_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-purple-500/25 transition-all"
                            >
                                <Instagram size={24} />
                                <span>@_ray_graphy_</span>
                                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Photography;
