import React from 'react';
import { Monitor, Share2, Github, BookOpen } from 'lucide-react';
import FadeIn from '../FadeIn';

const scenarios = [
  {
    title: '影视工作流程管理',
    description: '高效统筹拍摄计划，实时同步进度',
    icon: Monitor,  
    chat: '帮我整理影视拍摄日程表，标注重要场景与时间节点',
    result: '日程表已整理，重要场景"开机仪式"标注于8月15日9:00，主场景拍摄标注于8月20日-9月5日'
  },
  {
    title: 'AI智能剧本修改',
    description: '自动分析剧本结构，提供创意优化建议',
    icon: Share2,
    chat: '帮我优化剧本第3场，增加冲突，强化主角动机',
    result: '剧本修改完成！已增加冲突对话，主角动机更加明确，情感张力提升。'
  },
  {
    title: '自动化视频剪辑',
    description: '基于节奏点自动剪辑，快速生成成片',
    icon: Github,
    chat: '帮我把素材剪辑成30秒短片，节奏要快',
    result: '剪辑指令已接收：已按节奏点对齐素材，添加了转场效果，成片已生成。'
  },
  {
    title: 'AI辅助拍摄规划',
    description: '智能生成拍摄清单，优化场景调度',
    icon: BookOpen,
    chat: '帮我规划下周的拍摄清单',
    result: '拍摄清单已生成：已优化场景调度，减少转场时间，预计效率提升20%。'
  }
];

export default function ScenarioGrid() {
  return (
    <div className="bg-white text-gray-900">
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-10 md:mb-16 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tighter leading-none">真实场景，即刻体验</h2>
            <p className="text-gray-500 text-xl font-medium leading-relaxed">从创意策划到后期制作，AI 帮你解锁无限可能</p>
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto px-4">
        {scenarios.map((scenario, index) => {
          const IconComponent = scenario.icon;

          return (
            <div key={index} className="group relative p-6 md:p-8 rounded-[3rem] bg-neutral-50 border border-gray-100 hover:border-teal-100 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-50 flex flex-col">
              <FadeIn delay={index * 0.1} className="h-full">
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-teal-500 group-hover:text-white transition-all duration-500">
                    <IconComponent className="w-6 h-6 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900 tracking-tight">{scenario.title}</span>
                </div>
                <div className="space-y-4 mb-6 flex-grow">
                  <div className="flex flex-col items-end">
                    <div className="bg-teal-500 text-white p-4 md:p-5 rounded-[1.5rem] rounded-tr-none shadow-xl shadow-teal-100 max-w-[90%] md:max-w-[80%]">
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 opacity-70">User Prompt</div>
                      <p className="text-base md:text-lg font-medium leading-snug">{scenario.chat}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start">
                    <div className="bg-white p-4 md:p-5 rounded-[1.5rem] rounded-tl-none border border-gray-100 shadow-sm max-w-[90%] md:max-w-[80%]">
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-teal-600">AI Response</div>
                      <p className="text-gray-700 text-base leading-relaxed font-medium">{scenario.result}</p>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200/50 mt-auto">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400 font-bold text-xs uppercase tracking-[0.2em]">{scenario.description}</p>
                    <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-teal-500 shadow-sm group-hover:bg-teal-500 group-hover:text-white transition-all duration-500">
                      <BookOpen size={18} />
                    </div>
                  </div>
                </div>
              </FadeIn>

            </div>
          );
        })}
      </div>
    </div>
  );
}