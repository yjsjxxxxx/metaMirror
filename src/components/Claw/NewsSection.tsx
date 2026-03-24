import { ArrowRight } from 'lucide-react';
import FadeIn from '../FadeIn';

export default function NewsSection() {
  const newsItems = [
    {
      type: '政策',
      title: '深圳拟出台政策鼓励“养龙虾”',
      date: '2026-03-8',
      url: 'https://mp.weixin.qq.com/s/4y5qhwgMheNO8MCnI84X4g'
    },

    {
      type: '政策',
      title: '无锡发布“养龙虾”12条',
      date: '2026-03-09',
      url: 'https://mp.weixin.qq.com/s/DUzrGPJsD0id5xL0f1zQrg'
    },
    {
      type: '热点',
      title: '常熟下场“养龙虾”：对“一人公司”最高拟予600万元支持',
      date: '2026-03-10',
      url: 'https://www.toutiao.com/article/7615484989873947199/?&source=m_redirect&wid=1774341617213'
    },
    {
      type: '热点',
      title: '深圳龙岗发布“龙虾十条” 助“一人公司”启动AI创业',
      date: '2026-03-9',
      url: 'https://politics.gmw.cn/2026-03/09/content_38635629.htm'
    },
    {
      type: '热点',
      title: '多地宣布下场“养龙虾” ',
      date: '2026-03-11',
      url: 'https://news.cctv.cn/2026/03/11/ARTIz6cvQYoN0PhJkcPNs2xb260311.shtml'
    }, {
      type: '热点',
      title: '“养龙虾”补贴，爆了',
      date: '2026-03-21',
      url: 'https://mp.weixin.qq.com/s/LIPG34uHpt0G8cpGSsj_wA?scene=1&click_id=30'
    },
    {
      type: '政策',
      title: '最高奖补2500万元！成都拟出台13条举措支持OPC发展',
      date: '2026-03-23',
      url: 'https://mp.weixin.qq.com/s/7Ek8sxfXh6R1OSANODT2gQ'
    },
    {
      type: '政策',
      title: '温州出台17条硬核举措，全力打造人工智能OPC创业高地',
      date: '2026-03-24',
      url: 'https://mp.weixin.qq.com/s/AJusj6HxLZDBamPxsvdtEA?scene=1&click_id=38'
    },
    {
      type: '热点',
      title: '常州，激励“养龙虾”，最高补贴1000万元',
      date: '2026-03-24',
      url: 'https://mp.weixin.qq.com/s/7HlKkeYu7sy7GbPQUpkCFw?scene=1&click_id=31'
    }, {
      type: '方案',
      title: '政策分享 | 一图读懂：广东省支持人工智能OPC创新发展行动方案 ',
      date: '2026-03-24',
      url: 'https://mp.weixin.qq.com/s/nuHdOpDiRxNV_2bBnek-xA?scene=1&click_id=23'
    }

  ];
  const handleNewsClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <section className="">
      <div className="max-w-[1280px] mx-auto relative p-6 md:p-10 bg-neutral-50 rounded-[3rem] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full highlight-gradient-purple opacity-20"></div>

        <div className="relative z-10">
          <FadeIn>

            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-6 md:mb-10">
              <div className="max-w-3xl">
                <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tighter leading-none">行业政策与热点资讯</h3>
                <p className="text-gray-500 text-lg font-medium leading-relaxed">紧跟 AI 影视创作的最前沿动态</p>
              </div>
              <button className="group flex items-center gap-2 text-teal-600 font-bold text-base hover:gap-4 transition-all">
                查看全部 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </FadeIn>
          <div className="flex flex-col gap-1.5">
            {newsItems.map((item, index) => (
              <FadeIn delay={index * 0.1} className="h-full">
                <div key={index}
                  onClick={() => handleNewsClick(item.url)}
                  className="group flex items-center justify-between py-2.5 px-5 bg-white rounded-lg border border-gray-100 hover:border-teal-200 hover:shadow-sm hover:shadow-teal-50/20 transition-all duration-300 cursor-pointer">

                  <div className="flex items-center gap-4 flex-grow">
                    <span className="hidden md:inline-block text-[9px] font-bold px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 uppercase tracking-widest min-w-[45px] text-center">
                      {item.type}
                    </span>
                    <h4 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-teal-600 transition-colors line-clamp-1">
                      {item.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-6 shrink-0">
                    <span className="hidden sm:inline-block text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                      {item.date}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
