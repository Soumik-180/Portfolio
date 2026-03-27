const About = () => {
    const aboutMeGif = "/Portfolio/assets/about-me.gif";

    return (
        <section className="py-16 md:py-24" id="about">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Left Column: Mock Window Card */}
                <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-start">
                    <div className="bg-[#fcf8f2] dark:bg-slate-800 rounded-[2rem] p-4 md:p-5 shadow-2xl border border-gray-200 dark:border-slate-700 w-full max-w-lg xl:max-w-xl transform hover:-translate-y-2 transition-transform duration-500">
                        {/* Mock Title Bar */}
                        <div className="flex items-center justify-between mb-4 px-2">
                            <div className="flex gap-2.5">
                                <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
                                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
                                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
                            </div>
                        </div>
                        {/* GIF Content */}
                        <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-gray-100 dark:bg-slate-700 border-2 border-white/50 dark:border-transparent cursor-pointer">
                            <img
                                src={aboutMeGif}
                                alt="About Me Animation"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column: Text Content */}
                <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
                    {/* Title Area */}
                    <div className="flex justify-between items-start mb-10 w-full">
                        <div>
                            <h2 className="font-heading text-5xl md:text-[68px] font-extrabold uppercase text-[#111] dark:text-white leading-none tracking-tight hover:scale-105 transition-transform duration-300 origin-left inline-block">
                                ABOUT ME
                            </h2>
                        </div>
                        {/* Decorative Crosses (Hidden on small screens) */}
                        <div className="hidden md:flex flex-col gap-3 text-2xl text-black dark:text-white font-bold opacity-30 select-none pt-2">
                            <div className="tracking-[0.5em]">× × × × × ×</div>
                            <div className="tracking-[0.5em]">× × × × × ×</div>
                        </div>
                    </div>

                    {/* Body Text */}
                    <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg md:text-xl font-medium leading-[1.6] max-w-2xl px-2">
                        <p className="hover:scale-105 transition-transform duration-300 origin-left inline-block">
                            I work where biology meets code — turning sequences into stories and data into meaning.
                        </p>
                        <p className="hover:scale-105 transition-transform duration-300 origin-left inline-block">
                            Currently studying Biotechnology with a specialization in Computational Biology, I spend most of my time building, breaking, and refining ideas at the intersection of science and computation. From sequence analysis to small-scale tools, I’m drawn to problems that demand both logic and curiosity.
                        </p>
                        <p className="hover:scale-105 transition-transform duration-300 origin-left inline-block">
                            I’m less interested in memorizing concepts and more in understanding how things actually work — then rebuilding them in my own way. Clean systems, practical solutions, and quiet iteration over unnecessary complexity.
                        </p>
                        <p className="hover:scale-105 transition-transform duration-300 origin-left inline-block">
                            My focus is on using computation to uncover patterns in biological data — especially in areas like disease understanding and data-driven discovery.
                        </p>
                        <p className="hover:scale-105 transition-transform duration-300 origin-left inline-block">
                            Still learning. Still experimenting. Still figuring things out — one dataset at a time.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
