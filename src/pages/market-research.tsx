import React from 'react';
import { motion } from 'motion/react';
import FadeIn from '../components/FadeIn';
import {
  Brain,
  Activity,
  Monitor,
  Smartphone,
  BarChart3,
  Globe,
  Users,
  Zap,
  Layers,
  Search,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Mic2,
  Smile,
  Target,
  Award,
  TrendingUp,
  PieChart
} from 'lucide-react';

export default function MarketResearchPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Hero Section (Banner) */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(20,184,166,0.1),transparent)] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-[1.1] mb-8">
              元镜视界<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                消费者洞察与市场调研
              </span>
            </h1>
            <p className=" text-slate-400 max-w-4xl leading-relaxed font-light mb-12">
              元镜视界市场调研实验室，融合行为科学、消费者心理学与AI情感量化技术，打造多维度市场调研工具体系，通过精准分析消费者行为、生理、情绪等多源数据，深度解码特定市场中消费者的偏好、消费习惯与决策逻辑。助力研究人员洞悉市场核心特征，科学优化产品上市策略、开展精准竞争分析、升级客户体验，为市场决策提供客观、数据驱动的核心依据。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Core Functional Highlights */}
      <section className="pb-20 pt-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl font-bold mb-4">核心功能亮点</h2>
              <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed">
                元镜视界市场调研实验室可全周期适配产品构思、研发、上市、迭代优化全流程，为产品生命周期各阶段的市场调研提供多维度、高精度的技术支撑。
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '智能语音分析',
                icon: Mic2,
                desc: '通过语音生物标记技术，精准捕捉语音中的情绪细微变化、压力水平与参与度，深度洞察调研参与者的真实反应，让研究人员更透彻理解消费者情绪与决策过程，为市场调研策略制定提供精准方向。'
              },
              {
                title: '高精度面部表情分析',
                icon: Smile,
                desc: '依托专业面部编码技术，解读面部细微表情与非语言行为线索，精准破译并量化实时情绪反应，捕捉参与者对各类调研刺激的真实反馈，打破单一语言表达的信息局限。'
              },
              {
                title: '脑电活动精准监测',
                icon: Brain,
                desc: '通过脑电图技术测量脑电活动，深度揭示消费者的注意力分布、情绪投入程度与心理努力等核心认知状态，以客观的生理数据丰富定性研究维度，更深入解读消费者行为背后的深层动因。'
              },
              {
                title: '高级一体化调查工具',
                icon: Layers,
                desc: '内置专业调查编辑器，高效收集参与者自述的主观感知与偏好数据；可将问卷回答与生物传感器采集的客观数据无缝融合，实现主观反馈+生理数据的一体化分析，全方位解码消费者行为逻辑。'
              },
              {
                title: '直观化数据分析与可视化',
                icon: BarChart3,
                desc: '搭载智能分析与可视化工具，将复杂的多源调研数据进行简化处理，通过图表、图谱等直观形式呈现核心结论，让研究人员轻松解读数据、把握市场关键信息，做出科学明智的产品设计与市场决策。'
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-teal-100 transition-all group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-400 group-hover:text-teal-500 shadow-sm mb-6 transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* All-Scenario Application */}
      <section className="pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl font-bold mb-4">全场景调研应用</h2>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '焦点小组研究',
                icon: Users,
                desc: '通过生物传感器与行为分析技术，精准捕捉焦点小组讨论中的实时情绪反应、认知参与度与群体情感变化，深度洞悉群体互动动态，挖掘消费者最真实的集体反馈与潜在需求。'
              },
              {
                title: '定性访谈调研',
                icon: Headphones,
                desc: '将生理数据与访谈口头反馈深度结合，捕捉受访者在交流过程中的潜意识情感与认知反应，挖掘超越语言表达的细微洞察，让访谈调研的结论更具深度与真实性。'
              },
              {
                title: '产品声明测试与评估',
                icon: Target,
                desc: '通过测量消费者对产品声明、核心信息的情绪唤起程度、注意力聚焦点与认知反应，精准评估信息传递的有效性与市场影响力，确保产品核心主张能精准触达目标受众。'
              },
              {
                title: '品牌认知度研究',
                icon: Award,
                desc: '分析消费者与品牌元素互动时的情感反应与认知参与度，深度解码品牌与目标受众之间的共鸣点、信任度与契合度，为品牌定位优化、品牌形象升级提供数据支撑。'
              },
              {
                title: '市场竞争分析',
                icon: TrendingUp,
                desc: '精准测量消费者对竞争对手产品、营销活动的情感反馈与认知反应，通过多维度数据对比，清晰发现自身核心优势、市场差距，挖掘品牌差异化发展与市场战略规划的核心机会。'
              },
              {
                title: '人口统计特征研究',
                icon: PieChart,
                desc: '基于生理与情绪反应数据，精准刻画不同人群对产品、品牌的差异化反馈，深度揭示不同消费群体在地理、文化维度的偏好差异与行为特征，为精准化市场细分与定制化营销提供依据。'
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.05} className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-teal-100 transition-all group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-400 group-hover:text-teal-500 shadow-sm mb-6 transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Scenario Adaptation */}
      <section className="pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <h2 className="text-4xl font-bold mb-8">多场景灵活适配</h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                元镜视界市场调研实验室为多功能智能研究平台，支持多类调研环境无缝切换，适配多样化研究需求：
              </p>
              <div className="space-y-6">
                {[
                  '实验室内受控环境调研',
                  '线上远程同步测试',
                  '虚拟场景沉浸式调研',
                  '移动学习/移动场景调研'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0 text-teal-600">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-lg font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative p-12 bg-slate-50 rounded-[3rem] border border-slate-200 shadow-sm text-center overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                  <Globe size={120} />
                </div>
                <Globe className="mx-auto mb-8 text-teal-500" size={80} />
                <h3 className="text-2xl font-bold mb-4">全场景支持</h3>
                <p className="text-slate-500 font-light leading-relaxed">
                  打破时空限制，在任何环境下都能高效采集消费者真实反馈，让调研结论更具普适性与真实性。
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


    </div>
  );
}
