import { motion } from 'framer-motion';
import sewing from '../assets/sewing.png';
import measuring from '../assets/measuring.png';
import fitting from '../assets/fitting.png';

const services = [
  {
    id: 1,
    title: 'Tailor Sweing',
    description: 'Expert craftsmanship for perfectly fitted garments tailored to your unique measurements and style preferences.',
    image: sewing,
  },
  {
    id: 2,
    title: 'Mesurement',
    description: 'Professional body measurements to ensure your clothing fits perfectly and flatters your physique.',
    image: measuring,
  },
  {
    id: 3,
    title: 'Ready-made',
    description: 'Modification services for store-bought clothing to achieve that custom-fitted look and feel.',
    image: fitting,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Image with increased height */}
              <div className="overflow-hidden ">
                <img
                  src={service.image}
                  alt={service.title}
                  className=" h-100 w-85 transform group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Text content */}
              <div className="mt-8 text-center md:text-left px-4">
                <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                  {/* Number badge - filled by default, outline on hover */}
                  <span className="bg-[#caa892] text-white border-2 border-[#caa892] rounded-full w-8 h-8 text-sm flex items-center justify-center transition-all duration-300 group-hover:bg-transparent group-hover:text-[#caa892]">
                    {service.id}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#caa892] transition duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 group-hover:text-gray-800 transition duration-300 text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Decorative element */}
             
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;