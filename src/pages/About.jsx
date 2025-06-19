import React, { useState, useEffect } from 'react';
import { FaInstagram, FaRuler, FaCut, FaSocks, FaAward, FaQuoteLeft, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const testimonials = [
    {
      id: 1,
      quote: "Our experience has been nothing short of amazing. Great flexibility and clean, modern layout. Truly pixel-perfect components with high-level customization options.",
      author: "Jane Smith",
      role: "Lead UX Designer at OpenCode"
    },
    {
      id: 2,
      quote: "The attention to detail in every stitch is remarkable. I've never worn a suit that fits so perfectly.",
      author: "Michael Johnson",
      role: "Corporate Executive"
    },
    {
      id: 3,
      quote: "From design consultation to final fitting, the entire process was seamless and enjoyable.",
      author: "David Wilson",
      role: "Wedding Groom"
    }
  ];

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -10,
      scale: 1.03,
      transition: {
        duration: 0.3
      }
    }
  };

  // Curated list of reliable fashion images
  const instagramImages = [
    'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&fit=crop',
    'https://th.bing.com/th/id/OIP.4GkpLyQyCu_zm0Ldn6daTAHaE8?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3',
    'https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&fit=crop'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-indigo-900 to-purple-800 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 md:px-12 text-center relative z-10"
        >
          <motion.h1 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-100">
              About Our Tailor House
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-purple-100 max-w-3xl mx-auto"
          >
            We craft elegant, custom-made garments tailored to your unique style and fit.
          </motion.p>
        </motion.div>
        
        {/* Animated background elements */}
        <motion.div 
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 w-64 h-64 bg-purple-600 opacity-10 rounded-full filter blur-3xl"
        />
      </section>

      {/* Enhanced About Content */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Our Heritage
                </span>
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010 by master tailor Antonio Giovanni, our atelier combines three generations of tailoring expertise with contemporary design sensibilities. What began as a small workshop in Milan has grown into an internationally recognized brand.
              </p>
              <p className="text-gray-600 mb-6">
                Each garment is crafted with meticulous attention to detail, using techniques passed down through generations while incorporating modern innovations in fabric technology and sustainable practices.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Philosophy</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Quality craftsmanship above all else</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Sustainable and ethical sourcing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Personalized service for every client</span>
                  </li>
                </ul>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
              >
                MEET OUR TEAM
              </motion.button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 relative"
            >
              <div className="absolute -top-6 -left-6 w-full h-full border-4 border-purple-200 rounded-lg z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Tailor at work" 
                className="rounded-lg shadow-xl w-full h-auto relative z-10 transform hover:rotate-1 transition duration-500"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg z-20"
              >
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-full mr-3">
                    <FaAward className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">25+ Years Experience</p>
                    <p className="text-sm text-gray-600">Master Tailors</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            Why Choose Our Tailoring Services?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto"
          >
            Experience the difference of premium tailoring where quality meets personal style
          </motion.p>
          
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Enhanced Feature 1 */}
            <motion.div 
              variants={itemVariants}
              whileHover="hover"
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-purple-200"
            >
              <div className="text-5xl mb-6 flex justify-center">
                <motion.div 
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-full text-white"
                >
                  <FaRuler />
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Precision Tailoring</h3>
              <p className="text-gray-600 mb-4">
                Our expert tailors provide precise measurements and cuts to ensure your garments fit perfectly every time.
              </p>
              <p className="text-sm text-purple-600 font-medium">15-point measurement system</p>
            </motion.div>
            
            {/* Enhanced Feature 2 */}
            <motion.div 
              variants={itemVariants}
              whileHover="hover"
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-200"
            >
              <div className="text-5xl mb-6 flex justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 rounded-full text-white"
                >
                  <FaSocks />
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Premium Materials</h3>
              <p className="text-gray-600 mb-4">
                We use only the highest quality fabrics from renowned mills in Italy, England, and Japan.
              </p>
              <p className="text-sm text-blue-600 font-medium">100+ fabric options available</p>
            </motion.div>
            
            {/* Enhanced Feature 3 */}
            <motion.div 
              variants={itemVariants}
              whileHover="hover"
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-teal-200"
            >
              <div className="text-5xl mb-6 flex justify-center">
                <motion.div
                  animate={{ rotateY: [0, 180, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="bg-gradient-to-r from-teal-500 to-green-500 p-4 rounded-full text-white"
                >
                  <FaCut />
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Custom Designs</h3>
              <p className="text-gray-600 mb-4">
                Create your unique style with our custom design services tailored to your personal preferences.
              </p>
              <p className="text-sm text-teal-600 font-medium">Unlimited design possibilities</p>
            </motion.div>
            
            {/* Enhanced Feature 4 */}
            <motion.div 
              variants={itemVariants}
              whileHover="hover"
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-green-200"
            >
              <div className="text-5xl mb-6 flex justify-center">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-gradient-to-r from-green-500 to-yellow-500 p-4 rounded-full text-white"
                >
                  <FaAward />
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Expert Craftsmanship</h3>
              <p className="text-gray-600 mb-4">
                Each piece is handcrafted by our skilled artisans with attention to every detail.
              </p>
              <p className="text-sm text-green-600 font-medium">200+ hours of handwork per suit</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-800 mb-4"
          >
            Client Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
          >
            Hear what our valued clients say about their experience with our tailoring services
          </motion.p>
          
          <div className="relative h-96">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                animate={{ 
                  opacity: activeTestimonial === index ? 1 : 0,
                  x: activeTestimonial === index ? 0 : (index % 2 === 0 ? 100 : -100),
                  zIndex: activeTestimonial === index ? 1 : 0
                }}
                transition={{ duration: 0.5 }}
                className={`absolute top-0 left-0 right-0 bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto ${activeTestimonial === index ? 'block' : 'hidden'}`}
              >
                <FaQuoteLeft className="text-purple-300 text-4xl mb-6" />
                <p className="text-gray-600 text-xl italic mb-8">"{testimonial.quote}"</p>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
            
            <div className="flex justify-center mt-8 absolute bottom-0 left-0 right-0 space-x-3">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${activeTestimonial === index ? 'bg-purple-600 w-6' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Instagram Section with Fixed Images */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-yellow-50">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            Follow Our Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            See our latest creations and behind-the-scenes on Instagram
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {instagramImages.map((imgUrl, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 relative"
              >
                <img 
                  src={imgUrl}
                  alt={`Tailoring work ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-30">
                  <FaInstagram className="text-white text-3xl" />
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 flex items-center mx-auto"
          >
            <FaInstagram className="mr-2" />
            Follow @TailorHouse
          </motion.button>
        </div>
      </section>

      {/* New Contact Info Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <div className="bg-purple-600 p-3 rounded-full mr-4">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Tailor house</h3>
                <p>123 Tailor Street</p>
                <p>Buttonwood, California ,Rosemead, CA 91770</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <div className="bg-blue-600 p-3 rounded-full mr-4">
                <FaPhone className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                <p>(80) 783 367-3904</p>
                <p>info@tailorhouse.com</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <div className="bg-green-600 p-3 rounded-full mr-4">
                <FaClock className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
                <p>Mon-Fri: 9am - pm</p>
                <p>Sat: 10am - pm</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;