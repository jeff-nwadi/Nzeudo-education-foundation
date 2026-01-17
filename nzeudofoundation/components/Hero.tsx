"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      imageRef.current,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
    )
    .fromTo(
      ".hero-text-element", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" },
      "-=1" 
    );

    gsap.to(imageRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    })

  }, []);

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div ref={imageRef} className="relative w-full h-full">
            <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
            alt="Education Background"
            fill
            className="object-cover brightness-[0.70]"
            priority
            />
        </div>
      </div>

      {/* Content */}
      <div ref={textRef} className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="hero-text-element text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          Empowering <span className="text-blue-400">Futures</span>
        </h1>
        <p className="hero-text-element text-lg md:text-2xl max-w-2xl mx-auto mb-10 text-gray-200 font-light">
          Nzeudo Education Foundation is dedicated to bridging the gap in educational access and fostering academic excellence for every child.
        </p>
        <div className="hero-text-element flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-blue-900/20">
            Our Mission
          </button>
          <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full font-semibold text-lg transition-all">
            Apply for Scholarship
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
