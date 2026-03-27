import Lottie from "lottie-react";
import helloAnimation from "../assets/hello.json";

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center pt-32 pb-12 md:pb-20" id="home">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">

        {/* Left Image Section */}
        <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start lg:pl-12 lg:-mt-16">
          {/* Increased profile photo size: w-[480px] instead of [400px] */}
          <div className="relative w-80 md:w-[480px] aspect-[4/5] z-10 group">

            {/* The Profile Art with Moving Light Effect (Tilted left) */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden isolate shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Rotating Light Beam (the moving light effect) */}
              <div
                className="absolute left-1/2 top-1/2 -ml-[50%] -mt-[75%] w-[100%] h-[150%] animate-[spin_4s_linear_infinite] -z-10"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 0%, transparent 60%, #c084fc 80%, #38bdf8 100%)'
                }}
              ></div>

              {/* Inner container to crop the middle and form the glowing outline */}
              <div className="absolute inset-[4px] rounded-[14px] overflow-hidden bg-white dark:bg-slate-800 z-10 shadow-[inset_0_0_15px_rgba(0,0,0,0.1)]">
                <img
                  src={`${import.meta.env.BASE_URL}photo.png`}
                  alt="Soumik Ray Profile Art"
                  className="w-full h-full object-cover relative z-10"
                />
              </div>
            </div>

            {/* Scrolling Video Badge Replacement */}
            <div className="absolute -bottom-6 -left-6 md:-bottom-12 md:-left-12 w-36 h-36 md:w-56 md:h-56 z-20 hover:scale-105 transition-transform duration-300">
              {/* Added a thick white border and shadow to make it pop like a badge */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-white dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-800 flex items-center justify-center p-3">
                <Lottie
                  animationData={helloAnimation}
                  loop={true}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Typography Section */}
        <div className="order-1 lg:order-2 flex flex-col justify-center max-w-2xl px-4 lg:px-0 lg:pl-4">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold leading-tight text-[#111] dark:text-white mb-6 tracking-tight hover:scale-105 transition-transform duration-300 origin-left inline-block">
            Turning biological data into meaningful information
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl font-medium max-w-[540px] leading-relaxed hover:scale-105 transition-transform duration-300 origin-left inline-block">
            Hi! I'm Soumik Ray. Harnessing the power of code and computation to solve biological problems — from analyzing biological data to diagnosis. I believe data is the new microscope.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
