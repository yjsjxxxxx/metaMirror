 
import React from 'react';
import FadeIn from '../FadeIn';

const logos = [
  'https://imotions.com/wp-content/uploads/2022/09/HarvardUniversity-logo.png',
  'https://imotions.com/wp-content/uploads/2022/10/michigan.png',
  'https://imotions.com/wp-content/uploads/2024/02/University-of-Manchester.webp',
  'https://imotions.com/wp-content/uploads/2022/10/ncstate-brick-2x2-red-max-300x144.png',
  'https://imotions.com/wp-content/uploads/2024/02/cambridge-university-logo-jpg.webp',
  'https://imotions.com/wp-content/uploads/2022/09/McGill-University-logo.svg',
  'https://imotions.com/wp-content/uploads/2022/03/1246px-Texas_AM_University_logo.svg-1024x842.png',
  'https://imotions.com/wp-content/uploads/2022/09/Oxford-University-square-logo.png',
  'https://imotions.com/wp-content/uploads/2024/02/stanford-university-stacked.webp',
  'https://imotions.com/wp-content/uploads/2024/02/Kyoto_University_logo.webp',
  'https://imotions.com/wp-content/uploads/2018/04/Purdue-University-Logo-1024x576.png',
  'https://imotions.com/wp-content/uploads/2024/02/University-of-South-Florida-Logo-1024x208.webp'
];

export default function LogosSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 mb-20">
      <FadeIn>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-2"><strong className="font-bold">被顶尖大学使用</strong></h2>
        </div>
      </FadeIn>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {logos.map((logo, idx) => (
          <FadeIn  delay={idx * 0.05} className="w-full h-full flex items-center justify-center">
            <div className="w-full h-20 flex items-center justify-center p-2">
              <img src={logo} alt="University Logo" className="max-w-full max-h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
