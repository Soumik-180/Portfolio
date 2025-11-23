import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-20 text-center" id="contact">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
                <p className="text-muted max-w-xl mx-auto mb-10">
                    I'm currently looking for new opportunities and collaborations in Bioinformatics and Computational Biology.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://www.linkedin.com/in/soumik-ray-455524361/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-accent text-primary px-6 py-3 rounded-full font-semibold hover:bg-blue-400 transition-colors"
                    >
                        <Linkedin size={20} />
                        Connect on LinkedIn
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="mailto:skrsoumikray@gmail.com"
                        className="flex items-center gap-2 border border-muted text-white px-6 py-3 rounded-full font-semibold hover:border-white transition-colors"
                    >
                        <Mail size={20} />
                        Contact Me
                    </motion.a>
                </div>


            </motion.div>
        </section>
    );
};

export default Contact;
