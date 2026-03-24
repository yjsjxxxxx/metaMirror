import FadeIn from '../FadeIn';
import type { FC } from 'react';
import {
  PenTool,
  Video,
  Music,
  Scissors,
  Share2,
  User,
  Users,
  Building2,
  GraduationCap
} from 'lucide-react';

interface RoleItemProps {
  icon: any;
  title: string;
  subtitle: string;
  delay?: number;
}

const RoleItem: FC<RoleItemProps> = ({ icon: Icon, title, subtitle, delay = 0 }) => (
  <FadeIn delay={delay}>
    <div className="role-item">
      <div className="role-icon">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <div className="role-text">
        {title}<br />{subtitle}
      </div>
    </div>
  </FadeIn>
);

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: FC<FeatureCardProps> = ({ number, title, description, delay = 0 }) => (
  <FadeIn delay={delay}>
    <div className="white-card">
      <div className="card-num gradient-text">{number}</div>
      <h3 className="card-title" style={{ fontSize: '1.25rem' }}>{title}</h3>
      <p className="card-desc">{description}</p>
    </div>
  </FadeIn>
);

const roleConfigurations = [
  { icon: PenTool, title: '编剧', subtitle: '专属配置' },
  { icon: Video, title: '导演', subtitle: '专属配置' },
  { icon: Video, title: '视频生成', subtitle: '专属配置' },
  { icon: Music, title: '音乐生成', subtitle: '专属配置' },
  { icon: Scissors, title: '剪辑', subtitle: '专属配置' },
  { icon: Share2, title: '宣发', subtitle: '专属配置' }
];

const featureCards = [
  {
    number: '01 / SOLO',
    title: '单人 / 小型团队',
    description: '一键多角色整合，单设备完成全流程操作。'
  },
  {
    number: '02 / PRO',
    title: '中型 / 专业团队',
    description: '分岗独立配置与数据互通，打破岗位壁垒。'
  },
  {
    number: '03 / ENTERPRISE',
    title: '头部 / 大型项目',
    description: '全流程智能管控，保障院线级表达一致性。'
  },
  {
    number: '04 / ACADEMY',
    title: '院校影视教学',
    description: '沉浸式体验影视工业化制作流程，学习即实践。'
  }
];

const ClawIconPage: FC = () => {
  return (
    <section id="claw" className="claw-section">
      <div className="container">
        <FadeIn>
          <header className="section-header">
             <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tighter leading-none">
              元镜Claw全链路智能执行者
            </h3>
            <p className="section-subtitle">直击行业痛点。让 AI 从“创作辅助者”跃升为“落地执行者”，支持多角色定制化功能配置。<br/>
              解放繁琐协作，让您重新聚焦情感表达与创作初心。</p>
          </header>
        </FadeIn>

        <div className="claw-roles-list">
          {featureCards.map((card, index) => (
            <FeatureCard
              key={card.title}
              number={card.number}
              title={card.title}
              description={card.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="claw-roles-list">
          {roleConfigurations.map((role, index) => (
            <RoleItem
              key={role.title}
              icon={role.icon}
              title={role.title}
              subtitle={role.subtitle}
              delay={0.4 + index * 0.05}
            />
          ))}
        </div>

        <FadeIn delay={0.8}>
          <div className="section-action">
            <a href="/claw" className="btn btn-outline">
              深入了解 元镜Claw
            </a>
          </div>
        </FadeIn>
      </div>

      {/* SVG Gradient for icons if needed, but Lucide handles it well with stroke */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0aa5d9" />
            <stop offset="100%" stopColor="#41b586" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default ClawIconPage;
