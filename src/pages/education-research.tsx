import React from 'react';
import { motion } from 'motion/react';
import FadeIn from '../components/FadeIn';
import {
  GraduationCap,
  Brain,
  Activity,
  Users,
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
  Award,
  Smartphone,
  Layout,
  Tag
} from 'lucide-react';

export default function EducationResearchPage() {
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
                教育研究
              </span>
            </h1>
            <p className=" text-slate-400 max-w-4xl leading-relaxed font-light mb-12">
              科技推动教育领域全方位变革，教育研究也亟需科学手段评估新型教学工具、教学策略的实际成效。元镜视界以多模态生物传感技术为核心，实现多源生理心理数据同步采集与分析，赋能教育领域多模态心理生理学研究，让教育研究者依托科学验证的研究工具、严谨可靠的研究方法，以创新视角探索各类复杂教育研究课题，成为教育研究创新的核心助力，其专业能力已获全球顶尖高校认可与采用。
            </p>
          </FadeIn>
        </div>
      </section>



      {/* Core Functional Highlights */}
      <section className="py-32 px-6   overflow-hidden relative">
        <div className="absolute inset-0  pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                核心功能亮点
              </h2>
              <p className="text-xl text-slate-500">
                元镜教育研究实验室是覆盖研究设计-数据采集-分析输出的端到端一体化研究平台<br/>以多维度技术能力，为教育研究提供全面支撑
              </p>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: '多元调研工具融合',
                icon: Layers,
                content: '心理生理量化研究与传统研究方法互补共生，平台内置丰富调查工具，同时支持集成各类主流调研工具，实现主观反馈与客观生理数据的融合分析，让研究维度更全面、结论更严谨。'
              },
              {
                title: '注意力与参与度精准量化',
                icon: Eye,
                content: '通过眼动追踪+面部表情分析技术，量化捕捉学生的注意力聚焦时段、关注核心内容，清晰界定课程中的有效教学环节，精准识别学习过程中的注意力干扰因素，为教学优化提供数据依据。'
              },
              {
                title: '学习情感细微捕捉',
                icon: Smile,
                content: '无论是分析教师教学中的表情传递，还是学生接触课程材料后的情绪反应，均可通过面部表情+语音分析技术，量化挖掘情感的细微变化，精准判断学生学习中的兴奋、沮丧等情绪状态，洞悉教与学的情感互动逻辑。'
              },
              {
                title: '认知负荷与工作记忆评估',
                icon: Brain,
                content: '通过间接测量神经系统活动得出唤醒度指标，直观反映学生的认知负荷水平；针对高阶研究需求，平台支持脑电图（EEG）技术集成，实现对认知负荷与工作记忆的深度、精准研究。'
              },
              {
                title: '学习压力与焦虑监测',
                icon: Activity,
                content: '学生的作业焦虑、校内外生活压力均会影响学习效果，平台可通过肌电图、唤醒水平指标等技术手段，量化监测学生的压力与焦虑状态，为研究压力对学习的影响、制定减压教学策略提供客观数据。'
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-teal-100 transition-all group">
                <div className={`w-16 h-16 rounded-2xl  flex items-center justify-center mb-8 group-hover:scale-110 transition-transform group-hover:text-teal-600`}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-6 leading-tight">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed font-light flex-grow">{item.content}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* All-Scenario Applications */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl font-bold mb-4">全场景教育研究应用</h2>
              <p className="text-xl text-slate-500">
                元镜教育研究实验室可根据具体研究课题灵活定制，无缝融入课堂教学与各类教育研究场景<br />覆盖多维度教育研究方向，精准适配不同研究需求
              </p>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '教师教学能力提升研究',
                desc: '依托语音+面部表情分析技术，对教学音视频进行专业拆解分析，挖掘教师非语言沟通方式的特点与问题，解读教学过程中的情感传递效果，助力教师优化教学表达，提升课堂学生专注度与整体教学效果。',
                icon: Mic2
              },
              {
                title: '课程材料设计优化研究',
                desc: '通过屏幕眼动追踪技术，探究文本、音频、视频等不同媒体格式课程材料对学生注意力、认知负荷的影响差异，探索多媒材融合的学习增效路径；同时分析信息分块方式、图表设计对知识理解的助力作用，为科学设计优质课程材料提供数据支撑。',
                icon: BookOpen
              },
              {
                title: '个性化学习模式研究',
                desc: '针对资优学生、学习障碍学生及特殊教育群体的多样化学习需求，评估不同课程设置的适配效果。借助生物传感技术量化测量学生的注意力投入度、认知负荷变化，为个性化学习方案设计提供科学依据，实现提升学习参与度、缓解学习压力、增强学习动力的研究目标。',
                icon: Target
              },
              {
                title: '少儿学习者专项研究',
                desc: '可适配各年龄段少儿的行为研究需求，通过眼动追踪技术研究少儿早期读写能力、阅读理解能力的发展规律；亦可围绕少儿间的合作、沟通行为开展专项研究，同时配备适配少儿活泼好动特点的专用硬件，确保数据采集的精准性与便捷性。',
                icon: Smile
              },
              {
                title: '远程与在线学习研究',
                desc: '依托远程数据采集套件，仅需网络摄像头即可完成学生注意力、情绪反应、学习压力等维度的数据采集，涵盖眼动追踪、面部表情分析、呼吸监测等核心功能；研究全程严格遵循学生知情许可原则，所有采集数据均做匿名化处理，全方位保障数据安全与用户隐私。',
                icon: Globe
              },
              {
                title: '课堂群体动力学研究',
                desc: '针对小组合作学习等场景，通过脑电图（EEG）测量学生间的人际同步性，借助心电图（ECG）分析小组互动过程中参与者的情绪强度，深度研究课堂群体互动对学生协作能力与学习成果的影响，为优化小组合作教学模式、提升群体学习效率提供科学依据。',
                icon: Users
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.05} className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-teal-100 transition-all group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-400 group-hover:text-teal-600 mb-6 shadow-sm transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Support & Benefits */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">专属学术支持与权益</h2>
            </FadeIn>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Student License */}
            <FadeIn className="group p-10 rounded-[3rem] bg-white border border-slate-200 flex flex-col hover:shadow-2xl hover:border-teal-200 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-teal-500 text-white flex items-center justify-center mb-8 shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform">
                <Tag size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">学生专属分析许可证折扣</h3>
              <p className="text-slate-600 text-sm mb-8 leading-relaxed">针对高校实验室教学与研究需求，若需多名学生访问元镜实验室的研究数据，可申请学生专属许可证，享有专属折扣优惠，且学生许可证具备与完整许可证一致的全部分析功能，满足学生科研与实训需求。</p>
              <div className="mt-auto">
                <div className="h-px bg-slate-100 mb-6"></div>
                <div className="flex items-center gap-3 text-sm text-teal-600 font-bold">
                  <CheckCircle2 size={16} />
                  <span>满足科研与实训需求</span>
                </div>
              </div>
            </FadeIn>

            {/* Support Researchers */}
            <FadeIn delay={0.1} className="group p-10 rounded-[3rem] bg-white border border-slate-200 flex flex-col hover:shadow-2xl hover:border-cyan-200 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500 text-white flex items-center justify-center mb-8 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">全维度支持研究人员与学生</h3>
              <p className="text-slate-600 text-sm mb-8 leading-relaxed">无论您是升级现有心理学实验室，还是搭建首个教育研究实验室，搭载元镜系统的实验室都是高价值学术投资。平台不仅能为科研人员提供专业、高效的研究工具，助力各类教育研究课题开展；还能让学生通过实操掌握前沿的研究技术与方法，积累宝贵的科研经验与实操技能，实现教学与科研的双向赋能。</p>
              <div className="mt-auto">
                <div className="h-px bg-slate-100 mb-6"></div>
                <div className="flex items-center gap-3 text-sm text-cyan-600 font-bold">
                  <CheckCircle2 size={16} />
                  <span>教学与科研双向赋能</span>
                </div>
              </div>
            </FadeIn>

            {/* Software Flexibility */}
            <FadeIn delay={0.2} className="group p-10 rounded-[3rem] bg-white border border-slate-200 flex flex-col hover:shadow-2xl hover:border-blue-200 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-blue-500 text-white flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <Layout size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">多模态兼容、硬件无关的专业研究软件</h3>
              <p className="text-slate-600 text-sm mb-8 leading-relaxed">元镜实验室是真正意义上的多模态研究解决方案，可在简洁易用的操作界面中，轻松整合多维度研究模态，实现多源数据的同步分析，大幅提升研究效率；同时作为业内稀缺的硬件无关专业研究软件，支持研究者根据自身研究需求、预算规划，自主选择适配的硬件设备，兼顾研究的灵活性与成本可控性。</p>
              <div className="mt-auto">
                <div className="h-px bg-slate-100 mb-6"></div>
                <div className="flex items-center gap-3 text-sm text-blue-600 font-bold">
                  <CheckCircle2 size={16} />
                  <span>多源数据同步分析</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


    </div>
  );
}
