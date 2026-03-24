import FadeIn from '../FadeIn';
import type { FC } from 'react';

interface FeatureCardProps {
    number: string;
    title: string;
    description: string;
    hoverText: string;
    delay?: number;
}

const FeatureCard: FC<FeatureCardProps> = ({
    number,
    title,
    description,
    hoverText,
    delay = 0
}) => (
    <FadeIn delay={delay}>
        <div className="white-card">
            <div className="card-num gradient-text">{number}</div>
            <h3 className="card-title">{title}</h3>
            <p className="card-desc">{description}</p>
            <div className="hover-expand">{hoverText}</div>
        </div>
    </FadeIn>
);

const featuresData = [
    {
        number: '01 / ENTRY',
        title: '创作入口',
        description: '提供剧本生成、分镜推演等核心创作工具，精准找到目标观众共鸣点。',
        hoverText: '落地前沿 AI 知识库与实训设备，用情感穿透力弥补资源短板。'
    },
    {
        number: '02 / SERVICE',
        title: '服务入口',
        description: '针对影视公司提供差异化服务，打通评测到宣发的全周期需求。',
        hoverText: '通过情感大模型预判情节能引发的共鸣点，彻底终结自嗨式创作。'
    },
    {
        number: '03 / RESOURCE',
        title: '资源入口',
        description: '无缝对接拍摄基地与资方，形成工具与人才的良性产业闭环。',
        hoverText: '将企业真实需求转化为校园教学案例与 AI 迭代方向，赋能生态。'
    }
];

const EnginePage: FC = () => {
    return (
        <section id="engine" className="container">
            <FadeIn>
                <header className="section-header">
                    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tighter leading-none">
                        元镜视界AI引擎
                    </h3>
                    <p className="section-subtitle">为创作、服务与资源提供全链路支撑体系。</p>
                </header>
            </FadeIn>

            <div className="grid-3">
                {featuresData.map((feature, index) => (
                    <FeatureCard
                        key={feature.title}
                        number={feature.number}
                        title={feature.title}
                        description={feature.description}
                        hoverText={feature.hoverText}
                        delay={index * 0.1}
                    />
                ))}
            </div>
            <FadeIn delay={0.3}>
                <div className="section-action">
                    <a href="/engine" className="btn btn-outline">
                        了解更多 AI 引擎
                    </a>
                </div>
            </FadeIn>
        </section>
    );
};

export default EnginePage;