import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, GraduationCap, ShoppingBag } from 'lucide-react';
import { Section } from './ui/Section';

const consumerSolutions = [
  'Entertainment & Media Content Testing',
  'Facial Coding for Ad Testing',
  'UX Research',
  'Market Research',
  'Neuromarketing',
  'Sensory Research',
  'Product Design',
];

const academicSolutions = [
  'Education Research',
  'Health and Medicine Research',
  'Communications Research',
  'Business and Marketing',
  'Psychology Research Tools',
  'EduLabs',
  'iMotions Education',
];

export function Solutions() {
  return (
    <Section className="bg-slate-900 text-white">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
        {/* Left Column: Intro */}
        <div>
          <span className="text-teal-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
            Solutions
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            iMotions software solutions for Human Behavior Research
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            We’ve developed the world’s leading platform for monitoring and analyzing the drivers of human behavior. Given that much of our actions, decision-making, and motivation occurs outside of conscious awareness, we help scientists and businesses understand these hidden factors.
          </p>
          <div className="flex items-center gap-4 text-slate-300 mb-8">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center font-bold text-teal-400 border border-slate-700">
              75%
            </div>
            <p className="text-sm max-w-xs">
              More than 3/4 of the world’s top 100 universities use our platform.
            </p>
          </div>
          <button className="inline-flex items-center text-teal-400 font-semibold hover:text-teal-300 transition-colors group">
            Explore all Solutions <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Column: Lists */}
        <div className="grid sm:grid-cols-2 gap-8">
          {/* Consumer Insights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-teal-500/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <ShoppingBag className="w-6 h-6 text-teal-400" />
              <h3 className="text-xl font-bold">Consumer Insights</h3>
            </div>
            <ul className="space-y-3">
              {consumerSolutions.map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-300 text-sm hover:text-white transition-colors cursor-pointer group">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 group-hover:scale-125 transition-transform" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Academia */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-teal-500/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-teal-400" />
              <h3 className="text-xl font-bold">Academia</h3>
            </div>
            <ul className="space-y-3">
              {academicSolutions.map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-300 text-sm hover:text-white transition-colors cursor-pointer group">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 group-hover:scale-125 transition-transform" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
