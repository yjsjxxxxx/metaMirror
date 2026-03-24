import FadeIn from '../FadeIn';
import type { FC } from 'react';

interface SolutionItemProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

const SolutionItem: FC<SolutionItemProps> = ({
  icon,
  title,
  description,
  delay = 0
}) => (
  <FadeIn delay={delay}>
    <div className="solution-item">
      <div className="sol-icon">{icon}</div>
      <div className="sol-text">
        <h3>{title}</h3>
        <p style={{ color: 'var(--text-body)', fontSize: '0.95rem' }}>{description}</p>
      </div>
    </div>
  </FadeIn>
);

// 解决方案数据
const solutions = [
  {
    icon: '🎯',
    title: '内容评测与发行优化',
    description: '针对院线电影、网络短剧提供映前量化测试，优化剪辑节奏与宣发策略。',
    delay: 0
  },
  {
    icon: '🎓',
    title: '产学研一体化实训',
    description: '联合高校构建"AI+影视"双驱平台，提供前沿设备赋能复合型人才培养。',
    delay: 0.1
  }
];

const SolutionPage: FC = () => {
  return (
    <section id="solution" className="bg-gray-section">
      <div className="container">
        {/* // <section id="solution" className="container " style={{ paddingTop: '40px', paddingBottom: '60px' }}> */}
        <FadeIn>
          <header className="section-header">
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tighter leading-none">
              探索解决方案
            </h3>
            <p className="section-subtitle">为行业与学术研究提供定制化的数智影像支持。</p>
          </header>
        </FadeIn>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <SolutionItem
              key={solution.title}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              delay={solution.delay}
            />
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="section-action">
            <a href="/solutions" className="btn btn-outline">
              浏览所有解决方案
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default SolutionPage;