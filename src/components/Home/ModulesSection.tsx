import React from 'react';
import FadeIn from '../FadeIn';

const modules = [
  { name: '眼球追踪', sub: '基于屏幕', color: '#00AAC1' },
  { name: '眼球追踪VR', sub: '虚拟与混合现实眼动追踪', color: '#00AAC1' },
  { name: '眼球追踪眼镜', sub: '使用眼镜的眼动追踪', color: '#00AAC1' },
  { name: '呼吸', sub: '使用眼镜的眼动追踪', color: '#00AAC1' },
  { name: '皮肤电反应', sub: '心电图/皮肤电反应', color: '#00AAC1' },
  { name: '肌电图', sub: '肌电图', color: '#00AAC1' },
  { name: '脑电图', sub: '脑电图', color: '#00AAC1' },
  { name: '血氧饱和', sub: '通过血液和氧气变化检测大脑活动', color: '#00AAC1' },
  { name: '心电图', sub: '心电图', color: '#00AAC1' },
  { name: '动作捕捉', sub: '仅使用视频追踪人体运动学', color: '#00AAC1' },
  { name: '语音分析', sub: '情绪与语言特征', color: '#3F73B1' },
  { name: '面部表情分析', sub: '面部表情分析', color: '#3F73B1' },
  { name: '摄像头眼动跟踪', sub: '网络摄像头眼动跟踪', color: '#3F73B1' },
  { name: '多面表情分析', sub: '用于多面部追踪的FEA插件', color: '#3F73B1' },
  { name: '远程数据采集', sub: '收集网络/FEA/呼吸和语音', color: '#2265A8' },
  { name: '自动化AOI', sub: '自动化AOI', color: '#3F73B1' },
];

export default function ModulesSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 mb-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {modules.map((mod, idx) => (
          <FadeIn delay={idx * 0.05}>
            <a key={idx} href="#" className="group hover:underline underline-offset-4 flex items-center text-center border border-[#abb8c3] p-4  space-x-5 hover:bg-gray-50 rounded-xl transition-colors">
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center "
                style={{ backgroundColor: mod.color }} >
                <img src={`/src/assets/home/icon/${idx + 1}.png`} alt={mod.name} className="w-8 h-8 object-contain brightness-0 invert transition-transform group-hover:scale-130 " />
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="font-semibold text-sm text-gray-900 mb-1 text-start  transition-transform group-hover:text-[--module-color]">
                  {mod.name}</h3>
                <p className="text-xs text-gray-500 text-start">
                  {mod.sub}

                </p>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
