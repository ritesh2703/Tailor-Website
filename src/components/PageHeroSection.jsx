// src/components/PageHeroSection.jsx
import React from "react";

const PageHeroSection = ({ title, bgImage, subtitle }) => {
  return (
    <section className="relative w-full h-[300px] md:h-[420px] flex bg-[#0f172a]">
      {/* Left side with content */}
      <div className="w-1/2 h-full flex items-center justify-center relative p-8">
        <div className="relative z-10 text-center text-white">
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center mb-6 animate-spin-slow">
              <svg viewBox="0 0 300 300" className="w-full h-full">
                <path
                  id="circlePath"
                  fill="none"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                />
                <text 
                  fill="#fecaca" 
                  fontSize="20" 
                  fontFamily="'Montserrat', sans-serif" 
                  fontWeight="600"
                  letterSpacing="2"
                >
                  <textPath xlinkHref="#circlePath" startOffset="0%">
                    ✦ BEST TAILOR SERVICE IN YOUR CITY ✦ BEST TAILOR SERVICE IN YOUR CITY  ✦
                  </textPath>
                </text>
              </svg>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-2 font-serif tracking-tight">
              {title}
            </h1>
            
            {subtitle && (
              <p className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto mt-3">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Right side with image */}
      <div className="w-1/2 h-full overflow-hidden relative">
        <div className="absolute left-0 top-20 h-full w-full rounded-l-3xl overflow-hidden">
          <img
            src={bgImage}
            alt="Tailoring"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/30 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default PageHeroSection;