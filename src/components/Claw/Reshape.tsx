import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

export default function Hero() {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const fullText1 = '重塑影视';
  const fullText2 = '智能创作新纪元';
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [phase, setPhase] = useState(0); // 0: idle, 1: typing line1, 2: typing line2

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setPhase(1);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      setPhase(0);
      setLine1('');
      setLine2('');
    }
  }, [isInView]);

  // Line 1 Typing
  useEffect(() => {
    if (phase === 1) {
      if (line1.length < fullText1.length) {
        const timeout = setTimeout(() => {
          setLine1(fullText1.slice(0, line1.length + 1));
        }, 120); // 稍微加快速度提升丝滑感
        return () => clearTimeout(timeout);
      } else {
        const timer = setTimeout(() => setPhase(2), 300); // 第一行打完停顿一下
        return () => clearTimeout(timer);
      }
    }
  }, [line1, phase]);

  // Line 2 Typing
  useEffect(() => {
    if (phase === 2) {
      if (line2.length < fullText2.length) {
        const timeout = setTimeout(() => {
          setLine2(fullText2.slice(0, line2.length + 1));
        }, 100); // 第二行稍微快一点，更显智能感
        return () => clearTimeout(timeout);
      }
    }
  }, [line2, phase]);

  return (
    <div ref={ref} className="relative py-20 md:py-32 flex flex-col items-center text-center overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-extrabold text-gray-900 mb-10 tracking-tighter leading-tight md:leading-[1.1] min-h-[2.2em]">
            <div className="relative inline-block">
              {line1}
              {phase === 1 && (
                <span className="inline-block w-1.5 h-[0.8em] bg-gray-900 ml-2 animate-pulse align-middle"></span>
              )}
            </div>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400 inline-block">
              {line2}
              {phase === 2 && (
                <span className="inline-block w-1.5 h-[0.8em] bg-teal-500 ml-2 animate-pulse align-middle"></span>
              )}
            </span>
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-500 max-w-4xl mx-auto leading-tight font-medium tracking-tight mb-16">
            准备好招聘你的 <span className="text-gray-900 font-bold">AI 员工</span> 了么？
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative bg-gray-900 hover:bg-black text-white font-bold py-6 px-14 rounded-2xl text-xl transition-all duration-300 shadow-2xl shadow-gray-200 hover:shadow-gray-400 hover:-translate-y-1">
              开启 OpenClaw 创作
              <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-100 font-bold py-6 px-14 rounded-2xl text-xl transition-all duration-300 hover:border-gray-200">
              预约演示
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
