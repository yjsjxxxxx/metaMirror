import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from "motion/react";
import React, { useEffect, useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import ClawPage from './pages/claw';
import ProductsPage from './pages/product';
import EnginePage from './pages/engine';
import CinePage from './pages/cine';
import MediaTestingPage from './pages/media-testiong';
import AdTestingPage from './pages/ad-testing';
import UXResearchPage from './pages/ux-research';
import MarketResearchPage from './pages/market-research';
import NeuromarketingPage from './pages/neuromarketing';
import EducationResearchPage from './pages/education-research';
import ProductDesignPage from './pages/product-design';
import PsychologyToolsPage from './pages/psychology-tools';
import BusinessMarketingResearchPage from './pages/business-marketing-research';
import SmartClassroomPage from './pages/smart-classroom';
import EducationLabPage from './pages/education-lab';
import Index from './pages/index';
import Test from './pages/test'

export default function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring configuration for the trailing circle
  const springConfig = { damping: 100, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const dotSpringConfig = { damping: 70, stiffness: 120 }; // 更快的响应
  const dotSmoothX = useSpring(mouseX, dotSpringConfig);
  const dotSmoothY = useSpring(mouseY, dotSpringConfig);
  // State to handle initial position and visibility
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 120);
      mouseY.set(e.clientY - 20);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, isVisible]);
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-text-main">

        {/* Custom Cursor Elements */}
        {isVisible && (
          <>
            {/* Large Trailing Circle */}
            <motion.div
              style={{
                x: smoothX,
                y: smoothY,
                translateX: "-50%",
                translateY: "-50%",
              }}
              className="fixed top-0 left-0 w-16 h-16 border border-white/30 rounded-full pointer-events-none z-50"
            />

            {/* Small Direct Dot */}
            <motion.div
              style={{
                x: dotSmoothX,
                y: dotSmoothY,
                translateX: "-50%",
                translateY: "-50%",
              }}
              className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-50 shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            />
          </>
        )}
        <Header />
        <main className="flex-grow ">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/claw" element={<ClawPage />} />
            <Route path="/product" element={<ProductsPage />} />
            <Route path="/engine" element={<EnginePage />} />
            <Route path="/cine" element={<CinePage />} />
            <Route path="/media-testing" element={<MediaTestingPage />} />
            <Route path="/ad-testing" element={<AdTestingPage />} />
            <Route path="/ux-research" element={<UXResearchPage />} />
            <Route path="/market-research" element={<MarketResearchPage />} />
            <Route path="/neuromarketing" element={<NeuromarketingPage />} />
            <Route path="/education-research" element={<EducationResearchPage />} />
            <Route path="/product-design" element={<ProductDesignPage />} />
            <Route path="/psychology-tools" element={<PsychologyToolsPage />} />
            <Route path="/business-marketing-research" element={<BusinessMarketingResearchPage />} />
            <Route path="/smart-classroom" element={<SmartClassroomPage />} />
            <Route path="/education-lab" element={<EducationLabPage />} />
            <Route path="/index" element={<Index />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}