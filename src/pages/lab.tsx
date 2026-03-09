import React from 'react';
import FadeIn from '../components/FadeIn';

export default function LabPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] md:h-[600px] w-full bg-black overflow-hidden mt-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: 'url("https://picsum.photos/seed/human-eye/1920/1080")' }}
        />
        
        {/* Content */}
        <div className="relative h-full max-w-[1280px] mx-auto px-4 flex flex-col justify-center">
          <FadeIn>
            <p className="text-white text-xl md:text-2xl font-light mb-4">
              Powering Human Insight
            </p>
            <h1 className="text-white text-5xl md:text-7xl font-bold mb-6">
              元镜视界 Lab
            </h1>
            <p className="text-white text-lg md:text-xl max-w-2xl leading-relaxed">
              元镜视界 Lab is a research platform built to better our understanding of human behavior.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Sub-navigation Bar */}
      <div className="sticky top-[72px] bg-white border-b border-gray-200 z-40 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-secondary" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-2xl font-bold text-primary tracking-wider">LAB</span>
          </div>

          {/* Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#biosensors" className="text-primary font-bold hover:text-secondary transition-colors">Biosensors</a>
            <a href="#analysis" className="text-primary font-bold hover:text-secondary transition-colors">Analysis</a>
            <a href="#surveys" className="text-primary font-bold hover:text-secondary transition-colors">Surveys</a>
            <a href="#modules" className="text-primary font-bold hover:text-secondary transition-colors">Modules</a>
          </div>

          {/* CTA Button */}
          <button className="bg-secondary text-white font-bold py-2 px-6 rounded-full hover:bg-orange-600 transition-colors">
            Get Demo
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1080px] mx-auto px-4 py-24 ">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Welcome to 元镜视界 Lab
            </h2>
            <p className="text-lg text-text-grey leading-relaxed mb-6">
              元镜视界 Lab is a modular software that streamlines human behavior research by unifying study design, stimulus presentation, data collection, visualization, and analysis into one comprehensive platform.
            </p>
            <p className="text-lg text-text-grey leading-relaxed">
              Whether you are conducting academic research, testing user experiences, or exploring consumer behavior, our platform provides the tools you need to gather deep, actionable insights from multiple biometric sensors simultaneously.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
