import React from "react";
import { FaTwitter, FaFacebookF, FaPinterestP } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-[#0F172A] text-white py-12 font-inter">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Map */}
        <div>
          <iframe
            title="Tailor Location"
            className="w-full h-[300px] rounded-md border-none"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.4625703011063!2d-74.00601568459349!3d40.712775779330316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3161a2b7e3%3A0x44d0b1739c5580d4!2sNew+York%2C+USA!5e0!3m2!1sen!2sin!4v1687763770089!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Right: Brand Info + Links */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand and Contact Info */}
          <div className="space-y-6 md:w-1/2">
            <div>
              <h2 className="text-4xl font-bold text-orange-400 mb-2">Tailor.</h2>
              <p className="text-gray-300">
                  Master tailors creating custom garments since 1985. We blend traditional craftsmanship
                with modern style to create perfectly fitted clothing for discerning clients.
              </p>
            </div>

            <div>
              <p className="text-xl text-orange-300 font-semibold mb-1">(80) 783 367-3904</p>
              <p className="text-gray-400 text-sm">(80) 783 367-3904</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-orange-300 hover:text-white transition duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-orange-300 hover:text-white transition duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-orange-300 hover:text-white transition duration-300">
                <FaPinterestP />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:w-1/2">
            <h3 className="text-lg font-semibold text-orange-300 mb-3">Our Solutions</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-orange-300">Home</a></li>
              <li><a href="/about" className="hover:text-orange-300">About</a></li>
              <li><a href="/services" className="hover:text-orange-300">Services</a></li>
              <li><a href="/blog" className="hover:text-orange-300">Blog</a></li>
              <li><a href="/contact" className="hover:text-orange-300">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        Copyright ©2025 All rights reserved | This template is made with
        <span className="text-red-500 mx-1">❤️</span> by
        <a
          href="https://colorlib.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-300 ml-1 hover:underline"
        >
          Colorlib
        </a>
      </div>
    </footer>
  );
};

export default FooterSection;
