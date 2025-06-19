import { motion, useScroll, useTransform } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaClock, 
  FaRuler, 
  FaParking, 
  FaWheelchair,
  FaTshirt,
  FaCut,
  FaPhone,
  FaEnvelope,
  FaArrowRight
} from "react-icons/fa";

const VisitUs = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren"
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      },
    },
  };

  const cardVariants = {
    hover: {
      y: -5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      },
    },
  };

  return (
    <div className="relative">
      {/* Full-screen Hero Image */}
      <motion.div 
        className="h-screen w-full relative overflow-hidden"
        variants={imageVariants}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 flex items-end pb-32 px-8"
          style={{ y }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-white font-serif tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Our <span className="text-amber-400">Atelier</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Where precision tailoring meets contemporary design
            </motion.p>
            <motion.a
              href="#content"
              className="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-medium transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              Explore Our Studio
              <FaArrowRight className="ml-2" />
            </motion.a>
          </div>
        </motion.div>
        <img
          src="https://img.freepik.com/premium-photo/tailoring-studio-with-sewing-machine-garments_839035-145863.jpg"
          alt="Elegant tailoring studio with sewing machines and garments"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "https://images.unsplash.com/photo-15987029217709-4d3dbb973e71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
          }}
        />
      </motion.div>

      {/* Content Section */}
      <div id="content" className="relative z-20 bg-gray-50 pt-12 pb-24">
        <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 -mt-24">
            {/* Location Card */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-amber-100 rounded-full">
                  <FaMapMarkerAlt className="text-2xl text-amber-700" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 ml-4">Our Location</h2>
              </div>
              <div className="pl-2 space-y-4">
                <p className="text-gray-600 text-lg">
                  Visit our elegant studio in California
                </p>
                <div className="border-l-2 border-amber-300 pl-4">
                  <p className="text-gray-900 font-medium text-lg">Buttonwood, California</p>
                  <p className="text-gray-600">Rosemead, CA 91770</p>
                  <motion.a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-amber-700 hover:text-amber-800 font-medium inline-flex items-center mt-3 group"
                    whileHover={{ x: 3 }}
                  >
                    Open in Google Maps
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Hours Card */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-amber-100 rounded-full">
                  <FaClock className="text-2xl text-amber-700" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 ml-4">Hours & Contact</h2>
              </div>
              <div className="pl-2 space-y-4">
                <div className="flex items-center">
                  <FaPhone className="text-lg text-amber-700 mr-3" />
                  <p className="text-gray-900 font-medium">+1 (253) 565-2365</p>
                </div>
                <div className="space-y-3 mt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">Monday - Friday</span>
                    <span className="text-gray-600">9am - 6pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">Saturday</span>
                    <span className="text-gray-600">10am - 4pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-amber-100 rounded-full">
                  <FaEnvelope className="text-2xl text-amber-700" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 ml-4">Email Support</h2>
              </div>
              <div className="pl-2 space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  <p className="text-gray-700">support@colorlib.com</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  <p className="text-gray-700">sales@colorlib.com</p>
                </div>
                <p className="text-gray-500 text-sm mt-4 pl-5">Response within 24 hours</p>
              </div>
            </motion.div>
          </div>

          {/* Experience Section */}
          <motion.div 
            className="mt-24 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 font-serif">The Bespoke Experience</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-md border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Visit</h3>
                <ul className="space-y-4">
                  {[
                    { icon: <FaTshirt className="text-amber-700" />, text: "Premium fabric selection" },
                    { icon: <FaRuler className="text-amber-700" />, text: "Precision measurements" },
                    { icon: <FaCut className="text-amber-700" />, text: "Custom design consultation" },
                    { icon: <FaParking className="text-amber-700" />, text: "Complimentary valet parking" }
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      <span className="bg-amber-100 p-2 rounded-full mr-4">
                        {item.icon}
                      </span>
                      <span className="text-gray-700">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-md border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Accessibility</h3>
                <div className="flex items-start mb-6">
                  <div className="p-3 bg-amber-100 rounded-full mr-4">
                    <FaWheelchair className="text-2xl text-amber-700" />
                  </div>
                  <div>
                    <p className="text-gray-600">
                      Our studio is fully wheelchair accessible with spacious fitting rooms and ADA compliant facilities.
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    <p className="text-gray-700">Wheelchair ramps at all entrances</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    <p className="text-gray-700">Spacious fitting rooms</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    <p className="text-gray-700">Accessible restrooms</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Testimonial Section */}
          <motion.div 
            className="mt-24 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 font-serif">Client Experiences</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "The attention to detail in both the garments and service is exceptional. Every visit feels like a special occasion.",
                  author: "Sarah Johnson",
                  since: "Client since 2020"
                },
                {
                  quote: "I've never experienced tailoring at this level before. The craftsmanship is unparalleled and worth every penny.",
                  author: "Michael Chen",
                  since: "Client since 2018"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-amber-600 text-2xl mb-4">“</div>
                  <p className="text-gray-700 text-lg italic mb-6">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="text-gray-900 font-medium">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.since}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default VisitUs;