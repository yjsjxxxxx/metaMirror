/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function App() {
  const centerX = 335;
  const centerY = 328;

  const circles = [
    { cx: 336, cy: 123, key: 'circle-1', delay: 0.5 },
    { cx: 458, cy: 209, key: 'circle-2', delay: 0.6 },
    { cx: 549, cy: 328, key: 'circle-3', delay: 0.7 },
    { cx: 458, cy: 453, key: 'circle-4', delay: 0.8 },
    { cx: 336, cy: 532, key: 'circle-5', delay: 0.9 },
    { cx: 215, cy: 453, key: 'circle-6', delay: 1.0 },
    { cx: 123, cy: 328, key: 'circle-7', delay: 1.1 },
    { cx: 214, cy: 209, key: 'circle-8', delay: 1.2 },
    { cx: centerX, cy: centerY, key: 'circle-9', delay: 0 }, // Center circle starts first
  ];

  return (
    <div className="w-full  h-[90vh] relative top-20  flex items-center justify-center bg-[#183969]  overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className=" absolute top-0 z-10 h-full  aspect-square flex items-center justify-center"
      >
        <motion.svg 
          viewBox="0 0 672 655" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          {circles.map(({ cx, cy, key, delay }) => (
            <motion.circle 
              key={key}
              r="122" 
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="1"
              initial={{ 
                cx: centerX, 
                cy: centerY, 
                pathLength: 1, 
                opacity: 0 
              }}
              animate={{ 
                cx: cx, 
                cy: cy, 
                pathLength: 1, 
                opacity: 1 
              }}
              transition={{ 
                duration: 2.5, 
                delay: delay, 
                ease: [0.34, 1.56, 0.64, 1] // Custom spring-like ease for the "bloom"
              }}
              whileHover={{ stroke: "rgba(255, 255, 255, 0.8)", strokeWidth: 2 }}
            />
          ))}
        </motion.svg>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute w-full h-full inset-0 flex items-center justify-center pointer-events-none text-white uppercase"
        >
          <div className="h-[40%] aspect-square rounded-full  border border-[red]"></div>
          Click to Enter 
          {/* <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="pointer-events-auto px-8 py-3 rounded-full border border-white/20 bg-transparent text-white text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300 backdrop-blur-sm"
          >
            Click to Enter
          </motion.button> */}
        </motion.div>
      </motion.div>
    </div>
  );
}
