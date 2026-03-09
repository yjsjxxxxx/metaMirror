
import React from 'react';
import FadeIn from '../FadeIn';

const products = [
  {
    name: 'Just Act Natural – Neon Eye Tracking Glasses',
    brand: 'Pupil Labs',
    image: '/src/assets/home/yuanjingProd1.png'
  },
  {
    name: 'Shimmer3 GSR+ Kit',
    brand: 'Shimmer Research',
    image: '/src/assets/home/yuanjingProd2.png'
  },
  {
    name: 'Varjo XR-4',
    brand: 'Varjo',
    image: '/src/assets/home/yuanjingProd3.png'
  }
];

const brands = [
  'https://imotions.com/wp-content/uploads/2022/06/Advanced-Brain-Monitoring-transparent-background-420x105.webp',
  'https://imotions.com/wp-content/uploads/2022/11/Affectiva_logo_pink_hd-300x84.png',
  'https://imotions.com/wp-content/uploads/2022/11/Argus-Science-Logo-768x312-1-300x122.png',
  'https://imotions.com/wp-content/uploads/2025/03/artinis-logo-420x136.png',
  'https://imotions.com/wp-content/uploads/2023/07/audEERING_logo-300x55.webp',
  'https://imotions.com/wp-content/uploads/2022/05/biopac-blue-5in-420x153.webp'
];

export default function HardwareSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 mb-20">
      <div className="bg-tertiary rounded-2xl p-8 md:p-12">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">选购元镜产品</h2>
              <p className="text-text-grey text-sm">我们支持并合作了全球超过10家，最大的AI硬件公司</p>
            </div>
            <a href="#" className="mt-4 md:mt-0 bg-[#32373c] text-white text-sm font-medium py-2 px-6 rounded-full hover:bg-black transition-colors">
              开始浏览
            </a>
          </div>
        </FadeIn>

        {/* Products */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {products.map((prod, idx) => (
            <FadeIn delay={idx * 0.1} className="h-full">
              <a href="#" className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center h-full">
                <img src={prod.image} alt={prod.name} className="h-40 w-auto object-contain mb-4" />
                <p className="text-xs text-orange font-semibold uppercase tracking-wide mb-1">{prod.brand}</p>
                <h3 className="text-sm font-bold text-gray-900">{prod.name}</h3>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Brands */}
        <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
          {brands.map((brand, idx) => (
            <FadeIn delay={0.3 + (idx * 0.05)}>
              <img src={brand} alt="Brand" className="h-8 md:h-10 w-auto object-contain" />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
