import React from 'react';
import { Rocket, Brain, PiggyBank, Cog, Zap } from 'lucide-react';
import FeatureCard from '../Claw/FeatureCard';
import FadeIn from '../FadeIn';

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradientClass: string;
  iconBg: string;
}

export default function CreativeRevolution() {
  const features: FeatureItem[] = [
    {
      title: "高效创作",
      description: "24/7全天候工作，创作效率提升5-10倍",
      icon: <Rocket className="text-green-500 w-10 h-10" />,
      gradientClass: "highlight-gradient-green",
      iconBg: "bg-green-50"
    },
    {
      title: "自进化",
      description: "AI技能持续学习优化，工作流智能进化",
      icon: <Brain className="text-purple-500 w-10 h-10" />,
      gradientClass: "highlight-gradient-purple",
      iconBg: "bg-purple-50"
    },
    {
      title: "成本优势",
      description: "人力成本降低80%，零管理成本",
      icon: <PiggyBank className="text-blue-500 w-10 h-10" />,
      gradientClass: "highlight-gradient-blue",
      iconBg: "bg-blue-50"
    },
    {
      title: "全流程",
      description: "从创意到发布，AI团队一站式完成",
      icon: <Cog className="text-teal-500 w-10 h-10" />,
      gradientClass: "highlight-gradient-teal",
      iconBg: "bg-teal-50"
    },
    {
      title: "Skill生态",
      description: "专业影视人可上传Skill，构建自进化工作流，实现技能变现",
      icon: <Zap className="text-yellow-500 w-10 h-10" />,
      gradientClass: "highlight-gradient-yellow",
      iconBg: "bg-yellow-50"
    }
  ];

  return (
    <section className="px-4 animate-fade-in [animation-delay:400ms] max-w-[1280px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-10 md:mb-16">
        <FadeIn>
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tighter leading-none">
              AI 驱动影视创作革命
            </h2>
            <p className="text-gray-500 text-xl font-medium leading-relaxed">
              高效产出、智能进化、成本可控、全流程交付、生态共建。
            </p>
          </div>
        </FadeIn>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <FadeIn delay={index * 0.1} className=''>
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              gradientClass={feature.gradientClass}
              iconBg={feature.iconBg}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}