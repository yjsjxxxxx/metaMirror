import React from 'react';
import { motion } from 'motion/react';
import { Eye, Brain, Activity, Mic, Video, Monitor, Heart, Smile } from 'lucide-react';
import { Section } from './ui/Section';

const products = [
  { name: 'Eye Tracking', icon: Eye, description: 'Screen Based' },
  { name: 'Eye Tracking VR', icon: Monitor, description: 'Virtual and mixed reality' },
  { name: 'Eye Tracking Glasses', icon: Eye, description: 'Wearable eye tracking' },
  { name: 'EDA / GSR', icon: Activity, description: 'Electrodermal Activity' },
  { name: 'EMG', icon: Activity, description: 'Electromyography' },
  { name: 'Respiration', icon: Activity, description: 'Measure breathing' },
  { name: 'EEG', icon: Brain, description: 'Electroencephalography' },
  { name: 'fNIRS', icon: Brain, description: 'Brain activity via blood oxygen' },
  { name: 'ECG', icon: Heart, description: 'Electrocardiogram' },
  { name: 'Motion Capture', icon: Video, description: 'Body kinematics via video' },
  { name: 'Facial Expression', icon: Smile, description: 'Analysis via webcam' },
  { name: 'Voice Analysis', icon: Mic, description: 'Emotion and Voice Characteristics' },
];

export function Products() {
  return (
    <Section className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          iMotions Software Products
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Full-scale human behavior research solutions. Integrate virtually any biosensor technology to provide the most robust data and insights available.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-teal-100 transition-all duration-300 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 group-hover:bg-teal-50 group-hover:border-teal-200 transition-colors">
              <product.icon className="w-6 h-6 text-slate-600 group-hover:text-teal-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-slate-500 group-hover:text-slate-600">
              {product.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
