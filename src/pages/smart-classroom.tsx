import React from 'react';
import { motion } from 'motion/react';
import FadeIn from '../components/FadeIn';
import { 
  Monitor, 
  Brain, 
  Activity, 
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
  Users,
  Lightbulb,
  MousePointer2,
  Lock
} from 'lucide-react';

export default function SmartClassroomPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(20,184,166,0.1),transparent)] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-[1.1] mb-8">
              元镜视界<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                智能教室解决方案
              </span>
            </h1>
            <p className=" text-slate-400 max-w-4xl leading-relaxed font-light mb-12">
              依托网页端眼动追踪与面部表情分析核心技术，打造沉浸式智慧学习场景，为高校课堂构建集教学创新、实践实操、数据化分析于一体的智能教室解决方案。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Empowering Educators */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <h2 className="text-4xl font-bold tracking-tight mb-8">赋能教育工作者，激活课堂教学生态</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                每一位教育工作者都怀揣着启发下一代的初心，元镜视界教育版平台以直观易用、贴合行业应用的行为研究工具，助力高校讲师高效提升课堂入学率与学生参与度。
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                同时，为渴望积累前沿实践经验的学生搭建实操平台，让学生掌握市场稀缺的研究技能，在竞争激烈的就业市场中形成核心竞争力，让简历脱颖而出。
              </p>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative p-10 bg-slate-50 rounded-[3rem] border border-slate-200 shadow-sm overflow-hidden text-center">
                <Users className="mx-auto mb-6 text-teal-500" size={64} />
                <h3 className="text-2xl font-bold mb-4">师生共同成长</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  通过前沿技术赋能教学，实现教育成果与市场需求的精准对接。
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Tools Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl font-bold mb-4">智慧课堂核心工具，打造沉浸式实践体验</h2>
              <p className="text-xl text-slate-500">轻量化操作，无限拓展教学边界</p>
            </FadeIn>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn className="p-10 rounded-[3rem] bg-white border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center mb-6">
                <MousePointer2 size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">轻量化操作</h3>
              <p className="text-slate-600 leading-relaxed">
                元镜视界教育版平台融合定量调查、眼动追踪、面部表情分析三大核心功能，学生仅需一台笔记本电脑，即可获得AI驱动的专业实践研究体验。基于网页端的轻量化教学工具，支持学生自主设计研究方案、通过共享链接高效收集数据、完成专业数据分析，并生成可视化图表。
              </p>
            </FadeIn>
            <FadeIn delay={0.1} className="p-10 rounded-[3rem] bg-white border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center mb-6">
                <Globe size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">全场景适配</h3>
              <p className="text-slate-600 leading-relaxed">
                平台大幅降低课堂互动门槛，既适配大型阶梯教室的公共核心课程，也能满足小班化、个性化的选修课教学需求；同时作为便捷的远程教学工具，实现线上线下教学无缝衔接。配备专属教学配套教材，为教师提供从入门到精通的全流程指导。
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Three-step Implementation */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl font-bold mb-4">三步落地教学，让生物传感技术融入课堂</h2>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: '教师融入', desc: '将生物传感工具嵌入现有课程体系，把技术演示融入日常课堂教学，以新颖的实操形式吸引学生注意力，深化知识理解。' },
              { step: '2', title: '设计练习', desc: '教师围绕课堂知识点设计专属实操练习题，引导学生分析生物传感器采集的真实数据，让学生在数据解读中沉浸式理解课堂概念。' },
              { step: '3', title: '学生探索', desc: '依托平台简洁易用的操作界面，让学生开展独立研究或小组协作项目，培养学生的批判性思维与问题解决能力。' }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="relative p-10 rounded-3xl bg-slate-50 border border-slate-100">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-4 mt-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Support Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl font-bold mb-4">核心技术支撑，打造专业级课堂实操体验</h2>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn className="p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center mb-6">
                <Eye size={24} />
              </div>
              <h4 className="text-lg font-bold mb-3">元镜WebET 3.0</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                高精度网页端眼动追踪技术，是当前市场上性能更强的网页端摄像头眼动追踪解决方案，为课堂实践提供专业、精准的眼动数据支撑。
              </p>
            </FadeIn>
            <FadeIn delay={0.1} className="p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center mb-6">
                <Smile size={24} />
              </div>
              <h4 className="text-lg font-bold mb-3">专业面部表情分析</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                搭载全球领先的情感识别AI，精准识别快乐、愤怒、恐惧等7种核心情绪及感伤、困惑2种高级情绪，让学生接触行业前沿技术。
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-6">
                <Smartphone size={24} />
              </div>
              <h4 className="text-lg font-bold mb-3">轻量化部署</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                纯网页端应用，无需采购任何专用硬件设备，全面兼容所有主流操作系统，真正实现零成本、轻量化课堂部署。
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl font-bold mb-4">多重隐私保障，全方位守护数据安全</h2>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn className="flex gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-full bg-teal-500/10 text-teal-600 flex items-center justify-center shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">精细化权限管控</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  平台内置多层级隐私控制功能，支持教师为每个研究项目精准设置用户访问权限，确保数据访问可追溯、可管控。
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="flex gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center shrink-0">
                <Lock size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">高标准合规存储</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  所有教学研究数据均存储于欧盟境内的高安全等级云服务器，全流程严格遵循GDPR通用数据保护条例。
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

  
    </div>
  );
}
