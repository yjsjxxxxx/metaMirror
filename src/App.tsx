import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/home';
import AboutPage from './pages/about';  
import ContactPage from './pages/contact';
import FeaturesPage from './pages/features';
import LabPage from './pages/lab';    

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
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/lab" element={<LabPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}