import React from 'react';
import { motion } from 'framer-motion';
import profileJpg from '/profile.jpg';

const ProfileImage = () => {
    return (
        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto md:mx-0 group">
            {/* Outer Rotating Ring (AI Tech Feel) */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border border-accent/30 rounded-2xl border-dashed pointer-events-none"
            />

            {/* Counter-Rotating Ring */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 border border-emerald-500/20 rounded-2xl border-dotted pointer-events-none"
            />

            {/* Glowing Pulse Behind */}
            <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-3xl animate-pulse pointer-events-none" />

            {/* The Image Container */}
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl z-20 bg-secondary"
            >
                <img
                    src={profileJpg}
                    alt="Soumik Ray"
                    className="w-full h-full object-cover"
                />
            </motion.div>

        </div>
    );
};

export default ProfileImage;
