import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    text: "Brook presents your services with flexible, convenient and compose layouts. You can select your favorite layouts & elements for cularts with unlimited customization possibilities. Pixel-perfect replication of the designers' intended contents your use.",
    name: "Robert Brown",
    role: "Creative designer at Celerio",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Our experience has been nothing short of amazing. Great flexibility and clean, modern layout. Truly pixel-perfect components with high-level customization options.",
    name: "Jane Smith",
    role: "Lead UX Designer at OpenCode",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    text: "Exceptional service and attention to detail. The team delivered beyond our expectations with a perfect blend of creativity and functionality.",
    name: "Michael Johnson",
    role: "Product Manager at TechSolutions",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const QuoteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-12 h-12 text-orange-400 opacity-20"
  >
    <path
      fillRule="evenodd"
      d="M3.792 10.5c-.682 0-1.274.41-1.53 1.002a9.03 9.03 0 00-.162.496 9.03 9.03 0 00-.162-.496C1.518 10.91.926 10.5.244 10.5H0V12h.244c.194 0 .38.045.548.127.168.082.313.2.424.347.11.147.185.318.217.503.033.186.022.38-.03.564a1.55 1.55 0 01-.607.762 1.55 1.55 0 01-.762.607 1.618 1.618 0 00-.564.03 1.618 1.618 0 00-.503.217 1.55 1.55 0 00-.347.424A1.55 1.55 0 000 17.244V18.5h.244c.682 0 1.274-.41 1.53-1.002l.162-.496c.054-.165.114-.327.162-.496-.048-.169-.108-.331-.162-.496C1.518 15.09.926 14.68.244 14.68H0v1.564c.168-.082.354-.127.548-.127.194 0 .38.045.548.127.168.082.313.2.424.347.11.147.185.318.217.503.033.186.022.38-.03.564a1.55 1.55 0 01-.607.762 1.55 1.55 0 01-.762.607 1.618 1.618 0 00-.564.03 1.618 1.618 0 00-.503.217A1.55 1.55 0 000 21.756V24h12v-2.244c0-.682-.41-1.274-1.002-1.53a9.03 9.03 0 00-.496-.162 9.03 9.03 0 00.496-.162c.592-.256 1.002-.848 1.002-1.53V12h-.244c-.682 0-1.274.41-1.53 1.002a9.03 9.03 0 00-.162.496 9.03 9.03 0 00-.162-.496c-.256-.592-.848-1.002-1.53-1.002H3.792zM24 10.5h-.244c-.682 0-1.274.41-1.53 1.002a9.03 9.03 0 00-.162.496 9.03 9.03 0 00-.162-.496c-.256-.592-.848-1.002-1.53-1.002H18V12h.244c.194 0 .38.045.548.127.168.082.313.2.424.347.11.147.185.318.217.503.033.186.022.38-.03.564a1.55 1.55 0 01-.607.762 1.55 1.55 0 01-.762.607 1.618 1.618 0 00-.564.03 1.618 1.618 0 00-.503.217 1.55 1.55 0 00-.347.424A1.55 1.55 0 0016 17.244V18.5h.244c.682 0 1.274-.41 1.53-1.002l.162-.496c.054-.165.114-.327.162-.496-.048-.169-.108-.331-.162-.496.592-.256 1.002-.848 1.002-1.53V12h-.244c-.682 0-1.274.41-1.53 1.002a9.03 9.03 0 00-.162.496 9.03 9.03 0 00-.162-.496c-.256-.592-.848-1.002-1.53-1.002H12V24h12V10.5z"
      clipRule="evenodd"
    />
  </svg>
);

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const delay = 5000; // 5 seconds between transitions

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    // Reset autoplay timer when user manually navigates
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), delay * 2);
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    // Reset autoplay timer when user manually navigates
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), delay * 2);
  };

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(handleNext, delay);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [index, autoPlay]); // Add index and autoPlay to dependencies

  const { text, name, role, image } = testimonials[index];

  return (
    <section className="bg-white py-20 px-4 font-inter">
      <div className="max-w-4xl mx-auto relative p-8 md:p-12">
        <div className="absolute top-8 left-8">
          <QuoteIcon />
        </div>
        
        <div className="relative z-10">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-center italic">
            "{text}"
          </p>

          <div className="flex flex-col md:flex-row items-center gap-6  pt-8">
            <img
              src={image}
              alt={name}
              className="w-14 h-14 rounded-full object-cover border-2 border-orange-200 shadow-sm"
            />
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIndex(i);
                    setAutoPlay(false);
                    setTimeout(() => setAutoPlay(true), delay * 2);
                  }}
                  className={`w-8 h-8 rounded-full transition flex items-center justify-center ${
                    index === i 
                      ? "bg-orange-500 text-white" 
                      : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={handlePrev}
                className="p-2 rounded-full hover:bg-gray-100 transition"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft className="text-xl text-gray-600 hover:text-orange-500" />
              </button>
              <button 
                onClick={handleNext}
                className="p-2 rounded-full hover:bg-gray-100 transition"
                aria-label="Next testimonial"
              >
                <FiChevronRight className="text-xl text-gray-600 hover:text-orange-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;