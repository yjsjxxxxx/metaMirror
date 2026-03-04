import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Section } from './ui/Section';

const news = [
  {
    title: 'iMotions Launches New Motion Capture Module',
    date: 'Feb 28, 2026',
    category: 'Product News',
    image: 'https://picsum.photos/seed/mocap/600/400',
  },
  {
    title: 'Multiface Analysis in Action: Advanced Methods',
    date: 'Feb 15, 2026',
    category: 'Blog',
    image: 'https://picsum.photos/seed/facial/600/400',
  },
  {
    title: '5 Foundational Eye-Tracking Experiments',
    date: 'Jan 22, 2026',
    category: 'Research',
    image: 'https://picsum.photos/seed/eyetracking/600/400',
  },
];

export function News() {
  return (
    <Section className="bg-slate-50">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
            Stay Updated
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Latest from iMotions
          </h2>
        </div>
        <a href="#" className="hidden md:flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors">
          View all news <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {news.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
          >
            <div className="relative overflow-hidden aspect-video">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-700">
                {item.category}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-slate-400 text-xs mb-3">
                <Calendar className="w-3 h-3 mr-1" />
                {item.date}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors line-clamp-2">
                {item.title}
              </h3>
              <a href="#" className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700">
                Read more <ArrowRight className="ml-1 w-3 h-3" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8 text-center md:hidden">
        <a href="#" className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors">
          View all news <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </Section>
  );
}
