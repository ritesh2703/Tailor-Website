import React from 'react';
import heroImage from '../assets/hero-tailor.png';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[70vh] md:min-h-screen flex flex-col md:flex-row items-stretch justify-between 
                 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white overflow-hidden"
    >
      {/* Left Content Area */}
      <div className="w-full md:w-1/2 px-8 py-12 pb-24 md:py-16 md:pl-24 relative z-10 flex flex-col justify-center">
        {/* Circular Text Animation - Updated for full circle */}
        <div className="absolute top-8 left-8 md:top-16 md:left-16 w-32 h-32 flex items-center justify-center animate-spin-slow">
          <svg viewBox="0 0 300 300" className="w-full h-full">
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text fill="#caa892" fontSize="25" fontFamily="sans-serif" fontWeight="bold">
              <textPath xlinkHref="#circlePath" startOffset="0%">
                BEST TAILOR SERVICE IN YOUR CITY • BEST TAILOR SERVICE IN YOUR CITY •
              </textPath>
            </text>
          </svg>
        </div>

        {/* Main Content (Headline, Paragraph, Buttons) */}
        <div className="mt-32 md:mt-0">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-left">
            We make clothes <br className="hidden md:block" /> 
            <span className="text-[#caa892]">that suit you</span>
          </h1>

          <p className="text-gray-300 text-lg max-w-md mb-8 text-left">
            Discover your perfect fit with our expert tailoring services. We craft unique garments that truly reflect your style and personality, ensuring you look and feel your best.
          </p>

          <div className="flex space-x-4">
            <button className="bg-[#c39577] hover:bg-[#b99279] text-white font-semibold px-8 py-3 transition-all duration-300 transform hover:scale-105 shadow-lg">
              OUR SERVICES
            </button>
          </div>
        </div>
      </div>

      {/* Right Image Area */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center md:justify-end py-8 md:py-0">
        <img
          src={heroImage}
          alt="Tailor working"
          className="w-[90%] md:w-full h-auto object-cover rounded-lg shadow-2xl mt-8 md:mt-0"
          style={{ maxHeight: '90%', objectPosition: 'center center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 to-transparent md:bg-gradient-to-l md:from-[#0f172a]/90 md:to-transparent"></div>
      </div>

      {/* Inline Style Tag for Animations */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;