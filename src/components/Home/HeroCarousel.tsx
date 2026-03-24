

import React, { useState, useEffect, useCallback } from 'react';

const bannerImages = {
  banner: '/images/home/banner.jpg',
  banner2: '/images/home/banner2.jpg',
  banner3: '/images/home/banner3.jpg',
  banner4: '/images/home/banner4.jpg'
};
export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      image: bannerImages.banner,
      title: "全链路智能执行者",
      desc: "元镜Claw 智能体，让 AI 摆脱单纯的辅助角色，跃升为落地执行者。",
      link: '/claw',
      btnText: "探索元镜Claw"
    },
    {
      image: bannerImages.banner2,
      title: "穿透影视全链路的情绪守护者",
      desc: "元镜视界以 AI 实现“情感可量化”，推动影视制作从“经验猜测”向“数据锚定”转型。",
      link: '/product',
      btnText: "探索数字生态"
    },
    {
      image: bannerImages.banner3,
      title: "元镜视界AI引擎",
      desc: "影视行业从“经验驱动”向“数据驱动”转型的核心底座，让创意高效落地。",
      link: '/engine',
      btnText: "了解AI引擎"
    },
    {
      image: bannerImages.banner4,
      title: "元镜Cine评测系统",
      desc: "AI 时代影院新形态。以“数据采集 + 深度分析”，重构影视情感评测价值。",
      link: "/cine",
      btnText: "了解Cine系统"
    }
  ];
  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
  }, []);

  useEffect(() => {
    let slideInterval: NodeJS.Timeout;

    if (!isPaused) {
      slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }

    return () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    };
  }, [slides.length, isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero-carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          <div
            className="slide-content"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h1  style={{ whiteSpace: 'pre-line' }}>{slide.title}</h1>
            <p>{slide.desc}</p>
            <a href={slide.link} className="btn btn-primary">{slide.btnText}</a>
          </div>
        </div>
      ))}

      <div
        className="carousel-dots w-fit flex items-center h-[200px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </section>
  );
}