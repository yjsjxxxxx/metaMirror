import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="meta-mirror-footer pt-10">
      <div className="footer-dark">
        <div className="footer-dark-inner">
          <div>
            <h4>消费者洞察</h4>
            <ul>
              <li><a href="/media-testing">娱乐与媒体内容测试</a></li>
              <li><a href="/ad-testing">广告测试面部编码</a></li>
              <li><a href="/ux-research">用户体验研究</a></li>
              <li><a href="/market-research">市场研究</a></li>
              <li><a href="/neuromarketing">神经营销与消费者神经科学</a></li>
              <li><a href="/product-design">产品设计</a></li>
            </ul>
          </div>
          <div>
            <h4>学术研究</h4>
            <ul>
             <li><a href="/psychology-tools">心理学研究工具</a></li>
              <li><a href="/business-marketing-research">商业与市场营销研究</a></li>
              <li><a href="/education-research">教育研究</a></li>
              <li><a href="/smart-classroom">智能教室解决方案</a></li>
              <li><a href="/education-lab">教育实验室</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-light">
        <div className="footer-light-inner">
          <div className="footer-links-grid">
            <div>
              <h4>产品</h4>
              <ul>
                <li><a href="#">元镜视界实验室</a></li>
                <li><a href="#">元镜视界在线</a></li>
                <li><a href="#">硬件</a></li>
              </ul>
            </div>
            <div>
              <h4>案例</h4>
              <ul>
                <li><a href="#">用户故事</a></li>
              </ul>
            </div>
            <div>
              <h4>培训</h4>
              <ul>
                <li><a href="#">认证</a></li>
                <li><a href="#">研讨会</a></li>
              </ul>
            </div>
            <div>
              <h4>社区</h4>
              <ul>
                <li><a href="#">论坛</a></li>
                <li><a href="#">研究地图</a></li>
              </ul>
            </div>
            <div>
              <h4>支持</h4>
              <ul>
                <li><a href="#">联系我们</a></li>
                <li><a href="#">我的元镜视界</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="social-icons">
              <a href="#">◎</a>
              <a href="#">in</a>
              <a href="#">𝕏</a>
              <a href="#">▶</a>
            </div>
            <div className="legal-links">
              <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2026010732号</a>
              <a href="#">隐私政策</a>
              <a href="#">条款与条件</a>
              <a href="#">Cookie设置</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
