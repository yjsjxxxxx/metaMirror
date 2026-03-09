import React from 'react';
import FadeIn from '../components/FadeIn';

export default function FeaturesPage() {
    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
            <FadeIn>
                <div className="flex  flex-col justify-center h-[70vh] mb-20 relative ">
                    <div className="max-w-[1280px] pl-40 text-left z-10">
                        <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6 tracking-tight">
                            元镜视界
                        </h1>
                        <p className="text-3xl md:text-5xl text-white font-bold text-primary leading-tight">
                            十年磨一剑的创新打造
                        </p>
                    </div>
                    <div className="w-full h-full  absolute top-0 left-0 opacity-90">
                        <img src="/src/assets/home/banner1.jpg" alt="" className="w-full h-full object-cover object-left"/>
                    </div>
                </div>
            </FadeIn>
            <div className="max-w-[1280px] mx-auto px-4 ">
                {/* Section 1 */}
                <FadeIn delay={0.2}>
                    <div className="mb-20">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6  pl-4">
                            窥探人类情绪的全貌
                        </h2>
                        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                            <p className="text-text-main leading-relaxed mb-6 text-lg">
                                2015年，我们怀着大胆的愿景出发:赋予研究人员力量去洞察表象之下的人们真实情绪与行为，而无需依赖任何单一设备或方法。
                            </p>
                            <p className="text-text-main leading-relaxed text-lg">
                                十年后，我们的用户正与我们一起实践着我们的愿景。如今，元镜视界已成为首屈一指的多模态情绪研究平台，受到全国各领域的科学家、教育工作者及企业界的信赖。
                            </p>
                        </div>
                    </div>
                </FadeIn>

                {/* Section 2 */}
                <FadeIn delay={0.4}>
                    <div className="mb-20">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6  pl-4">
                            见证元镜视界创新的里程碑
                        </h2>
                        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                            <p className="text-text-main leading-relaxed text-lg">
                                元镜视界公司的创立愿景是开发非侵入式情感感应技术，并将重点主要放在AI层面。远程眼动追踪是首个利用瞳孔、眨眼和视线来估算情感反应的传感器模式。通过首轮种子资金筹集，公司得以聘用人员并开始构建产品及业务。确定的第一目标市场是情绪营销一-一个新兴领域，它将神经科学、生物传感器与营销学相结合。
                            </p>
                        </div>
                    </div>
                </FadeIn>

                {/* Section 3 */}
                <FadeIn delay={0.6}>
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-10  pl-4">
                            元镜视界测试
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
                            {/* Card 1 */}
                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="w-full sm:w-1/2 relative group cursor-pointer overflow-hidden rounded-xl">
                                    <img
                                        src="/src/assets/features/1.avif"
                                        alt="Mario Kart"
                                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                   
                                </div>
                                <div className="w-full sm:w-1/2 flex flex-col justify-between py-1">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">马里奥赛车:从数据到洞察</h3>
                                        <p className="text-text-grey text-sm mb-4 leading-relaxed">
                                            通过面部表情分析和眨眼来观察参与度。
                                        </p>
                                    </div>
                                    <div>
                                        <button className="text-secondary font-bold text-sm hover:underline mb-2 flex items-center gap-1 cursor-pointer">
                                            【观看演示】
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="w-full sm:w-1/2 relative group cursor-pointer overflow-hidden rounded-xl">
                                    <img
                                        src="/src/assets/features/2.avif"
                                        alt="Analysis"
                                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                   
                                </div>
                                <div className="w-full sm:w-1/2 flex flex-col justify-between py-1">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">马里奥赛车:更多传感器，更深入洞察</h3>
                                        <p className="text-text-grey text-sm mb-4 leading-relaxed">
                                            更复杂的多模态分析，从心电图呼吸、血压、语音和FEA等角度审视碰撞事件中的参与度
                                        </p>
                                    </div>
                                    <div>
                                        <button className="text-secondary font-bold text-sm hover:underline mb-2 flex items-center gap-1 cursor-pointer">
                                            【观看演示】
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="w-full sm:w-1/2 relative group cursor-pointer overflow-hidden rounded-xl">
                                    <img
                                        src="/src/assets/features/3.avif"
                                        alt="GoKart"
                                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                   
                                </div>
                                <div className="w-full sm:w-1/2 flex flex-col justify-between py-1">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">卡丁车竞速:实验室外的研究</h3>
                                        <p className="text-text-grey text-sm mb-4 leading-relaxed">
                                            我们携带了眼动追踪眼镜、EMG传感器、呼吸带和ECG监测设备前往卡丁车赛道，以在真实驾驶场景中测量驾驶员的注意力、压力、唤醒状态和制动行为。
                                        </p>
                                    </div>
                                    <div>
                                        <button className="text-secondary font-bold text-sm hover:underline mb-2 flex items-center gap-1 cursor-pointer">
                                            【观看演示】
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
