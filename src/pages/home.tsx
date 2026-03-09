import React from 'react';
import Hero from '../components/Home/Hero';
import Intro from '../components/Home/Intro';
import VideoSection from '../components/Home/VideoSection';
import SoftwareSection from '../components/Home/SoftwareSection';
import ModulesSection from '../components/Home/ModulesSection';
import LogosSection from '../components/Home/LogosSection';
import HardwareSection from '../components/Home/HardwareSection';
import SolutionsSection from '../components/Home/SolutionsSection';
import NewsSection from '../components/Home/NewsSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <VideoSection />
      <SoftwareSection />
      <ModulesSection />
      <LogosSection />
      <HardwareSection />
      <NewsSection />
      <SolutionsSection />
    </>
  );
}
