import React from 'react';
import FadeIn from '../components/FadeIn';

interface ContactOption {
  title: string;
  description: string;
  action: string;
  icon: React.ReactNode;
  onClick?: () => void;
}
 
const CONTACT_OPTIONS: ContactOption[] = [
  {
    title: "实时演示",
    description: "请参加由我们产品专家为您提供的免费60分钟实时虚拟演示，体验元镜视界平台。随后将由一位顾问与您联系，以根据您的兴趣和需求对演示内容进行特别定制。",
    action: "获取演示",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    onClick: () => {
      // 处理获取演示逻辑
      console.log('获取演示');
    }
  },
  {
    title: "产品咨询",
    description: "想知道我们的哪些解决方案可能适合您?我们将引导您体验最适合您研究类型的软硬件方案。",
    action: "联系我们",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    onClick: () => {
      // 处理联系我们逻辑
      console.log('联系我们');
    }
  },
  {
    title: "技术问题",
    description: "获取硬件或软件问题的帮助。请提交支持工单或通过元镜视界使用帮助中心。",
    action: "帮助说明",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    onClick: () => {
      // 处理帮助说明逻辑
      console.log('帮助说明');
    }
  },
  {
    title: "社区",
    description: "向元镜视界社区提问，其他成员和专家用户将帮助您解答问题。",
    action: "前往社区",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    onClick: () => {
      // 处理前往社区逻辑
      console.log('前往社区');
    }
  }
];

// 单个联系选项组件
const ContactOptionCard: React.FC<{ 
  option: ContactOption; 
  index: number 
}> = React.memo(({ option, index }) => {
  const handleClick = () => {
    if (option.onClick) {
      option.onClick();
    }
  };

  return (
    <FadeIn key={`${option.title}-${index}`} delay={index * 0.1} className="h-full">
      <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-start border border-gray-100 focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent">
        <div className="mb-6 p-4 bg-gray-50 rounded-full" aria-hidden="true">
          {option.icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{option.title}</h3>
        <p className="text-text-grey mb-8 flex-grow leading-relaxed">
          {option.description}
        </p>
        <button 
          className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors w-full md:w-auto text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          onClick={handleClick}
          aria-label={`前往${option.title}`}
        >
          {option.action}
        </button>
      </div>
    </FadeIn>
  );
});

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-[1280px] mx-auto px-4">
        <FadeIn>
          <h1 className="text-4xl font-bold text-center text-primary mt-6 mb-16" tabIndex={0}>
            我们能帮您什么？
          </h1>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {CONTACT_OPTIONS.map((option, index) => (
            <ContactOptionCard 
              key={`${option.title}-${index}`} 
              option={option} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}