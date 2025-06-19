import PageHeroSection from '../components/PageHeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import VideoSection from '../components/VideoSection'; 

import heroBg from '../assets/hero-tailor.png'; 

const Services = () => {
  return (
    <div className="min-h-screen">
      <PageHeroSection title="Our Services" bgImage={heroBg} />
      <ServicesSection />
      <VideoSection />
      <WhyChooseUsSection />
    </div>
  );
};

export default Services;
