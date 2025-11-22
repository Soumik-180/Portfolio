import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ text, className = "" }) => {
    // Split text into characters
    const characters = text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2
            }
        }
    };

    const child = {
        hidden: {
            opacity: 0,
            y: 20,
            rotateX: 90
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    return (
        <motion.h2
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={`text-3xl md:text-4xl font-bold mb-12 flex flex-wrap gap-[0.2em] ${className}`}
        >
            {text.split(" ").map((word, i) => (
                <span key={i} className="inline-flex overflow-hidden">
                    {word.split("").map((char, index) => (
                        <motion.span key={index} variants={child}>
                            {char}
                        </motion.span>
                    ))}
                </span>
            ))}
        </motion.h2>
    );
};

export default SectionHeading;
