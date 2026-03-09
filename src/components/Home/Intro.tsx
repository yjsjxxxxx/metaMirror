
import React from 'react';
import FadeIn from '../FadeIn';

export default function Intro() {
  return (
    <section className="bg-gradient-to-b from-[#F5F7FB] to-white py-20">
      <div className="max-w-[1280px] mx-auto px-4 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-light text-primary mb-6">
            <strong className="font-bold">我们赋能人类洞察</strong>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-text-grey max-w-3xl mx-auto text-lg mb-8 leading-relaxed">
            数智影像与情感交互实验室是元镜视界与四川传媒学院（简称 “川传”）深度协同打造的专业化平台，聚焦 “AI 赋能影视产业” 与 “AI 影视人才培养” 两大核心方向，既是 AI 影视技术研发与成果转化的载体，也是衔接校园教学与产业需求的人才孵化基地。元镜视界使用户能够在一个便捷平台上通过眼球追踪、皮肤电反应、面部表情分析、脑电图(EEG)、肌电图(EMG)和心电图(ECG)等手段收集并分析人类行为数据。元镜视界产品是基于科学原理的多模态软件套件是目前市场上最全面的人体洞察工具。
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <a
            href="#"
            className="inline-block bg-[#32373c] text-white font-medium py-2 px-6 rounded-full text-sm hover:bg-black transition-colors"
          >
            它是如何工作的?
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
