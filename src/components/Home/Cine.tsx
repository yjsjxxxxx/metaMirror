import FadeIn from '../FadeIn';
import type { FC } from 'react';

interface CineFeatureProps {
  title: string;
  description: string;
  delay?: number;
}

const CineFeature: FC<CineFeatureProps> = ({ title, description, delay = 0 }) => (
  <FadeIn delay={delay}>
    <div className="cine-box">
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
    </div>
  </FadeIn>
);

// 定义评测系统特性数据
const cineFeatures = [
  {
    title: '无感数据采集',
    description: '影院搭载智能设备，实时捕捉观众心跳与脑电波，精准记录情绪起伏。',
    delay: 0
  },
  {
    title: '大模型深度分析',
    description: '实时量化处理生理数据，生成可视化的全片情绪波动曲线与热力图。',
    delay: 0.1
  },
  {
    title: '量化决策参考',
    description: '输出"AI+影评人"专业报告，为剪辑优化与降低排排片风险提供坚实依据。',
    delay: 0.2
  }
];

const CinePage: FC = () => {
  return (
    <section id="cine" className="bg-gray-section">
      <div className="container">
        <FadeIn>
          <header className="section-header">
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tighter leading-none">
              元镜Cine评测系统
            </h3>
            <p className="section-subtitle">从"主观感受"到"数据指标"的市场风向标。</p>
          </header>
        </FadeIn>

        <div className="cine-grid">
          {cineFeatures.map((feature, index) => (
            <CineFeature
              key={feature.title}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="section-action">
            <a href="/cine" className="btn btn-outline">
              了解更多 Cine 评测系统
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CinePage;