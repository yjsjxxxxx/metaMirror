import React, { useState } from 'react';

const categories = [
    { id: 'software', label: '软件平台' },
    { id: 'modules', label: '模块' },
    { id: 'hardware', label: '硬件' },
];
const softwareItems = [
    {
        title: '元镜视界实验室',
        description: 'AI 影视技术研发与成果转化的载体.',
        icon: '/src/assets/home/software1.png'
    },
    {
        title: '元镜视界教育',
        description: 'AI影视产业专业人才孵化',
        icon: '/src/assets/home/software2.png'
    },
    {
        title: 'AI情感分析',
        description: '消费者情绪数据分析',
        icon: '/src/assets/home/software3.png'
    }
];
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
const hardwareItems = [
    {
        title: '元镜Record',
        description: '从“事后追溯”到“实时协同',
    },
    {
        title: '元镜Cine',
        description: 'AI影以 “采集 + 分析” 重构影视情感评测价值视产业专业人才孵化',
    },
    {
        title: '元镜Emotion',
        description: '打通情绪共鸣的双向链路',
    }
];
export default function MegaMenu() {
    const [activeCategory, setActiveCategory] = useState('software');

    return (
        <div className="w-full  absolute top-full left- w-fullshadow-xl border-t border-gray-100 z-40">
            <div className="max-w-[1000px] mx-auto flex  border-t-2 border-[#00AAC1]   ">
                {/* Sidebar */}
                <div className="w-[280px]  pl-6 border-r border-gray-100 py-8 bg-white rounded-bl-lg ">
                    <ul className="space-y-2">
                        {categories.map((cat) => (
                            <React.Fragment key={cat.id}>
                                <li>
                                    <button
                                        onMouseEnter={() => setActiveCategory(cat.id)}
                                        className={`w-full text-left px-6 py-2 text-[15px] font-semibold transition-colors flex items-center justify-between border-l-[3px] ${activeCategory === cat.id
                                            ? 'text-[#00AAC1] border-[#00AAC1'
                                            : 'text-gray-700 hover:text-[#00AAC1] border-transparent'
                                            }`}
                                    >
                                        {cat.label}
                                    </button>
                                </li>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-10 bg-[#F5F7FB]  rounded-br-lg">
                    {activeCategory === 'software' && (
                        <div className="h-full flex flex-col">
                            <div className="grid grid-cols-2 gap-x-12 gap-y-12 mb-auto">
                                {softwareItems.map((item, idx) => (
                                    <a key={idx} href="#" className="flex gap-5 group items-start">
                                        <div className="flex-shrink-0 w-10 h-10 mt-1">
                                            <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-base group-hover:text-primary transition-colors mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-[13px] text-gray-500 leading-relaxed">
                                                {item.description}
                                                {item.title === 'Media Analytics' && (
                                                    <span className="block mt-1 underline decoration-gray-400 underline-offset-2">
                                                        The Media Analytics platform measures emotional engagement and consumer responses by analyzing facial movements.
                                                    </span>
                                                )}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>


                        </div>
                    )}

                    {/* Placeholder for other categories */}
                    {activeCategory === 'modules' && (
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                            {modules.map((mod, idx) => (
                                <a key={idx} href="#" className="group hover:underline underline-offset-4 flex items-center text-center space-x-5 hover:bg-gray-50 rounded-xl transition-colors">
                                    <div
                                        className="w-8 h-8 rounded-lg flex items-center justify-center "
                                        style={{ backgroundColor: mod.color }}>
                                        <img src={`/src/assets/home/icon/${idx + 1}.png`} alt={mod.name} className="w-5 h-5 object-contain brightness-0 invert transition-transform group-hover:scale-130 " />
                                    </div>
                                    <span>{mod.name}</span>
                                </a>
                            ))}
                        </div>
                    )}


                    {activeCategory === 'hardware' && (
                        <div className="h-full flex flex-col">
                            <div className="grid grid-cols-2 gap-x-12 gap-y-12 mb-auto">
                                {hardwareItems.map((item, idx) => (
                                    <a key={idx} href="#" className="flex gap-5 group items-start">
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-base group-hover:text-primary transition-colors mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-[13px] text-gray-500 leading-relaxed">
                                                {item.description}
                                                {item.title === 'Media Analytics' && (
                                                    <span className="block mt-1 underline decoration-gray-400 underline-offset-2">
                                                        The Media Analytics platform measures emotional engagement and consumer responses by analyzing facial movements.
                                                    </span>
                                                )}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>


                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
