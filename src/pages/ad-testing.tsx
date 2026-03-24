import React from 'react';
import { motion } from 'motion/react';
import FadeIn from '../components/FadeIn';
import {
  Smile,
  Brain,
  Target,
  Globe,
  BarChart3,
  Cloud,
  Zap,
  ArrowRight,
  CheckCircle2,
  Monitor,
  Cpu,
  Eye,
  Layers,
  Users,
  Search,
  LineChart,
  PieChart,
  ShieldCheck,
  MousePointer2,
  Layout,
  Database
} from 'lucide-react';

export default function AdTestingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Hero Section - SaaS Landing Style (Recipe 11 inspired) */}

      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(20,184,166,0.1),transparent)] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-[1.1] mb-8">
              元镜视界<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                广告测试面部编码系统
              </span>
            </h1>
            <p className=" text-slate-400 max-w-4xl leading-relaxed font-light mb-12">
              元镜视界广告测试面部编码系统，以AI情感量化核心技术为驱动，打造一体化广告测试专业平台，凭借数据化、精准化的受众洞察能力，助力品牌优化广告内容创作、科学分配媒体投放预算、建立与目标受众的深度情感连接，为广告全流程测试提供可落地的优化指导，让广告投放决策更具科学性与确定性。
            </p>
          </FadeIn>
        </div>
      </section>
      {/* Core Principles - Bento Grid (Recipe 1 inspired) */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">核心工作原理</h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">科学严谨的测试流程，确保数据的真实性与参考价值</p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '轻量化远程测试，全域招募受试者',
                icon: Globe,
                desc: '基于网页端搭建简易操作平台，无需专用硬件，仅需联网并搭配普通摄像头，即可快速发起测试，轻松邀请全球各地受试者参与；在获得受试者明确授权后，实时捕捉其观看广告/创意素材时的面部表情与视觉注意力变化，精准记录真实体验反馈。'
              },
              {
                title: '可视化智能仪表盘，高效解读数据',
                icon: Layout,
                desc: '搭载简洁友好的可视化操作界面，自动汇总并呈现测试核心数据；可快速追踪广告观看过程中的受众互动高峰与低谷，通过动态热图直观分析视觉注意力分布，支持按人口统计特征精准筛选数据，还能在同一界面完成多版本广告、不同精简版素材的效果对比。'
              },
              {
                title: '全球级行业基准，科学对比效果',
                icon: Database,
                desc: '依托元镜全球情感数据库，打造多维度行业基准体系，可按地域、产品类型、广告时长、重复观看次数等维度，将广告测试效果与同行业同类素材进行精准对标；基准数据覆盖全球90余个国家/地区、超10万条广告案例、1800万+人脸情绪样本。'
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-6 leading-tight">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-light">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Application Scenarios - Editorial Style (Recipe 2 inspired) */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 sticky top-32">
              <FadeIn direction="left">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
                  广告测试<br />核心应用场景
                </h2>
                <p className="text-xl text-slate-500 leading-relaxed font-light">
                  全方位优化广告生命周期，从内容创作到预算分配。
                </p>
              </FadeIn>
            </div>

            <div className="lg:col-span-8 space-y-12">
              {[
                {
                  title: '优化广告叙事流程，强化内容吸引力',
                  desc: '通过实时、可量化的情绪数据，精准定位观众在广告观看过程中的理解困惑点、参与度低迷环节，为动画短片、各类广告的故事结构打磨、叙事节奏调整提供精准依据，让广告内容更贴合观众理解与情感体验逻辑。',
                  icon: LineChart
                },
                {
                  title: '精简广告素材，保留核心情感价值',
                  desc: '针对长时长大屏电视广告，通过数据挖掘其中最能打动观众、引发强情感共鸣的核心时刻，为剪辑适配线上传播的短版广告提供精准参考，在压缩时长的同时，最大程度保留广告的情感冲击力与传播价值。',
                  icon: Layers
                },
                {
                  title: '科学分配媒体预算，提升投放回报率',
                  desc: '对最终版广告进行多轮次情感互动效果测试，精准识别受众在重复观看后的情感疲劳节点；基于测试结果，将广告预算倾斜至重复观看仍能保持强情感冲击的优质广告素材，实现媒体投放预算的最优分配。',
                  icon: Target
                }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1} className="group relative p-12 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-teal-100 transition-all">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-16 h-16 rounded-2xl bg-white text-teal-600 flex items-center justify-center shrink-0 shadow-sm">
                      <item.icon size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-teal-600 transition-colors">{item.title}</h3>
                      <p className="text-slate-500 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Technical/Hardware Style (Recipe 3 inspired) */}
      <section className="py-32 px-6 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(20,184,166,0.05),transparent)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">品牌选择元镜广告测试平台的核心理由</h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">专业、灵活、便捷、科学，全方位赋能广告决策</p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: '高精度面部情绪量化，数据更精准',
                desc: '搭载专业面部编码技术，分析超30个面部分类器，聚焦9项观众核心情绪反应指标，多维度、高精度量化观众观看广告时的情绪变化与参与度。',
                icon: Cpu
              },
              {
                title: '高兼容性无缝集成，适配更灵活',
                desc: '可深度融入各类研究工作流程与调查方法，不受样本库提供商限制，轻松与品牌现有调研体系、工具平台对接，无需重构测试流程。',
                icon: Zap
              },
              {
                title: '轻量化SaaS模式，使用更便捷',
                desc: '采用云端SaaS服务模式，无需部署专用硬件设备，仅需提供广告录制视频信号并联网，即可完成后期数据处理与分析；操作门槛低。',
                icon: Cloud
              },
              {
                title: '多维度基准对标，评估更科学',
                desc: '打造多维度、分层级的基准对比体系，突破单一维度评估局限，可从地区、产品类别、观看时长等多个维度，精准分析广告内容的市场表现。',
                icon: BarChart3
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex gap-8">
                <div className="w-14 h-14 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
