import React from 'react';
import FadeIn from '../components/FadeIn';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-tertiary py-20 mb-16">
        <div className="max-w-[1280px] mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
              元镜视界 × 四川传媒学院<br />共建 “AI 影视” 双驱平台
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-text-grey max-w-4xl mx-auto leading-relaxed">
              数智影像与情感交互实验室是元镜视界与四川传媒学院（简称 “川传”）深度协同打造的专业化平台，聚焦 “AI 赋能影视产业” 与 “AI 影视人才培养” 两大核心方向，既是 AI 影视技术研发与成果转化的载体，也是衔接校园教学与产业需求的人才孵化基地，为元镜AI影擎从 “工具 - 人才 - 资源 - 数据” 闭环的构建提供核心支撑。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1280px] mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center text-primary mb-16">
            实验室构建 “研发 - 测试 - 落地” 一体化技术支撑体系
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <FadeIn delay={0.1} className="h-full">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI 知识库与教学融合</h3>
              <p className="text-text-grey leading-relaxed text-sm">
                依托川传现有影视资产，联合搭建 “川传 AI 知识库”，涵盖剧本模板、角色形象库、情绪数据案例等资源，嵌入川传编剧、导演、影视后期等专业课程，让学生在课堂中接触前沿 AI 影视工具。
              </p>
            </div>
          </FadeIn>

          {/* Card 2 */}
          <FadeIn delay={0.2} className="h-full">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="w-12 h-12 bg-blue-dark/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">实训设备与场景落地</h3>
              <p className="text-text-grey leading-relaxed text-sm">
                配备元镜影擎全系列工具与硬件，开设 “AI 剧本创作”“数智分镜设计” 等实战功能，同时对接元镜平台企业需求，让学生参与 真实项目，实现 “学习即实践”。
              </p>
            </div>
          </FadeIn>

          {/* Card 3 */}
          <FadeIn delay={0.3} className="h-full">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">校园运营与人才储备</h3>
              <p className="text-text-grey leading-relaxed text-sm">
                联合川传筛选 15 名 “校园运营官”，负责实验室日常教学协同、学生创作组织，并通过 “元镜杯” 校园短剧创作赛、AI 影视技能考核等活动，挖掘优质学生作品与潜力人才，纳入元镜平台人才库，对接企业招聘与项目接单需求。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
