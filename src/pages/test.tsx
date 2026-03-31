/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const geometricRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const horizontalInnerRef = useRef<HTMLDivElement>(null);
  const triangleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    // Synchronize Lenis with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);

    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      // 1. Hero Section Animation
      gsap.to(heroImageRef.current, {
        scale: 1.2,
        y: 150,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(".hero-content", {
        opacity: 0,
        y: -150,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // 2. Vision Section Reveal
      gsap.from(".vision-text", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        }
      });

      // 3. Geometric Background Animation
      const geometricTl = gsap.timeline({
        scrollTrigger: {
          trigger: geometricRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      geometricTl.fromTo(".geo-circle", 
        { scale: 0.5, opacity: 0 }, 
        { scale: 1.5, opacity: 0.2, stagger: 0.2 }
      );

      // 4. Horizontal Process Section
      const sections = gsap.utils.toArray('.process-panel') as HTMLElement[];
      const horizontalTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          start: "top top",
          end: () => "+=" + (horizontalRef.current?.offsetWidth || 0) * 3,
        }
      });

      // Background parallax for horizontal section
      gsap.to(".horizontal-bg", {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: horizontalRef.current,
          start: "top top",
          end: () => "+=" + (horizontalRef.current?.offsetWidth || 0) * 3,
          scrub: true
        }
      });

      // Internal animations for horizontal panels using containerAnimation
      sections.forEach((section, i) => {
        const title = section.querySelector('h3');
        const desc = section.querySelector('p');
        const circle = section.querySelector('.process-circle');

        if (title) {
          gsap.from(title, {
            y: 100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              containerAnimation: horizontalTween,
              start: "left center",
              toggleActions: "play none none reverse"
            }
          });
        }

        if (desc) {
          gsap.from(desc, {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 0.2,
            scrollTrigger: {
              trigger: section,
              containerAnimation: horizontalTween,
              start: "left center",
              toggleActions: "play none none reverse"
            }
          });
        }

        if (circle) {
          gsap.fromTo(circle, 
            { scale: 0, opacity: 0 },
            { 
              scale: 1, 
              opacity: 0.1, 
              duration: 1.5,
              scrollTrigger: {
                trigger: section,
                containerAnimation: horizontalTween,
                start: "left center",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

      // 6. Marquee Animation
      gsap.to(".marquee-content", {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".marquee-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // 5. Triangle Section Animation
      gsap.fromTo(triangleRef.current, 
        { rotation: 0, scale: 0.8 },
        { 
          rotation: 360, 
          scale: 1.2,
          scrollTrigger: {
            trigger: ".triangle-section",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

      // 7. Guiding Principles Reveal
      gsap.from(".principle-item", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".principles-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-[#050505] text-white font-sans selection:bg-cyan-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-[100]">
        <div className="text-xl font-bold tracking-[0.3em]">AMATERASU</div>
        <div className="flex gap-8 text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
          <span>Vision</span>
          <div className="flex flex-col gap-1">
            <div className="w-4 h-px bg-white" />
            <div className="w-4 h-px bg-white" />
          </div>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section ref={heroRef} className="relative h-[120vh] overflow-hidden flex items-center justify-center">
        <div 
          ref={heroImageRef}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="hero-content relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-8 leading-[1.1]">
            Empower<br />your mental<br />health journey
          </h1>
          <button className="px-8 py-4 bg-white text-black rounded-full font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform">
            Start your journey
          </button>
        </div>
        <div className="absolute bottom-10 left-10 text-[10px] uppercase tracking-[0.4em] opacity-30 flex items-center gap-4">
          <span>Scroll to explore</span>
          <div className="w-12 h-px bg-white" />
        </div>
      </section>

      {/* 2. Vision Section */}
      <section ref={visionRef} className="h-screen flex items-center justify-center px-8 bg-white text-black">
        <div className="max-w-5xl text-center">
          <span className="text-xs uppercase tracking-[0.5em] opacity-30 mb-12 block">Vision</span>
          <h2 className="vision-text text-4xl md:text-6xl font-light leading-tight">
            We empower humanity with the tools, knowledge, and wisdom to face mental health challenges from a position of unprecedented resilience.
          </h2>
        </div>
      </section>

      {/* 3. Geometric Transition Section */}
      <section ref={geometricRef} className="relative h-[200vh] bg-[#050505] overflow-hidden">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle className="geo-circle" cx="50" cy="50" r="10" fill="none" stroke="cyan" strokeWidth="0.1" />
            <circle className="geo-circle" cx="50" cy="50" r="20" fill="none" stroke="cyan" strokeWidth="0.1" />
            <circle className="geo-circle" cx="50" cy="50" r="30" fill="none" stroke="cyan" strokeWidth="0.1" />
            <circle className="geo-circle" cx="50" cy="50" r="40" fill="none" stroke="cyan" strokeWidth="0.1" />
          </svg>
          <div className="relative z-10 text-center max-w-2xl px-8">
            <p className="text-2xl md:text-3xl font-light leading-relaxed opacity-80">
              Our minds are a deep reflection of nature, yet our internal world has driven too far from natural order.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Horizontal Process Section */}
      <div ref={horizontalRef} className="overflow-hidden bg-[#050505] relative">
        {/* Background Parallax Element */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="horizontal-bg w-[800vw] h-full bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] bg-[length:200vw_100%]" />
        </div>
        
        <div ref={horizontalInnerRef} className="flex h-screen w-[400vw] flex-nowrap relative z-10">
          <div className="process-panel w-screen h-full flex flex-col items-center justify-center p-20 relative">
            <div className="process-circle absolute inset-0 flex items-center justify-center opacity-5">
              <div className="w-[80vw] h-[80vw] border border-white rounded-full" />
            </div>
            <div className="z-10 text-center max-w-3xl">
              <span className="text-[10px] uppercase tracking-[0.5em] opacity-30 mb-8 block">Step 01</span>
              <h3 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter italic serif">Initial Assessment</h3>
              <p className="text-xl text-gray-400 font-light">Understanding the baseline of your mental landscape through deep neurological mapping.</p>
            </div>
          </div>
          
          <div className="process-panel w-screen h-full flex flex-col items-center justify-center p-20 bg-[#0a0a0a] relative">
            <div className="process-circle absolute inset-0 flex items-center justify-center opacity-5">
              <div className="w-[60vw] h-[60vw] border border-cyan-400 rounded-full" />
            </div>
            <div className="z-10 text-center max-w-3xl">
              <span className="text-[10px] uppercase tracking-[0.5em] opacity-30 mb-8 block">Step 02</span>
              <h3 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter italic serif">Evaluation</h3>
              <p className="text-xl text-gray-400 font-light">Deep diving into patterns and cognitive behaviors using advanced AI analytics.</p>
            </div>
          </div>

          <div className="process-panel w-screen h-full flex flex-col items-center justify-center p-20 bg-[#050505] relative">
            <div className="process-circle absolute inset-0 flex items-center justify-center opacity-5">
              <div className="w-[70vw] h-[70vw] border border-white rotate-45" />
            </div>
            <div className="z-10 text-center max-w-3xl">
              <span className="text-[10px] uppercase tracking-[0.5em] opacity-30 mb-8 block">Step 03</span>
              <h3 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter italic serif">Diagnostic</h3>
              <p className="text-xl text-gray-400 font-light">Mapping the holistic view of the mind to identify root causes of dissonance.</p>
            </div>
          </div>

          <div className="process-panel w-screen h-full flex flex-col items-center justify-center p-20 bg-[#0a0a0a] relative">
            <div className="process-circle absolute inset-0 flex items-center justify-center opacity-5">
              <div className="w-[50vw] h-[50vw] border-2 border-white rounded-full border-dashed" />
            </div>
            <div className="z-10 text-center max-w-3xl">
              <span className="text-[10px] uppercase tracking-[0.5em] opacity-30 mb-8 block">Step 04</span>
              <h3 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter italic serif">Treatment</h3>
              <p className="text-xl text-gray-400 font-light">Personalized care beyond linear treatment, focusing on neuroplasticity and growth.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4.5 Marquee Section */}
      <section className="marquee-section py-40 bg-white text-black overflow-hidden border-y border-black/10">
        <div className="marquee-content flex whitespace-nowrap text-[15vw] font-black leading-none tracking-tighter uppercase">
          <span className="px-10">Resilience</span>
          <span className="px-10 opacity-20">Resilience</span>
          <span className="px-10">Resilience</span>
          <span className="px-10 opacity-20">Resilience</span>
          <span className="px-10">Resilience</span>
          <span className="px-10 opacity-20">Resilience</span>
        </div>
      </section>

      {/* 5. Triangle Section */}
      <section className="triangle-section h-screen flex items-center justify-center bg-white text-black relative overflow-hidden">
        <div ref={triangleRef} className="w-96 h-96 relative z-10">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
            <polygon points="50,5 95,95 5,95" fill="none" stroke="black" strokeWidth="0.5" />
            <polygon points="50,15 85,85 15,85" fill="black" opacity="0.1" />
          </svg>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <h2 className="text-8xl md:text-[12rem] font-black opacity-[0.03] tracking-tighter">INNOVATION</h2>
        </div>
        <div className="absolute bottom-20 text-center px-4">
          <h4 className="text-2xl font-bold mb-2">Innovating the future</h4>
          <p className="text-gray-500 uppercase tracking-widest text-xs">Frontier Technologies</p>
        </div>
      </section>

      {/* 6. Guiding Principles */}
      <section className="principles-section py-40 bg-[#050505] px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-6xl md:text-8xl font-bold mb-12 tracking-tighter">Guiding Principles</h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
              Through the seamless integration of our 6 guiding principles, we set in motion our relentless culture, focus, and ethics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Resilience", desc: "Building mental fortitude that withstands the most extreme pressures of modern life." },
              { title: "Innovation", desc: "Pioneering new frontiers in neurotechnology and cognitive science." },
              { title: "Integrity", desc: "Upholding the highest ethical standards in mental health data and treatment." },
              { title: "Empathy", desc: "Understanding the human experience at its most vulnerable and profound levels." },
              { title: "Growth", desc: "Fostering continuous evolution of the self and the collective consciousness." },
              { title: "Harmony", desc: "Restoring the natural balance between the mind, body, and environment." }
            ].map((p, i) => (
              <div key={i} className="principle-item p-10 border border-white/10 rounded-3xl hover:bg-white/5 transition-colors group">
                <span className="text-[10px] uppercase tracking-[0.5em] opacity-30 mb-6 block">0{i + 1}</span>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{p.title}</h4>
                <p className="text-gray-500 font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10 opacity-50 text-xs uppercase tracking-widest">
        <div>© 2026 AMATERASU</div>
        <div className="flex gap-10">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Contact</span>
        </div>
      </footer>
    </div>
  );
}





