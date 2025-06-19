import React from "react";
import { FaInstagram } from "react-icons/fa";

const InstagramSection = () => {
  const images = [
    {
      src: "https://preview.colorlib.com/theme/tailor/assets/img/gallery/instra1.png",
      alt: "Business look",
    },
    {
      src: "https://preview.colorlib.com/theme/tailor/assets/img/gallery/instra2.png",
      alt: "Creative workspace",
    }
  ];

  return (
    <section className="py-16 bg-white text-center font-inter px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">
          Follow Us on Instagram
        </h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          Discover our latest collections and behind-the-scenes moments.
          <br />
          Join our fashion community today.
        </p>

        <div className="mt-12 flex justify-center gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative group w-full max-w-[400px] aspect-square overflow-hidden  shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 shadow-inner"></div>
                <div className="relative z-10 bg-white/90 p-3 rounded-full text-pink-600 hover:text-white hover:bg-pink-600 transition-all duration-300 transform group-hover:scale-110">
                  <FaInstagram className="text-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;