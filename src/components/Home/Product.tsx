import FadeIn from '../FadeIn';
import type { FC } from 'react';

interface HardwareCardProps {
  iconSrc: string;
  title: string;
  subtitle: string;
  description: string;
  delay?: number;
}

const HardwareCard: FC<HardwareCardProps> = ({
  iconSrc,
  title,
  subtitle,
  description,
  delay = 0
}) => (
  <FadeIn delay={delay}>
    <div className="hw-card">
      <div className="hw-icon-box">
        <img src={iconSrc} alt={title} className="w-10 h-10" />
      </div>
      <div>
        <h3>{title}</h3>
        <h4 className="gradient-text">{subtitle}</h4>
        <p>{description}</p>
      </div>
    </div>
  </FadeIn>
);

// 硬件产品数据
const hardwareProducts = [
  {
    iconSrc: '/images/claw/record.png',
    title: '元镜Record',
    subtitle: '影视片场专属 AI 记录仪',
    description: '从事后追溯到实时协同。全维度记录镜头、灯光、收音及演员微表情。数据实时同步导演与后期端，避免初心与成片的情感偏差。',
    delay: 0
  },
  {
    iconSrc: '/images/claw/emotion.png',
    title: '元镜Emotion',
    subtitle: '情绪共鸣双向终端',
    description: '捕捉双向反馈。对演员采集生理数据推荐共情表演；对观众捕捉心率泪点生成热力图，彻底解决"表演到位但观众不共情"的断层痛点。',
    delay: 0.1
  }
];

const HardwarePage: FC = () => {
  return (
    <section id="hardware" className="container ">
      <FadeIn>
        <header className="section-header">
             <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tighter leading-none">
            智能硬件终端
          </h3>
          <p className="section-subtitle">打通线上与线下，连接创作与观众的双向链路。</p>
        </header>
      </FadeIn>

      <div className="hw-grid">
        {hardwareProducts.map((product, index) => (
          <HardwareCard
            key={product.title}
            iconSrc={product.iconSrc}
            title={product.title}
            subtitle={product.subtitle}
            description={product.description}
            delay={product.delay}
          />
        ))}
      </div>

      <FadeIn delay={0.2}>
        <div className="section-action">
          <a href="/product" className="btn btn-outline">
            了解更多 硬件终端
          </a>
        </div>
      </FadeIn>
    </section>
  );
};

export default HardwarePage;