import React from 'react';
export default function Footer() {
  return (
    <footer className="bg-white"> 
      {/* Main Footer Links */}
      <div className="max-w-[1280px] mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 ">
          <div>
            <h4 className="font-bold text-gray-900 mb-4">产品</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary">元镜视界实验室</a></li>
              <li><a href="#" className="hover:text-primary">元镜视界在线</a></li>
              <li><a href="#" className="hover:text-primary">硬件</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">案例</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary">用户故事</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">培训</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary">认证</a></li>
              <li><a href="#" className="hover:text-primary">研讨会</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">社区</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary">论坛</a></li>
              <li><a href="#" className="hover:text-primary">研究地图</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">支持</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary">联系我们</a></li>
              <li><a href="#" className="hover:text-primary">我的元镜视界</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
          <div className="flex gap-4 mb-4 md:mb-0">
            <img src="https://imotions.com/wp-content/themes/twentytwentytwo_child/assets/images/instagram-icon-grey.svg" alt="Instagram" className="h-6 w-6 opacity-60 hover:opacity-100 cursor-pointer" />
            <img src="https://imotions.com/wp-content/themes/twentytwentytwo_child/assets/images/linkedin-icon-grey.svg" alt="LinkedIn" className="h-6 w-6 opacity-60 hover:opacity-100 cursor-pointer" />
            <img src="https://imotions.com/wp-content/themes/twentytwentytwo_child/assets/images/X-logo-grey.png" alt="X" className="h-6 w-6 opacity-60 hover:opacity-100 cursor-pointer" />
            <img src="https://imotions.com/wp-content/themes/twentytwentytwo_child/assets/images/youtube-icon-grey.svg" alt="YouTube" className="h-6 w-6 opacity-60 hover:opacity-100 cursor-pointer" />
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-primary hover:underline">隐私政策</a>
            <a href="#" className="hover:text-primary hover:underline">条款与条件</a>
            <button className="hover:text-primary hover:underline">Cookie设置</button>
          </div>
        </div>
      </div>
    </footer>
  );
}