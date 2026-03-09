
import React from 'react';
import FadeIn from '../FadeIn';

export default function SolutionsSection() {
  return (
    <section className="bg-gradient-to-br from-[#073465] to-[#000F21] py-20 text-white">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-24 mb-20 ">
          <FadeIn>
              <h2 className="text-4xl font-light mb-6">
                元镜视界用于人类行为研究的软件解决方案<br />
              </h2>
              <p className="text-tertiary/80 mb-6 leading-relaxed">
                我们已开发出全球领先的平台监测系统，用于分析人类行为的驱动因素。鉴于我们的大部分行动、决策和动机都发生在意识觉察范围之外，我们协助科学家和企业理解这些潜藏于我们行为背后的隐藏因素。我们使您能够利用最新的神经科学工具，在各种应用领域内深化这一认知。
              </p>
              <a href="#" className="inline-block bg-orange text-white font-bold py-3 px-8 rounded-full hover:bg-orange/90 transition-colors">
                探索我们的解决方案
              </a>
          </FadeIn>
          <FadeIn direction="left" delay={0.2}>
              <img
                src="https://imotions.com/wp-content/uploads/2023/01/AdobeStock_430347554-1024x683.jpeg"
                alt="Human Behavior Research"
                className="rounded-[26px] shadow-2xl w-full"
              />
          </FadeIn>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Consumer Insights */}
          <FadeIn delay={0.3}>
            <div>
              <h3 className="font-bold mb-6 text-lg">消费者洞察</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-tertiary/80 hover:text-white hover:underline">娱乐与媒体内容测试</a></li>
                <li><a href="#" className="text-tertiary/80 hover:text-white hover:underline">广告测试面部编码</a></li>
                <li><a href="#" className="text-tertiary/80 hover:text-white hover:underline">用户体验研究</a></li>
                <li><a href="#" className="text-tertiary/80 hover:text-white hover:underline">市场研究</a></li>
                <li><a href="#" className="text-tertiary/80 hover:text-white hover:underline">神经营销与消费者神经科学</a></li>
                <li><a href="#" className="text-tertiary/80 hover:text-white hover:underline">感官研究</a></li>
                <li><a href="#" className="text-tertiary/80 hover:text-white hover:underline">产品设计</a></li>
              </ul>
            </div>
          </FadeIn>

          {/* Academia */}
          <FadeIn delay={0.4}>
            <div>
              <h3 className="font-bold mb-6 text-lg">学术研究</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-tertiary/80 hover:text-white hover:underline">教育研究</a></li>
                <li><a href="#" className="text-tertiary/80 hover:text-white hover:underline">心理健康与医学研究</a></li>
                <li><a href="#" className="text-tertiary/80 hover:text-white hover:underline">传播研究</a></li>
                <li><a href="#" className="text-tertiary/80 hover:text-white hover:underline">商业与营销</a></li>
                <li><a href="#" className="text-tertiary/80 hover:text-white hover:underline">心理学研究工具</a></li>
                <li><a href="#" className="text-tertiary/80 hover:text-white hover:underline">元镜视界AI教育</a></li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
