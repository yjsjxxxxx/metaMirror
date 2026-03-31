/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col bg-[#0a1a2a] text-white overflow-hidden font-sans">
      {/* Background Silhouette & Glow */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1920&q=80"
          alt="Silhouette"
          className="w-full h-full object-cover opacity-70 mix-blend-luminosity grayscale contrast-125"
          referrerPolicy="no-referrer"
        />
        {/* Teal/Cyan Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(45,212,191,0.2)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a2a]/40 via-transparent to-[#0a1a2a]" />
        
        {/* Vertical Line/Light Beam */}
        <div className="absolute left-[57%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      {/* Header Navigation */}
      <header className="relative z-20 w-full px-12 py-10 flex justify-between items-start">
        <div className="w-1/3" />
        <div className="w-1/3 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[11px] tracking-[0.6em] uppercase font-bold"
          >
            AMATERASU
          </motion.div>
        </div>
        <div className="w-1/3 flex flex-col items-end gap-6">
          <div className="w-48 h-[1px] bg-white/10" />
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex items-center gap-10 cursor-pointer group"
          >
            <span className="text-[11px] tracking-[0.4em] uppercase font-bold text-white/70 group-hover:text-white transition-colors">Vision</span>
            <div className="grid grid-cols-3 gap-1.5">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-white rounded-full opacity-40" />
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-12 text-center -mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl"
        >
          <h1 className="text-2xl md:text-[5rem] font-light leading-[0.85] tracking-tight mb-16">
            Empower <br />
            your mental <br />
            health journey
          </h1>

          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 73, 223, 1)" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center gap-4 px-10 py-4 rounded-full bg-[#3b49df] shadow-[0_0_40px_rgba(59,73,223,0.3)] transition-all"
          >
            <div className="w-2 h-2 bg-white/40 rounded-full" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase">Start your journey</span>
          </motion.button>
        </motion.div>

        {/* Floating Dot on Right */}
        <div className="absolute right-32 top-1/2 -translate-y-1/2">
          <div className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full opacity-40" />
          </div>
        </div>
      </div>

      {/* Footer Elements */}
      <div className="relative z-20 w-full px-12 py-12 flex justify-between items-end">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex items-center gap-4"
        >
          <span className="text-[11px] tracking-[0.3em] uppercase font-bold text-white/40">Scroll to explore</span>
          <div className="flex flex-col items-center">
            <ChevronDown className="w-4 h-4 text-white/30 " />
          </div>
        </motion.div>

        <div className="flex flex-col items-end gap-10 max-w-sm">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-[12px] leading-relaxed text-white/50 text-right font-light tracking-wide"
          >
            Amaterasu is a physics cognition lab working at the intersection of technology and nature to transform mental health.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center transition-colors"
          >
            <ChevronDown className="w-6 h-6 text-white/40" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}


