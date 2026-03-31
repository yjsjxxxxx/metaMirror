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

    // Mouse follow effect for hero image
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !heroImageRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate normalized position (-1 to 1)
      const xPos = (clientX / innerWidth) - 0.5;
      const yPos = (clientY / innerHeight) - 0.5;

      gsap.to(heroImageRef.current, {
        duration: 1.2,
        x: xPos * 20,
        rotationY: xPos * 8,
        rotationX: -yPos * 8,
        ease: "power2.out",
        overwrite: "auto"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const ctx = gsap.context(() => {
      // 0. Entrance Animation
      const entranceTl = gsap.timeline({ delay: 0.5 });

      entranceTl.fromTo(heroImageRef.current,
        { scale: 1 },
        {
          scale: 1.1,
          duration: 3,
          ease: "power2.out"
        }, 0)
        .from(".hero-line span", {
          y: "100%",
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.15
        }, 0.5)
        .from(".hero-cta", {
          opacity: 0,
          y: 20,
          duration: 1,
          ease: "power3.out"
        }, "-=0.8")
        .from("nav", {
          y: -20,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        }, "-=1")
        .from(".hero-scroll-hint, .hero-description", {
          opacity: 1,
          duration: 1,
        }, "-=0.5");

      // Global Scroll Progress
      gsap.to(".progress-bar", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3
        }
      });

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

      // Hide/Show Back to Top button based on scroll
      gsap.fromTo(".back-to-top",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: "body",
            start: "100px top",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 2. Vision Section Reveal
      gsap.from(".vision-line", {
        y: 40,
        opacity: 0,
        filter: "blur(15px)",
        duration: 1.5,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 70%",
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
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-[#050505] text-white font-sans selection:bg-cyan-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed  top-20 left-0 z-20 w-full h-[85vh] p-8 flex justify-between items-center">
        <div className="absolute left-1/2 top-5 -translate-x-1/2 text-sm font-bold tracking-[0.5em] uppercase opacity-80">AMATERASU</div>
        {/* Scroll Progress Bar */}
        <div className="absolute top-5 right-5  w-[300px] h-1 origin-left bg-[#2b2b2b]">
          <div className="progress-bar h-full bg-white w-full scale-x-0 origin-left" />
        </div>
      </nav>
      {/* Bottom Left: Scroll to explore */}
      <div className="hero-scroll-hint fixed z-20 bottom-10 left-10 text-[10px] uppercase tracking-[0.4em]  flex items-center gap-4">
        <span>Scroll to explore</span>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 1V9M5 9L1 5M5 9L9 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {/* Floating Back to Top */}
      <div className='w-20 h-20 border border-white rounded-full fixed bottom-10 right-24 z-20'>  </div>
      {/* 1. Hero Section */}
      <section ref={heroRef} className="relative h-[120vh]  overflow-hidden " style={{ perspective: '1000px' }}>
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
        <div className="hero-content relative z-10 text-center px-4 max-w-4xl mt-36 flex flex-col items-end">
          <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-12 leading-[1.1] flex flex-col items-end">
            <div className="hero-line overflow-hidden">
              <span className="inline-block">Empower</span>
            </div>
            <div className="hero-line overflow-hidden">
              <span className="inline-block">your mental</span>
            </div>
            <div className="hero-line overflow-hidden">
              <span className="inline-block">health journey</span>
            </div>
          </h1>
          <button className=" group relative px-10 py-4 bg-indigo-600/80 backdrop-blur-md text-white rounded-full font-bold text-xs tracking-widest uppercase hover:bg-indigo-600 transition-all overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              Start your journey
            </span>
          </button>
        </div>



        {/* Bottom Right: Description Text */}
        <div className="hero-description absolute bottom-[42%] right-24 max-w-[280px] text-right hidden md:block">
          <p className="text-[16px] leading-relaxed tracking-wide text-white  font-bold">
            Amaterasu is a physics cognition lab working at the intersection of technology and nature to transform mental health.
          </p>
        </div>
      </section>

      {/* 2. Vision Section */}
      <section ref={visionRef} className=" h-screen flex items-center justify-center px-8 bg-white text-black">
        <div className="max-w-5xl text-center">
          <span className="text-xs uppercase tracking-[0.5em] opacity-30 mb-12 block">Vision</span>
          <h2 className="text-4xl md:text-6xl font-light leading-tight">
            <span className="vision-line block">We empower humanity with the tools,</span>
            <span className="vision-line block">knowledge, and wisdom to face mental health</span>
            <span className="vision-line block">challenges from a position of unprecedented resilience.</span>
          </h2>
        </div>
      </section>

      {/* 3. Geometric Transition Section */}
      <section ref={geometricRef} className="relative h-[200vh] bg-[#050505] rounded-full overflow-hidden">
        {/* <svg
          viewBox="0 0 2466 3440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="nature-svg w-full h-full"
          data-v-e0dc1385=""
        >
          <circle
            className="c-1"
            cx="889.27"
            cy="2617.27"
            r="35.77"
            stroke="currentColor"
            vectorEffect="non-scaling-stroke"
            data-svg-origin="889.2700004577637 2617.2700004577637"
            transform="matrix(1,0,0,1,-0.26895,-0.27015)"
            style={{ translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px' }}
          />
          <circle
            className="c-2"
            cx="852.65"
            cy="2642.65"
            r="97.15"
            stroke="currentColor"
            vectorEffect="non-scaling-stroke"
            data-svg-origin="852.6499404907227 2642.650245666504"
            transform="matrix(1,0,0,1,-0.24786,0.34918)"
            style={{ translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px' }}
          />
          <circle
            className="c-3"
            cx="888.5"
            cy="2642.5"
            r="61"
            stroke="currentColor"
            vectorEffect="non-scaling-stroke"
            data-svg-origin="888.5 2642.5"
            transform="matrix(1,0,0,1,0.4999,-0.50011)"
            style={{ translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px' }}
          />
          <circle
            className="c-4"
            cx="854.215"
            cy="2577.22"
            r="162.715"
            stroke="currentColor"
            vectorEffect="non-scaling-stroke"
            data-svg-origin="854.2149963378906 2577.2198791503906"
            transform="matrix(1,0,0,1,-0.21489,-0.22016)"
            style={{ translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px' }}
          />
          <circle
            className="c-5"
            cx="960.235"
            cy="2577.24"
            r="268.735"
            stroke="currentColor"
            vectorEffect="non-scaling-stroke"
            data-svg-origin="960.2350158691406 2577.2398986816406"
            transform="matrix(1,0,0,1,0.76493,-0.4595)"
            style={{ translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px' }}
          />
          <circle
            className="c-6"
            cx="960.5"
            cy="2742.5"
            r="434"
            stroke="currentColor"
            vectorEffect="non-scaling-stroke"
            data-svg-origin="960.5 2742.5"
            transform="matrix(1,0,0,1,0.42065,0.49894)"
            style={{ translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px' }}
          />
          <circle
            className="c-7"
            cx="697.5"
            cy="2742.5"
            r="697"
            stroke="currentColor"
            vectorEffect="non-scaling-stroke"
            data-svg-origin="697.5 2742.5"
            transform="matrix(1,0,0,1,0.18691,0.4984)"
            style={{ translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px' }}
          />
          <circle
            className="c-8"
            cx="1350"
            cy="1116"
            r="1115.5"
            stroke="currentColor"
            vectorEffect="non-scaling-stroke"
            data-svg-origin="1350 1116"
            transform="matrix(1,0,0,1,0.0001,-1.11987)"
            style={{ translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px' }}
          />
          <g className="paths">
            <path
              className="p-1"
              d="M1196 3119C1318.33 2997.33 1523.35 2680.53 1303 2419C1094.06 2171 836.494 2367.58 789.001 2469C711.5 2634.5 931.501 2756.5 889.001 2617"
              stroke="#24FF00"
            />
            <path
              className="p-2"
              d="M1360.4 2537C1353.4 2441.67 1283.15 2261.55 1057.91 2276.92C808.915 2293.92 805.402 2529 852.402 2643"
              stroke="#00FF38"
            />
            <path
              className="p-3"
              d="M683 2580C667.667 2630.67 661.2 2743.6 754 2778C920 2839.53 1006 2656 889 2642"
              stroke="#00FF38"
            />
            <path
              className="p-4"
              d="M659 3221C840.5 3345 1239 3471.8 1381 2975C1459.46 2700.5 1043 2404 854 2577"
              stroke="#00FF38"
            />
            <path
              className="p-5"
              d="M1163 2764.78C1206 2724.78 1251 2620.78 1175 2555.78C1093.69 2486.24 1003 2531.78 961 2576.78"
              stroke="#00FF38"
            />
            <path
              className="p-6"
              d="M81.921 2905C67.9211 3007.5 122.584 3329.5 509.922 3329.5C732.922 3329.5 914.421 2980 960.921 2743"
              stroke="#00FF38"
            />
            <path
              className="p-7"
              d="M447.688 2343C320.688 2385.5 153.182 2553 287.688 2735C427.366 2924 632.687 2837 697.687 2743"
              stroke="#00FF38"
            />
            <path
              className="p-8"
              d="M1794 2504.88C2144 2452.88 2500 2114.88 2326 1572.88C2152 1030.88 1677 1037.5 1350 1114.88"
              stroke="#24FF00"
            />
          </g>
        </svg> */}
        {/* <svg
          viewBox="0 0 2466 3440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full  absolute top-0 left-0"
          data-v-e0dc1385=""
        >
          <circle
            className="c-1"
            cx="889.27"
            cy="2617.27"
            r="35.77"
            stroke="currentcolor"
            vectorEffect="non-scaling-stroke"
            data-svg-origin="889.2700004577637 2617.2700004577637"
            transform="matrix(1,0,0,1,306.73025,501.7298)"
            style={{ translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px' }}
          />
          <circle
            className="c-2"
            cx="852.65"
            cy="2642.65"
            r="97.15"
            stroke="currentcolor"
            vectorEffect="non-scaling-stroke"
            data-svg-origin="852.6499404907227 2642.650245666504"
            transform="matrix(1,0,0,1,507.7496,-105.65063)"
            style={{ translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px' }}
          />
          <circle
            className="c-3"
            cx="888.5"
            cy="2642.5"
            r="61"
            stroke="currentcolor"
            vectorEffect="non-scaling-stroke"
            data-svg-origin="888.5 2642.5"
            transform="matrix(1,0,0,1,-205.50005,-62.50011)"
            style={{ translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px' }}
          />
          <circle
            className="c-4"
            cx="854.215"
            cy="2577.22"
            r="162.715"
            stroke="currentcolor"
            vectorEffect="non-scaling-stroke"
            data-svg-origin="854.2149963378906 2577.2198791503906"
            transform="matrix(1,0,0,1,-195.21501,643.77868)"
            style={{ translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px' }}
          />
          <circle
            className="c-5"
            cx="960.235"
            cy="2577.24"
            r="268.735"
            stroke="currentcolor"
            vectorEffect="non-scaling-stroke"
            data-svg-origin="960.2350158691406 2577.2398986816406"
            transform="matrix(1,0,0,1,202.76506,187.54112)"
            style={{ translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px' }}
          />
          <circle
            className="c-6"
            cx="960.5"
            cy="2742.5"
            r="434"
            stroke="currentcolor"
            vectorEffect="non-scaling-stroke"
            data-svg-origin="960.5 2742.5"
            transform="matrix(1,0,0,1,-878.57916,162.49865)"
            style={{ translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px' }}
          />
          <circle
            className="c-7"
            cx="697.5"
            cy="2742.5"
            r="697"
            stroke="currentcolor"
            vectorEffect="non-scaling-stroke"
            data-svg-origin="697.5 2742.5"
            transform="matrix(1,0,0,1,-249.81204,-399.50088)"
            style={{ translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px' }}
          />
          <circle
            className="c-8"
            cx="1350"
            cy="1116"
            r="1115.5"
            stroke="currentcolor"
            vectorEffect="non-scaling-stroke"
            data-svg-origin="1350 1116"
            transform="matrix(1,0,0,1,443.99925,1388.87999)"
            style={{ translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px' }}
          />
          <g className="paths">
            <path
              className="p-1"
              d="M1196 3119C1318.33 2997.33 1523.35 2680.53 1303 2419C1094.06 2171 836.494 2367.58 789.001 2469C711.5 2634.5 931.501 2756.5 889.001 2617"
              stroke="#24FF00"
            />
            <path
              className="p-2"
              d="M1360.4 2537C1353.4 2441.67 1283.15 2261.55 1057.91 2276.92C808.915 2293.92 805.402 2529 852.402 2643"
              stroke="#00FF38"
            />
            <path
              className="p-3"
              d="M683 2580C667.667 2630.67 661.2 2743.6 754 2778C920 2839.53 1006 2656 889 2642"
              stroke="#00FF38"
            />
            <path
              className="p-4"
              d="M659 3221C840.5 3345 1239 3471.8 1381 2975C1459.46 2700.5 1043 2404 854 2577"
              stroke="#00FF38"
            />
            <path
              className="p-5"
              d="M1163 2764.78C1206 2724.78 1251 2620.78 1175 2555.78C1093.69 2486.24 1003 2531.78 961 2576.78"
              stroke="#00FF38"
            />
            <path
              className="p-6"
              d="M81.921 2905C67.9211 3007.5 122.584 3329.5 509.922 3329.5C732.922 3329.5 914.421 2980 960.921 2743"
              stroke="#00FF38"
            />
            <path
              className="p-7"
              d="M447.688 2343C320.688 2385.5 153.182 2553 287.688 2735C427.366 2924 632.687 2837 697.687 2743"
              stroke="#00FF38"
            />
            <path
              className="p-8"
              d="M1794 2504.88C2144 2452.88 2500 2114.88 2326 1572.88C2152 1030.88 1677 1037.5 1350 1114.88"
              stroke="#24FF00"
            />
          </g>
        </svg> */}
        <div className="h-[70vh] aspect-square text-red-500 flex items-center justify-center relative float-right">
          <div className="label  text-white" style={{ opacity: 1, visibility: 'inherit' }}>
            Human
          </div>

          {/* <svg
            viewBox="0 0 293 293"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full" 
          >
            <path
              stroke="currentcolor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m219.07.5c-40.24,0-72.86,32.62-72.86,72.86s32.62,72.86,72.86,72.86,72.86,32.62,72.86,72.86-32.62,72.86-72.86,72.86-72.86-32.62-72.86-72.86-32.62-72.86-72.86-72.86c-40.24,0-72.86,32.62-72.86,72.86s32.62,72.86,72.86,72.86,72.86-32.62,72.86-72.86-32.62-72.86-72.86-72.86S.5,113.6.5,73.36,33.12.5,73.36.5s72.86,32.62,72.86,72.86,32.62,72.86,72.86,72.86,72.86-32.62,72.86-72.86c0-40.24-32.62-72.86-72.86-72.86"
              style={{ strokeDashoffset: '-660.229', strokeDasharray: '366.285px, 1465.24px' }}
            />
            <path
              stroke="currentcolor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m219.07.5c-40.24,0-72.86,32.62-72.86,72.86s32.62,72.86,72.86,72.86,72.86,32.62,72.86,72.86-32.62,72.86-72.86,72.86-72.86-32.62-72.86-72.86-32.62-72.86-72.86-72.86c-40.24,0-72.86,32.62-72.86,72.86s32.62,72.86,72.86,72.86,72.86-32.62,72.86-72.86-32.62-72.86-72.86-72.86S.5,113.6.5,73.36,33.12.5,73.36.5s72.86,32.62,72.86,72.86,32.62,72.86,72.86,72.86,72.86-32.62,72.86-72.86c0-40.24-32.62-72.86-72.86-72.86"
              style={{ strokeDashoffset: '-660.229', strokeDasharray: '366.285px, 1465.24px' }}
            />
          </svg> */}

          <svg
            viewBox="0 0 672 655"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <circle cx="336" cy="123" r="122" stroke="currentcolor" style={{ opacity: 1, visibility: 'inherit' }} />
            <circle cx="458" cy="209" r="122" stroke="currentcolor" style={{ opacity: 1, visibility: 'inherit' }} />
            <circle cx="549" cy="328" r="122" stroke="currentcolor" style={{ opacity: 1, visibility: 'inherit' }} />
            <circle cx="458" cy="453" r="122" stroke="currentcolor" style={{ opacity: 1, visibility: 'inherit' }} />
            <circle cx="336" cy="532" r="122" stroke="currentcolor" style={{ opacity: 1, visibility: 'inherit' }} />
            <circle cx="215" cy="453" r="122" stroke="currentcolor" style={{ opacity: 1, visibility: 'inherit' }} />
            <circle cx="123" cy="328" r="122" stroke="currentcolor" style={{ opacity: 1, visibility: 'inherit' }} />
            <circle cx="214" cy="209" r="122" stroke="currentcolor" style={{ opacity: 1, visibility: 'inherit' }} />
            <circle cx="335" cy="328" r="122" stroke="currentcolor" style={{ opacity: 1, visibility: 'inherit' }} />
          </svg>
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





