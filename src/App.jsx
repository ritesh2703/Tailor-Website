import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import VisitUs from './pages/VisitUs';
import FooterSection from "../src/components/FooterSection";
import './App.css'; // Create this file for additional styles

const App = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Color scheme
  const colors = {
    primary: '#6C63FF', // Purple
    secondary: '#4D44DB', // Darker purple
    accent: '#FF6584', // Pink
    light: '#F8F9FA', // Light gray
    dark: '#343A40' // Dark gray
  };

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <Router>
      <div className="App" style={{ backgroundColor: colors.light }}>
        <Navbar />
        <AnimatePresence mode='wait'>
          <Routes>
            <Route path="/" element={
              <motion.div
                key="home"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                <Home />
              </motion.div>
            } />
            <Route path="/about" element={
              <motion.div
                key="about"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                <About />
              </motion.div>
            } />
            <Route path="/services" element={
              <motion.div
                key="services"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                <Services />
              </motion.div>
            } />
            <Route path="/blog" element={
              <motion.div
                key="blog"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                <Blog />
              </motion.div>
            } />
            <Route path="/contact" element={
              <motion.div
                key="contact"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                <Contact />
              </motion.div>
            } />
            <Route path="/visit-us" element={
              <motion.div
                key="visit-us"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
              >
                <VisitUs />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
        <FooterSection />
        
        {/* Enhanced Scroll to Top Button with Animation */}
        <AnimatePresence>
          {showScrollButton && (
            <motion.button 
              onClick={scrollToTop}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                width: '50px',
                height: '50px',
                backgroundColor: colors.primary,
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '20px',
                zIndex: 99,
                boxShadow: `0 4px 15px rgba(108, 99, 255, 0.4)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: colors.secondary,
                boxShadow: `0 6px 20px rgba(108, 99, 255, 0.6)`
              }}
              whileTap={{
                scale: 0.95
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M18 15l-6-6-6 6"/>
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;