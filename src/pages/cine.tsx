import React from 'react';
import './cine.css';

export default function CinePage() {
  return (
    <div className="meta-mirror-cine">
      {/* 全局 SVG 渐变定义 */}
      <svg width="0" height="0" style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <linearGradient id="icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0aa5d9" />
          <stop offset="100%" stopColor="#41b586" />
        </linearGradient>
      </svg>

      {/* 1. 动效 Hero Banner */}
      <section className="subpage-hero">
        <div className="hero-content">
          <span className="hero-tag">Meta Cine Evaluation System</span>
          <h1>元镜Cine评测系统</h1>
          <p style={{ whiteSpace: 'pre-line' }}>AI 时代影院新形态，全国映前市场评测必选地。{'\n'}构建“数据采集 - AI分析 - 情感量化”全链路，让影视评估彻底告别盲猜。</p>
        </div>
      </section>

      {/* 2. 悬浮数据引语卡片 */}
      <div className="quote-wrapper">
        <div className="quote-card">
          <h3 style={{ whiteSpace: 'pre-line' }}>传统的试映凭借“主观感受”与“问卷调查”{'\n'}而元镜Cine，通过精准的生物电信号实现 <span className="highlight">数据的绝对客观</span></h3>
        </div>
      </div>

      {/* 3. 三步工作流链路 (Hover 增强) */}
      <section className="container workflow-section">
        <div className="section-header">
          <h2 className="section-title">重构影视情感<span className="gradient-text">评测价值</span></h2>
          <p className="section-subtitle">获取观众最真实的生理情绪反馈，优化内容创作的核心载体</p>
        </div>

        <div className="workflow-grid">
          <div className="workflow-step">
            <div className="step-icon">
              <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v4H7v2h4v4h2v-4h4v-2h-4V7z"/></svg>
            </div>
            <span className="step-num">STEP 01</span>
            <h4>无感数据采集</h4>
            <p>影院级智能硬件，捕捉心率与真实生理反应，互不打扰。</p>
          </div>
          <div className="workflow-step">
            <div className="step-icon">
              <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
            </div>
            <span className="step-num">STEP 02</span>
            <h4>大模型深度分析</h4>
            <p>专属算法毫秒级量化，生成直观热力图与全片情绪波动曲线。</p>
          </div>
          <div className="workflow-step">
            <div className="step-icon">
              <svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
            </div>
            <span className="step-num">STEP 03</span>
            <h4>量化参考输出</h4>
            <p>AI+影评人综合报告，指导剪辑优化，降低发行与排片风险。</p>
          </div>
        </div>
      </section>

      {/* 4. 详细介绍区 (深度动效增强) */}
      <section className="container" style={{ paddingTop: 0 }}>
        
        {/* 特性 1: 雷达采集 */}
        <div className="feature-row">
          <div className="feature-image">
            <div className="mockup-cinema">
              <div className="radar">
                <div className="radar-core"></div>
              </div>
            </div>
          </div>
          <div className="feature-text">
            <h2>情绪数据无感化采集</h2>
            <p>在元镜 Cine 专用影院内，我们在极力不打扰观众沉浸体验的前提下，搭载了元镜 Emotion 智能设备。</p>
            <p>观众观影时，设备可实时、精准地捕捉心率、脑电波等生理信号，实现“观影过程”与“数据采集”的完美同步。</p>
            <div className="stat-box">
              <strong>捕捉每一丝紧张、感动与注意力分散</strong>
              为后续的情感分析提供最精准、非修饰的原始数据支撑。
            </div>
          </div>
        </div>

        {/* 特性 2: 折线图分析 */}
        <div className="feature-row reverse">
          <div className="feature-image">
            <div className="mockup-chart">
              <div className="chart-header">
                <div className="chart-title"></div>
                <div className="chart-dots"><div></div><div></div><div></div></div>
              </div>
              <div className="curve-area">
                {/* CSS 绘制科技折线 */}
                <svg className="svg-curve" viewBox="0 0 500 200" preserveAspectRatio="none">
                  <path className="svg-path-line" d="M0,150 C50,150 100,50 150,50 C200,50 220,180 250,180 C280,180 320,30 380,30 C430,30 470,120 500,120" fill="none" stroke="url(#icon-grad)" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M0,150 C50,150 100,50 150,50 C200,50 220,180 250,180 C280,180 320,30 380,30 C430,30 470,120 500,120 L500,200 L0,200 Z" fill="url(#icon-grad)" opacity="0.1"/>
                </svg>
                <div className="curve-highlight"></div> 
              </div>
            </div>
          </div>
          <div className="feature-text">
            <h2>元镜大模型深度分析</h2>
            <p>采集的海量生理数据会毫秒级上传至元镜 AI 大模型，由影视专属算法引擎进行量化处理。</p>
            <p>我们将抽象的情绪反馈，转化为可视化、易读的 <span className="gradient-text">“观众情绪热力图”</span> 与 <span className="gradient-text">“全片情绪波动曲线”</span>。</p>
            <div className="stat-box">
              <strong>将主观感受，变现为可量化指标</strong>
              精准标记全片高共鸣度剧情点、以及情绪传递薄弱的情节。
            </div>
          </div>
        </div>

        {/* 特性 3: 报告生成 */}
        <div className="feature-row">
          <div className="feature-image">
            <div className="mockup-report">
              <div className="report-doc">
                <div className="doc-line doc-line-lg" style={{ background: 'var(--theme-gradient)' }}></div>
                <div className="doc-line doc-line-md"></div>
                <div className="doc-line doc-line-md"></div>
                <div className="doc-line doc-line-sm"></div>
                <div className="doc-grid">
                  <div className="doc-box">AI</div>
                  <div className="doc-box">PRO</div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-text">
            <h2>情感可量化参考输出</h2>
            <p>底层数据不仅是冰冷的图表。基于大模型的深度分析，元镜 Cine 将会输出一份极具深度的 <strong>“AI + 影评人”</strong> 综合评价报告。</p>
            <p>报告不仅包含清晰的情绪数据解读，更会结合影视行业的专业视角，给出针对性的内容调整与剪辑优化建议。</p>
            <div className="stat-box">
              <strong>大幅降低市场与排片风险</strong>
              为制片方、导演在最终锁剪、发行策略制定时，提供最直接的市场情感预判依据。
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
