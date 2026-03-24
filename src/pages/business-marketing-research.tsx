import React from 'react';
import { motion } from 'motion/react';
import FadeIn from '../components/FadeIn';
import { 
  TrendingUp, 
  Brain, 
  Activity, 
  Eye, 
  Smile, 
  Mic2, 
  Globe, 
  Zap,
  CheckCircle2,
  ArrowRight,
  Target,
  BarChart3,
  Users,
  PieChart,
  ShoppingBag,
  Cpu,
  FileText,
  Search,
  Layers,
  Heart
} from 'lucide-react';

export default function BusinessMarketingResearchPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(20,184,166,0.1),transparent)] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
          
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-[1.1] mb-8">
              元镜视界-学术界<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                商业与市场营销研究
              </span>
            </h1>
            <p className=" text-slate-400 max-w-4xl leading-relaxed font-light mb-12">
              元镜视界融合先进生物传感技术与简洁易用的操作平台，高效补充传统市场调研与消费者测试工具的研究维度，助力科研人员探索消费者认知偏差、行为启发式规律，深挖影响用户感知的隐性心理过程，精准解析市场决策逻辑与消费购买模式。目前，元镜已为全球40余个国家和地区的百余个研究团队，提供专业的商业与市场营销学术研究技术支撑。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Core Functional Highlights */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl font-bold mb-4">核心功能亮点</h2>
              <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed">
                元镜商业与营销研究实验室，以多维度量化技术为核心，助力科研人员深度洞悉消费者决策逻辑、偏好倾向与认知偏差，为商业营销学术研究提供科学、精准的技术工具。
              </p>
            </FadeIn>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: '注意力精准追踪与可视化',
                icon: Eye,
                desc: '通过专业眼动追踪技术，实时捕捉参与者视线方向，精准记录关注对象、关注时机与关注频次；同时将眼动数据转化为热图、注视路径等可视化形式，直观呈现注意力分布规律。'
              },
              {
                title: '情绪自动化检测与分析',
                icon: Smile,
                desc: '搭载面部表情分析、语音分析双核心模块，实现对参与者情绪的自动化、精准化检测，无需人工耗时对音视频文件进行逐帧评分，高效捕捉消费场景中的真实情绪反应。'
              },
              {
                title: '生理唤醒度客观捕捉',
                icon: Activity,
                desc: '唤醒度指标可精准反映参与者不受意识控制的神经系统变化，通过皮肤电反应（GSR）技术量化评估生理唤醒水平；支持移动测试，配套心电图、呼吸监测模块。'
              },
              {
                title: '认知过程专业量化分析',
                icon: Brain,
                desc: '针对高阶学术研究需求，平台支持脑电图（EEG）分析技术，可满足额叶不对称性、功率谱密度等专业认知研究需求；同时配备专属R笔记本工具，简化分析流程。'
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-teal-100 transition-all group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-400 group-hover:text-teal-500 shadow-sm mb-6 transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl font-bold mb-4">商业与市场研究全场景应用</h2>
              <p className="text-xl text-slate-500">适配多类商业营销学术研究方向，提供全方位技术支撑</p>
            </FadeIn>
          </div>

          <div className="space-y-16">
            {/* Marketing Research */}
            <FadeIn>
              <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500 text-white flex items-center justify-center">
                    <Search size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">市场营销研究</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { title: '消费者行为分析', desc: '在产品互动全流程中，实时捕捉消费者的情绪反应，依托皮肤电反应（GSR）、眼动追踪等生物传感技术，深挖消费者的潜意识偏好与决策过程。' },
                    { title: '数字营销和可用性测试', desc: '通过面部表情分析、皮肤电反应（GSR）量化评估用户兴奋度，结合眼动追踪技术追踪用户参与度，为优化营销活动设计、提升网站用户体验提供数据依据。' },
                    { title: '可持续性和道德营销研究', desc: '精准验证环保相关信息、品牌推广内容对环保意识消费者的触达效果，研究如何通过营销手段引导消费者做出环保消费选择。' }
                  ].map((item, i) => (
                    <div key={i} className="space-y-3">
                      <h4 className="font-bold text-slate-800">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Behavioral Economics */}
            <FadeIn delay={0.1}>
              <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500 text-white flex items-center justify-center">
                    <Users size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">行为经济学研究</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { title: '行为干预研究', desc: '深度解析影响消费者决策的各类认知偏差与行为启发式规律，研究各类干预手段对消费者行为的影响——包括如何引导消费者做出环保选择、挑选高性价比替代方案等。' },
                    { title: '决策机制研究', desc: '探索损失厌恶、锚定效应、确认偏差等典型决策现象的情感底层逻辑，研究决策疲劳对消费者注意力的影响规律，分析风险感知、风险承担行为与生理唤醒水平的关联关系。' }
                  ].map((item, i) => (
                    <div key={i} className="space-y-3">
                      <h4 className="font-bold text-slate-800">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Neurofinance */}
            <FadeIn delay={0.2}>
              <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500 text-white flex items-center justify-center">
                    <PieChart size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">神经金融学和神经预测研究</h3>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-800">财务决策研究</h4>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-4xl">
                    精准评估不同人群对风险的差异化反应，以及各类群体的财务决策逻辑；通过分析研究对象的言语内容，结合语音分析技术解读其表达背后的情绪状态，深度洞悉人们在做出投资选择等财务决策时的真实情绪体验，为神经金融学、财务决策预测相关研究提供科学支撑。
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}
