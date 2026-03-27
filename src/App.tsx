import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Test from './pages/test';
export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-text-main">
        <Header />
        <main className="flex-grow">
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
            <Route path="/test" element={<Test />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}