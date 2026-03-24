import React from 'react';
import { motion } from 'motion/react';
import FadeIn from '../components/FadeIn';
import { 
  Brain, 
  Activity, 
  Search, 
  Layers, 
  Eye, 
  Smile, 
  Mic2, 
  Globe, 
  Zap,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Target,
  ShieldCheck,
  Cpu,
  BarChart3,
  HeartPulse,
  Users,
  Layout,
  FileText,
  Settings
} from 'lucide-react';

export default function PsychologyToolsPage() {
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
                心理学研究工具
              </span>
            </h1>
            <p className=" text-slate-400 max-w-4xl leading-relaxed font-light mb-12">
              元镜视界依托多模态生物传感技术实现多源生理心理数据同步采集与分析，深度赋能心理学多模态研究，助力心理学研究者以创新方法探索各类复杂研究课题，其专业能力处于行业创新前沿，已获全球顶尖高校广泛认可与采用。
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
                元镜心理学研究实验室是覆盖研究设计-数据采集-分析输出的端到端一体化研究平台，以全流程技术能力，为心理学研究提供专业、高效的全方位支撑。
              </p>
            </FadeIn>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '灵活适配的研究设计工具',
                icon: Settings,
                desc: '配备操作便捷的研究设计功能模块，可灵活支持基础与高阶各类行为研究方法，适配不同心理学研究课题的设计需求，轻松搭建专属研究方案。'
              },
              {
                title: '多模态数据无缝采集',
                icon: Layers,
                desc: '无需关注数据格式差异与时间同步问题，可一站式轻松采集眼动追踪、语音分析、脑电图、心电图、肌电图、呼吸监测等多模态研究数据，实现多源数据的高效整合。'
              },
              {
                title: '多维度数据注释与可视化',
                icon: BarChart3,
                desc: '采用基于可视化界面与时间轴的专业数据注释、分析模式，支持手动与自动双重标记方式，可同步接入至多三个视频文件，搭配丰富的数据可视化功能，让数据解读更直观、高效。'
              },
              {
                title: '可自定义的R系列分析工具',
                icon: Cpu,
                desc: '平台几乎所有数据处理算法均完全透明，支持研究者按需自定义调整，研究过程全可控，让科研探索更安心、更具灵活性。'
              },
              {
                title: 'AI驱动的自动化研究提效',
                icon: Zap,
                desc: 'AI赋能的面部表情分析、自动兴趣区域识别、语音分析，搭配内置R语言笔记本实现常用指标快速计算，多维度自动化功能可大幅节省研究耗时，为科研工作提效赋能。'
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

      {/* Applications Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl font-bold mb-4">全领域心理学研究应用</h2>
              <p className="text-xl text-slate-500">灵活定制，全方位适配认知、社会、临床等多个研究领域</p>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: '认知心理学研究', 
                desc: '可整合心率变异性、眨眼率、呼吸频率、脑电图功率谱等多种心理生理输入数据，开展认知心理过程专项研究；通过可导出的专业注释功能与开源R笔记本工具，大幅简化海量复杂数据集的分析流程。', 
                icon: Brain 
              },
              { 
                title: '社会心理学研究', 
                desc: '依托语音分析、面部表情分析技术，深入探索群体动力、人际关系、文化差异等人类互动相关课题；将上述分析结果与生理唤醒度指标融合，深度挖掘无意识因素对社会动态的潜在影响。', 
                icon: Users 
              },
              { 
                title: '临床心理学研究', 
                desc: '可量化评估认知疗法对患者的生理影响，亦可结合实时数据可视化功能开展生物反馈相关研究；能高效管理治疗干预、交叉验证等研究所需的心理生理数据分析工作。', 
                icon: HeartPulse 
              },
              { 
                title: '注意力专项研究', 
                desc: '支持适配研究者偏好的眼动追踪技术，精准追踪注视时长、注视指标等核心数据，可快速标记研究感兴趣区域，并自动生成热图、注视路径等可视化图表。', 
                icon: Eye 
              },
              { 
                title: '唤醒状态专项研究', 
                desc: '无论研究参与者处于静止或活动状态，均可精准监测其生理唤醒状态的动态变化；平台针对眼动追踪、皮肤电反应、心电图、呼吸等数据搭建了专属分析功能。', 
                icon: Activity 
              },
              { 
                title: '情绪专项研究', 
                desc: '借助AI辅助的自动化面部表情分析、语音分析工具，可从预录视频或实时摄像头画面中，精准测量参与者的参与度、情绪效价等各类情感特征；支持搭配肌电图（EMG）技术。', 
                icon: Smile 
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.05} className="p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-xl hover:border-teal-100 transition-all group">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-teal-600 mb-6 shadow-sm transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

  
    </div>
  );
}
