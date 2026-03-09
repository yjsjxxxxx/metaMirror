import React from 'react';

const consumerLinks = [
    '娱乐与媒体内容测试',
    '广告测试面部编码',
    '用户体验研究',
    '市场研究',
    '神经营销与消费者神经科学',
    '感官研究'
];

const academicLinks = [
    '教育研究',
    '心理健康与医学研究',
    '传播研究',
    '商业与营销',
    '心理学研究工具',
    '元镜视界AI教育'
];

export default function ApplicationsMenu() {
    return (
        <div className="w-full   absolute top-full left- w-fullshadow-xl border-t border-gray-100 z-40">
            <div className="max-w-[1000px]  bg-white mx-auto flex  border-t-2 border-[#00AAC1]  rounded-b-lg ">
                <div className="w-full flex justify-around  mx-auto py-6 space-x-8 ">
                    {/* Consumer Insights */}
                    <div>
                        <h3 className="text-lg font-normal text-gray-500 border-b border-gray-300 pb-2 mb-6 inline-block w-full">
                            消费者洞察
                        </h3>
                        <ul className="space-y-4">
                            {consumerLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a href="#" className="text-[15px] font-semibold text-gray-900 hover:text-primary transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Academic */}
                    <div>
                        <h3 className="text-lg font-normal text-gray-500 border-b border-gray-300 pb-2 mb-6 inline-block w-full">
                            学术研究
                        </h3>
                        <ul className="space-y-4">
                            {academicLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a href="#" className="text-[15px] font-semibold text-gray-900 hover:text-primary transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}