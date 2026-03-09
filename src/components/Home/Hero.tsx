import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const tabs = [
  {
    id: 'imotions-11',
    label: 'iMotions 11 — 20 years of innovation',
    title: '元镜视界基于10年创新打造',
    labelShort: '10年元镜视界',
    image: '/src/assets/home/banner1.jpg',
    linkText: '即刻了解',
    link: '/features'
  },
  {
    id: 'lab',
    label: 'iMotions Lab',
    title: '元镜视界 × 四川传媒学院共建的 “AI 影视” 双驱平台',
    labelShort: '元镜视界实验室',
    image: '/src/assets/home/banner2.jpg',
    linkText: '即刻了解',
    link: '/lab'
  },
  {
    id: 'edulabs',
    label: 'EduLabs',
    title: '体验情绪共鸣的双向链路',
    labelShort: '体验情绪测试',
    image: '/src/assets/home/banner3.jpg',
    linkText: '即刻了解',
    link: '#'
  },
  {
    id: 'ad-testing',
    label: 'Facial Coding for Ad Testing',
    title: '元镜Record：从“事后追溯”到“实时协同”',
    labelShort: '探索解决方案',
    image: '/src/assets/home/banner4.jpg',
    linkText: '即刻了解',
    link: '#'
  }
];
const navigateToDetailPage = (link: string) => {
  window.location.href = link;
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative h-[600px] lg:h-[calc(100vh-62px)] max-h-[800px] min-h-[600px] bg-primary overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          {tabs.map((tab, index) => (
            activeTab === index && (
              <motion.img
                key={tab.id}
                src={tab.image}
                alt={tab.title}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )
          ))}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1280px] mx-auto px-4 flex flex-col justify-end pb-16">

        {/* Active Tab Content */}
        <div className="mb-12 max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <span className="text-white text-sm font-semibold uppercase tracking-wider mb-2 block">
                {tabs[activeTab].labelShort}
              </span>
              <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6 drop-shadow-lg">
                {tabs[activeTab].title}
              </h2>
              <a
                href={tabs[activeTab].link}
                className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-full transition-colors"
              >
                {tabs[activeTab].linkText}
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tabs Navigation */}
        <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onMouseEnter={() => setActiveTab(index)}
              onClick={() => navigateToDetailPage(tab.link)}
              className={`whitespace-nowrap text-sm font-semibold pb-4 border-b-4 transition-colors  cursor-pointer ${activeTab === index
                ? 'text-white border-secondary'
                : 'text-white/70 border-transparent hover:text-white hover:border-white/30'
                }`}
            >
              {tab.labelShort} 
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
