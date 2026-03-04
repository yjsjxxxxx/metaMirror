import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold mb-6">
              New: iMotions 11 is here
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
              We Power <span className="text-teal-500">Human Insight</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Collect and analyze human behavior data through eye tracking, galvanic skin response, facial expression analysis, EEG, EMG, and ECG on one convenient platform.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                Book a Demo <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                <PlayCircle className="w-5 h-5" /> How does it work?
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Hero Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 md:mt-24 relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white aspect-video group"
        >
           <div className="absolute inset-0 bg-slate-100 flex items-center justify-center overflow-hidden">
              <img 
                src="https://picsum.photos/seed/imotions_lab_v2/1200/675" 
                alt="iMotions Lab Interface" 
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating UI Elements */}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute top-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-200 w-64 hidden md:block"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-xs">ET</div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">Eye Tracking</div>
                    <div className="text-[10px] text-slate-500">Gaze Plot Analysis</div>
                  </div>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-500 w-3/4"></div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-200 w-64 hidden md:block"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">GSR</div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">Galvanic Skin Response</div>
                    <div className="text-[10px] text-slate-500">Emotional Arousal</div>
                  </div>
                </div>
                <div className="flex items-end gap-1 h-8">
                  <div className="w-1/5 bg-indigo-200 h-1/3 rounded-t-sm"></div>
                  <div className="w-1/5 bg-indigo-300 h-2/3 rounded-t-sm"></div>
                  <div className="w-1/5 bg-indigo-500 h-full rounded-t-sm"></div>
                  <div className="w-1/5 bg-indigo-300 h-1/2 rounded-t-sm"></div>
                  <div className="w-1/5 bg-indigo-200 h-1/4 rounded-t-sm"></div>
                </div>
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-8 pointer-events-none">
                <div className="text-white">
                  <p className="font-mono text-xs opacity-80 mb-1 uppercase tracking-widest">iMotions Lab Interface</p>
                  <p className="font-bold text-xl md:text-2xl">Multi-modal Data Synchronization</p>
                </div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
