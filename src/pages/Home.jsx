import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import VideoSection from '../components/VideoSection'; 
import TestimonialSection from '../components/TestimonialSection';
import InstagramSection from "../components/InstagramSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUsSection />
      <VideoSection />
      <TestimonialSection />
      <InstagramSection />        
    </div>
  );
};

export default Home;
