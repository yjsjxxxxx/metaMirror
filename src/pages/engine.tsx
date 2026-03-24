import React from 'react';
import './engine.css';

export default function EnginePage() {
  return (
    <div className="meta-mirror-engine">
      {/* SVG 渐变定义 */}
      <svg width="0" height="0" style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <linearGradient id="icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0aa5d9" />
          <stop offset="100%" stopColor="#41b586" />
        </linearGradient>
      </svg>

      {/* 1. 顶部 Hero Banner */}
      <section className="subpage-hero">
        <div className="hero-content flex flex-col items-center">
          <span className="hero-tag w-fit">Core Platform</span>
          <h1 className="gradient-text">元镜视界AI引擎</h1>
          <p style={{ whiteSpace: 'pre-line' }}>聚焦“AI + 影视”核心赛道的多端 AI 赋能平台。{'\n'}为院校、企业、产业端提供从创作到落地的全链路数字化支撑。</p>
        </div>
      </section>

      {/* 2. 核心痛点与价值主张 */}
      <div className="container" style={{ paddingTop: 0, paddingBottom: '40px' }}>
        <div className="value-prop-card">
          <h3 style={{ whiteSpace: 'pre-line' }}>打破传统痛点{'\n'}重塑<span className="gradient-text">数据驱动</span>标准</h3>
          <p>元镜视界 AI 引擎彻底打破传统影视产业“资源分散、经验依赖、协同低效”的核心痛点。通过多端协同降低使用门槛，通过独创的“三入口体系”实现【创作 - 需求 - 资源】的精准匹配。</p>
        </div>
      </div>

      {/* 3. 三入口体系 (Z字排版) */}
      <section className="container" style={{ paddingTop: '40px' }}>
        <div className="section-header">
          <h2 className="section-title">独创<span className="gradient-text">三入口体系</span></h2>
          <p className="section-subtitle">分阶段迭代持续注入 AI 创新动能，构建影视全链路发展底座</p>
        </div>

        {/* 创作入口 */}
        <div className="feature-row">
          <div className="feature-image">
            {/* 抽象的软件UI展示 */}
            <div className="ui-mockup">
              <div className="ui-header"></div>
              <div className="ui-body">
                <div className="ui-sidebar"></div>
                <div className="ui-main">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="url(#icon-grad)"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-text">
            <span className="feature-label">01 / ENTRY</span>
            <h2>创作入口：激发核心创造力</h2>
            <p>为师生与创作者提供从构想到视觉化的全套前沿工具，建立内容储备基石。</p>
            <ul className="check-list">
              <li>
                落地 AI 知识库与实训设备
                <p>无缝嵌入编剧、导演、后期等专业课程体系。</p>
              </li>
              <li>
                提供剧本生成与分镜推演工具
                <p>辅助创作者将抽象灵感快速具象化，提升初期创作效率。</p>
              </li>
              <li>
                储备校园优质创作成果
                <p>搭建“校园运营官 + 线上客服”服务体系，为产业端输送潜力内容与优质人才。</p>
              </li>
            </ul>
          </div>
        </div>

        {/* 服务入口 */}
        <div className="feature-row reverse">
          <div className="feature-image">
            <div className="ui-mockup">
              <div className="ui-header"></div>
              <div className="ui-body" style={{ flexDirection: 'column' }}>
                <div className="ui-main" style={{ flex: 2 }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="url(#icon-grad)"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
                </div>
                <div style={{ flex: 1, display: 'flex', gap: '10px' }}>
                  <div className="ui-sidebar" style={{ flex: 1 }}></div>
                  <div className="ui-sidebar" style={{ flex: 1 }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-text">
            <span className="feature-label">02 / SERVICE</span>
            <h2>服务入口：全周期影视解决方案</h2>
            <p>针对不同规模体量的影视团队，提供定制化的从制作到宣发需求支持。</p>
            <ul className="check-list">
              <li>
                匹配多层次企业需求
                <p>针对头部影视公司、中小制作团队、文旅机构等，设计差异化注册入口与服务流程。</p>
              </li>
              <li>
                剧本评测与 IP 评估
                <p>依托大模型，提前预判市场情感共鸣点，降低立项风险。</p>
              </li>
              <li>
                软硬件一体化支持
                <p>全面整合元镜 Record 与元镜 Emotion 硬件，保障摄制与观影数据的双向流动。</p>
              </li>
            </ul>
          </div>
        </div>

        {/* 资源入口 */}
        <div className="feature-row">
          <div className="feature-image">
            <div className="ui-mockup" style={{ flexDirection: 'row' }}>
              <div className="ui-sidebar" style={{ width: '25%', margin: '20px 0 20px 20px' }}></div>
              <div className="ui-body" style={{ flexDirection: 'column', flex: 1 }}>
                <div className="ui-sidebar" style={{ width: '100%', height: '40px', marginBottom: '10px' }}></div>
                <div className="ui-main" style={{ flex: 1 }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="url(#icon-grad)"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-text">
            <span className="feature-label">03 / RESOURCE</span>
            <h2>资源入口：产业生态深度赋能</h2>
            <p>打破产业信息壁垒，将平台聚合资源反哺产业，以产业需求驱动平台升级。</p>
            <ul className="check-list">
              <li>
                全链路资源整合
                <p>全面打通影视拍摄基地、设备供应商、发行渠道及投资机构等核心资源。</p>
              </li>
              <li>
                区域政策赋能
                <p>开设“川渝区域影视政策解读”专栏，助力项目享受属地政策红利。</p>
              </li>
              <li>
                真实需求转化反哺
                <p>将影视企业的一线真实需求转化为校园教学案例，指导 AI 工具的下一次迭代方向。</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. 生态闭环区 */}
      <section className="loop-section">
        <div className="container" style={{ padding: '0 40px' }}>
          <div className="section-header" style={{ marginBottom: 0 }}>
            <h2 className="section-title">构建<span className="gradient-text">四大核心</span>良性闭环</h2>
            <p className="section-subtitle">平台聚合资源反哺产业，产业需求驱动平台升级，助力打造“AI+影视”产业标杆。</p>
          </div>
          
          <div className="loop-grid">
            <div className="loop-card">
              <div className="loop-icon">
                {/* 工具 */}
                <svg viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.1L9.4 6.6 6.6 9.4 1.9 4.7C.6 7.1 1 10.1 3 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>
              </div>
              <h4>前沿工具</h4>
              <p>全系列 AI 实操系统与端侧智能硬件，武装现代创作者。</p>
            </div>
            <div className="loop-card">
              <div className="loop-icon">
                {/* 人才 */}
                <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
              </div>
              <h4>复合人才</h4>
              <p>通过校园实训与实战项目，储备懂技术更懂创作的新型人才。</p>
            </div>
            <div className="loop-card">
              <div className="loop-icon">
                {/* 资源 */}
                <svg viewBox="0 0 24 24"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/></svg>
              </div>
              <h4>产业资源</h4>
              <p>打通上中下游产业链，链接资方、摄制基地与发行通道。</p>
            </div>
            <div className="loop-card">
              <div className="loop-icon">
                {/* 数据 */}
                <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
              </div>
              <h4>情绪数据</h4>
              <p>回收真实的观影情感量化数据，指导创作与工具再次迭代。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
