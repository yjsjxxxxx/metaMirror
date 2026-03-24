import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradientClass: string;
  iconBg: string;
}

export default function FeatureCard({ title, description, icon, gradientClass, iconBg }: FeatureCardProps) {
  return (
    <div className="h-full group relative p-6 md:p-8 bg-white rounded-[2rem] border border-gray-100 hover:border-teal-100 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-50 overflow-hidden">
      <div className={`absolute top-0 right-0 w-32 h-32 ${gradientClass} opacity-50 blur-3xl group-hover:opacity-100 transition-opacity`}></div>
      <div className="relative z-10">
        <div className={`w-16 h-16 ${iconBg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
          <span className="w-8 h-8 flex items-center justify-center">
            {icon}
          </span>
        </div>
        <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{title}</h4>
        <p className="text-gray-500 leading-relaxed font-medium">{description}</p>
      </div>
    </div>
  );
}