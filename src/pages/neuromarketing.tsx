import React from 'react';
import { motion } from 'motion/react';
import FadeIn from '../components/FadeIn';
import { 
  Brain, 
  Eye, 
  Activity, 
  Monitor, 
  Smartphone, 
  BarChart3, 
  Globe, 
  Users, 
  ShieldCheck, 
  Zap,
  Layers,
  Heart,
  Search,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Mic2,
  Smile,
  Award,
  ShoppingBag,
  Layout,
  Package,
  Video,
  GraduationCap,
  Microscope
} from 'lucide-react';

export default function NeuromarketingPage() {
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                神经营销与消费者神经科学
              </span>
            </h1>
            <p className=" text-slate-400 max-w-4xl leading-relaxed font-light mb-12">
              深挖消费者决策背后的潜意识驱动因素，依托科学验证的神经营销技术体系，精准获取注意力、情感表达、选择倾向等客观洞察，让产品设计、广告创作、体验打造更贴合消费者真实需求，助力市场决策更具科学性与确定性。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Bridging the Gap Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <FadeIn direction="left">
              <h2 className="text-4xl font-bold tracking-tight mb-8">
                弥合消费者声明意图与实际行为的核心差距
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  研究显示，消费者的主观意图仅能解释<span className="text-teal-600 font-bold">28%</span>的现实消费行为，而新产品上市失败率却接近<span className="text-rose-500 font-bold">40%</span>。传统调研仅能捕捉消费者明确表达的偏好，却无法触达影响其真实决策的情感、生理等潜意识因素，更深度的消费者量化研究已成行业刚需。
                </p>
                <p>
                  同时，<span className="text-teal-600 font-bold">90%-95%</span>的购买决策由消费者无意识做出，且多数购买选择会在3-5秒内快速形成。这意味着唯有捕捉潜意识的生理与情绪反应，才能真正读懂消费者。
                </p>
                <p>
                  元镜视界将眼动追踪、生物识别、多维度情绪分析等技术集成至一体化同步平台，打造先进的神经营销研究体系，穿透表面表达，精准揭示驱动消费者行为与决策的核心底层因素，彻底打破“言行不一”的调研痛点。
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative p-10 bg-slate-50 rounded-[3rem] border border-slate-200 shadow-sm overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                  <Brain size={120} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                  <div className="text-center">
                    <div className="text-4xl font-black text-teal-500 mb-2">95%</div>
                    <div className="text-slate-500 text-xs font-medium uppercase tracking-wider">无意识决策</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-rose-500 mb-2">40%</div>
                    <div className="text-slate-500 text-xs font-medium uppercase tracking-wider">上市失败率</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-blue-500 mb-2">3-5s</div>
                    <div className="text-slate-500 text-xs font-medium uppercase tracking-wider">决策时长</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Applications */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl font-bold mb-4">神经营销与消费者神经科学研究核心应用</h2>
              <p className="text-xl text-slate-500">穿透表象，量化潜意识驱动力</p>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: '广告效果及创意测试', icon: Zap, desc: '捕捉消费者对广告的潜意识生理与情绪反应，在广告投放前完成精准优化，提升广告触达与转化效率。' },
              { title: '品牌塑造与品牌认知', icon: Award, desc: '精准定位消费者与品牌元素的情感关联点，强化品牌记忆度，深化品牌与目标受众的情感连接。' },
              { title: '娱乐与媒体测试', icon: Video, desc: '通过量化受众情感反馈与注意力分布，优化内容创作与打磨，实现内容互动效果与情感冲击力的双重提升。' },
              { title: '购物者行为与零售体验', icon: ShoppingBag, desc: '深度解析消费者在实体空间、数字空间的购物行为与体验感受，优化零售场景设计与购物流程。' },
              { title: '用户体验与界面设计', icon: Layout, desc: '精准测量用户使用过程中的认知负荷，消除体验摩擦点，打造更流畅、更贴合用户习惯的产品与界面设计。' },
              { title: '产品设计与包装优化', icon: Package, desc: '基于消费者视觉注意力、情绪偏好等数据，设计能快速吸引消费者关注、激发购买欲的产品与包装。' }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.05} className="group p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-xl hover:border-teal-100 transition-all">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-teal-500 shadow-sm mb-6 transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
          
          {/* Market Data Reference */}
          <FadeIn className="mt-16 p-10 rounded-[2.5rem] bg-slate-900 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                  <BarChart3 size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">核心数据参考</h4>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                    40%的新产品在上市初期遭遇失败；产品上市后再修复问题，所需成本是前期优化的5-10倍，精准的神经营销研究将大幅降低市场试错成本。
                  </p>
                </div>
              </div>
              <div className="text-teal-400 font-bold text-2xl tracking-tight whitespace-nowrap">
                降低 5-10倍 修复成本
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Integrated Research Platform */}
      <section className="py-32 px-6 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-slate-900">
                元镜神经营销与消费者神经科学一体化研究平台
              </h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                <p>
                  元镜视界将眼动追踪、面部表情分析、皮肤电反应（GSR）、语音分析等核心技术，整合至单一智能平台，实现刺激呈现、多源数据同步采集、智能分析全流程一体化，为神经营销与消费者神经科学研究提供全方位技术支撑。
                </p>
                <p>
                  平台专为学术研究、商业市场调研打造，可高效捕捉消费者的无意识反应，简化复杂研究流程，将多维度行为与生物传感器数据转化为清晰、可落地的洞察，为营销、用户体验、零售等领域的科学决策提供核心依据。
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 1. Classic Lab Config */}
            <FadeIn className="group relative rounded-[2.5rem] bg-slate-50 border border-slate-200 p-10 flex flex-col hover:shadow-2xl hover:border-teal-200 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <Microscope size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-8 tracking-tight text-slate-900">经典实验室传感器配置</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 shrink-0 w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <Eye size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">视觉注意力监测</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">搭载屏幕端眼动追踪技术，精准测量消费者对广告、网站、产品包装的视觉关注重点与注意力分布；</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 shrink-0 w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600">
                    <Smile size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">情绪反应捕捉</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">融合面部表情分析、语音分析技术，实时捕捉消费者的真实情绪反应与情感变化；</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 shrink-0 w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                    <Activity size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">生理参与度分析</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">通过GSR/EDA、心率传感器，量化营销刺激下消费者的情绪唤醒程度与生理参与度。</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* 2. Browser Config */}
            <FadeIn delay={0.1} className="group relative rounded-[2.5rem] bg-slate-50 border border-slate-200 p-10 flex flex-col hover:shadow-2xl hover:border-blue-200 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <Globe size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-8 tracking-tight text-slate-900">主流浏览器端神经营销配置</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 shrink-0 w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <Video size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">视觉注意力监测</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">依托网络摄像头眼动追踪技术，精准捕捉消费者观看广告、网站、数字内容、产品图片时的视线落点；</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 shrink-0 w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600">
                    <Smile size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">情绪反应捕捉</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">通过面部表情分析技术，实时检测广告测试、概念调研、反馈会议中消费者的即时情绪反应。</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* All-Scenario Adaptation */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl font-bold mb-4">全场景适配，随时随地精准洞察消费者需求</h2>
              <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed">
                元镜神经营销研究平台可灵活适配各类研究环境，打破时空与场景限制，全维度捕捉真实消费行为，且所有场景下的多模态数据均能实现自动同步，让复杂的消费者行为转化为清晰、可操作的研究洞察：
              </p>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '实验室内', desc: '可控环境下开展高精度、高深度的专项研究；', icon: Microscope },
              { title: '在线远程', desc: '依托网络摄像头开展大规模远程调研，扩大样本覆盖；', icon: Globe },
              { title: '虚拟场景', desc: '打造沉浸式模拟环境，研究消费者对产品与体验的虚拟反馈；', icon: Layers },
              { title: '店内及移动端', desc: '通过可穿戴设备、移动设备，在真实消费场景中开展实地研究。', icon: Smartphone }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-3xl border border-slate-200 bg-white hover:shadow-xl hover:border-teal-200 transition-all group">
                <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Core Technical Capabilities */}
      <section className="py-32 px-6 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(20,184,166,0.05),transparent)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                核心技术能力，量化消费者真实情绪与行为
              </h2>
              <p className="text-xl text-slate-400 max-w-4xl mx-auto font-light leading-relaxed">
                元镜视界平台通过先进的生物传感器、无缝的多源数据分析、即用型可视化成果，全方位挖掘神经营销的核心价值，精准捕捉消费者真实需求：
              </p>
            </FadeIn>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '视觉注意力分析',
                icon: Eye,
                desc: '依托专业眼动追踪技术，捕捉消费者视觉注意力焦点、视线轨迹，明确关注重点，挖掘提升转化的核心视觉因素。'
              },
              {
                title: '语音指标解读',
                icon: Mic2,
                desc: '精准分析语音语调和音高变化，揭示消费者背后的情感状态与认知负荷，展现真实情绪，优化品牌沟通与体验设计。'
              },
              {
                title: '情绪指标量化',
                icon: Smile,
                desc: '实时测量消费者的情绪反应类型与强度，读懂受众真实感受，打造能引发深度共鸣、建立持久品牌忠诚度的营销活动。'
              },
              {
                title: '数据可视化与智能分析',
                icon: BarChart3,
                desc: '将复杂的神经营销多源数据进行直观可视化呈现，快速提炼情感与行为洞察，转化为数据驱动的科学决策，最大化提升用户参与度与市场转化。'
              },
              {
                title: '高级调查工具融合',
                icon: Layers,
                desc: '收集消费者主观自我反馈，并与生物传感器采集的客观生理数据无缝结合，主观+客观双重维度，全方位解读消费者行为。'
              },
              {
                title: '全流程远程功能',
                icon: Globe,
                desc: '支持远程开展神经营销全流程研究，无地域限制收集全球受众的情感与行为数据，大幅提升调研效率与样本多样性。'
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 bg-teal-500/20 text-teal-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <h4 className="font-bold text-lg mb-3">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-light">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Diverse Solutions */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">元镜神经营销与消费者神经科学多元解决方案</h2>
              <p className="text-xl text-slate-500">适配不同领域、不同深度的研究需求</p>
            </FadeIn>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Lab Solution */}
            <FadeIn className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-200 flex flex-col hover:shadow-2xl hover:border-teal-200 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-teal-500 text-white flex items-center justify-center mb-8 shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform">
                <Microscope size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">元镜实验室：高端定制化研究平台</h3>
              <p className="text-slate-600 text-sm mb-8 leading-relaxed">为受控实验室、实体门店、混合场景打造的高精准、全定制化研究平台，适用于对精准性、灵活性、数据深度有高要求的高级消费者洞察、零售研究、营销效果研究。</p>
              
              <div className="space-y-6 mb-10 flex-grow">
                <div className="h-px bg-slate-100"></div>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    '支持屏幕端、移动设备、虚拟现实多场景眼动追踪；',
                    '集成脑电图、皮肤电反应/皮肤电活动、肌电图、心电图、近红外光谱等多类生理监测技术；',
                    '搭载面部表情分析、行为编码功能，精准捕捉多维度反馈；',
                    '提供高级刺激呈现、实验全流程智能控制能力；',
                    '实现多源数据集中式同步与融合分析；',
                    '支持定制硬件集成、SDK开发，适配个性化研究需求；',
                    '配备在线受访者远程数据收集（RDC）插件，拓展调研边界。'
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs text-slate-500 leading-tight">
                      <CheckCircle2 size={14} className="text-teal-500 shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Media Solution */}
            <FadeIn delay={0.1} className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-200 flex flex-col hover:shadow-2xl hover:border-blue-200 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-blue-500 text-white flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <Video size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">元镜媒体分析：规模化情绪与注意力测量平台</h3>
              <p className="text-slate-600 text-sm mb-8 leading-relaxed">依托AI驱动的可扩展技术体系，量化受众与广告、电影、电视、数字内容、社交媒体的情感连接与注意力互动，适用于对速度、覆盖范围、实际相关性有高要求的广告效果评估、内容优化、受众参与度研究。</p>
              
              <div className="space-y-6 mb-10 flex-grow">
                <div className="h-px bg-slate-100"></div>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    '大规模AI驱动面部表情分析，高效处理海量样本；',
                    '输出情感关注、参与度等核心量化指标；',
                    '逐秒追踪观众情绪与注意力变化，精准定位内容关键节点；',
                    '支持数字、电视、联网电视、社交平台多渠道广告测试；',
                    '实现电影、电视、预告片等娱乐媒体的专业内容测试；',
                    '可与全球情绪反应规范进行基准对比，科学评估内容表现；',
                    '开放API、SDK接口，支持平台、发布商、合作伙伴高效集成。'
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs text-slate-500 leading-tight">
                      <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Education Solution */}
            <FadeIn delay={0.2} className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-200 flex flex-col hover:shadow-2xl hover:border-purple-200 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-purple-500 text-white flex items-center justify-center mb-8 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">元镜教育版：教学导向型研究平台</h3>
              <p className="text-slate-600 text-sm mb-8 leading-relaxed">专为大学、学术机构打造的实践性、教学导向型平台，适配神经营销、消费者神经科学、行为研究等学科的教学与学习，让学生在结构化、指导性的学习环境中，获得生物识别研究方法的实战经验。</p>
              
              <div className="space-y-6 mb-10 flex-grow">
                <div className="h-px bg-slate-100"></div>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    '搭载网络摄像头眼动追踪、面部表情分析、语音分析、网络摄像头呼吸监测技术；',
                    '适配学生使用的简易化学习环境与数据采集流程；',
                    '提供高级综合调查工具，实现主观与客观数据融合；',
                    '设计贴合课堂教学、学生实操的引导式工作流程，降低学习门槛。'
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs text-slate-500 leading-tight">
                      <CheckCircle2 size={14} className="text-purple-500 shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


    </div>
  );
}
