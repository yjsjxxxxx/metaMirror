import React from 'react';
import { motion } from 'motion/react';
import FadeIn from '../components/FadeIn';
import {
  Video,
  Smile,
  Eye,
  Sparkles,
  Film,
  ArrowRight,
  ChevronRight,
  Cpu,
  Globe,
  Activity,
  BarChart3,
  Layers,
  Users,
  Target,
  Play,
  Zap,
  CheckCircle2,
  Monitor,
  ShieldCheck,
  LineChart,
  Search,
  MessageSquare
} from 'lucide-react';

export default function MediaTestingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(20,184,166,0.1),transparent)] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold tracking-widest uppercase mb-8">
              <Sparkles size={14} /> 【敬请期待】
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-[1.1] mb-8">
              元镜视界<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                娱乐与媒体内容测试
              </span>
            </h1>
            <p className=" text-slate-400 max-w-3xl leading-relaxed font-light mb-12">
              以AI情感量化技术，解锁实时受众洞察，精准优化娱乐与媒体内容创作及传播全链路
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Introduction Section - Simplified */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-[14px] md:text-xl text-slate-700 leading-relaxed font-light">
              优质的娱乐与媒体作品，核心在于与观众建立深度情感连接、引发情感共鸣。元镜视界依托AI情感量化核心技术与影视全链路情绪洞察能力，为内容创作者、影视工作室、营销从业者打造专业的媒体内容测试解决方案，通过精准解读观众的情感反应、内容参与度与视觉注意力，助力打造更具吸引力的内容作品，优化素材创作与传播策略，实现内容影响力与商业价值的最大化提升。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Module 1: 多维度精准捕捉 */}
      <section className="py-32 px-6 bg-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/10 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              多维度精准捕捉，深度获取受众核心洞察
            </h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
              基于元镜Emotion多模态情绪采集技术，融合多维度感知能力，真实还原观众内容体验反馈
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. Facial Coding */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl bg-slate-50 border border-slate-100 p-10 flex flex-col hover:bg-white hover:shadow-xl hover:border-teal-100 transition-all overflow-hidden"
            >
              <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 mb-8">
                <Smile size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-slate-900">AI面部情绪编码</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                精准捕捉细微面部表情，快速解读观众真实情绪反应，量化情感体验数据
              </p>
            </motion.div>
            {/* 2. Eye Tracking */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative rounded-3xl bg-slate-50 border border-slate-100 p-10 flex flex-col hover:bg-white hover:shadow-xl hover:border-teal-100 transition-all overflow-hidden"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-8">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-slate-900">免校准眼动追踪</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                无需繁琐设置，精确定位观众视觉注意力焦点，清晰呈现注意力分布与持续时长
              </p>
            </motion.div>

            {/* 3. Multi-modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative rounded-3xl bg-slate-50 border border-slate-100 p-10 flex flex-col hover:bg-white hover:shadow-xl hover:border-teal-100 transition-all overflow-hidden"
            >
              <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-8">
                <Activity size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-slate-900">多模态感知升级</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                更多生理数据采集、场景化情绪分析功能持续集成上线中
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Module 2: 量化情感共鸣 */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              量化情感共鸣，优化内容创作与故事表达
            </h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
              洞悉受众与内容的情感连接逻辑，是打造沉浸式故事与优质体验的核心。元镜视界以实时、可量化的情感数据，为创意团队提供创作优化依据
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '优化故事叙事流程',
                desc: '精准定位情节困惑、理解断层环节，打磨更流畅的叙事结构',
                icon: LineChart
              },
              {
                title: '挖掘高情感影响力场景',
                desc: '强化内容关键节点设计，提升观众留存率与体验感',
                icon: Zap
              },
              {
                title: '支持多版本结局测试',
                desc: '通过量化情感冲击数据，筛选最能引发观众共鸣的内容版本',
                icon: Layers
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-teal-100 transition-all">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-teal-600 mb-6 shadow-sm">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Module 3: 智能赋能营销 */}
      <section className="py-32 px-6  border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              智能赋能营销，精准优化宣发素材与策略
            </h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
              让营销素材精准触达观众、激发情感期待、提升参与度，元镜视界为内容宣发提供科学测试与优化方案
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                desc: '多版本情感片段测试，量化对比情感触达效果，筛选最具感染力的片段完成最终剪辑',
                icon: BarChart3
              },
              {
                desc: '深度解析观众情感反应，基于数据定制营销素材，实现与目标受众的精准情感共鸣',
                icon: Users
              },
              {
                desc: '支持多维度内容表现对比，针对不同地区、不同人群、不同传播格式，优化内容适配策略',
                icon: Globe
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-3xl bg-white border border-slate-200 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Module 4: 深度分析受众连接 - Redesigned */}
      <section className="py-32 px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                深度分析受众连接，筑牢内容受众基础
              </h2>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
                元镜视界娱乐与媒体内容测试解决方案，助力制片人、电视台、流媒体平台精准评估观众与角色、剧情、演员之间的情感连接度
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: '角色连接评估',
                desc: '精准评估角色与观众的情感连接度，量化受众对角色的喜爱与共鸣程度。',
                icon: Users
              },
              {
                title: '剧情转折优化',
                desc: '优化剧情转折，贴合观众情感预期，确保故事走向能持续引发受众兴趣。',
                icon: Zap
              },
              {
                title: '设计决策支持',
                desc: '数据驱动的演员变动与角色设计决策，降低创作风险，提升内容成功率。',
                icon: BarChart3
              },
              {
                title: '深度受众绑定',
                desc: '强化内容与观众的深度绑定，避免受众情感疏离，构建稳固的粉丝基础。',
                icon: ShieldCheck
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-[2.5rem] bg-white border border-slate-200 hover:shadow-2xl hover:border-teal-200 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-8 group-hover:rotate-6 transition-transform">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mt-16 p-10 rounded-[3rem] bg-slate-100  text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full  pointer-events-none"></div>
            <p className=" font-light leading-relaxed relative z-10 max-w-4xl mx-auto">
              通过数据化洞察，让角色登场、演员变动、剧情转折设计更贴合观众情感预期，<br className="hidden md:block" />
              <span className=" font-medium">避免受众情感疏离，强化内容与观众的深度绑定。</span>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Module 5: 技术驱动 */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              技术驱动，实现无缝、可扩展、数据化的测试体验
            </h2>
            <p className="text-xl text-slate-500 max-w-4xl mx-auto font-light leading-relaxed">
              依托元镜AI大模型与标准化技术体系，打破测试场景与设备限制，提供真实、客观、高效的受众反馈，无需集中现场测试，大幅降低测试成本，提升测试效率：
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: '跨设备灵活部署', desc: '脱离SaaS平台限制，支持移动设备、桌面电脑多端测试，影院、线下场景、线上端均可适配，实现测试场景无缝扩展；', icon: Monitor },
              { title: '高精度情绪识别', desc: '面部编码搭载30+面部分类器，可精准追踪9种以上情绪状态，还原真实情感体验；', icon: Activity },
              { title: '多维度感知集成', desc: '融合网络摄像头呼吸感知、眼动追踪等多维度数据，让受众反馈更全面；', icon: Layers },
              { title: '高兼容性适配', desc: '可对接任意调查提供商与研究方法，满足多样化测试需求；', icon: Zap },
              { title: '全球级数据基准', desc: '依托超10万条广告、1800万张面孔、覆盖90+国家/地区的全球大型情感数据库，实现测试结果的专业基准对比与科学分析。', icon: Globe }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <item.icon size={24} />
                </div>
                <h4 className="font-bold text-lg mb-3">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-teal-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">以情感数据，重构娱乐与媒体内容测试与推广逻辑</h2>
            <p className="text-[16px] text-teal-100 mb-12 leading-relaxed">
              告别经验式猜测，以可量化、可分析、可优化的情感数据为核心，精准把握受众喜好与情感需求。元镜视界用AI技术解锁情感洞察密码，助力打造更具吸引力的娱乐与媒体体验，让每一份内容创作，都能精准触达人心、引发深度共鸣。
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
