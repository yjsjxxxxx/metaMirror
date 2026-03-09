import React from 'react';
import FadeIn from '../FadeIn';

const news = [
  {
    title: 'iMotions Launches New Motion Capture Module',
    date: '02.26.26',
    link: '#'
  },
  {
    title: 'iMotions Product & Feature News – February 2026',
    date: '02.18.26',
    link: '#'
  },
  {
    title: 'iMotions Launches iMotions 11, Delivering Increased Speed, Flexibility, Insight to Human Behavior Research',
    date: '11.05.25',
    link: '#'
  },
  {
    title: 'iMotions Integrates Neurable Headset into Human Behavior Research Platform',
    date: '10.21.25',
    link: '#'
  }
];

const inspiration = [
  {
    title: 'Multiface Analysis in Action: Advanced Methods for Studying Facial Expressions in Group Settings',
    category: 'Academia',
    readTime: '8 min read',
    author: 'Dr. Divya Seernani',
    date: '25/02/2026',
    image: 'https://imotions.com/wp-content/uploads/2026/02/Artboard-1@2x-420x236-png.avif'
  },
  {
    title: 'Memory and Visual Attention: 5 Foundational Eye-Tracking Experiments',
    category: 'Academia',
    readTime: '5 min read',
    author: 'Morten Pedersen',
    date: '13/02/2026',
    image: 'https://imotions.com/wp-content/uploads/2025/09/Memory-Mod-1-420x304-png.avif'
  },
  {
    title: 'How Hidden Markov Models Are Used To Improve Webcam Eye Tracking',
    category: 'Hardware',
    readTime: '7 min read',
    author: 'Dr. Divya Seernani',
    date: '04/02/2026',
    image: 'https://imotions.com/wp-content/uploads/2026/02/Artsy-Markov-Model-Illustration-420x235-jpeg.avif'
  },
  {
    title: 'Top 5 Dyslexia Research Study Designs With Eye-Tracking',
    category: 'Academia',
    readTime: '5 min read',
    author: 'Morten Pedersen',
    date: '03/02/2026',
    image: 'https://imotions.com/wp-content/uploads/2026/02/Dyslexia-Banner-420x280-jpeg.avif'
  }
];

export default function NewsSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 mb-20 mt-20">
      {/* News */}
      <FadeIn>
        <h2 className="text-3xl font-bold text-primary text-center mb-8">News</h2>
      </FadeIn>
      <div className="grid md:grid-cols-4 gap-6 mb-20">
        {news.map((item, idx) => (
          <FadeIn delay={idx * 0.1} className="h-full">
            <a key={idx} href={item.link} className="bg-tertiary rounded-2xl p-6 hover:bg-gray-100 transition-colors flex flex-col justify-between h-full">
              <h3 className="font-semibold text-gray-900 mb-4 line-clamp-4">{item.title}</h3>
              <span className="text-xs text-soft-grey">{item.date}</span>
            </a>
          </FadeIn>
        ))}
      </div>

      {/* Inspiration */}

      <div className="flex justify-between items-center mb-8">
        <FadeIn>
          <h2 className="text-2xl font-bold text-gray-900">Inspiration from the blog</h2>
        </FadeIn>
        {/* <a href="#" className="text-primary font-medium hover:underline">Browse Customer Stories</a> */}
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {inspiration.map((post, idx) => (
          <a key={idx} href="#" className="group">
            <FadeIn delay={0.2 + (idx * 0.1)}>
              <div className="rounded-xl overflow-hidden mb-4 h-48">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex items-center gap-2 text-xs text-soft-grey mb-2">
                <span className="bg-gray-100 px-2 py-1 rounded">{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-4 line-clamp-3 group-hover:text-primary transition-colors">{post.title}</h3>
              <div className="flex justify-between items-center text-xs text-soft-grey border-t border-gray-100 pt-4">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </FadeIn>
          </a>
        ))}
      </div>
    </section>
  );
}
