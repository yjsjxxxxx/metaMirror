/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useState } from "react";

interface EntranceProps {
  onEnter: () => void;
}
export default function Entrance({ onEnter }: EntranceProps) {
  const centerX = 335;
  const centerY = 328;
  const [isHovered, setIsHovered] = useState(false);

  const outerCircles = [
    { cx: 336, cy: 123, key: 'circle-1', delay: 0.5 },
    { cx: 458, cy: 209, key: 'circle-2', delay: 0.6 },
    { cx: 549, cy: 328, key: 'circle-3', delay: 0.7 },
    { cx: 458, cy: 453, key: 'circle-4', delay: 0.8 },
    { cx: 336, cy: 532, key: 'circle-5', delay: 0.9 },
    { cx: 215, cy: 453, key: 'circle-6', delay: 1.0 },
    { cx: 123, cy: 328, key: 'circle-7', delay: 1.1 },
    { cx: 214, cy: 209, key: 'circle-8', delay: 1.2 },
  ];
  
  return (
    <div className="w-full  h-[90vh]   flex items-center justify-center bg-[#183969]  overflow-hidden">
      {/* Animated SVG Container */}
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
          className="w-full h-full drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        > 
          {outerCircles.map(({ cx, cy, key, delay }) => (
            <motion.circle
              key={key}
              r="122"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="1"
              initial={{
                cx: centerX,
                cy: centerY,
                opacity: 0
              }}
              animate={{
                cx: cx,
                cy: cy,
                opacity: 1
              }}
              transition={{
                duration: 2.5,
                delay: delay,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              whileHover={{ stroke: "rgba(255, 255, 255, 0.5)", strokeWidth: 1 }}
            />
          ))}
 
          <motion.circle
            cx={centerX}
            cy={centerY}
            r="140"
            fill="transparent"
            variants={{
              initial: {
                pathLength: 0,
                opacity: 0,
                scale: 0.8,
                stroke: "rgba(255, 255, 255, 0.9)",
                strokeWidth: 1.5,
                filter: "drop-shadow(0 0 20px rgba(255,255,255,0.3))"
              },
              animate: {
                pathLength: 1,
                opacity: 1,
                scale: isHovered ? 0.92 : 1,
                stroke: isHovered ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.9)",
                strokeWidth: isHovered ? 1 : 1.5,
                filter: isHovered
                  ? "drop-shadow(0 0 45px rgba(255,255,255,0.9))"
                  : "drop-shadow(0 0 20px rgba(255,255,255,0.3))"
              }
            }}
            initial="initial"
            animate="animate"
            transition={{
              pathLength: { duration: 1.5, ease: "easeOut" },
              opacity: { duration: 1.5, ease: "easeOut" },
              scale: { duration: 0.4, ease: "easeOut" },
              filter: { duration: 0.4 },
              strokeWidth: { duration: 0.3 },
              stroke: { duration: 0.3 }
            }}
            style={{ transformOrigin: `${centerX}px ${centerY}px` }}
            className="cursor-pointer pointer-events-none"
          />
        </motion.svg> 
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"> 
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onEnter}
            className="pointer-events-auto w-[280px] h-[280px] rounded-full cursor-pointer flex items-center justify-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                scale: isHovered ? 0.92 : 1,
                letterSpacing: '0.3em',
                color: isHovered ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.7)"
              }}
              transition={{
                opacity: { delay: 1.8, duration: 1 },
                scale: { duration: 0.4, ease: "easeOut" },
                letterSpacing: { duration: 0.4, ease: "easeOut" },
                color: { duration: 0.3 }
              }}
              className="text-white text-[11px] font-bold uppercase"
            >
              Click to Enter
            </motion.span>
          </div>
        </div>
      </motion.div>
    
    </div>
  );
}
