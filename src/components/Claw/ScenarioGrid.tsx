import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Monitor, Share2, Github, BookOpen } from 'lucide-react';
import { motion, useInView } from 'motion/react';

const scenarios = [
  {
    title: '影视工作流程管理',
    description: '高效统筹拍摄计划，实时同步进度',
    icon: <Monitor className="text-teal-600" />,
    chat: '帮我整理影视拍摄日程表，标注重要场景与时间节点',
    result: '日程表已整理，重要场景“开机仪式”标注于8月15日9:00，主场景拍摄标注于8月20日-9月5日'
  },
  {
    title: 'AI智能剧本修改',
    description: '自动分析剧本结构，提供创意优化建议',
    icon: <Share2 className="text-teal-600" />,
    chat: '帮我优化剧本第3场，增加冲突，强化主角动机',
    result: '剧本修改完成！已增加冲突对话，主角动机更加明确，情感张力提升。'
  },
  {
    title: '自动化视频剪辑',
    description: '基于节奏点自动剪辑，快速生成成片',
    icon: <Github className="text-teal-600" />,
    chat: '帮我把素材剪辑成30秒短片，节奏要快',
    result: '剪辑指令已接收：已按节奏点对齐素材，添加了转场效果，成片已生成。'
  },
  {
    title: 'AI辅助拍摄规划',
    description: '智能生成拍摄清单，优化场景调度',
    icon: <BookOpen className="text-teal-600" />,
    chat: '帮我规划下周的拍摄清单',
    result: '拍摄清单已生成：已优化场景调度，减少转场时间，预计效率提升20%。'
  }
];

function TypingText({ text, speed = 120, delay = 0, onComplete }: { text: string, speed?: number, delay?: number, onComplete?: () => void }) {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);
  const hasCompleted = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started || hasCompleted.current) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        if (!hasCompleted.current) {
          hasCompleted.current = true;
          onComplete?.();
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed, onComplete]);

  return <span>{displayedText}</span>;
}

const ScenarioCard: React.FC<{ scenario: typeof scenarios[0], index: number }> = ({ scenario, index }) => {
  const ref = useRef(null);
  // 增加 amount 到 0.6，确保卡片大部分进入视野才开始，避免边缘触发导致的混乱
  const isInView = useInView(ref, { once: false, amount: 0.6 });
  const [showAI, setShowAI] = useState(false);

  // 当离开视野时重置 AI 气泡显示状态，以便下次进入时重新开始
  useEffect(() => {
    if (!isInView) {
      setShowAI(false);
    }
  }, [isInView]);

  // 使用 useCallback 稳定回调，防止 TypingText 内部 useEffect 频繁重启
  const handleUserTypingComplete = useCallback(() => {
    setShowAI(true);
  }, []);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group relative p-6 md:p-8 rounded-[3rem] bg-neutral-50 border border-gray-100 hover:border-teal-100 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-50 flex flex-col"
    >
      <div className="flex items-center gap-6 ">
        <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-teal-500 group-hover:text-white transition-all duration-500">
          {React.cloneElement(scenario.icon as any, { className: 'w-6 h-6 group-hover:text-white transition-colors' })}
        </div>
        <span className="text-2xl font-bold text-gray-900 tracking-tight">{scenario.title}</span>
      </div>
      
      <div className="space-y-4 mb-6 flex-grow min-h-[200px]">
        {isInView && (
          <>
            <div className="flex flex-col items-end">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-teal-500 text-white p-4 md:p-5 rounded-[1.5rem] rounded-tr-none shadow-xl shadow-teal-100 max-w-[90%] md:max-w-[80%]"
              >
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 opacity-70">User Prompt</div>
                <p className="text-base md:text-lg font-medium leading-snug">
                  {/* 增加 index * 400 的延迟，让卡片错开打印 */}
                  <TypingText 
                    text={scenario.chat} 
                    delay={index } 
                    onComplete={handleUserTypingComplete} 
                  />
                </p>
              </motion.div>
            </div>
            
            {showAI && (
              <div className="flex flex-col items-start">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="bg-white p-4 md:p-5 rounded-[1.5rem] rounded-tl-none border border-gray-100 shadow-sm max-w-[90%] md:max-w-[80%]"
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-teal-600">AI Response</div>
                  <p className="text-gray-700 text-base leading-relaxed font-medium">
                    <TypingText text={scenario.result} speed={25} delay={300} />
                  </p>
                </motion.div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="pt-6 border-t border-gray-200/50 mt-auto">
        <div className="flex items-center justify-between">
          <p className="text-gray-400 font-bold text-xs uppercase tracking-[0.2em]">{scenario.description}</p>
          <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-teal-500 shadow-sm group-hover:bg-teal-500 group-hover:text-white transition-all duration-500">
            <BookOpen size={18} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ScenarioGrid() {
  return (
    <div className="py-12 md:py-20 bg-white text-gray-900">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-10 md:mb-16 max-w-7xl mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tighter leading-none">真实场景，即刻体验</h2>
          <p className="text-gray-500 text-xl font-medium leading-relaxed">从创意策划到后期制作，AI 帮你解锁无限可能</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto px-4">
        {scenarios.map((scenario, index) => (
          <ScenarioCard key={index} scenario={scenario} index={index} />
        ))}
      </div>
    </div>
  );
}
