import React, { useState, useEffect, useRef, useCallback } from 'react';
import './product.css';
import FadeIn from '../components/FadeIn';

// 定义组件所需的数据类型
interface SpecItem {
  title: string;
  description: string;
}

interface CineCard {
  title: string;
  description: string;
}

// 生成随机波浪高度的工具函数
const generateRandomWaves = (count: number, min: number, max: number): number[] => {
  return Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min);
};

// SVG 图标组件
const EmotionIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
  </svg>
);

const CineIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M18 4v1h-2V4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1H6V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" />
  </svg>
);

// 波浪组件
const WaveVisualization: React.FC<{
  waveHeights: number[];
  isAnimating: boolean
}> = ({ waveHeights, isAnimating }) => (
  <div className={`wave-lines ${isAnimating ? 'animating' : ''}`} id="wave-container">
    {waveHeights.map((height, index) => (
      <div
        key={index}
        className="wave-bar"
        style={{ height: `${height}px` }}
      />
    ))}
  </div>
);

// 规格项组件
const SpecItemComponent: React.FC<SpecItem> = ({ title, description }) => (
  <div className="spec-item">
    <strong>{title}</strong>
    <span>{description}</span>
  </div>
);

// 影院卡片组件
const CineCardComponent: React.FC<CineCard> = ({ title, description }) => (
  <div className="cine-card">
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

export default function ProductPage() {
  const [isHovered, setIsHovered] = useState(false);
  const [waveHeights, setWaveHeights] = useState<number[]>(
    generateRandomWaves(20, 10, 90)
  );
  const waveIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // 更新波浪高度的回调函数
  const updateWaveHeights = useCallback(() => {
    setWaveHeights(generateRandomWaves(20, 5, 95));
  }, []);

  // 处理悬停状态
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  // 使用 effect 控制波浪动画
  useEffect(() => {
    if (isHovered) {
      // 立即更新一次波浪高度
      updateWaveHeights();

      // 设置定时器更新波浪高度
      waveIntervalRef.current = setInterval(updateWaveHeights, 200);
    } else {
      // 清除定时器
      if (waveIntervalRef.current) {
        clearInterval(waveIntervalRef.current);
        waveIntervalRef.current = null;
      }
    }

    // 清理函数
    return () => {
      if (waveIntervalRef.current) {
        clearInterval(waveIntervalRef.current);
      }
    };
  }, [isHovered, updateWaveHeights]);

  // 定义规格项目数据
  const specItems: SpecItem[] = [
    {
      title: "演员表演端赋能",
      description: "实时采集心率与脑电波，精准判断演员是否进入角色情绪，推荐更能让观众共情的表演细节。"
    },
    {
      title: "观众情感洞察",
      description: "捕捉观影时的心跳加速与泪点反应，生成可视化“观众情绪热力图”及情感变化曲线。"
    },
    {
      title: "共鸣的深度量化指标",
      description: "让共鸣不再是“看不见摸不着”的概念，以真实反馈数据赋能中小团队，打破头部企业靠垄断资源构建的表达壁垒。"
    }
  ];

  // 定义影院卡片数据
  const cineCards: CineCard[] = [
    {
      title: "情绪数据无感化采集",
      description: "影院内搭载元镜Emotion智能设备，观众观影时即可无感实时捕捉生理数据，同步记录紧张、感动、注意力分散等细微波动。"
    },
    {
      title: "AI大模型深度分析",
      description: "百亿级多模态情感大模型实时处理海量原始数据，精准标记高共鸣度剧情与薄弱情节，从主观感受转向客观量化指标。"
    },
    {
      title: "情感可量化参考输出",
      description: "结合行业专家的专业视角，系统自动输出“AI+影评人”综合评价报告，为片方调整创作、预判票房风控提供最直接的量化参考。"
    }
  ];

  return (
    <div className="meta-mirror-products">
      {/* 全局 SVG 渐变定义 */}
      <svg width="0" height="0" style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <linearGradient id="icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0aa5d9" />
          <stop offset="100%" stopColor="#41b586" />
        </linearGradient>
      </svg>

      {/* 1. 硬件级暗夜 Hero Banner */}
      <section className="hw-hero">
        <div className="hero-content">
          <FadeIn>
            <span className="hero-tag">META MIRROR HARDWARE</span>
            <h1 style={{ whiteSpace: 'pre-line' }}>穿透影视全链路的{'\n'}情绪守护者</h1>
            <p style={{ whiteSpace: 'pre-line' }}>
              赋能"万亿情绪经济"时代的数字基建。{'\n'}
              通过智能硬件与场景打破数字世界与真实人性的壁垒，让情感共鸣转变为可量化、可预测的数据资产。
            </p>
          </FadeIn>
        </div>
      </section>
      {/* 2. 核心生态引流卡片 */}
      <div className="dual-flagship-wrap">
        <div className="dual-grid">
          {/* Emotion 卡片 */}
          <div className="flagship-card">
            <div className="flagship-icon">
              <EmotionIcon />
            </div>
            <h3>元镜Emotion</h3>
            <p>情绪共鸣双向穿戴终端，精准采集演员生理数据与观众观影热力图。</p>
            <a href="#emotion-detail" className="flagship-link">了解双向链路</a>
          </div>

          {/* Cine 卡片 */}
          <div className="flagship-card">
            <div className="flagship-icon">
              <CineIcon />
            </div>
            <h3>元镜Cine</h3>
            <p>AI时代影院新形态，全国映前市场评测的必选阵地，重构情感量化标准。</p>
            <a href="#cine-detail" className="flagship-link">探索应用场景</a>
          </div>
        </div>
      </div>
      {/* 3. 详细介绍区 */}
      <div className="container" style={{ paddingTop: '40px' }}>
        <div className="section-header">
          <h2 className="section-title">重构影视情感连接的<span className="gradient-text">核心终端与场景</span></h2>
          <p className="section-desc">让创作不再仅仅依靠"主观直觉试错"，以AI实现情感表达与观众共鸣的深度量化。</p>
        </div>

        {/* Meta Emotion 详解 */}
        <div
          className="feature-row"
          id="emotion-detail"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* 动画可视化区域 */}
          <div className="feature-image">
            <div className="mockup-emotion">
              <div className="halo-ring">
                <div className="halo-core"></div>
              </div>
              <WaveVisualization
                waveHeights={waveHeights}
                isAnimating={isHovered}
              />
            </div>
          </div>

          <div className="feature-text">
            <span className="hw-name">META EMOTION</span>
            <h2 style={{ whiteSpace: 'pre-line' }}>精准捕捉情感的{'\n'}双向穿戴终端</h2>
            <p>
              作为聚焦情感连接的核心穿戴设备（手环/脑机接口形态），元镜Emotion填补了"演员情绪传递不准"与"观众情感反馈模糊"的断层，
              实现创作端与观众端的直接对话。
            </p>

            <div className="hw-specs">
              {specItems.map((item, index) => (
                <SpecItemComponent
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3.5 元镜 Cine 影院场景增强版块 */}
      <div className="cine-wrap" id="cine-detail">
        <div className="cine-header">
          <h2>AI时代影院新形态 <span className="gradient-text">元镜Cine</span></h2>
          <p>基于硬件采集与大模型分析，重构影视情感评测价值。全国映前市场评测的必选阵地。</p>
        </div>
        <div className="cine-grid">
          {cineCards.map((card, index) => (
            <CineCardComponent
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}