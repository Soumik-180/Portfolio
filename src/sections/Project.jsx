import React from 'react';
import projectGif from '../../assets/project.gif';

const Project = () => {
    return (
        <section className="min-h-screen py-4 flex flex-col items-center justify-center relative overflow-hidden" id="project">
            <div className="container mx-auto px-6 relative z-10 w-full flex flex-col items-center space-y-4">
                
                {/* Title */}
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-heading text-center text-[#111] dark:text-white hover:scale-105 transition-transform duration-300">
                    My Works
                </h2>

                {/* Symmetrical Layout */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 w-full max-w-[1400px]">
                    
                    {/* Left Project Card: Disease Prediction */}
                    <div className="w-full lg:w-[420px] xl:w-[480px] bg-white dark:bg-slate-800 p-6 rounded-[2rem] shadow-xl border border-gray-100 dark:border-slate-700 hover:scale-105 transition-all duration-500 z-10 animate-float flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold font-heading mb-3 text-[#111] dark:text-white hover:scale-105 transition-transform duration-300 origin-left inline-block">
                                Disease-prediction
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 font-medium text-sm lg:text-base mb-4 leading-relaxed hover:scale-105 transition-transform duration-300 origin-left inline-block">
                                This project presents an AI-powered clinical decision-support system designed to analyze biomarker patterns and predict disease outcomes. The system uses machine learning and explainable AI to assist in early risk detection and improve clinical decision-making.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <a 
                                href="https://disease-outcome-prediction.streamlit.app" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="px-6 py-2 bg-[#111] dark:bg-white text-white dark:text-[#111] font-semibold rounded-full hover:scale-110 transition-transform duration-300 text-sm"
                            >
                                Live App
                            </a>
                            <a 
                                href="https://github.com/Soumik-180/Disease-prediction-.git" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="px-6 py-2 border-2 border-[#111] dark:border-white text-[#111] dark:text-white font-semibold rounded-full hover:scale-110 transition-transform duration-300 hover:bg-black/5 dark:hover:bg-white/10 text-sm"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>

                    {/* Center Animation Hub */}
                    <div className="relative w-64 md:w-[22rem] xl:w-[28rem] z-0 flex-shrink-0 flex items-center justify-center pointer-events-none">
                        <img 
                            src={projectGif} 
                            alt="Center Animation Hub" 
                            className="w-full object-contain drop-shadow-2xl"
                        />
                    </div>

                    {/* Right Project Card: Protein Analyzer */}
                    <div className="w-full lg:w-[420px] xl:w-[480px] bg-white dark:bg-slate-800 p-6 rounded-[2rem] shadow-xl border border-gray-100 dark:border-slate-700 hover:scale-105 transition-all duration-500 z-10 animate-float-delayed flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold font-heading mb-3 text-[#111] dark:text-white hover:scale-105 transition-transform duration-300 origin-left inline-block">
                                Protein Sequence Analyzer
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 font-medium text-sm lg:text-base mb-4 leading-relaxed hover:scale-105 transition-transform duration-300 origin-left inline-block">
                                A modular, pure-Python bioinformatics web application built with Streamlit. It performs rigorous physicochemical analysis, sequence characterization, and local alignment for protein sequences with scientifically grounded methods.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <a 
                                href="https://protein-sequence-analyser.streamlit.app/" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="px-6 py-2 bg-[#111] dark:bg-white text-white dark:text-[#111] font-semibold rounded-full hover:scale-110 transition-transform duration-300 text-sm"
                            >
                                Live App
                            </a>
                            <a 
                                href="https://github.com/Soumik-180/Protein-Sequence-Analyser-.git" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="px-6 py-2 border-2 border-[#111] dark:border-white text-[#111] dark:text-white font-semibold rounded-full hover:scale-110 transition-transform duration-300 hover:bg-black/5 dark:hover:bg-white/10 text-sm"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Project;
