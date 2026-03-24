import React from 'react';
import { motion } from 'motion/react';
import FadeIn from '../components/FadeIn';
import { 
  Palette, 
  Brain, 
  Activity, 
  Users, 
  Search, 
  Layers, 
  Eye, 
  Smile, 
  Mic2, 
  LineChart, 
  ShieldCheck, 
  Globe, 
  Monitor, 
  Smartphone, 
  Zap,
  CheckCircle2,
  ArrowRight,
  Box,
  Video,
  Cpu,
  Target,
  FileText,
  Lightbulb,
  MousePointer2,
  BarChart3,
  GraduationCap
} from 'lucide-react';

export default function ProductDesignPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(20,184,166,0.1),transparent)] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-[1.1] mb-8">
              元镜视界-消费者洞察<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                产品设计
              </span>
            </h1>
            <p className=" text-slate-400 max-w-4xl leading-relaxed font-light mb-12">
              以科学的行为研究与AI情感量化技术为核心，深度挖掘消费者对产品的真实感知与互动逻辑，客观洞悉用户视角下的产品体验，助力企业从设计、测试到优化全流程，打造真正贴合用户需求、能引发深度共鸣的产品。
            </p>
        
          </FadeIn>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <h2 className="text-4xl font-bold tracking-tight mb-8">
                捕捉产品测试全流程的行为与情绪，精准锚定优化方向
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  依托科学验证的生物识别与行为研究工具，全维度捕捉产品测试中消费者的真实反馈，通过量化测量用户的注意力分布、情感投入程度、面部表情变化及生理反应，深度还原用户对产品的实际体验感受。
                </p>
                <p>
                  以客观、可量化的洞察为依据，精准判断产品设计的有效亮点，挖掘体验过程中隐藏的摩擦点，让企业在产品正式发布前，就能针对性完成设计优化，大幅提升产品上市后的用户满意度与市场接受度。
                </p>
               <div className="p-6 bg-teal-50 border-l-4 border-teal-500 rounded-r-2xl">
                  <p className="text-teal-900 font-medium italic">
                    核心数据参考：产品中细微的可用性问题，可能导致用户任务完成时间增加40%以上，直接拉低产品满意度；而用户会在与产品交互的最初几秒，就形成对产品易用性的关键第一印象。
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative p-10 bg-white rounded-[3rem] border border-slate-200 shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <Palette size={120} />
                </div>
                <div className="space-y-8 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                      <Target size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">精准锚定优化方向</h4>
                      <p className="text-sm text-slate-500">捕捉产品测试全流程的行为与情绪反馈</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                      <Cpu size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">一体化研究平台</h4>
                      <p className="text-sm text-slate-500">刺激呈现、数据采集、智能分析全流程</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">科学验证工具</h4>
                      <p className="text-sm text-slate-500">生物识别与AI情感量化技术核心</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Research Phases */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">全流程覆盖，适配产品设计各阶段研究需求</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: '概念测试', 
                desc: '在产品设计早期，借助专业研究实验室，量化测量用户对产品早期概念的反应与参与度，为概念打磨、方向调整提供数据支撑，从源头规避设计偏差。', 
                icon: Lightbulb 
              },
              { 
                title: '成品/用户体验测试', 
                desc: '全方位衡量产品互动的全维度表现，获取用户对产品的唤醒度、喜好度、注意力聚焦点、参与度等客观生理数据，精准评估产品实际体验效果。', 
                icon: MousePointer2 
              },
              { 
                title: '品牌融合设计', 
                desc: '围绕产品包装、宣传物料设计，测量用户关注度与互动度，确保设计能强化品牌辨识度，让品牌元素与产品设计深度融合、高效触达用户。', 
                icon: Box 
              },
              { 
                title: '声明测试', 
                desc: '依托科学验证的研究模型，通过生物特征数据精准验证产品功能声明的有效性，为产品放松、提升体验、增强安全与便捷性等各类功能主张，提供客观数据支撑。', 
                icon: ShieldCheck 
              },
              { 
                title: '合规文件设计验证', 
                desc: '通过眼动追踪技术，测试用户能否快速在产品包装、说明书中找到并读取重要信息，为合规文件的内容排版、信息布局优化提供依据，确保合规性与阅读体验兼具。', 
                icon: FileText 
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.05} className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-teal-100 transition-all">
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

      {/* Platform Integration Section */}
      <section className="py-24 px-6 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(20,184,166,0.05),transparent)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <h2 className="text-4xl font-bold mb-8">元镜产品设计与开发一体化研究平台</h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                元镜视界将眼动追踪、面部表情分析、皮肤电反应（GSR）、语音分析等多类生物传感技术，整合至单一智能研究平台，实现刺激呈现、多源数据同步采集、行为智能分析全流程一体化，为产品设计与开发研究提供全方位技术支撑。
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                平台可适配工业产品、数字产品等多类型产品的设计测试，助力研究人员深度洞悉用户对产品的感知、互动行为与情感反应，全流程覆盖产品设计各阶段，将多维度行为数据转化为清晰、可落地的洞察，指导产品设计决策、可用性改进与创新升级。
              </p>
            </FadeIn>
            <FadeIn direction="right" className="grid grid-cols-2 gap-4">
              {[
                { label: '眼动追踪', icon: Eye },
                { label: '面部表情', icon: Smile },
                { label: '皮肤电反应', icon: Activity },
                { label: '语音分析', icon: Mic2 }
              ].map((tech, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-4">
                  <tech.icon className="text-teal-400" size={32} />
                  <span className="text-sm font-medium">{tech.label}</span>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">全场景灵活适配，随时随地获取真实消费者反馈</h2>
            <p className="text-xl text-slate-500">无论何种场景，都能高效收集消费者真实反馈</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '实验室内', icon: Monitor, desc: '在可控环境下开展高精度、高深度的产品测试研究' },
              { title: '在线远程', icon: Globe, desc: '依托网络摄像头开展大规模远程测试，快速扩大样本覆盖范围' },
              { title: '虚拟场景', icon: Layers, desc: '打造沉浸式模拟环境，测试用户对产品虚拟原型的体验反馈' },
              { title: '实地测试', icon: Smartphone, desc: '通过可穿戴设备、移动设备，在真实使用场景中开展产品测试' }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center gap-6 hover:shadow-xl hover:bg-white transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform shadow-sm">
                  <item.icon size={32} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Technical Capabilities - Bento Grid (White Background) */}
      <section className="py-32 px-6 bg-slate-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-slate-900">
              核心技术能力，量化产品设计测试的真实体验
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl font-light leading-relaxed">
              元镜平台通过先进的生物传感器、无缝的多源数据分析、即用型可视化成果，全方位挖掘产品设计测试的核心价值，精准捕捉用户真实体验，为设计迭代提供科学依据。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            {/* 1. Visual Attention (Large: 8 cols) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-8 group relative rounded-[2rem] bg-white border border-slate-200 p-10 flex items-center gap-12 hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="w-20 h-20 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0 relative z-10">
                <Eye size={40} />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 tracking-tight">视觉注意力分析</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  依托眼动追踪技术，精准捕捉用户视觉注意力，深度揭示用户探索产品的逻辑、产品中脱颖而出的功能亮点，以及设计选择对产品可用性、吸引力的实际影响。
                </p>
              </div>
            </motion.div>

            {/* 2. Voice Indicators (Small: 4 cols) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 group relative rounded-[2rem] bg-white border border-slate-200 p-10 flex flex-col justify-between hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="w-14 h-14 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 relative z-10">
                <Mic2 size={28} />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3">语音指标解读</h3>
                <p className="text-slate-500 text-xs font-light leading-relaxed">
                  精准分析用户的语音语调和音高变化，挖掘背后的情感状态与认知负荷，展现消费者对产品的真实情感反馈，为产品的体验设计与沟通优化提供方向。
                </p>
              </div>
            </motion.div>

            {/* 3. Emotion Quant (Small: 4 cols) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-4 group relative rounded-[2rem] bg-white border border-slate-200 p-10 flex flex-col justify-between hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="w-14 h-14 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 relative z-10">
                <Smile size={28} />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3">情绪指标量化</h3>
                <p className="text-slate-500 text-xs font-light leading-relaxed">
                  实时测量用户与产品互动过程中的情绪反应，洞悉用户对产品及各功能的真实感受，助力打造直观、舒心且具有吸引力的产品用户体验。
                </p>
              </div>
            </motion.div>

            {/* 4. Visualization (Small: 4 cols) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-4 group relative rounded-[2rem] bg-white border border-slate-200 p-10 flex flex-col justify-between hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 relative z-10">
                <BarChart3 size={28} />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3">数据可视化与智能分析</h3>
                <p className="text-slate-500 text-xs font-light leading-relaxed">
                  将复杂的产品用户测试数据进行直观可视化呈现，快速提炼情感与行为洞察，转化为数据驱动的设计决策，高效指导产品设计迭代升级。
                </p>
              </div>
            </motion.div>

            {/* 5. Tool Fusion (Small: 4 cols) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="md:col-span-4 group relative rounded-[2rem] bg-white border border-slate-200 p-10 flex flex-col justify-between hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 relative z-10">
                <Layers size={28} />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3">高级调查工具融合</h3>
                <p className="text-slate-500 text-xs font-light leading-relaxed">
                  收集用户对产品的主观自我反馈，并与生物传感器采集的客观生理数据无缝结合，从主观+客观双重维度，全方位解读产品测试体验。
                </p>
              </div>
            </motion.div>

            {/* 6. Remote (Large: 8 cols) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="md:col-span-8 group relative rounded-[2rem] bg-white border border-slate-200 p-10 flex items-center gap-12 hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="w-20 h-20 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0 relative z-10">
                <Globe size={40} />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 tracking-tight">全流程远程功能</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  支持远程开展产品设计全流程测试研究，无地域限制收集全球受众的情感与行为数据，大幅提升测试效率，丰富样本多样性。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">多元专业解决方案，适配不同产品设计研究需求</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Lab Solution */}
            <div className="p-10 rounded-[3rem] bg-slate-950 text-white relative overflow-hidden group h-full flex flex-col">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                <Cpu size={120} />
              </div>
              <h3 className="text-2xl font-bold mb-2">元镜实验室</h3>
              <p className="text-teal-400 font-medium mb-8">高端定制化产品设计研究平台</p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                可在受控实验室、产品模拟使用环境、混合研究场景中，开展严谨的产品设计与开发研究，适配消费品、工业产品、数字产品等多类型产品设计研究需求，尤其适用于需要深度洞悉用户真实行为、情感反应与产品可用性的研究场景。
              </p>
              <div className="space-y-4 flex-grow">
                <div className="font-bold text-sm text-white/80 mb-4 tracking-wider uppercase">核心能力：</div>
                {[
                  '支持屏幕端、眼动眼镜、VR多形式眼动追踪，精准评估产品交互过程中的用户视觉注意力；',
                  '集成脑电图、皮肤电反应/皮肤电活动、肌电图、心电图、近红外光谱等技术，实现多维度生理学分析；',
                  '搭载面部表情分析、行为编码功能，精准量化用户的情绪反应；',
                  '提供高级刺激呈现能力，适配产品原型、界面、包装等多类测试对象；',
                  '实现多模态数据的集中式同步与融合分析，让数据洞察更全面；',
                  '支持定制硬件集成与SDK开发，适配个性化研究需求；',
                  '配备远程数据采集（RDC）插件，高效开展在线产品测试。'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 size={18} className="text-teal-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Solution */}
            <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-200 relative overflow-hidden group h-full flex flex-col">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                <GraduationCap size={120} />
              </div>
              <h3 className="text-2xl font-bold mb-2">元镜教育版</h3>
              <p className="text-teal-600 font-medium mb-8">教学导向型产品设计研究平台</p>
              <p className="text-slate-500 mb-8 leading-relaxed">
                专为大学、学术机构的相关课程打造的实践性研究平台，适配产品设计、用户体验研究、行为科学等学科的教学与学习，帮助学生积累消费品设计、数字产品设计研究中，行为测量工具的实操经验。
              </p>
              <div className="space-y-4 flex-grow">
                <div className="font-bold text-sm text-slate-800 mb-4 tracking-wider uppercase">核心能力：</div>
                {[
                  '搭载网络摄像头眼动追踪、面部表情分析、语音分析、网络摄像头呼吸监测等核心技术；',
                  '打造适配学生使用的简易化学习环境与数据采集流程，降低操作门槛；',
                  '设计贴合课堂教学、学生实操的引导式工作流程，适配教学场景需求；',
                  '配备高级综合调查工具，实现用户主观反馈与客观生理数据的融合分析。'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={18} className="text-teal-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}
