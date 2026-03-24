import React from 'react';
import { Bot, Cpu, Zap, Binary, Blocks } from 'lucide-react';
import FadeIn from '../FadeIn';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function ProcessCard() {
  const steps: Step[] = [
    { id: 1, title: '导演', description: '可任选风格的资深导演，覆盖院线、短剧、纪实等全流派，精准匹配你的创作调性', icon: Bot },
    { id: 2, title: '剪辑', description: '风格化剪辑大师，支持电影感、快节奏、综艺风等多模板，高效剪出专业质感', icon: Cpu },
    { id: 3, title: '文案', description: '多赛道编剧专家，可切换悬疑、甜宠、科普等创作风格，量产高契合度脚本', icon: Zap },
    { id: 4, title: '视觉', description: '全风格美术总监，适配国风、赛博、写实等视觉体系，定制化打造影片美学', icon: Binary },
    { id: 5, title: '更多岗位', description: '包含制片、宣发、配音、调色等更多 AI 专家，全方位覆盖影视工业化生产的每一个细分环节', icon: Blocks },
  ];

  return (
    <section className="animate-fade-in [animation-delay:200ms] max-w-[1280px] mx-auto ">
      <div className="relative p-6 md:p-10 bg-neutral-50 rounded-[3rem] overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full highlight-gradient-teal opacity-30"></div>

        <div className="relative z-10">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-10 md:mb-16">
              <div className="max-w-3xl">
                <h3 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tighter leading-none">OpenClaw 影视智能岗位</h3>
                <p className="text-gray-500 text-xl font-medium leading-relaxed">
                  基于 OpenClaw Skill 架构，我们训练了覆盖影视全流程的 AI 角色 —— 从导演、剪辑、文案到视觉设计，你可以像挑选真实主创一样，按需组合不同风格、不同专长的 AI 员工。
                </p>
              </div>
              <div className="hidden md:block">
                <div className="px-6 py-3 bg-white rounded-full border border-gray-100 shadow-sm text-sm font-bold text-teal-600 uppercase tracking-widest">
                  7×24 小时待命
                </div>
              </div>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <FadeIn delay={idx*0.1} className="h-full">
                  <div
                    key={step.id}
                    className="h-full group flex flex-col p-8 bg-white rounded-3xl border border-gray-100 hover:border-teal-200 hover:shadow-2xl hover:shadow-teal-100 transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-teal-500 group-hover:rotate-6 transition-all duration-500">
                      <IconComponent className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{step.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed font-medium line-clamp-4">{step.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}