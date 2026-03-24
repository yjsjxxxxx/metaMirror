import { useState, useEffect } from 'react';
import FadeIn from '../FadeIn';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = '智能创作新纪元';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <div className="relative py-20 md:py-32 flex flex-col items-center text-center overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl px-4">
        <FadeIn>
          <h1 className="text-5xl md:text-8xl font-extrabold text-gray-900 mb-10 tracking-tighter leading-tight md:leading-[1.1]">
            重塑影视<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400 min-h-[1.2em] inline-block">
              {text}
              <span className="inline-block w-1 h-[0.8em] bg-teal-500 ml-1 animate-pulse align-middle"></span>
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
        </FadeIn>

      </div>
    </div>
  );
}
