import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import FadeIn from '../FadeIn';

const cases = [
  {
    title: '短剧快速工业化生产',
    description: 'AI辅助剧本与分镜，3天完成拍摄',
    thumbnail: 'https://picsum.photos/seed/video1/640/360',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Using a sample video
  },
  {
    title: '品牌广告创意生成',
    description: '多风格视觉尝试，提升转化率',
    thumbnail: 'https://picsum.photos/seed/video2/640/360',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    title: '电商直播切片自动化',
    description: '智能识别高光时刻，自动剪辑分发',
    thumbnail: 'https://picsum.photos/seed/video3/640/360',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    title: '企业宣传片智能制作',
    description: '从素材到成片，一站式交付',
    thumbnail: 'https://picsum.photos/seed/video4/640/360',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];

export default function VideoCaseSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-10 md:mb-16 px-4 max-w-7xl mx-auto">
        <FadeIn>
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tighter leading-none">OpenClaw影视案例集</h2>
            <p className="text-gray-500 text-xl font-medium leading-relaxed">
              多风格 AI 团队协同创作，从创意到成片零人工参与
            </p>
          </div>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
        {cases.map((item, index) => (
          <FadeIn delay={index * 0.1} className="">
            <div key={index} className="group relative cursor-pointer rounded-2xl overflow-hidden bg-neutral-100" onClick={() => setSelectedVideo(item.videoUrl)}>
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 border border-white/30">
                    <Play size={18} fill="white" className="text-white ml-0.5" />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border-x border-b border-gray-100 rounded-b-2xl">
                <h4 className="text-base font-bold text-gray-900 mb-1 tracking-tight truncate">{item.title}</h4>
                <p className="text-gray-500 text-[10px] font-medium truncate">{item.description}</p>
              </div>
            </div>
          </FadeIn>

        ))}
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setSelectedVideo(null)}>
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 z-10 p-2  bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              onClick={() => setSelectedVideo(null)} >
              <X size={24} />
            </button>
            <iframe
              src={selectedVideo}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
