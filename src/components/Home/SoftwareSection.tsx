import React from 'react';
import FadeIn from '../FadeIn';

export default function SoftwareSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 mb-20">
      <h2 className="text-4xl font-[700] text-[#111111] text-center mb-12">软件</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <FadeIn delay={0.1} className="h-full">
          <div className="bg-tertiary rounded-[2rem] p-10 flex flex-col items-center text-center h-full">
            <div className="h-20 flex items-center justify-center mb-6">
              <img
                src="/src/assets/home/software1.png"
                alt="iMotions Mark"
                className="h-16 w-auto"
              />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">
              元镜视界软件产品
              <br /><br />
              全规模人类行为研究解决方案
            </h3>
            <p className="text-sm text-text-grey">
              一个软件研究套件，整合了几乎任何生物传感器，技术的生态系统，提供最强大的数据和洞察。
            </p>
          </div>
        </FadeIn>
        {/* Card 2 */}
        <FadeIn delay={0.2} className="h-full">
          <div className="bg-white border border-gray-200 rounded-[2rem] p-10 flex flex-col items-center text-center h-full">
            <div className="h-20 flex items-center justify-center mb-6">
              <img
                src="/src/assets/home/software2.png"
                alt="iMotions Lab"
                className="h-16 w-auto"
              />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">元镜视界实验室</h3>
            <p className="text-sm text-text-grey mb-8">
              AI 影视技术研发与成果转化的载体
            </p>
            <p className="text-sm text-text-grey mb-6">
              数智影像与情感交互实验室是元镜视界与四川传，媒学院深度协同打造的专业化平台
            </p>
            <a href="/lab" className="mt-auto bg-[#32373c] text-white text-sm font-medium py-2 px-6 rounded-full hover:bg-black transition-colors">
              查看功能
            </a>
          </div>
        </FadeIn>
        {/* Card 3 */}
        <FadeIn delay={0.3} className="h-full">
          <div className="bg-white border border-gray-200 rounded-[2rem] p-10 flex flex-col items-center text-center h-full">
            <div className="h-20 flex items-center justify-center mb-4">
              <img
                src="/src/assets/home/software3.png"
                alt="iMotions Online"
                className="h-16 w-auto"
              />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">元镜视界教育</h3>
            <p className="text-sm text-text-grey mb-8">
              影视产业专业人才孵化
            </p>
            <p className="text-sm text-text-grey mb-4">
              校园AI教学与影视产业需求的人才孵化基地
            </p>
            <a href="#" className="mt-auto bg-[#32373c] text-white text-sm font-medium py-2 px-6 rounded-full hover:bg-black transition-colors">
              查看功能
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
