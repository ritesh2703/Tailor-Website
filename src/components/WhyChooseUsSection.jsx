// src/components/WhyChooseUsSection.jsx

const features = [
  {
    img: "https://preview.colorlib.com/theme/tailor/assets/img/icon/services1.svg", // replace with your actual image URL
    title: 'Precision Tailoring',
    description:
      'Our expert tailors provide precise measurements and cuts to ensure your garments fit perfectly every time.',
  },
  {
    img: "https://preview.colorlib.com/theme/tailor/assets/img/icon/services2.svg", // replace with your actual image URL
    title: 'Premium Materials',
    description:
      'We use only the highest quality fabrics and threads to create durable and comfortable clothing.',
  },
  {
    img: "https://preview.colorlib.com/theme/tailor/assets/img/icon/services3.svg", // replace with your actual image URL
    title: 'Custom Designs',
    description:
      'Create your unique style with our custom design services tailored to your personal preferences.',
  },
  {
    img: "https://preview.colorlib.com/theme/tailor/assets/img/icon/services4.svg", // replace with your actual image URL
    title: 'Expert Craftsmanship',
    description:
      'Each piece is handcrafted by our skilled artisans with attention to every detail.',
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Why Choose Our Tailoring Services?
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Experience the difference of premium tailoring
          <br />
          where quality meets personal style
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {features.map((item, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-4">
              <img 
                src={item.img} 
                alt={item.title}
                className="h-20 w-20 object-cover "
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;